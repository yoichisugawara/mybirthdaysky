const CACHE_NAME = 'birth-weather-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // ネットワーク優先のシンプルなキャッシュ戦略
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
