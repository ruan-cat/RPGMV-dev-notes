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
    "revision": "3d05565910e9e61947018c09163996d0"
  },
  {
    "url": "assets/css/0.styles.c9f30356.css",
    "revision": "c20d4cf619dcb714bc077932386980ed"
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
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/1.3abb06d6.js",
    "revision": "88265a2fc1122317a4921dc69858d055"
  },
  {
    "url": "assets/js/10.cdad7a2e.js",
    "revision": "8523a4f383f6329cf4d63415cfc69d80"
  },
  {
    "url": "assets/js/11.711cd2ae.js",
    "revision": "fe708928415ddb8a1b96b9a6dd7b27e9"
  },
  {
    "url": "assets/js/12.11df9639.js",
    "revision": "92db606cc8727d40b9c34fbb2b0a8075"
  },
  {
    "url": "assets/js/13.6ce009db.js",
    "revision": "3f6f8ea07bd9e48171fb7c6334777ea2"
  },
  {
    "url": "assets/js/14.bf0a0215.js",
    "revision": "0b988695176372ea2250961929cf94bb"
  },
  {
    "url": "assets/js/15.a19ab77c.js",
    "revision": "5f409d5467c90fc2adc7bdb619c12921"
  },
  {
    "url": "assets/js/16.4ffa69d5.js",
    "revision": "7cb3ec39c4684ab17fb19f6cac2947d5"
  },
  {
    "url": "assets/js/17.d6e75f25.js",
    "revision": "07e8928e78a1d1fafd7744fd8337ac39"
  },
  {
    "url": "assets/js/18.ed6b95d0.js",
    "revision": "ebf84dbd850f8f682eaaa9cb3f0afd88"
  },
  {
    "url": "assets/js/19.955b4a7f.js",
    "revision": "0e85cd37a4375c205668288615daa05e"
  },
  {
    "url": "assets/js/20.cb8f9d5d.js",
    "revision": "83b69999a2bf05b8b81fcb25f5d08746"
  },
  {
    "url": "assets/js/21.2460f84a.js",
    "revision": "98405e2888f9e8928fa297aa574ec899"
  },
  {
    "url": "assets/js/22.b9b89b14.js",
    "revision": "91415f28339a0ac0a05298c92f5120ed"
  },
  {
    "url": "assets/js/23.062f3bdf.js",
    "revision": "506d6593084d20864e05b95a26f3b92e"
  },
  {
    "url": "assets/js/24.1d2a0038.js",
    "revision": "3dc55f7760935a44ca147bcdd4eb705a"
  },
  {
    "url": "assets/js/25.45bb476a.js",
    "revision": "ee35c29f8436a70548bc6c274a625310"
  },
  {
    "url": "assets/js/26.dbc2ce6e.js",
    "revision": "06fb5ae4accb79852daf2f901815c4eb"
  },
  {
    "url": "assets/js/27.b4691e27.js",
    "revision": "a289aa9fdf2060e403f00d5026353501"
  },
  {
    "url": "assets/js/28.bf12f0e5.js",
    "revision": "b85f3779ed5607ccd8a6c8e95e95f600"
  },
  {
    "url": "assets/js/29.66d1d4b9.js",
    "revision": "b9749e0f0fd70ceca1f73c10476a48cc"
  },
  {
    "url": "assets/js/30.6f740201.js",
    "revision": "f133c7537da4a2245629cd5c10918fa7"
  },
  {
    "url": "assets/js/31.679e7f65.js",
    "revision": "076921df4c8e86886c2c8fcfd80b8c73"
  },
  {
    "url": "assets/js/32.6dc46bbb.js",
    "revision": "7725e5b1223c96148526aa69d1ee043d"
  },
  {
    "url": "assets/js/33.0cf42627.js",
    "revision": "00cf7bf756d14b658d6981d4f2de135b"
  },
  {
    "url": "assets/js/34.42a7fad3.js",
    "revision": "16a5e45e48398abc62c6ef8d7ac18a91"
  },
  {
    "url": "assets/js/35.1b6b5489.js",
    "revision": "7d60af485f27e664b3f5ad0b893a528a"
  },
  {
    "url": "assets/js/36.e5bebcf2.js",
    "revision": "1cc4ffda0011927ef405982ae7fd9b74"
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
    "url": "assets/js/39.a19253c5.js",
    "revision": "46d1fe1aae91a722ba9555d5400858aa"
  },
  {
    "url": "assets/js/4.7a6983f9.js",
    "revision": "2faeeb249be3495b74705cc6d691820a"
  },
  {
    "url": "assets/js/40.d7764879.js",
    "revision": "daa6a822c80a30242fbef91f5880005e"
  },
  {
    "url": "assets/js/41.5eedd8d9.js",
    "revision": "1f78ef5d5805e686dc708181391b2596"
  },
  {
    "url": "assets/js/42.d5a11bdf.js",
    "revision": "ad6fbda3e90d73238bcc446933d81d22"
  },
  {
    "url": "assets/js/43.709c7a4f.js",
    "revision": "80bcb35f6fec2008eb5b8da5377c044f"
  },
  {
    "url": "assets/js/44.fcfeb4fa.js",
    "revision": "04d8a7e7833e21344949e7c1f9bbf386"
  },
  {
    "url": "assets/js/45.8c6b2fa8.js",
    "revision": "af1a3d23c6ce5b2d66046f6063174f43"
  },
  {
    "url": "assets/js/46.ba58d4e5.js",
    "revision": "24b96bc63103c04e25bc4b3ba470428e"
  },
  {
    "url": "assets/js/47.effaa5d1.js",
    "revision": "79a6a70ef86379b7ff57c66ba7fa88a4"
  },
  {
    "url": "assets/js/48.40f08643.js",
    "revision": "94b6135e46d34322091e7f0d00baaf2c"
  },
  {
    "url": "assets/js/49.07c30d49.js",
    "revision": "668bf90946eb752972f3beaf12368c9c"
  },
  {
    "url": "assets/js/5.39130320.js",
    "revision": "b3260ccd839c0fd0d1e5edac8f44691e"
  },
  {
    "url": "assets/js/6.b21d911e.js",
    "revision": "9a4a2a31444703fcd7d81da9975ef813"
  },
  {
    "url": "assets/js/7.5dc52484.js",
    "revision": "ad7869d30f2a20fefa57a9c9d3fc8b90"
  },
  {
    "url": "assets/js/8.f5ffbf2f.js",
    "revision": "02a59ae00056e72e3ff660fafc45d966"
  },
  {
    "url": "assets/js/9.61627308.js",
    "revision": "35c1df137400516d1211e10cb3d21a9a"
  },
  {
    "url": "assets/js/app.59bbc7b8.js",
    "revision": "f322d02bcf4241b4f7278fcc8e4b12fa"
  },
  {
    "url": "assets/js/vendors~docsearch.266ae147.js",
    "revision": "f1f627d6a7677978caaa4db44fb60a77"
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
    "revision": "5d3e0801745827ae8eccaa9b73ebaa0f"
  },
  {
    "url": "cha-jian-kai-fa/cha-jian-kai-fa-de-ji-ben-gai-nian.html",
    "revision": "787fc7ac87536f705649cf21a1f99abe"
  },
  {
    "url": "cha-jian-kai-fa/index.html",
    "revision": "24fab31dd02f1c8a1a30d95a089ea665"
  },
  {
    "url": "cha-jian-kai-fa/mvcha-jian-ji-ben-chang-shi.html",
    "revision": "e6d82aeedb802a2d7cad53391330ade5"
  },
  {
    "url": "cha-jian-kai-fa/mvxiang-mu-de-xing-zhi-yu-ding-wei.html",
    "revision": "41ed5935fe511a27b0e30a2015101517"
  },
  {
    "url": "cha-jian-kai-fa/mvyuan-ma-ji-ben-chang-shi.html",
    "revision": "c0b3907119ffe72afddf5d1ebd6d81db"
  },
  {
    "url": "index.html",
    "revision": "db13372bd78f9c0cea9c099102f49bbc"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-1zhang-rpg-maker-mvyi-ji-javascript/di-yi-zhang-rpg-maker-mvyi-ji-javascript.html",
    "revision": "e123351a0c928bf281c701d7329031ce"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-1zhang-rpg-maker-mvyi-ji-javascript/index.html",
    "revision": "2ce0e5e116e9cba7ced06708693eea65"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/1-ji-ben-yu-fa.html",
    "revision": "949d94b86a27910bbca099ae4af61c0a"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/10-cuo-wu.html",
    "revision": "8172008fdf25dbb581d9ee07ca75007b"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/2-javascriptyu-ju.html",
    "revision": "f798a54b2ace1e9978af8802c0aa7a3b"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/3-javascriptde-bao-liu-zi.html",
    "revision": "fb52a72cbafbb1d3d95e861837b0b600"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/4-bian-liang-he-shu-ju-lei-xing.html",
    "revision": "8180addd947c9134226329223091c505"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/5-dui-xiang.html",
    "revision": "08903d54057fae0b0606d8cbb6e52653"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/6-han-shu.html",
    "revision": "e1cc0a93809aca2b99b4a3f2b2d39aeb"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/7-yun-suan-fu.html",
    "revision": "0ceb7c7071ad904f6a5c34e532317ff3"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/8-if...else...yu-ju.html",
    "revision": "e54654e7495ec7c38ced9a96bca1f37c"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/9-xun-huan.html",
    "revision": "71e6d5a3c43a81ddf695e608faee8bbe"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/index.html",
    "revision": "a37767d6109d0e9abf68ea6aab3cefa0"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-3zhang-cha-jian-ji-cha-jian-can-shu-he-ming-ling/2-sui-ji-gou-mai-zhuang-bei-cha-jian.html",
    "revision": "259c36afd425da01ca343688532b9be5"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-3zhang-cha-jian-ji-cha-jian-can-shu-he-ming-ling/3-cha-jian-can-shu-he-ming-ling.html",
    "revision": "77b54664649d8a1be6fdb6f82d6fcf97"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-3zhang-cha-jian-ji-cha-jian-can-shu-he-ming-ling/index.html",
    "revision": "e9ab3f5c661ac29c73dc0fc8bb3b2ae7"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-4zhang-hui-zhi-chuang-kou/index.html",
    "revision": "ca44ddb58291b8a7f74f878900be82b4"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-7zhang-dai-zheng-li-de-xian-dai-hua-dai-ma-xie-fa/index.html",
    "revision": "e498bf63df3985ef44dd2f5d278f946c"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/index.html",
    "revision": "77c8810637c81e781493349c4175e790"
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
    "revision": "78906e138ffa342f26ed75332fc06a32"
  },
  {
    "url": "timeline/index.html",
    "revision": "017a27fddfaae3151463fe287ff50295"
  },
  {
    "url": "tuo-zhan-ji-shu/ban-ben-kong-zhi.html",
    "revision": "fbe24ab5ac681d7e5574eb84605e215b"
  },
  {
    "url": "tuo-zhan-ji-shu/index.html",
    "revision": "49ec74dd32484b2c6031974259cccc1e"
  },
  {
    "url": "tuo-zhan-ji-shu/jsdocwen-dang-sheng-cheng.html",
    "revision": "b0c1d2d5a5bf5ba20e6f4987b6b88e25"
  },
  {
    "url": "tuo-zhan-ji-shu/rang-chromeliu-lan-qi-zhi-chi-ben-di-fang-wen-shu-ju.html",
    "revision": "9ac916ccb9e1814962873d53d66b7ff3"
  },
  {
    "url": "tuo-zhan-ji-shu/vscodediao-shi-mv.html",
    "revision": "5ce38024860b46b1875bc6f09b373d13"
  },
  {
    "url": "zai-ban-qian-yan.html",
    "revision": "b619f355e86ee408755cccf4ba997f15"
  },
  {
    "url": "zi-cha-zi-yuan/index.html",
    "revision": "05981acdfcd54057a3f7ba47a3a2c672"
  },
  {
    "url": "zi-cha-zi-yuan/kai-yuan-de-mvfen-lei-dai-ma.html",
    "revision": "ef9dc930091d02ba9be249550df65b3d"
  },
  {
    "url": "zi-cha-zi-yuan/qqqun-hao.html",
    "revision": "ecae8c6df10d467744c1af3e0a1fbcee"
  },
  {
    "url": "zi-cha-zi-yuan/rmmvru-men.html",
    "revision": "e0e9f29cb4b7637410fee276b62b12e6"
  },
  {
    "url": "zi-cha-zi-yuan/sui-bi.html",
    "revision": "b714e5da3d1233bcd26743156963c1ef"
  },
  {
    "url": "zi-cha-zi-yuan/sundry.html",
    "revision": "430df9c64f26153cc8e55a9c901ea78c"
  },
  {
    "url": "zi-cha-zi-yuan/wang-zhan-zi-yuan.html",
    "revision": "e95da502963fa4245126d907461bb5e0"
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
