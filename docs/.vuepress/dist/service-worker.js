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
    "revision": "218f8cc078f46ab3a404c7df0f956fee"
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
    "url": "assets/js/10.c519f585.js",
    "revision": "a5c35e2cd108cb9d4605b7639f3419ee"
  },
  {
    "url": "assets/js/11.a0106204.js",
    "revision": "57891f7e5b3e777c20c6e0ff30a9bc42"
  },
  {
    "url": "assets/js/12.7d3b9350.js",
    "revision": "dd319ec5ff0d60ab08270ff666e4b860"
  },
  {
    "url": "assets/js/13.c73c65f5.js",
    "revision": "27d9e37877adaeb6e109b61a2aab4169"
  },
  {
    "url": "assets/js/14.ec28b47d.js",
    "revision": "edd21f588c651c6e6d57d8d5cf5c464f"
  },
  {
    "url": "assets/js/15.703cc80f.js",
    "revision": "0614512e3d3d79c4c3f9b10597938e2b"
  },
  {
    "url": "assets/js/16.6ec2c753.js",
    "revision": "902a3ef9ccdbc33a2ccb52c13882977d"
  },
  {
    "url": "assets/js/17.b93c4347.js",
    "revision": "3780fffa8826e1c401c84c744fc55fc2"
  },
  {
    "url": "assets/js/18.38fee7f9.js",
    "revision": "e1f7f9d0706e668ac5325e09f240dde5"
  },
  {
    "url": "assets/js/19.47e1506c.js",
    "revision": "18c7bf1ecf98fe3c1b772443e3cc08db"
  },
  {
    "url": "assets/js/2.7ff060a7.js",
    "revision": "5d4ec0e55314c019aceaf201c7ed554a"
  },
  {
    "url": "assets/js/20.2a20b637.js",
    "revision": "3d53009060658d12fc1d7286c7ca95fb"
  },
  {
    "url": "assets/js/21.d5044944.js",
    "revision": "32084ace1349964e3eada99a1423b2cc"
  },
  {
    "url": "assets/js/22.53341b5e.js",
    "revision": "512a8c2e9933445ef758bd328267728e"
  },
  {
    "url": "assets/js/23.fb3e44a3.js",
    "revision": "b71c937304bacb0d7a5cfa3cbc300be3"
  },
  {
    "url": "assets/js/24.c9840497.js",
    "revision": "fc0bd3504049d8220517a797a1b0ccd4"
  },
  {
    "url": "assets/js/25.d2a97620.js",
    "revision": "4268530b160fac6d562fe366a15dcabe"
  },
  {
    "url": "assets/js/3.cfc78647.js",
    "revision": "cda08b6a019f9ba2591bb5c3dece6d64"
  },
  {
    "url": "assets/js/4.5e6b533e.js",
    "revision": "1613f0046e994dd6c31222065eafcdcc"
  },
  {
    "url": "assets/js/5.32ba6d7f.js",
    "revision": "a9b327c86f234a4c201c026b1a5950e9"
  },
  {
    "url": "assets/js/6.938e7faa.js",
    "revision": "b8f8cdb39ea96a1c6f97d520da9f6a90"
  },
  {
    "url": "assets/js/7.54f8900d.js",
    "revision": "218b0b6d3f9206556c7cbfdb5c84c33c"
  },
  {
    "url": "assets/js/8.970c1b62.js",
    "revision": "bb0aa27d3a1903f4747b8440c683404d"
  },
  {
    "url": "assets/js/9.b06881ed.js",
    "revision": "b6501ac824578dd06880745f522d856a"
  },
  {
    "url": "assets/js/app.ddf64eb6.js",
    "revision": "0d9bd9056b6efcae30fef3676ab44f4f"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "6c1e8beafe6fc0fecabb114f3397f01a"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "7cb44cc1de194bee669634af041aca44"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "ca100eca1a218f18ccfce774728252f6"
  },
  {
    "url": "git/index.html",
    "revision": "4e8cfb946a20def350f8801b875a62d5"
  },
  {
    "url": "index.html",
    "revision": "898ceac4317b007d9af8cd70c3bfd490"
  },
  {
    "url": "interview/base/index.html",
    "revision": "4302aee846cdc80866f36928026e9204"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "68be1c2799c2f62fab34708fdb6f01ef"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "9705f629908684e868fb86a608137eb8"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "311b1f388710efbfe9711cd65c2b4da0"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "02978387a2ce7eb17b3e6f55fd5c7564"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "0685bf8696a139d50305a800545dc830"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "523f9c5d13d816d656054a4023d10a52"
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "2501b0c1e9bc95d1ab6d82a3e73f271a"
  },
  {
    "url": "style/css/index.html",
    "revision": "b802e9f118e6d0f5c4ae3e91dee8c0d7"
  },
  {
    "url": "visual/three/index.html",
    "revision": "6c7fc258d2b05f81b69917b6351e563d"
  },
  {
    "url": "vue/index.html",
    "revision": "74013c3346a1f26b6ba58fbf9b3f3160"
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
