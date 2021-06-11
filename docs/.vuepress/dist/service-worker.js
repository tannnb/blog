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
    "revision": "7b0af372e350da90bf657207e1f79e43"
  },
  {
    "url": "assets/css/0.styles.09c98605.css",
    "revision": "1f7f8c34e6a66dfd7a140d50af8e80a9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.83cbd867.js",
    "revision": "425b35a66a23d906a31b8ab485215914"
  },
  {
    "url": "assets/js/11.1d6a0674.js",
    "revision": "b14561197d72dd739baf07d3d72beda3"
  },
  {
    "url": "assets/js/12.55c0afa5.js",
    "revision": "90f9a1340493cef7e3ac1531d904bbb9"
  },
  {
    "url": "assets/js/13.921cd995.js",
    "revision": "f7369a4c5158c050f20d08e5145adbb3"
  },
  {
    "url": "assets/js/14.af7ff95a.js",
    "revision": "dad6821b5d63ac0a595502e38105dc95"
  },
  {
    "url": "assets/js/15.7905560b.js",
    "revision": "6437e5f67d78cd54278b194bec71159c"
  },
  {
    "url": "assets/js/16.a99974ab.js",
    "revision": "7472e9f7968bfb67604d50b63ca08844"
  },
  {
    "url": "assets/js/17.d498e602.js",
    "revision": "f83203f3247582846540f2762899bb8c"
  },
  {
    "url": "assets/js/18.5c87efb7.js",
    "revision": "0c14f9397f87f95ca69c3b3fa7554bb0"
  },
  {
    "url": "assets/js/19.f44917ab.js",
    "revision": "e0559d1a9d8f278ccefa9fc80b83629a"
  },
  {
    "url": "assets/js/2.3e22a156.js",
    "revision": "22057eb18a2ed58f6b4b81efb825353b"
  },
  {
    "url": "assets/js/3.905af835.js",
    "revision": "7a993fcfff60ff6e574a51b2ccce17f5"
  },
  {
    "url": "assets/js/4.06f6b361.js",
    "revision": "98afe804f348daa2d247e07755af900c"
  },
  {
    "url": "assets/js/5.3c4d520b.js",
    "revision": "ae6320135efc0ee6eb0876c7f54ca5d1"
  },
  {
    "url": "assets/js/6.a3bfc1c3.js",
    "revision": "c2686c1e15b714c62b95b70c40afd9d0"
  },
  {
    "url": "assets/js/7.e4bfecd6.js",
    "revision": "06929de0ff107411c10d6f329ff888d6"
  },
  {
    "url": "assets/js/8.555e1f43.js",
    "revision": "3cdc17aef2b578729c98d40a5a6f8e77"
  },
  {
    "url": "assets/js/9.9e83022e.js",
    "revision": "6e54b34025b31cd9fdbbe1ce09b38d25"
  },
  {
    "url": "assets/js/app.8f0ccb88.js",
    "revision": "1a053725bc05eac44b8bb6f35bcee747"
  },
  {
    "url": "git/index.html",
    "revision": "579bf6c61fe61f71d2b5bd179f305f09"
  },
  {
    "url": "index.html",
    "revision": "efbb88cb9ea000258231754298ef0481"
  },
  {
    "url": "interview/index.html",
    "revision": "0d532b9be4dc304c7f113a72b020a741"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "b953a26ee1d9dd322066d89c106152c7"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "13780d0ff2af3cb153d4309eefd78cd3"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "0d66801dfbf4368d336914b11eab220d"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "359964ea2734432d1f2046e43078afcf"
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "c9fcf9153cbacaf8fd302007bff8f833"
  },
  {
    "url": "style/css/index.html",
    "revision": "dff7ae18735b90bc7e4f612c73c14444"
  },
  {
    "url": "visual/three/index.html",
    "revision": "c98b5139f2ff623498594d4b5b3cfbbb"
  },
  {
    "url": "vue/index.html",
    "revision": "e29e052d05b8a261493b1da92b4a13ad"
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
