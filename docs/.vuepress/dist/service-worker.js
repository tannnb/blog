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
    "revision": "e31a6300f4f736b9d2f1cf97dca6f97a"
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
    "url": "assets/js/10.8372af8e.js",
    "revision": "4d0026a356a754b7934976b6fc0a6da8"
  },
  {
    "url": "assets/js/11.1287d40d.js",
    "revision": "056cb718fd422a61889d0679af900ab4"
  },
  {
    "url": "assets/js/12.a6bcaef8.js",
    "revision": "c9398413b91c633b448f62d0e45d7cdb"
  },
  {
    "url": "assets/js/13.0b8da40c.js",
    "revision": "8f9e7248a47fcac2eb2889fefae06c8c"
  },
  {
    "url": "assets/js/14.d28cad14.js",
    "revision": "b77bef1e40e80dfa7d8865e71f2cd276"
  },
  {
    "url": "assets/js/15.ad281302.js",
    "revision": "700b74c217956c8316eca31b1218e727"
  },
  {
    "url": "assets/js/16.ab4f9cac.js",
    "revision": "4d4efa1f98fad44e3e2584124dbd0edd"
  },
  {
    "url": "assets/js/17.59a7c788.js",
    "revision": "456b042560d896350123ddb28196db46"
  },
  {
    "url": "assets/js/18.bdd4852b.js",
    "revision": "8285c13de0d367c70a3fa646d6a0f55b"
  },
  {
    "url": "assets/js/19.cf42774b.js",
    "revision": "8718bdcdc882aca876f4ffd93cc69ba9"
  },
  {
    "url": "assets/js/2.3e22a156.js",
    "revision": "22057eb18a2ed58f6b4b81efb825353b"
  },
  {
    "url": "assets/js/20.2a3e7b9a.js",
    "revision": "a775347c0c364ad07143bba72873c569"
  },
  {
    "url": "assets/js/21.eb6692a3.js",
    "revision": "261ac415f91dab7ce0b9ee34d27917fd"
  },
  {
    "url": "assets/js/22.22a118f1.js",
    "revision": "4e4ed0f4ae44c81a8d3d4fda96eaa504"
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
    "url": "assets/js/9.1ae2101f.js",
    "revision": "21ae9231d5d1468d0a3498f4edd18811"
  },
  {
    "url": "assets/js/app.ad225322.js",
    "revision": "52f505de78161a43abac5498ded85c60"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "7879fdf6051517008e52a38e358d5372"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "3b5d4aeed177c3a9076919bdc5f3fbe9"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "c987ddf71705e101fac918af728f75c5"
  },
  {
    "url": "git/index.html",
    "revision": "6a9657e015c3c32c40bb3151c40b473b"
  },
  {
    "url": "index.html",
    "revision": "df66e520ecbb582f56bd6648fdeb2ba9"
  },
  {
    "url": "interview/base/index.html",
    "revision": "3fa0ba86014b5b90f838fafce5ce0a7d"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "abc5e232605cef938302869494e32344"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "00262d01fe228e28d24b5a9fca75fae5"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "4f272f48ad113b051597a826224d2879"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "16c49bdc6c9d024698eead60d3a472e5"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "d4e1af55178415134e6e4d5084a74a98"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "bd8826598d2257bc2951c9e5d6210aa1"
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "6b6ee3a3fd57dae439d53ebe1e329952"
  },
  {
    "url": "style/css/index.html",
    "revision": "774aab1b693b0438c530997d9894ff75"
  },
  {
    "url": "visual/three/index.html",
    "revision": "2b3f0f5ee7b1c45f00ae2920a6251469"
  },
  {
    "url": "vue/index.html",
    "revision": "d10aea32ae769200d21ddceb319887cd"
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
