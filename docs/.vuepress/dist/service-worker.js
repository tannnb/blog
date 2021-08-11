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
    "revision": "2ab88e82a3c4bedd5c5c75d75180fa23"
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
    "url": "assets/js/20.97bdde46.js",
    "revision": "f6b8c1ceb0bac25fae0345fe53392532"
  },
  {
    "url": "assets/js/21.c4667805.js",
    "revision": "1d1502c3903846a2dc7c72c148e569f4"
  },
  {
    "url": "assets/js/22.af37b567.js",
    "revision": "fb65893d36bba42962ebf3bf89000318"
  },
  {
    "url": "assets/js/23.1a2cb92b.js",
    "revision": "3c3917d986e043901d1e3cfb1791d7ad"
  },
  {
    "url": "assets/js/24.40f8b4fb.js",
    "revision": "42e0cc5e2d6c7d24f9fb42f07b3b38f9"
  },
  {
    "url": "assets/js/25.f1f2b77f.js",
    "revision": "079bea536ce477ba6c155a95c88efcec"
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
    "url": "assets/js/36.4790279b.js",
    "revision": "e2f5490e75c2ad34fbffc15cc90d2a4a"
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
    "url": "assets/js/45.598c4294.js",
    "revision": "a8a8c514719de86a7407202fad2dcac7"
  },
  {
    "url": "assets/js/5.78a3a202.js",
    "revision": "17bb56f40590293b5ef23fccea458b80"
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
    "url": "assets/js/9.3d8caf25.js",
    "revision": "9a9779185c0143b5a024987600539d1f"
  },
  {
    "url": "assets/js/app.a4b41cfa.js",
    "revision": "7b3653dc95b776c05c8645ee20931a9e"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "939b6971bfdefb3a94ab560a66e8de6d"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "f543dbceb7d1ce82ec1ce5ea20915570"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "1e76c70f5d2bb4e5b1d0592e6fc84e9f"
  },
  {
    "url": "git/index.html",
    "revision": "5794b09d58bf6a6582dc618bea27ede0"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "05053c38efa99e8f9e0fe1193fedd749"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "66b06d457c3b27af6f82a495e2cbf4ec"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "6a31e9f27dc15a722fc6c3dd9bb14119"
  },
  {
    "url": "interview/base/index.html",
    "revision": "d0f626a0564d03c42f33b469d4a987e7"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "3554d5700208a39c658c5e7ae43404eb"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "277acd773489b6439eb91c46545dc474"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "0470769e343d54e44b1e597fc3370736"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "37bf62f8dc0f4291d134947a0fc22fc1"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "de8742dd9f126cf868854a00e619be1d"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "4f3763847f937570e08db1ba7d780ff2"
  },
  {
    "url": "interview/base/is_new.html",
    "revision": "b8c04b5fdac4f39c140028a158331372"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "3972fcbb3931b3da29f509be43f4b261"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "d3516e9683cc8b7c04870f3ae10b0489"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "f41b086e19b07f506b86faa0a24b206a"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "f159fdbcd80f1708e7b120b21cc787bf"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "36bdcb9911b67785be8fae1c10ccf47a"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "f3cb536b26179eef84387dbdf324897c"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "80c957e1782167ba8325f859bf648745"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "6ae67b348a2f8cc2673e653adaee3701"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "19757e97e2f792277ed813f973f556ed"
  },
  {
    "url": "interview/http/index.html",
    "revision": "d275faec6364f1cd8ffe880069550643"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "e3ad017d5d46265c9cd3864b72b03192"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "050a32cdd620d17242469d11698a637c"
  },
  {
    "url": "javascript/know_in/index.html",
    "revision": "3b14fa8e69dcc16b19c65852f2051683"
  },
  {
    "url": "javascript/know_top/index.html",
    "revision": "dd1dd1b9bc90b480dd59b512b61e8672"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "5ef153e6af548d055fbfb89f85304a92"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "620c38bc5644345abd97774bfaa7877c"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "c89e788dfbb1458c3e956e3df4079fd0"
  },
  {
    "url": "style/css/index.html",
    "revision": "d1806dc90341cb87a4ba929013ec5920"
  },
  {
    "url": "visual/three/index.html",
    "revision": "126dc711c779defae38e32ee5c5880e2"
  },
  {
    "url": "vue/index.html",
    "revision": "97fbd07c5910c9e6e818107b1b086ade"
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
