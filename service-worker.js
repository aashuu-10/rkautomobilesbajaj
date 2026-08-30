const CACHE_NAME = "bcclAR-v7";
const ASSETS = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./logo.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const isAppShell = req.mode === "navigate" || req.url.endsWith("index.html") || req.url.endsWith("/");

  if (isAppShell) {
    // Network-first for the app itself, so a new deployment is picked up right away.
    // Falls back to the cached copy only if there's no connection.
    event.respondWith(
      fetch(req)
        .then((res) => {
          caches.open(CACHE_NAME).then((cache) => cache.put(req, res.clone()));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Cache-first for static assets (icons, manifest) - these rarely change.
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req))
  );
});
