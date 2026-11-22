const CACHE = 'talca-3d-v3';
const CORE = ['./', './index.html', './city.js', './city.json', './folders.js', './manifest.webmanifest', './talca-logo.svg'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request).then(response => {
      const copy = response.clone();
      if (response.ok || response.type === 'opaque') caches.open(CACHE).then(cache => cache.put(request, copy));
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
