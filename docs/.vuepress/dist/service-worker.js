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
    "revision": "34b8b61d51db972c7f657a377f4c277d"
  },
  {
    "url": "archives/index.html",
    "revision": "b12367c5a2ab37bd24b8b1f19a7d31d6"
  },
  {
    "url": "assets/css/0.styles.a204ea2c.css",
    "revision": "4d7beba55589734df94a84f1d6c54079"
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
    "url": "assets/js/10.de479aa4.js",
    "revision": "0fb0c5bdf74f410accd34176c07063d9"
  },
  {
    "url": "assets/js/11.1172cb98.js",
    "revision": "bb44f70face746742c990aa28fe8dd2b"
  },
  {
    "url": "assets/js/12.65f5e2e0.js",
    "revision": "e703874b25a76c48a40e1011c53739e1"
  },
  {
    "url": "assets/js/13.53a944b8.js",
    "revision": "30778511f267361b743e8ffd58c63bf7"
  },
  {
    "url": "assets/js/14.87bb2aec.js",
    "revision": "3348a1ed53638b41a5334a9ee6fa61f6"
  },
  {
    "url": "assets/js/15.f01984af.js",
    "revision": "c223982c65c902831851256715c48098"
  },
  {
    "url": "assets/js/16.a481b407.js",
    "revision": "40e7f2893927b04d9578dda00eaf6aa2"
  },
  {
    "url": "assets/js/17.de848938.js",
    "revision": "7cd8746eb9fdc46f2c717b3d2a756b80"
  },
  {
    "url": "assets/js/18.a05ddb98.js",
    "revision": "0b6fa3ab61abd8441a5a644a3c64c0ca"
  },
  {
    "url": "assets/js/19.98fd1f7a.js",
    "revision": "7e6013b830c026da4d427068d3c57595"
  },
  {
    "url": "assets/js/2.800d3d26.js",
    "revision": "f8c2e64f4834650cd6dea4d1113c051e"
  },
  {
    "url": "assets/js/20.5e9bcb98.js",
    "revision": "85668d85a64ae4e4ff9fa6cf996683ed"
  },
  {
    "url": "assets/js/21.d25846ff.js",
    "revision": "1451e1c5f511cd00318312818d1a9d38"
  },
  {
    "url": "assets/js/22.5d1cf69f.js",
    "revision": "97d66c4ba47d021a8bd2d5b8039b0b50"
  },
  {
    "url": "assets/js/23.d6431bda.js",
    "revision": "701dd137ce8dc481c36373f194e7e251"
  },
  {
    "url": "assets/js/24.22d1c847.js",
    "revision": "ddebb16cac6c016ac05434e6ed4bd3a3"
  },
  {
    "url": "assets/js/25.0d5f16bd.js",
    "revision": "d50988aac61162c5b65c260ada002a72"
  },
  {
    "url": "assets/js/26.c38c5449.js",
    "revision": "066039bfe8ac6a1cab24dff9c0a9a052"
  },
  {
    "url": "assets/js/27.e5780e4e.js",
    "revision": "cd6f3dd9496ab349e3ff658db7bf0b48"
  },
  {
    "url": "assets/js/28.6d28f919.js",
    "revision": "0909e29ae4aaf7b062e482bf2f8d34cd"
  },
  {
    "url": "assets/js/29.f9e449c4.js",
    "revision": "1b4148af4231d9e920b7b64940ccb4c0"
  },
  {
    "url": "assets/js/3.f86bb01e.js",
    "revision": "a9ec2aa4b23333159cc02402f278d62e"
  },
  {
    "url": "assets/js/30.a17141cf.js",
    "revision": "86377c5c4979be47784eb9285aae005d"
  },
  {
    "url": "assets/js/31.9fbca270.js",
    "revision": "4c67bc3e7f724c8ffaa7b5aae56deaf0"
  },
  {
    "url": "assets/js/32.cee1a6e4.js",
    "revision": "9c01b29be7a6d8bd27119ee8101538e8"
  },
  {
    "url": "assets/js/33.a43030a3.js",
    "revision": "4f4286756a0aa7a8af5cf65d7d9fbb59"
  },
  {
    "url": "assets/js/34.7d002a1d.js",
    "revision": "7c2c9ac3c24176d44b663bab1d61bd6e"
  },
  {
    "url": "assets/js/35.7fedca94.js",
    "revision": "9b30054caed1e371427ec7cf0b193b34"
  },
  {
    "url": "assets/js/36.86d343a3.js",
    "revision": "2e77d466f61626da6d8b83403a5084a0"
  },
  {
    "url": "assets/js/37.09338f48.js",
    "revision": "02c62d8e5c102a098a063c3e931df4cd"
  },
  {
    "url": "assets/js/38.4ec1644c.js",
    "revision": "b040c577bf23292d7252b8c8747271ce"
  },
  {
    "url": "assets/js/39.701ef3cd.js",
    "revision": "1676740df9d611e5b518bf408f4b9e27"
  },
  {
    "url": "assets/js/4.2d76b5e3.js",
    "revision": "8fb97f3d357f23eaa576fa64edb30cad"
  },
  {
    "url": "assets/js/40.e8544587.js",
    "revision": "b94b7e1fa3cf40451ab8fe93af46d9fc"
  },
  {
    "url": "assets/js/41.0604f81f.js",
    "revision": "48f71f63ca8c1906ac022ac8134163b4"
  },
  {
    "url": "assets/js/42.c7cbe977.js",
    "revision": "59ce37136da64ea90ecd9c99d01cef95"
  },
  {
    "url": "assets/js/43.32ea33fa.js",
    "revision": "47f8694230e4ddf22809fa7185b4dd16"
  },
  {
    "url": "assets/js/44.14547b60.js",
    "revision": "41abc522e5968058609b2223ed820187"
  },
  {
    "url": "assets/js/45.e6fd66a3.js",
    "revision": "fd7abd6a23c709e6a9895d48db4c7421"
  },
  {
    "url": "assets/js/46.214e45e8.js",
    "revision": "9ae0a4b6c9fb3c5696d9c2b8f9f368da"
  },
  {
    "url": "assets/js/47.d24ba2e5.js",
    "revision": "203a49345d4e42bec21f6eea43b05bd3"
  },
  {
    "url": "assets/js/48.94931c23.js",
    "revision": "ff4e59104b3c2154f2d89ef55a96dbe8"
  },
  {
    "url": "assets/js/49.fb3f7f3c.js",
    "revision": "5d7330ed2c9374da6beb157f7e597730"
  },
  {
    "url": "assets/js/5.00a9b8f6.js",
    "revision": "0cd76bca495e9ea10888597c5faf00b2"
  },
  {
    "url": "assets/js/50.0c01278b.js",
    "revision": "11b8f604248094dd2bd09a190b26021b"
  },
  {
    "url": "assets/js/51.e19a58db.js",
    "revision": "005958c30f6d2be49e84e67f8a099569"
  },
  {
    "url": "assets/js/52.cc6dbd7e.js",
    "revision": "22ef9dda622086752119235c11c77430"
  },
  {
    "url": "assets/js/53.7bb4a429.js",
    "revision": "243739de56f5a88694f6fbf09e78718f"
  },
  {
    "url": "assets/js/54.1e76aaf1.js",
    "revision": "59743c9319f84aec5e83e53e9de87223"
  },
  {
    "url": "assets/js/55.3ac42d78.js",
    "revision": "7dcfdbb4ed3a20f420e9ab2ffb0bc72a"
  },
  {
    "url": "assets/js/56.ecccdd00.js",
    "revision": "2fd9f305500ee07927f7a91bd3342662"
  },
  {
    "url": "assets/js/57.f835a7a6.js",
    "revision": "2e3d66c236df18ca6b08ad4b7a63208c"
  },
  {
    "url": "assets/js/58.40a652b7.js",
    "revision": "96806e21a029bf7c0844b7496aa73110"
  },
  {
    "url": "assets/js/59.1576d91b.js",
    "revision": "297ca26bb6a45d3b412aaf2dce14d2c9"
  },
  {
    "url": "assets/js/6.5ad722d9.js",
    "revision": "54399bf024d9e08e2ab16cebee1d1fee"
  },
  {
    "url": "assets/js/60.ab478e69.js",
    "revision": "00a5e0efe5de5c9c4c819376a45787a9"
  },
  {
    "url": "assets/js/61.83c1dc14.js",
    "revision": "2835d7e0dd1cc86864566f92296ef3ba"
  },
  {
    "url": "assets/js/62.e5d6fbf9.js",
    "revision": "3ec09d29f3eddad4d30c0c5c27164658"
  },
  {
    "url": "assets/js/63.da299ecf.js",
    "revision": "673d847d7d0b379ee0b04ce34dd09922"
  },
  {
    "url": "assets/js/64.442404d4.js",
    "revision": "fba5dbf0ae08dceacd772595723efe8c"
  },
  {
    "url": "assets/js/65.5d6dea46.js",
    "revision": "71d9254c92d056093ad7cb756343868f"
  },
  {
    "url": "assets/js/66.81496978.js",
    "revision": "5ae6881ec01d9a36d8a245f0645277c6"
  },
  {
    "url": "assets/js/67.b9f87a3b.js",
    "revision": "2d53d4993f75f988107ba98f938bdad4"
  },
  {
    "url": "assets/js/7.552286d6.js",
    "revision": "a7309886b188ca5cc82e4d583b82c72c"
  },
  {
    "url": "assets/js/8.648827ef.js",
    "revision": "34bf417b9b1bab1f746606bca7ea318a"
  },
  {
    "url": "assets/js/9.8dc53bc5.js",
    "revision": "efedf3c4697a1eb1b46cfc63ce938120"
  },
  {
    "url": "assets/js/app.5a3e4699.js",
    "revision": "9f4fd8b1db91ed9b925f427312b1aac4"
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
    "revision": "a516d50373d66a59dc2156abcf9fbe2f"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "af12e4018e8cb53c0c4de29b71f7935e"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "c7fe55b52ec0b14f4cdc7080089c5953"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "bcde32674e3a0b0eb911e648ff28b479"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "bb6097551e0b4394cb005add38f43a3b"
  },
  {
    "url": "pages/168760/index.html",
    "revision": "2711703c98baa7b3aed95a9af9a72425"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "e3caa49eb15abfb1e38bf8ed87846b27"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "365beda06b4a2c858272fcbc74ca30e9"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "6bcaa8d28db00ee9fcd8566557b42017"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "1f3e89d3fde6a9ecf56019445c5197be"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "8a4a262a5e73c7e3b4a743dc53ff92fc"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "16f5aa95ee69bee1bf3052d51ceea475"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "423f1f90d207a97e2aada48c5a7ba403"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "44824ede860c43bcaf5b2b3a733c9be6"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "9299822332eb2d0a9968849e1b668864"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "7db9b99dac4af13ff9c0e2f6e759ed82"
  },
  {
    "url": "pages/4e74f5/index.html",
    "revision": "afd2880e3902a113e1818e6e759617e4"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "b004bcbb866f5f4927734c486b7dfd47"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "b220914f0320f226b975b7199b85201f"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "47c5b3ff392f180c5c4a1c13638f8e48"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "144fc563f613d0b4280bb1de7676d912"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "935272071ee8f87a874177b401440dca"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "f8f80d026aa790bfdde0d629755a3d5a"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "297a7cf5bcccca8c9d0b7a03709d5fdd"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "eb499b9dc02a6d6097ec6ae431e92f8d"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "456722039da353f5c3c69fc14f757de4"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "9a17954ff34183148d96285d1a1e42b1"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "4b598e911e26c66f8d6232b570755609"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "5258a100a3636e1aaa653bb92c7205ab"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "2dee638e72bbb1b562a025fa1cb53234"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "e755e919fd987538783e3223e6b9a254"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "721cd45a71dea7298379d715b09d3ddf"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "9da39757ce145df8e87b1d374fa5a604"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "8c33c7fad4b86841ad2c03f7be532541"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "eef00dc25d0ab43874618d096d17be7a"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "c4b47db3ae5bf1bfdbdc9e7dc27fc3e3"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "0277f23a71bb15d530e02dadcb501384"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "fadd78ba793cdd3821ab11adeca26072"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "4f20be303ace78310b83cc885ae50e7b"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "8da9e4ae9adcea5403deda710a8c124e"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "6cfa96bcc4fc900601bfdcd2146e63e2"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "4c345b44c7a97be2084cf324c7e700a3"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "c22d15c0b58418970a3e9e3dd664c404"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "7597596bd918f1bdeea96d22f4f9c7fa"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "583983c17602aef34647889e94ee1f55"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "715bf420aa4ebd5f64340a1f29497fb1"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "1cdf740f4bbbec71dcbf29c7eb68e240"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "400309d0db4eb8f8c59c061d42b81bae"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "a13cc5e8d7fee7b90decdd466d597a58"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "b51ada85e18861dc598ca2d69ccc8359"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "149b44c0516b5fd03111d321a88edbf9"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "9d5307ac74eb9ca25e64aee9e22af522"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "fc74ddfa82dfc5ebb5ca3054b80376f8"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "b3005f5aee8ed06f540e3a1df97c5254"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "2c3c20b386bd936ed802337466c368ad"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "e5d3a724408495ceb4c1975a95526e98"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "b013e9b789ed6fd2134c24f68243f144"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "347ee4ae3073163d2224e3f1d3e28b98"
  },
  {
    "url": "pages/fb5fc5/index.html",
    "revision": "bebfd44f54fc0425f39d10cf62599247"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "tags/index.html",
    "revision": "f6fc0901452ca18cea13e3e1a69d642f"
  },
  {
    "url": "zai.ban.qian.yan.html",
    "revision": "8dbbc1a62ba607fda2e10685a05ae87a"
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
