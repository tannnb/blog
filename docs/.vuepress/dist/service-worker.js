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
    "revision": "17707d193df1c7b8006c95955240e3db"
  },
  {
    "url": "assets/css/0.styles.1cafb89c.css",
    "revision": "76dcbb0fd30d571c6ed720dc1fdf6d00"
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
    "url": "assets/js/10.4a6613cc.js",
    "revision": "15517d3941f35abc7134ba3cbe5ee4be"
  },
  {
    "url": "assets/js/11.bc2abc04.js",
    "revision": "36520f85a465355176f18e0711c2acf7"
  },
  {
    "url": "assets/js/12.7e446894.js",
    "revision": "09c6bdac3e73b7663770ac5bf40a18c8"
  },
  {
    "url": "assets/js/13.23325faa.js",
    "revision": "54deeb8856fcb731663c930cd0db36eb"
  },
  {
    "url": "assets/js/14.eabdaf06.js",
    "revision": "a683c940397cdc1e86b529752014ce45"
  },
  {
    "url": "assets/js/15.c3083c3f.js",
    "revision": "461bee6ed96e42a016d545cd6f1859c9"
  },
  {
    "url": "assets/js/16.7d14a3da.js",
    "revision": "b939147b91ad5d8b9590c4c6d4d380d4"
  },
  {
    "url": "assets/js/17.e56d2dec.js",
    "revision": "7f3b3a481f8db7a0ecb9455588a97729"
  },
  {
    "url": "assets/js/18.dfba1327.js",
    "revision": "9c54aff84f6aff8c5ac6355da4f08c0a"
  },
  {
    "url": "assets/js/19.9077364b.js",
    "revision": "aa08eb150ad53ffaba5cd54d61eebdb9"
  },
  {
    "url": "assets/js/2.21c03cfa.js",
    "revision": "cd7ac027952b9eaf306d8c79614fd127"
  },
  {
    "url": "assets/js/20.b48d77dd.js",
    "revision": "ace649fab0317b28f4578bb3676ac423"
  },
  {
    "url": "assets/js/21.6d9cffd3.js",
    "revision": "426cafe4ab2459616e9b485faa4ec677"
  },
  {
    "url": "assets/js/22.584bfdc1.js",
    "revision": "35dc470508be41f4fab0a68ba709f250"
  },
  {
    "url": "assets/js/23.fcb1046c.js",
    "revision": "4c60eb2f6bb45890fe80b4e7d09087ce"
  },
  {
    "url": "assets/js/24.8b73599f.js",
    "revision": "e1bc499752d5dd67d636645f400a37de"
  },
  {
    "url": "assets/js/25.1a68194b.js",
    "revision": "ce291b316204111d2ff2367be0451614"
  },
  {
    "url": "assets/js/26.0fa8acf8.js",
    "revision": "73e5920bfc7613a910521a81d67228a0"
  },
  {
    "url": "assets/js/27.3fdcecf2.js",
    "revision": "45c28b6225fe258c234141cdd29be6e4"
  },
  {
    "url": "assets/js/3.7233cddb.js",
    "revision": "701412b810c2e03519e8fcb87412007d"
  },
  {
    "url": "assets/js/4.e50e3fd3.js",
    "revision": "0c7586359094eb649363813f728a7fce"
  },
  {
    "url": "assets/js/5.377bc090.js",
    "revision": "e1dc9e0c06ed27e6e21528d27b74280d"
  },
  {
    "url": "assets/js/6.3c75024b.js",
    "revision": "61e1c2345ffddbeb2115510137f109d8"
  },
  {
    "url": "assets/js/7.d69ae21b.js",
    "revision": "d9c0151ad3bc3c1a964cd9f225f70c1e"
  },
  {
    "url": "assets/js/8.69f8a907.js",
    "revision": "23095371d1c305d29057fd4af53483d5"
  },
  {
    "url": "assets/js/9.b9eaaf93.js",
    "revision": "67a0dcec192eb533fdec1df77ea4cc5c"
  },
  {
    "url": "assets/js/app.1e18d74c.js",
    "revision": "79102c198b60f7fa8bb82f9501aa598a"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "8a89501c1901dbb8acce4a0b9caa8e31"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "621633c43f90bd8e744614ac2fd2628e"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "a7a8b1cba523234148ce9ed2f9931c5c"
  },
  {
    "url": "git/index.html",
    "revision": "649462616d492a8639c8578bd5e8cde0"
  },
  {
    "url": "index.html",
    "revision": "8cb850b0a1993ffa3526a90064bc2a75"
  },
  {
    "url": "interview/base/index.html",
    "revision": "3c6841b992d349070430d05dc3854357"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "00cd7dcdc4aa1a39ca62cf0362f55330"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "17ed593066755000a3518dd981b1e277"
  },
  {
    "url": "interview/http/index.html",
    "revision": "0313156019da7a0f6d4b8779c2dc7e0f"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "81eeb228a2fecceb1a31c1e3c0e68c31"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "63214b0a4b9314431c0db7c5afb44f4f"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "7607bd61401b2e751159ba8a2dae2657"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "09c76e3911b3826024571746c5468cb5"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "773cd645c83514e9495230fa30b209d4"
  },
  {
    "url": "style/css/index.html",
    "revision": "664984604eb866330d376811312684d8"
  },
  {
    "url": "visual/three/index.html",
    "revision": "89a98f587c316f95ee8b505e5e7feaaf"
  },
  {
    "url": "vue/index.html",
    "revision": "21c508ce2b7c29d705d483a26a127c89"
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
