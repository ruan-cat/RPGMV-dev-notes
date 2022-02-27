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
    "revision": "df233096cd733f4d276abc48ff428363"
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
    "url": "assets/js/10.9b399460.js",
    "revision": "6994d2f37407bda414ad112f8c41bcc9"
  },
  {
    "url": "assets/js/11.bd5c5770.js",
    "revision": "61816b5071129a3ee958bd3fb1b43e7a"
  },
  {
    "url": "assets/js/12.dd5f46aa.js",
    "revision": "c47d2b581118ee452d50e8b214643d08"
  },
  {
    "url": "assets/js/13.20627d24.js",
    "revision": "bf18f103144ccfb74dbd2a2ff1c81339"
  },
  {
    "url": "assets/js/14.c9db83b8.js",
    "revision": "d79b65933bf99749f7f42d02f2d8f0f4"
  },
  {
    "url": "assets/js/15.a81445a6.js",
    "revision": "4082b796eb7f30130802ae59dd5d1e03"
  },
  {
    "url": "assets/js/16.b8fd0200.js",
    "revision": "44e9b6cb5df8ad3cba72a6fdea19a47d"
  },
  {
    "url": "assets/js/17.11d3837c.js",
    "revision": "bc1d2607fe2642e29832c4a853524226"
  },
  {
    "url": "assets/js/18.1708cb7d.js",
    "revision": "112d94d14e3556e5c4bb5af4f9a7cfae"
  },
  {
    "url": "assets/js/19.7a661634.js",
    "revision": "5a043590d068efb7122a317839946a05"
  },
  {
    "url": "assets/js/20.e9e0aa4c.js",
    "revision": "554a8c135d1007a1c545fa845820c70b"
  },
  {
    "url": "assets/js/21.d3e5a7de.js",
    "revision": "095a5a1aa5fc9500dbdfd069d98af062"
  },
  {
    "url": "assets/js/22.185bef6b.js",
    "revision": "aeecb59128238b7cd85d33f5743986e7"
  },
  {
    "url": "assets/js/23.8884f85b.js",
    "revision": "ee9dfdd09a1f8e65bed2b245e669f0b1"
  },
  {
    "url": "assets/js/24.9ba8262f.js",
    "revision": "4d2c22563d4fdb844478b7ebd4add4c6"
  },
  {
    "url": "assets/js/25.6a125628.js",
    "revision": "98f35de73f591e2dafaa3d81705e5853"
  },
  {
    "url": "assets/js/26.04cbc4ad.js",
    "revision": "1098205e4c62c262d70734065f5903bf"
  },
  {
    "url": "assets/js/27.3ed7d09f.js",
    "revision": "de83944452d2d66938d8e5d8b75e5f73"
  },
  {
    "url": "assets/js/28.ff979b4a.js",
    "revision": "9265a06ed0ac38a8f5539713c727245d"
  },
  {
    "url": "assets/js/29.cf37d8c2.js",
    "revision": "42ed333e8e5ce5979049496e5020d7a5"
  },
  {
    "url": "assets/js/30.b63c0272.js",
    "revision": "4c07615fe842727a753836a031545961"
  },
  {
    "url": "assets/js/31.d7ae915d.js",
    "revision": "f0ded3e8e4d3d7b080543a5df219f14a"
  },
  {
    "url": "assets/js/32.a5dd19ce.js",
    "revision": "73ce0a381c6622b197955e7e061339ed"
  },
  {
    "url": "assets/js/33.301c4dc1.js",
    "revision": "07de0f0b8e4060d0648a7f7b2c11acd5"
  },
  {
    "url": "assets/js/34.faae8613.js",
    "revision": "1d30782ce6be59a1ae1c82ea3a2a7cd2"
  },
  {
    "url": "assets/js/35.4a5f07f9.js",
    "revision": "97b418e25cb0c7e995ca3c4a9e19f604"
  },
  {
    "url": "assets/js/36.6f73ef10.js",
    "revision": "13ce3171627398d657d0a98a5dfc66fd"
  },
  {
    "url": "assets/js/37.ac0758fa.js",
    "revision": "4abad5536fe3d9d94d5b28f37c34e7e3"
  },
  {
    "url": "assets/js/38.f4b79a0d.js",
    "revision": "b57da3974b48463a0593853a4651b2cc"
  },
  {
    "url": "assets/js/39.2e8cdb02.js",
    "revision": "9f863a2d7613babf3f453432013aca60"
  },
  {
    "url": "assets/js/4.3cd06552.js",
    "revision": "f07d67c74f2a28234566951c90e31e55"
  },
  {
    "url": "assets/js/40.e1e2d250.js",
    "revision": "b1b6e72f5de2ccb6d0e0d871b6b8944b"
  },
  {
    "url": "assets/js/41.e7264ad4.js",
    "revision": "ed26e65e5a3277aa9e26acb4e02d2e93"
  },
  {
    "url": "assets/js/42.51990e7e.js",
    "revision": "47a85d663d96516525514c257116fc35"
  },
  {
    "url": "assets/js/43.05e1ce68.js",
    "revision": "3d9e0c580f341d242a1594af92afa389"
  },
  {
    "url": "assets/js/44.781b58a8.js",
    "revision": "4adf77ad3bbbdbb058435fa11ff3fc0d"
  },
  {
    "url": "assets/js/45.f3774122.js",
    "revision": "0b5ca5f405d19cdb1f25428fd44554b4"
  },
  {
    "url": "assets/js/46.3f6f50de.js",
    "revision": "303844b3db651b88dd55b7af49b67d11"
  },
  {
    "url": "assets/js/47.8095d4c9.js",
    "revision": "1ecd9284e820ce09606a8e8d4508596e"
  },
  {
    "url": "assets/js/48.89ab5b4e.js",
    "revision": "333f665660c0e60976e574173e8cd8b2"
  },
  {
    "url": "assets/js/49.60df5a42.js",
    "revision": "61df41a81c53e430a827367baeaee3af"
  },
  {
    "url": "assets/js/5.3a20b0e3.js",
    "revision": "e6423f64e6e99f8727c91c8bbc5fe747"
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
    "url": "assets/js/app.517ee304.js",
    "revision": "aa481bb94d6a9a183eb2c421783fb7cd"
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
    "revision": "04d2380084802aa0de5147f67bd8313f"
  },
  {
    "url": "cha-jian-kai-fa/cha-jian-kai-fa-de-ji-ben-gai-nian.html",
    "revision": "64b239f2da526b42cd2d80c9180810d3"
  },
  {
    "url": "cha-jian-kai-fa/index.html",
    "revision": "c8b5b03d8e5469502e5dd97aef909cd6"
  },
  {
    "url": "cha-jian-kai-fa/mvcha-jian-ji-ben-chang-shi.html",
    "revision": "8805d251f83f4929fa955d10c2bc072e"
  },
  {
    "url": "cha-jian-kai-fa/mvxiang-mu-de-xing-zhi-yu-ding-wei.html",
    "revision": "186a5122fa96160bd32ee2435e5ac0c0"
  },
  {
    "url": "cha-jian-kai-fa/mvyuan-ma-ji-ben-chang-shi.html",
    "revision": "81154582c9bfe0316c861d2ba7451053"
  },
  {
    "url": "index.html",
    "revision": "d48858faac2289c2cf6ac103667b68fa"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-1zhang-rpg-maker-mvyi-ji-javascript/di-yi-zhang-rpg-maker-mvyi-ji-javascript.html",
    "revision": "f4c1a691b57c7fdcb4c10a85572c5672"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-1zhang-rpg-maker-mvyi-ji-javascript/index.html",
    "revision": "cae97b4a50c59f4f3ba230462606c18b"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/1-ji-ben-yu-fa.html",
    "revision": "8521c64dd212efb1f8dbcc4d3ca6347e"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/10-cuo-wu.html",
    "revision": "d7ccfdd651d119e17509af1edd1fb366"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/2-javascriptyu-ju.html",
    "revision": "7f01b6ecf75481185d48f1070b2d30eb"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/3-javascriptde-bao-liu-zi.html",
    "revision": "a1cf78c235e14b0babb0557715612cc2"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/4-bian-liang-he-shu-ju-lei-xing.html",
    "revision": "3349c371a432543ab13f3e02b8f85cea"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/5-dui-xiang.html",
    "revision": "8b6c41f8d9d2047ff86256833a389ab8"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/6-han-shu.html",
    "revision": "6e7e5fdbe9452f79a022d1ee7675432a"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/7-yun-suan-fu.html",
    "revision": "17663f5f997b19759207b5b776c55995"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/8-if...else...yu-ju.html",
    "revision": "cca365662e1cdcc9b7f3c43dd383b25c"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/9-xun-huan.html",
    "revision": "a4732d5e3203dcd2f625284615d62ede"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-2zhang-javascriptji-chu-zhi-shi/index.html",
    "revision": "6054d29985bd658ebe90d966e66e14c9"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-3zhang-cha-jian-ji-cha-jian-can-shu-he-ming-ling/2-sui-ji-gou-mai-zhuang-bei-cha-jian.html",
    "revision": "efbdfae0422ca62c51434346814f6dab"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-3zhang-cha-jian-ji-cha-jian-can-shu-he-ming-ling/3-cha-jian-can-shu-he-ming-ling.html",
    "revision": "850000dfd2176ad21f17e6c3062e6f7d"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-3zhang-cha-jian-ji-cha-jian-can-shu-he-ming-ling/index.html",
    "revision": "a17d617eb4044536937af08fead2e9a0"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-4zhang-hui-zhi-chuang-kou/index.html",
    "revision": "9d1a76857cc272738e646e4f8593dba9"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/di-7zhang-dai-zheng-li-de-xian-dai-hua-dai-ma-xie-fa/index.html",
    "revision": "0e92e20ff5f449a6e90b4864cfb95c77"
  },
  {
    "url": "ji-yu-mvde-javascriptji-chu/index.html",
    "revision": "9b2039b4ef070ac80616de15c270f856"
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
    "revision": "67f6c5cba7062578df25c32bab016a98"
  },
  {
    "url": "timeline/index.html",
    "revision": "4644e47a2ffeae3cdd574a1a1eb2b0cf"
  },
  {
    "url": "tuo-zhan-ji-shu/ban-ben-kong-zhi.html",
    "revision": "91ea8d3befcf1c83129e9b07205c6f63"
  },
  {
    "url": "tuo-zhan-ji-shu/index.html",
    "revision": "5ddbfee93a286d23ade52433ba2a6ac8"
  },
  {
    "url": "tuo-zhan-ji-shu/jsdocwen-dang-sheng-cheng.html",
    "revision": "ff1f14805861fbb7192295c641fc287b"
  },
  {
    "url": "tuo-zhan-ji-shu/rang-chromeliu-lan-qi-zhi-chi-ben-di-fang-wen-shu-ju.html",
    "revision": "def005af8cea5afdd3d34e5e6ffedf14"
  },
  {
    "url": "tuo-zhan-ji-shu/vscodediao-shi-mv.html",
    "revision": "ac812734bcba433f67b52a9c99ba79a2"
  },
  {
    "url": "zai-ban-qian-yan.html",
    "revision": "36c8fe6675e0c0c970f1ceadcce82a45"
  },
  {
    "url": "zi-cha-zi-yuan/index.html",
    "revision": "b49e3264fb398b925efe7343b3792248"
  },
  {
    "url": "zi-cha-zi-yuan/kai-yuan-de-mvfen-lei-dai-ma.html",
    "revision": "08ec4ca6f5241fd8322080fad3901627"
  },
  {
    "url": "zi-cha-zi-yuan/qqqun-hao.html",
    "revision": "925f8f7c6e3f2b8eb0c4d318b206d24d"
  },
  {
    "url": "zi-cha-zi-yuan/rmmvru-men.html",
    "revision": "0c749929c2ea07d30b4b5363517cc726"
  },
  {
    "url": "zi-cha-zi-yuan/sui-bi.html",
    "revision": "b0a585ab03e48a85ee2f429e6dc7e223"
  },
  {
    "url": "zi-cha-zi-yuan/sundry.html",
    "revision": "5816c7e71984935b9a3d1a0baac4b5c0"
  },
  {
    "url": "zi-cha-zi-yuan/wang-zhan-zi-yuan.html",
    "revision": "ee94aceb33aaa2816d02573b6bc0cf8b"
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
