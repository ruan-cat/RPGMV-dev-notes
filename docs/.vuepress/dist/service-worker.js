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
    "revision": "f50738eafbd97c9cbe2012f2d545f453"
  },
  {
    "url": "assets/css/0.styles.ead3373e.css",
    "revision": "291e2daeb4752faa0dbed280003e612d"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.da02fcd7.js",
    "revision": "1e0fe6268e003dc8d892b4280aeb5c25"
  },
  {
    "url": "assets/js/11.1910cc50.js",
    "revision": "3b6af741d2d6cae4d9cee90a8cfe5aca"
  },
  {
    "url": "assets/js/12.3740df9b.js",
    "revision": "a0d08c922366c2e24bf0e90f9c46852e"
  },
  {
    "url": "assets/js/13.f774808c.js",
    "revision": "8446bea005da85d0d58a244591eb2e0f"
  },
  {
    "url": "assets/js/14.2e043693.js",
    "revision": "ef2f5d6ef1f56c9debe73ba22ef74c14"
  },
  {
    "url": "assets/js/15.2bd07f74.js",
    "revision": "6b0a3993bb9842423ea6958dae6154db"
  },
  {
    "url": "assets/js/16.427957fc.js",
    "revision": "50a50c7f8fa272b1ce41fe74bb990e24"
  },
  {
    "url": "assets/js/17.e5081566.js",
    "revision": "b1347c3936fa9df8239e56060b2bbcfd"
  },
  {
    "url": "assets/js/18.360aa1f0.js",
    "revision": "aa6acd9103ae92fb6c7c84531d42fc28"
  },
  {
    "url": "assets/js/19.e6b9b53f.js",
    "revision": "c6367520715c1eeba17f6377a409746b"
  },
  {
    "url": "assets/js/2.bee23e09.js",
    "revision": "84cbb09e1ae4a70258ab7f7ea562065a"
  },
  {
    "url": "assets/js/20.d6321c8c.js",
    "revision": "20f9fbc11c39c2cc0d98310480dae04f"
  },
  {
    "url": "assets/js/21.31510497.js",
    "revision": "ab17efd0bd6fd64fb35ea7eb0a1160dc"
  },
  {
    "url": "assets/js/22.0ac093d8.js",
    "revision": "7f5318427770ced8cae5216803a70605"
  },
  {
    "url": "assets/js/23.5617190d.js",
    "revision": "653d3f60303532e02c9324d85f9f456c"
  },
  {
    "url": "assets/js/24.2907c1d1.js",
    "revision": "18eea0e1fcb1a91f41ff5fe6a21694e2"
  },
  {
    "url": "assets/js/25.29be27af.js",
    "revision": "0936ea15a7ada69d4b9765f469c7a6e4"
  },
  {
    "url": "assets/js/26.3868d28c.js",
    "revision": "99c3b6cdd31764cdf1c75913b5786b0e"
  },
  {
    "url": "assets/js/27.8e5423af.js",
    "revision": "b16171a9d489bb95dc933225e9b27d19"
  },
  {
    "url": "assets/js/28.409421d0.js",
    "revision": "3f743b1f641daa42216f448e992b50b5"
  },
  {
    "url": "assets/js/29.94d5eea4.js",
    "revision": "8368f8b3b0e2a6f90404fe334e33616a"
  },
  {
    "url": "assets/js/3.da22ed1f.js",
    "revision": "8076ad74c97bc2e69481749cfa9b7762"
  },
  {
    "url": "assets/js/30.6dc54edd.js",
    "revision": "ff6ca0e498f4e1a7aa964befabeb80e4"
  },
  {
    "url": "assets/js/31.f931dd3c.js",
    "revision": "e9512b6daf36f2a7037313c7d0c4935d"
  },
  {
    "url": "assets/js/32.9fde74c4.js",
    "revision": "71e0f91b928e58f23cb509939dc45f06"
  },
  {
    "url": "assets/js/33.7c4f8619.js",
    "revision": "de8be558ab3dc1945a76e9b7675b2d9a"
  },
  {
    "url": "assets/js/34.c19ad3ac.js",
    "revision": "a0d58c5f768bb0deb863d32f5a5e4033"
  },
  {
    "url": "assets/js/35.3f13c7e1.js",
    "revision": "642383687e74f0bf7942f1c03b6e5b18"
  },
  {
    "url": "assets/js/36.3d3dffb9.js",
    "revision": "5c83bafaea7f19f161e8d9e742707cb2"
  },
  {
    "url": "assets/js/37.12ba04fc.js",
    "revision": "77f4b7546dc53edbb2582ba008ffe5a7"
  },
  {
    "url": "assets/js/38.1ff17c8d.js",
    "revision": "4402e097c2e9902ace351a8c70c153dd"
  },
  {
    "url": "assets/js/39.144446da.js",
    "revision": "8f18a7b14bf9826e7b8d9cca1e4bbd35"
  },
  {
    "url": "assets/js/4.19fd35e1.js",
    "revision": "2e12bd2f2536507a324b8a7745af7854"
  },
  {
    "url": "assets/js/40.5183f9fd.js",
    "revision": "b96c8e817fc63d79222feaa37dfb59c8"
  },
  {
    "url": "assets/js/41.f7c13a6f.js",
    "revision": "718511d9c8b8fce0cb984c472a808ea5"
  },
  {
    "url": "assets/js/42.73cd93d8.js",
    "revision": "1200415c417a0cc67620cca5806951f0"
  },
  {
    "url": "assets/js/43.1578ee52.js",
    "revision": "0ae8acc1856716faf69bde3b28f2025f"
  },
  {
    "url": "assets/js/44.07490bd7.js",
    "revision": "dcca88fc9ae2c6bf9f9e1338e2133b23"
  },
  {
    "url": "assets/js/45.2a94930e.js",
    "revision": "2390ce8985d3d8db13292e0eebad41fc"
  },
  {
    "url": "assets/js/46.06a417bc.js",
    "revision": "3bc184f5fd70d8aa55808fdb0c6e6c0f"
  },
  {
    "url": "assets/js/47.3db34757.js",
    "revision": "fb6b01a01670e7480fbbfdfa99b100c8"
  },
  {
    "url": "assets/js/48.c0e00e3d.js",
    "revision": "074df31344ef1aa6dc130f2f57133e93"
  },
  {
    "url": "assets/js/49.057f047e.js",
    "revision": "ff58f624c597d3bbdf70c52860917ac3"
  },
  {
    "url": "assets/js/5.bf9691c3.js",
    "revision": "dd06b5007ac3150b697b23446f05f9d8"
  },
  {
    "url": "assets/js/50.d5d86a2a.js",
    "revision": "f48c9b0cb17f504b19874e45eb699f36"
  },
  {
    "url": "assets/js/51.361319ff.js",
    "revision": "ee8f7b75da12883141e43a8657202aea"
  },
  {
    "url": "assets/js/52.0ef763f5.js",
    "revision": "8c31c7308374c224a22a7096e42cd3df"
  },
  {
    "url": "assets/js/53.b761706e.js",
    "revision": "db938f4a5e21b11f4e7b24359b1bda01"
  },
  {
    "url": "assets/js/54.e9a5a6d4.js",
    "revision": "d4587a2a3d9cba3d5ef4e339f0957d0c"
  },
  {
    "url": "assets/js/55.0fe6d092.js",
    "revision": "fb58815462f8da943b98ac96b7b93a82"
  },
  {
    "url": "assets/js/56.af2e7efb.js",
    "revision": "fa6f5a0a79c424805c8b0d3f90bdceab"
  },
  {
    "url": "assets/js/57.dcc26de0.js",
    "revision": "661f5a7de4115201cef11ef8b0c362d6"
  },
  {
    "url": "assets/js/58.2d00e88a.js",
    "revision": "b8ac67f59e5c8e4c29d88898e0b456ee"
  },
  {
    "url": "assets/js/59.7634fb00.js",
    "revision": "249061fca5607f3b6db177eea4ddab8a"
  },
  {
    "url": "assets/js/6.0d087194.js",
    "revision": "5b95a59269b9c7de55b332db8e2aa78f"
  },
  {
    "url": "assets/js/60.d8db7efa.js",
    "revision": "8a6ba54eb2ea145ad662b9b9537fd305"
  },
  {
    "url": "assets/js/61.4a6a15f2.js",
    "revision": "f7f6ecc6902ef08e0e654365f5f1fa9a"
  },
  {
    "url": "assets/js/62.ab4c6752.js",
    "revision": "26483f72a03809a63cd07b1ea74b8760"
  },
  {
    "url": "assets/js/63.d1e03647.js",
    "revision": "3dd4fe760d15e499320e0216ef11a0a5"
  },
  {
    "url": "assets/js/64.574ef438.js",
    "revision": "c80da14ab9c82d0b58cab7dff099e2b0"
  },
  {
    "url": "assets/js/65.74311365.js",
    "revision": "1c638eb3e03538647b2ea775840bfbae"
  },
  {
    "url": "assets/js/66.395a9ea1.js",
    "revision": "93f499832f06688a83664e3144ed270c"
  },
  {
    "url": "assets/js/67.6a820dd4.js",
    "revision": "fa5869283dc70bb1219f2252deb40284"
  },
  {
    "url": "assets/js/68.3fef58fe.js",
    "revision": "5b9f550ca281de56997a835dc46ca0fa"
  },
  {
    "url": "assets/js/69.765536fd.js",
    "revision": "3b32cdf1ef7537ecd5b24553a867f899"
  },
  {
    "url": "assets/js/7.47b050a0.js",
    "revision": "8f7ee6e4e5b3f8b0156a4ff23a3cebd5"
  },
  {
    "url": "assets/js/70.5d9902cf.js",
    "revision": "1288a8a74bb26822a43ceb9c3552458b"
  },
  {
    "url": "assets/js/71.ebca18e2.js",
    "revision": "697f3560c9e5e2a8a8db1afb62b662ee"
  },
  {
    "url": "assets/js/72.aeb36242.js",
    "revision": "0da06104317261b842ee661673e5f9da"
  },
  {
    "url": "assets/js/73.8884a944.js",
    "revision": "0bdea9029d2e45b74ae65062b32f9074"
  },
  {
    "url": "assets/js/74.7c51a82b.js",
    "revision": "770970b631aff79dd31e9adb42a3f1cb"
  },
  {
    "url": "assets/js/8.20b82437.js",
    "revision": "f692f2af3a1bd3ddc9c4fa910fe801a0"
  },
  {
    "url": "assets/js/9.3d90c90b.js",
    "revision": "e6cff7b7b4f896bdcafac659e1734b02"
  },
  {
    "url": "assets/js/app.3838c777.js",
    "revision": "68349a704b938fec17b65faec47ba533"
  },
  {
    "url": "bgm-cover-img/A.LOVE.jpg",
    "revision": "34f94c9ae33f65275ce8450b35de9abb"
  },
  {
    "url": "bgm-cover-img/Breather (Remix).jpg",
    "revision": "64ac306484af53594b97ba03f86f23d8"
  },
  {
    "url": "index.html",
    "revision": "aaa75e17a4a88270356a29e93fcbf943"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/07e629/index.html",
    "revision": "ffd457f459e265c961ac8fbd367b3b15"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "7e78da5cdd5a9591b79decf1f9742bfa"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "5892177d1afa1b9475fcf5930fd9ff6b"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "a0a8547276d2a7e790cfebe878d0e639"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "38b9603848b45ef9441f5f6574d5d335"
  },
  {
    "url": "pages/168760/index.html",
    "revision": "a2f694dbebb30ea8c2bee4b8102bd04e"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "2254a392d66dfa0dbff6a7254e5006d5"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "b0290a53729b35e2f1ac9d5941af3740"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "1cabbc1dc5c3a1d2ce928b8ae821c69a"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "c5d5c2f4a36866bbfa3390415f5346c6"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "f45e4696bd88fffc95cea256eed6f875"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "c19cbb78d4ac807fdffff54622c838b2"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "b20f705652462b82d76bfb6a215340c9"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "463b75551363a73ef6b62c3d10076bbf"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "9d5918243fccd266b1de64f3ce5df38c"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "0484780d1a6844a61b2016f46f89222d"
  },
  {
    "url": "pages/4e74f5/index.html",
    "revision": "3988078193fe06a2dd127b3bf322c717"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "2dd2c39bea8aec6cc4a858f1dc2eb456"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "fb35ad1ec332eb5780b7c33ac12c1d72"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "68b6cecfbcf3b8bcc7dd62738b6a7208"
  },
  {
    "url": "pages/6be093/index.html",
    "revision": "f3c389650a33083a882ae86d492f9090"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "6b977a8f2b7f489a0590b10029f1f6c6"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "b73ab3f2b27bf515e3336f449b6cf538"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "f38972def31aafebd50c1ef2785d6482"
  },
  {
    "url": "pages/7b95b9/index.html",
    "revision": "690cb506127f8d5341e788c89b5a9211"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "e4e71fa6448b75ff2ac1bb9bb83d82cf"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "0b9ce5a5b6a0fbe6438c7d541afc07c6"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "62e9345a4ab48ae735b86de05aa740e2"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "d38feebe05d8611dcc29c6e9e230a237"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "d1e9b61e98fb565fde760b5c7c63fbd3"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "f2726a8a2f0c43dda2da98a5bd2505d7"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "d358f00fdaf8aa72899266e9e855bf99"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "76d6d195d2c2cc836a0d8dd29d19fc1a"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "8deac0697082f64f36394bf9c9fbd7f0"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "b92e3ef70d31bf4de20d27a863f92f46"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "d487971bd55791966ac9c53e436eee53"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "fbee14511981668ea57a8d5f4048a992"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "bc1bdfaa31e0b57c430c6a9fe421bd6a"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "db255f7e3572f9e6a1d275e0c98ed61e"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "971f35a37c9c053c343a299e37c1eb23"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "4542769c2e81506b1e20951e994c7375"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "bacd17668331ec8aeb23b26e1153d311"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "9242cd299a6e069043b6e0c58f061dde"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "ce051c37a6ddbfa4bbd9cab559cc5d4e"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "2718668fae171030e05408a3a1d6c93d"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "e95ca3db939d57a3ff3c5c08a3e88378"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "47135125149f6c2e2aba691fabe785ab"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "c0b074042bc2dd1d4365e3790f0b18e1"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "c62f92e7018aabd88dedc6eca401b7ff"
  },
  {
    "url": "pages/da3888/index.html",
    "revision": "351c8047c0e979e1e911bf6e6933596e"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "40381c95047592c798a4075a686dd2a6"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "2048d4fd2e8a53dff18aa31968925120"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "37b080e6811f65d4965115bac201ee2a"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "334263d6666d38330dd7a3c8d8917de0"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "c4449bd3f62508fd01590e6450103253"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "bd8f00afc83f963322a92c9962e341f4"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "ee13523bceb510d1b509826a8272a82b"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "f29e78ca8ef0e56187e701bd7a9eda74"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "27fdaed8b9eb4345e69a3e19e3d72278"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "90e328fe8b396ce247576f76f457ccc3"
  },
  {
    "url": "pages/f65105/index.html",
    "revision": "2497ce226cc3f169a9d9f8fb36db0a96"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "3d233f7d16de016a61785fb0453a0199"
  },
  {
    "url": "pages/fb5fc5/index.html",
    "revision": "9be97b7385d4d68bba601fd468af4059"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "zai.ban.qian.yan.html",
    "revision": "317e1ed88aecc0eedfca899a22669cc7"
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
