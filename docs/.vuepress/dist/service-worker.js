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
    "revision": "d0b4cf4dec0e36d9c823dedc6294b5dd"
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
    "url": "assets/js/10.49584e80.js",
    "revision": "7b2e9533de29f52bedca4b89e6491f1f"
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
    "url": "assets/js/20.97bdde46.js",
    "revision": "f6b8c1ceb0bac25fae0345fe53392532"
  },
  {
    "url": "assets/js/21.b437f88f.js",
    "revision": "619e7a019ea05a96da969bc1ced4b77d"
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
    "url": "assets/js/24.9f9a990f.js",
    "revision": "efb681ef742a6ca6f5f07b78c29fb8e1"
  },
  {
    "url": "assets/js/25.f12cba27.js",
    "revision": "9f1909a3918d44aa14dd1d41386e9702"
  },
  {
    "url": "assets/js/26.3b28c77c.js",
    "revision": "f48f7a51316d46116f4c41428505c461"
  },
  {
    "url": "assets/js/27.922a6d0c.js",
    "revision": "c4935e789fb3e7f2fa904f4bd7ed19a0"
  },
  {
    "url": "assets/js/28.7c87e556.js",
    "revision": "1a7f327a760bb163a644fb97f559879e"
  },
  {
    "url": "assets/js/29.d28c535b.js",
    "revision": "39f0e035053a3c3158344178662e6783"
  },
  {
    "url": "assets/js/3.dc5724bf.js",
    "revision": "13810cce4161b17dcbb79477685b40d3"
  },
  {
    "url": "assets/js/30.ed9dec3c.js",
    "revision": "07d4e295aded2c95b0783e9f28713969"
  },
  {
    "url": "assets/js/31.61442b1f.js",
    "revision": "b41d5419a79d70e1b372395e7bc9ce1e"
  },
  {
    "url": "assets/js/32.34c78cd8.js",
    "revision": "c4202563e3f0fe8f262a4ae86c4a52bf"
  },
  {
    "url": "assets/js/33.821ea99a.js",
    "revision": "dcbd0b3524ab137b2336a744ec002b78"
  },
  {
    "url": "assets/js/34.0865b4a8.js",
    "revision": "db1051e664c8a462b19dbf59f342bcc5"
  },
  {
    "url": "assets/js/35.d9ee869b.js",
    "revision": "3482625064cef28dfd67296890973fbe"
  },
  {
    "url": "assets/js/36.f417359b.js",
    "revision": "4a1dcfcb539bacc89303fc018d49d65e"
  },
  {
    "url": "assets/js/37.81878ffc.js",
    "revision": "bf860f78b1f6b3e564290b0e3628b82d"
  },
  {
    "url": "assets/js/38.5a48903a.js",
    "revision": "7153bafd8ba66b214bf47f19d25d9ad6"
  },
  {
    "url": "assets/js/39.7ce476e6.js",
    "revision": "e9dc005b0074ae1a3a579bff8ee07f89"
  },
  {
    "url": "assets/js/4.66589091.js",
    "revision": "5599886c35a21c32353a730bba191b02"
  },
  {
    "url": "assets/js/40.1a3df49e.js",
    "revision": "1b0fba5ba6a85ed004b27db4cfdedfc3"
  },
  {
    "url": "assets/js/41.26736519.js",
    "revision": "ca4a116e4decc37af7def324eb7d65fe"
  },
  {
    "url": "assets/js/42.ad7a6bab.js",
    "revision": "81ce9150363137e48c2678a95386f771"
  },
  {
    "url": "assets/js/5.4810989d.js",
    "revision": "36f41681af4e25060b3276e4f55370ff"
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
    "url": "assets/js/8.43612922.js",
    "revision": "fa4982b491eec217158bcd88d8c29a44"
  },
  {
    "url": "assets/js/9.d6b334e8.js",
    "revision": "84ec839f7d09d972062ae0bd583a17cd"
  },
  {
    "url": "assets/js/app.e6ff0b9d.js",
    "revision": "13874fc3230864f4c57c316d09cd0232"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "630dab8231998843802497d8d61f50f1"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "019a8f8fb2da2189d7af0deeaa9405f4"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "1fe6976577f8dc1fce8417c0373254db"
  },
  {
    "url": "git/index.html",
    "revision": "2c2975f1e3591a1a3119c54b50aa8440"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "66bc0058565bc3a7df10e6c465976251"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "59796fcd2971821811c78ec9f051e5d6"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "d6d3e2027657ac83230ab84e09450de9"
  },
  {
    "url": "interview/base/index.html",
    "revision": "c3e3e6c5eee1d8a700e7cfbd662f8586"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "215e62619f1db0173068eb2212976ada"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "ed279d0d2b8b0b1456e9046e7fa1e521"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "7b2d931714f105c9901250ed3647ecf5"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "b3426967fa6b6f923aea6ac37c1acef1"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "fa26432ab6eac5546978ee4813fc0370"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "9ed44fcba6d3976e40358c3133b69243"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "3d01d127418631a7a805fa56db819775"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "d7a6edc44d51f9a1f5d30ea7cb21bc1f"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "871b01e91b536e90aca9c4f41d9d19bd"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "a0f02ecee54ad0003e11b5c1b2f7abe6"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "a5aa354c6ddcc2a57309f1c93960189f"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "67c976617b61260756026ff7ae1fd338"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "94abac021121509c22309b0f36cdd3f8"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "5a252ceff99e07c360efb1e0a0acd1e1"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "c78124f9706be3fe5061341bfdf4a4fb"
  },
  {
    "url": "interview/http/index.html",
    "revision": "75f09460b43d13fce8a4dd64faf84835"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "4f698cabbb3b18b648ee0aabf6998fb7"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "a1746baa69b0c7cb0c21dac41ada59a7"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "aad5d500d8560c845034fd3fa7b99b47"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "c7739c9c509160f92a0e54a0dcbb9139"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "cff088f2472a976d2b369c7a82f7b205"
  },
  {
    "url": "style/css/index.html",
    "revision": "670cacbbc76ca08db5df7e35a4a850d4"
  },
  {
    "url": "visual/three/index.html",
    "revision": "808931a0028c7fb81723428980cab74f"
  },
  {
    "url": "vue/index.html",
    "revision": "0ef71b5266d4988be8482bd986f94e80"
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
