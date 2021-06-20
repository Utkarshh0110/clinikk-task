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
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {

    // event.waitUntil(
    //     this.registration.showNotification("Welcome to Target", {
    //         body: "Learning should never stop"
    //     })
    // )


  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        console.log("FETCH ", resp);
        if (resp) return resp;
      })
    );
  }
});
