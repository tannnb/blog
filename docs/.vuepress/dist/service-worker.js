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
    "revision": "b84e2ed1fb3d00252228ba8cda989e86"
  },
  {
    "url": "assets/css/0.styles.ee48f322.css",
    "revision": "914ec481170ed35015896b05598e0356"
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
    "url": "assets/js/11.bc2abc04.js",
    "revision": "36520f85a465355176f18e0711c2acf7"
  },
  {
    "url": "assets/js/12.1bce20ca.js",
    "revision": "003a3dcbaaea67f911036c269aadf900"
  },
  {
    "url": "assets/js/13.01bb7319.js",
    "revision": "f73d017c27642f00a1b0a2a903463951"
  },
  {
    "url": "assets/js/14.5f149d74.js",
    "revision": "e519c03be3966908b050787da378ca76"
  },
  {
    "url": "assets/js/15.c246eb1d.js",
    "revision": "1834087f6df1049c998bbfd71138eb60"
  },
  {
    "url": "assets/js/16.a7fa0b2d.js",
    "revision": "992a5c1c1f34df9f1ef09a0be1d17572"
  },
  {
    "url": "assets/js/17.008b9ae9.js",
    "revision": "f8bbe332c004cb775a44f98bfaae00ce"
  },
  {
    "url": "assets/js/18.0c339d3f.js",
    "revision": "77fe4d3e7929a748be20a8e9241a02af"
  },
  {
    "url": "assets/js/19.ab6e15c3.js",
    "revision": "e9910de4b3d788a03208f96d590b1037"
  },
  {
    "url": "assets/js/2.52721808.js",
    "revision": "cd7ac027952b9eaf306d8c79614fd127"
  },
  {
    "url": "assets/js/20.4999f756.js",
    "revision": "4f5c48e8b88e4c9ab8c951bd074b8647"
  },
  {
    "url": "assets/js/21.6d9cffd3.js",
    "revision": "426cafe4ab2459616e9b485faa4ec677"
  },
  {
    "url": "assets/js/22.974eee61.js",
    "revision": "fd3e8ef1bec66bd67a2c4e9006daf0fe"
  },
  {
    "url": "assets/js/23.fcb1046c.js",
    "revision": "4c60eb2f6bb45890fe80b4e7d09087ce"
  },
  {
    "url": "assets/js/24.8b73599f.js",
    "revision": "e1bc499752d5dd67d636645f400a37de"
  },
  {
    "url": "assets/js/25.1a68194b.js",
    "revision": "ce291b316204111d2ff2367be0451614"
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
    "url": "assets/js/5.1583c6b8.js",
    "revision": "d2baec6c7201e3daa03b9f5d68ac6f5f"
  },
  {
    "url": "assets/js/6.3c75024b.js",
    "revision": "61e1c2345ffddbeb2115510137f109d8"
  },
  {
    "url": "assets/js/7.fee945c2.js",
    "revision": "9a5311ad6d238500761bfa4caa960761"
  },
  {
    "url": "assets/js/8.e9c32002.js",
    "revision": "af72330d155daf48dd75a90650e065e0"
  },
  {
    "url": "assets/js/9.b9eaaf93.js",
    "revision": "67a0dcec192eb533fdec1df77ea4cc5c"
  },
  {
    "url": "assets/js/app.c6e4d244.js",
    "revision": "2abae6746fd604f5ddd82ffa0dfbf27a"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "814e681028b7a461b9ae796315f7576b"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "45b2fee8fea33f8a700ff8057cf0e461"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "e0fbfb9ba6571690568a714d11a20958"
  },
  {
    "url": "git/index.html",
    "revision": "18ab410aec0c685de179f7fa6f8f9e0b"
  },
  {
    "url": "index.html",
    "revision": "a93d1067681c0b1056a6c4076ac939a2"
  },
  {
    "url": "interview/base/index.html",
    "revision": "2d0cc85502d67d2d95f055cc078b9a26"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "a1fc8eaaf8dc545b1b4a6fe873bd1579"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "34477be6214b1b4649524e98dec23956"
  },
  {
    "url": "interview/http/index.html",
    "revision": "bf9b16ec3171a3096e2036b3ed27c50d"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "2297d10b3bfdc06f569235a23e374ad1"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "ef8bb86c77c1ad5f021fa47bf2f4dbae"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "f7fa71e0ba78a1a0699df072a97f42fc"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "c0ec0dab75506d8d058637191fbcce5e"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "c384821e560bbf8f08444ca8f9b51db8"
  },
  {
    "url": "style/css/index.html",
    "revision": "a76f2d830fa8f5ecd6d69752b1e3d45c"
  },
  {
    "url": "visual/three/index.html",
    "revision": "7f0075af523618d24b6836f16a7bd2eb"
  },
  {
    "url": "vue/index.html",
    "revision": "2d690254896accb1e6d731835242e669"
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
