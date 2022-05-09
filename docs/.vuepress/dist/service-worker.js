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
    "revision": "30f8291bcffa9ca97413bbadf960a97b"
  },
  {
    "url": "archives/index.html",
    "revision": "35fbaf70d63ab6e839f79cb9bebc3d42"
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
    "url": "assets/js/11.b5ec6b83.js",
    "revision": "9b3e8ba59a23a9838f4364e68ed581ff"
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
    "url": "assets/js/19.6435c447.js",
    "revision": "7e6013b830c026da4d427068d3c57595"
  },
  {
    "url": "assets/js/2.800d3d26.js",
    "revision": "f8c2e64f4834650cd6dea4d1113c051e"
  },
  {
    "url": "assets/js/20.5303b3fc.js",
    "revision": "84f5c079ea77d7152a0f81a9ee482105"
  },
  {
    "url": "assets/js/21.2e8410c7.js",
    "revision": "198c31c01c948fc9e1bf0466bd66b5a1"
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
    "url": "assets/js/50.ace69097.js",
    "revision": "ede00abe4e25809c97f207dc4162925b"
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
    "url": "assets/js/53.f3ab4c24.js",
    "revision": "f963e77cc30ea2ba4ed7a79243eb75d4"
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
    "url": "assets/js/6.fa28e650.js",
    "revision": "f48a4d6a92b9c94e087a1d66592753f7"
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
    "url": "assets/js/8.3f1ad73d.js",
    "revision": "ba8a7ed1c40d137586739e99a51aaedf"
  },
  {
    "url": "assets/js/9.d5caa974.js",
    "revision": "f0e43f18ecbd2bc563e2ddf710056cb2"
  },
  {
    "url": "assets/js/app.b26e22b4.js",
    "revision": "3cbd3497bf047027ed922a04cd0a9af8"
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
    "revision": "8fa29ff89515cfd213d9f7b0ba85ebac"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "00d8a4e68093733110386e264257e737"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "9901862d3066cc914555a9d878693344"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "aa701c704218f1971f233e145763a3b9"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "16db0311a223847bfa708add6e77a62b"
  },
  {
    "url": "pages/168760/index.html",
    "revision": "4524b90afffdc6c28c1a301b7779e9ec"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "881fddbf87680e32b80a92592da37af3"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "5c4adeb20ce2f700739c0d42afcf3428"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "b702c240adddf37a9774dfa2078664b2"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "8eceeecac8b794ff527b21493c7965a6"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "03288eed1fbe674afec3bdadcea085fa"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "6a24748d2c9d8e825bdc48578adcc9d7"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "c1e56f0c97fae5a6851338a5d2b94de4"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "5b3d78ff14b5cabd5b08a7c21d3d71cf"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "fb43ea055cd9f3d3735beb510c395495"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "6a3357e477a137f582706796f9806e1c"
  },
  {
    "url": "pages/4e74f5/index.html",
    "revision": "cf55f59afcf348d10e6eed16ad886afd"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "e5ace3c6fb05c8e30e87f676fee77e3d"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "3eafe35c43ee376c1f98bb35fa6f9e04"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "aa9abda2703cd3fed6fbec96598576a3"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "c4dc75d13668b85fe55028c6ab2ad3d5"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "e40f6676495db83805608687e9e28d8b"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "37b04db8510aa660cdc9c421624fd07e"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "0aaa55357ac04c8425f77beae6df0729"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "dc7a6120117803a4dffcb853082190fe"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "a60f2e8ef5291b71a94354eee8c7fcb9"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "3815d980d18faaea9a9ca5ee3a5e3553"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "48ec642294d24688e14a7ceb83548133"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "0973550f02c8e8858d52049195d4243a"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "2ae719e6d40b82806266c4743dc0063d"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "1d4b6f8fc4e5e6ed5e1c3b28903c58d1"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "ad500c2f1464b7222a220cbd58b75dd3"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "f33c2b78612b61b4dbf2a04dfaa23abe"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "2fc4ece32214229b5bb150e0f32815be"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "a6828b75f9009489449aa917c924122e"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "3b660647b279eb3a6b0ec6c6d44d2442"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "81d1fd792613bf9df7b00c1502aa33d2"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "a56015ce0fef2a7ef0f5a84c5c13821d"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "4d607a31f6776d1496726191742d7917"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "a8cfbc4f8981d224522bc90e01d492f2"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "9ecb5ba287c599939d49b29fc50fab2d"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "f57dbae4f0fdf82f51590f7a0d591713"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "a773c9d75b5ba8f9a9a84dd1bb3527d4"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "a2ad9a33554e9d66efc8ad4a612f86af"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "5c1be71288592521ddabf465ce21709a"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "df7aa92a72fb21d4dd96c20f5faf2ff7"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "393aefaed845aec1afe3e50d23971f1e"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "e721e2001ffa853cc3f4cc507ccdd8bf"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "c9d9c2fd97fad1a34afdabc7c1215f77"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "5b691cbbaaa6554263baec571291fc3c"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "7da2883bfc973dab95eb82416d37c74f"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "90d5d7c229c1fdc0a375d6c3a3e038eb"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "3170b7ef1d6a64b22e5c32ca2a1fd0ec"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "958c5ea4285992db46fc1860a9b93b66"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "15b2b30d7f8f104dedc2e401db3d1cf7"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "0dec258272e6fb258ad427f05e790fb1"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "1b575d21370a477d71d93725c0552771"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "91ceb6860ff11e19e91b08412fc70846"
  },
  {
    "url": "pages/fb5fc5/index.html",
    "revision": "af8bc6e1339390cd94bdc99d00a21e06"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "tags/index.html",
    "revision": "718b0f15e6297436527ce6e494a38134"
  },
  {
    "url": "zai.ban.qian.yan.html",
    "revision": "68ad084419d10a2e82fccdb1790627ec"
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
