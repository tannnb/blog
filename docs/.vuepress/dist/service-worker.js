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
    "revision": "d0746fe3ff624cfa236c8349eb6be835"
  },
  {
    "url": "assets/css/0.styles.48a0ee12.css",
    "revision": "f3a3fd8f2ebb84df63370c2ad15eb19a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4037525d.js",
    "revision": "00aace04eebcbefe6e04e3b068038872"
  },
  {
    "url": "assets/js/11.a89f6b46.js",
    "revision": "5d7b04f2ae92d91f5a6b46e32582bc42"
  },
  {
    "url": "assets/js/12.c34c6238.js",
    "revision": "3f45801eca25fe5f0fda9200e8685213"
  },
  {
    "url": "assets/js/13.98668401.js",
    "revision": "05c65e5c55e0c010b4aeeccc3816b06c"
  },
  {
    "url": "assets/js/14.04fa0819.js",
    "revision": "a9dfa661c90c14fbbac1fbda2c76b2a9"
  },
  {
    "url": "assets/js/15.ca49ddc3.js",
    "revision": "44654d9e246c6211ae6bb169303deb2a"
  },
  {
    "url": "assets/js/16.bbad6876.js",
    "revision": "d95ef1c3cf8ccecdb26defa06dcf954e"
  },
  {
    "url": "assets/js/17.6e0c4a25.js",
    "revision": "d0deb834020a735f08a062ef45ac8356"
  },
  {
    "url": "assets/js/18.1ca3bfd1.js",
    "revision": "edb1598c2b455334c37028e0bc778cce"
  },
  {
    "url": "assets/js/19.ce0a932e.js",
    "revision": "e471fbab1f83dcbfe39c071125d6e535"
  },
  {
    "url": "assets/js/2.60d6148c.js",
    "revision": "6f567fa2a91ef01befd607c6aa382644"
  },
  {
    "url": "assets/js/20.1e70316b.js",
    "revision": "2ed5b2b36f2bddace573175c1db9c6a5"
  },
  {
    "url": "assets/js/21.a0e40cdd.js",
    "revision": "b1135651f51ec9cf4ca54fb94c813c6e"
  },
  {
    "url": "assets/js/22.5921818e.js",
    "revision": "bd37e06c07769a4ab10d3137b9a0bb1d"
  },
  {
    "url": "assets/js/23.e4aba3e4.js",
    "revision": "edcfd091d52f78b3a5ba748a8b19fcf2"
  },
  {
    "url": "assets/js/24.f12644e5.js",
    "revision": "79a5e980d5dad577cf1a34731873be1e"
  },
  {
    "url": "assets/js/25.2752677f.js",
    "revision": "6820d0919bd3cbb2cb7f798243491a7a"
  },
  {
    "url": "assets/js/26.d5c3d8f4.js",
    "revision": "b0659f0c60250e71e0df3f6e5ac8c5b4"
  },
  {
    "url": "assets/js/3.b2029ee2.js",
    "revision": "52830519f55751a5ce3aebecc3c66507"
  },
  {
    "url": "assets/js/4.0e87130d.js",
    "revision": "d3aad69763c851de7378eeb6a7d85e6d"
  },
  {
    "url": "assets/js/5.427b5562.js",
    "revision": "f335c4e673f4b73cdd915acb35f344e2"
  },
  {
    "url": "assets/js/6.026ec6bc.js",
    "revision": "77793bea1133203d79f5e46c256edcca"
  },
  {
    "url": "assets/js/7.f5013773.js",
    "revision": "20a57dd8355427406b8af989c2223525"
  },
  {
    "url": "assets/js/8.bebb982f.js",
    "revision": "3cd3584e29d6c05545f2b9483f0a3f5f"
  },
  {
    "url": "assets/js/9.5ca446bc.js",
    "revision": "a6f2aca38d63761eafadecdebc3b6525"
  },
  {
    "url": "assets/js/app.206bde13.js",
    "revision": "c6cc3096c537e3b567c78873e8c4b9de"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "c8ddae16acb953e9dd40e08aacf06393"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "d899679aec709c3996c88e0233f13bc9"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "359f81fd3a807bc45dc5f51709b43edb"
  },
  {
    "url": "git/index.html",
    "revision": "f7677b397de97fb3f96aaada166e6bee"
  },
  {
    "url": "index.html",
    "revision": "896a1624d0143fd8cf303e22707cb8d8"
  },
  {
    "url": "interview/base/index.html",
    "revision": "82dfb0d5d8bed641dbab4947c2f05726"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "cc33dbda45cbff20263b0fcc0d719681"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "0abd5ecefb1e2e25ffb0c1b0568f7453"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "88ccf804727a94154e938cb13e8a5e5a"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "3673ed8350597898f37ec239f569914b"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "45fa6c8be6ea9496e173b2fe88494f8e"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "ddde18bf1b6dbc4a5bc32ec4b3d09c9b"
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "8698dfc1d7990c1614037e1535d3472b"
  },
  {
    "url": "style/css/index.html",
    "revision": "949e5d9481e87f4339d17a7a1aaa2665"
  },
  {
    "url": "visual/three/index.html",
    "revision": "58ed09ab94dd9173a50cf9f5239dac7a"
  },
  {
    "url": "vue/index.html",
    "revision": "ccbf8f767834a99f4ad02928aca657c0"
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
