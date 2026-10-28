/* Subject packages are verified and saved before any script is executed.
   Failed downloads can be retried without appending duplicate questions. */
(() => {
  const CACHE = 'jamb-content-v1';
  let manifest;
  let active = false;
  const loaded = new Set();
  let savedSubjects = new Set();
  const executed = new Set();
  const base = new URL('./', document.baseURI);
  const urlFor = file => new URL(file, base).href;
  let cachePromise;
  const cache = () => cachePromise ||= ('caches' in window ? caches.open(CACHE).catch(() => null) : Promise.resolve(null));
  async function request(url) {
    const controller = new AbortController();
    // Allow slow mobile networks up to 45 seconds per content file, including body download.
    const timer = setTimeout(() => controller.abort(), 45000);
    try {
      const response = await fetch(url, { signal: controller.signal, cache: 'no-cache' });
      if (!response.ok) throw new Error('Content unavailable');
      // Include body download in the timeout, not just receipt of headers.
      return new Response(await response.arrayBuffer(), { headers: response.headers });
    } finally { clearTimeout(timer); }
  }
  function dialog() {
    let node = document.getElementById('contentLoading');
    if (node) return node;
    node = document.createElement('div');
    node.id = 'contentLoading';
    node.className = 'content-loading';
    node.hidden = true;
    node.innerHTML = '<section role="dialog" aria-modal="true" aria-labelledby="contentLoadingTitle" tabindex="-1"><h2 id="contentLoadingTitle"></h2><p class="content-loading-status" role="status" aria-live="polite"></p><progress aria-label="Preparation progress"></progress><div class="content-loading-actions"><button type="button" data-retry>Try again</button><button type="button" data-close>Choose something else</button></div></section>';
    document.body.append(node);
    // Keep keyboard focus in the preparation dialog while the page is blocked.
    node.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      const buttons = [...node.querySelectorAll('button')].filter(b => !b.parentElement.hidden);
      if (!buttons.length) { event.preventDefault(); return; }
      if (event.shiftKey && (document.activeElement === buttons[0] || document.activeElement.tagName === 'SECTION')) {
        event.preventDefault(); buttons.at(-1).focus();
      } else if (!event.shiftKey && document.activeElement === buttons.at(-1)) {
        event.preventDefault(); buttons[0].focus();
      }
    });
    return node;
  }
  function progress(done, total) {
    const node = dialog();
    node.querySelector('progress').max = Math.max(total, 1);
    node.querySelector('progress').value = done;
    node.querySelector('[role="status"]').textContent = total ? `${done} of ${total} files prepared` : 'Checking saved content…';
  }
  async function run(label, task) {
    if (active) return false;
    active = true;
    const node = dialog();
    const previousFocus = document.activeElement;
    let timer;
    const show = () => {
      node.hidden = false;
      node.querySelector('section').focus();
    };
    node.querySelector('h2').textContent = label;
    node.querySelector('.content-loading-actions').hidden = true;
    progress(0, 0);
    // Cached packages need no flashing overlay.
    timer = setTimeout(show, 180);
    try {
      while (true) {
        try { await task(); return true; }
        catch (err) {
          clearTimeout(timer);
          show();
          node.querySelector('[role="status"]').textContent = err.code === 'INTEGRITY'
            ? 'This content could not be verified. Reload the app to check for an updated version, or choose other saved content.'
            : 'Still preparing — check your connection and try again, or choose content already saved on this device.';
          node.querySelector('progress').removeAttribute('value');
          node.querySelector('.content-loading-actions').hidden = false;
          const retry = node.querySelector('[data-retry]');
          retry.textContent = err.code === 'INTEGRITY' ? 'Reload app' : 'Try again';
          retry.focus();
          const again = await new Promise(resolve => {
            retry.onclick = () => { if (err.code === 'INTEGRITY') location.reload(); else resolve(true); };
            node.querySelector('[data-close]').onclick = () => resolve(false);
          });
          retry.onclick = node.querySelector('[data-close]').onclick = null;
          if (!again) return false;
          node.querySelector('.content-loading-actions').hidden = true;
          progress(0, 0);
        }
      }
    } finally {
      clearTimeout(timer);
      node.hidden = true;
      active = false;
      if (previousFocus?.isConnected) previousFocus.focus();
    }
  }
  async function refreshSaved() {
    const next = new Set();
    if (manifest) {
      try {
        const storage = await cache();
        const urls = new Set(storage ? (await storage.keys()).map(req => req.url) : []);
        const shell = await caches.open('jamb-app-v2');
        const shellUrls = new Set((await shell.keys()).map(req => req.url));
        const shellFiles = ['index.html', 'content-manifest.json', 'styles.css', ...[...document.scripts]
          .map(script => script.getAttribute('src')).filter(src => src && new URL(src, base).origin === base.origin && !src.startsWith('blob:'))];
        const shellReady = shellFiles.every(file => shellUrls.has(urlFor(file)));
        for (const [subject, pkg] of Object.entries(manifest.subjects)) {
          if (shellReady && [...pkg.scripts, ...pkg.images].every(file => urls.has(urlFor(file) + '?content=' + manifest.files[file].sha256))
            && pkg.images.every(file => urls.has(urlFor(file)))) next.add(subject);
        }
      } catch (_) { /* Missing or inaccessible storage cannot prove offline readiness. */ }
    }
    savedSubjects = next;
    window.dispatchEvent(new Event('jamb-offline-status'));
    return [...next];
  }
  async function ready() {
    if (manifest) return manifest;
    const storage = await cache();
    let response;
    try { response = await request(urlFor('content-manifest.json')); }
    catch (err) { response = await storage?.match(urlFor('content-manifest.json')); if (!response) throw err; }
    const data = await response.clone().json();
    if (data.schema !== 1 || !data.subjects || !data.files) throw new Error('Invalid content manifest');
    // Restrict manifest entries to this app's own files.
    for (const [file, entry] of Object.entries(data.files)) {
      if (!/^(past-questions|teach|booklet)\/[a-zA-Z0-9_./-]+$/.test(file)
        || file.includes('..') || !/^[a-f0-9]{64}$/.test(entry.sha256)) throw new Error('Invalid content path');
    }
    try { await storage?.put(urlFor('content-manifest.json'), response); } catch (_) { /* Online use still works. */ }
    manifest = data;
    await refreshSaved();
    return data;
  }
  async function verified(response, expected) {
    const data = await response.arrayBuffer();
    const hash = [...new Uint8Array(await crypto.subtle.digest('SHA-256', data))].map(b => b.toString(16).padStart(2, '0')).join('');
    if (hash !== expected) { const err = new Error('Content could not be verified'); err.code = 'INTEGRITY'; throw err; }
    return data;
  }
  function execute(file, bytes) {
    return new Promise((resolve, reject) => {
      const src = URL.createObjectURL(new Blob([bytes], { type: 'application/javascript' }));
      const script = document.createElement('script');
      let failure;
      const onError = event => { if (event.filename === src) failure = event.error || new Error('Content could not be opened'); };
      window.addEventListener('error', onError);
      script.onload = () => { cleanup(); failure ? reject(failure) : resolve(); };
      script.onerror = () => { cleanup(); reject(new Error('Content could not be opened')); };
      const cleanup = () => { window.removeEventListener('error', onError); script.remove(); URL.revokeObjectURL(src); };
      script.src = src;
      document.head.append(script);
    });
  }
  async function ensure(subjects) {
    const data = await ready();
    const pending = [...new Set(subjects)].filter(s => !loaded.has(s));
    if (!pending.length) return;
    const files = [...new Set(pending.flatMap(subject => {
      const pkg = data.subjects[subject];
      if (!pkg) throw new Error('Unknown subject');
      return [...pkg.scripts, ...pkg.images];
    }))].filter(file => !executed.has(file));
    const storage = await cache();
    const bytes = new Map();
    let done = 0, cursor = 0, error, saved = !!storage;
    progress(0, files.length);
    // Limit concurrent downloads on slow mobile connections.
    await Promise.all(Array.from({ length: Math.min(4, files.length) }, async () => {
      while (!error && cursor < files.length) {
        const file = files[cursor++];
        try {
          const info = data.files[file];
          const versioned = urlFor(file) + '?content=' + info.sha256;
          let body;
          let hit;
          try { hit = await storage?.match(versioned); } catch (_) { saved = false; }
          if (hit) {
            try { body = await verified(hit, info.sha256); }
            catch (_) { await storage.delete(versioned); }
          }
          if (!body && storage && await caches.has('jamb-app-v1')) {
            // Reuse already downloaded papers from the previous app version.
            // Never discard the legacy cache or trust bytes without checking.
            const legacy = await (await caches.open('jamb-app-v1')).match(urlFor(file));
            if (legacy) { try { body = await verified(legacy, info.sha256); } catch (_) {} }
            if (body && storage) { try { await storage.put(versioned, new Response(body)); } catch (_) { saved = false; } }
          }
          if (!body) {
            body = await verified(await request(versioned), info.sha256);
            try { if (storage) await storage.put(versioned, new Response(body)); } catch (_) { saved = false; }
          }
          bytes.set(file, body);
          progress(++done, files.length);
        } catch (err) { error = err; }
      }
    }));
    if (error) throw error;
    // Snapshot bank and shared lookup tables so an execution failure is retryable.
    const banks = Object.fromEntries(pending.map(s => [s, QUESTION_BANK[s]]));
    const lookups = ['TEACH_ME', 'TEACH_TOPICS', 'BOOKLET_ERRORS'];
    const previous = Object.fromEntries(lookups.map(k => [k, window[k] ? { ...window[k] } : undefined]));
    const newlyExecuted = [];
    try {
      for (const subject of pending) for (const file of data.subjects[subject].scripts) {
        if (executed.has(file)) continue;
        await execute(file, bytes.get(file));
        executed.add(file); newlyExecuted.push(file);
      }
    } catch (err) {
      for (const subject of pending) QUESTION_BANK[subject] = banks[subject];
      for (const key of lookups) window[key] = previous[key];
      newlyExecuted.forEach(file => executed.delete(file));
      throw err;
    }
    // Bare diagram URLs are used by existing questions; publish their offline
    // copies only after the whole package has downloaded and verified.
    for (const subject of pending) for (const file of data.subjects[subject].images) {
      try { if (storage) await storage.put(urlFor(file), new Response(bytes.get(file), { headers: { 'Content-Type': file.endsWith('.svg') ? 'image/svg+xml' : 'image/png' } })); } catch (_) { saved = false; }
    }
    pending.forEach(s => loaded.add(s));
    window.dispatchEvent(new CustomEvent('jamb-content-loaded', { detail: { subjects: pending, saved } }));
    await refreshSaved();
    if (!saved) {
      let note = document.getElementById('contentStorageNotice');
      if (!note) { note = document.createElement('p'); note.id = 'contentStorageNotice'; note.setAttribute('role', 'status'); document.body.append(note); }
      note.textContent = 'Ready for this visit. Your browser could not save all of this content for offline use.';
    }
  }
  for (const event of ['focus', 'online', 'offline']) window.addEventListener(event, () => { void refreshSaved(); });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) void refreshSaved(); });
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(() => refreshSaved()).catch(() => {});
    navigator.serviceWorker.addEventListener('controllerchange', () => { void refreshSaved(); });
  }
  window.JambContent = { ready, ensure, run, refreshSaved, isSaved: subject => savedSubjects.has(subject), get manifest() { return manifest; }, isLoaded: subject => loaded.has(subject) };
})();
