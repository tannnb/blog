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
    "revision": "7b8934ef903f37360cb97de67b428ad5"
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
    "url": "assets/js/10.fcde9ff9.js",
    "revision": "7d32994d58ecb01d9324f9ea23015f73"
  },
  {
    "url": "assets/js/11.4fe06ecf.js",
    "revision": "2bc46d41f3915a8295aaad4046ea821c"
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
    "url": "assets/js/15.aaeeb14d.js",
    "revision": "072cc1cc46c1b9f9c9c97af2ce89fea8"
  },
  {
    "url": "assets/js/16.6c955f7f.js",
    "revision": "888a8204dbe32376befe70f0d5867787"
  },
  {
    "url": "assets/js/17.1b36abd4.js",
    "revision": "242337ac00b552350adcaadd246e7775"
  },
  {
    "url": "assets/js/18.ce6c342e.js",
    "revision": "d19a730c29b725bf571775036dd39837"
  },
  {
    "url": "assets/js/19.a7ceac8d.js",
    "revision": "88b204a2ff1cde7828d5ecae13d85f06"
  },
  {
    "url": "assets/js/2.b0eadbe5.js",
    "revision": "a8ed629c1050d1a3b0d9051088ba1c76"
  },
  {
    "url": "assets/js/20.b8e5bd1a.js",
    "revision": "c1a712a3ad45206c0257bc3cecd6657a"
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
    "url": "assets/js/26.208f2cc7.js",
    "revision": "9a8c8dd78e25859baef3dba17bc4cb4a"
  },
  {
    "url": "assets/js/27.79886b9b.js",
    "revision": "0e162668b53100bacdc65a1d18f908db"
  },
  {
    "url": "assets/js/28.694910ec.js",
    "revision": "4bf74cbc558a24ea89affbdd37894324"
  },
  {
    "url": "assets/js/29.bc2445a7.js",
    "revision": "9164f377d9ad4f3c3571fc1eaad59233"
  },
  {
    "url": "assets/js/3.bbf6ab88.js",
    "revision": "09f8fe6f0d118629588b457ce251bcfb"
  },
  {
    "url": "assets/js/30.b02321cc.js",
    "revision": "854ea5a93dc8ed893bb53b729f54e9a4"
  },
  {
    "url": "assets/js/31.fc9e2c63.js",
    "revision": "7a64cfe12e32bada6b3b0b217486b8de"
  },
  {
    "url": "assets/js/32.9f84e0c8.js",
    "revision": "956fecd8ad22fe417b982b2e4cb64f88"
  },
  {
    "url": "assets/js/33.ecc7b987.js",
    "revision": "3564fa1d383ef724a7487cd962db8ff2"
  },
  {
    "url": "assets/js/34.eeec2668.js",
    "revision": "62ef92b036ea96c080c43da43bbace62"
  },
  {
    "url": "assets/js/35.6714a2e9.js",
    "revision": "bd03be99fb8f37770681aa14e4cf6f06"
  },
  {
    "url": "assets/js/36.54b5903b.js",
    "revision": "94774d968e70467526982c92ad89aab0"
  },
  {
    "url": "assets/js/37.648a26d6.js",
    "revision": "1ae9447f4049416550d995d732f62735"
  },
  {
    "url": "assets/js/38.1da6e9e2.js",
    "revision": "d5ea639314f7d01251e06f1c1c8aa4f8"
  },
  {
    "url": "assets/js/39.7f46c91f.js",
    "revision": "8f1d289bfb3e0a793ce447fcc131e346"
  },
  {
    "url": "assets/js/4.250b5813.js",
    "revision": "4df7a6c63e9088365ab7aebe5c0f8308"
  },
  {
    "url": "assets/js/40.fb1a0e3f.js",
    "revision": "b01ec020484f037344e6f4192c95cbd1"
  },
  {
    "url": "assets/js/41.56bd74c2.js",
    "revision": "7ae0b47327c1b5dfe3d9bd85ccacb88d"
  },
  {
    "url": "assets/js/42.9c878d0a.js",
    "revision": "6bff70da359323eb2c4e831ee2b73f4b"
  },
  {
    "url": "assets/js/43.3f33a030.js",
    "revision": "c230ce1ba102aab0a0032ce64f8ee129"
  },
  {
    "url": "assets/js/44.3fb710a4.js",
    "revision": "9f5036d9576b6e26db1e84685f00eefa"
  },
  {
    "url": "assets/js/45.5c130a20.js",
    "revision": "e147fc42ff6400edec8471d3a52fd4a7"
  },
  {
    "url": "assets/js/46.f7518195.js",
    "revision": "af68c932f3804e06ec15e6940645bcce"
  },
  {
    "url": "assets/js/47.0e9d3ab1.js",
    "revision": "4d2a2ee0818cbc252bbbf34c3327586a"
  },
  {
    "url": "assets/js/48.5301ccdf.js",
    "revision": "a06229c2a60b7a9e84f7991d8a80fdd7"
  },
  {
    "url": "assets/js/49.18c28fb0.js",
    "revision": "fdf14f01261410b3211faa57165f464b"
  },
  {
    "url": "assets/js/5.96ca73c6.js",
    "revision": "c809fc739306a9d422510c61a1a5eb8f"
  },
  {
    "url": "assets/js/50.0d979f1b.js",
    "revision": "1a23a75e851041306cc6be4ce5bb90e5"
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
    "url": "assets/js/8.6b87a453.js",
    "revision": "808b472d6dd9587992a38b660e1523f5"
  },
  {
    "url": "assets/js/9.9430ea6c.js",
    "revision": "1f4a3a1b8aa686d40a8b58a6559a9810"
  },
  {
    "url": "assets/js/app.bb7d1330.js",
    "revision": "2814ceed9654de56ed021a938023d7f4"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "2833d80f2933648f88e0b24823132b2e"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "a110cc3c39abc03999df69c24b9d3d19"
  },
  {
    "url": "framework/introduction/lerna.html",
    "revision": "8bc38c8f0b84f31ff35397171a913214"
  },
  {
    "url": "git/index.html",
    "revision": "416091827c1f076456a4cfb8f5daa377"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "896f074f81981ef384a76eb975a537fb"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "38396a114ffa3d754ef2320ee7ab2600"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "13d965f348c1a581faef4e2941c82ffa"
  },
  {
    "url": "interview/base/index.html",
    "revision": "a178aa95282be35adfc69b65d52893ee"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "cd506497cb7eb2eb538556c663656541"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "6efab15d2e174830fde19f03d6d43a03"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "603eba132542538bfc422fd94e043976"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "ffe4e4bb824ee3c24f3684b37522a2c7"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "cef36e70efdf2d062a95271cfcde7619"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "71e93b44c0d94465fea7a21a1d108173"
  },
  {
    "url": "interview/base/is_new.html",
    "revision": "789e186da83e853feef586a17a3f36d8"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "021d43c8f04e04fd2c7908a257f205de"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "e0d7a0f7f9821dac4a9158159e51faa6"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "5f597bb9a7d225529cb2ab3bc86c862a"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "d3c8f855f8a2834cb5e6f0a621529261"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "122612d81568fb21567479eb43a6ec0d"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "24d136576ea300813b9497d83f8e781d"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "4bfd2ff06b2528cde2bbb23e429e1fcb"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "70b4b4eb6249b0649e8fd5fbcbf0c401"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "7b061f79e93a1e5bff1f4cf1878373ab"
  },
  {
    "url": "interview/http/index.html",
    "revision": "8d15f7c90cbf6c2d3f05b6b5a4419d1f"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "e2534ca201aef34d0230a9219d5ea7f4"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "250ede3404177062a4a2fdc94acd4215"
  },
  {
    "url": "javascript/know_in/index.html",
    "revision": "383d8ed3ac1dc3c51110d73b3638caec"
  },
  {
    "url": "javascript/know_top/index.html",
    "revision": "27dc04f5ce20a8d148947dee8f0fa102"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "7d0b63eb91799b015ee42d56c8174a41"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "25dd22e335b0e9275531d850cb1b4959"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "54e7d8914fdad3795581ee815857ce7c"
  },
  {
    "url": "style/css/index.html",
    "revision": "d6de4c349becb8cff333a2e20377fbc3"
  },
  {
    "url": "visual/three/index.html",
    "revision": "9d025587c982122814fb81ebd3e022d1"
  },
  {
    "url": "vue/index.html",
    "revision": "4bb712a2a579e8c6d06b49c802262732"
  },
  {
    "url": "webpack/webpack_next/config.html",
    "revision": "c430d158baae7e82e613aad10079e42e"
  },
  {
    "url": "webpack/webpack_next/index.html",
    "revision": "6e50a1404e62d37c471848657962c514"
  },
  {
    "url": "webpack/webpack_next/init_webpack.html",
    "revision": "df0373ec2705dea01ac8b8f54eed279d"
  },
  {
    "url": "webpack/webpack_next/loader.html",
    "revision": "5d341b9792e1f987b8ee5f1ce89130b2"
  },
  {
    "url": "webpack/webpack_next/plugin.html",
    "revision": "4ed89d75488d7a4aa1b8fb65b2fb752d"
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
