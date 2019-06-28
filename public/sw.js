/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "build/entrypoints.json",
    "revision": "60ae7ce89c418e293b84742cd26c26e6"
  },
  {
    "url": "build/main.css",
    "revision": "0798178716624c53d1c9a391856062e7"
  },
  {
    "url": "build/main.js",
    "revision": "b57bf53ac47ba39823c59c8b368e5007"
  },
  {
    "url": "build/manifest.json",
    "revision": "d693912169869d126cbbf629dfc6fe66"
  },
  {
    "url": "build/runtime.js",
    "revision": "993f0e96c94cde1cb6389b223ca5ffbf"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "eac0365b4a6f369adc3bf1bc807e9938"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "b8fa10300e451d4b936a83ac6c78fd76"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "35ac411a1c99f7ab9e160de64aff7542"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "0aa55a27a3a46d03b30caf62593ad194"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "781cc92a976e10bb6c8afee3a9e55ee1"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "f213c709aac3f83bd38b24be523710bd"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "4d6ad9263ea1bc898c8d46bb3e8edcd9"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "7856e7ab419814b3c7bfff6dbb4b8589"
  },
  {
    "url": "index.php",
    "revision": "6e78a27d8a998ed4d56a2b008184829c"
  },
  {
    "url": "manifest.json",
    "revision": "92fb97774df313a3e1fdd96443d19be1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
