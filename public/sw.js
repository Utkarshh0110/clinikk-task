let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/bundle.js",
        "/index.html",
        "/",
        "/css2",
        "/static/js/vendors~main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/1.chunk.js",
        "/static/js/2.chunk.js",
        "/static/js/3.chunk.js",
        "/static/js/4.chunk.js",
        "/static/js/5.chunk.js",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {

  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        console.log("FETCH ", resp);
        if (resp) return resp;
      })
    );
  }
});
