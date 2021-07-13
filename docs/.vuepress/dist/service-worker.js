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
<<<<<<< HEAD
    "revision": "e9f24c0351ebae92dc674a9f34e2fe50"
=======
    "revision": "0181c79451cb16b206d5abcf7dafe07d"
>>>>>>> 92d077e87a27ba81a2f1f3cda40c26c26cd566f2
  },
  {
    "url": "assets/css/0.styles.48a0ee12.css",
    "revision": "f3a3fd8f2ebb84df63370c2ad15eb19a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
<<<<<<< HEAD
    "url": "assets/js/10.6fb1e9df.js",
    "revision": "4700ee8b7d6f592cb21bf84789765660"
  },
  {
    "url": "assets/js/11.4f82c57a.js",
    "revision": "4dcf02bde3c2e6ae7803bd4c728b2862"
  },
  {
    "url": "assets/js/12.85a800b4.js",
    "revision": "41fc0a95825785e7cdd61d6becb19e40"
  },
  {
    "url": "assets/js/13.c73c65f5.js",
    "revision": "27d9e37877adaeb6e109b61a2aab4169"
  },
  {
    "url": "assets/js/14.d954f08a.js",
    "revision": "c153a53558c71001412eaf11400d4bb8"
  },
  {
    "url": "assets/js/15.7a5f46c9.js",
    "revision": "edd9ea5f035918205c7ff0e7ae425b3e"
  },
  {
    "url": "assets/js/16.6ec2c753.js",
    "revision": "902a3ef9ccdbc33a2ccb52c13882977d"
  },
  {
    "url": "assets/js/17.785655dd.js",
    "revision": "681f4b27a202e0823c630f599c1d5742"
  },
  {
    "url": "assets/js/18.38fee7f9.js",
    "revision": "e1f7f9d0706e668ac5325e09f240dde5"
  },
  {
    "url": "assets/js/19.fd1c729c.js",
    "revision": "407ff068440245a469858b93bc3be95f"
  },
  {
    "url": "assets/js/2.7ff060a7.js",
    "revision": "5d4ec0e55314c019aceaf201c7ed554a"
  },
  {
    "url": "assets/js/20.6cae7a6f.js",
    "revision": "089b7ba604a5b09f5505ab5492cf7624"
  },
  {
    "url": "assets/js/21.d5044944.js",
    "revision": "32084ace1349964e3eada99a1423b2cc"
  },
  {
    "url": "assets/js/22.53341b5e.js",
    "revision": "512a8c2e9933445ef758bd328267728e"
  },
  {
    "url": "assets/js/23.96511ca7.js",
    "revision": "fee63a032eb3c631cb9f03e5a0fcf91a"
  },
  {
    "url": "assets/js/24.84ae37d4.js",
    "revision": "e58ceb3499fbe93e59f21a06b490bdb8"
  },
  {
    "url": "assets/js/25.d2a97620.js",
    "revision": "4268530b160fac6d562fe366a15dcabe"
  },
  {
    "url": "assets/js/3.cfc78647.js",
    "revision": "cda08b6a019f9ba2591bb5c3dece6d64"
  },
  {
    "url": "assets/js/4.5e6b533e.js",
    "revision": "1613f0046e994dd6c31222065eafcdcc"
  },
  {
    "url": "assets/js/5.32ba6d7f.js",
    "revision": "a9b327c86f234a4c201c026b1a5950e9"
  },
  {
    "url": "assets/js/6.938e7faa.js",
    "revision": "b8f8cdb39ea96a1c6f97d520da9f6a90"
  },
  {
    "url": "assets/js/7.54f8900d.js",
    "revision": "218b0b6d3f9206556c7cbfdb5c84c33c"
  },
  {
    "url": "assets/js/8.970c1b62.js",
    "revision": "bb0aa27d3a1903f4747b8440c683404d"
  },
  {
    "url": "assets/js/9.b06881ed.js",
    "revision": "b6501ac824578dd06880745f522d856a"
  },
  {
    "url": "assets/js/app.946e346f.js",
    "revision": "f49a445c863ed5e1517dcb0b5201e406"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "0f4182360252bb6839e3fe99bfc74128"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "286a0169d7dc7c874c3f32a5dc45ff31"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "62df57fb74960ff795a05071ac2317df"
  },
  {
    "url": "git/index.html",
    "revision": "963a395655d314dae7e2373e460a566c"
  },
  {
    "url": "index.html",
    "revision": "7a0217238ee2ba3b6d1bd8910f487998"
  },
  {
    "url": "interview/base/index.html",
    "revision": "ca9bc479d45f255c4630e6d95675c1f8"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "04e8dc43911b30ac1246320e5c14a712"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "9873b850a134cf075525f7c02c91e014"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "6b1b8b78446c28667cdf185c36b6b404"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "aa67fdd17cde7a31b2f94cb0c4a50f6f"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "5ac6bff5dc829ad899d668232419e776"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "7c9612df9e4a3c828897d2cc8c237446"
=======
    "url": "assets/js/10.4037525d.js",
    "revision": "00aace04eebcbefe6e04e3b068038872"
  },
  {
    "url": "assets/js/11.bb7397d6.js",
    "revision": "c236fea28260ba77b42678fb740a608c"
  },
  {
    "url": "assets/js/12.c34c6238.js",
    "revision": "3f45801eca25fe5f0fda9200e8685213"
  },
  {
    "url": "assets/js/13.34d9b51c.js",
    "revision": "05dae0d5019063bf3c7f3c179f516b51"
  },
  {
    "url": "assets/js/14.a04a8ea7.js",
    "revision": "617290b3c822eb32815b5496f42954d0"
  },
  {
    "url": "assets/js/15.e336f621.js",
    "revision": "e7db57ab18c3c0da14e94075ca85ba84"
  },
  {
    "url": "assets/js/16.bbad6876.js",
    "revision": "d95ef1c3cf8ccecdb26defa06dcf954e"
  },
  {
    "url": "assets/js/17.6e0c4a25.js",
    "revision": "d0deb834020a735f08a062ef45ac8356"
  },
  {
    "url": "assets/js/18.776224ec.js",
    "revision": "eb576f183dd757969fc60cd80646a15a"
  },
  {
    "url": "assets/js/19.a905c1a4.js",
    "revision": "7dcc5067d5d2f7bb56cc692db4eda24d"
  },
  {
    "url": "assets/js/2.60d6148c.js",
    "revision": "6f567fa2a91ef01befd607c6aa382644"
  },
  {
    "url": "assets/js/20.feff8a2d.js",
    "revision": "5372f44c9beb565ba01a46c2b4fa0fd5"
  },
  {
    "url": "assets/js/21.60a0d7fb.js",
    "revision": "4d695c00a27423128a7f53f4f4a02e0b"
  },
  {
    "url": "assets/js/22.7a0bf4d2.js",
    "revision": "f95d1fba0403f76c8651818063c26792"
  },
  {
    "url": "assets/js/23.6ef3f665.js",
    "revision": "374a9c6601a16f66db4feebc51053e0c"
  },
  {
    "url": "assets/js/24.91685f2f.js",
    "revision": "ee12777eac990ad68a8cb39dcd49a755"
  },
  {
    "url": "assets/js/25.6bf410b1.js",
    "revision": "997b536b5965e6914aa76963c6a76073"
  },
  {
    "url": "assets/js/26.d5c3d8f4.js",
    "revision": "b0659f0c60250e71e0df3f6e5ac8c5b4"
  },
  {
    "url": "assets/js/3.b2029ee2.js",
    "revision": "52830519f55751a5ce3aebecc3c66507"
  },
  {
    "url": "assets/js/4.0e87130d.js",
    "revision": "d3aad69763c851de7378eeb6a7d85e6d"
  },
  {
    "url": "assets/js/5.427b5562.js",
    "revision": "f335c4e673f4b73cdd915acb35f344e2"
  },
  {
    "url": "assets/js/6.026ec6bc.js",
    "revision": "77793bea1133203d79f5e46c256edcca"
  },
  {
    "url": "assets/js/7.f5013773.js",
    "revision": "20a57dd8355427406b8af989c2223525"
  },
  {
    "url": "assets/js/8.bebb982f.js",
    "revision": "3cd3584e29d6c05545f2b9483f0a3f5f"
  },
  {
    "url": "assets/js/9.5ca446bc.js",
    "revision": "a6f2aca38d63761eafadecdebc3b6525"
  },
  {
    "url": "assets/js/app.ff01a3f2.js",
    "revision": "fcd4c961d7c3fb8332fe1ee7595bd0c5"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "d0c91fe918476b1c6a3166ab9f1b76a0"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "da626cc7ce78137f1a9d68c116888d3f"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "21fd1ed4746ee936d27351ed38ffada5"
  },
  {
    "url": "git/index.html",
    "revision": "3ca2922343be5f7dfa081f38205b5739"
  },
  {
    "url": "index.html",
    "revision": "4241099b2a7f6da902cca84a1d11c48a"
  },
  {
    "url": "interview/base/index.html",
    "revision": "d6916e52645481c9f8150bf68ff6dbed"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "c802ad692df4ede4eed14e856026df64"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "3302e70fbf2df0ece467e79da63ed862"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "0a8aeb96f4b911fa0473fa24b83ad046"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "b729abba6079409054b38b6529e8ce4a"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "ce10b4f5881b1dcbfee401e512a3b3de"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "bbcedc2bd4c068c3f149dd83be0fc9a7"
>>>>>>> 92d077e87a27ba81a2f1f3cda40c26c26cd566f2
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
<<<<<<< HEAD
    "revision": "a5b340093d72a7549e65832a54be8572"
  },
  {
    "url": "style/css/index.html",
    "revision": "92e04d822f71eb84929d3f38db5a7ed4"
  },
  {
    "url": "visual/three/index.html",
    "revision": "4cebc4bce9541680f3d1f5629fb73b77"
  },
  {
    "url": "vue/index.html",
    "revision": "19017a7d545e94381ca34faa361c816c"
=======
    "revision": "0f2000d4bd13fe0c950a088fce823c81"
  },
  {
    "url": "style/css/index.html",
    "revision": "de205c12c864807fdf4be05e2871c3a5"
  },
  {
    "url": "visual/three/index.html",
    "revision": "33afd222590b246e2bf87419acaa9ffa"
  },
  {
    "url": "vue/index.html",
    "revision": "e208f82d33cf1a59a5a8abd637ba5a7f"
>>>>>>> 92d077e87a27ba81a2f1f3cda40c26c26cd566f2
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
