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
    "revision": "b18be423eb2f588563efcb7adbcb864f"
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
    "url": "assets/js/10.0b560f9b.js",
    "revision": "053a1c7db6fd065e5b47972689ab7062"
  },
  {
    "url": "assets/js/11.4c7bd343.js",
    "revision": "fa3898f2eeaf569bf2a50dd82c6861ee"
  },
  {
    "url": "assets/js/12.618f5dea.js",
    "revision": "151ac787f69cf11162e799504555c830"
  },
  {
    "url": "assets/js/13.3181aeb2.js",
    "revision": "c51c94237d5b338355f90d8848752427"
  },
  {
    "url": "assets/js/14.5446679c.js",
    "revision": "e022161a042538768acdbd12c018430f"
  },
  {
    "url": "assets/js/15.546c8539.js",
    "revision": "4a11f1f4727893ec790870d7aea0952b"
  },
  {
    "url": "assets/js/16.78e25d0b.js",
    "revision": "aa373af33f7a73b257fecf817693f09a"
  },
  {
    "url": "assets/js/2.7ece2b98.js",
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
    "url": "assets/js/5.a54215f3.js",
    "revision": "4c5e72d0f777a5807586ab376ff412a1"
  },
  {
    "url": "assets/js/6.df95adee.js",
    "revision": "d756e9fe361f6b62bbfca7dbce7396cb"
  },
  {
    "url": "assets/js/7.bf66cac2.js",
    "revision": "8db4a2c4d7b4bb74a4a3a41acb7e7ef4"
  },
  {
    "url": "assets/js/8.4996b659.js",
    "revision": "29d169d9479766ba86333d543c4d68a0"
  },
  {
    "url": "assets/js/9.c43e242d.js",
    "revision": "794e804b6d961105a2039bfb2b803760"
  },
  {
    "url": "assets/js/app.7937197e.js",
    "revision": "10af9696e07e1275e172049ed6b27f3c"
  },
  {
    "url": "git/index.html",
    "revision": "dcaaa9f04b5a5f14a65f2c5c02967a18"
  },
  {
    "url": "index.html",
    "revision": "c2d0e09d8f083111440e5a85ef9984eb"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "60ebd00a5ca1c57b24d6ef65638c4f55"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "a2726ea36856ea9acecc368ac808ac21"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "2bfef9f450a8757b35cd2886aedeaad4"
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "bde1a876b8fd74f9350fc2b71756370a"
  },
  {
    "url": "style/css/index.html",
    "revision": "9531ac38d41d7caeed0c76f966108d79"
  },
  {
    "url": "visual/three/index.html",
    "revision": "6b6792b8a46a0783d6c1d968a1135f6c"
  },
  {
    "url": "vue/index.html",
    "revision": "b6fa14c5f5785e3e501a772b39d72ee4"
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
