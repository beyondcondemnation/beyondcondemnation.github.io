this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        'index.html',
        // 'app.min.css',
        // 'app.min.js',
        'img/Jesus_and_Nicodemus_filter.jpg',
        'img/Logo_White.svg',
        'img/clouds/cloud.png',
        'img/clouds/cloud_mirror.png',
        'img/clouds/cloud_2.png',
        'img/clouds/cloud_4.png',
        'img/clouds/cloud_5.png',
        'img/clouds/cloud_5_mirror.png',
        'img/products/beyond-armor/ba-cover-banner.png'
        // 'img/products/beyond-armor/beyond-armor-01-back.png',
        // 'img/products/beyond-armor/beyond-armor-01-cover.png',
        // 'img/products/beyond-armor/olive-wood-crosses.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
