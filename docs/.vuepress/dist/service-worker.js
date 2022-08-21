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
    "revision": "757d94a6259404d1417f87b374c05fa3"
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
    "url": "assets/js/10.e799031a.js",
    "revision": "cf15b9646fae71ba70549e8e87310828"
  },
  {
    "url": "assets/js/11.4f8d13de.js",
    "revision": "a6f86045091862e28ea26bf2d85820c8"
  },
  {
    "url": "assets/js/12.334a3774.js",
    "revision": "9be690472759f76ec540fd081ec9c72f"
  },
  {
    "url": "assets/js/13.8788163c.js",
    "revision": "a0235df9d6446ed27f426dbfd45ea514"
  },
  {
    "url": "assets/js/14.bee31d63.js",
    "revision": "a930559336978344ecee942b924e6494"
  },
  {
    "url": "assets/js/15.c3b108ec.js",
    "revision": "fc03f5c58c799aa102b7d30841cccc31"
  },
  {
    "url": "assets/js/16.6ab8e6a9.js",
    "revision": "cb60cfbb2e06b5ed3a24e923751cff43"
  },
  {
    "url": "assets/js/17.73b519b9.js",
    "revision": "cd29dfa41c4a27ce8dff2a5b100482a6"
  },
  {
    "url": "assets/js/18.4b2be6a2.js",
    "revision": "950ba009bf0b41edf99c2189e2265c58"
  },
  {
    "url": "assets/js/19.84395ae5.js",
    "revision": "ec7094e2ec707fbc8501e435daaa4dad"
  },
  {
    "url": "assets/js/2.07725434.js",
    "revision": "ac71c983bf3f775cb8aa1f2b7a5f143e"
  },
  {
    "url": "assets/js/20.a5218398.js",
    "revision": "2f89dc2ef637a63db22cfa3a00adeee9"
  },
  {
    "url": "assets/js/21.cc35adfe.js",
    "revision": "9173e717bd3ca0d9c3f6493c76d4f288"
  },
  {
    "url": "assets/js/22.385d17e0.js",
    "revision": "eaff2c538bdd95d2f6de980d90db0d1e"
  },
  {
    "url": "assets/js/23.129aa5de.js",
    "revision": "efb9c3fa9549add9533e9b5c5600c50e"
  },
  {
    "url": "assets/js/24.32bc9541.js",
    "revision": "dd6ed138a7c5d6107a5254eb5e3cefd2"
  },
  {
    "url": "assets/js/25.27634da9.js",
    "revision": "e4364cbebff4534b814069835760a79d"
  },
  {
    "url": "assets/js/26.044ad02c.js",
    "revision": "0a34e5c1570204b4ada76e95f73970d9"
  },
  {
    "url": "assets/js/27.bf2dcc87.js",
    "revision": "5fd4d1578a0256acae43a47c1e0e7026"
  },
  {
    "url": "assets/js/28.6124c67a.js",
    "revision": "50bcb6028c829b2c310b7ce6ff6e6766"
  },
  {
    "url": "assets/js/29.0698da74.js",
    "revision": "b08ddd1eb8834c2a48832ee75447427c"
  },
  {
    "url": "assets/js/3.522be963.js",
    "revision": "e232bf391d3a124d03f323f659567464"
  },
  {
    "url": "assets/js/30.ed3ad21c.js",
    "revision": "00639327e2e4356e052bbfbba7211f3f"
  },
  {
    "url": "assets/js/31.8772805f.js",
    "revision": "3acfc3a3f5847a08e4094354fc8050ae"
  },
  {
    "url": "assets/js/32.f959d236.js",
    "revision": "b9cde47c1ccd8857821a7f0db53aeb6c"
  },
  {
    "url": "assets/js/33.1c58a05c.js",
    "revision": "83d0aa315f4305192944bbfdc2c96963"
  },
  {
    "url": "assets/js/34.5492ea2c.js",
    "revision": "4ae276ae313e606bb8fb9535a853bcbd"
  },
  {
    "url": "assets/js/35.3c659646.js",
    "revision": "ad8f6551391797c89803c486b5024729"
  },
  {
    "url": "assets/js/36.c4de72d6.js",
    "revision": "14b14740c76f3ff429bc7972b565e013"
  },
  {
    "url": "assets/js/37.9b5e22c0.js",
    "revision": "7c1d6334a258b8bd4878b85bb8a35935"
  },
  {
    "url": "assets/js/38.2aa4e379.js",
    "revision": "436164451939b62156f355c8d88eccce"
  },
  {
    "url": "assets/js/39.3719f45c.js",
    "revision": "1340eeebb8a6e6d5705c26d8434d8626"
  },
  {
    "url": "assets/js/4.43e5415d.js",
    "revision": "be0809ab98b84ebb06134eca0932a600"
  },
  {
    "url": "assets/js/40.fe187f71.js",
    "revision": "e1b0c4073cdd509f77ee3b143a4a7a47"
  },
  {
    "url": "assets/js/41.75366d30.js",
    "revision": "d13731290f241113bcf40d1149815927"
  },
  {
    "url": "assets/js/42.abbe48e9.js",
    "revision": "c54756f2bb41cf9d7b5746381890c589"
  },
  {
    "url": "assets/js/43.ffe916ae.js",
    "revision": "4b706f28218a208b3f71895cf9b7844c"
  },
  {
    "url": "assets/js/44.13caf985.js",
    "revision": "eabea490cfd0ac183ac6064f62fcb3e6"
  },
  {
    "url": "assets/js/45.8eff5c31.js",
    "revision": "0ee8810b84a09e31b59574eb28f8433e"
  },
  {
    "url": "assets/js/46.78a65703.js",
    "revision": "5d6b38b6408815ac125cb13a30b4b049"
  },
  {
    "url": "assets/js/47.d26b6a2f.js",
    "revision": "a5300fb88921cac1380f9acc944acea2"
  },
  {
    "url": "assets/js/48.4c0a57d9.js",
    "revision": "573d23ca89e5728b9c37c1855f201bef"
  },
  {
    "url": "assets/js/49.678203b2.js",
    "revision": "5ac252b5ff3757985e2c240dea2748f9"
  },
  {
    "url": "assets/js/5.e83109bd.js",
    "revision": "0b6d52b48a4151a27871b036ebfdace8"
  },
  {
    "url": "assets/js/50.ad848583.js",
    "revision": "6f4b9cdb23c6dfe8812f87af88a839f2"
  },
  {
    "url": "assets/js/51.96a15dba.js",
    "revision": "e10410c9506789c869fc4b54534540ab"
  },
  {
    "url": "assets/js/52.91aee44a.js",
    "revision": "4c9051b12abe6c07c3f1964a29c29b37"
  },
  {
    "url": "assets/js/53.85792035.js",
    "revision": "8c89b427a610e34a47b197bad81fc437"
  },
  {
    "url": "assets/js/54.5ba55dfd.js",
    "revision": "8539c6a645d0382160eb6da0962cdcd6"
  },
  {
    "url": "assets/js/55.c76042c5.js",
    "revision": "f44e1ab67b1a85140a29984b765cf167"
  },
  {
    "url": "assets/js/56.11d59b77.js",
    "revision": "e03939e04940c9158c383cd090aff365"
  },
  {
    "url": "assets/js/57.2d9bdbe3.js",
    "revision": "e204122f79690970e6c4656b81acb5e8"
  },
  {
    "url": "assets/js/58.da743aa0.js",
    "revision": "f222b8988d10962dc3ef148aacee2072"
  },
  {
    "url": "assets/js/59.31b85572.js",
    "revision": "f5630e95265cf824e2693ee9af641345"
  },
  {
    "url": "assets/js/6.4bffff26.js",
    "revision": "c55efc0281e853156ba199cafafaed7d"
  },
  {
    "url": "assets/js/60.6f4154e7.js",
    "revision": "f10f756ea67d80938667fd1b35d1fb23"
  },
  {
    "url": "assets/js/61.97a74dd9.js",
    "revision": "1da28861e754ff23f8d38d253fd64d8b"
  },
  {
    "url": "assets/js/62.a89c81e3.js",
    "revision": "71803de8fa0f0edeaa5424467409479e"
  },
  {
    "url": "assets/js/63.970a1db9.js",
    "revision": "8e19f9d741f24cc18f97ec3506eba998"
  },
  {
    "url": "assets/js/64.2e403ed8.js",
    "revision": "dec6bf019b0c52609a91b1b09ee5c075"
  },
  {
    "url": "assets/js/65.1a2c30c8.js",
    "revision": "605310466b08d8d79dfa2c4f66096154"
  },
  {
    "url": "assets/js/66.f0433e6b.js",
    "revision": "7aa0bc0dfb4b2b9576d28bbdd2f51d9a"
  },
  {
    "url": "assets/js/67.e48c3c8b.js",
    "revision": "3eace40e388db4dbd57684b7aaedc141"
  },
  {
    "url": "assets/js/68.bb821977.js",
    "revision": "5b9f550ca281de56997a835dc46ca0fa"
  },
  {
    "url": "assets/js/69.49f30aee.js",
    "revision": "0ff1306f612c6efa29863648943ba577"
  },
  {
    "url": "assets/js/7.0c4fd8c3.js",
    "revision": "6c9c2539899e771dca756d37277ae706"
  },
  {
    "url": "assets/js/70.31f05936.js",
    "revision": "afe2309ad3b49eae7a870bfb84c340a4"
  },
  {
    "url": "assets/js/71.4affc68f.js",
    "revision": "75cfa1190bb75ee07dcd1905dae1527f"
  },
  {
    "url": "assets/js/72.ad881831.js",
    "revision": "5a5194994dcdcc21b6dc67b7766e9f84"
  },
  {
    "url": "assets/js/73.b66402da.js",
    "revision": "f5974b0ca358e03f87120c25d62b3686"
  },
  {
    "url": "assets/js/74.feb8dd77.js",
    "revision": "b523c7a9a4706c37568ac6f10a865f9b"
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
    "url": "assets/js/8.f1b67d84.js",
    "revision": "c8e62d747e3afee8501d59a9311b487c"
  },
  {
    "url": "assets/js/9.7867c906.js",
    "revision": "f8ff2dad1c07a21b6303fd136efd932c"
  },
  {
    "url": "assets/js/app.1708bc3d.js",
    "revision": "fdae67a07e5d0db7652bbf0238243ea1"
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
    "url": "extend-tech/index.html",
    "revision": "849abbd18b84e8c13e15a54cb7562421"
  },
  {
    "url": "index.html",
    "revision": "4297a4f7618ca8769faf06baad25f813"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/01c73a/index.html",
    "revision": "b05afc9e32f40bd7a467807dc91b7799"
  },
  {
    "url": "pages/085ac6/index.html",
    "revision": "34447e1b2d16a001788073f1ea52db5c"
  },
  {
    "url": "pages/0e0ace/index.html",
    "revision": "529df97ebd31bd8aa8f5853135f2ab6c"
  },
  {
    "url": "pages/12e42e/index.html",
    "revision": "621623d28de022566e37230634ff1730"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "4e6c7ca668a78c2cec1eee14347fee6f"
  },
  {
    "url": "pages/1df150/index.html",
    "revision": "be7360dff6792a81d543bcebd6cd8bb7"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "2097dcf1f1c0cba546e39b02e11ef810"
  },
  {
    "url": "pages/28865b/index.html",
    "revision": "37f6cd729c4ddce8c174113072135b34"
  },
  {
    "url": "pages/2b7823/index.html",
    "revision": "cae73949c4bba5e7e2d9a03414799426"
  },
  {
    "url": "pages/2f9a95/index.html",
    "revision": "2f629e2d2725a0ce956d65f41afd3a47"
  },
  {
    "url": "pages/348e2c/index.html",
    "revision": "175bd6e36a94310f4b1f3f3bb30aefa6"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "681e91d9184dce0877d494ce245e1fbe"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "afe84ffcd59b371b5c5c971ef0153400"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "1b8c3380fe01e8c04d9f57893ebcf8dd"
  },
  {
    "url": "pages/452b27/index.html",
    "revision": "2487af69a1289befe3a4b48b488d6631"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "e8246ce0d2b3862dd254f988f013c057"
  },
  {
    "url": "pages/4ad23a/index.html",
    "revision": "8476f21ed5d4532f9ff31b86ab3ff1c4"
  },
  {
    "url": "pages/5e1760/index.html",
    "revision": "c8ea99031585bb1db8644561ba95008b"
  },
  {
    "url": "pages/5f5b7e/index.html",
    "revision": "7124d9c9f5256549d67d7f66f812c637"
  },
  {
    "url": "pages/65c0ee/index.html",
    "revision": "5ae59949e92914672d05078fda44fb74"
  },
  {
    "url": "pages/66713d/index.html",
    "revision": "eced3e108f5193385015de1c06febafa"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "d3364c8357d8d103b3e49978ecbbcffa"
  },
  {
    "url": "pages/68697d/index.html",
    "revision": "3a2507bccd4ba2e1960366db5c1d8b8a"
  },
  {
    "url": "pages/6dc096/index.html",
    "revision": "eec94bdab4e3b11307c5f918508ebb0a"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "0336b9060b85687f825f7deb01530d9c"
  },
  {
    "url": "pages/78348a/index.html",
    "revision": "c5330890d7bfbe5db7b31d7ad5755b47"
  },
  {
    "url": "pages/78ff99/index.html",
    "revision": "2c03441f7ab5515b5c1209f62e386348"
  },
  {
    "url": "pages/7b5691/index.html",
    "revision": "f6a3e7f056446af611bb4acbab66ff46"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "5a7496b62682f511a265e2f7566b6fe8"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "0d23e70b1ef1b7e7b1ef456b8b0f5457"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "0b706829ab8a41af7d6165a94e0aec51"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "4f6f4a9ffa2cc352ceb394016b5609d2"
  },
  {
    "url": "pages/94ea5d/index.html",
    "revision": "03a726bd3222f02901f4256b31e0fcba"
  },
  {
    "url": "pages/956375/index.html",
    "revision": "f35746bbf2f45fe2c751183cff5aeb83"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "4ca9f80a1aabc09b4dcd1c637582b75a"
  },
  {
    "url": "pages/a30fdf/index.html",
    "revision": "14f72b98b97175df9838964d1f692000"
  },
  {
    "url": "pages/a53f89/index.html",
    "revision": "c40b591baac847c3a4128da9e1ba1e73"
  },
  {
    "url": "pages/a6ca3a/index.html",
    "revision": "b066fe73a864d492e0baff001ebe8ddd"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "037760aac07de49d3c000ea36720768d"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "80241815c8bb58bd492d410d2a8ffa8d"
  },
  {
    "url": "pages/ad6a7b/index.html",
    "revision": "a868c3110b35284db51694025f8030f9"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "0b4a91dca50b49fdd9e788199fb74c46"
  },
  {
    "url": "pages/bc31e4/index.html",
    "revision": "3367560ed6205e2d138d26810c60f125"
  },
  {
    "url": "pages/be8a48/index.html",
    "revision": "a35341583dd587dd4f74604e1640f707"
  },
  {
    "url": "pages/c3ce51/index.html",
    "revision": "65be0a1807efbcb08912ca018684bd52"
  },
  {
    "url": "pages/c7ac92/index.html",
    "revision": "c25c8cd56288958592ae2b879718e1ed"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "bc249384a37f39585a68c6bf63388359"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "716053f6d2f20229d558b1ac4d893270"
  },
  {
    "url": "pages/d4b093/index.html",
    "revision": "67275f41ca57f5f49dec7b746e0397f4"
  },
  {
    "url": "pages/da3888/index.html",
    "revision": "425c6b77c7c2dfc1541a280b2f320605"
  },
  {
    "url": "pages/db673f/index.html",
    "revision": "78d3e5045e9ca517fe3f1e7d2071e74f"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "2d9bd2559d699c095e25aaf29277b279"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "fa0c5b4323c81301b76fac54d780fa18"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "28bee321e0fb708672b93d594e5c5952"
  },
  {
    "url": "pages/f34f1e/index.html",
    "revision": "197867c7de8adf864384ecfa72f1940c"
  },
  {
    "url": "pages/f7d977/index.html",
    "revision": "dd6cecf11d726307a527a9c745d9d08f"
  },
  {
    "url": "pages/fd5cfa/index.html",
    "revision": "055523062a78e7d483eb67d05c2384e8"
  },
  {
    "url": "pages/JavaScript/class-inherit-overwrite/index.html",
    "revision": "540e8f14529681c2b35d8ae2cb0f1bfd"
  },
  {
    "url": "pages/JavaScript/index.html",
    "revision": "dfd277e194a14fac8afafde9c11ae95b"
  },
  {
    "url": "reading-source-code/index.html",
    "revision": "ddb174cd369a47404a352818d91c3904"
  },
  {
    "url": "rmmv-base-js-course/How-To-Get-Start/index.html",
    "revision": "0e071b7e5260d2c1598e839339bf264e"
  },
  {
    "url": "rmmv-base-js-course/index.html",
    "revision": "859946cd9001d5a26513052e698f5461"
  },
  {
    "url": "rmmv-dev-todo-list/index.html",
    "revision": "768cfcbc6f89fb6ac328385c3c6939ee"
  },
  {
    "url": "rmmv-resource/index.html",
    "revision": "f0fcda92830be9ab1cfbceb553358fdd"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "vscode/settings-json-formatOnSave/index.html",
    "revision": "cbe534613c03c507662271f221bab571"
  },
  {
    "url": "vscode/shortcut-key/index.html",
    "revision": "2936596f075defc794b8b2774875aa1f"
  },
  {
    "url": "wang.zhan.shuo.ming.html",
    "revision": "af45ba29772a99b4b3245ba8d131ca27"
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
