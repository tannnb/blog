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
    "url": "404.html",
    "revision": "441d20e23f685d9fe5467861eb5686da"
  },
  {
    "url": "assets/css/0.styles.da587167.css",
    "revision": "35c6faed9c513e06f556560f8d62ef72"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.90f5d066.js",
    "revision": "8cea212729fcfddcf3d2377f68ed8acd"
  },
  {
    "url": "assets/js/11.5fad410c.js",
    "revision": "4b6fc8084cb57dd43b884cb4b7bc93aa"
  },
  {
    "url": "assets/js/12.6aff15c4.js",
    "revision": "67a88614d7cbb2c2cbd1756eed93b185"
  },
  {
    "url": "assets/js/13.f69f88b0.js",
    "revision": "ae87d1273fbf4b229b07ee45aed0e194"
  },
  {
    "url": "assets/js/14.67319f3b.js",
    "revision": "aabccb1701ce37cc30132c480128d640"
  },
  {
    "url": "assets/js/15.cb4f0135.js",
    "revision": "cb2096f4a62ab07e9d6ffde1f679bd8d"
  },
  {
    "url": "assets/js/16.598e4b0d.js",
    "revision": "b59e6bbbc68364bad63169fa46f1a7d4"
  },
  {
    "url": "assets/js/17.b42c1e96.js",
    "revision": "6b1870e3c14c235d14f9762e7d9ddeac"
  },
  {
    "url": "assets/js/18.b379b9ff.js",
    "revision": "8a1c7532775555be111e13c1eb485dda"
  },
  {
    "url": "assets/js/2.78050f59.js",
    "revision": "aed2f8e20800f55fcdb5edd6d23f9ef6"
  },
  {
    "url": "assets/js/3.68ddc96b.js",
    "revision": "ae2e01efa2b0ac115b68ea18ae96e4b3"
  },
  {
    "url": "assets/js/4.4b2aca6d.js",
    "revision": "7dae72ac5386ff9fc3aff483736b2f4c"
  },
  {
    "url": "assets/js/5.602e58ef.js",
    "revision": "b0f333a399b983f6b9866a8be0d4700e"
  },
  {
    "url": "assets/js/6.347f862c.js",
    "revision": "a4456da8071b9a5c08e570ca8d0bd7a0"
  },
  {
    "url": "assets/js/7.0d2bc2b0.js",
    "revision": "4225c95e9f4f6a733f8491a516c59677"
  },
  {
    "url": "assets/js/8.bf446527.js",
    "revision": "d8e82816ee0fef6867c4ec40e2130575"
  },
  {
    "url": "assets/js/9.fc71ff0a.js",
    "revision": "d263bf80de0dc7b0d405054ae5fe2914"
  },
  {
    "url": "assets/js/app.c9a481b5.js",
    "revision": "7d5a3c2aa61cb4ad8deb9965cc9d562f"
  },
  {
    "url": "git/index.html",
    "revision": "5411f0572e60a4a83fa07143a3b6b218"
  },
  {
    "url": "index.html",
    "revision": "95c4b8b8c6897397d5cedb0e65df196e"
  },
  {
    "url": "interview/index.html",
    "revision": "bbc19e4bcc5fb9fcc069d9b440530f3a"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "731a94c9e62ce4d4567f3716aa46ef55"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "7dbce426fe007d39a079344a49c4d378"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "8027a1b5d2cd82435557672c8634f454"
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "1d1452c6e337c64f3dfc91023a7f7947"
  },
  {
    "url": "style/css/index.html",
    "revision": "3bbd8b2e3c2feb422f135500d7dcd152"
  },
  {
    "url": "visual/three/index.html",
    "revision": "8d21bcb9278f38903b44ce2289898cda"
  },
  {
    "url": "vue/index.html",
    "revision": "48185bca70cf8ddfaa333b842aa40057"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
