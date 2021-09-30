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
    "revision": "c739ab050147729ca53383f07fdad57b"
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
    "url": "assets/js/14.426051a6.js",
    "revision": "0198d8982de603ac03446ae852b97df6"
  },
  {
    "url": "assets/js/15.795a90e5.js",
    "revision": "ccf6b44644b59d684b2cab3db5544ba3"
  },
  {
    "url": "assets/js/16.40e78b0c.js",
    "revision": "a9a22d16caa243d59350b4c739099fb6"
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
    "url": "assets/js/31.beadbffd.js",
    "revision": "82b461adafd3799e1d3d2cee6c227184"
  },
  {
    "url": "assets/js/32.9f84e0c8.js",
    "revision": "956fecd8ad22fe417b982b2e4cb64f88"
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
    "url": "assets/js/35.2d6aa872.js",
    "revision": "051066acbfa70930809b920248d8c823"
  },
  {
    "url": "assets/js/36.848e7f90.js",
    "revision": "ce4907baf2f320402d1a542028a94a9b"
  },
  {
    "url": "assets/js/37.7f01a87c.js",
    "revision": "1ae9447f4049416550d995d732f62735"
  },
  {
    "url": "assets/js/38.28c19fe0.js",
    "revision": "75d3dbef9e10c92cedef049edbd65705"
  },
  {
    "url": "assets/js/39.e4061a03.js",
    "revision": "a76f898aa884ef9dce552557a4cf966b"
  },
  {
    "url": "assets/js/4.66589091.js",
    "revision": "5599886c35a21c32353a730bba191b02"
  },
  {
    "url": "assets/js/40.3cdbb3ae.js",
    "revision": "c4c5e8bb25e3fadf766995260ca4ad27"
  },
  {
    "url": "assets/js/41.9fcac76b.js",
    "revision": "71400812fab8dd0d5f133d944d889176"
  },
  {
    "url": "assets/js/42.111583c0.js",
    "revision": "8aa52e1db8199b4ae23e1fc7e0000640"
  },
  {
    "url": "assets/js/43.620cd84c.js",
    "revision": "6c6ff711dbf8ed0ee9bcf820e52a01e5"
  },
  {
    "url": "assets/js/44.723b4dc3.js",
    "revision": "478bed432297b36ec348e774597e11ba"
  },
  {
    "url": "assets/js/45.8158993f.js",
    "revision": "2dc5b7330c55d95c357e8c409bbcec38"
  },
  {
    "url": "assets/js/46.132fa256.js",
    "revision": "b4ed287a52841652850987efe8c2780a"
  },
  {
    "url": "assets/js/47.3be3b891.js",
    "revision": "83fa450a24d850795a6cccfdeeb3a242"
  },
  {
    "url": "assets/js/48.f7db10ca.js",
    "revision": "e64dc505fb83b7d00db9cf9a8c0dfd11"
  },
  {
    "url": "assets/js/49.bd0ddb4e.js",
    "revision": "b1a3bfd10b8ecc83da52a516ea8381e5"
  },
  {
    "url": "assets/js/5.6a045548.js",
    "revision": "4923915bed683b48df41af42da7f8847"
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
    "url": "assets/js/app.6840529f.js",
    "revision": "7efe905c5e1dc39c69bbc9c208720814"
  },
  {
    "url": "framework/index.html",
    "revision": "801a10eff96dc434581b90997ae10b54"
  },
  {
    "url": "framework/lerna.html",
    "revision": "f4a09e8cb2e9731dddbf1aa70297e4a2"
  },
  {
    "url": "framework/vue.html",
    "revision": "8ec60270fe25e66bcc0ea6264964c799"
  },
  {
    "url": "git/index.html",
    "revision": "832997f572e95335687bfb6acc2d7790"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "5950c9727d6e4e5ddf6e078f1f456a94"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "338e37005081ddc1b2f3cca278338106"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "23e62d86fd62afa2e6923932d3a8629f"
  },
  {
    "url": "interview/base/index.html",
    "revision": "54c391dfdf16d681ce7d3f2c5bfbcff8"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "9390329fe775d12fe0e01af417916e0b"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "0f7149b18ae50270e086bc88bef39c22"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "347017de5b644439ee86249e854f58b6"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "88dff1b4f38b2e333750664d6c8c1f27"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "d9daabb156f392554fbb4a5111c06984"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "33b7cef35bb684d299fa1c504948b855"
  },
  {
    "url": "interview/base/is_new.html",
    "revision": "9f46e090fe14884e3addf81480ca6da6"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "0e85e2409f39f3808424c319100cc137"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "33d698b30478a397c9f85044c9505ab0"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "1d68470e4a04461baf15f681f6bd63bc"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "18603decda7c049bfb059a261aaf54ce"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "3c106d25a09d9f3c76bb2b3b38c07935"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "ce4a9ed8ce40fc4d7a98dbc517c7a526"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "9d9b8aeb2fd9838550f5bcc0a8b69f91"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "ab91f3fa0ade6e70e7db849cd042272e"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "f5b1a620e16e8875370c88b279ea8782"
  },
  {
    "url": "interview/http/index.html",
    "revision": "ae81f2659c8883fa882d8cbd056ad00b"
  },
  {
    "url": "javascript/algorithm.html",
    "revision": "ce251e6929e0ebaccc133d69192fc6da"
  },
  {
    "url": "javascript/es6.html",
    "revision": "efc778d71884d59530ac3b06fcbab85b"
  },
  {
    "url": "javascript/know_in.html",
    "revision": "82d0a0ee4e11e8cdf283b2a9bbe88580"
  },
  {
    "url": "javascript/know_top.html",
    "revision": "f6805f2e50a993bd05686101226b37a1"
  },
  {
    "url": "javascript/utils.html",
    "revision": "3e128bba64686e49617b049327cafad7"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm.html",
    "revision": "4d04142120de76eb84b901e534d092c2"
  },
  {
    "url": "style/index.html",
    "revision": "8421a45eb9e6ebcee42fdb04020e0327"
  },
  {
    "url": "typescript/index.html",
    "revision": "e694f5f8a0f2bcac2fbcd1551964c893"
  },
  {
    "url": "vue/index.html",
    "revision": "afec00a9d1b251edfbd8bab52d746bfd"
  },
  {
    "url": "webpack/config.html",
    "revision": "f0d2030e0674520c56ba3496be6e1f8a"
  },
  {
    "url": "webpack/index.html",
    "revision": "d81ba8e40799d6b52c07d8157c9cc8aa"
  },
  {
    "url": "webpack/initWebpack.html",
    "revision": "0cb1ce4d7eb6dca31801535d46b230f3"
  },
  {
    "url": "webpack/loader.html",
    "revision": "216c09f0633e02f11de24b58dccbf1da"
  },
  {
    "url": "webpack/plugin.html",
    "revision": "70c78d26eb5b777dd72497aa9e74b969"
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
