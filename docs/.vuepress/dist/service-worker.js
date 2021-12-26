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
    "revision": "84f926f92f85f19feade888284f29d71"
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
    "url": "assets/js/10.519e6252.js",
    "revision": "1443752e885b66020e2690fa0c52254f"
  },
  {
    "url": "assets/js/11.281ced9a.js",
    "revision": "51ead31faafb8599491108e6cf64e5da"
  },
  {
    "url": "assets/js/12.6c196479.js",
    "revision": "ebcecc74a323d8cf4ff61c8e7615624c"
  },
  {
    "url": "assets/js/13.260607ea.js",
    "revision": "72ebe282b0e61b20f3781aeda62c1e0f"
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
    "url": "assets/js/17.812b8d16.js",
    "revision": "9524b5bb83a5255d3cafcf04bafdb744"
  },
  {
    "url": "assets/js/18.92a332e2.js",
    "revision": "7ecb37777c18f300ced7da22dc6a4b8e"
  },
  {
    "url": "assets/js/19.a45f5408.js",
    "revision": "bb957342849106322ee14f46740bcb17"
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
    "url": "assets/js/21.85e48c60.js",
    "revision": "65fe06a1bb0b29cd01fe82ed4b837e05"
  },
  {
    "url": "assets/js/22.6a68ce79.js",
    "revision": "1340d6f1aa88bb584e5b4ee40cebf17f"
  },
  {
    "url": "assets/js/23.27f0e651.js",
    "revision": "e7e7afc728ca3f2e1bacee5734ad8fbe"
  },
  {
    "url": "assets/js/24.0c302285.js",
    "revision": "3f019540565bac028848d3529d656357"
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
    "url": "assets/js/27.4ee7549c.js",
    "revision": "f7ddb460f4c632aa6b07615eb7450bcf"
  },
  {
    "url": "assets/js/28.d1097ca9.js",
    "revision": "7bed61b3b2d56dc23d8d28a56696fd44"
  },
  {
    "url": "assets/js/29.9a45d0af.js",
    "revision": "febf3f063a2aee6e4e62150418677605"
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
    "url": "assets/js/32.860752a0.js",
    "revision": "c41b86abe76568bdfc0cb2d04099ef69"
  },
  {
    "url": "assets/js/33.a3c9c22e.js",
    "revision": "2d13a7981b65a2af2db4925b902fb1a2"
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
    "url": "assets/js/36.c3e28a51.js",
    "revision": "90c1544711f3053059cea94afbcd3728"
  },
  {
    "url": "assets/js/37.168b8ebe.js",
    "revision": "5f5ae04acb93d82f0e22617920ab9e51"
  },
  {
    "url": "assets/js/38.938eaf7e.js",
    "revision": "e036ced60eb8b7f437a95ebe689c48f0"
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
    "url": "assets/js/40.95f8999f.js",
    "revision": "22fe15d53971f95f3d61e304b0e28448"
  },
  {
    "url": "assets/js/41.5a0cb94d.js",
    "revision": "36b7ee5db801d26f7a23384f33239de8"
  },
  {
    "url": "assets/js/42.f280e472.js",
    "revision": "e4164a86e23d6cb06a040f73b43ecb93"
  },
  {
    "url": "assets/js/43.b6bbf64a.js",
    "revision": "4a14a18f0b92633e6688f4af0e52f239"
  },
  {
    "url": "assets/js/44.1645925a.js",
    "revision": "2261df93b2a1989d68b786afc26b9b9f"
  },
  {
    "url": "assets/js/45.ffeaa61d.js",
    "revision": "d94a4789e63be07a01e67ed7073b2c7b"
  },
  {
    "url": "assets/js/46.54935bb9.js",
    "revision": "1d276b804eb966fc2fda444cd99868c5"
  },
  {
    "url": "assets/js/47.3d5e0d95.js",
    "revision": "99d16a0fbf8b5c2f77147ab114e899e2"
  },
  {
    "url": "assets/js/48.8f7da394.js",
    "revision": "b1b035714e41eb425d97db7cdcea61a2"
  },
  {
    "url": "assets/js/49.e49bc1dd.js",
    "revision": "358bc3267d18eb6b1a83d3115a7896cf"
  },
  {
    "url": "assets/js/5.7f6cb965.js",
    "revision": "556ee2e05965b8e622f60b3772fdebcb"
  },
  {
    "url": "assets/js/50.05f546c7.js",
    "revision": "1294b988195be37483dbfcf4bf9710bc"
  },
  {
    "url": "assets/js/51.e484b96e.js",
    "revision": "242da9d9ccf43c98430cc51e746d9d94"
  },
  {
    "url": "assets/js/52.9475fe6a.js",
    "revision": "9cac592f3d742e44ddcad1404491a367"
  },
  {
    "url": "assets/js/53.6162a7a3.js",
    "revision": "8b9c9b2a6037c5bfdbc5c964d5754dde"
  },
  {
    "url": "assets/js/54.c225cac0.js",
    "revision": "72e2d767609dc805ca11cce4f89a5915"
  },
  {
    "url": "assets/js/55.dc62a550.js",
    "revision": "1426d0111ea5bd296e6d26dd82f5319b"
  },
  {
    "url": "assets/js/56.f0e09484.js",
    "revision": "171d20c6b03a0cfc0b2253f74ef5ab40"
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
    "url": "assets/js/8.ba4da274.js",
    "revision": "6df58d8df62b155754ec3984be16978b"
  },
  {
    "url": "assets/js/9.4ab685a6.js",
    "revision": "828b26df8b52e97d2149e102f2095ef3"
  },
  {
    "url": "assets/js/app.de739c81.js",
    "revision": "9a5cebd6d4fff7e7cc1ea50790cc3993"
  },
  {
    "url": "framework/fork.html",
    "revision": "64756fd6e719aef5176affbe64b9ebf3"
  },
  {
    "url": "framework/index.html",
    "revision": "23ea98f9428c7866b9ba667b4de3a276"
  },
  {
    "url": "framework/lerna.html",
    "revision": "6e76bfea363b451b5c691c4255704e80"
  },
  {
    "url": "framework/vue.html",
    "revision": "45692ded6131bb729529aec0594638f9"
  },
  {
    "url": "git/index.html",
    "revision": "e459a8227a84e5b2889fe9906214fe67"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "3c7161fbc8c3b71e5433e8947af6f7d1"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "939fa3a98493915e7d22f8dcaf805c1b"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "7209016abe8b21f3407754efa80112a9"
  },
  {
    "url": "interview/base/index.html",
    "revision": "15fcfdaffb70cbdb49dd34804f881863"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "16b52eddafa00fc8b24ee71e778e6f07"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "4d1da62d0cdd03315479a94386615fda"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "90a6f64a0d8cfce6d1272e4697cf4bf3"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "f887b3476a1ec1f7495d3632eb8422b2"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "992d6198061a4c94e35f8af86300430d"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "b2039d5a904cfd0ba5743eb6543c7ece"
  },
  {
    "url": "interview/base/is_new.html",
    "revision": "a24717706dc7176270aa90358f5e82f9"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "7c30c63fa49667ac4b162d22774bcf26"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "297e21c78c838b11b78e35c40edff759"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "803e02f982d8aac6f4435fe38227527e"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "96075982311d04f0311ea406325eb308"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "4bf5b201746067becf66568560e9d48c"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "5ed555a6a8563544c8a04fb67d4a5f68"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "b0e1e600750e845bcd9c4b14a68003eb"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "47092256683cab670508e1d944c8a172"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "8a6fe4f05a451bf890aa2f179964cd0c"
  },
  {
    "url": "interview/http/index.html",
    "revision": "01a4f44c00b04f8273a447c80e9a3d7d"
  },
  {
    "url": "javascript/algorithm.html",
    "revision": "303381a9cb9a90552584d628540295a4"
  },
  {
    "url": "javascript/es6.html",
    "revision": "570eeb382414a6eb7a443fa6ba36e7f9"
  },
  {
    "url": "javascript/know_in.html",
    "revision": "19fc52b3318877607e58c47602f2d061"
  },
  {
    "url": "javascript/know_top.html",
    "revision": "cea197c87416b155730ce1bfd44c2641"
  },
  {
    "url": "javascript/utils.html",
    "revision": "22a6210d5d55c064ac1adc22ba0835e5"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm.html",
    "revision": "c169daf019d6ed5e7e0471101b887889"
  },
  {
    "url": "style/index.html",
    "revision": "eda023c7c8aca4ab49019e1c3aa5ae08"
  },
  {
    "url": "typescript/base/baseType.html",
    "revision": "fa8f4ac24fd6aeda8a81c9f216c495ca"
  },
  {
    "url": "typescript/base/Class.html",
    "revision": "787fff3e4a9327850cb462ad0c669b99"
  },
  {
    "url": "typescript/base/function.html",
    "revision": "20081cc2c4f3cba6e04d2160d4d4a0db"
  },
  {
    "url": "typescript/base/generics.html",
    "revision": "1fc2821d8d13f21a5e7d01c2d72dbdea"
  },
  {
    "url": "typescript/base/index.html",
    "revision": "ed273654ad0a385853955805a5d45591"
  },
  {
    "url": "typescript/base/interface.html",
    "revision": "eb6d50062476cd78e3c618672f6fcb73"
  },
  {
    "url": "typescript/typeChange/index.html",
    "revision": "5e9f2d7a91f1be979125e402a9cc21dd"
  },
  {
    "url": "vue/index.html",
    "revision": "257b5bd42b1db860c9cd6fa00076a453"
  },
  {
    "url": "webpack/config.html",
    "revision": "8a7b6af106a29ccdcb9263ad44d25cbc"
  },
  {
    "url": "webpack/index.html",
    "revision": "52436472e15d8773fdccf3facfcaa6d0"
  },
  {
    "url": "webpack/initWebpack.html",
    "revision": "1060e9329815a2e4bc74f8c6e0696e25"
  },
  {
    "url": "webpack/loader.html",
    "revision": "ce744c893f742dbdbd7a485e82791b3d"
  },
  {
    "url": "webpack/plugin.html",
    "revision": "24770611b2248cea0619315b7afe8cdc"
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
