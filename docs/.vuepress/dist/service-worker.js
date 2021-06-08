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
    "revision": "8425e1d235eb1beb1b863c179f18318d"
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
    "url": "assets/js/10.c5c57547.js",
    "revision": "56da2a6635b1fd63c5571173e57ceaf4"
  },
  {
    "url": "assets/js/11.76ed250e.js",
    "revision": "48cd5de5b75bf82e18d62a3ae281d7c7"
  },
  {
    "url": "assets/js/12.944ad538.js",
    "revision": "1145be123cf69898209c090a0d5c5b4d"
  },
  {
    "url": "assets/js/13.ad7bec85.js",
    "revision": "80999e3fe4c5ca8f10a7a33dd6a0f834"
  },
  {
    "url": "assets/js/14.fef8d72c.js",
    "revision": "e700beeb8012cd43a253d093bb52eeb0"
  },
  {
    "url": "assets/js/15.b0452527.js",
    "revision": "5ec57920e93560c85e3e9aa610cafdf8"
  },
  {
    "url": "assets/js/16.441e64a7.js",
    "revision": "52eadb7bf1b4b211e9b9c3b063524987"
  },
  {
    "url": "assets/js/17.58d95801.js",
    "revision": "c8df789f6efc2eed75f7e8eac7ebce1f"
  },
  {
    "url": "assets/js/18.09e17483.js",
    "revision": "6e5ecb0082a60ae9b670b0afb7d55388"
  },
  {
    "url": "assets/js/19.1faf4125.js",
    "revision": "a8fe09eccd7cbf7345947a5e5321121c"
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
    "url": "assets/js/5.125c4057.js",
    "revision": "42816034d77d294a5cfc1efb1b892a30"
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
    "url": "assets/js/8.ba1d2a38.js",
    "revision": "0759c5244713039493cd8118e93dc1e6"
  },
  {
    "url": "assets/js/9.85943b72.js",
    "revision": "88bbb4be09ba11fd7da265c7b94442bf"
  },
  {
    "url": "assets/js/app.ce571f58.js",
    "revision": "415d8b0ec2fc3408905f47b721d4357d"
  },
  {
    "url": "git/index.html",
    "revision": "e8b2ed8ad5f1adf0426fb0c464d31b11"
  },
  {
    "url": "index.html",
    "revision": "3823d44c16fd4ca1a8ba0b5f26963e61"
  },
  {
    "url": "interview/index.html",
    "revision": "369dd4bfc6eaaf483dfe9c329e581429"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "6a7f73ab1ca2b4c0ac0b2922f2105868"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "d2a80ae2df2327168291536813452d82"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "5cad7b921ab15a5f882c9a76183c52e1"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "62af7e9d5c82d258791c49a57bd3af26"
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "b897a4661f86b4498f6a21c531b3f04d"
  },
  {
    "url": "style/css/index.html",
    "revision": "77dab6b1ed9a46e6cfc018e870c3e22c"
  },
  {
    "url": "visual/three/index.html",
    "revision": "91c65412cca5a75e5a914e9b5e848f32"
  },
  {
    "url": "vue/index.html",
    "revision": "c55930eaa4f305742bb98693a590c2bd"
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
