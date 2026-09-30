const RUNTIME_MARKER='/runtime/';
self.addEventListener('install',event=>{self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(self.clients.claim());});
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(!url.pathname.includes(RUNTIME_MARKER)) return;
  event.respondWith((async()=>{
    const hit=await caches.match(event.request,{ignoreSearch:true});
    if(hit) return hit;
    return new Response('VN-Runtime-Datei nicht im verifizierten Cache vorhanden.',{status:404,headers:{'Content-Type':'text/plain;charset=utf-8'}});
  })());
});
