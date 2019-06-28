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
    "url": "build/manifest.json",
    "revision": "d693912169869d126cbbf629dfc6fe66"
  },
  {
    "url": "build/runtime.js",
    "revision": "993f0e96c94cde1cb6389b223ca5ffbf"
  },
  {
    "url": "",
    "revision": "6e78a27d8a998ed4d56a2b008184829c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
