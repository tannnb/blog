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
    "revision": "dba2f14a84735a63991d7efd27881faf"
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
    "url": "assets/img/is_new_01.0a662463.png",
    "revision": "0a66246394549422692ebade86e29278"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d150db9f.js",
    "revision": "f0a09ed587cdf372e40f69d434f7c8d3"
  },
  {
    "url": "assets/js/11.bb337115.js",
    "revision": "508e0a49e8c2028900daa9fb810f1a38"
  },
  {
    "url": "assets/js/12.90f4c0a1.js",
    "revision": "561cbdf9ac2bc9b8cd17e508a6b9dc56"
  },
  {
    "url": "assets/js/13.1cc7897f.js",
    "revision": "0b69b5e9bcb25dc7e7f2d55eb0993c54"
  },
  {
    "url": "assets/js/14.6ded3e9d.js",
    "revision": "f5ff1dfab48018371857c5ffb421a8c5"
  },
  {
    "url": "assets/js/15.46d0a816.js",
    "revision": "da6fa9db80d7b940098e03527ae474bc"
  },
  {
    "url": "assets/js/16.3210af8a.js",
    "revision": "a9a22d16caa243d59350b4c739099fb6"
  },
  {
    "url": "assets/js/17.21edfdf6.js",
    "revision": "80db3bf47106a49f6c13e2541dfef45f"
  },
  {
    "url": "assets/js/18.c24b46d9.js",
    "revision": "f9f93219fa41daf392af832d06ef0b02"
  },
  {
    "url": "assets/js/19.52f3e9b6.js",
    "revision": "b1634c35eec3b709633ea1e97ccc8b4f"
  },
  {
    "url": "assets/js/2.cf817172.js",
    "revision": "6c0616049c1d96f5858b1e67b2b01e5e"
  },
  {
    "url": "assets/js/20.f8486a2d.js",
    "revision": "70490c78846cdc184ee54089472809b1"
  },
  {
    "url": "assets/js/21.5f42c6a9.js",
    "revision": "4b2f0743aa841f4b15ec736933023528"
  },
  {
    "url": "assets/js/22.7886d5fa.js",
    "revision": "1a597aa36be14a545defcb2b148efbe4"
  },
  {
    "url": "assets/js/23.70d5ce2e.js",
    "revision": "addf7cca465c899553d446625421ac73"
  },
  {
    "url": "assets/js/24.57aec9ed.js",
    "revision": "fc9c975977c9c54017f01dc4fb23906d"
  },
  {
    "url": "assets/js/25.3f05495f.js",
    "revision": "a988cf944e192027caefc0df6f743751"
  },
  {
    "url": "assets/js/26.15d7938a.js",
    "revision": "71e4d59baaf26994d137e27eff2fddf7"
  },
  {
    "url": "assets/js/27.5d05adfa.js",
    "revision": "9d4126aa03c5f4b616ffbfddb50aab4f"
  },
  {
    "url": "assets/js/28.64932460.js",
    "revision": "2378dba8a4152c73651150bd1766fafe"
  },
  {
    "url": "assets/js/29.0d2ad026.js",
    "revision": "cb322b754c999257e8e8bc9ca9ea5468"
  },
  {
    "url": "assets/js/3.ff5a8816.js",
    "revision": "f4d11a63561deddafe0f94903a400730"
  },
  {
    "url": "assets/js/30.06ed9dbd.js",
    "revision": "e17b49ef2d0ce63600ec6d662330957c"
  },
  {
    "url": "assets/js/31.beadbffd.js",
    "revision": "82b461adafd3799e1d3d2cee6c227184"
  },
  {
    "url": "assets/js/32.94beb7ed.js",
    "revision": "e0d3a3e3adec2252d00b1e5676ec4e0c"
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
    "url": "assets/js/36.d8719a1e.js",
    "revision": "e3d9e2129e597714b13e80b0f93372ce"
  },
  {
    "url": "assets/js/37.11bb2dc7.js",
    "revision": "0a34bce2f07a2e16aefc86a9f5a60d74"
  },
  {
    "url": "assets/js/38.366954ba.js",
    "revision": "2bf36c6b9a2264be3ade90a73b6a0539"
  },
  {
    "url": "assets/js/39.c61fd4f1.js",
    "revision": "10a147528f9d80c8e5588f19db33c04d"
  },
  {
    "url": "assets/js/4.fda27e92.js",
    "revision": "9635542d0f3071d6b2d81e1146d7d472"
  },
  {
    "url": "assets/js/40.ff4feb1d.js",
    "revision": "f20b4e958648c9db2401b9e097b05504"
  },
  {
    "url": "assets/js/41.66148587.js",
    "revision": "7338290b1d1ffdd4ace7f89336473455"
  },
  {
    "url": "assets/js/42.fab448fe.js",
    "revision": "441def0d51256fbde4a35a737cf35e7c"
  },
  {
    "url": "assets/js/43.e994f6d0.js",
    "revision": "97d13d4412a4b0cb428223f2489b2118"
  },
  {
    "url": "assets/js/5.a8e0deb2.js",
    "revision": "5eb24d0962e9df3c30bac8a8f99121b2"
  },
  {
    "url": "assets/js/6.ee8c027e.js",
    "revision": "e87921b9e59645c3bb30f332f3b01f9c"
  },
  {
    "url": "assets/js/7.2e973c79.js",
    "revision": "ee6ca0aa9256a2de22e292d5ed256db5"
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
    "url": "assets/js/app.b6e9ba2e.js",
    "revision": "99cce345bda343b2e4ab945c28aa5af5"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "0516c8d3c7e38c230c18093fd5a41d12"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "1db947e0a634a875f4b9f1e28e78a64a"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "f5b83f01679ab0b52a9dd27ecf6a71e3"
  },
  {
    "url": "git/index.html",
    "revision": "d135cbf7346e4775fbfb3f5a44daeafa"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "8af36d1c27b3009ff4b3f92ad1824207"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "40a5ab7f5bdf958aa215630202c87864"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "c3dcc785865ca258430e409125bf3749"
  },
  {
    "url": "interview/base/index.html",
    "revision": "0f8416f8711ba9e31cc3e10e1e5fbbab"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "92d66ddea798a2280b28e200f1132c21"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "58c71141f65b421aa9a7d1f876b8f7e3"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "dc65a680f79a16d9f41eaca064d0e28b"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "33fa081bc900166828c093078962d6ff"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "4e2fc45411c803ad0c4d5f8f8c4fe57a"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "68ca760ad0ffbdfaebdebdc1c14eb67e"
  },
  {
    "url": "interview/base/is_new.html",
    "revision": "102cf3c69e2b409e78deae7e02c6bd8d"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "b27418e49dded02c4607e5133d3d6510"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "86be693a63996997acd0f90d5b4e2c77"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "69e0efee5c77375b0757fac7d2ce5588"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "47caf99a6b94a723ce06a8baeaccc055"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "0375df3a00c88c8edb5acf10d6bc883a"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "20093c7b3223c5291320fdca856dd72e"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "5b13e521951ff2dbbd5c6eab3f9ab520"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "2dde3f8113152e2ff70a0df9cadc331f"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "eb41767171cbd2b153ee3ce45d22d555"
  },
  {
    "url": "interview/http/index.html",
    "revision": "841688ff6938537dcf86731c6e89229d"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "2265774d66d89fc9f1aef29ee90e7a48"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "805fff9743c76a200c9b182992e1889d"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "8614662ff98fc8447a53d0d802462dbf"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "4869d73b5dece047806bb77dac08596d"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "6944cb963951a1e1a3f5cecb14ca286a"
  },
  {
    "url": "style/css/index.html",
    "revision": "16f959fcf97e39666c12dba651342a14"
  },
  {
    "url": "visual/three/index.html",
    "revision": "00076a12260ca0bb893bfccdede3e4fc"
  },
  {
    "url": "vue/index.html",
    "revision": "ee8bd18e539e414c0394cb9cdcb6e571"
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
