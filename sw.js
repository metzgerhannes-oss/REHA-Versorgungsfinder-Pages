'use strict';
const CACHE='reha-v19-secure-v19-4';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
  const u=new URL(event.request.url);
  const scope=new URL(self.registration.scope).pathname;
  if(u.pathname.startsWith(scope+'app/')||u.pathname===scope+'app'){
    event.respondWith((async()=>{
      const c=await caches.open(CACHE);
      let r=await c.match(event.request,{ignoreSearch:true});
      if(!r && (event.request.mode==='navigate'||u.pathname.endsWith('/app')||u.pathname.endsWith('/app/'))){r=await c.match(new URL('app/index.html',self.registration.scope).href);}
      return r||new Response('Lokaler Datenstand nicht eingerichtet.',{status:404,headers:{'Content-Type':'text/plain; charset=utf-8'}});
    })());
  }
});