const build = [
  "/_app/start-35aff749.js",
  "/_app/pages/__layout.svelte-9a78865d.js",
  "/_app/assets/pages/__layout.svelte-217d21a2.css",
  "/_app/pages/__error.svelte-a43b0287.js",
  "/_app/assets/pages/__error.svelte-aec0e3db.css",
  "/_app/pages/index.svelte-ad93a3ce.js",
  "/_app/assets/pages/index.svelte-4867806e.css",
  "/_app/chunks/vendor-f6e06b0e.js"
];
const files = [
  "/arrow-left.svg",
  "/arrow-right.svg",
  "/bg.jpg",
  "/bg.png",
  "/ce.png",
  "/favicon.svg",
  "/gallery/1.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
  "/gallery/13.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/logo-192.png",
  "/logo-512.png",
  "/logo.svg",
  "/manifest.json",
  "/mobile.png",
  "/planta-baja.png",
  "/plantas-superiores.png",
  "/promotion.png",
  "/robots.txt",
  "/sitges.png",
  "/sotano.png",
  "/swan-logo.svg",
  "/wave-bot-mask.svg",
  "/wave-bot.svg",
  "/wave-top-mask.svg",
  "/wave-top.svg"
];
const timestamp = Date.now();
const worker = self;
const FILES = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
