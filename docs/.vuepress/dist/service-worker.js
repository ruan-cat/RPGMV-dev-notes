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
    "revision": "6726f50b4df117ca4654616b3ef5593e"
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
    "url": "assets/js/13.cf7118c6.js",
    "revision": "5f1dc6975d57a09305447dd8b3653be9"
  },
  {
    "url": "assets/js/14.2e043693.js",
    "revision": "ef2f5d6ef1f56c9debe73ba22ef74c14"
  },
  {
    "url": "assets/js/15.97226878.js",
    "revision": "a87e7145cd715d1d994ed7bd1c811dc9"
  },
  {
    "url": "assets/js/16.9ebb6d80.js",
    "revision": "ed69d654ef9e67be4f0caea9bac09e0b"
  },
  {
    "url": "assets/js/17.9580cf50.js",
    "revision": "7eb7c9fb40bd184a975c5b1be5c68c88"
  },
  {
    "url": "assets/js/18.bb6cc6bf.js",
    "revision": "497ff876fe0d23cf7e1866b59554c678"
  },
  {
    "url": "assets/js/19.64220e4a.js",
    "revision": "938c3350fe189fb9b9545b7507496df7"
  },
  {
    "url": "assets/js/2.847bc281.js",
    "revision": "84cbb09e1ae4a70258ab7f7ea562065a"
  },
  {
    "url": "assets/js/20.ac7b19f2.js",
    "revision": "ee7fdb318731999efdc8ffd79f7c3c4b"
  },
  {
    "url": "assets/js/21.cc8b6a64.js",
    "revision": "08fd860f51cd265248250b7a2979aec4"
  },
  {
    "url": "assets/js/22.f6f674e6.js",
    "revision": "4a024d556656e21629edd078005cf9f8"
  },
  {
    "url": "assets/js/23.35ccee67.js",
    "revision": "5a24b89c503638851af3a19fefa23a27"
  },
  {
    "url": "assets/js/24.015700e4.js",
    "revision": "cfd84ed38618195f874becbabb5aef2d"
  },
  {
    "url": "assets/js/25.78a690f2.js",
    "revision": "a2e0bd95a299d11ffd5a45268c1f39e6"
  },
  {
    "url": "assets/js/26.6f3ff1c9.js",
    "revision": "317e2ae9cd107449cc1f72a63e6ad06c"
  },
  {
    "url": "assets/js/27.64656e30.js",
    "revision": "aee0d265c7e374e7fc9e87687118dbaa"
  },
  {
    "url": "assets/js/28.678cd4bc.js",
    "revision": "4c1ece2f1d7e75dd4acc5c9a41ce7ef7"
  },
  {
    "url": "assets/js/29.02876dfd.js",
    "revision": "08dd42d17be9b617a2df7084bba7a0ad"
  },
  {
    "url": "assets/js/3.522be963.js",
    "revision": "e232bf391d3a124d03f323f659567464"
  },
  {
    "url": "assets/js/30.b3a46efb.js",
    "revision": "791d153136ccc74f907114a5d9a0e870"
  },
  {
    "url": "assets/js/31.5776eb5c.js",
    "revision": "55329b60fd347bc9f07cf04557a08964"
  },
  {
    "url": "assets/js/32.3d66d4fc.js",
    "revision": "0b3c607579a233fd5a44aad7aea6667b"
  },
  {
    "url": "assets/js/33.dcb38529.js",
    "revision": "5a39b7788c9e3793f7424ebd2d03d082"
  },
  {
    "url": "assets/js/34.a410b048.js",
    "revision": "83e232caa02acc85698d109f2256109d"
  },
  {
    "url": "assets/js/35.9a8baa35.js",
    "revision": "4fa436c08dcefa6ccb8c94a79f9f3216"
  },
  {
    "url": "assets/js/36.4c1fae8a.js",
    "revision": "741724bc26c8e5b2cda0a5f04000c1dc"
  },
  {
    "url": "assets/js/37.a73139ca.js",
    "revision": "cb18d0c4557b769f27ae3a1d4316e36a"
  },
  {
    "url": "assets/js/38.7efce020.js",
    "revision": "d59474d497bb6017843db423262cba04"
  },
  {
    "url": "assets/js/39.ea831023.js",
    "revision": "46a7303b2d9cb8087783afb05f0e87d4"
  },
  {
    "url": "assets/js/4.19fd35e1.js",
    "revision": "2e12bd2f2536507a324b8a7745af7854"
  },
  {
    "url": "assets/js/40.fb3e45bf.js",
    "revision": "7953782afb10311f62ddce73431d1796"
  },
  {
    "url": "assets/js/41.604ad903.js",
    "revision": "c5d384e9a59d5c46042fe4206a9817be"
  },
  {
    "url": "assets/js/42.41a9fa3a.js",
    "revision": "1ffd8ac408a5356f46c01dc614a04f9c"
  },
  {
    "url": "assets/js/43.ccbe03eb.js",
    "revision": "19f45ec0ed443815f6bdfaf8a099fbb3"
  },
  {
    "url": "assets/js/44.4f787039.js",
    "revision": "90693ebb2e83954f2abc2018faf6e4a7"
  },
  {
    "url": "assets/js/45.533c2ad3.js",
    "revision": "c734cc73644aa8a2239bf7b7b7eadbe7"
  },
  {
    "url": "assets/js/46.550714f9.js",
    "revision": "da5f2586701672432fa7a2c550a88b70"
  },
  {
    "url": "assets/js/47.5fd8c1f8.js",
    "revision": "06f6d64e4fd83f5f8070377ee9b9bc1d"
  },
  {
    "url": "assets/js/48.f80948d1.js",
    "revision": "77311a099dabd250c5db9d0ecf84f5fa"
  },
  {
    "url": "assets/js/49.b4332191.js",
    "revision": "5d56272c9607b44e0b755826b929e19e"
  },
  {
    "url": "assets/js/5.eee28d9f.js",
    "revision": "87206abea4d48fa4a23e56a7c0a1014c"
  },
  {
    "url": "assets/js/50.18e34a89.js",
    "revision": "6657de76c43ab4a64ee635a80aab6725"
  },
  {
    "url": "assets/js/51.9230a4aa.js",
    "revision": "89f5990dae79ded93e17fdbccb6b1d63"
  },
  {
    "url": "assets/js/52.0c2c6eba.js",
    "revision": "38918fced0c375a69912bfaa7af2cd9b"
  },
  {
    "url": "assets/js/53.5d61c346.js",
    "revision": "c4f2cbd9da19b37773aa5eb75632609c"
  },
  {
    "url": "assets/js/54.e560f3a0.js",
    "revision": "40f3db0c3e4017f4aa5710404d4ea211"
  },
  {
    "url": "assets/js/55.558e00ea.js",
    "revision": "43dacff66261fb79a3f2da600ab08d0e"
  },
  {
    "url": "assets/js/56.4bfaa0f7.js",
    "revision": "92f86a618a9a001cfcae4983536c7dc3"
  },
  {
    "url": "assets/js/57.9e340291.js",
    "revision": "8437eec9549c47536c63260c42e9cb77"
  },
  {
    "url": "assets/js/58.acb3e065.js",
    "revision": "5fc981c79b1443242a266a58a888f55d"
  },
  {
    "url": "assets/js/59.ad9b7504.js",
    "revision": "1527fcd2897a02d8d6af4898e4397e5e"
  },
  {
    "url": "assets/js/6.e0092484.js",
    "revision": "dd6935f1f4769f499eb386c3f0b266ec"
  },
  {
    "url": "assets/js/60.62b62408.js",
    "revision": "8dc9688512ccf246ab1f220a2f02e85d"
  },
  {
    "url": "assets/js/61.c2422771.js",
    "revision": "57d78ae463fc2ce8c66fc965a2646d4c"
  },
  {
    "url": "assets/js/62.3d159754.js",
    "revision": "926bd99b1be6868893d113a34cbe978a"
  },
  {
    "url": "assets/js/63.c8bb6521.js",
    "revision": "874b8c64cd02f3086fa9a1b8dc1f60ae"
  },
  {
    "url": "assets/js/64.bcc7796b.js",
    "revision": "68c2e80ea3ccf3219c16d32d4eee8d45"
  },
  {
    "url": "assets/js/65.9d73a080.js",
    "revision": "5597105912d6989b9484d1d99438bcac"
  },
  {
    "url": "assets/js/66.858066b1.js",
    "revision": "6b09083280a47bb181eb9d14bf9e2b51"
  },
  {
    "url": "assets/js/67.5d57dd7a.js",
    "revision": "4dc308d2d7ea7db30814be08b371261f"
  },
  {
    "url": "assets/js/68.d9573575.js",
    "revision": "a482cfc11e7e2acfa30e55b124013d7e"
  },
  {
    "url": "assets/js/69.44d4025a.js",
    "revision": "5307ce69f8be1b95afedbf47bd1326b9"
  },
  {
    "url": "assets/js/7.7e98106a.js",
    "revision": "9a391cf8068ab5ae19b5425db52fafb0"
  },
  {
    "url": "assets/js/70.6f5c8b00.js",
    "revision": "a1dcad790f98631ab89b98e908cb170b"
  },
  {
    "url": "assets/js/71.ed0318d9.js",
    "revision": "57f5d0c4d023c7b716e32d074920a815"
  },
  {
    "url": "assets/js/72.a385fd46.js",
    "revision": "98cf44c05c36811d6cac0a6bc92a530a"
  },
  {
    "url": "assets/js/73.ebb6a4e0.js",
    "revision": "c6f5aa10439a16c03c5c78b8282aca9b"
  },
  {
    "url": "assets/js/74.f62dcb69.js",
    "revision": "84b0dc91ffcf50902f9f345a65f4fbb0"
  },
  {
    "url": "assets/js/75.8daea318.js",
    "revision": "c2e814acce7ef85e5967f58d0b011066"
  },
  {
    "url": "assets/js/76.8e58041d.js",
    "revision": "f78b89238e7cbefe2cd6dcfb13b327a7"
  },
  {
    "url": "assets/js/77.ec11c2a9.js",
    "revision": "e59fd8e54f62b1f7a61f84440618ddef"
  },
  {
    "url": "assets/js/78.2bd31566.js",
    "revision": "c5b3b0af124d5d4cb235b45648488e3d"
  },
  {
    "url": "assets/js/79.2743e7be.js",
    "revision": "054f48cf250563e1828b4b173faa6021"
  },
  {
    "url": "assets/js/8.919b4b9a.js",
    "revision": "a17b15f58456e446d89e70d77fc7be9e"
  },
  {
    "url": "assets/js/9.3d90c90b.js",
    "revision": "e6cff7b7b4f896bdcafac659e1734b02"
  },
  {
    "url": "assets/js/app.89833fb3.js",
    "revision": "7ffd75929d2fa40c80067a6ae167079b"
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
    "revision": "c8f54ca1b2af606b566d4f9d3d8f0756"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/07e629/index.html",
    "revision": "d9d57f8fc9c2d39957e77b419bc06507"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "f5a1b72ff7b411f48340b9892990764f"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "05ed57f536fb732e3885396302b594fe"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "d87a9831a4aa8e9c5f3918c295b3e761"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "0edada12ceea552007a903c9c5a0e9f2"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "182fcb49a9735bb2413fe8ea9ed63027"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "5f775d4a2689af94196ac7dae1e0fdec"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "a4009043a93e911bba96eafb062f6418"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "65e14193191e4371e140e5bada3f6b83"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "84f053ed83be3c9c321a4ffa516d6391"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "ae7f4472b8e706d79a35ff74fbd9f948"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "4a04d4e165ad8b8c82445f1e4cf91a96"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "28a2cf9894e79ee24693e64ce7a0b88f"
  },
  {
    "url": "pages/452b27/index.html",
    "revision": "879d46fb3c48faecf16e247c00dbacfc"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "14dda1b099863dfc132a5de97d943c48"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "ca29f0358c7e314f1df6251674e1dc6a"
  },
  {
    "url": "pages/4c52ff/index.html",
    "revision": "2b96ae6519c9e826a0237409c8cac8c3"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "57d5447d2ed9dc570df7828784a87038"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "a0f095f9f94752b14980b867870cfe66"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "ff624eed9e64fe28db274c126faecc12"
  },
  {
    "url": "pages/68697d/index.html",
    "revision": "cedd90b71737de90f417bc7c7b95b03a"
  },
  {
    "url": "pages/6be093/index.html",
    "revision": "034204919b6811484a27289905adf5cc"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "813c738490b520fc629721dc49677c25"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "77ff9a0ce3da07d2734a235815181fc9"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "8c17062ac3402cc67abc90c02d40ac6f"
  },
  {
    "url": "pages/7b95b9/index.html",
    "revision": "00f234093ea02f563a73086d71557cef"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "dddcc51905c7ba3379369937ee34e298"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "148c0bec16ea7e5fc924cbcefcc05168"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "4f5db2d4609f73dbb923cb436a03fa29"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "4991962d617585d2bb1a2c921229d5b7"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "0a5a9e888f751e55ec84237c8b62471e"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "b7f17d8464ece46fedad63397776367b"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "9a9319070f79fbe31eb51e75cdaf556a"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "f19448f68c50d40149e2834e142223a3"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "a985394e65b5dce48f034f80dd10c786"
  },
  {
    "url": "pages/a6ca3a/index.html",
    "revision": "8b99d6fba56329e04905502d108f8bbe"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "2c20721594195d94e603c59927f0c287"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "d44c99d10e9147fda25948bd026533b7"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "19b8edfc59fc709a81b42209a2b7ff5d"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "10501dc7b183fb84e62d20d003f72d45"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "63755977aa8817cbfc92a565938c279e"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "9a0bd261aea98a5445820910098c4cb6"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "0ffd6c1ebaa0a937c7bb98dc5ca3374e"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "0b9cb831678852ca24a2896440015821"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "f4201cca2104ae57e9aa2ed9e08fbf45"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "cc3f1901b3da496473f6323d67cffea2"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "bfa81a51d21853c7073d2eb53d7022ee"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "3f678c4ed05386c0679f2f46016b1cea"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "98bee652cc2fe36d3f3d1025ec9d45a5"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "2fae017e47a959fa374be2fa61b7e75c"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "93a5c9f63c798717bc8da4bff91b59ad"
  },
  {
    "url": "pages/da3888/index.html",
    "revision": "e5c01f22c4361ffb0ebb0b65b211c98d"
  },
  {
    "url": "pages/dc65bf/index.html",
    "revision": "3d335463e7660fc2a2a1d25b6514a585"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "265092eb2b639e216ca06abdca7e74cd"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "fd317b6d90b0ff10966e70390b02b0aa"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "a5269579928dcd554b27828eeca423b5"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "36502ff3561a71f377642e877410aef2"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "007822de5d4eef4fd08167f97e26bc9b"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "b9e3ea6f8d9d26e943d9759ef8b72f16"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "4af9ecd8a91578f6e579848c8701ce6f"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "0fd0035ebcb7c133c26db1b3dd7ecb37"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "237df843b3d3dbcc3a28e86862aa41fd"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "65e958ddc4a632ae7d53e3bc8ec38e46"
  },
  {
    "url": "pages/f65105/index.html",
    "revision": "08fbd4641b68393a268fcf286d678b43"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "0dbd31e9f70bdbbdf2b7dec28f5c9b61"
  },
  {
    "url": "preface/index.html",
    "revision": "2d565f1e77500efc3a0778a691810952"
  },
  {
    "url": "resources/rmmv-source-code-translation/index.html",
    "revision": "e891e559cb447a63c214b8f23d721871"
  },
  {
    "url": "rmmv-base-js-course/How-To-Get-Start/index.html",
    "revision": "5da3deb3582e8f18d46bae378943b13a"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "wang.zhan.shuo.ming.html",
    "revision": "a6b4bb720c60cecc307f05cf3c97d9ca"
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
