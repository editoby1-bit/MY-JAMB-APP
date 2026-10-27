// Cache only the app shell at install. Subject packages are saved by
// content-loader.js after integrity checks; keep them across shell updates.
const CACHE = 'jamb-app-v2';
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
    const local = [...html.matchAll(/(?:src|href)="([^"]+\.(?:js|css))"/g)]
      .map(m => m[1]).filter(url => !/^(?:https?:)?\/\//.test(url));
    await storage.addAll([...new Set([...local, './content-manifest.json'])]);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    // Keep legacy downloads: the loader migrates verified files on demand.
    // Never clear other apps' caches on the shared GitHub Pages origin.
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
  event.respondWith((async () => {
    const storage = await caches.open(CACHE);
    const content = await caches.open(CONTENT_CACHE);
    // Versioned packages and their prepared diagrams reopen without a
    // network round trip. Online AI and payments are never intercepted.
    const saved = await content.match(req);
    if (saved && (url.searchParams.has('content') || url.pathname.includes('/past-questions/img/'))) return saved;
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
