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
    "revision": "a8867f290fc8b382baa110481a604771"
  },
  {
    "url": "assets/css/0.styles.6f42e752.css",
    "revision": "8fb0d0bc4489fb12ac5c47206230a8a0"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9d2f2a8b.js",
    "revision": "1a191f2db49c4f5ee642c052dd764512"
  },
  {
    "url": "assets/js/10.5afa144c.js",
    "revision": "f0a12c9ec13e7e9a61d4f10591e2b596"
  },
  {
    "url": "assets/js/11.339458fb.js",
    "revision": "9384a5cb9e82db4d7de36c478595c0f9"
  },
  {
    "url": "assets/js/12.cd4379d4.js",
    "revision": "1ca3034d2857e78a223bd675e73149d3"
  },
  {
    "url": "assets/js/13.4285e00a.js",
    "revision": "062df59c4b63b51071afa98a23be1b0a"
  },
  {
    "url": "assets/js/14.1a797dd5.js",
    "revision": "eafc767532d4122ab69245772bcda6b2"
  },
  {
    "url": "assets/js/15.82e614b2.js",
    "revision": "febb7c927e45b984a62ef109e30607c8"
  },
  {
    "url": "assets/js/16.f4244447.js",
    "revision": "68cbfd2181615aa8a32e58eff5559085"
  },
  {
    "url": "assets/js/17.b32a9acc.js",
    "revision": "f0c9340c3e74df7481d271b67f1ecf95"
  },
  {
    "url": "assets/js/18.67c6bdcb.js",
    "revision": "3ea488f0a106a1b7f2758105c7f2f964"
  },
  {
    "url": "assets/js/19.fa6e90d4.js",
    "revision": "beb16a72a7c1cb4d0f34567bbac90a2f"
  },
  {
    "url": "assets/js/20.cb8f9d5d.js",
    "revision": "83b69999a2bf05b8b81fcb25f5d08746"
  },
  {
    "url": "assets/js/21.92dcc356.js",
    "revision": "8b8ba14f7a0dcaea262bf9eb593bb450"
  },
  {
    "url": "assets/js/22.52c7f079.js",
    "revision": "721e0751d80b4588f5cbf49fb8ff9103"
  },
  {
    "url": "assets/js/23.fc8043a0.js",
    "revision": "7531fec119839bc39d101e5da0652424"
  },
  {
    "url": "assets/js/24.8dd23f89.js",
    "revision": "3c5f0a91e88a3586e327703fd7826027"
  },
  {
    "url": "assets/js/25.3cbafd64.js",
    "revision": "403bc54dc000f66a97b00fa4f586f02c"
  },
  {
    "url": "assets/js/26.2606f926.js",
    "revision": "fc47b7bbfc895ec6119b48a422a7c6c3"
  },
  {
    "url": "assets/js/27.caf98af1.js",
    "revision": "2ad5a28c2368e46257c6be30d7a82a16"
  },
  {
    "url": "assets/js/28.476b5333.js",
    "revision": "29ab25f283ff2a3dc427be23d149dd7e"
  },
  {
    "url": "assets/js/29.965aa8ea.js",
    "revision": "694a1083bcce1616b4e2a7da930ba8d2"
  },
  {
    "url": "assets/js/30.12e224ac.js",
    "revision": "7cc2030a03503e0d2e17119c00972ccc"
  },
  {
    "url": "assets/js/31.42b43d70.js",
    "revision": "469fe4fb5fe12ab8fd330632ce2f619a"
  },
  {
    "url": "assets/js/32.87a016fc.js",
    "revision": "3e9e8533a64ae8746bd7f48f682daf4d"
  },
  {
    "url": "assets/js/33.c92f6901.js",
    "revision": "6a7314676ff3a175725dd6f92e34f456"
  },
  {
    "url": "assets/js/34.eb479476.js",
    "revision": "2d388e63c65ff70422d536f8d99398e9"
  },
  {
    "url": "assets/js/35.a4fa738b.js",
    "revision": "032b973b437b0b75279a6fafc98f1ad8"
  },
  {
    "url": "assets/js/36.06253a36.js",
    "revision": "ccfdf97331c5682015bd729916392ce2"
  },
  {
    "url": "assets/js/37.1ba55081.js",
    "revision": "4012a2a88cc3586e19715e1daf1ec98e"
  },
  {
    "url": "assets/js/38.59fe26c5.js",
    "revision": "d2f293c766de86933d135dff076ff38d"
  },
  {
    "url": "assets/js/39.39f581c4.js",
    "revision": "a81801e66a1fc56f109c705cedfe6c98"
  },
  {
    "url": "assets/js/4.7947e889.js",
    "revision": "081d1cb3708cf52c15d48c9cba74c612"
  },
  {
    "url": "assets/js/40.22ad6dff.js",
    "revision": "e4c3434e0dac52b09a4ef9b44707f3b0"
  },
  {
    "url": "assets/js/41.5eedd8d9.js",
    "revision": "1f78ef5d5805e686dc708181391b2596"
  },
  {
    "url": "assets/js/42.45291c92.js",
    "revision": "88fb9f799ee5712595e4a0e6b09e07fc"
  },
  {
    "url": "assets/js/43.651e0506.js",
    "revision": "0aa7cae7f08d44a3796b4f9ba2e5439a"
  },
  {
    "url": "assets/js/44.e085d749.js",
    "revision": "464d83377e115ad66f8893af73708073"
  },
  {
    "url": "assets/js/45.2e6c7679.js",
    "revision": "4335a425b908c98cf5c3364a00b2ff8a"
  },
  {
    "url": "assets/js/46.521958f9.js",
    "revision": "8c74cba080c839530665cfb7c1b7cae3"
  },
  {
    "url": "assets/js/47.3f1b2810.js",
    "revision": "a8499dcdc9e33b05d840955c8d824073"
  },
  {
    "url": "assets/js/48.bc2f0ac6.js",
    "revision": "dbe50cf5cadb21df5c1666a07bf2b7c8"
  },
  {
    "url": "assets/js/49.09d04317.js",
    "revision": "3d32cde305262d3289dbd476cb5c84f9"
  },
  {
    "url": "assets/js/5.c453b6c9.js",
    "revision": "f34d7755be865280503a4dbbb7e56a65"
  },
  {
    "url": "assets/js/6.1a6269ad.js",
    "revision": "a7aa222f0d6b9f4ecf04ef8b23175436"
  },
  {
    "url": "assets/js/7.d17a0ab6.js",
    "revision": "59a5b3f7174bf23570c7cd97906eb218"
  },
  {
    "url": "assets/js/8.b5c67567.js",
    "revision": "a54145a9f1d41081ed26e0c6405e28e1"
  },
  {
    "url": "assets/js/9.98f05bf8.js",
    "revision": "d6834827ac40d0267d4668a9e1b197b0"
  },
  {
    "url": "assets/js/app.ea62cfa9.js",
    "revision": "58527c7af0c0a33109ff032e63542ccf"
  },
  {
    "url": "assets/js/vendors~docsearch.6081f62d.js",
    "revision": "e8486b43ec626a23cc6b842e708f122d"
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
    "revision": "b087f6329fb8e979954d0dbe14516fa2"
  },
  {
    "url": "cha-jian-kai-fa/cha-jian-kai-fa-de-ji-ben-gai-nian.html",
    "revision": "64d9433ea57338ce38a45278d157ccd3"
  },
  {
    "url": "cha-jian-kai-fa/index.html",
    "revision": "31e2f010f1ded8155dd10f3cbf3a7cf1"
  },
  {
    "url": "cha-jian-kai-fa/mvcha-jian-ji-ben-chang-shi.html",
    "revision": "9ba68c8acc4734a4d3553fb1a17031f2"
  },
  {
    "url": "cha-jian-kai-fa/mvxiang-mu-de-xing-zhi-yu-ding-wei.html",
    "revision": "58afc92eb91d02e9d8c7c209c445f4c2"
  },
  {
    "url": "cha-jian-kai-fa/mvyuan-ma-ji-ben-chang-shi.html",
    "revision": "8b0dcf3031e83aad0862d95add15de57"
  },
  {
    "url": "index.html",
    "revision": "2e2d3f5dffbd85063ab5394955f067bf"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-1zhang-rpg-maker-mvyi-ji-javascript/di-yi-zhang-rpg-maker-mvyi-ji-javascript.html",
    "revision": "1f614eb3c19e7b1ca88220b79c87e47e"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-1zhang-rpg-maker-mvyi-ji-javascript/index.html",
    "revision": "1e3efdfb7c4eb1b8e14be25f3a82ff03"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/1-ji-ben-yu-fa.html",
    "revision": "5c58a2c8a743409069c2ee424da98504"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/10-cuo-wu.html",
    "revision": "2e6e2fe8de1adb73bd0fc8e622d91006"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/2-javascriptyu-ju.html",
    "revision": "b13a0859453b8acd76bb041ddb16bc5c"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/3-javascriptde-bao-liu-zi.html",
    "revision": "3231470164f5eadddde368952d67d60c"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/4-bian-liang-he-shu-ju-lei-xing.html",
    "revision": "3cbeeac8334531247ed0a16f0656d16e"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/5-dui-xiang.html",
    "revision": "b956cb1946e041b8ac88892eac230566"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/6-han-shu.html",
    "revision": "e1cbf114f0b78fe7181ea1b0d9e93274"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/7-yun-suan-fu.html",
    "revision": "553f669ab0828316124879f5d670858e"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/8-if...else...yu-ju.html",
    "revision": "af15aec6c9735f0f60868d5b49e97f3b"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/9-xun-huan.html",
    "revision": "c4553f85c5d54804af81e8e2c196c558"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/index.html",
    "revision": "65731a73d826a504ed0bbeaad5ca94f3"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-3zhang-cha-jian-ji-cha-jian-can-shu-he-ming-ling/2-sui-ji-gou-mai-zhuang-bei-cha-jian.html",
    "revision": "7b0ea510f43065c8aeadcd8eaacda53c"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-3zhang-cha-jian-ji-cha-jian-can-shu-he-ming-ling/3-cha-jian-can-shu-he-ming-ling.html",
    "revision": "9e444d3e621348437baf2cdf3dfe754d"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-3zhang-cha-jian-ji-cha-jian-can-shu-he-ming-ling/index.html",
    "revision": "6831532e90218792ded80c719ccde064"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-4zhang-hui-zhi-chuang-kou/index.html",
    "revision": "c14b2a4db285ac3207bd8c2dc2b63fe2"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-7zhang-dai-zheng-li-de-xian-dai-hua-dai-ma-xie-fa/index.html",
    "revision": "e868c7353a50475d531c84693a8314fe"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/index.html",
    "revision": "957d6e68ab3537063069ff7286bb4163"
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
    "revision": "0e22dde39c86bb582e454ef1617b7637"
  },
  {
    "url": "timeline/index.html",
    "revision": "84ee54311b2e52846c6a213cb7a00109"
  },
  {
    "url": "tuo-zhan-ji-shu/ban-ben-kong-zhi.html",
    "revision": "b42f06fd281b814b28c5cc77d293c37d"
  },
  {
    "url": "tuo-zhan-ji-shu/index.html",
    "revision": "f8dc7aa13e5814602ff79454bdbc6e5e"
  },
  {
    "url": "tuo-zhan-ji-shu/jsdocwen-dang-sheng-cheng.html",
    "revision": "6d08d58e9a6ce55b382c5560ddfa1cb6"
  },
  {
    "url": "tuo-zhan-ji-shu/rang-chromeliu-lan-qi-zhi-chi-ben-di-fang-wen-shu-ju.html",
    "revision": "b06f18b99b939ef1a3489a03e4e14dea"
  },
  {
    "url": "tuo-zhan-ji-shu/vscodediao-shi-mv.html",
    "revision": "0045a732f648ef0d0be25213a56f9dc8"
  },
  {
    "url": "zai-ban-qian-yan.html",
    "revision": "87de5cfa88ef58eae4b3c8bbd6ad6971"
  },
  {
    "url": "zi-cha-zi-yuan/index.html",
    "revision": "9a9bb863912ff8f9b675a4966554c8c8"
  },
  {
    "url": "zi-cha-zi-yuan/kai-yuan-de-mvfen-lei-dai-ma.html",
    "revision": "bfeafe8636a9d712a2140a5c0e1be121"
  },
  {
    "url": "zi-cha-zi-yuan/qqqun-hao.html",
    "revision": "e8d2fbe099a19f39b7c0f201871d1cde"
  },
  {
    "url": "zi-cha-zi-yuan/rmmvru-men.html",
    "revision": "d4c80b0f6fd66d2a5e862f1da4474e49"
  },
  {
    "url": "zi-cha-zi-yuan/sui-bi.html",
    "revision": "343c79ffb7f6510022eeebe253a3d16c"
  },
  {
    "url": "zi-cha-zi-yuan/sundry.html",
    "revision": "274cf5b4168d8b8f047d01fecf11e693"
  },
  {
    "url": "zi-cha-zi-yuan/wang-zhan-zi-yuan.html",
    "revision": "7e59464c0300ef99fe2917ac40eb1909"
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
