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
    "revision": "d6baa6447879571838920bf589269bb7"
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
    "url": "assets/js/13.0073ad53.js",
    "revision": "b2d25f81143723f26deae3e475278c1e"
  },
  {
    "url": "assets/js/14.744d92ac.js",
    "revision": "a07d4c86083e168a74b560db15ff0593"
  },
  {
    "url": "assets/js/15.0defe897.js",
    "revision": "175dfc532f346d0fee43bd4710bb7f21"
  },
  {
    "url": "assets/js/16.9d31b921.js",
    "revision": "e518a0a770b505209b6ae8308922b4c2"
  },
  {
    "url": "assets/js/17.1b36abd4.js",
    "revision": "242337ac00b552350adcaadd246e7775"
  },
  {
    "url": "assets/js/18.ee9fb776.js",
    "revision": "eb44562e73f53191880355535125009b"
  },
  {
    "url": "assets/js/19.5392970b.js",
    "revision": "e3772f8e69d9bc97dfb6a52f4a8330d9"
  },
  {
    "url": "assets/js/2.11a5d5e3.js",
    "revision": "c0479528f88a4199d68331df0b1df53f"
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
    "url": "assets/js/22.af37b567.js",
    "revision": "fb65893d36bba42962ebf3bf89000318"
  },
  {
    "url": "assets/js/23.fffdd24b.js",
    "revision": "c9fb5e15597b784be441d896193acde0"
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
    "url": "assets/js/35.168feb8b.js",
    "revision": "6a28324e700585b356a533e2851e1819"
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
    "url": "assets/js/38.6b723532.js",
    "revision": "974171617a3fdedeb3f41a9565ae70b0"
  },
  {
    "url": "assets/js/39.c1d8c192.js",
    "revision": "a3f2c55d114d2bb07fd0bcd991bb11c5"
  },
  {
    "url": "assets/js/4.66589091.js",
    "revision": "5599886c35a21c32353a730bba191b02"
  },
  {
    "url": "assets/js/40.b90a9f2d.js",
    "revision": "b5a935ccae00f8f75adad1e357187801"
  },
  {
    "url": "assets/js/41.1f0993f7.js",
    "revision": "a8486b5f07c86800cd47b67939cba806"
  },
  {
    "url": "assets/js/42.9c878d0a.js",
    "revision": "6bff70da359323eb2c4e831ee2b73f4b"
  },
  {
    "url": "assets/js/43.1792187b.js",
    "revision": "156636763dd84ed2a1d1f299427d6e16"
  },
  {
    "url": "assets/js/44.fdc6df6e.js",
    "revision": "fd8b726c8488fa6f640201fc8eceb08a"
  },
  {
    "url": "assets/js/45.a5155267.js",
    "revision": "9576577817a053d1390d1d135c31beea"
  },
  {
    "url": "assets/js/46.cc7a2532.js",
    "revision": "03349600030c5a9439b660d67f4c2586"
  },
  {
    "url": "assets/js/47.197c60c6.js",
    "revision": "ce51b14b0fa3b3ebbdd1e8b6eaabfdd8"
  },
  {
    "url": "assets/js/48.d7f3d12d.js",
    "revision": "4818c336b78905f781b183af929c199f"
  },
  {
    "url": "assets/js/5.2b527a99.js",
    "revision": "8773b481398e755cdc0e17c1876ac1f5"
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
    "url": "assets/js/8.e01bb414.js",
    "revision": "6c589023339fba081a454e72523912a6"
  },
  {
    "url": "assets/js/9.3d8caf25.js",
    "revision": "9a9779185c0143b5a024987600539d1f"
  },
  {
    "url": "assets/js/app.efa59316.js",
    "revision": "2c5867d4a80fdcfc94e7b560529d8d14"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "818a0ca4191b993a568dda951877f321"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "3d56a8c307f3f903660af9ef2dd1cd49"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "651ff617830176083ddb8f8d6b56976e"
  },
  {
    "url": "git/index.html",
    "revision": "d3b4c97b4d6792ba99705b56d80e2cfb"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "bd6f7c0fa4aaefa4fdcabd91eefa98b3"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "1908441b5c270ba34390b8ddc9a8b0d5"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "f5fc7a7ce8028e2f4ef2429d565ea48e"
  },
  {
    "url": "interview/base/index.html",
    "revision": "e3206b6b0766b02e024ac1ca863d5f30"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "af29863e7eb3306ad4a31ba8707bd40f"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "83ed275f5012c983b96f672883e32a7a"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "bf55e912a1562bfcf6fabbdbb9083223"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "2c1de5864b096be6febb23e2f95aabc7"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "d971b1093762c2026ad1d02298e81725"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "21538725127504777f3a09895d5ea727"
  },
  {
    "url": "interview/base/is_new.html",
    "revision": "43d6f869c49140e68b8666ca2e538d8f"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "df7c0200eba5b5ec276fcee702b11eb3"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "8dbbaa9275e143c14a54b2905cf91a32"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "9f42bc9bd39bdd6258d467c2dff939df"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "14a43044a6cffe080d91ce49dd07222d"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "2b093ab554c805816badede1781e646d"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "cb7b0a8f19fb16986e3cb90296b3a593"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "c2fee9dd75e693e7cb0a4ed803f0e201"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "dc505132d2cbab1341aa70a9b0ceade4"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "cda46868b0d8fc0952ef1465bdbfa885"
  },
  {
    "url": "interview/http/index.html",
    "revision": "386c6f3a752bde917dc42ebd12a0b228"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "4eadccfb61fc0bcd86fb67cfd1f367eb"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "6b1797de9df3beaa1cc9ecdf63b1f14c"
  },
  {
    "url": "javascript/know_in/index.html",
    "revision": "fc8124d66cc9e621ffab11db6a31b741"
  },
  {
    "url": "javascript/know_top/index.html",
    "revision": "eda84d23ab94a5de893979a6ec3dfddc"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "aa041a1dd8007e142731efef273fe477"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "f3692689d988d9a33fad13ecf351e5e9"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "7a048e26c28c6540c3341e82b422a6e9"
  },
  {
    "url": "style/css/index.html",
    "revision": "f5143ebe6152d10d4215b43965dca6a4"
  },
  {
    "url": "visual/three/index.html",
    "revision": "05fd29d467e4c42b182e16be5c312682"
  },
  {
    "url": "vue/index.html",
    "revision": "121beec063126d777c8d82995a75191b"
  },
  {
    "url": "webpack/webpack_next/config.html",
    "revision": "c62ebdff42a29b27b87efedac21a5cc2"
  },
  {
    "url": "webpack/webpack_next/index.html",
    "revision": "8c83999ce170d79ebdc61eff13c7973e"
  },
  {
    "url": "webpack/webpack_next/init_webpack.html",
    "revision": "297673ca163b8554c249add7b3a7433e"
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
