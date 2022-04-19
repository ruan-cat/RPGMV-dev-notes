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
    "revision": "3aad55239be7ef002a4ed2977dfc595a"
  },
  {
    "url": "assets/css/0.styles.f22fc67d.css",
    "revision": "91b95d5cc30e58c45a39064d47976ff7"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.95ffc84e.js",
    "revision": "23d2a2b489d7b785a881432642829cb6"
  },
  {
    "url": "assets/js/10.ddb0507f.js",
    "revision": "68666cbf945aaa257884787c174a90aa"
  },
  {
    "url": "assets/js/11.fad2e00e.js",
    "revision": "a83989b1d3499e1d4c1e8039ca07f5d2"
  },
  {
    "url": "assets/js/12.30a0de70.js",
    "revision": "8954468efecd5959e04b0e9eeb5cc7d6"
  },
  {
    "url": "assets/js/13.18459d5e.js",
    "revision": "ed94d5e2257490c455d29231589af346"
  },
  {
    "url": "assets/js/14.1e8e5f49.js",
    "revision": "4f79a09f2d356473d5e5d0be8298b40a"
  },
  {
    "url": "assets/js/15.d35e1178.js",
    "revision": "79d57d65b38a3efb5dbd5a59e63027ae"
  },
  {
    "url": "assets/js/16.ca943855.js",
    "revision": "07c2086b83b2858e9e06e3cd812b4c74"
  },
  {
    "url": "assets/js/17.47b4d790.js",
    "revision": "59eb959f75299577215156428698b67f"
  },
  {
    "url": "assets/js/18.dce320f9.js",
    "revision": "ffa913e75bc2b49846ceea9b90f577ab"
  },
  {
    "url": "assets/js/19.827d6949.js",
    "revision": "a0053b27891776f27506498d68f7b410"
  },
  {
    "url": "assets/js/20.d0647bb5.js",
    "revision": "d7af884b4af8fff42f53a81d5a07adb6"
  },
  {
    "url": "assets/js/21.b709429a.js",
    "revision": "71673d0901d5302dd6c62e14575da387"
  },
  {
    "url": "assets/js/22.50d9c944.js",
    "revision": "9d8f995561ae8c87990866bc9d583935"
  },
  {
    "url": "assets/js/23.6f9f822b.js",
    "revision": "7b4d443b375a19ba79e77b6b97b60ed3"
  },
  {
    "url": "assets/js/24.e4e3cc7d.js",
    "revision": "92b5353dd8c666e8b57aeb7644d61724"
  },
  {
    "url": "assets/js/25.a8178857.js",
    "revision": "cc587bb4aedb71e5f88f86c9cb38eb88"
  },
  {
    "url": "assets/js/26.2467a511.js",
    "revision": "4364e1ae0ada39d59052afe6e14b4bec"
  },
  {
    "url": "assets/js/27.0d21a05b.js",
    "revision": "d8ffb0b799ed134573baaf33e86be680"
  },
  {
    "url": "assets/js/28.fbe30682.js",
    "revision": "b5a28dec3be231b0e46baede9efff11f"
  },
  {
    "url": "assets/js/29.51ad9054.js",
    "revision": "39e9d024cfad2a57c9620cb09c687ed1"
  },
  {
    "url": "assets/js/30.09c9301c.js",
    "revision": "2993915e1e8d2471afa39c6b96886093"
  },
  {
    "url": "assets/js/31.d3179235.js",
    "revision": "4e0ed279a3522ae1b3b621a478544236"
  },
  {
    "url": "assets/js/32.1a9f24f9.js",
    "revision": "1d74662507907a5fe403ea6cc877e9d6"
  },
  {
    "url": "assets/js/33.8db5f3e2.js",
    "revision": "49f57c0d07053bc7a8411e103b88e974"
  },
  {
    "url": "assets/js/34.bd20738e.js",
    "revision": "84cf135f6357a93bf52c1e09df176747"
  },
  {
    "url": "assets/js/35.9f62b374.js",
    "revision": "9da4a815317be3f9d68edc9701b8e616"
  },
  {
    "url": "assets/js/36.a17a636e.js",
    "revision": "44975421a3425fc5743afa4c3523949b"
  },
  {
    "url": "assets/js/37.25af24be.js",
    "revision": "6bd7f6f9ae697a1dc261965982a70aea"
  },
  {
    "url": "assets/js/38.c400011a.js",
    "revision": "6b9df0325b80b7fd4ec0c35e1c3d19b5"
  },
  {
    "url": "assets/js/39.fa4dc089.js",
    "revision": "f818995fc4a725d2f6fd86bb77a5b57a"
  },
  {
    "url": "assets/js/4.3cd06552.js",
    "revision": "f07d67c74f2a28234566951c90e31e55"
  },
  {
    "url": "assets/js/40.0dc33fba.js",
    "revision": "353a25c7ac0fa0ecaaaa0bf38532503a"
  },
  {
    "url": "assets/js/41.9244a4fa.js",
    "revision": "6f60021c3b2a36f8a42cc45ea95b084e"
  },
  {
    "url": "assets/js/42.bf3ff6c8.js",
    "revision": "ed41c6bc41d2bd39a6e98dbcc20cd920"
  },
  {
    "url": "assets/js/43.0cd731ac.js",
    "revision": "e8c992cd129123da246f83ad277d0352"
  },
  {
    "url": "assets/js/44.ed335619.js",
    "revision": "8a55c9edbce874624ee5ca584ed0c379"
  },
  {
    "url": "assets/js/45.5c08e54a.js",
    "revision": "5e9b8a3b90c5785c146bb77e900cfb78"
  },
  {
    "url": "assets/js/46.fab61a8b.js",
    "revision": "264a85ef8fb69d8676aeec45b04efc4a"
  },
  {
    "url": "assets/js/47.3bb36ea5.js",
    "revision": "dde99bbae649c87b88cf591b5047db39"
  },
  {
    "url": "assets/js/48.1d325087.js",
    "revision": "609e07885a10512ab3fb218ef8bffae2"
  },
  {
    "url": "assets/js/49.c7d60dd3.js",
    "revision": "acf3de00edc4f1b1b8771812fc813977"
  },
  {
    "url": "assets/js/5.3a20b0e3.js",
    "revision": "e6423f64e6e99f8727c91c8bbc5fe747"
  },
  {
    "url": "assets/js/50.5e73be82.js",
    "revision": "07f1fdbf483196c71508d2bebd587a58"
  },
  {
    "url": "assets/js/51.c9704db4.js",
    "revision": "a7fe45e096926bcde343471e2afb2207"
  },
  {
    "url": "assets/js/52.6b697210.js",
    "revision": "2bb0824f7d3b0c98981fa524130da96b"
  },
  {
    "url": "assets/js/53.2228fd38.js",
    "revision": "c3efea17de35e1bac74f9e8947d2a446"
  },
  {
    "url": "assets/js/54.4848515d.js",
    "revision": "3bb5606a30640231b3665efcf5b967f8"
  },
  {
    "url": "assets/js/55.35834fb7.js",
    "revision": "b1f28c406c665151bb996a61a621fc5a"
  },
  {
    "url": "assets/js/56.8dc0ca2f.js",
    "revision": "b8d0c2eb2c59b70058731a3dac077695"
  },
  {
    "url": "assets/js/6.bad3bc12.js",
    "revision": "5a76cdad3092591bcca8e59545093a0c"
  },
  {
    "url": "assets/js/7.8c849a2c.js",
    "revision": "46f92f83460728f450ee0b83a6255887"
  },
  {
    "url": "assets/js/8.190da79f.js",
    "revision": "3daabd740572ece74a5042fbcd70dfae"
  },
  {
    "url": "assets/js/9.0df985d4.js",
    "revision": "6853ddf8667818f25df1d1d81ad7fe22"
  },
  {
    "url": "assets/js/app.aa6cff7a.js",
    "revision": "2f49c78cfbc805822ea96b78667cbef2"
  },
  {
    "url": "assets/js/vendors~docsearch.0c69ce13.js",
    "revision": "44da55b2aecea8e8e869c0d1acfda398"
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
    "url": "categories/index.html",
    "revision": "f0565af56c1a017f56835abbc6749d54"
  },
  {
    "url": "cha-jian-kai-fa/cha-jian-kai-fa-de-ji-ben-gai-nian.html",
    "revision": "ba32cf5e447fed36b4419fc789e970c5"
  },
  {
    "url": "cha-jian-kai-fa/index.html",
    "revision": "0fb3124561117af79e9c64429153c5b0"
  },
  {
    "url": "cha-jian-kai-fa/mvcha-jian-ji-ben-chang-shi.html",
    "revision": "d903993353c1d97bf610b909983a6249"
  },
  {
    "url": "cha-jian-kai-fa/mvxiang-mu-de-xing-zhi-yu-ding-wei.html",
    "revision": "5abf1338076ff8d3124fe1e6d2eb7553"
  },
  {
    "url": "cha-jian-kai-fa/mvyuan-ma-ji-ben-chang-shi.html",
    "revision": "e263b9fdedc139d09b81d85a6dc06f65"
  },
  {
    "url": "index.html",
    "revision": "f51dd7e1e91a5c4d0e65ad716db77aff"
  },
  {
    "url": "javascript/index.html",
    "revision": "e73efb614fe7dc83780a2e2594897ad1"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-1zhang-rpg-maker-mvyi-ji-javascript/di-yi-zhang-rpg-maker-mvyi-ji-javascript.html",
    "revision": "d7de72a4dbbd7ddeffcd8bfa66be8a92"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-1zhang-rpg-maker-mvyi-ji-javascript/index.html",
    "revision": "bc52840e23bdde7f505185b9b0fa7d6e"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/1-ji-ben-yu-fa.html",
    "revision": "83ac857c701dbeae7c491a0837e26caf"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/10-cuo-wu.html",
    "revision": "0a8cf34f745f96807047262af898bc69"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/2-javascriptyu-ju.html",
    "revision": "3f2dc18742254cae27da96c8a51a582c"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/3-javascriptde-bao-liu-zi.html",
    "revision": "8ef051ade1740d900979c89b28b3078a"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/4-bian-liang-he-shu-ju-lei-xing.html",
    "revision": "b2efbc3795def537c2a273c52e2d61f5"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/5-dui-xiang.html",
    "revision": "ce89230387366811986c995b2cf06f90"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/6-han-shu.html",
    "revision": "aac07ea07728f29a11f748a644f66ce8"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/7-yun-suan-fu.html",
    "revision": "02248ccdb6a21f3746668fbe70b49c80"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/8-if...else...yu-ju.html",
    "revision": "c6ccdf2b1eb62d8c76185d9df2e60513"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/9-xun-huan.html",
    "revision": "08a943021fb2d8ca03169c36fd6aa668"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/index.html",
    "revision": "20d847eb538ac0ba4976a511e268584e"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-3zhang-cha-jian-ji-cha-jian-can-shu-he-ming-ling/2-sui-ji-gou-mai-zhuang-bei-cha-jian.html",
    "revision": "d0ebce21ca3f41a2f0123e5174a0bda4"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-3zhang-cha-jian-ji-cha-jian-can-shu-he-ming-ling/3-cha-jian-can-shu-he-ming-ling.html",
    "revision": "c05a2d65c2c3c21c97d7a5527e0b6ee3"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-3zhang-cha-jian-ji-cha-jian-can-shu-he-ming-ling/index.html",
    "revision": "e5a649391580a33bcd7f924a6972e152"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-4zhang-hui-zhi-chuang-kou/index.html",
    "revision": "e2d1793a92377a49be8459583f8bcbdc"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-7zhang-dai-zheng-li-de-xian-dai-hua-dai-ma-xie-fa/index.html",
    "revision": "c14481624c08301ec39fbd07eed13ea8"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/index.html",
    "revision": "e831014f2cfd4fd0a026b8781777a22a"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "tag/index.html",
    "revision": "a08a4029a83a97ea58d5e66543400036"
  },
  {
    "url": "timeline/index.html",
    "revision": "02e88549221d33547b3a303cf7b29710"
  },
  {
    "url": "tuo-zhan-ji-shu/ban-ben-kong-zhi.html",
    "revision": "7126ed297305de91b7b59ba2cdcadda6"
  },
  {
    "url": "tuo-zhan-ji-shu/index.html",
    "revision": "f0b5d833bceebfc4b9f66f666b261a5e"
  },
  {
    "url": "tuo-zhan-ji-shu/jsdocwen-dang-sheng-cheng.html",
    "revision": "c21e7940cab058ee5d2868e0e1626a83"
  },
  {
    "url": "tuo-zhan-ji-shu/rang-chromeliu-lan-qi-zhi-chi-ben-di-fang-wen-shu-ju.html",
    "revision": "e8d1deb851e70348ef99cdfc905c1d5c"
  },
  {
    "url": "tuo-zhan-ji-shu/vscodediao-shi-mv.html",
    "revision": "c7d87adb1edf5be3021e787f44629375"
  },
  {
    "url": "tuo-zhan-ji-shu/vscodeshi-yong-kuai-jie-jian.html",
    "revision": "0494bfd6c62a36c8edef04da2f67a5cc"
  },
  {
    "url": "typescript/index.html",
    "revision": "dd167250af4404330fb299cfee4f9c0b"
  },
  {
    "url": "vue-elementui/iconyin-ru-a-li-ba-ba-tu-biao-ku.html",
    "revision": "0e10fa8798fa20c9653b818dedad1e21"
  },
  {
    "url": "vue-elementui/index.html",
    "revision": "b6e7885847bddbea06af3929c43ef1f9"
  },
  {
    "url": "vue-elementui/xiang-mu-gong-gong-gong-ju-shi-yong-shuo-ming-shu.html",
    "revision": "d3098c063d1148e6df3e31fc05da8ef6"
  },
  {
    "url": "vue-elementui/zu-jian-chuan-di-can-shu.html",
    "revision": "554496d943becb246ef251d78fd804b5"
  },
  {
    "url": "zai-ban-qian-yan.html",
    "revision": "59d0a3d2d37edf4426a9e44692211984"
  },
  {
    "url": "zi-cha-zi-yuan/index.html",
    "revision": "4f7a19c78d1ecb81537b72098951be5f"
  },
  {
    "url": "zi-cha-zi-yuan/kai-yuan-de-mvfen-lei-dai-ma.html",
    "revision": "505f7001f728f0b4f4478ac1e87273a4"
  },
  {
    "url": "zi-cha-zi-yuan/qqqun-hao.html",
    "revision": "74e3c0c58a1c21ce0ef2f39923fe5131"
  },
  {
    "url": "zi-cha-zi-yuan/rmmvru-men.html",
    "revision": "2eea258749ecbe36531827b20087c3c6"
  },
  {
    "url": "zi-cha-zi-yuan/sui-bi.html",
    "revision": "0edb3641f445ef5b82960bfecfc8847a"
  },
  {
    "url": "zi-cha-zi-yuan/sundry.html",
    "revision": "0903fbb6b8b3c69d3feae4a4cd371ede"
  },
  {
    "url": "zi-cha-zi-yuan/wang-zhan-zi-yuan.html",
    "revision": "0c2af2fdf3315aadadfc6764606697b5"
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
