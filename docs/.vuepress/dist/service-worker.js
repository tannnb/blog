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
<<<<<<< HEAD
    "revision": "c7b26e5b8f32d04366ffb198afe8ea56"
=======
    "revision": "d0b4cf4dec0e36d9c823dedc6294b5dd"
>>>>>>> efa533b6da9196c7f8ccbb31c0fb8df29bae804e
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
<<<<<<< HEAD
    "url": "assets/js/10.18b5512e.js",
    "revision": "c497f10f68130d776c3b2ebd81a703d3"
=======
    "url": "assets/js/10.49584e80.js",
    "revision": "7b2e9533de29f52bedca4b89e6491f1f"
>>>>>>> efa533b6da9196c7f8ccbb31c0fb8df29bae804e
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
<<<<<<< HEAD
    "url": "assets/js/17.b356afd5.js",
    "revision": "7c9725aeae453c02c146be20b22bb019"
  },
  {
    "url": "assets/js/18.ce6c342e.js",
    "revision": "d19a730c29b725bf571775036dd39837"
  },
  {
    "url": "assets/js/19.6af4d38d.js",
    "revision": "93ad5ed6ce58a0033dadbb45992a8d78"
  },
  {
    "url": "assets/js/2.fbadadb7.js",
    "revision": "c0479528f88a4199d68331df0b1df53f"
  },
  {
    "url": "assets/js/20.f795b609.js",
    "revision": "f5c7a5e1dbe6f6a5e9217862213775bb"
  },
  {
    "url": "assets/js/21.a02e4dba.js",
    "revision": "92994cf10cb02f94d3b8548c621ad056"
  },
  {
    "url": "assets/js/22.5ff62a2b.js",
    "revision": "53cd449f146386bc8c9028f1a99dcecd"
=======
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
>>>>>>> efa533b6da9196c7f8ccbb31c0fb8df29bae804e
  },
  {
    "url": "assets/js/23.a0fca2c7.js",
    "revision": "09f8e1f4cecf984977ba83e144c6b249"
  },
  {
<<<<<<< HEAD
    "url": "assets/js/24.4c116381.js",
    "revision": "b1de8c8bfd6808a2420d7919530a178b"
=======
    "url": "assets/js/24.9f9a990f.js",
    "revision": "efb681ef742a6ca6f5f07b78c29fb8e1"
>>>>>>> efa533b6da9196c7f8ccbb31c0fb8df29bae804e
  },
  {
    "url": "assets/js/25.f12cba27.js",
    "revision": "9f1909a3918d44aa14dd1d41386e9702"
  },
  {
<<<<<<< HEAD
    "url": "assets/js/26.2c27b12f.js",
    "revision": "2320abd16e409a34c8375218f9a6c352"
  },
  {
    "url": "assets/js/27.6eab3626.js",
    "revision": "71c5f9088ba03bcfbe62dd851e660c6e"
  },
  {
    "url": "assets/js/28.ea69a351.js",
    "revision": "5d170e8ebd4cbeef16b119257ca93978"
  },
  {
    "url": "assets/js/29.10e0238f.js",
    "revision": "12b414d6edd3650a322dfd11da799ac2"
=======
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
>>>>>>> efa533b6da9196c7f8ccbb31c0fb8df29bae804e
  },
  {
    "url": "assets/js/3.dc5724bf.js",
    "revision": "13810cce4161b17dcbb79477685b40d3"
  },
  {
<<<<<<< HEAD
    "url": "assets/js/30.f0ec19be.js",
    "revision": "097d51793845f54c4d1b63373f696ae0"
  },
  {
    "url": "assets/js/31.48be257c.js",
    "revision": "50b317294c0aa1414bd8d065eb481e59"
  },
  {
    "url": "assets/js/32.c590e5d4.js",
    "revision": "ceca73498470f4836e578a4be1c78215"
  },
  {
    "url": "assets/js/33.f54878e6.js",
    "revision": "be617caffdab38f118ad845e688efa15"
  },
  {
    "url": "assets/js/34.540f458b.js",
    "revision": "cbfbf8c2c2f9e120124c323fe6a39cba"
  },
  {
    "url": "assets/js/35.af84f27c.js",
    "revision": "f172c0d30d1db292e6b3c597556a6781"
  },
  {
    "url": "assets/js/36.7a4cd40f.js",
    "revision": "2dd43fd2f3d3f46aa2159e6529732721"
=======
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
>>>>>>> efa533b6da9196c7f8ccbb31c0fb8df29bae804e
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
<<<<<<< HEAD
    "url": "assets/js/39.64dcb89f.js",
    "revision": "82be823c26571df4d9e62fdfc17891d7"
=======
    "url": "assets/js/39.7ce476e6.js",
    "revision": "e9dc005b0074ae1a3a579bff8ee07f89"
>>>>>>> efa533b6da9196c7f8ccbb31c0fb8df29bae804e
  },
  {
    "url": "assets/js/4.66589091.js",
    "revision": "5599886c35a21c32353a730bba191b02"
  },
  {
<<<<<<< HEAD
    "url": "assets/js/40.d5b38262.js",
    "revision": "039c62fd93c4eafbdb0e84fa74bdebbf"
  },
  {
    "url": "assets/js/41.f23fb690.js",
    "revision": "737270727f7be494c45b1d7b4dc1ae86"
=======
    "url": "assets/js/40.1a3df49e.js",
    "revision": "1b0fba5ba6a85ed004b27db4cfdedfc3"
  },
  {
    "url": "assets/js/41.26736519.js",
    "revision": "ca4a116e4decc37af7def324eb7d65fe"
>>>>>>> efa533b6da9196c7f8ccbb31c0fb8df29bae804e
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
<<<<<<< HEAD
    "url": "assets/js/8.e01bb414.js",
    "revision": "6c589023339fba081a454e72523912a6"
  },
  {
    "url": "assets/js/9.6e405f8c.js",
    "revision": "1bf7b88499b2ee79021b960897d2a0a6"
  },
  {
    "url": "assets/js/app.2ad4c9e3.js",
    "revision": "4a2ba01a0b1fab8933143f3a73926282"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "fd36aa2f4d94628deef404590635ccae"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "44963002424bdfd4b1353ce9dd5bbf60"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "6336e95f9531ff63ca0e3c516463686f"
  },
  {
    "url": "git/index.html",
    "revision": "2d081404c82fb24ff15110904523678a"
=======
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
>>>>>>> efa533b6da9196c7f8ccbb31c0fb8df29bae804e
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
<<<<<<< HEAD
    "revision": "119a71eae4c37ec7891b24e0360bc59d"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "54416ce9caf6ae50370ff54702616536"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "76f11da78286f47cbe05c1c2e7fc4506"
  },
  {
    "url": "interview/base/index.html",
    "revision": "ae6fe02964be59848af15577ef7ce295"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "fd1d037b78f6ec4f87378cbb2791a780"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "c628f45695006c74411ad03572894c1c"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "3be4141360d8a44e8083917c4d0d601c"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "0d8155c6d083354d7afed225c25df5ac"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "c819d20371cf2cb462b54a385d35456f"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "41c1ea1db6d276526904a3b259c43367"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "0904bcf41603d4b9cf43e8b3f5860f5a"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "29704a11e0e1e5c9312fdac6886e3665"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "e94c20ba911b32e9b85d1821957df8c2"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "7a3696e63cb7b90f337e36ca5cf16d7e"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "1d3e507c896afd9fa222a206993a18f5"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "748d8b94d5b0706d6561b5e1d985e713"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "c448cc379f60f109e57c9f3bb0f01e7f"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "d9ded07b5f11d6bf30471e8698d946c1"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "84286bad867d366df451295a2841248c"
  },
  {
    "url": "interview/http/index.html",
    "revision": "7e45be0db79d8840c7bc81bfe7dfb951"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "f08925b48eb90c9a031c20a3dfbddd8a"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "c4bdc0f04374ee37613b4d8193e1002e"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "b3ddc7f8f63348ea0c4a1c119ae4aa01"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "3831451a891d8bb779af34f2995f9d5b"
=======
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
>>>>>>> efa533b6da9196c7f8ccbb31c0fb8df29bae804e
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
<<<<<<< HEAD
    "revision": "a53f53b58a511f0807bd43f911349aca"
  },
  {
    "url": "style/css/index.html",
    "revision": "fae3320e8c2f90f400c07ea516921758"
  },
  {
    "url": "visual/three/index.html",
    "revision": "aa4186598f9d6eb897b799aa5790edfb"
  },
  {
    "url": "vue/index.html",
    "revision": "274a45ac4b3fb11c1643066410faa530"
=======
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
>>>>>>> efa533b6da9196c7f8ccbb31c0fb8df29bae804e
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
