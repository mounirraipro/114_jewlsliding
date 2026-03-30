const CACHE_NAME = 'jewelsliding-pwa-v1';
const CORE_ASSETS = [
  '/play',
  '/game/index.html',
  '/favicon/site.webmanifest',
  '/favicon/apple-touch-icon.png',
  '/favicon/favicon.ico',
  '/favicon/favicon-96x96.png',
  '/favicon/web-app-manifest-192x192.png',
  '/favicon/web-app-manifest-512x512.png'
];

function getCacheKey(request) {
  const url = new URL(request.url);
  if (url.pathname === '/game/index.html') return '/game/index.html';
  if (url.pathname === '/play') return '/play';
  return request;
}

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        const cache = await caches.open(CACHE_NAME);
        await cache.put(getCacheKey(request), response.clone());
        return response;
      } catch {
        const cache = await caches.open(CACHE_NAME);
        return (await cache.match(request, { ignoreSearch: true })) || (await cache.match('/play'));
      }
    })());
    return;
  }

  if (url.pathname.startsWith('/game/') || url.pathname.startsWith('/favicon/') || url.pathname.startsWith('/_next/static/')) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(getCacheKey(request), { ignoreSearch: true });
      if (cached) return cached;
      const response = await fetch(request);
      await cache.put(getCacheKey(request), response.clone());
      return response;
    })());
    return;
  }

  if (url.pathname === '/play') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        const cache = await caches.open(CACHE_NAME);
        await cache.put('/play', response.clone());
        return response;
      } catch {
        const cache = await caches.open(CACHE_NAME);
        return cache.match('/play');
      }
    })());
  }
});
