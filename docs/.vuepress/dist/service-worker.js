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
    "revision": "4d613621f1440b6977efeb8ad41b47c7"
  },
  {
    "url": "assets/css/0.styles.48a0ee12.css",
    "revision": "d752a70a9b7ce22d16448a1276122088"
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
    "url": "assets/js/10.3578bf2e.js",
    "revision": "15517d3941f35abc7134ba3cbe5ee4be"
  },
  {
    "url": "assets/js/11.121e9e68.js",
    "revision": "36520f85a465355176f18e0711c2acf7"
  },
  {
    "url": "assets/js/12.8a924b09.js",
    "revision": "bccd879bf958dfea68c077ec5b401604"
  },
  {
    "url": "assets/js/13.0c00faa5.js",
    "revision": "54deeb8856fcb731663c930cd0db36eb"
  },
  {
    "url": "assets/js/14.946b536d.js",
    "revision": "053ebcdef00f475f1d6b7a6c7d5c0a5b"
  },
  {
    "url": "assets/js/15.00dd3280.js",
    "revision": "44bfadba79f53cf2f7dffaabcc5a6770"
  },
  {
    "url": "assets/js/16.bd9c4aaf.js",
    "revision": "df13d8ad3e4a1569b1f0a02d92ba2dae"
  },
  {
    "url": "assets/js/17.5f007997.js",
    "revision": "ffe3c347584bf7eba0dddf098a97509c"
  },
  {
    "url": "assets/js/18.18758eec.js",
    "revision": "abe56bfa458d8fd5e695039ff8f85d9f"
  },
  {
    "url": "assets/js/19.0be4cb1b.js",
    "revision": "d403447429845f33eb0b3789a84513f1"
  },
  {
    "url": "assets/js/2.046a2e4a.js",
    "revision": "cd7ac027952b9eaf306d8c79614fd127"
  },
  {
    "url": "assets/js/20.b9308d4c.js",
    "revision": "08d4b7b24e7e9a605f6e918aac0c349d"
  },
  {
    "url": "assets/js/21.8595db26.js",
    "revision": "4daaf9aa3c956c6976f57496df923bb2"
  },
  {
    "url": "assets/js/22.9148dc8c.js",
    "revision": "083955703dd94c130cd32fef905e2f64"
  },
  {
    "url": "assets/js/23.bb5ca967.js",
    "revision": "2dbdd80159ee4e0b855cb303924d93db"
  },
  {
    "url": "assets/js/24.2f3720de.js",
    "revision": "12bde0dbc0e5a24ff4c106e5c22a8b51"
  },
  {
    "url": "assets/js/25.0bb43174.js",
    "revision": "f71e999a785dadcabd7694d7791177f0"
  },
  {
    "url": "assets/js/26.a15b7f43.js",
    "revision": "15d649551be74dd7102fed347b349d09"
  },
  {
    "url": "assets/js/27.3fdcecf2.js",
    "revision": "45c28b6225fe258c234141cdd29be6e4"
  },
  {
    "url": "assets/js/3.66c76d70.js",
    "revision": "701412b810c2e03519e8fcb87412007d"
  },
  {
    "url": "assets/js/4.116e71ab.js",
    "revision": "0c7586359094eb649363813f728a7fce"
  },
  {
    "url": "assets/js/5.377bc090.js",
    "revision": "e1dc9e0c06ed27e6e21528d27b74280d"
  },
  {
    "url": "assets/js/6.bc922c30.js",
    "revision": "9c33f96cb322edb308d49d28542590c2"
  },
  {
    "url": "assets/js/7.b5e6096c.js",
    "revision": "3e3a186ef148bcf1240ff9b93158b7f0"
  },
  {
    "url": "assets/js/8.a72cd557.js",
    "revision": "d63f8a4b5e99596ae86a7f90a7540dd2"
  },
  {
    "url": "assets/js/9.1c6f87cc.js",
    "revision": "67a0dcec192eb533fdec1df77ea4cc5c"
  },
  {
    "url": "assets/js/app.3566850d.js",
    "revision": "a9a12c99e8b056d531a856aa7c340da3"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "6a1051452dccb358f4ed4b0eee3b9290"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "8eed00bbc76bc2d5dc7a39c885b5d99a"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "9eeb8acd28d3e52a07ef2e8f6850193a"
  },
  {
    "url": "git/index.html",
    "revision": "397884666a82eaeabffd266922d59388"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "f028e294759c348751e7e85788807f05"
  },
  {
    "url": "interview/base/index.html",
    "revision": "ff9638de48e7adbaef1b08ebeda8ffbb"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "97a1f86ffd1c83cfc45014499875340e"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "b41878dfb4e4c30caac70271d7fefe43"
  },
  {
    "url": "interview/http/index.html",
    "revision": "133ef4b0ce7cf4f55effbca333ab6510"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "d47e0bab984e0b8cd363f2c6977edad7"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "49848397538eb2974470e142c0d88bca"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "e7846408714d314fbecf804ee587dbbe"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "dc6986fce49afd9c3ceaebd71a9a68ce"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "17145b5a65617a72d6836e1d26397199"
  },
  {
    "url": "style/css/index.html",
    "revision": "1f114389562f8f8635d313fbbe83ca53"
  },
  {
    "url": "visual/three/index.html",
    "revision": "08391787b3e2474e7994162fba184d84"
  },
  {
    "url": "vue/index.html",
    "revision": "5b8077e88c404f757de7afc038fb2176"
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
