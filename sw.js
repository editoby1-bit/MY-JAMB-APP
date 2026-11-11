// Cache only the app shell at install. Subject packages are saved by
// content-loader.js after integrity checks; keep them across shell updates.
const CACHE = 'jamb-app-v6-preview-recovery';
const CONTENT_CACHE = 'jamb-content-v1';
const FONT_CACHE = 'jamb-fonts-v1';

async function network(request) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(request, { signal: controller.signal });
    // Keep slow response bodies bounded too.
    return new Response(await response.arrayBuffer(), { status: response.status, statusText: response.statusText, headers: response.headers });
  } finally { clearTimeout(timer); }
}
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const storage = await caches.open(CACHE);
    const response = await network(new Request(new URL('./index.html', self.location), { cache: 'no-cache' }));
    if (!response.ok) throw new Error('Shell unavailable');
    const html = await response.clone().text();
    await storage.put('./index.html', response);
    await storage.put('./', new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } }));
    const local = [...html.matchAll(/(?:src|href)="([^"]+\.(?:js|css)(?:[?#][^"]*)?)"/g)]
      .map(m => m[1]).filter(url => !/^(?:https?:)?\/\//.test(url));
    await storage.addAll([...new Set([...local, './content-manifest.json'])]);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    // Retain downloaded subjects, but discard obsolete shell bundles so an
    // older offline index/app script cannot keep the previous topic order.
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith('jamb-app-') && name !== CACHE).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith((async () => {
      const storage = await caches.open(FONT_CACHE);
      const hit = await storage.match(req);
      if (hit) return hit;
      const response = await fetch(req);
      if (response.ok || response.type === 'opaque') await storage.put(req, response.clone());
      return response;
    })());
    return;
  }
  if (url.origin !== self.location.origin || !url.pathname.startsWith(new URL('./', self.location).pathname)) return;
  // The shell must be network-first. A cached index.html can otherwise
  // continue referencing an old app.js even after a newer deployment.
  if (req.mode === 'navigate' && (url.pathname.endsWith('/MY-JAMB-APP/') || /\/index\.html$/.test(url.pathname))) {
    event.respondWith((async () => {
      const storage = await caches.open(CACHE);
      try {
        const fresh = await fetch(new Request(req, { cache: 'no-cache' }));
        if (!fresh.ok) throw new Error('Shell unavailable');
        await storage.put('./index.html', fresh.clone()).catch(() => {});
        await storage.put('./', fresh.clone()).catch(() => {});
        return fresh;
      } catch (_) {
        return await storage.match('./index.html') || await storage.match('./') ||
          new Response('Reconnect to load the latest app.', { status: 503 });
      }
    })());
    return;
  }
  // The Key Points preview is a large standalone review page. Do not apply
  // the app shell's 8-second body timeout or substitute index.html for it.
  // A slow preview navigation must not silently open the main app instead.
  if (/\/key-points-review-v2\.html$/.test(url.pathname)) {
    event.respondWith((async () => {
      const storage = await caches.open(CACHE);
      // All subject/batch query strings point to the same preview document.
      // Cache by pathname so a new batch link can use the last saved page
      // even when the network briefly fails.
      const canonical = new Request(new URL('./key-points-review-v2.html', self.location));
      const cached = await storage.match(canonical) || await storage.match(req, { ignoreSearch: true });
      try {
        const fresh = await fetch(new Request(req, { cache: 'no-cache' }));
        if (!fresh.ok) throw new Error('Preview unavailable: ' + fresh.status);
        await storage.put(canonical, fresh.clone()).catch(() => {});
        return fresh;
      } catch (error) {
        if (cached) return cached;
        // Retry without the cache-busting query, which some mobile network
        // intermediaries mishandle, before showing an offline message.
        try {
          const retry = await fetch(new Request(canonical, { cache: 'reload' }));
          if (retry.ok) {
            await storage.put(canonical, retry.clone()).catch(() => {});
            return retry;
          }
        } catch (_) {}
        return new Response('Key Points preview is temporarily unreachable. Check your connection and retry.', {
          status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      }
    })());
    return;
  }
  event.respondWith((async () => {
    const storage = await caches.open(CACHE);
    const content = await caches.open(CONTENT_CACHE);
    // Versioned packages and their prepared diagrams reopen without a
    // network round trip. Online AI and payments are never intercepted.
    const saved = await content.match(req);
    if (saved && (url.searchParams.has('content') || url.pathname.includes('/past-questions/img/'))) return saved;
    // Versioned app bundles are immutable: reuse the exact saved version on
    // refresh instead of downloading the large app script every time.
    // Each deployment changes ?v=, so newer code never reuses an older URL.
    if (/\/app\.js$/.test(url.pathname) && url.searchParams.has('v')) {
      const shellHit = await storage.match(req);
      if (shellHit) return shellHit;
    }
    try {
      const response = await network(req);
      if (!response.ok) throw new Error('File unavailable');
      if (!url.searchParams.has('content') && !/\/(?:past-questions|teach|booklet)\//.test(url.pathname)) {
        await storage.put(req, response.clone());
      }
      return response;
    } catch (err) {
      const hit = await storage.match(req) || saved
        || (req.mode === 'navigate' && await storage.match('./index.html'));
      if (hit) return hit;
      return new Response('This content has not been saved on this device. Reconnect and try again.', { status: 503, headers: { 'Content-Type': 'text/plain' } });
    }
  })());
});
