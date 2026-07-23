// V42 Quiz counts refresh: replace older cached shells on every device.
const CACHE_NAME = 'english-app-v42-quiz-counts-single';
const urlsToCache = [
  './English.html',
  './english_data.js',
  './Logo_angles.JPG',
  './logo.jpg',
  './manifest.json',
  './html2canvas.min.js'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // Force the waiting service worker to become the active service worker
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  // Keep the app shell offline-first. A new worker installs a fresh shell,
  // while the versioned registration above makes phones pick that worker up.
  // This avoids waiting for a network timeout when the app is offline.
  if (event.request.mode === 'navigate' ||
      new URL(event.request.url).pathname.endsWith('/English.html')) {
    event.respondWith(
      caches.match(event.request)
        .then(cached => cached || caches.match('./English.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        ).catch(() => {
          // Fallback if offline and not in cache
        });
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Take control of all clients immediately
  );
});
