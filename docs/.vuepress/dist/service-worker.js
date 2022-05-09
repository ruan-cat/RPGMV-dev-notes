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
    "revision": "6eafefe7b9e279a5d98a4a102a254322"
  },
  {
    "url": "archives/index.html",
    "revision": "3d552f90014fb9723d41914763b3b80a"
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
    "url": "assets/js/11.8936ff9c.js",
    "revision": "6a8b02a3daf6fa54d52a06340236c260"
  },
  {
    "url": "assets/js/12.c2d8d879.js",
    "revision": "7298e314b1a547eaa747d453409f6403"
  },
  {
    "url": "assets/js/13.674b79f3.js",
    "revision": "6c53596ae6b7b29b2039e4d986098ebd"
  },
  {
    "url": "assets/js/14.93c33ba7.js",
    "revision": "c53db87b8dcb2d0c86adeac0d0ed9bd8"
  },
  {
    "url": "assets/js/15.318a5862.js",
    "revision": "dcc1a497ad073fb72acdabba369fb55c"
  },
  {
    "url": "assets/js/16.0a046650.js",
    "revision": "62fa2c4742e9455cfa24b8fd0b7f1ff3"
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
    "url": "assets/js/24.6023ab23.js",
    "revision": "7985c514e5fe53cc356c6021eb2e369a"
  },
  {
    "url": "assets/js/25.f32c958d.js",
    "revision": "90bf5a94cb0de1045e3bce11ce841df0"
  },
  {
    "url": "assets/js/26.2c5744ef.js",
    "revision": "3f5afaa7b971c714dcee342b8dbfbda4"
  },
  {
    "url": "assets/js/27.06d3f77c.js",
    "revision": "d6157fac5570d189d487ca6582b5b2e3"
  },
  {
    "url": "assets/js/28.de33b986.js",
    "revision": "77e3cfc0d7945eed1be232542f34d77a"
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
    "url": "assets/js/30.e2e4a840.js",
    "revision": "9bfa95761ca9ead2979aa36a8a993899"
  },
  {
    "url": "assets/js/31.47f19f53.js",
    "revision": "4ca13d378c47ecb4ceb7fcd4b2d20f43"
  },
  {
    "url": "assets/js/32.5173bb64.js",
    "revision": "156c3c02be52530b259ccae3cb43dbd3"
  },
  {
    "url": "assets/js/33.82591179.js",
    "revision": "b90918da49c1e5af4aefe3e0325793ed"
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
    "url": "assets/js/37.ae327ba2.js",
    "revision": "8e9edac1e3e60499a6e56df6bbf01dd5"
  },
  {
    "url": "assets/js/38.1651d5a6.js",
    "revision": "da884a2db342bb653cdc866467141e96"
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
    "url": "assets/js/47.d4bce085.js",
    "revision": "9a2ebc3f992056f303fecd558e04bf57"
  },
  {
    "url": "assets/js/48.0b91c513.js",
    "revision": "463b2779ed55feeb78158dd622b2c3fe"
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
    "url": "assets/js/52.35efaaf9.js",
    "revision": "d33c697b0f0cccb468023df2157fc175"
  },
  {
    "url": "assets/js/53.f2557e31.js",
    "revision": "c7d989f04a0770130b7d4de6f7f8e835"
  },
  {
    "url": "assets/js/54.f72a5e64.js",
    "revision": "a27c997abb2bc3fc43c5fa1fdc2adcf1"
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
    "url": "assets/js/8.6c2351cb.js",
    "revision": "47fc4ed6f3b48cead5b155b1600c8bfc"
  },
  {
    "url": "assets/js/9.86069d41.js",
    "revision": "25bf249188c465ccc8a55e8264c7c372"
  },
  {
    "url": "assets/js/app.01e11c36.js",
    "revision": "7659077ab4042170d8da45c0c6f42a81"
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
    "revision": "7bf861f7b58b81856acef4bca0ad1110"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "86b627d97d070e649f36ae1209ee34de"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "96113a93f93faaeb639ff9638f195abd"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "9e0151cd78f3cf060d765aa7fbd1e97d"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "f9e911695c3939adfaf47b21aab74600"
  },
  {
    "url": "pages/168760/index.html",
    "revision": "c815971af5e9d8d76bf78d8110325caf"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "ec401fff4af1672aacac46fe47726528"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "3720d8d9a5c2bc8676967aacb59f75be"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "155bd2c797358485e668bc6a043be6d1"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "51d331007a98b0731c7fecedab08aabb"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "1cb35681217b33cb94d17ca225a1ce85"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "ec82f5d1056cea0130bd092b8e435006"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "54413f91f9cfc01b83f7c8a61569f0ab"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "3d49f4086b16370c8ccee78d62c61aa6"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "9111a767359909666346ab99605e7c5f"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "57e59857c156276a3237275225951ffa"
  },
  {
    "url": "pages/4e74f5/index.html",
    "revision": "b8af7b5db3ff495875d1c84ea78703c9"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "7a2bcc216cfaa1940b3d8d85c4ffc240"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "7bd8d46bd1869c204bf455f3d2440084"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "843fc50eabed92b7ae88b5c612f55280"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "4c3b2ca35523ad8eac338c487449d529"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "65eafa7ffacdf3c6e04ff4675acc5226"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "7ee00dd4eff63506c2e0206c6fa341cc"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "8c0e3d72a4e1feb52fff8d10ccfa55f4"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "0dd03f23a2ba412fd28c79dec2e101fc"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "8b9d788d52c1e35cf4fc6da19819283a"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "a14f6d8b99c009ec53ed05d8f8971839"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "3caf2f0549768d99595964fdd95b486e"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "cc142e5b7e77a8b6a31d0febc0a612f7"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "68bc67455500a178038e893fc9fcbda4"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "fa0d44acf189000a8445b5de3c27d6ed"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "ea6db8a58a22d6032392862908a80856"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "df985dcd9d04756d6d8367f2608986d2"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "70731fb75cb514886336dd4e3f00e080"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "6ff1ea7e9cd3f9213b1b7b86b4e8821d"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "13505a0362fb64e6ff6260cbdbdecf02"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "00b4822c53f07d947fc25f4df9000b8d"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "c794513d879fb21cea2b56e7109bbb9f"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "8d78c8e8dfc231ec0f66e01eda4a7b49"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "aaec75c40fc16bf1b3c42962979ff7ca"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "18aa968e5976aae346e03d99b9f4793e"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "3cb69869fa3707398747821d7bc4a05d"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "5379fd68a0bb0010aeb2eabd1469b6d9"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "fddecaa119e37a71340029188b36f64f"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "ccac3f18103de810a220bb851ec99c6d"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "3c1a8c6f5ca17bdbe19177c8f6a79fb0"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "11e7003b67fc4054e0a05295c369a947"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "e3131cf9506de4804267c28517c4da00"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "cb6f622ad3395d2c5effb33f389f9ee4"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "12423e31491f638c4d20b50a5822ca53"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "a3e416968e6156039addd23197b151be"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "aaba6b9cbcdf165aece1214a3afb6a81"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "030843d1f6885c4850b4d2376e4d18c1"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "66578df7c3e79e99162982ec9edcc636"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "376069aedb803e6cc351556c50bcf973"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "d012937158ec6d175ff280807afc1bc0"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "b98963bdac70bcf3e73e8ab2440f5591"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "1e78f09403d817d26c384857514254aa"
  },
  {
    "url": "pages/fb5fc5/index.html",
    "revision": "e95ba5fb8cda56534022676d10925f40"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "tags/index.html",
    "revision": "59a2cb2d875f32d80ce7afc6dd099eeb"
  },
  {
    "url": "zai.ban.qian.yan.html",
    "revision": "ae25ee706af867c01c1285007b0fa98d"
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
