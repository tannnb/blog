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
    "revision": "bebe61b3b1863ed70b842268ac514c15"
  },
  {
    "url": "assets/css/0.styles.827ecb93.css",
    "revision": "eab6d9d73d0bb7d7a8351c03ade23acd"
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
    "url": "assets/js/14.74de5eea.js",
    "revision": "a66adb0f88c610aa53d4dafdf1e85dec"
  },
  {
    "url": "assets/js/15.aedefd98.js",
    "revision": "c63b540f04e311d3479d5c186b1bf08f"
  },
  {
    "url": "assets/js/16.a0d450bc.js",
    "revision": "853964e465858cc823764b80181d2321"
  },
  {
    "url": "assets/js/17.8d4d611d.js",
    "revision": "ffe3c347584bf7eba0dddf098a97509c"
  },
  {
    "url": "assets/js/18.3bee495d.js",
    "revision": "44cdd051eb23366e709462b30c302903"
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
    "url": "assets/js/20.e5ea443a.js",
    "revision": "b8782fc820ecb9b7de19be58467cdf73"
  },
  {
    "url": "assets/js/21.e756157e.js",
    "revision": "2c8c3d15df7c52bb4324c7477202d7a1"
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
    "url": "assets/js/6.bcbfedd1.js",
    "revision": "b612b974cdb6ee69f709837e12061bcf"
  },
  {
    "url": "assets/js/7.109192b9.js",
    "revision": "3e3a186ef148bcf1240ff9b93158b7f0"
  },
  {
    "url": "assets/js/8.0efcc9fa.js",
    "revision": "40d2efc09d78916603e8b71d9856f736"
  },
  {
    "url": "assets/js/9.a9048de2.js",
    "revision": "89ad16b12731ac17d79fb767087d131c"
  },
  {
    "url": "assets/js/app.b8ef52da.js",
    "revision": "ea783f413ba31954057d53885ca881f4"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "93f027baece024ff6f6e5163e90823d4"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "f3626c8dbb7b7e82b68bf4946c11b02c"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "dd5782b232415ef2dd9d5043d4e16463"
  },
  {
    "url": "git/index.html",
    "revision": "c2440a0133df12169e72d26ac51d36ee"
  },
  {
    "url": "index.html",
    "revision": "3b399821069cd483b8904b6ec458e917"
  },
  {
    "url": "interview/base/index.html",
    "revision": "c8ac1ed886dab4eedffeecafb5247087"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "4ad9bb83ef42e7c9376e95fe06b47481"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "23c325acc18736520f3d917cdbf0110c"
  },
  {
    "url": "interview/http/index.html",
    "revision": "16e567368d8c075635cffb5e780dfa44"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "5bf7ad6541e86f6d9f3abbbf152c4c84"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "b9a5947c9e38ad03a4a2ac95ea20dda2"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "fe93ab8999aaffce5d51d97d67343764"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "997ceca1063610ce508c9ac5dbf91def"
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "ce52ca168a3dd5f932ea29cc658f431e"
  },
  {
    "url": "style/css/index.html",
    "revision": "260d3616b8fa78c2cd0df683df7e25b7"
  },
  {
    "url": "visual/three/index.html",
    "revision": "dbd84f175d8c6379472050f7818f8cb5"
  },
  {
    "url": "vue/index.html",
    "revision": "21fb65561cded721ba46ccd67512353e"
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
