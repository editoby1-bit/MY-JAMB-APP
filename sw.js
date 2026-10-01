// sw.js: offline support for My JAMB App.
//
// Once a student has opened the app online, it keeps working with no
// signal: questions, passages, written explanations, practice and exam
// modes. Teach Me explanations already opened on the device are stored by
// the app itself (localStorage), so those work offline too.
//
// Strategy: network-first for the app's own files, falling back to the
// cached copy. Online students always get the latest version (no stale
// pages after a deploy, and no ?v= bumps needed); offline students get the
// last version they loaded. Fonts are cache-first. Payments (Paystack) and
// the API (editoby-api) are never intercepted.
//
// The install step reads index.html and caches every local script and
// stylesheet it references, so a new past-questions/<year>.js file is
// picked up automatically, with no list to maintain here.

const CACHE = 'jamb-app-v1';
const FONT_CACHE = 'jamb-fonts-v1';

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    const res = await fetch('./index.html', { cache: 'no-cache' });
    const html = await res.clone().text();
    await cache.put('./index.html', res);
    await cache.put('./', new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } }));
    const local = [...html.matchAll(/(?:src|href)="([^"]+\.(?:js|css))"/g)]
      .map(m => m[1])
      .filter(u => !/^(?:https?:)?\/\//.test(u));
    await cache.addAll(local);
    self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keep = [CACHE, FONT_CACHE];
    for (const k of await caches.keys()) if (!keep.includes(k)) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith((async () => {
      const cache = await caches.open(FONT_CACHE);
      const hit = await cache.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
      return res;
    })());
    return;
  }

  if (url.origin !== self.location.origin) return; // Paystack, API, etc.

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const res = await fetch(req);
      if (res.ok) cache.put(req, res.clone());
      return res;
    } catch (err) {
      const hit = await cache.match(req, { ignoreSearch: true })
        || (req.mode === 'navigate' && await cache.match('./index.html'));
      if (hit) return hit;
      throw err;
    }
  })());
});
