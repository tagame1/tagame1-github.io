
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("village-map-cache").then(cache => {
      return cache.addAll([
        "./village_map.html",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
