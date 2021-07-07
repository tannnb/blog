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
    "revision": "dffc0527eaafa8dd7b752ef2ffafbbd7"
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
    "url": "assets/js/10.b160852a.js",
    "revision": "1d989c36480a7729bb87cbbe3a554e0f"
  },
  {
    "url": "assets/js/11.35db233d.js",
    "revision": "4cee4296d559aea15cb08fa7738bfd26"
  },
  {
    "url": "assets/js/12.0fe8726b.js",
    "revision": "c10b1d5a48c91b14576dd216c4a91635"
  },
  {
    "url": "assets/js/13.7bc6a15d.js",
    "revision": "14925626625b530e85d06150622c21b1"
  },
  {
    "url": "assets/js/14.28e1e92b.js",
    "revision": "3cda2cfa39841157b78e1768c44455dd"
  },
  {
    "url": "assets/js/15.92c98c7a.js",
    "revision": "38159652c6307a16bc12f61c2684a59b"
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
    "url": "assets/js/18.7ebcb6f2.js",
    "revision": "1919eced089d4e617e4ea11a010f1ee9"
  },
  {
    "url": "assets/js/19.9b58294e.js",
    "revision": "5def5028e5b309838f05b3512b59dd2a"
  },
  {
    "url": "assets/js/2.3e22a156.js",
    "revision": "22057eb18a2ed58f6b4b81efb825353b"
  },
  {
    "url": "assets/js/20.739c56fc.js",
    "revision": "b71f8a7811294ee4ec7f5fe1149d26ab"
  },
  {
    "url": "assets/js/21.d9273615.js",
    "revision": "1009b2bd038b2f7fb3602268bba6d246"
  },
  {
    "url": "assets/js/22.3447d4a8.js",
    "revision": "4d13c9ba28e1b85699c9902786953ea6"
  },
  {
    "url": "assets/js/23.98a02d88.js",
    "revision": "a2918f81c715914cd9bd627e04d5267b"
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
    "url": "assets/js/6.6b7bd0f3.js",
    "revision": "c55bccc97012ca94f8579b85bfd198f9"
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
    "url": "assets/js/app.e56de946.js",
    "revision": "49638f4fbe49d776486d7fe6cb2da733"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "a58f16d963370c0752ec6ccf86bc9608"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "c3e0dff7c1df24d18fd5d78ec549cde8"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "73d5fddb5ad8a20fde25f8ad3d1a39ea"
  },
  {
    "url": "git/index.html",
    "revision": "6019ea47293b4a845400382bc102d7bb"
  },
  {
    "url": "index.html",
    "revision": "3220f0613abefc591d4f0308ee191cd0"
  },
  {
    "url": "interview/base/index.html",
    "revision": "76d421fdcc3eb5597f0d4c4b68f378fb"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "54a7705713d634e687efda3d5b11bcdf"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "fe6dfe76e53c449ab41e9db42177f0c8"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "c86eda398e908e0956be87ef2abad609"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "851604b14d3db0ff5407fcff877f8710"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "f5c74c57008edb14f864f84fb69677e1"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "516a4f85513eafc99e7304d3db50fc5d"
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "e45d842d148638829d635d0f0ec4a529"
  },
  {
    "url": "style/css/index.html",
    "revision": "e1f1ef316e0b5e22344aafddb4000033"
  },
  {
    "url": "visual/three/index.html",
    "revision": "bbcee7d6b962a5c293c1868641bbc50f"
  },
  {
    "url": "vue/index.html",
    "revision": "0a523f60ed1036f1a26ed380d393e7f5"
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
