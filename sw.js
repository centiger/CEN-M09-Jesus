const CACHE='cen-jesus-matrix-buttonlabels-v16-buttonlabels-v16-buttonlabels-v16-buttonlabels-v16';
const ASSETS=["./", "./index.html", "./manifest.json", "./assets/jesus-main-bg-final.png", "./hubs/index.html", "./hubs/data/hubs.json", "./hubs/assets/maps/incarnation-hub-map.png", "./hubs/assets/maps/ministry-hub-map.png", "./hubs/assets/maps/revelation-hub-map.png", "./hubs/assets/maps/cross-hub-map.png", "./hubs/assets/maps/resurrection-hub-map.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,c)).catch(()=>{});return r;}).catch(()=>caches.match(e.request)));});
