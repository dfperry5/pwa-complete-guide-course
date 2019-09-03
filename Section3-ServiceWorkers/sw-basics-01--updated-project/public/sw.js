/**
 * Service Worker File
 */

 self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing Server Worker... ', event);
 })

 self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating Server Worker... ', event);
    return self.clients.claim();
 })

 self.addEventListener('fetch', (event) => {
     console.log('[Service Worker] Fetching something ...', event);
     // Essesntiallly intercepting the request
     event.respondWith(fetch(event.request));
 })