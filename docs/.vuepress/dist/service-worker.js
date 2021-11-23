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
    "revision": "46b9c2630e1fac515c0b504e9020c87d"
  },
  {
    "url": "assets/css/0.styles.1cafb89c.css",
    "revision": "76dcbb0fd30d571c6ed720dc1fdf6d00"
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
    "url": "assets/js/10.4499fad7.js",
    "revision": "69e093c694011e923566fe483a0353a0"
  },
  {
    "url": "assets/js/11.f34eaa64.js",
    "revision": "ad4c0f60478aa887300b30ac4045a344"
  },
  {
    "url": "assets/js/12.6c196479.js",
    "revision": "ebcecc74a323d8cf4ff61c8e7615624c"
  },
  {
    "url": "assets/js/13.076dbdfd.js",
    "revision": "bff6429fe688c8512c98ece1e48691c2"
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
    "url": "assets/js/18.07c8e78b.js",
    "revision": "6ea8dbe6a70b6d53df19e4804f61d1dd"
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
    "url": "assets/js/20.855a62df.js",
    "revision": "4b664d8ffc34589c622612d99f77715a"
  },
  {
    "url": "assets/js/21.81b6ed3e.js",
    "revision": "a4d53f6e279157a45063b776253ad8b5"
  },
  {
    "url": "assets/js/22.cdd87026.js",
    "revision": "6eda81015589b0c6dbc79fe604564704"
  },
  {
    "url": "assets/js/23.6054f2f1.js",
    "revision": "d59fd1ad97d055ed345cfef3ce04de57"
  },
  {
    "url": "assets/js/24.c655b59f.js",
    "revision": "e9c2b5ba00dea4776b1180645be9f7d5"
  },
  {
    "url": "assets/js/25.68be7f24.js",
    "revision": "b499486598225646b6eafdee7f0d23ac"
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
    "url": "assets/js/28.1f029403.js",
    "revision": "3381ba6a9f969d252c853af6e8afcc40"
  },
  {
    "url": "assets/js/29.4a42510a.js",
    "revision": "87145f83e095118aa726db078736b07e"
  },
  {
    "url": "assets/js/3.f3df5bd4.js",
    "revision": "b3d74e199c94335de72cd860dff8cbfc"
  },
  {
    "url": "assets/js/30.45125fca.js",
    "revision": "2e90c2d3bf3aa77b07fa03fecab6864a"
  },
  {
    "url": "assets/js/31.819ff8a1.js",
    "revision": "6d4af11599b4caee2c4a66549908e6cc"
  },
  {
    "url": "assets/js/32.4d06f742.js",
    "revision": "cec8b1fe6c2b989675961a35f97fadc2"
  },
  {
    "url": "assets/js/33.e8310fc9.js",
    "revision": "f1b3f23bf0985a49b75e1df6442d6e69"
  },
  {
    "url": "assets/js/34.48158cc9.js",
    "revision": "a3b1e5570d4a0e1b1f57cda79c54fbfc"
  },
  {
    "url": "assets/js/35.e0ab197b.js",
    "revision": "7e602445c74fbab57e51533214a7eabe"
  },
  {
    "url": "assets/js/36.4de38811.js",
    "revision": "ac9f0f504e4387121950bd76b672cb39"
  },
  {
    "url": "assets/js/37.f15149f3.js",
    "revision": "9bd0311b28219e6c7b1a402538a7adfb"
  },
  {
    "url": "assets/js/38.152b7399.js",
    "revision": "73af98941b35fdccacd73bcdb05f890f"
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
    "url": "assets/js/40.42044c9d.js",
    "revision": "cedaae9f9a84317fbd6bfb627b452649"
  },
  {
    "url": "assets/js/41.c5aad347.js",
    "revision": "5633a0ddc53f8e9806fb5903737c6f77"
  },
  {
    "url": "assets/js/42.5a88ddaa.js",
    "revision": "6c57b87959ec428b1a1215d8bc3e27a8"
  },
  {
    "url": "assets/js/43.5ebbefda.js",
    "revision": "a13cbd6a9750fc50c15851ed890f0428"
  },
  {
    "url": "assets/js/44.63f6faa9.js",
    "revision": "32cc360ba7aca82bf1fe7f55c0ea1267"
  },
  {
    "url": "assets/js/45.af9f6a53.js",
    "revision": "6438e6869cc0ad525a24707c1ee1a8ab"
  },
  {
    "url": "assets/js/46.ff1d5d8e.js",
    "revision": "2278d2df3dfafb6c7d72f9feda0d1241"
  },
  {
    "url": "assets/js/47.0b4400c6.js",
    "revision": "4a408c480c9471be5800d3e7658efc92"
  },
  {
    "url": "assets/js/48.6d1a9ebe.js",
    "revision": "46962b1ba7a7fea0adea1571c60a4fc3"
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
    "url": "assets/js/6.157b2afe.js",
    "revision": "03a1be290dd751631fb09c4d20c0f78b"
  },
  {
    "url": "assets/js/7.1d182d12.js",
    "revision": "e1560398b57da7d8a3c7b01f1341ba0c"
  },
  {
    "url": "assets/js/8.a2683d12.js",
    "revision": "2d9ef6f4c01465244332d22f9da6aec8"
  },
  {
    "url": "assets/js/9.4ab685a6.js",
    "revision": "828b26df8b52e97d2149e102f2095ef3"
  },
  {
    "url": "assets/js/app.4db29f44.js",
    "revision": "b5565dc03cb0ee3be078cadf9c9594d2"
  },
  {
    "url": "framework/fork.html",
    "revision": "4a3da43670acf67fb9a398974099d058"
  },
  {
    "url": "framework/index.html",
    "revision": "3e897ee693f6bcab0a01001b46771f4b"
  },
  {
    "url": "framework/lerna.html",
    "revision": "3e6009b44d5973691341ac871a465cf5"
  },
  {
    "url": "framework/vue.html",
    "revision": "6a3afa13d75d1f62fdf4d1165d97906f"
  },
  {
    "url": "git/index.html",
    "revision": "1d3b7e8e43940a18a0b6b6a8f3a104c2"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "495cc07d2533995cff13372821a9827d"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "c88f4d12ba6dd7785392656976952c74"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "954f595f13c6487af4ada007f2012635"
  },
  {
    "url": "interview/base/index.html",
    "revision": "888f6be78e8b052f1796eb85f3a944b9"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "7bf68c4bf2f166c674bef8b06d4e8bdc"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "31cb8265d4ee5df7ac266faa7408240b"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "b2c940ea4a7dca4ce4fd468f611bd496"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "6f58a42e228a526b9c9746f02a8e4d9c"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "db8cc3b824a3014567f4edc207e792ae"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "e5d91d2ba76a53aa6f7ef6cf091b72b3"
  },
  {
    "url": "interview/base/is_new.html",
    "revision": "9e7178467b56b4f0b5192b6964e23c42"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "cadf4e1e1c4eafb97fa9fcbde8938634"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "af29b30385e82b331dca72714b85a01f"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "0f20b7e1442d7afd76de324cf6572b20"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "0b211049c27d0c2ba03c6afae69b25c3"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "6714ed33b0f908d8817c0fc3a8a8205e"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "ecf83946075367ade46ac6e92455d2cb"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "6e874ab7bc3137cd84fc2c2274e02fdc"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "d5b36451bf17f873c956aea7b271e5ac"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "0c10a77c80af1d29054a76e05f2b229f"
  },
  {
    "url": "interview/http/index.html",
    "revision": "1cf38b6f0d48adc10956e5ba65478d5a"
  },
  {
    "url": "javascript/algorithm.html",
    "revision": "1a4a28fc5e1b5f2eec2e5872ddb37d2a"
  },
  {
    "url": "javascript/es6.html",
    "revision": "763dd2cca650518edf43fee71614d2c9"
  },
  {
    "url": "javascript/know_in.html",
    "revision": "a37ed8cc5c8f3fd77b8ee710546383f4"
  },
  {
    "url": "javascript/know_top.html",
    "revision": "3cd308412c8202f5dcba5256c54391b1"
  },
  {
    "url": "javascript/utils.html",
    "revision": "f09ba44dbd7fb0e5790ccc2e9e76af85"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm.html",
    "revision": "d7518a5470e88b126a0aafe47d960111"
  },
  {
    "url": "style/index.html",
    "revision": "f4ee39b710fe1238f1a0d60d37f4f339"
  },
  {
    "url": "typescript/index.html",
    "revision": "79df996122023ac8e27b9d8e80a8d2aa"
  },
  {
    "url": "vue/index.html",
    "revision": "7205fbf4c4539fb6454816f2fc0a2b97"
  },
  {
    "url": "webpack/config.html",
    "revision": "b2801686e18f545583b5be8c151e7aef"
  },
  {
    "url": "webpack/index.html",
    "revision": "8c74f70bd337f5c2f5dbd67965b7ae5c"
  },
  {
    "url": "webpack/initWebpack.html",
    "revision": "33697688b973337989623dadc262c08b"
  },
  {
    "url": "webpack/loader.html",
    "revision": "166dfdd311baac2424ee709b3fe2b4c0"
  },
  {
    "url": "webpack/plugin.html",
    "revision": "054a3799ab47f17dfb2218e24a6f7291"
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
