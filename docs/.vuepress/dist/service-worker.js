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
    "revision": "c0a95914fab8e9464ce5ce57d2dd0338"
  },
  {
    "url": "assets/css/0.styles.827ecb93.css",
    "revision": "eab6d9d73d0bb7d7a8351c03ade23acd"
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
    "url": "assets/js/46.b4deb562.js",
    "revision": "87ef0060a4949a9dc07c879a059742ce"
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
    "url": "assets/js/49.9577dbb5.js",
    "revision": "6dc67dc0d5d6c19da21a15a1d7af910d"
  },
  {
    "url": "assets/js/5.aaf58b10.js",
    "revision": "7099448380a2f36f8e154b74c8812a74"
  },
  {
    "url": "assets/js/50.b95e5301.js",
    "revision": "cfcd495190dace5af293be7581d32f90"
  },
  {
    "url": "assets/js/6.f4b7d078.js",
    "revision": "5a1ef4a13d9353bd5481c64f4a9d5f0d"
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
    "url": "assets/js/app.82519b2a.js",
    "revision": "29f14d6f62496af960a7ecb779cedc1f"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "d176741b577ca5e1cab135296ede02fb"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "74280d1c967a1eab0628349f80df5eba"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "0c1a22327c0b1a65d1c5c959e618d32f"
  },
  {
    "url": "git/index.html",
    "revision": "05a0d230db31119f75fc882259f4686a"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "a3433db92c32ef4ae378f665dda9b150"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "6da52b37f732bc8bbe0c33978ff782aa"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "37936b24bacf59507a6877324ac5be74"
  },
  {
    "url": "interview/base/index.html",
    "revision": "0976bf307e2a96b235e528fbfc8ffd77"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "b61339a2848be13eba576fe5ae1f18d6"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "38059d38a8a44910421bb7b80f19c43a"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "5b7d51e3558874af49a79b364ee2b2a4"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "e9842f9e0a7363b5a464116f1e0a9a39"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "fa5c9bf38a028671edde7c6c12962617"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "d37dc70cd58c8184ad71287062a8f3d5"
  },
  {
    "url": "interview/base/is_new.html",
    "revision": "35abf63882caff9848e33fddcf99b5a6"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "bc18b57e1315aa2d43f1796112ae4e78"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "35819deb29452458aa7a42ac7f8f1a61"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "b7e16a8db97b781540c21eee1b2bcb85"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "fc1c5744ff2221d5f9e8380b2078a5f2"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "a859cc2db154b395ff4e3406f57038dd"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "dff7ed9802b2c8678a0985f1aaff273b"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "1a5721bb138dbac63588b299bf240447"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "13433e21639589efc3989b1022cc9626"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "d9c74c5b7d41e6252dac17eda7d9a348"
  },
  {
    "url": "interview/http/index.html",
    "revision": "a8efe817e933337f794fe6ac9f55a351"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "18d1728e96bf1a4641ca98ac33b33257"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "268c95073ce645adba43920cfea260fd"
  },
  {
    "url": "javascript/know_in/index.html",
    "revision": "2766b3e02729eb5033772514b782f821"
  },
  {
    "url": "javascript/know_top/index.html",
    "revision": "d3cd1d91eadd3057a94a10f162f7a157"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "d44bcb052143e0e1fcb513a9403af954"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "c46892820110f49fbd2a7548d94c662a"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "ec32e5c2c9ec67812e33e398cb0e659e"
  },
  {
    "url": "style/css/index.html",
    "revision": "74f9ba009fdeeff693b0335af5684582"
  },
  {
    "url": "visual/three/index.html",
    "revision": "06bab348b712d755d0788e219ec8fb0c"
  },
  {
    "url": "vue/index.html",
    "revision": "f86ad8c449489421a476660d06417bce"
  },
  {
    "url": "webpack/webpack_next/config.html",
    "revision": "b851c5f650384f836f06ccdda2688551"
  },
  {
    "url": "webpack/webpack_next/index.html",
    "revision": "f4094bc9eddf6b10bb38ad6cd6a50a8a"
  },
  {
    "url": "webpack/webpack_next/init_webpack.html",
    "revision": "16dde42a0976d871fe8f42ba815bdb75"
  },
  {
    "url": "webpack/webpack_next/loader.html",
    "revision": "664fa4e0c351ae00b45fef4af22a5a47"
  },
  {
    "url": "webpack/webpack_next/plugin.html",
    "revision": "bc475e1d6a037c58b8bf2b2e88b48ae8"
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
