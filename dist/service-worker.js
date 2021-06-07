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
    "revision": "18551ff5bb010465d48de90e01d38496"
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
    "url": "assets/js/10.a217283b.js",
    "revision": "a6996f550b5e1f667c820422b4f159d8"
  },
  {
    "url": "assets/js/11.fe08a7a0.js",
    "revision": "c0034f7b78941bcff482bd5c1edfebe9"
  },
  {
    "url": "assets/js/12.618f5dea.js",
    "revision": "151ac787f69cf11162e799504555c830"
  },
  {
    "url": "assets/js/13.91c098ea.js",
    "revision": "8a761f8a70d247dc97dcc71203c54dc7"
  },
  {
    "url": "assets/js/14.4bf2d82a.js",
    "revision": "d9a10612538a180a5fcd85959f9aef57"
  },
  {
    "url": "assets/js/15.fae4e3d1.js",
    "revision": "3c3a706b85504a9a6f35e4bc615afeee"
  },
  {
    "url": "assets/js/16.78e25d0b.js",
    "revision": "aa373af33f7a73b257fecf817693f09a"
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
    "url": "assets/js/8.522d36f9.js",
    "revision": "f92bf66c44bd47aa3c40612cfcd1cf88"
  },
  {
    "url": "assets/js/9.46620079.js",
    "revision": "8ac4798aed93f0f41588462c66316677"
  },
  {
    "url": "assets/js/app.b7853ff9.js",
    "revision": "911d6b0b0ac2439f0302c542777cad8e"
  },
  {
    "url": "git/index.html",
    "revision": "ba6420c75dd0e6e8660057fa4f9c4b41"
  },
  {
    "url": "index.html",
    "revision": "08903901f899ef4e479bb5e7389db83c"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "06b3d447d6f0fd1d6748609d222f56ad"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "97dc80413e98211e86705ab7da438e02"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "039fe4a4d15417f39fe934e6e095545c"
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "5e65c013154ee6049a33196c522eb6d7"
  },
  {
    "url": "style/css/index.html",
    "revision": "c59956aa079cd7d90ea5ae8d3db75228"
  },
  {
    "url": "visual/three/index.html",
    "revision": "23f1407fcf14a25470460157fd75e7c5"
  },
  {
    "url": "vue/index.html",
    "revision": "ad69ac9ef6d51cdc47989cc0ea83861f"
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
