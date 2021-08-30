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
    "revision": "fb6e071a67077c2ca3e64971fad60e26"
  },
  {
    "url": "assets/css/0.styles.48a0ee12.css",
    "revision": "f3a3fd8f2ebb84df63370c2ad15eb19a"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fecf8860.js",
    "revision": "8eed063a7a801606896a46c5daa1154f"
  },
  {
    "url": "assets/js/11.029e3ba7.js",
    "revision": "31bb9ed8ccfaf7ec813558c3fc119d8f"
  },
  {
    "url": "assets/js/12.824cb017.js",
    "revision": "db53889f43173bf68abcc679c1a72c01"
  },
  {
    "url": "assets/js/13.624c30f7.js",
    "revision": "4b86f94edfcbcd8f31e4424cf5e3989e"
  },
  {
    "url": "assets/js/14.f789d604.js",
    "revision": "c0057baa494386dcb42b38f65ccff1a8"
  },
  {
    "url": "assets/js/15.0defe897.js",
    "revision": "175dfc532f346d0fee43bd4710bb7f21"
  },
  {
    "url": "assets/js/16.274e0658.js",
    "revision": "8c8f2d03e88ac7b69570be401a5d860b"
  },
  {
    "url": "assets/js/17.ee43b362.js",
    "revision": "6749cff21aa0c3e5d27ace42fc29a3b7"
  },
  {
    "url": "assets/js/18.ee9fb776.js",
    "revision": "eb44562e73f53191880355535125009b"
  },
  {
    "url": "assets/js/19.3b9ef262.js",
    "revision": "6943f328de3b28bd297b9ebabfa19821"
  },
  {
    "url": "assets/js/2.11a5d5e3.js",
    "revision": "c0479528f88a4199d68331df0b1df53f"
  },
  {
    "url": "assets/js/20.7f9f4a41.js",
    "revision": "d0c7a83789ed62472935aa37cabb19f8"
  },
  {
    "url": "assets/js/21.a02e4dba.js",
    "revision": "92994cf10cb02f94d3b8548c621ad056"
  },
  {
    "url": "assets/js/22.767b6445.js",
    "revision": "fcd25acfd3dc02acb2776550f404ea58"
  },
  {
    "url": "assets/js/23.a0fca2c7.js",
    "revision": "09f8e1f4cecf984977ba83e144c6b249"
  },
  {
    "url": "assets/js/24.71173555.js",
    "revision": "f8ac14d71c82fb2e20a47118f35e56f2"
  },
  {
    "url": "assets/js/25.f12cba27.js",
    "revision": "9f1909a3918d44aa14dd1d41386e9702"
  },
  {
    "url": "assets/js/26.967eeb52.js",
    "revision": "4a747055e3ea5fad3b2a762da57c1fba"
  },
  {
    "url": "assets/js/27.f35d832b.js",
    "revision": "790c5844ca087f35f714793e2772f61c"
  },
  {
    "url": "assets/js/28.6304848a.js",
    "revision": "60ddacf0b0d9d6221736f73d1abc618b"
  },
  {
    "url": "assets/js/29.307fd86f.js",
    "revision": "bb9a301f0339a7f5f549a05c9b7272cf"
  },
  {
    "url": "assets/js/3.dc5724bf.js",
    "revision": "13810cce4161b17dcbb79477685b40d3"
  },
  {
    "url": "assets/js/30.591c9baa.js",
    "revision": "9640d6c75068d90bbd6a4f5b57c052a0"
  },
  {
    "url": "assets/js/31.8eb509e1.js",
    "revision": "d63e8f3fa812af2ffa2bc9ab1da30f0f"
  },
  {
    "url": "assets/js/32.87a2c11c.js",
    "revision": "759134eb5175edf507096af0e0883e8c"
  },
  {
    "url": "assets/js/33.7f0429d5.js",
    "revision": "d7fb06a74fa100a55699f7148711bdfa"
  },
  {
    "url": "assets/js/34.803cbed1.js",
    "revision": "ad61a4b2310501c6fdd735b31dc24945"
  },
  {
    "url": "assets/js/35.882186f4.js",
    "revision": "ff6bf925fd4b65dbeeb51397417b4772"
  },
  {
    "url": "assets/js/36.1db2af1a.js",
    "revision": "f385759b6cc8a2fdc537b29038c26c1b"
  },
  {
    "url": "assets/js/37.42e055cd.js",
    "revision": "dce603da62b139a92f90252f6760d2e1"
  },
  {
    "url": "assets/js/38.6dba2636.js",
    "revision": "d1a4e922986342a260a4fa619b3ec285"
  },
  {
    "url": "assets/js/39.4e7692ea.js",
    "revision": "a76f898aa884ef9dce552557a4cf966b"
  },
  {
    "url": "assets/js/4.66589091.js",
    "revision": "5599886c35a21c32353a730bba191b02"
  },
  {
    "url": "assets/js/40.fb5cbcef.js",
    "revision": "8417c0403d74d87a7dc0a26b73e2060d"
  },
  {
    "url": "assets/js/41.d5b7efcc.js",
    "revision": "549d7463bd26e38bf1f5000185cdc078"
  },
  {
    "url": "assets/js/42.a8aa1d4f.js",
    "revision": "0bdf09815c4a22482955c9a6f3ea5db3"
  },
  {
    "url": "assets/js/43.2b7aed3b.js",
    "revision": "9c7e1898e3b663876ac3cc5e6b646ff7"
  },
  {
    "url": "assets/js/44.eace1ffc.js",
    "revision": "3363fbfd106c66fb0abef06318d0d022"
  },
  {
    "url": "assets/js/45.2ca03585.js",
    "revision": "aac94ba7c8133d881a4887574827f52e"
  },
  {
    "url": "assets/js/46.beb4a2fe.js",
    "revision": "47c488883b6efcbcb347b5fd49ad0420"
  },
  {
    "url": "assets/js/47.4b992f51.js",
    "revision": "e530ecdfbb9d5751b47225c8c8116ae3"
  },
  {
    "url": "assets/js/48.d7f3d12d.js",
    "revision": "4818c336b78905f781b183af929c199f"
  },
  {
    "url": "assets/js/5.2b527a99.js",
    "revision": "8773b481398e755cdc0e17c1876ac1f5"
  },
  {
    "url": "assets/js/6.9358a351.js",
    "revision": "a0d74a8284d8bc03a00f8dc222db5426"
  },
  {
    "url": "assets/js/7.cd67eb81.js",
    "revision": "ed4cf8ad9af57cd5d617263642719ccf"
  },
  {
    "url": "assets/js/8.7cc0cfa5.js",
    "revision": "1019256cc684eeee1dd0072fe9feacc8"
  },
  {
    "url": "assets/js/9.ed38aaee.js",
    "revision": "1bf7b88499b2ee79021b960897d2a0a6"
  },
  {
    "url": "assets/js/app.f1340f6e.js",
    "revision": "7349ef706c9f3c43e0f9e49fb70901f5"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "c3dc6f5e31e60836c695c1a12bc1177e"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "f4880378bcdb09d6852c560b22544254"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "819762b6c790daa574bd8a094ca135b3"
  },
  {
    "url": "git/index.html",
    "revision": "653f88b344e630eda4ab36376a831bcb"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "f7e51eedf3e2e20b76aab483d6135bb0"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "687bfee0264f8def766bb44cdf45bc28"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "8be4cfc1d9bfaf08cdfa0b529d8ad040"
  },
  {
    "url": "interview/base/index.html",
    "revision": "20184726926836b143b68b1702b585bb"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "c5aed7557b3c5199bf5f6662249f7be7"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "0a16b918b9f47593eb83adcaac18325d"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "90f2ae9eb3e8f2b08a9145d64f8e79d2"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "501733bd327f288c101a1d0bb6095cee"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "1b325113e219604e847aad17642c8448"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "d308deabeef29cf8eb24f74b28d391ae"
  },
  {
    "url": "interview/base/is_new.html",
    "revision": "f2e5ad82af95bde3a536ecf6ea9d989a"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "7b3d1c33f49b10ab164acef98b325326"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "c01f7c2200d4de29fad229b735228067"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "f7c7a95491dd0be1e78f4aa61cfccd22"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "8738005d209522c4ac78438eb1ab691b"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "ad10492b4be118a3316e874a3d7e7de5"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "fe5433bd8d2f41d097751465210df87a"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "55ae43fa259b9bdaf092fb6072b0ed60"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "73d0f430eea629c2fd3fab4f6c6d4f06"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "13bfe11ff9a861c3cf00e3c97e340e11"
  },
  {
    "url": "interview/http/index.html",
    "revision": "89f7d6440f3a2e252c44aaa562461dbb"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "92e4480c498a757b5ac7162fe0e82811"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "c226c28517a6450df1e3593a6811f5c4"
  },
  {
    "url": "javascript/know_in/index.html",
    "revision": "5e759a4d300b32d742279e7bea4ccce8"
  },
  {
    "url": "javascript/know_top/index.html",
    "revision": "1870a6906d5d6850d754c7295114e424"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "6c6716a6c1ea3c477d369a520f146ab4"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "6abf247ff1647c06db5d81ef335d9465"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "f5448f34e0543cf78b32feccc204f0ae"
  },
  {
    "url": "style/css/index.html",
    "revision": "9a1fc31fd20b4d336ee4eb88d4bb42aa"
  },
  {
    "url": "visual/three/index.html",
    "revision": "ee7e17a338db16d6e6274ae56d2f1340"
  },
  {
    "url": "vue/index.html",
    "revision": "0d9c2888123cc932cb85c96a8222f668"
  },
  {
    "url": "webpack/webpack_next/config.html",
    "revision": "fab6c06f2dd9326745ed385b739380af"
  },
  {
    "url": "webpack/webpack_next/index.html",
    "revision": "68c7c70c0a7b44ae898187bb7c7d8351"
  },
  {
    "url": "webpack/webpack_next/init_webpack.html",
    "revision": "16b1217b8c9136f1236fb11ef64b1a43"
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
