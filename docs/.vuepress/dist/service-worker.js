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
    "revision": "1086d5b8a98d184be7c603eaacbe31c7"
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
    "url": "assets/js/10.e34915f5.js",
    "revision": "cc31e6a9c5d4f9d37b51ea8c5c294891"
  },
  {
    "url": "assets/js/11.d349ba96.js",
    "revision": "144ffc3cb40d42b10be9bcbe5580c89a"
  },
  {
    "url": "assets/js/12.a6bcaef8.js",
    "revision": "c9398413b91c633b448f62d0e45d7cdb"
  },
  {
    "url": "assets/js/13.9b2b12c6.js",
    "revision": "640accefd8b294b6bb197cd6fbfac290"
  },
  {
    "url": "assets/js/14.b59af8bb.js",
    "revision": "6a917b73228c3491b356d4296cb7ae07"
  },
  {
    "url": "assets/js/15.a40e17e6.js",
    "revision": "5567bee75eee6f27e473e9484279743e"
  },
  {
    "url": "assets/js/16.ab4f9cac.js",
    "revision": "4d4efa1f98fad44e3e2584124dbd0edd"
  },
  {
    "url": "assets/js/17.f8b56660.js",
    "revision": "8d24a2b448a27156b5716085e6e0bcef"
  },
  {
    "url": "assets/js/18.1413b7be.js",
    "revision": "b6ca4c31d2ce343ea58a8bc338849ded"
  },
  {
    "url": "assets/js/19.e166a5e6.js",
    "revision": "2e328961351ddfeeac7e43d35e6621d1"
  },
  {
    "url": "assets/js/2.3e22a156.js",
    "revision": "22057eb18a2ed58f6b4b81efb825353b"
  },
  {
    "url": "assets/js/20.ff8e2625.js",
    "revision": "0fed20a2590e0e2e340b967b9e12ffd7"
  },
  {
    "url": "assets/js/21.0ae1e828.js",
    "revision": "d03aba9db4da0cd3b7d0cdc1473eb1d3"
  },
  {
    "url": "assets/js/22.c9981e67.js",
    "revision": "7d404024cdd8095b87a77a56067e783e"
  },
  {
    "url": "assets/js/23.7c9523a8.js",
    "revision": "6e1c6bf5bcddfd59762556c00985ac7e"
  },
  {
    "url": "assets/js/24.14b2110e.js",
    "revision": "1efaf5a6d66b16cf8c3e8c6123d1722a"
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
    "url": "assets/js/5.f3844ed1.js",
    "revision": "e944bd615c195376cb20710528b0cc94"
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
    "url": "assets/js/9.de8c1b06.js",
    "revision": "be1663943c6aefe6b34456f74a35b607"
  },
  {
    "url": "assets/js/app.e98e3124.js",
    "revision": "8260d8e7e137136aca60b7a1804bbeff"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "0da0387f3968c0d07425a5c845a27813"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "022ac9af22c5c11750aa3f25534ef0f5"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "4005090b1fc81707699e5b1b736bf672"
  },
  {
    "url": "git/index.html",
    "revision": "8774cc607b368531037f171d648f192e"
  },
  {
    "url": "index.html",
    "revision": "5b2ff5142aee7ecbb477fb5e36943848"
  },
  {
    "url": "interview/base/index.html",
    "revision": "058a372d912923d65bfedb12a4f8825d"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "c66b84378e312905387dfcf0597735e0"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "457b6645ad04fa116d8f99cf29e6d693"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "09af262825339c0ed1937e7dab0209a6"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "4aab6ad44d44d3a5a59486e0f8952d99"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "034873946c6d9070bc142f1fad85f940"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "d07c8518a814ac7cf6f2d2d5b4ec9a8d"
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "f6ca4e2d2a7c7a277a11ee3675cb4e15"
  },
  {
    "url": "style/css/index.html",
    "revision": "1b29c145db9892280493843981d20503"
  },
  {
    "url": "visual/three/index.html",
    "revision": "917de9406ace650af320d0a9f77253a1"
  },
  {
    "url": "vue/index.html",
    "revision": "1854cce1663738564930ccccfb4d9e4d"
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
