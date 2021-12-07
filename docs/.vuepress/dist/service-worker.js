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
    "revision": "34ee9821aca9e284e34500d46754a574"
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
    "url": "assets/js/10.7f39afa3.js",
    "revision": "2ae2b453c753077136e5c4c348117198"
  },
  {
    "url": "assets/js/11.68adca16.js",
    "revision": "9cd12f0644a6acd14daf47db4caf99fc"
  },
  {
    "url": "assets/js/12.783e6d3f.js",
    "revision": "9ed6b2cc5766ed70642567bc634f217f"
  },
  {
    "url": "assets/js/13.299935e9.js",
    "revision": "002cf7424fa009114ff531747427c726"
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
    "url": "assets/js/19.4250187e.js",
    "revision": "70bee17e3b34e810bec0a9827ad0d24f"
  },
  {
    "url": "assets/js/2.a9e0bbee.js",
    "revision": "d19ea43e0cf60e2f5dff99cb31a9843c"
  },
  {
    "url": "assets/js/20.ee3303c9.js",
    "revision": "14de105ed5bf1319734f5cc40080331f"
  },
  {
    "url": "assets/js/21.80ca37eb.js",
    "revision": "6f3e5a5858f40064068fd8d09815e152"
  },
  {
    "url": "assets/js/22.6a68ce79.js",
    "revision": "1340d6f1aa88bb584e5b4ee40cebf17f"
  },
  {
    "url": "assets/js/23.74836eb3.js",
    "revision": "be730a84c338b82067db7ca0df9fffb9"
  },
  {
    "url": "assets/js/24.c655b59f.js",
    "revision": "e9c2b5ba00dea4776b1180645be9f7d5"
  },
  {
    "url": "assets/js/25.79b9bc83.js",
    "revision": "e52275a2d104a66a47a220ccd85d070b"
  },
  {
    "url": "assets/js/26.c950755a.js",
    "revision": "069ab363971eb37d492cecd723a946e2"
  },
  {
    "url": "assets/js/27.baf39c6d.js",
    "revision": "64a6685a3b5c2a0dba53fd5e3929ce05"
  },
  {
    "url": "assets/js/28.425821db.js",
    "revision": "6b8b7246832dd7795eab05b54a5c3371"
  },
  {
    "url": "assets/js/29.cde0455d.js",
    "revision": "ea40f6429dee7b4362e6669d3caf375a"
  },
  {
    "url": "assets/js/3.f3df5bd4.js",
    "revision": "b3d74e199c94335de72cd860dff8cbfc"
  },
  {
    "url": "assets/js/30.dceda3bb.js",
    "revision": "3f8a5d5a612170b9b5970b098b407f02"
  },
  {
    "url": "assets/js/31.b3935e35.js",
    "revision": "5f16722c0e8078c1bbd45f1d3f6845d2"
  },
  {
    "url": "assets/js/32.dccc5936.js",
    "revision": "f9268cd81335088b6c7efa9bd55a01c0"
  },
  {
    "url": "assets/js/33.e21ccebb.js",
    "revision": "ce0afe71a93a7dbe6095e3181c7ff29c"
  },
  {
    "url": "assets/js/34.9046cced.js",
    "revision": "78ced41769a5f5d6fc74962329b34cae"
  },
  {
    "url": "assets/js/35.9a6e5a60.js",
    "revision": "5bdca8d1c6272fd85cd280f314411716"
  },
  {
    "url": "assets/js/36.4de38811.js",
    "revision": "ac9f0f504e4387121950bd76b672cb39"
  },
  {
    "url": "assets/js/37.17110ccd.js",
    "revision": "a6b13d12acf011653026ce1eed85b59d"
  },
  {
    "url": "assets/js/38.3837ced8.js",
    "revision": "263602ebcaaaa02802f72e8815508ecd"
  },
  {
    "url": "assets/js/39.da8a7ee7.js",
    "revision": "a21005377e1172adb5f6a33b1b4f5404"
  },
  {
    "url": "assets/js/4.390a07d5.js",
    "revision": "33065942d66dcf67e1f67e64f151842d"
  },
  {
    "url": "assets/js/40.9422aac4.js",
    "revision": "e817da44ddc16a37880b4af413b25989"
  },
  {
    "url": "assets/js/41.f7cf069c.js",
    "revision": "f9128d74f40a771e877e9c8041922d55"
  },
  {
    "url": "assets/js/42.e3fa12b1.js",
    "revision": "db101bb42842bbc94b4c02f69cdbb5c7"
  },
  {
    "url": "assets/js/43.437e4b47.js",
    "revision": "84a4ab622a6323d52a3ffe57a98778f5"
  },
  {
    "url": "assets/js/44.254441ff.js",
    "revision": "c0d980460623e5a566029e46dc59ebc1"
  },
  {
    "url": "assets/js/45.5887a6a6.js",
    "revision": "2460ff760faf65ee5b7e7bb1cb8e8f8f"
  },
  {
    "url": "assets/js/46.43a1f99b.js",
    "revision": "8fea680d51d1e30e6f32d3426e377a54"
  },
  {
    "url": "assets/js/47.27c2d02d.js",
    "revision": "4e8b298b47e9f2ce6a0fb235b72a9fe1"
  },
  {
    "url": "assets/js/48.172d8668.js",
    "revision": "5b7318d14defabae1884b03418e69835"
  },
  {
    "url": "assets/js/49.85c9243f.js",
    "revision": "7db35f93874ed9ffede9e4f0ddf5f5a0"
  },
  {
    "url": "assets/js/5.a3ae1ff4.js",
    "revision": "b6aea7100cb35938aff7a16ac6c35a32"
  },
  {
    "url": "assets/js/50.cdc72430.js",
    "revision": "5ed993e45d73a709e56eb504ccd8873b"
  },
  {
    "url": "assets/js/51.7a566aa5.js",
    "revision": "ae7667d9e7c0e423d832c0634f305ba7"
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
    "url": "assets/js/9.cbeecbe1.js",
    "revision": "0c2800264419c2db8fbf95dfcead6432"
  },
  {
    "url": "assets/js/app.a6a6d088.js",
    "revision": "358bdd64ab6ea6fc3f40ef13762b75e3"
  },
  {
    "url": "framework/fork.html",
    "revision": "3158e6a858cb2ea3aeea5c7eeb1bed1e"
  },
  {
    "url": "framework/index.html",
    "revision": "081687f839deb1c3abc9933ce5751ef7"
  },
  {
    "url": "framework/lerna.html",
    "revision": "af425662b49a10252ea614f5224eb85e"
  },
  {
    "url": "framework/vue.html",
    "revision": "4db5d95a9109ba4b1626c8aa1fbe4bde"
  },
  {
    "url": "git/index.html",
    "revision": "47529f4dc71571daa29cac43ca3997cd"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "00ef125f0434f07234062d90bcfde958"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "ea6662290fd50b22dd1eb8625fd4e2f2"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "70b9ee7683ed42883501479b9c57f9f4"
  },
  {
    "url": "interview/base/index.html",
    "revision": "f1081a5712b8ea91107099476c09733e"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "55b4a4ee629c3960231ead192bc6d342"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "afc04705ecfe2cef9a953dac161687f2"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "2605645b2a3f1bdd0d73c849f0e369c3"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "72f8ad6c1843b3299d3b32153f7f0f09"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "c8cac85a26737f28f894b2e1077848d8"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "bc86ad52ad22aaedfe62757c8563e132"
  },
  {
    "url": "interview/base/is_new.html",
    "revision": "e047f1f7da11fc0e1425e5a77a042dcd"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "80014c6e21874e0567f2daabd69e1542"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "6736cd9dca84c6b27c0069036ca07c7e"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "ef85cd0631e83a5c61489b2cb0f026e2"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "64e6c0119e77d16a7567c5de5ef8e6e9"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "7102360beb651bd37cbd67ad2860b85d"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "eb3ef260834e55c8f3794764265233d2"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "5e101061a2fb6fe83a6d18a35b11f20e"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "c327ced0c534ed52956c52ced564c2f2"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "082759256f100b08f18bc665f19d97c3"
  },
  {
    "url": "interview/http/index.html",
    "revision": "48839f04395ba8bc2ff34f5fdb854fa0"
  },
  {
    "url": "javascript/algorithm.html",
    "revision": "65cf984d2208f4fdf9d988d7c8b79ee2"
  },
  {
    "url": "javascript/es6.html",
    "revision": "430eca0a146db5b6d1090f259489cd47"
  },
  {
    "url": "javascript/know_in.html",
    "revision": "3321cc472096e4d785f3a6d4ce9a7889"
  },
  {
    "url": "javascript/know_top.html",
    "revision": "406be4a09138f4895c8e71359471aca3"
  },
  {
    "url": "javascript/utils.html",
    "revision": "1ef38bd76269cff5f6c68fea68a86f33"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm.html",
    "revision": "aecfc36d06853db8b761584aaf8753fe"
  },
  {
    "url": "style/index.html",
    "revision": "71d4b11f0e1906cd1c13fceff988a2c1"
  },
  {
    "url": "typescript/index.html",
    "revision": "7072471d18d51352fafb990156723661"
  },
  {
    "url": "typescript/type.html",
    "revision": "17d09f620c93a95cecc8eebd03738e5e"
  },
  {
    "url": "vue/index.html",
    "revision": "e1e32eadc7337117d3fc024dc1504799"
  },
  {
    "url": "webpack/config.html",
    "revision": "0f840804e95df6b4a16a9ef65d2692f5"
  },
  {
    "url": "webpack/index.html",
    "revision": "4baf07dea0636003a117d014661354bc"
  },
  {
    "url": "webpack/initWebpack.html",
    "revision": "0c9ce9486f5e23ac68d1690162153b88"
  },
  {
    "url": "webpack/loader.html",
    "revision": "51d1ab948b3ddcf6da57aad2deb5f9e4"
  },
  {
    "url": "webpack/plugin.html",
    "revision": "7f4108e5a75f908f947a307745b81690"
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
