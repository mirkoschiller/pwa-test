const cacheName = "pwa-test"
const files = [
  "/app.js",
  "/install.js",
  "/index.html",
  "/icon.png",
  "/style.css"
]

self.addEventListener("install", event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(files);
    })(),
  );
  });