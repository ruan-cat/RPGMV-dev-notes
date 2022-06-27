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
    "revision": "32f71dc27193bb95e4c2e75c3c8965c3"
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
    "url": "assets/js/10.fc87c643.js",
    "revision": "6ef1fd4fc184931ceae4342877a705bc"
  },
  {
    "url": "assets/js/11.c7627ff1.js",
    "revision": "c8d9d75e9b28884dc7106aedb884992f"
  },
  {
    "url": "assets/js/12.98bb425b.js",
    "revision": "c267cdb9d3f70e0dee261dc1e51cc830"
  },
  {
    "url": "assets/js/13.1c9af4a6.js",
    "revision": "39486dbaad73720b29859a274b83d360"
  },
  {
    "url": "assets/js/14.3d6b3448.js",
    "revision": "d2923333354c158bc42e8c3cad93d061"
  },
  {
    "url": "assets/js/15.f4223a25.js",
    "revision": "5f49c272aa5960a287ff4c0dbb2e6835"
  },
  {
    "url": "assets/js/16.8a4bbdab.js",
    "revision": "336e3c8983eac3f7fa8a861c13aa3193"
  },
  {
    "url": "assets/js/17.6533d38a.js",
    "revision": "ea752a727b491233211fb1098e01b4ac"
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
    "url": "assets/js/2.bee23e09.js",
    "revision": "84cbb09e1ae4a70258ab7f7ea562065a"
  },
  {
    "url": "assets/js/20.0c4b5ffa.js",
    "revision": "d9ff8ddc5a308f3e7aedbb665187bee5"
  },
  {
    "url": "assets/js/21.cc8b6a64.js",
    "revision": "08fd860f51cd265248250b7a2979aec4"
  },
  {
    "url": "assets/js/22.be328d49.js",
    "revision": "cf932199cdbbcf8b4ed5cba9920d476e"
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
    "url": "assets/js/3.b7123d2e.js",
    "revision": "fe41892bf5d367344bca1397f9f22178"
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
    "url": "assets/js/48.7b69288b.js",
    "revision": "40ee4d4edea3d510d3e0e14a3803c3fc"
  },
  {
    "url": "assets/js/49.b4332191.js",
    "revision": "5d56272c9607b44e0b755826b929e19e"
  },
  {
    "url": "assets/js/5.bf9691c3.js",
    "revision": "dd06b5007ac3150b697b23446f05f9d8"
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
    "url": "assets/js/59.ad9b7504.js",
    "revision": "1527fcd2897a02d8d6af4898e4397e5e"
  },
  {
    "url": "assets/js/6.0d087194.js",
    "revision": "5b95a59269b9c7de55b332db8e2aa78f"
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
    "url": "assets/js/64.328d9bf1.js",
    "revision": "88faa13f0826eccfedbe463da568b950"
  },
  {
    "url": "assets/js/65.814388d9.js",
    "revision": "939291f506f70cc76aaf8ca663f0c100"
  },
  {
    "url": "assets/js/66.56e7adf6.js",
    "revision": "ac22cabb6f234123538e3ed84c7e0ce3"
  },
  {
    "url": "assets/js/67.295768b7.js",
    "revision": "64b95a59c6f8adb4812fd2331e20bb80"
  },
  {
    "url": "assets/js/68.d4282aef.js",
    "revision": "6a3cf2d479a829e043edd041be360551"
  },
  {
    "url": "assets/js/69.44d4025a.js",
    "revision": "5307ce69f8be1b95afedbf47bd1326b9"
  },
  {
    "url": "assets/js/7.91a0741d.js",
    "revision": "35f29a76db53f6e87860f2033b9f2f15"
  },
  {
    "url": "assets/js/70.8b5e405e.js",
    "revision": "da101118fa9ab9932b95743bfcb38a32"
  },
  {
    "url": "assets/js/71.649b73d6.js",
    "revision": "fd859aa8b22aa7e47d98c1957d37aa6a"
  },
  {
    "url": "assets/js/72.59101bbf.js",
    "revision": "624dd9fe403535634d9526f2fa017ca2"
  },
  {
    "url": "assets/js/73.75a7eb37.js",
    "revision": "6632e8ae10aa212b8853e27538017ca6"
  },
  {
    "url": "assets/js/74.3f1e6a02.js",
    "revision": "75197cc12bf3b8a591f40890154e438e"
  },
  {
    "url": "assets/js/75.84c292d5.js",
    "revision": "634874a7960f22a7bc03c15b3f9edfe8"
  },
  {
    "url": "assets/js/76.65b3e01e.js",
    "revision": "ed5a3a2da4d0c92570aba96aa8b0a2f9"
  },
  {
    "url": "assets/js/77.6cb2cb23.js",
    "revision": "51e2063a77fe6981e28debbdf0eed0e6"
  },
  {
    "url": "assets/js/78.3787eb6d.js",
    "revision": "7c8bd0afee77311de4477ab399949b13"
  },
  {
    "url": "assets/js/8.7e8349d1.js",
    "revision": "171fbec0a5509c94c2ce2ccc300288ea"
  },
  {
    "url": "assets/js/9.3d90c90b.js",
    "revision": "e6cff7b7b4f896bdcafac659e1734b02"
  },
  {
    "url": "assets/js/app.276b8e7c.js",
    "revision": "4005576915568c33837717d7fc8a867c"
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
    "revision": "93fab39fce24b017f1b42887d0a42a79"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/07e629/index.html",
    "revision": "eacf945236c238fd588638fe8b4adfd5"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "0feb6f98a8a56b8223319ef2c8517eff"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "e6f19b91defba60700e84c844644de0c"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "bb0e5e89ff26384ebd08c6f383673718"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "365a367cc6bc3b8b03c5503e7ff8b410"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "72aba20011e95adeb801be06e55163d5"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "91d3e661e4b099ec5387f0b9545b3ecc"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "0163101ded004fac57e5b4f51c118914"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "0289e9aaf9d13dffcfb421a267d652ab"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "926b0497b152f9f42e2045c507c1ed44"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "72bb45fae768c064b9f63fc24eca7382"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "922dda2a1d2408a0d4e6ca72e217ba1e"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "717b451779802ecf1e28bdd7c2a7ffc7"
  },
  {
    "url": "pages/452b27/index.html",
    "revision": "66651e25a79dd0cd37168f644807f307"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "a3028483daac77c50ba07b4a914f2b21"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "b6da415a0363b4afbb3e1ff814fd3dc8"
  },
  {
    "url": "pages/4e74f5/index.html",
    "revision": "475e3b327988e9461f2c76f929ad6051"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "526c982e9b32754a840a831686cc68b8"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "3d3ca9dcc354c3f449eb422adc1c5e44"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "bf2e1f83b68de1f4edee7f3eae711083"
  },
  {
    "url": "pages/68697d/index.html",
    "revision": "75566807f287accbc6cf507a8fe4d38f"
  },
  {
    "url": "pages/6be093/index.html",
    "revision": "2666471f602c43d2f481890675d6f8a2"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "f2cefb1f01ab48aae23ed9378f1d1f37"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "13e636aa2e233012ffc4793260d17352"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "ccb09af07dd68e77ec24c0fcb3b7ec10"
  },
  {
    "url": "pages/7b95b9/index.html",
    "revision": "ed292299b8b7e83860122a5ca30a9453"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "5dfdafd801fad9d535f6690e83c64129"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "cb5487754b0fb2d7b2bc7950ff0c448d"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "a0865798f3219e761cff9ac7583b41c4"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "4a2a7d88a8b4d879ea4a8c91fedbb805"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "d22d6c9f803157841035a227876f2c76"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "aafbf04a0e8dc7040dcbbc41d72f48bb"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "0b597c3a8d7ee69ef2858fce3f302725"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "11d07be0d186e8610a6b314eba7fc920"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "dfcec30d7301c7e610676438dfb43e4c"
  },
  {
    "url": "pages/a6ca3a/index.html",
    "revision": "f418176fb1d1c73f69f7fe7d2f404fda"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "7c2bc10d6c7928d43400097e3752a56f"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "15a380fc1696ab7d8d4b14e6d53dd771"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "30fbcbe3afe43930f5a3c5f8431043c7"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "ab079e1c705156c263d6b2eacbdac76b"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "e608b8c09556d1a41e8a37f603ae0e3b"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "adef5a95cf63335cf54ca30b7a02296d"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "92f5bea1364b620ba8998704190d948d"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "ec15a7a8ce8463202bf1c5d75218f918"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "43b5577981f07e8e497b90bb2cc55197"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "e4d265ff530623bbe1f46665daa524ed"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "58c28091d2cf6a6c749eaf50e1ca0407"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "813e0d5f9243948e26b600d75e58e0b3"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "10a9bf5339a625ca150511e76bf3f6fd"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "3315c8501a08d8a9ffa024008be67aa6"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "e664fe2b598d2d10b80f6a731f91416a"
  },
  {
    "url": "pages/da3888/index.html",
    "revision": "7a9207b530646bcdec96021777578611"
  },
  {
    "url": "pages/dc65bf/index.html",
    "revision": "384c60d8a274bbc7efe756fa8187bf04"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "8b9526cb96be12209ead0b80d4f0fb8f"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "cd0d5a64d5591a7d4c441b751cbe22e8"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "861adbc61f3047c23265f421248a52e6"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "26742f19adb75c3b536328237679dcc9"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "b313e7109c9b17caff440c51121f1b91"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "2c06bb983fc21c1b31f0a46f96251174"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "3f65e8e134b14762bb5a0cee2b8e3b42"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "8a3f80d2d013f504297564c2ca4e62c5"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "e26a9a0d8302d494c8bcf47133fc71ce"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "762933464d85187812fa8396084479e7"
  },
  {
    "url": "pages/f65105/index.html",
    "revision": "ba17cc67dc7714552f353eae3818a619"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "7147c233aa9482421efed406b465b6f2"
  },
  {
    "url": "preface/index.html",
    "revision": "8531d762200c6a0337f8f07651cc9ac6"
  },
  {
    "url": "rmmv-base-js-course/How-To-Get-Start/index.html",
    "revision": "649d6817dad44c0c62dec82b594e5a24"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "wang.zhan.shuo.ming.html",
    "revision": "f3b6d61d92bad0b96a081fec931716db"
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
