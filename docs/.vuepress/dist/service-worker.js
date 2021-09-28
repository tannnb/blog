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
    "revision": "410784972fca92ffa3b6964ca74fe80a"
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
    "url": "assets/img/introduction_1.e0158cff.png",
    "revision": "e0158cffb40a3490b6dbbe208f3db7fa"
  },
  {
    "url": "assets/img/introduction_2.58563fa6.png",
    "revision": "58563fa6f22651a596aeea1673de1da6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b063b3af.js",
    "revision": "ad1e01e225859e845005aebfaf75098d"
  },
  {
    "url": "assets/js/11.4ba7f27c.js",
    "revision": "81ab22664f53a0bef9ba60ab63ba878c"
  },
  {
    "url": "assets/js/12.972c8b19.js",
    "revision": "8a81192904dafa37828c0a207b14ffb9"
  },
  {
    "url": "assets/js/13.d7d7c445.js",
    "revision": "2bb1b7d434f9acded17149b1f1d37d23"
  },
  {
    "url": "assets/js/14.bb519f14.js",
    "revision": "9ac79e82bca01f43169cca16fa3d0a2f"
  },
  {
    "url": "assets/js/15.23e636c3.js",
    "revision": "76aff8ac19446ab229d25970b0afd2e1"
  },
  {
    "url": "assets/js/16.fa6f36f9.js",
    "revision": "f0fd3e56c4a0e293c343fd78ffd081da"
  },
  {
    "url": "assets/js/17.f5444474.js",
    "revision": "f9386515c705d811bde8bff3135b695d"
  },
  {
    "url": "assets/js/18.838709fb.js",
    "revision": "11cb32b5fc828ff710e3b099412a2f18"
  },
  {
    "url": "assets/js/19.08283c5b.js",
    "revision": "0e163fd364bf74156d396b0e25e4c1f0"
  },
  {
    "url": "assets/js/2.b0eadbe5.js",
    "revision": "a8ed629c1050d1a3b0d9051088ba1c76"
  },
  {
    "url": "assets/js/20.f8486a2d.js",
    "revision": "70490c78846cdc184ee54089472809b1"
  },
  {
    "url": "assets/js/21.81fabe3c.js",
    "revision": "b44f9c46c7db08163afed4be59363980"
  },
  {
    "url": "assets/js/22.cf174ea9.js",
    "revision": "a27b71fe4b7a39cc960dd7c57118e939"
  },
  {
    "url": "assets/js/23.a679a0bb.js",
    "revision": "e487d2558c2c029050d811b79116798c"
  },
  {
    "url": "assets/js/24.57aec9ed.js",
    "revision": "fc9c975977c9c54017f01dc4fb23906d"
  },
  {
    "url": "assets/js/25.da82d3ea.js",
    "revision": "37bf3cd45a914fb9bad35a829d0d8e34"
  },
  {
    "url": "assets/js/26.4fc2f296.js",
    "revision": "0801c75765f92690746136d69e3d35cf"
  },
  {
    "url": "assets/js/27.4f6cbafd.js",
    "revision": "64a43f760f632584bd2b0c016fb71d4a"
  },
  {
    "url": "assets/js/28.a9ba96dc.js",
    "revision": "5db752827c902fe56a521d272aa491b0"
  },
  {
    "url": "assets/js/29.9da241a5.js",
    "revision": "f0e390637f76355bc59c531c7a9109a4"
  },
  {
    "url": "assets/js/3.bbf6ab88.js",
    "revision": "09f8fe6f0d118629588b457ce251bcfb"
  },
  {
    "url": "assets/js/30.fc0ef8f9.js",
    "revision": "581e9e59ecdcdcef0126280a00e26cca"
  },
  {
    "url": "assets/js/31.239ea0ee.js",
    "revision": "527a52ec082574453b5a0a6ec3200e7e"
  },
  {
    "url": "assets/js/32.a804d5dd.js",
    "revision": "5d5a7b4805120add6a90b8eba5cd29ce"
  },
  {
    "url": "assets/js/33.bec39e29.js",
    "revision": "920d5c6c9bd25f0504d8aa133e6882bf"
  },
  {
    "url": "assets/js/34.635c31e6.js",
    "revision": "2b757fcdea42ea53077b82b31f877ade"
  },
  {
    "url": "assets/js/35.7ee64571.js",
    "revision": "8a8ff207351f614eb1e863cacfa7c85c"
  },
  {
    "url": "assets/js/36.d20c196f.js",
    "revision": "647eb5083b599f23df68803b38dcaf8a"
  },
  {
    "url": "assets/js/37.18c14d3a.js",
    "revision": "e423b26ef7931b50fd097963d2ec17e6"
  },
  {
    "url": "assets/js/38.8c25c58b.js",
    "revision": "3f042036db323468370bf088fe0ff3ff"
  },
  {
    "url": "assets/js/39.be82eb6f.js",
    "revision": "b679636afc1b007a62cb1f6cb6610b9d"
  },
  {
    "url": "assets/js/4.250b5813.js",
    "revision": "4df7a6c63e9088365ab7aebe5c0f8308"
  },
  {
    "url": "assets/js/40.e86a92fe.js",
    "revision": "08d05d552259c460c1f289c95679b3ca"
  },
  {
    "url": "assets/js/41.0529b99f.js",
    "revision": "3892a7d887a3421443301d2364d46aa6"
  },
  {
    "url": "assets/js/42.df1a0502.js",
    "revision": "5f522869db6c3816019f02104d2ddfe0"
  },
  {
    "url": "assets/js/43.6f7d8fcd.js",
    "revision": "ca53bbb3346b7afca9cba208974152dc"
  },
  {
    "url": "assets/js/44.ed106806.js",
    "revision": "c7b1e3d2d5b59aa8c075289f777a2482"
  },
  {
    "url": "assets/js/45.9071a9f8.js",
    "revision": "d7d88fdce2aa7ddf84c0297e300f408e"
  },
  {
    "url": "assets/js/46.3eb98b65.js",
    "revision": "8fea680d51d1e30e6f32d3426e377a54"
  },
  {
    "url": "assets/js/47.2f92308f.js",
    "revision": "b053df6adf87302ed61b6cc322345ab7"
  },
  {
    "url": "assets/js/48.67af72c1.js",
    "revision": "4fa5300cef5b9b1dadfcc99bacc0e39b"
  },
  {
    "url": "assets/js/49.0bd93016.js",
    "revision": "3c3b73685cd28f85a2f5bfcc69a1532a"
  },
  {
    "url": "assets/js/5.f8fc60a5.js",
    "revision": "d29a0ea96ae71c49ff85b6d8f4a2dce7"
  },
  {
    "url": "assets/js/50.37fc6e8b.js",
    "revision": "b6062a8d76b1afe4c344a435508dc115"
  },
  {
    "url": "assets/js/51.db039522.js",
    "revision": "f9cf0fddd013df3db9693ebc5eac1ab9"
  },
  {
    "url": "assets/js/6.73320b08.js",
    "revision": "37d18fecd4668eacf84a8cd61b8a545b"
  },
  {
    "url": "assets/js/7.08091dcb.js",
    "revision": "0c8b92e9086f808dda935588e4dc47ac"
  },
  {
    "url": "assets/js/8.5813d0d8.js",
    "revision": "23e3fd9dc03e7c27d815936a621358c9"
  },
  {
    "url": "assets/js/9.046ce0a0.js",
    "revision": "17308e8448089d6e346a462520560155"
  },
  {
    "url": "assets/js/app.416266a4.js",
    "revision": "42e3bc2e480fa60a79ae259f8ab2021e"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "cc6bcd7ec660dfc0a90528615cf632dc"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "a74ea0cf29a0fc25dfd905cff4c11f3f"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "515c9cb98b445f0f74f7e46a2b63b5f1"
  },
  {
    "url": "framework/introduction/lerna.html",
    "revision": "fa0c63a8d35724d2b3474004d093e415"
  },
  {
    "url": "git/index.html",
    "revision": "6a31385a2be44641fa1eb3e38f4a36f9"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "43b3a8e0e4f76a78f7be79b2e930fa3f"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "71867ac324fc2dec0d818ef6a694cebc"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "cf2cb3dbae5f38becfada17d994fa0c1"
  },
  {
    "url": "interview/base/index.html",
    "revision": "c67863e8b67c60bdb7761db2a652917e"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "aca7e97dc8d243a27893e76746de646f"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "92f2d3814fbb90adeaf5874538517907"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "1aa7717b48fe726cce11473ee7bcbbc5"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "215c44287c2e939759f5fa4b2f4c9a55"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "346bb6ada292daa8229699920b1efee9"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "172932ede9f2a28561ce27b5d8d7ce24"
  },
  {
    "url": "interview/base/is_new.html",
    "revision": "404a7c44ec28cf7a1e4c27e3598d0598"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "de593c55f5b6d36f9f4c9a54dc65b5c1"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "4aa2636648ecb996b227b1bb1420bbbc"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "69e338cd89ef452e1ffad248819b53f4"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "45bd665b6702faefb101c5d61380e7be"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "dd0a2145eeded6a8618ada5f2c71f0db"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "a69c3b1c4430b301d0bc4117f2512497"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "8f4765be83bde46792f19aa4d087413a"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "106779fb4bd83df117d4285d1fbc608a"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "a5add7e40cbd9834068e5342d2cc8874"
  },
  {
    "url": "interview/http/index.html",
    "revision": "c963e72d299ea233fe1d008d236215b4"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "66e45f1b49e3c3aa33d7c99d17aff0ad"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "92f5ad94149be64f8c92273a8b0c54ac"
  },
  {
    "url": "javascript/know_in/index.html",
    "revision": "d3ce9f4557f8c45fc711092d2fa0923f"
  },
  {
    "url": "javascript/know_top/index.html",
    "revision": "7c9528d7968603719ba93a1ccf95614f"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "cb1d82d5db948209b44d13b166b8948d"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "059cac11e13e1daa8806776fd775f270"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "63a5a2eb21cf18f483e7f0d8b5461028"
  },
  {
    "url": "style/css/index.html",
    "revision": "8a4eff8edc5e7f95ceceeb2a5a763d78"
  },
  {
    "url": "typescript/typescript_next/index.html",
    "revision": "01a0374caaa18cdc7e1920c30c4ea996"
  },
  {
    "url": "vue/index.html",
    "revision": "89f3e411d1bb2fd41b9731f069dba882"
  },
  {
    "url": "webpack/webpack_next/config.html",
    "revision": "882bc13b6368db98b8c52017123acce6"
  },
  {
    "url": "webpack/webpack_next/index.html",
    "revision": "83cc4971d22e1703db7ae61c1b45457f"
  },
  {
    "url": "webpack/webpack_next/init_webpack.html",
    "revision": "020ebc31f67fa5a474051bc9907dd34c"
  },
  {
    "url": "webpack/webpack_next/loader.html",
    "revision": "fe6b0a898ec4b3d641b6a5a9fdab34b4"
  },
  {
    "url": "webpack/webpack_next/plugin.html",
    "revision": "c4819e3aa4513a23c2fa442b71b7f29e"
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
