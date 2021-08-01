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
    "revision": "a4209753860df567e4e7af81d0f02719"
  },
  {
    "url": "assets/css/0.styles.827ecb93.css",
    "revision": "eab6d9d73d0bb7d7a8351c03ade23acd"
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
    "url": "assets/img/http01.666d7d20.jpg",
    "revision": "666d7d20aa907d8317af3770411f5aa2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.06ef08a5.js",
    "revision": "bccd8cdac5ef2cdc85cd3843c26aa15c"
  },
  {
    "url": "assets/js/11.b0297634.js",
    "revision": "048237677ea36d9944c76faafbe45968"
  },
  {
    "url": "assets/js/12.c3308370.js",
    "revision": "3a51853ce181eb2d97092da4aeafceae"
  },
  {
    "url": "assets/js/13.83da7008.js",
    "revision": "d8d98b5bf4e4d9cfe66408a5a89f3ff0"
  },
  {
    "url": "assets/js/14.e7285075.js",
    "revision": "928a93d56c6a5e4d42298555160e6593"
  },
  {
    "url": "assets/js/15.1627f885.js",
    "revision": "a2087f51b8d277c03698b4d99ad69128"
  },
  {
    "url": "assets/js/16.14dde78e.js",
    "revision": "865f3c74ce33f3f9991f91775491b57d"
  },
  {
    "url": "assets/js/17.bd687686.js",
    "revision": "d371f5e049d6d2e6716e5aef65433c0a"
  },
  {
    "url": "assets/js/18.639d5d03.js",
    "revision": "7a490fda572d88e09612ceb0e47e8cc4"
  },
  {
    "url": "assets/js/19.ac9cf8b2.js",
    "revision": "7b5eeaa64dc79480aad4be98164e4993"
  },
  {
    "url": "assets/js/2.e2270b34.js",
    "revision": "1518d35db95232540e48f31d83fc262a"
  },
  {
    "url": "assets/js/20.c79ccdf8.js",
    "revision": "7699c40d719f1b208cea438033294488"
  },
  {
    "url": "assets/js/21.613ef698.js",
    "revision": "3319729d313d6851119d67273f2bae03"
  },
  {
    "url": "assets/js/22.e29e1e51.js",
    "revision": "8d6e5e2c9d89f9d4aedf1c7ac2fa4467"
  },
  {
    "url": "assets/js/23.a56f74b7.js",
    "revision": "842f80c1b341ce74fd192f5b56f1fc97"
  },
  {
    "url": "assets/js/24.61962af2.js",
    "revision": "cdd7487834d48099120cbcc1087928a1"
  },
  {
    "url": "assets/js/25.97bf9ef7.js",
    "revision": "327285ccfec9244485143e6b233848d7"
  },
  {
    "url": "assets/js/26.93fd62f7.js",
    "revision": "b52b1e8ef96d381595f15ebbc5d621ec"
  },
  {
    "url": "assets/js/27.46c93195.js",
    "revision": "cfbfe23a604bba11fe80bcfb7608d07b"
  },
  {
    "url": "assets/js/28.203e7041.js",
    "revision": "91d1e5285a299a706802029e0beffa4b"
  },
  {
    "url": "assets/js/29.340b2971.js",
    "revision": "968c83dc4b4de4f766bf031a6334809b"
  },
  {
    "url": "assets/js/3.d9c3e56a.js",
    "revision": "2c56764c5d8de6113868015eec09f906"
  },
  {
    "url": "assets/js/30.4b3881c8.js",
    "revision": "daa9729e88941954dede9949157e585b"
  },
  {
    "url": "assets/js/31.55882029.js",
    "revision": "077150cadc4f48b60de83bee24af49df"
  },
  {
    "url": "assets/js/32.456ff9eb.js",
    "revision": "146ef0a3c33d7e3f2774d11cf52a9349"
  },
  {
    "url": "assets/js/33.d2975bdc.js",
    "revision": "f965f85b148c0cbaa4b77c124354f7e8"
  },
  {
    "url": "assets/js/34.6a819615.js",
    "revision": "4a932f9ee2ee98d163f1e18dd04e54ae"
  },
  {
    "url": "assets/js/35.8df8f988.js",
    "revision": "d3bd30a8b49014fbd073de66c96d6d74"
  },
  {
    "url": "assets/js/36.3100525a.js",
    "revision": "d01d9f542b8b79e9c03c784c479fcee4"
  },
  {
    "url": "assets/js/37.bd0f3ad9.js",
    "revision": "0e5306a2ee4e9e4fd457faa310c3691e"
  },
  {
    "url": "assets/js/38.397ef17f.js",
    "revision": "1fcecd111689d4c2c0077471ecad0198"
  },
  {
    "url": "assets/js/39.f4f2c7f5.js",
    "revision": "22a985ecc6f6712757bb117f8903ac73"
  },
  {
    "url": "assets/js/4.724b210e.js",
    "revision": "9a8a091807548ebf42b94bc52664bcf7"
  },
  {
    "url": "assets/js/40.0e16ba89.js",
    "revision": "4a947f9016d61a84d697af6aa5b78f5c"
  },
  {
    "url": "assets/js/41.011dd1d7.js",
    "revision": "b88720189ca8d8f0f5cd1627ce4901ad"
  },
  {
    "url": "assets/js/5.c3a8f169.js",
    "revision": "3ef015d89f3947f8f54d040137cc67d1"
  },
  {
    "url": "assets/js/6.096936fc.js",
    "revision": "c90c440adc465d4946406d760c6f663a"
  },
  {
    "url": "assets/js/7.d794c422.js",
    "revision": "8ae358a03250118cc4bfba216f6b601b"
  },
  {
    "url": "assets/js/8.401320fa.js",
    "revision": "bf1d8d1ce32231f3c1b8ce0d91e3bb52"
  },
  {
    "url": "assets/js/9.ce53438a.js",
    "revision": "310408fafc9e8f6893929ac93018cef7"
  },
  {
    "url": "assets/js/app.b2021c55.js",
    "revision": "e8f6bd59d666e282875e811be7643547"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "73df6932d65fe42100a125b0fd1c2c89"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "4ac20aa353efca48abf08780f41f3b04"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "06880279f33bc8360e3d7d359a2b0402"
  },
  {
    "url": "git/index.html",
    "revision": "e59be0022a56d0228bd962f9d9678853"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "92e27f3d88044d5c8a7805461566bc63"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "b63f55d2408e27324a1fcce6ca44b676"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "2a7dbcaaec6a5d9e3e50f1dd86e7d33c"
  },
  {
    "url": "interview/base/index.html",
    "revision": "8034f5133beea6b62ae85e2e3f41b20d"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "f2d39636dd837b578950e25100da6add"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "b43637f11b1994dc1c31c74a5b2d45d0"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "9fae93210b4c6cee3146e4eab667c744"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "2d3a472f3e348c4221856280722f6c59"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "31d228c1a976ba4263d21741144249eb"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "a81c798118d295cef32d501e69d2c1af"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "793a811420779b2f6ca68e4d7bd294b2"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "a91e80cbea2a9bf99c4ad5babce48bd7"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "caad4a6aba1b17c916c4cbd2a0ed71dc"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "a47c82a1b0a67893b0c8f4505923638c"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "271eeb26f473a218ea132c00e82a4f5c"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "2a1cebdfa43b913918dbaa616782e11c"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "4d38277f0faf17b885a44067aeba4281"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "6b8ff81c52363463cbc36e6deaa48d62"
  },
  {
    "url": "interview/http/index.html",
    "revision": "b119cc26c60fa640325312109c199f94"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "60c26983d2aa54d5e6ca28746d3b2ba5"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "0eb68c011d4be09858081ee9617a879f"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "190dfa0e48b172775025e633e32be72c"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "00dfb024432a908bd5959c570cf81d6e"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "01be1208a1cbc4e395b8335e48474b5b"
  },
  {
    "url": "style/css/index.html",
    "revision": "eb66384c0f72718f95f329a2fee14abf"
  },
  {
    "url": "visual/three/index.html",
    "revision": "30e780530049340719685347e052202c"
  },
  {
    "url": "vue/index.html",
    "revision": "6f29e5cd27415cee7c7a31967d5ba41a"
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
