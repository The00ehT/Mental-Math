// Blitzrechnen service worker: app shell offline, fonts cached on first use.
const CACHE = 'blitzrechnen-4a497ca392';
const FONTS = 'blitzrechnen-fonts';
const CORE = ["./", "index.html", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== FONTS).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Pages: network first so updates arrive, cached copy when offline.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put('index.html', copy));
      return res;
    }).catch(() => caches.match('index.html').then(r => r || caches.match('./'))));
    return;
  }

  // Google Fonts: cache first, fill on first online visit.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTS).then(c => c.match(req).then(hit => hit || fetch(req).then(res => {
      c.put(req, res.clone());
      return res;
    }))));
    return;
  }

  // Own files: cache first.
  if (url.origin === location.origin) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
  }
});
