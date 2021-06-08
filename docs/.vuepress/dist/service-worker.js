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
    "revision": "d26ae1f708e983523aa0f36dcd510417"
  },
  {
    "url": "assets/css/0.styles.da587167.css",
    "revision": "35c6faed9c513e06f556560f8d62ef72"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5f6ed09c.js",
    "revision": "fa7d9e7fd1d279c7651f3af232e81671"
  },
  {
    "url": "assets/js/11.5566e216.js",
    "revision": "0106b67800a7c42e3636600b25e6d746"
  },
  {
    "url": "assets/js/12.574534aa.js",
    "revision": "e8b3975026bd6a318662ee2ba80679db"
  },
  {
    "url": "assets/js/13.518f3733.js",
    "revision": "6c78325c19fef0d0368490f53d11dd25"
  },
  {
    "url": "assets/js/14.e6520c74.js",
    "revision": "b4649f93b44803eb409726b0230508f7"
  },
  {
    "url": "assets/js/15.4a4c67a5.js",
    "revision": "46091d1824be50ff47a22497884c07e1"
  },
  {
    "url": "assets/js/16.6214fdd8.js",
    "revision": "98ad73ab3ed5597ee81242bc7b542955"
  },
  {
    "url": "assets/js/17.8999e8d7.js",
    "revision": "807962dc947304c2db3696b239b2bc81"
  },
  {
    "url": "assets/js/18.65ba3cfe.js",
    "revision": "1dcf3604a5b8e1fee57b19bcb17f774a"
  },
  {
    "url": "assets/js/19.1faf4125.js",
    "revision": "a8fe09eccd7cbf7345947a5e5321121c"
  },
  {
    "url": "assets/js/2.78050f59.js",
    "revision": "aed2f8e20800f55fcdb5edd6d23f9ef6"
  },
  {
    "url": "assets/js/3.68ddc96b.js",
    "revision": "ae2e01efa2b0ac115b68ea18ae96e4b3"
  },
  {
    "url": "assets/js/4.4b2aca6d.js",
    "revision": "7dae72ac5386ff9fc3aff483736b2f4c"
  },
  {
    "url": "assets/js/5.125c4057.js",
    "revision": "42816034d77d294a5cfc1efb1b892a30"
  },
  {
    "url": "assets/js/6.347f862c.js",
    "revision": "a4456da8071b9a5c08e570ca8d0bd7a0"
  },
  {
    "url": "assets/js/7.0d2bc2b0.js",
    "revision": "4225c95e9f4f6a733f8491a516c59677"
  },
  {
    "url": "assets/js/8.fa3bc348.js",
    "revision": "a822e4bc2dbdc89b0021e9e75c1bd733"
  },
  {
    "url": "assets/js/9.06de3169.js",
    "revision": "2be17c750c99753b7475391f8a3be2b0"
  },
  {
    "url": "assets/js/app.74bc1ec5.js",
    "revision": "00e26e51454e23e9fe740271f849d627"
  },
  {
    "url": "git/index.html",
    "revision": "b28d6ca98454b19ea572ec2307895876"
  },
  {
    "url": "index.html",
    "revision": "a37fbd54ccb67777bc995ef399eda916"
  },
  {
    "url": "interview/index.html",
    "revision": "15462a9caa1b43ac0a49018e0fc68a6c"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "da3ec2ae36e6204caca34c00617992dd"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "be5d5f9f981892f42c442e64f100fa18"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "0d838fa24f33b76520a2cda43ee66536"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "1cb50b61a80ad8a355c2b00f07f61e38"
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "c16261c72946dab6f459839f108d17ad"
  },
  {
    "url": "style/css/index.html",
    "revision": "0def1f68507b5828b0664b646c6ffa00"
  },
  {
    "url": "visual/three/index.html",
    "revision": "d21ddc7e5e1588817baf76dc99645d71"
  },
  {
    "url": "vue/index.html",
    "revision": "b99c5db164c2f33786d98afdfc9b0711"
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
