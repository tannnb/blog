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
    "revision": "d57493e5fef09fafb1fb14bdeec4df63"
  },
  {
    "url": "assets/css/0.styles.48a0ee12.css",
    "revision": "f3a3fd8f2ebb84df63370c2ad15eb19a"
  },
  {
    "url": "assets/img/http01.666d7d20.jpg",
    "revision": "666d7d20aa907d8317af3770411f5aa2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4a6613cc.js",
    "revision": "15517d3941f35abc7134ba3cbe5ee4be"
  },
  {
    "url": "assets/js/11.7098a3b8.js",
    "revision": "2ef631461eaee9c62b2b9b9636cbcbe9"
  },
  {
    "url": "assets/js/12.6e30969c.js",
    "revision": "81fe203629123d184d6d471043df622c"
  },
  {
    "url": "assets/js/13.af2e5120.js",
    "revision": "72a2928b881d99bb053813774aa03796"
  },
  {
    "url": "assets/js/14.5f149d74.js",
    "revision": "e519c03be3966908b050787da378ca76"
  },
  {
    "url": "assets/js/15.c3083c3f.js",
    "revision": "461bee6ed96e42a016d545cd6f1859c9"
  },
  {
    "url": "assets/js/16.1a88cfd0.js",
    "revision": "ac56a4f67d88b5518789b03dfb910ec4"
  },
  {
    "url": "assets/js/17.8d4d611d.js",
    "revision": "ffe3c347584bf7eba0dddf098a97509c"
  },
  {
    "url": "assets/js/18.dfba1327.js",
    "revision": "9c54aff84f6aff8c5ac6355da4f08c0a"
  },
  {
    "url": "assets/js/19.8f3e8e31.js",
    "revision": "287e21cf6fc9cc586ea0a0760c9c91b8"
  },
  {
    "url": "assets/js/2.21c03cfa.js",
    "revision": "cd7ac027952b9eaf306d8c79614fd127"
  },
  {
    "url": "assets/js/20.e5ea443a.js",
    "revision": "b8782fc820ecb9b7de19be58467cdf73"
  },
  {
    "url": "assets/js/21.525314cf.js",
    "revision": "71d2b636ed5b1fc6e25df63ac5dc8a36"
  },
  {
    "url": "assets/js/22.974eee61.js",
    "revision": "fd3e8ef1bec66bd67a2c4e9006daf0fe"
  },
  {
    "url": "assets/js/23.92c1312a.js",
    "revision": "fd713cc661e48c390825c1a1b32a8b0d"
  },
  {
    "url": "assets/js/24.de1b539f.js",
    "revision": "519e870e9b1082d7500e571686f187ff"
  },
  {
    "url": "assets/js/25.9db7f968.js",
    "revision": "f71e999a785dadcabd7694d7791177f0"
  },
  {
    "url": "assets/js/26.0fa8acf8.js",
    "revision": "73e5920bfc7613a910521a81d67228a0"
  },
  {
    "url": "assets/js/27.3fdcecf2.js",
    "revision": "45c28b6225fe258c234141cdd29be6e4"
  },
  {
    "url": "assets/js/3.7233cddb.js",
    "revision": "701412b810c2e03519e8fcb87412007d"
  },
  {
    "url": "assets/js/4.e50e3fd3.js",
    "revision": "0c7586359094eb649363813f728a7fce"
  },
  {
    "url": "assets/js/5.377bc090.js",
    "revision": "e1dc9e0c06ed27e6e21528d27b74280d"
  },
  {
    "url": "assets/js/6.b47987b4.js",
    "revision": "9c33f96cb322edb308d49d28542590c2"
  },
  {
    "url": "assets/js/7.109192b9.js",
    "revision": "3e3a186ef148bcf1240ff9b93158b7f0"
  },
  {
    "url": "assets/js/8.69f8a907.js",
    "revision": "23095371d1c305d29057fd4af53483d5"
  },
  {
    "url": "assets/js/9.a9048de2.js",
    "revision": "89ad16b12731ac17d79fb767087d131c"
  },
  {
    "url": "assets/js/app.8ee8d33f.js",
    "revision": "82aba9b27b49ae68c7fc8e4bf24099de"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "cd153403d0fcdf8d5f095dec53059e4d"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "5faa89b3fffff4144f85385a1d9060ca"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "82d0e9839fc9d805335495de1015fa21"
  },
  {
    "url": "git/index.html",
    "revision": "46d161a62e3295892a041577657162e5"
  },
  {
    "url": "index.html",
    "revision": "8d21be946b377db38c81ea0781fb8bd3"
  },
  {
    "url": "interview/base/index.html",
    "revision": "c6e301e1b31adb11da5896f61bb3941b"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "51105c1de7e8450f11d96d6e4822c396"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "9d70012b2086214109ac642b5d7e2c03"
  },
  {
    "url": "interview/http/index.html",
    "revision": "97ed4367cda2f38907aebf7965343ae0"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "7405905e2ef20c0e62b8e40c95714281"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "27057b80b1fd09c5c8fb52fc1c6811d8"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "ebf8251382ec3ec6871dc802ca9bf2ad"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "64c6c80a111aba663d314c28301c2e90"
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "111ed8c25f2cd73dc63f6cbe1f9d92ad"
  },
  {
    "url": "style/css/index.html",
    "revision": "5e3742237b3b7db8eebcaf6e77a4dd0b"
  },
  {
    "url": "visual/three/index.html",
    "revision": "d9851c785f1d6601f767404c9ee4efa6"
  },
  {
    "url": "vue/index.html",
    "revision": "7af28d4ba9eec606d52470e2a79cb2c7"
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
