const CACHE_NAME = 'alev-serisi-glow-up-v17';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
const MEDIA = [
  './flame-blue.webp','./flame-blue-poster.webp','./burst-blue.webp','./milestone-blue.webp',
  './flame-orange.webp','./flame-orange-poster.webp','./burst-orange.webp','./milestone-orange.webp',
  './flame-red.webp','./flame-red-poster.webp','./burst-red.webp','./milestone-red.webp',
  './flame-white.webp','./flame-white-poster.webp','./burst-white.webp','./milestone-white.webp',
  './flame-purple.webp','./flame-purple-poster.webp','./burst-purple.webp','./milestone-purple.webp',
  './flame-emerald.webp','./flame-emerald-poster.webp','./burst-emerald.webp','./milestone-emerald.webp',
  './flame-gold.webp','./flame-gold-poster.webp','./burst-gold.webp','./milestone-gold.webp',
  './flame-pink.webp','./flame-pink-poster.webp','./burst-pink.webp','./milestone-pink.webp',
  './flame-turquoise.webp','./flame-turquoise-poster.webp','./burst-turquoise.webp','./milestone-turquoise.webp',
  './flame-lime.webp','./flame-lime-poster.webp','./burst-lime.webp','./milestone-lime.webp',
  './ignite.wav','./milestone.wav','./epic.wav'
];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const coreUrls = CORE.map(path => new URL(path, self.registration.scope).href);
    await cache.addAll(coreUrls);
    const mediaUrls = MEDIA.map(path => new URL(path, self.registration.scope).href);
    await Promise.all(mediaUrls.map(url => cache.add(url).catch(() => null)));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('alev-serisi-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy)).catch(() => {});
      }
      return response;
    } catch (_) {
      if (request.mode === 'navigate') {
        const fallback = await caches.match(new URL('./index.html', self.registration.scope).href);
        if (fallback) return fallback;
      }
      return new Response('', {status:504, statusText:'Offline asset unavailable'});
    }
  })());
});
