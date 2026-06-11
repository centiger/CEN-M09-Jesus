const CACHE='cen-jesus-matrix-final-v2-standard-hubs-v1-buttonpopup-v9-buttonpopup-v9-buttonpopup-v9-buttonpopup-v9-buttonpopup-v9-buttonpopup-v9-buttonpopup-v9-buttonpopup-v9-scrolllimit-v11-scrolllimit-v11';
const ASSETS=['./','./index.html','./manifest.json','./assets/jesus-main-bg-final.png','./hubs/index.html'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});
