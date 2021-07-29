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
    "revision": "2308dc8ee1c90a6b94018d49d1d76c09"
  },
  {
    "url": "assets/css/0.styles.827ecb93.css",
    "revision": "a2b110ffe7278b0de58f1d7536995703"
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
    "url": "assets/js/10.35b803b9.js",
    "revision": "15517d3941f35abc7134ba3cbe5ee4be"
  },
  {
    "url": "assets/js/11.951114a1.js",
    "revision": "36520f85a465355176f18e0711c2acf7"
  },
  {
    "url": "assets/js/12.1f31a829.js",
    "revision": "54a54e036c02e428b3d840364e306645"
  },
  {
    "url": "assets/js/13.ebafb354.js",
    "revision": "f73d017c27642f00a1b0a2a903463951"
  },
  {
    "url": "assets/js/14.cc292ff3.js",
    "revision": "47cec724fbfd30cea702c33142fd9c55"
  },
  {
    "url": "assets/js/15.a346cd90.js",
    "revision": "e3bf3e761308526a34d69e958cf14419"
  },
  {
    "url": "assets/js/16.8a7a2cca.js",
    "revision": "992a5c1c1f34df9f1ef09a0be1d17572"
  },
  {
    "url": "assets/js/17.c9d5849c.js",
    "revision": "ffe3c347584bf7eba0dddf098a97509c"
  },
  {
    "url": "assets/js/18.c3ce0a6d.js",
    "revision": "44cdd051eb23366e709462b30c302903"
  },
  {
    "url": "assets/js/19.3b82a642.js",
    "revision": "287e21cf6fc9cc586ea0a0760c9c91b8"
  },
  {
    "url": "assets/js/2.adbcf5de.js",
    "revision": "cd7ac027952b9eaf306d8c79614fd127"
  },
  {
    "url": "assets/js/20.2d18e5da.js",
    "revision": "59beeefcb8253470f7acc35da9367d5a"
  },
  {
    "url": "assets/js/21.ba2a16df.js",
    "revision": "09c51bdb35f68074f0959fae2714c0c5"
  },
  {
    "url": "assets/js/22.20e3b3f2.js",
    "revision": "9df9d47a5a8f231ce14be4ac3201d247"
  },
  {
    "url": "assets/js/23.a8428001.js",
    "revision": "b89bb753ddb1a3fb9a9ee194a715e928"
  },
  {
    "url": "assets/js/24.77deedf1.js",
    "revision": "519e870e9b1082d7500e571686f187ff"
  },
  {
    "url": "assets/js/25.91c4536f.js",
    "revision": "f71e999a785dadcabd7694d7791177f0"
  },
  {
    "url": "assets/js/26.f4c3c45c.js",
    "revision": "e171619de93f3f8f23e63b30844954aa"
  },
  {
    "url": "assets/js/27.3fdcecf2.js",
    "revision": "45c28b6225fe258c234141cdd29be6e4"
  },
  {
    "url": "assets/js/3.257907be.js",
    "revision": "701412b810c2e03519e8fcb87412007d"
  },
  {
    "url": "assets/js/4.60d68b7a.js",
    "revision": "0c7586359094eb649363813f728a7fce"
  },
  {
    "url": "assets/js/5.1583c6b8.js",
    "revision": "d2baec6c7201e3daa03b9f5d68ac6f5f"
  },
  {
    "url": "assets/js/6.4bc26f35.js",
    "revision": "b612b974cdb6ee69f709837e12061bcf"
  },
  {
    "url": "assets/js/7.3794942f.js",
    "revision": "3e3a186ef148bcf1240ff9b93158b7f0"
  },
  {
    "url": "assets/js/8.8413bc9b.js",
    "revision": "af72330d155daf48dd75a90650e065e0"
  },
  {
    "url": "assets/js/9.1937c09d.js",
    "revision": "67a0dcec192eb533fdec1df77ea4cc5c"
  },
  {
    "url": "assets/js/app.34846043.js",
    "revision": "0066d38c0cdedf64f0df517388d33fff"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "52bfe7a4ae01f158c0f3907b22fc2b89"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "b28841d7a8a28fbcf402923a8bcf37ff"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "02adc6e178d6497f9d6d5c12263442b3"
  },
  {
    "url": "git/index.html",
    "revision": "aef5a95785d56bc8c2f298f651ffcafb"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "29c57e1f0239c89903b9eb351e741316"
  },
  {
    "url": "interview/base/index.html",
    "revision": "cbea01c8b753f1bd82d381ab80590554"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "a776040edff65dd604c00094ad8a5fb6"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "79878d70990e9c7745f948e6a136cd35"
  },
  {
    "url": "interview/http/index.html",
    "revision": "5dae9cc0a4bcd47ef8a92c4c27a865a1"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "b72df11cfb3e7a085da4006fac5ad8d1"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "bca40d3023c8a81b940309c0c57d84ad"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "ae86097b45c75d2a63aa320b80c01b27"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "530c328e53c792dce7b104012c296c31"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "2538efc7afefdf1057f19a9debbc2dd3"
  },
  {
    "url": "style/css/index.html",
    "revision": "2f67071293145ac04da59ec35dc45d5a"
  },
  {
    "url": "visual/three/index.html",
    "revision": "1d4a0bf4d13d0fb18014a6834c7aa616"
  },
  {
    "url": "vue/index.html",
    "revision": "1d8ca6f410703f44a59efa397eb52e70"
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
