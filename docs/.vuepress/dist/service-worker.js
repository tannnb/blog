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
    "revision": "a46aa9b5ff66e6cd6c0434cd5faa7b8c"
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
    "url": "assets/js/10.ceb63630.js",
    "revision": "ae087c04c1127d479ea82e9eba032904"
  },
  {
    "url": "assets/js/11.430a7924.js",
    "revision": "d5f0ea33438a921590eaa7f09bda1870"
  },
  {
    "url": "assets/js/12.21d80bc1.js",
    "revision": "abbc8300afd228bce76f0a863eefcf5c"
  },
  {
    "url": "assets/js/13.ad7bec85.js",
    "revision": "80999e3fe4c5ca8f10a7a33dd6a0f834"
  },
  {
    "url": "assets/js/14.fef8d72c.js",
    "revision": "e700beeb8012cd43a253d093bb52eeb0"
  },
  {
    "url": "assets/js/15.b0452527.js",
    "revision": "5ec57920e93560c85e3e9aa610cafdf8"
  },
  {
    "url": "assets/js/16.dae58c5d.js",
    "revision": "f4b70151744f99eb4f38baa490f7c068"
  },
  {
    "url": "assets/js/17.58d95801.js",
    "revision": "c8df789f6efc2eed75f7e8eac7ebce1f"
  },
  {
    "url": "assets/js/18.09e17483.js",
    "revision": "6e5ecb0082a60ae9b670b0afb7d55388"
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
    "url": "assets/js/6.512cb63a.js",
    "revision": "3e9872aca4ceee3062d54432f87701f9"
  },
  {
    "url": "assets/js/7.0d2bc2b0.js",
    "revision": "4225c95e9f4f6a733f8491a516c59677"
  },
  {
    "url": "assets/js/8.bf446527.js",
    "revision": "d8e82816ee0fef6867c4ec40e2130575"
  },
  {
    "url": "assets/js/9.648930af.js",
    "revision": "e9e29946baf0deb9faa269b9855f17be"
  },
  {
    "url": "assets/js/app.cc3c983a.js",
    "revision": "3970ac95c142fbc7851006d9999d549c"
  },
  {
    "url": "git/index.html",
    "revision": "73f1df15a729814b39377db4d9a3229d"
  },
  {
    "url": "index.html",
    "revision": "7c8548b75034ef28f09d4479184a5af3"
  },
  {
    "url": "interview/index.html",
    "revision": "7a013118591fefe4aefc44bc6b9588a4"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "a148ade05eb55f8d3fce3bcbce15ce16"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "7648608cb0f16fd1d3f913c745dc15d1"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "091816265783a426ca97e8145d53f021"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "d6b957e904c7f0bfdbf152226afab22e"
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "378a3664a044b304fada5f1e4d4296b5"
  },
  {
    "url": "style/css/index.html",
    "revision": "89244b15c815a139cbdca81bea07d033"
  },
  {
    "url": "visual/three/index.html",
    "revision": "e07f15e283bd89eb89609b9cd6e7b442"
  },
  {
    "url": "vue/index.html",
    "revision": "74d3c038e49318cc39fa6da8b7d1f8a0"
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
