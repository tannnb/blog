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
    "revision": "479644189175aa92577ae950b57621bd"
  },
  {
    "url": "assets/css/0.styles.48a0ee12.css",
    "revision": "f3a3fd8f2ebb84df63370c2ad15eb19a"
  },
  {
    "url": "assets/img/data_type_1.60189406.png",
    "revision": "601894069874141d1c4e5a0e15b80dce"
  },
  {
    "url": "assets/img/data_type_2.fdcf09aa.png",
    "revision": "fdcf09aa2ad693cb1bb55b4f7effe45e"
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
    "url": "assets/js/10.06ef08a5.js",
    "revision": "bccd8cdac5ef2cdc85cd3843c26aa15c"
  },
  {
    "url": "assets/js/11.b0297634.js",
    "revision": "048237677ea36d9944c76faafbe45968"
  },
  {
    "url": "assets/js/12.7682adc9.js",
    "revision": "4d54f22e0ef2d74b381012f73c15a8b0"
  },
  {
    "url": "assets/js/13.372a78e1.js",
    "revision": "43a5e14be83fcc2ff686ffe06ecf1b6b"
  },
  {
    "url": "assets/js/14.e7285075.js",
    "revision": "928a93d56c6a5e4d42298555160e6593"
  },
  {
    "url": "assets/js/15.915f3f22.js",
    "revision": "fad43550329f74d1608dc34a89cc7db7"
  },
  {
    "url": "assets/js/16.14dde78e.js",
    "revision": "865f3c74ce33f3f9991f91775491b57d"
  },
  {
    "url": "assets/js/17.bd687686.js",
    "revision": "d371f5e049d6d2e6716e5aef65433c0a"
  },
  {
    "url": "assets/js/18.639d5d03.js",
    "revision": "7a490fda572d88e09612ceb0e47e8cc4"
  },
  {
    "url": "assets/js/19.ac9cf8b2.js",
    "revision": "7b5eeaa64dc79480aad4be98164e4993"
  },
  {
    "url": "assets/js/2.e2270b34.js",
    "revision": "1518d35db95232540e48f31d83fc262a"
  },
  {
    "url": "assets/js/20.4ae4e4b9.js",
    "revision": "465bae4f8afe9d8fb94898251af0005f"
  },
  {
    "url": "assets/js/21.70fbb910.js",
    "revision": "d1aab112c1a502e05fc2d1b947007791"
  },
  {
    "url": "assets/js/22.f610f76f.js",
    "revision": "5bb861695f4eaf6d5a29aea6fad924a4"
  },
  {
    "url": "assets/js/23.843ff1df.js",
    "revision": "82da9701612e84af608b4169802f1eb5"
  },
  {
    "url": "assets/js/24.ec8fc435.js",
    "revision": "db41a8223b9b649f2585819a4b90bce0"
  },
  {
    "url": "assets/js/25.6f07a140.js",
    "revision": "7868e9b7bb6ba1e0ccfdd8ad0bb27c20"
  },
  {
    "url": "assets/js/26.0fcf2f63.js",
    "revision": "a7d981e5e2587731853110aeeaba030e"
  },
  {
    "url": "assets/js/27.ffcaefd1.js",
    "revision": "c6bacd42c916d20b9dd95a4638925296"
  },
  {
    "url": "assets/js/28.b6ea81cd.js",
    "revision": "fd6bdd86b3b4c39cdcdc27448a5f5f08"
  },
  {
    "url": "assets/js/29.4ce9ee03.js",
    "revision": "9c900b5ab1b040adb20e2a877ea91d03"
  },
  {
    "url": "assets/js/3.d9c3e56a.js",
    "revision": "2c56764c5d8de6113868015eec09f906"
  },
  {
    "url": "assets/js/30.00b15600.js",
    "revision": "55a64946f427a5ec9add15df2ed9e6f8"
  },
  {
    "url": "assets/js/31.dedaa6d3.js",
    "revision": "df8dc011a33d4ab57c4ed7814373e30d"
  },
  {
    "url": "assets/js/32.08ba190f.js",
    "revision": "fe7ae19bee374882cf53033ac63856d3"
  },
  {
    "url": "assets/js/33.b6efef8f.js",
    "revision": "2b5cceac0896581a5c0c7c1ac135b84a"
  },
  {
    "url": "assets/js/34.8f4549f9.js",
    "revision": "18ad076f2fb0fca1ba69d72ee44d12b9"
  },
  {
    "url": "assets/js/35.dd52ff51.js",
    "revision": "f71b3e78186531f0b99e013173e634aa"
  },
  {
    "url": "assets/js/36.46ad83a9.js",
    "revision": "f5669cddfda741e171563df328282ee3"
  },
  {
    "url": "assets/js/37.1306171e.js",
    "revision": "d9a937a5b03dc53a492b0ef721ec4aaa"
  },
  {
    "url": "assets/js/38.dd2509b4.js",
    "revision": "89747b5d783dd0334b45c88494cafa71"
  },
  {
    "url": "assets/js/39.f4f2c7f5.js",
    "revision": "22a985ecc6f6712757bb117f8903ac73"
  },
  {
    "url": "assets/js/4.724b210e.js",
    "revision": "9a8a091807548ebf42b94bc52664bcf7"
  },
  {
    "url": "assets/js/40.e8e017df.js",
    "revision": "e38137b4e57a8e3296070e8d5dde4c6b"
  },
  {
    "url": "assets/js/41.011dd1d7.js",
    "revision": "b88720189ca8d8f0f5cd1627ce4901ad"
  },
  {
    "url": "assets/js/5.018a7975.js",
    "revision": "e4b95ff0e32b6c267406eca770b178ec"
  },
  {
    "url": "assets/js/6.6be0640f.js",
    "revision": "de12e378f3a5220fff542d56e33312ba"
  },
  {
    "url": "assets/js/7.d794c422.js",
    "revision": "8ae358a03250118cc4bfba216f6b601b"
  },
  {
    "url": "assets/js/8.401320fa.js",
    "revision": "bf1d8d1ce32231f3c1b8ce0d91e3bb52"
  },
  {
    "url": "assets/js/9.5c918f75.js",
    "revision": "a05aff855da23c7c54bbe946b2bb06cc"
  },
  {
    "url": "assets/js/app.4e1a2a58.js",
    "revision": "bb1296dbdb7eeac0ab8a6588a2032123"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "b43651b262638951ece59572e14eabef"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "0675d3517947fe18f0fc234364a5a0d9"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "f975a6ed5925e3aa56945653aea4ddb3"
  },
  {
    "url": "git/index.html",
    "revision": "23b76da82089ac5c01221ca02c48ebde"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "526fd90399fe1aec5ef35df01c804aed"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "b6f148360ac5384e3ed8ea5ad01a304b"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "959110895d7b3323ac175e87fad3de75"
  },
  {
    "url": "interview/base/index.html",
    "revision": "24a4bd4256ad02ac1d64e99808966e44"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "2278bfdbcc992ab3225440655f1453db"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "2c7c516d2c22f40a0388c8c4dd39341b"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "e75be12595a75d786f5c1d5e87f6ca39"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "8f851eb1db5acd17583d785eaae08f84"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "5f752f62098f9be3affda876ba9436fa"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "80db1856afa3137012999473a1819859"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "e740e4dc1ac1890e4f08c6a221c8957b"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "d01ca889563ae8b9fbc197ddd585d5a1"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "be4344d32ef2698edf3cdd2d23cdb6af"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "e6ab98d298e5e18df7f5a4dd35c13b1e"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "6ddde27de9512460122ca6e89b228dca"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "f21ef0dbc43631b4244b870396e1b5e3"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "30ab1c64ec137b3261f461344291d787"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "53da96c9380f937e3f24f51b8b6dd52e"
  },
  {
    "url": "interview/http/index.html",
    "revision": "2e3ff339f48f5633a427d87a800d0473"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "d5278c4a577bd5ea2686a3926a4fc80f"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "b43413f16c52e190b7ed28ba7147e945"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "c1ab6197b2d268d33e24ad1356953fe2"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "bf9375085658f6bb1a6fbd79ea47aff8"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "d4c66f814bbf230d14f43238f10fc0d0"
  },
  {
    "url": "style/css/index.html",
    "revision": "ddd0b8bcf6fca7e51965523ec4877000"
  },
  {
    "url": "visual/three/index.html",
    "revision": "30623d8b9323b98eb095e5c72dbbdf3f"
  },
  {
    "url": "vue/index.html",
    "revision": "f0156c4ddb0d2b825b4219cc3362a342"
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
