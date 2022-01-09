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
    "revision": "df47c80713112573f5681786b71fbe57"
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
    "url": "assets/js/11.dfafdbd5.js",
    "revision": "d107d22d45c8705069ff35c3629c3474"
  },
  {
    "url": "assets/js/12.cfb98def.js",
    "revision": "ef1e6131a7b8485003a276b676d236c3"
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
    "url": "assets/js/16.cd4f28cb.js",
    "revision": "a5d0cba11e0d20a7bf9bdd0aca4ffe72"
  },
  {
    "url": "assets/js/17.812b8d16.js",
    "revision": "9524b5bb83a5255d3cafcf04bafdb744"
  },
  {
    "url": "assets/js/18.c146fe17.js",
    "revision": "6939bc448dc8e241c070b9143bb3b295"
  },
  {
    "url": "assets/js/19.ad53c710.js",
    "revision": "5ca6e9cfff3226a090982fcdb19f4860"
  },
  {
    "url": "assets/js/2.a9e0bbee.js",
    "revision": "d19ea43e0cf60e2f5dff99cb31a9843c"
  },
  {
    "url": "assets/js/20.6ca47d71.js",
    "revision": "f53a5f3e7efa8fed557bee79c7020ac5"
  },
  {
    "url": "assets/js/21.8ca64396.js",
    "revision": "7de3a5b6b872cbd3a64281f72502c647"
  },
  {
    "url": "assets/js/22.2e11400b.js",
    "revision": "6008ee689c03ec843ea9784b58547850"
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
    "url": "assets/js/27.22495f47.js",
    "revision": "3919d26386de266bf40fdedae1e2422a"
  },
  {
    "url": "assets/js/28.8138b514.js",
    "revision": "9a70e139407634ba7dab6b3cea52c03f"
  },
  {
    "url": "assets/js/29.6e413c1d.js",
    "revision": "35dc3e8465c7e4dc89fec7786e7ddbbe"
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
    "url": "assets/js/31.d8a13f20.js",
    "revision": "a5ce0215c7974fd07630038b4467f9c2"
  },
  {
    "url": "assets/js/32.f6c26b61.js",
    "revision": "9f9c34794b9e422c3b411af588910aeb"
  },
  {
    "url": "assets/js/33.691315f6.js",
    "revision": "a42e39d47f9c319c28f7e3551637b426"
  },
  {
    "url": "assets/js/34.bebaee9f.js",
    "revision": "7451f30b778097182d4be5fb2bad669a"
  },
  {
    "url": "assets/js/35.532b548b.js",
    "revision": "66d0834b71d2bf24b65c0904c300776b"
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
    "url": "assets/js/38.699c3fc0.js",
    "revision": "375d691c3b996688e42a5bde7c4fceb5"
  },
  {
    "url": "assets/js/39.979bf7db.js",
    "revision": "6c26e13b534b5e112edfc63d07ad388a"
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
    "url": "assets/js/41.80fb6569.js",
    "revision": "5414c640acb05aa009f7c9420b5332d9"
  },
  {
    "url": "assets/js/42.5a88ddaa.js",
    "revision": "6c57b87959ec428b1a1215d8bc3e27a8"
  },
  {
    "url": "assets/js/43.cb2d433f.js",
    "revision": "600714e46a2ec0ef44a6c7b857034df6"
  },
  {
    "url": "assets/js/44.29f2b178.js",
    "revision": "5021c8bd4bb6b12148f7a7199ce9b9e4"
  },
  {
    "url": "assets/js/45.e2270702.js",
    "revision": "adb3bbac6f62e992e5a5e600bc577fb2"
  },
  {
    "url": "assets/js/46.b9aa98c7.js",
    "revision": "a1fc411f8058f5ef24c0eb8f2f66ebd0"
  },
  {
    "url": "assets/js/47.3d5e0d95.js",
    "revision": "99d16a0fbf8b5c2f77147ab114e899e2"
  },
  {
    "url": "assets/js/48.8da94702.js",
    "revision": "585334fc34b7ea8c50764714eb53710b"
  },
  {
    "url": "assets/js/49.1fa28e57.js",
    "revision": "b728d16ee832fefc8fd53e2dd117d760"
  },
  {
    "url": "assets/js/5.1bd708fe.js",
    "revision": "7948645da5ced77ebd8d24f91ff3fe9a"
  },
  {
    "url": "assets/js/50.8289affd.js",
    "revision": "df58ce667fecd417078985ec0bd1ba77"
  },
  {
    "url": "assets/js/51.1f101bbf.js",
    "revision": "2a870bde76ab340aba75f4f4507fb726"
  },
  {
    "url": "assets/js/52.d07a32e6.js",
    "revision": "5b766dd7ba1279978c9ac6312c4f8b81"
  },
  {
    "url": "assets/js/53.948ee4b8.js",
    "revision": "ef2a1074dd1d662abc3087ed789efe06"
  },
  {
    "url": "assets/js/54.3e52da8e.js",
    "revision": "e36198778aaba2685704cf4fb7e91198"
  },
  {
    "url": "assets/js/55.16296513.js",
    "revision": "c42684381c73b647764ed702ceedded1"
  },
  {
    "url": "assets/js/56.9287f2f6.js",
    "revision": "909374dd8165b3cccf2f863cebc66db1"
  },
  {
    "url": "assets/js/57.75e374ce.js",
    "revision": "201751a994f3be309cfff1ac0b6505ef"
  },
  {
    "url": "assets/js/58.681f43df.js",
    "revision": "f46da55931bf48e32057f30afaf411bf"
  },
  {
    "url": "assets/js/59.0e4c7008.js",
    "revision": "1577f33943f308c052e6f8ebb372fdc8"
  },
  {
    "url": "assets/js/6.036e9f2a.js",
    "revision": "09e063c74c272302e24807c523df4df7"
  },
  {
    "url": "assets/js/60.94d6bdd5.js",
    "revision": "bd4b6f8495534e96082ff0fb56f75512"
  },
  {
    "url": "assets/js/7.cf73fabe.js",
    "revision": "d5bd9fa0cf8c520c4f7f018b6a8886ca"
  },
  {
    "url": "assets/js/8.07d6afe4.js",
    "revision": "c16633f7ba81f9d4c04d1fa845928766"
  },
  {
    "url": "assets/js/9.cd574063.js",
    "revision": "24ebef23feb78c1e3a292e90817e9912"
  },
  {
    "url": "assets/js/app.1a455da1.js",
    "revision": "d5c2c9fc5fb3e72b43d13e86a06a8fcb"
  },
  {
    "url": "framework/fork.html",
    "revision": "0ef1bdf43e4e7d8a68da723b1a5e842d"
  },
  {
    "url": "framework/index.html",
    "revision": "d918731f1db0dcb0e83c98f66e90b374"
  },
  {
    "url": "framework/lerna.html",
    "revision": "796064f205038191e61db5c8d6f162db"
  },
  {
    "url": "framework/vue.html",
    "revision": "1ea5b8d58ccc64cd9988903d4068d79a"
  },
  {
    "url": "git/index.html",
    "revision": "a8d23701a4ffb36f5497cc58ab28f577"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "227e25cffb17f134294f8be7ce9b0fda"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "8a7d1259c113349fb8ce18b95ef9eb41"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "08fbaf1ba11c17085d6c17a468bcde7d"
  },
  {
    "url": "interview/base/index.html",
    "revision": "f2479a4b1435538e0e9c0ea2c9c19d23"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "669793b51eb2acd87af901559ef483d4"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "474a1756bfb4c0967c6fbd3667f33083"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "78cde0ea181481c001cef4303e06ac81"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "2de7aa105426edd9a32e2c6657e1f77d"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "9e5d1fb3fab2ed8c7b7948d2af55c340"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "6ffabd05ba132d830f65f1cef425d5e7"
  },
  {
    "url": "interview/base/is_new.html",
    "revision": "eff95088df7737341530257cdd17db56"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "ff9234ebd542182d95868858264c181b"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "6e1bd426818fb852ef3408166d0d991d"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "d6da42931818f510200bc44180bc6b8b"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "b400602289cf597d5a50fc92150a95fa"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "5b42daa29dc95aa5481d8e8404dc8b66"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "747f5e8da8068e7a2aeee1da2bed09c9"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "0068aafbcdae2a2f4117b8b557a91602"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "1ee075c2cdf112e66e4e2fd81f351505"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "ba8818ffd4693e037c464ee181b602a8"
  },
  {
    "url": "interview/http/index.html",
    "revision": "3273904132be52412cfbabd8db34f57e"
  },
  {
    "url": "javascript/algorithm.html",
    "revision": "958a4c5c7664bd9f76833baa7caf4639"
  },
  {
    "url": "javascript/es6.html",
    "revision": "f251c875a55bcb8af53404f196c5588a"
  },
  {
    "url": "javascript/know_in.html",
    "revision": "daaf1cfc9afd0ab35ae68179f72e51d3"
  },
  {
    "url": "javascript/know_top.html",
    "revision": "f9bdcac22a2523730e24269c0876ebc7"
  },
  {
    "url": "javascript/utils.html",
    "revision": "c4fe1b571e1c0b8c85c97566b89ec1df"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm.html",
    "revision": "b79dc5fe24ce6900a9e6650cb486de74"
  },
  {
    "url": "style/index.html",
    "revision": "6af2e277e91bf1315eef60f8c4933bf6"
  },
  {
    "url": "typescript/base/baseType.html",
    "revision": "42772ae77a36a824b301aad52e43e018"
  },
  {
    "url": "typescript/base/Class.html",
    "revision": "4d8c7105a36cbedd0ee968e6dda88de0"
  },
  {
    "url": "typescript/base/function.html",
    "revision": "931e48df10730422be0a8bb97260e2ae"
  },
  {
    "url": "typescript/base/generics.html",
    "revision": "6bd7600bd3c18174220ac320cc16d436"
  },
  {
    "url": "typescript/base/index.html",
    "revision": "a6b76c54740749b240c4df11393f788a"
  },
  {
    "url": "typescript/base/interface.html",
    "revision": "0d2c13016817c4e5b8b34dfbd7203396"
  },
  {
    "url": "typescript/practice/hook.html",
    "revision": "319b8e24c59177823555c1112b007e38"
  },
  {
    "url": "typescript/practice/index.html",
    "revision": "2f49d51086a58bb35a9e48af39805213"
  },
  {
    "url": "typescript/practice/interface.html",
    "revision": "b14a7811f1218c22233d5f23d49ab2df"
  },
  {
    "url": "typescript/practice/props.html",
    "revision": "64a4070afce90104356b57aa25b2b1f5"
  },
  {
    "url": "typescript/typeChange/index.html",
    "revision": "c73b564d24770e1a511f145542ee251e"
  },
  {
    "url": "vue/index.html",
    "revision": "26c8f4e2d70b40de46a3c5681d0556c2"
  },
  {
    "url": "webpack/config.html",
    "revision": "f353d20726be67835268342ded0de7a2"
  },
  {
    "url": "webpack/index.html",
    "revision": "9561fb544bdb7b88fbed678d28881665"
  },
  {
    "url": "webpack/initWebpack.html",
    "revision": "5a0c29ee7b2613d7e2977a9ada814b05"
  },
  {
    "url": "webpack/loader.html",
    "revision": "6f49266465c59bfb251ee38da5de75ae"
  },
  {
    "url": "webpack/plugin.html",
    "revision": "cc6997c8805ec74b88a40ffe5d5724c2"
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
