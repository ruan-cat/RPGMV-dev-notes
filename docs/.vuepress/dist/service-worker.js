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
    "revision": "95218f2ba2e87f8c70a243b5738345b6"
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
    "url": "assets/js/11.c7627ff1.js",
    "revision": "c8d9d75e9b28884dc7106aedb884992f"
  },
  {
    "url": "assets/js/12.78cb2bf9.js",
    "revision": "5acb14e66947c472802233e9204d50be"
  },
  {
    "url": "assets/js/13.cf7118c6.js",
    "revision": "5f1dc6975d57a09305447dd8b3653be9"
  },
  {
    "url": "assets/js/14.a007425b.js",
    "revision": "646f91d85377f98d032c221e34f8905f"
  },
  {
    "url": "assets/js/15.97226878.js",
    "revision": "a87e7145cd715d1d994ed7bd1c811dc9"
  },
  {
    "url": "assets/js/16.8a4bbdab.js",
    "revision": "336e3c8983eac3f7fa8a861c13aa3193"
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
    "url": "assets/js/20.0c4b5ffa.js",
    "revision": "d9ff8ddc5a308f3e7aedbb665187bee5"
  },
  {
    "url": "assets/js/21.77c3b8ad.js",
    "revision": "4d3c146ad7e4f4901c143a1df2385761"
  },
  {
    "url": "assets/js/22.27979d96.js",
    "revision": "f1394fbfad07632e2bb15d594d588982"
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
    "url": "assets/js/26.6fb7df4b.js",
    "revision": "1abc5ebd625b96d20f23867c00e82123"
  },
  {
    "url": "assets/js/27.5f46bdf8.js",
    "revision": "03cdb33a116e0b4068846d95636beecf"
  },
  {
    "url": "assets/js/28.d9b66ade.js",
    "revision": "1c0c61e74ce4789217dd7abe3f14afc5"
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
    "url": "assets/js/47.29b8491b.js",
    "revision": "79608b8cc7c0f432cbee60df84d51faa"
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
    "url": "assets/js/50.0ae62fe7.js",
    "revision": "4c991933b5dc1cdfd46b338e134397c4"
  },
  {
    "url": "assets/js/51.2d8d5924.js",
    "revision": "749a61c327c22c2c58bd1e278c70ab8c"
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
    "url": "assets/js/59.89d347f6.js",
    "revision": "6c3aa45a3a4887645f37878c7e989c6b"
  },
  {
    "url": "assets/js/6.e0092484.js",
    "revision": "dd6935f1f4769f499eb386c3f0b266ec"
  },
  {
    "url": "assets/js/60.f9c2a38a.js",
    "revision": "872cb9dcfe6080cfeb8827b1f5b16206"
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
    "url": "assets/js/63.c88d28f3.js",
    "revision": "ecaecc34832ad12b5eb82b153dda68a9"
  },
  {
    "url": "assets/js/64.6a6737d2.js",
    "revision": "a66eed3afb79e795ea1a177e1a0c5e14"
  },
  {
    "url": "assets/js/65.9244c214.js",
    "revision": "c356ae566956e28c19daf4dbe47192db"
  },
  {
    "url": "assets/js/66.56e7adf6.js",
    "revision": "ac22cabb6f234123538e3ed84c7e0ce3"
  },
  {
    "url": "assets/js/67.cc019a04.js",
    "revision": "c3581ffed839229b017988afb73a53f1"
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
    "url": "assets/js/7.c1f91910.js",
    "revision": "17f753a1223c4302023b55b14ae8a854"
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
    "url": "assets/js/8.91675950.js",
    "revision": "c513c3e2621b08d889f515907ef53358"
  },
  {
    "url": "assets/js/9.3d90c90b.js",
    "revision": "e6cff7b7b4f896bdcafac659e1734b02"
  },
  {
    "url": "assets/js/app.77b7771a.js",
    "revision": "05cf7e8d15f93cbd6bd7e9900b61c755"
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
    "revision": "333fe2e8dbbbba07794ebb2aa78a3d4f"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/07e629/index.html",
    "revision": "f8d33b5308b357b6e8d885c54cce7bf1"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "0d2befa62d8ee709b35edacd1091df77"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "17c649cb5e560fe37a3145ff3dfddfe6"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "cd00894c02361aa30d00ae51a59a60df"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "7909ed2d6476aa72b087092267c9cbb8"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "09963334e0c2fa3c33c5d1111a99516b"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "da7d725b58d5343d3afc577778cb8eed"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "f01a487e8c3805d27032d55741361df0"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "2b78034130f0d02449e4db793cc1a586"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "9e757884604416c1be3f8cc567d191dd"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "e1ad12f29c186773847d8258020b1a59"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "707fc080edf4f4954d240a1198c2f07c"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "63a17121b8d559c1e253508ffb5c6ad4"
  },
  {
    "url": "pages/452b27/index.html",
    "revision": "b990f6521e781065e7a32f1ac6813a9c"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "8761077259b0238bd8097451b8da1efe"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "319d16d2c5938de6275c30a60bcbbb08"
  },
  {
    "url": "pages/4c52ff/index.html",
    "revision": "8ac16720a1d53636a5f82b8342ee1f3e"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "ba972643af3b93e7d957a9d06bc5c3b7"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "1f28c8f1798b22f3e0ae9384729637ff"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "520d080af2f4f43f244e930b82bea71c"
  },
  {
    "url": "pages/68697d/index.html",
    "revision": "65b9132c6088bcfe78b855e6c1c43970"
  },
  {
    "url": "pages/6be093/index.html",
    "revision": "7f251b2c792cf2d46836bfc213d8ae44"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "4973f5d940f6c8615e416dea8b485e1c"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "4c1958acad82f6900350b262597b351e"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "728d7dad011b6fc8264e55530feb60cc"
  },
  {
    "url": "pages/7b95b9/index.html",
    "revision": "d9d14b76763ed01bcaec32af23e6b52b"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "445a913443d9e8391d180d7281887260"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "70a341da6f7a25c1ebce97f320cf2249"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "b5a6dfcb0f0836fd80ab4b89153115de"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "1328df3afc1da7e8ee782bb7ab59cc42"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "076a4694cfc2d7c4e7e488e414ce8231"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "b57b27d33df94d7717e8a8b847ad2354"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "fe30045f2c55ba8b223fc8107781cf7e"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "a47cc8f4cb4b41f85381801228a1c73a"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "fdcdcd232465164b9c93a032c7d13ec3"
  },
  {
    "url": "pages/a6ca3a/index.html",
    "revision": "bc2ec362232c521310bdefbe5e5ef9c3"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "1d1db36600bf64e63419bee66f0af5d1"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "dd4ab75ca2c98cd6f973fe3e9bf132d3"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "2d7919fcf024c5595ad9eb30801fd6b3"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "b6fb5c228da54581c253cb39f7546a0e"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "75a9e3cc1d1ebb45f52c048ba1131a70"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "6ecdf0ee3d7a9eb375a991dbd369fd19"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "2acc5c2df1d37d54c0bff3cead84de26"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "f1ce97de9ca2ea1af8e801f0d04b0239"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "bbc99dfcd4c63e442160e0adf8f5e82a"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "a3e89b4efc2710dc8da263864b0c48f0"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "a34f5b8bd07f8b02a539e9642080d517"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "3d9c590f842f2e380fccf6e9f69e6f03"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "c05fb08b44170d482b65e35cbd54e8d4"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "a861010429e5da60de716ebec5adeff9"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "7d7741200ace207bc9b0e864274e5e58"
  },
  {
    "url": "pages/da3888/index.html",
    "revision": "14e8b97f47c182751571265ea6cf016b"
  },
  {
    "url": "pages/dc65bf/index.html",
    "revision": "16a11e7067787a6e28bf300fc9732c6c"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "324c77ab32a8f716679b8156e746c476"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "ce732602837da409026d46f88b90ce60"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "9d995832b39caa4817991db2232a83a5"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "b1222735e6c7515d4a27845ff34469b8"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "5b1e375a98c6a34a35c430456aca01e5"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "d80b5345501eda836e699bacbbeff987"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "a83d333b3e5120655e016f11d69c89b2"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "874c7b218b8627bd4da14ccd5a522b05"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "60443677fc5bd94eda27cb8c11817da2"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "20168fe19a1eac8e40fe62ad323fd50e"
  },
  {
    "url": "pages/f65105/index.html",
    "revision": "9b57e6176b07cad3f4f008c461099048"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "0a0df96eeebe1ee34c2cc15824a7d934"
  },
  {
    "url": "preface/index.html",
    "revision": "c60ba9d43d6f4c3a09c14902e71388f6"
  },
  {
    "url": "resources/rmmv-source-code-translation/index.html",
    "revision": "5104992eadc1b55319798b408ccfb499"
  },
  {
    "url": "rmmv-base-js-course/How-To-Get-Start/index.html",
    "revision": "3809d33bc9713e55535145facfecc655"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "wang.zhan.shuo.ming.html",
    "revision": "72487c6264859249cb0d7ad5d3de929c"
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
