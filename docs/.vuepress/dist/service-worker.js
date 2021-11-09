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
    "revision": "4b47b767c14a65103a4031d103a0f254"
  },
  {
    "url": "assets/css/0.styles.48a0ee12.css",
    "revision": "f3a3fd8f2ebb84df63370c2ad15eb19a"
  },
  {
    "url": "assets/img/copy_1.01b70eb4.png",
    "revision": "01b70eb4408df561bf0e364fd3244b81"
  },
  {
    "url": "assets/img/copy_2.05e01dab.png",
    "revision": "05e01dab22ece870b30dd0399bad33ca"
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
    "url": "assets/img/eventloop1.147d7ee7.png",
    "revision": "147d7ee7508501846ad89d585b9bef85"
  },
  {
    "url": "assets/img/eventloop2.f9e66e6d.png",
    "revision": "f9e66e6d10a6b5ee3b944d55eb93bb27"
  },
  {
    "url": "assets/img/http01.666d7d20.jpg",
    "revision": "666d7d20aa907d8317af3770411f5aa2"
  },
  {
    "url": "assets/img/introduction_1.e0158cff.png",
    "revision": "e0158cffb40a3490b6dbbe208f3db7fa"
  },
  {
    "url": "assets/img/introduction_2.58563fa6.png",
    "revision": "58563fa6f22651a596aeea1673de1da6"
  },
  {
    "url": "assets/img/process_1.65ccad98.png",
    "revision": "65ccad984ace6963db1dc968973756f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a56d3878.js",
    "revision": "964509600ebd4de8c865e00211cb1b79"
  },
  {
    "url": "assets/js/11.a4d72d5b.js",
    "revision": "442bbd2f8f791eb5c46242cf9b36d66d"
  },
  {
    "url": "assets/js/12.8c1bb714.js",
    "revision": "a053de9ac56e78863d838e894814883b"
  },
  {
    "url": "assets/js/13.1ecd1742.js",
    "revision": "f5fd51358121b682562bacc125e44d46"
  },
  {
    "url": "assets/js/14.c1df6835.js",
    "revision": "f4323bd3c4fe48a3b95c80e84b95034a"
  },
  {
    "url": "assets/js/15.facfd010.js",
    "revision": "ae3f4090582d4006974fb77d66d3492a"
  },
  {
    "url": "assets/js/16.b18f27ec.js",
    "revision": "2696e1a822693fd7ebfc5eac9628b344"
  },
  {
    "url": "assets/js/17.03436f3b.js",
    "revision": "e11b14efbc6448835c51771bad0961d5"
  },
  {
    "url": "assets/js/18.07c8e78b.js",
    "revision": "6ea8dbe6a70b6d53df19e4804f61d1dd"
  },
  {
    "url": "assets/js/19.ef9178e4.js",
    "revision": "819b030fef331b9d79de509611e176dc"
  },
  {
    "url": "assets/js/2.a9e0bbee.js",
    "revision": "d19ea43e0cf60e2f5dff99cb31a9843c"
  },
  {
    "url": "assets/js/20.4174a449.js",
    "revision": "dcdd27aa860cff0cce92856ca7b2e0c3"
  },
  {
    "url": "assets/js/21.d65642cb.js",
    "revision": "fda06fc7ccd9e13ca8ed230107376b80"
  },
  {
    "url": "assets/js/22.2e11400b.js",
    "revision": "6008ee689c03ec843ea9784b58547850"
  },
  {
    "url": "assets/js/23.12ad352a.js",
    "revision": "76812e8f46e972c976ce6090cb597060"
  },
  {
    "url": "assets/js/24.d9237c3e.js",
    "revision": "a5169179530d91f4dbcfe2882d05cebf"
  },
  {
    "url": "assets/js/25.1b3a4514.js",
    "revision": "1662e17f62e274767fae664105c910e6"
  },
  {
    "url": "assets/js/26.1fe61afa.js",
    "revision": "1012601309d3223a5280b0357d6c2ca7"
  },
  {
    "url": "assets/js/27.11760948.js",
    "revision": "d61080a479526ff8d65ba8525e723316"
  },
  {
    "url": "assets/js/28.d1a7c5f9.js",
    "revision": "73fba4e3d73c13fe2a0313cf0d302cbf"
  },
  {
    "url": "assets/js/29.1d81a9ac.js",
    "revision": "abb3009161b2b8aa8fa5ce0be7b98f18"
  },
  {
    "url": "assets/js/3.f3df5bd4.js",
    "revision": "b3d74e199c94335de72cd860dff8cbfc"
  },
  {
    "url": "assets/js/30.e608553e.js",
    "revision": "91b62a1204cd4113e52af20ec5dcaf99"
  },
  {
    "url": "assets/js/31.cc72b0e3.js",
    "revision": "e8d3b9154914054d8d21b719cdb1b0fd"
  },
  {
    "url": "assets/js/32.860752a0.js",
    "revision": "c41b86abe76568bdfc0cb2d04099ef69"
  },
  {
    "url": "assets/js/33.8e1b0b77.js",
    "revision": "d948825a51bb1b6a53c515df205f88d1"
  },
  {
    "url": "assets/js/34.9014c97b.js",
    "revision": "0dc270263013de4694ee8e5e70e74e5f"
  },
  {
    "url": "assets/js/35.532b548b.js",
    "revision": "66d0834b71d2bf24b65c0904c300776b"
  },
  {
    "url": "assets/js/36.4de38811.js",
    "revision": "ac9f0f504e4387121950bd76b672cb39"
  },
  {
    "url": "assets/js/37.3827e049.js",
    "revision": "a7b9ae7fe75285990f7551f42185a886"
  },
  {
    "url": "assets/js/38.152b7399.js",
    "revision": "73af98941b35fdccacd73bcdb05f890f"
  },
  {
    "url": "assets/js/39.ba9656ae.js",
    "revision": "937ee9fa57ea2097a80d10fe59f8db7b"
  },
  {
    "url": "assets/js/4.390a07d5.js",
    "revision": "33065942d66dcf67e1f67e64f151842d"
  },
  {
    "url": "assets/js/40.aa257d94.js",
    "revision": "ce9bc68f7e2df3ba720ac8b7ebcfde8a"
  },
  {
    "url": "assets/js/41.ffb9247c.js",
    "revision": "53d0f479b8999a0d7fabc2e94338654e"
  },
  {
    "url": "assets/js/42.2fcbc526.js",
    "revision": "110221ffaed5d883aeedd81dcef71bb7"
  },
  {
    "url": "assets/js/43.3cf45c61.js",
    "revision": "f16b99843b18a69c2349b4a67eda313f"
  },
  {
    "url": "assets/js/44.cbb2e7ac.js",
    "revision": "7d91a78c21ef681427bf48333e4961c1"
  },
  {
    "url": "assets/js/45.de6fed0e.js",
    "revision": "a5dd655c46492e9ac5b3433cc8de5a24"
  },
  {
    "url": "assets/js/46.66122df6.js",
    "revision": "e2b57a62a45add699bf9c7a63f013540"
  },
  {
    "url": "assets/js/47.7f3d8178.js",
    "revision": "b29e7d35c5faa881771e32adecf84b39"
  },
  {
    "url": "assets/js/48.29226d5d.js",
    "revision": "6495d4b3131972de54ecf87a8e2e9fd6"
  },
  {
    "url": "assets/js/49.27133b9e.js",
    "revision": "a241da42b3ae7ec991c2b1079c7128c7"
  },
  {
    "url": "assets/js/5.c1c1f893.js",
    "revision": "a30421fc30be1977ff34923bc5cf855d"
  },
  {
    "url": "assets/js/50.068fe7cf.js",
    "revision": "660a7bbba9a9f1b63fadf8307419b9a5"
  },
  {
    "url": "assets/js/6.036e9f2a.js",
    "revision": "09e063c74c272302e24807c523df4df7"
  },
  {
    "url": "assets/js/7.cf73fabe.js",
    "revision": "d5bd9fa0cf8c520c4f7f018b6a8886ca"
  },
  {
    "url": "assets/js/8.aac0ca55.js",
    "revision": "6257db8366fbf2eb5120c3f4163b3ce8"
  },
  {
    "url": "assets/js/9.f3acbb9b.js",
    "revision": "f61b12483dad2b94d480cca2780a1522"
  },
  {
    "url": "assets/js/app.e791c676.js",
    "revision": "5df39aada332d1c8785497dd10de644e"
  },
  {
    "url": "framework/fork.html",
    "revision": "3a8a134c852e5affa1bca7fb9fd36bb7"
  },
  {
    "url": "framework/index.html",
    "revision": "ed05832a9b094dd7750b4b1f3aac068c"
  },
  {
    "url": "framework/lerna.html",
    "revision": "43c454a42c20b9fb712f44188e136db3"
  },
  {
    "url": "framework/vue.html",
    "revision": "1fd867a1527a19b86a337060ca18c7b3"
  },
  {
    "url": "git/index.html",
    "revision": "01fdfe4727116b1a9858b27ef2914a0a"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "fbbdc136d7c8fdcddc8ca7b7abb684b9"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "7ec276a64f8410258481babc6bf28a10"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "a5f7c49a8ac47be1dc1a5681406a0481"
  },
  {
    "url": "interview/base/index.html",
    "revision": "95a1d83af06f8342bfb012b99e61eaee"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "7faafd373a9e32b5d1c25ca84ddca483"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "f26849977f88bc4ebc5ad73ceb40011b"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "56f808c2c654677f527734baa53aff56"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "f2deca944cf01f56495eac083c98de17"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "832ca2ce94fb75f6837fc59012cf1989"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "070bca2ba4617564ae651bf19e74c7f5"
  },
  {
    "url": "interview/base/is_new.html",
    "revision": "59eba11a8c084e68ca4da857fe5a89c7"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "512b296f78d3fdad723f9af602fef70b"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "738e4a86f059104a72ffbbd467becee6"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "4653d9d20147cad60b5333b05bf47ae9"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "1f8f231689b9308b404a05c33f069264"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "75d303b20b0c1c32aa93cf46f158c760"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "8bb4e6db8288db0d486624b2b19220c6"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "912b6fb48e4b9c5b18a5546dab9ad3fc"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "f862987a7359cdcb51231fe76debff76"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "c50f682c9333b9d731ea10f0f5856734"
  },
  {
    "url": "interview/http/index.html",
    "revision": "1e8a83a8b7592d55361b9e2fc0234fcc"
  },
  {
    "url": "javascript/algorithm.html",
    "revision": "c1fbda452e6598ccaa8f1da183aa1355"
  },
  {
    "url": "javascript/es6.html",
    "revision": "ff97b45b298b3fda0f23bb31c7a1bfbe"
  },
  {
    "url": "javascript/know_in.html",
    "revision": "b5c3a5bb49204507f0cbc284f99641d6"
  },
  {
    "url": "javascript/know_top.html",
    "revision": "2a04e35a766e638ca0b02de07186892e"
  },
  {
    "url": "javascript/utils.html",
    "revision": "55a276fe455975c28baa7631298255e0"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm.html",
    "revision": "bc974d2160c57f9af37c2f6dbcbe99ef"
  },
  {
    "url": "style/index.html",
    "revision": "a20c175fe1d61ee5f571dae8124e5c45"
  },
  {
    "url": "typescript/index.html",
    "revision": "8ae98a645bb74c222b82c2aa7b7f7647"
  },
  {
    "url": "vue/index.html",
    "revision": "f089dd7e80d671922a9f0b89a64ef619"
  },
  {
    "url": "webpack/config.html",
    "revision": "f00d63f3d0137006da869545143c128f"
  },
  {
    "url": "webpack/index.html",
    "revision": "e723a41963792061e44ed87340bade1a"
  },
  {
    "url": "webpack/initWebpack.html",
    "revision": "b60647e349b190d3fe0ecf725a64264d"
  },
  {
    "url": "webpack/loader.html",
    "revision": "f221504655ba16af678b7d7ff695bf5f"
  },
  {
    "url": "webpack/plugin.html",
    "revision": "62332916fe362e44a11df54ddb990b64"
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
