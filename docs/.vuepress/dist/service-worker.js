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
    "revision": "833571f538b552407e0f2ed932cb7d3e"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.970e44db.js",
    "revision": "4db2fbefd1bd6780f05c2eff0517bc20"
  },
  {
    "url": "assets/js/11.4f54ef2a.js",
    "revision": "35c448a26c199ba9527b046bd8b39e36"
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
    "url": "assets/js/14.a2ad5ab1.js",
    "revision": "52cf4776d075735ab3284c6a20f6a932"
  },
  {
    "url": "assets/js/15.46d0a816.js",
    "revision": "da6fa9db80d7b940098e03527ae474bc"
  },
  {
    "url": "assets/js/16.e925c650.js",
    "revision": "0de06cd072f13b131afc4b6a4d8f3e8d"
  },
  {
    "url": "assets/js/17.f684918c.js",
    "revision": "27509acddcfcb6e72fbddb0aec4f4eb1"
  },
  {
    "url": "assets/js/18.0d26ea94.js",
    "revision": "b77195c406e4c8d22ea292c250e37dc3"
  },
  {
    "url": "assets/js/19.a39ff362.js",
    "revision": "a40d36207b0fd0b7102bffd47b8389c3"
  },
  {
    "url": "assets/js/2.cf817172.js",
    "revision": "6c0616049c1d96f5858b1e67b2b01e5e"
  },
  {
    "url": "assets/js/20.def9cd9d.js",
    "revision": "67ec20092b88f6552084be2b57f005ba"
  },
  {
    "url": "assets/js/21.b437f88f.js",
    "revision": "619e7a019ea05a96da969bc1ced4b77d"
  },
  {
    "url": "assets/js/22.4c2743d4.js",
    "revision": "b618a38fac0527b8df59d7ca3db7c333"
  },
  {
    "url": "assets/js/23.fffdd24b.js",
    "revision": "c9fb5e15597b784be441d896193acde0"
  },
  {
    "url": "assets/js/24.59948fc0.js",
    "revision": "9d376593078adeb5f78206cab1e21826"
  },
  {
    "url": "assets/js/25.aec86b3c.js",
    "revision": "6a5d79ed9a3fc4b961086b7d461db16f"
  },
  {
    "url": "assets/js/26.344d3ee7.js",
    "revision": "6145b463bf3c6654a7a448e11d1a7ef9"
  },
  {
    "url": "assets/js/27.473dfca0.js",
    "revision": "903b129fd85ca35e4f77cfe44debce8b"
  },
  {
    "url": "assets/js/28.7e3db580.js",
    "revision": "04560a28e9445561465b6ca6d9b35bcd"
  },
  {
    "url": "assets/js/29.af29644a.js",
    "revision": "c2bc0e13f98e0adc98f967ee8ad0e7e7"
  },
  {
    "url": "assets/js/3.ff5a8816.js",
    "revision": "f4d11a63561deddafe0f94903a400730"
  },
  {
    "url": "assets/js/30.e1d46c37.js",
    "revision": "6292e414a475b74714678d29d5137380"
  },
  {
    "url": "assets/js/31.cba40a3f.js",
    "revision": "42cdf22fa4199f92a0ee4c25c737dc5a"
  },
  {
    "url": "assets/js/32.56964700.js",
    "revision": "b3b571bfa0fe9dfd2b116e35454f2b33"
  },
  {
    "url": "assets/js/33.48db145c.js",
    "revision": "598a18e019867115810f22b7b285fe2e"
  },
  {
    "url": "assets/js/34.2eb884f0.js",
    "revision": "03aa653fc6d2b019f5e824f79e7b78fc"
  },
  {
    "url": "assets/js/35.e06e92ff.js",
    "revision": "c359c9ebfeb22ce0304161521d4d1de4"
  },
  {
    "url": "assets/js/36.611ce9c5.js",
    "revision": "e686b07acf0c9373ec8ece01e2d7397d"
  },
  {
    "url": "assets/js/37.5c7de63c.js",
    "revision": "03eb73c7f6212a3e845ed4b35e9f0fd3"
  },
  {
    "url": "assets/js/38.8a85e056.js",
    "revision": "00d8d4ea1211d65ceb4c023502febf04"
  },
  {
    "url": "assets/js/39.5560f218.js",
    "revision": "6122e11a805d73c7fe20a2df1aee39fd"
  },
  {
    "url": "assets/js/4.fda27e92.js",
    "revision": "9635542d0f3071d6b2d81e1146d7d472"
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
    "url": "assets/js/42.f3a6d508.js",
    "revision": "a5078f65d741bf0d09486e9f3d3bc314"
  },
  {
    "url": "assets/js/43.58f42f3e.js",
    "revision": "5a901a0d2b0875893b7e5f8d2cd283ae"
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
    "url": "assets/js/46.a16921b6.js",
    "revision": "b89807040e6428b7b9c0211d666aef5f"
  },
  {
    "url": "assets/js/47.21e9c504.js",
    "revision": "c1ba4b5a167120cbb54939650f5455f8"
  },
  {
    "url": "assets/js/48.b12891b0.js",
    "revision": "2244eb0ff714a67e19f37f31b01c7189"
  },
  {
    "url": "assets/js/49.5a620f8d.js",
    "revision": "fa648f5270c3e6bae007c69116cc4eee"
  },
  {
    "url": "assets/js/5.8e309107.js",
    "revision": "a006958cf36edd83f260eaef12c0ea30"
  },
  {
    "url": "assets/js/50.8aecbd5d.js",
    "revision": "0343a6b431ca87e88aafc200a68167f6"
  },
  {
    "url": "assets/js/6.2617914a.js",
    "revision": "d8c6c13a7506b5ce9fa973d0569cc6dc"
  },
  {
    "url": "assets/js/7.2e973c79.js",
    "revision": "ee6ca0aa9256a2de22e292d5ed256db5"
  },
  {
    "url": "assets/js/8.f748d2ed.js",
    "revision": "b3043b93f6b7118a66846323eb6d6f4e"
  },
  {
    "url": "assets/js/9.46e34861.js",
    "revision": "60928828687d15698da0538e637684f8"
  },
  {
    "url": "assets/js/app.3be63134.js",
    "revision": "cd34b23e526f20e8d0513f6f204ed426"
  },
  {
    "url": "framework/cli/index.html",
    "revision": "141bc3b6460f9d67f965c9a1b5693b98"
  },
  {
    "url": "framework/cli/vue.html",
    "revision": "b291b642474a6857c81673b82447b263"
  },
  {
    "url": "framework/introduction/index.html",
    "revision": "34d6a3b2c81a43d43940b6037f25640c"
  },
  {
    "url": "git/index.html",
    "revision": "bf84ebbe4b30b4c469e7d582d78ec75d"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "7796866ef0eebbc18d1721af82a57d0e"
  },
  {
    "url": "interview/base/closure.html",
    "revision": "9926cbcee869fc0f9388e1a3d38d3705"
  },
  {
    "url": "interview/base/data_type.html",
    "revision": "b9c14804bd254e12d5bd14dbf02e58cd"
  },
  {
    "url": "interview/base/index.html",
    "revision": "ada87d7fec959e200c378893f23d7c3f"
  },
  {
    "url": "interview/base/is_call_apply_bind.html",
    "revision": "7e8f68351669f25642109c69ce0679e7"
  },
  {
    "url": "interview/base/is_class.html",
    "revision": "c1706ab0d7f36f5c719067bd0175743b"
  },
  {
    "url": "interview/base/is_copy.html",
    "revision": "067dcb4c1deacd3167609da1c4b63966"
  },
  {
    "url": "interview/base/is_curry.html",
    "revision": "5c3cd68624b83417f6fa3bcb9d251416"
  },
  {
    "url": "interview/base/is_debounce.html",
    "revision": "1736c32754ec2a540e090889697e3840"
  },
  {
    "url": "interview/base/is_eventLoop.html",
    "revision": "d7d1d1c4995c337d6a63eb2c9507175d"
  },
  {
    "url": "interview/base/is_new.html",
    "revision": "8bae776665297e2ac86485a88ab42238"
  },
  {
    "url": "interview/base/is_promise.html",
    "revision": "7640ec280f501676a0e2548c0cab7efb"
  },
  {
    "url": "interview/base/is_proxy.html",
    "revision": "9bf8c19fec2b46bdf499efea26d5fb05"
  },
  {
    "url": "interview/base/is_subject.html",
    "revision": "ceab4b5bfb7621cb7791831ff0998d56"
  },
  {
    "url": "interview/base/is_this.html",
    "revision": "885581fe6e83d0c5242694cbeac996ea"
  },
  {
    "url": "interview/base/is_tree.html",
    "revision": "2579fd445c40050696d17ba8504f2d47"
  },
  {
    "url": "interview/base/isEqual.html",
    "revision": "3b55864666736b6bafb43ae39da60793"
  },
  {
    "url": "interview/base/typeof.html",
    "revision": "bd1e9dd6b31e30974548540ab818e7cf"
  },
  {
    "url": "interview/browser/http.html",
    "revision": "009c8d2ec8a2bb1767da9c5b1c411c20"
  },
  {
    "url": "interview/browser/index.html",
    "revision": "e172b40eb8ed5c5743a9ac13288a0627"
  },
  {
    "url": "interview/http/index.html",
    "revision": "0b1f15bcab4ffbf666f9f773b39216d8"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "a6285ad445b93fdc9e7658d399b651d8"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "07a72a88a4cb97ea5467319c4206123f"
  },
  {
    "url": "javascript/know_in/index.html",
    "revision": "b610ed9b6fa5119c319ccadead680782"
  },
  {
    "url": "javascript/know_top/index.html",
    "revision": "bfbb8f934770d75eed0cb756adc0fcf4"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "851ed960e4612164773a947a18c5a9d2"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "87d84ba7d44197e98aaf62bc1fb94ce4"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "7d25eb652cbdad3618d8917b77c773a9"
  },
  {
    "url": "style/css/index.html",
    "revision": "5e7dc2898945d56abba301550ce1e21a"
  },
  {
    "url": "visual/three/index.html",
    "revision": "df322381a69a403714298de8211fcad0"
  },
  {
    "url": "vue/index.html",
    "revision": "366752489849f70dfc700a637a4057dc"
  },
  {
    "url": "webpack/webpack_next/config.html",
    "revision": "fda487e459784beea963423d59b3233f"
  },
  {
    "url": "webpack/webpack_next/index.html",
    "revision": "b6678b94601e6a98856ff0a4671eb9eb"
  },
  {
    "url": "webpack/webpack_next/init_webpack.html",
    "revision": "bae6e816402dc8243889340579af5c24"
  },
  {
    "url": "webpack/webpack_next/loader.html",
    "revision": "99065722742a370d6452630bcfda5667"
  },
  {
    "url": "webpack/webpack_next/plugin.html",
    "revision": "382522999a12c19f93da93f90b5fe90b"
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
