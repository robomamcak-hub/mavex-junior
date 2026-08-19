const CACHE="mavex-junior-wau-v1";
const ASSETS=["./","./index.html","./manifest.json","./wau-design.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
  if(new URL(e.request.url).origin===location.origin)
    e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request)));
});