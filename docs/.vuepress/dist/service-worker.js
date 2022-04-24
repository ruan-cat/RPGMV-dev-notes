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
    "revision": "200c32ac200399fdf9c02f16ce2980bd"
  },
  {
    "url": "archives/index.html",
    "revision": "81057a45141e21c953e66bca5156a705"
  },
  {
    "url": "assets/css/0.styles.8c2bffe1.css",
    "revision": "98635637f883cb80e5b7bd4c779e1cde"
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
    "url": "assets/js/10.61b646c0.js",
    "revision": "f226d80ea5bb357fa4bccef9ce80c2e4"
  },
  {
    "url": "assets/js/11.7b58a37a.js",
    "revision": "ff633dc9c5d71c3876ef66868a64cf1a"
  },
  {
    "url": "assets/js/12.76544af3.js",
    "revision": "7298e314b1a547eaa747d453409f6403"
  },
  {
    "url": "assets/js/13.0e04d698.js",
    "revision": "42f8e1e23612358dfdb58bf8be54b564"
  },
  {
    "url": "assets/js/14.0737a7f6.js",
    "revision": "fa3447218d3f22342cce3708fbcf9f7b"
  },
  {
    "url": "assets/js/15.da4b00b3.js",
    "revision": "53e5ca5cb7f2dfe12f1785a65ada594e"
  },
  {
    "url": "assets/js/16.ff716ca1.js",
    "revision": "004b1583d834009b4bf1eb30f439c829"
  },
  {
    "url": "assets/js/17.3b396a19.js",
    "revision": "65604c3ab0b080fd860a744244b8ad60"
  },
  {
    "url": "assets/js/18.a68a5532.js",
    "revision": "80c9940ef6de809bcb0e890d5d9c0451"
  },
  {
    "url": "assets/js/19.e204449b.js",
    "revision": "14ff134c05f9ffaf1bfef55916e5eeca"
  },
  {
    "url": "assets/js/2.c2bd81e7.js",
    "revision": "c743eaf797724ddde19b3841e08c7c2e"
  },
  {
    "url": "assets/js/20.81c6c40a.js",
    "revision": "5c2306ff5753d624c4ef00d4e0d1ea39"
  },
  {
    "url": "assets/js/21.0ad1e0b2.js",
    "revision": "6e827175210ec2297ff68c8af83faf68"
  },
  {
    "url": "assets/js/22.f2740cdf.js",
    "revision": "8d0331471901a05efeae81a6662742c8"
  },
  {
    "url": "assets/js/23.b335ccd8.js",
    "revision": "62aaf429940885fd25d57838a3b22ea0"
  },
  {
    "url": "assets/js/24.8032bea4.js",
    "revision": "a5c03b775d1c579d2234c82622643cbd"
  },
  {
    "url": "assets/js/25.b09d60ed.js",
    "revision": "e40aa76ed2f5ceef82fee99152072fb6"
  },
  {
    "url": "assets/js/26.4c258c5a.js",
    "revision": "2639a6d8b30a90ee4ab96e6297ef317f"
  },
  {
    "url": "assets/js/27.24a68589.js",
    "revision": "1acd71e439f7f5d6b98f699c4616a15a"
  },
  {
    "url": "assets/js/28.8ef9ccf3.js",
    "revision": "6123d899a2ae0a7c01090e1a58b8cda3"
  },
  {
    "url": "assets/js/29.ebfdf8ac.js",
    "revision": "d44f6c5adfa0d0ac7f492cfbcb2be9fc"
  },
  {
    "url": "assets/js/3.dc3d1b81.js",
    "revision": "969a8b689b62c39f6ddda768f1b37d81"
  },
  {
    "url": "assets/js/30.a0097a3c.js",
    "revision": "eb18f757001a2d5671eec01775df5ea3"
  },
  {
    "url": "assets/js/31.601ae558.js",
    "revision": "9f6eba5096c53b16a0f4f0f205d87399"
  },
  {
    "url": "assets/js/32.1303b90d.js",
    "revision": "0f835b13520e210177e333cd6d432bc8"
  },
  {
    "url": "assets/js/33.754f8ca9.js",
    "revision": "abc94a4b221c24b094a779116b9d2ef7"
  },
  {
    "url": "assets/js/34.b6d94a24.js",
    "revision": "b12bd2cb57bae682e34f607dd24e4d82"
  },
  {
    "url": "assets/js/35.607699b4.js",
    "revision": "840fbbf610b07fcf083d48c23c4b3f7a"
  },
  {
    "url": "assets/js/36.09c219d4.js",
    "revision": "c8de80a9aacbb9b90f960c9a30f2a0d2"
  },
  {
    "url": "assets/js/37.b939e8bb.js",
    "revision": "40b856b052e4809544235eaefa687ad7"
  },
  {
    "url": "assets/js/38.89a89a66.js",
    "revision": "57d9dc7bfd70523d3b5683e88d0288f0"
  },
  {
    "url": "assets/js/39.a17d72e3.js",
    "revision": "a1a6ac9071e547258d8df989e433465f"
  },
  {
    "url": "assets/js/4.28334808.js",
    "revision": "a2e1bccebeeec5ec1e66653ba801f12e"
  },
  {
    "url": "assets/js/40.9031222c.js",
    "revision": "ff6b777eb96dd01bed34f852a1b14ce4"
  },
  {
    "url": "assets/js/41.224b1940.js",
    "revision": "69a26f662a3439e3f896862261f6986a"
  },
  {
    "url": "assets/js/42.3ed802ed.js",
    "revision": "1fb9f9f67cc75f2b484f7251abf6300e"
  },
  {
    "url": "assets/js/43.2f68a529.js",
    "revision": "f0f538e8b8372e5ae3625644505d4d15"
  },
  {
    "url": "assets/js/44.c250aadc.js",
    "revision": "3950fc8eab84c83dd4a4b09fabe49a48"
  },
  {
    "url": "assets/js/45.5805debb.js",
    "revision": "0ccc0a786b7ac537487bf9c1dede1bcf"
  },
  {
    "url": "assets/js/46.de3096c8.js",
    "revision": "6a5ef201724ec696a62575241e0bf104"
  },
  {
    "url": "assets/js/47.6e8a3bb0.js",
    "revision": "e62a9ed3342a3eaf7692c1892f2f3d35"
  },
  {
    "url": "assets/js/48.aecae474.js",
    "revision": "3ebf96d8a5fd5a88281e2e3bdb79894d"
  },
  {
    "url": "assets/js/49.7025bcca.js",
    "revision": "b445da1333b368f38b02f9470e2f05b8"
  },
  {
    "url": "assets/js/5.d3091141.js",
    "revision": "62ad73c88384fc33f3a55b14df07340f"
  },
  {
    "url": "assets/js/50.4bf251fa.js",
    "revision": "c342fc836852028c82504c91b0b72558"
  },
  {
    "url": "assets/js/51.d905cb5d.js",
    "revision": "e11644a01d04a848866e303e36f7171a"
  },
  {
    "url": "assets/js/52.a3ebbeee.js",
    "revision": "e5d42db66d01a27931cc258296579def"
  },
  {
    "url": "assets/js/53.4435d8f5.js",
    "revision": "db5d63eb1c5475cb9b4327ae35dcb6a9"
  },
  {
    "url": "assets/js/54.fbb436b6.js",
    "revision": "0f38ef79c3f4081333920c4c3989bab2"
  },
  {
    "url": "assets/js/55.d5ac7f89.js",
    "revision": "d47374e46f50e5f872886fb2ec6a86d5"
  },
  {
    "url": "assets/js/56.b20f3195.js",
    "revision": "9d2d0302076f328ddffa9c4dac0f1884"
  },
  {
    "url": "assets/js/57.6b88c17e.js",
    "revision": "e2439361d92ba368b9eb8f70296aeec7"
  },
  {
    "url": "assets/js/58.79abc96c.js",
    "revision": "84adb8f0c4ed9daa8251bf9815bf2ed5"
  },
  {
    "url": "assets/js/59.5e458908.js",
    "revision": "10424af4d06e634a2c7c3e5c734f522b"
  },
  {
    "url": "assets/js/6.6946fa41.js",
    "revision": "f48a4d6a92b9c94e087a1d66592753f7"
  },
  {
    "url": "assets/js/7.328ddd79.js",
    "revision": "d822af6a377064937ffd52a254117361"
  },
  {
    "url": "assets/js/8.7b361c42.js",
    "revision": "889cdbf04f65f440fa5bb21cfc614375"
  },
  {
    "url": "assets/js/9.36746dff.js",
    "revision": "05e9783c096afd13779da41e4482ee6f"
  },
  {
    "url": "assets/js/app.597889be.js",
    "revision": "c67eee2941215f6c637c9857e80f4dfc"
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
    "revision": "20dd00dbc685eec716d6cd7fb57c06ee"
  },
  {
    "url": "index.html",
    "revision": "05e910895276d0e72df180b49d5f7724"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "69b068ea99460fbeb14761947a9ed90e"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "46c4e7cd855f9498e8c58a7d903dd7c0"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "2d88a57985705b3a7f5881971a077e0c"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "3243af558b8ea4298fc757269e453e9a"
  },
  {
    "url": "pages/168760/index.html",
    "revision": "3b1d13a0ffd6aa1d3f1a8dc40127b89d"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "c0f39bb1380848d7c5c29cb0ebc1a472"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "b26feef2c0a3fedf61e3cc4b6943c210"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "df6721c64cf44487acf83ed4d89c7847"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "a9b8b7ee805402fd7ff0860b53272413"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "07092e4518eb263c369ef42bb892b342"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "09bac59e3e45890e392dda286efb967c"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "f7c09a0983502ee1232fa55d8c51e582"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "90f83522d198013780fc121df5c60d75"
  },
  {
    "url": "pages/4e74f5/index.html",
    "revision": "78f6ddd6e33757b072ec154b3ca203db"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "6cc9a371feddf702cbdc879115901960"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "3b9f12681539d3c572b79e6a9eb88ffb"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "0433b04d5e0dca76bb6b0950312a2afc"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "294777519f7f9233c5257a3f2c1168a3"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "0097bfd134a278a332559dcfcaaead0e"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "4711d1e0b1e51a3bf7e44bbf7fc65922"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "93afa7f62a91ff344547b69d64c36698"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "2b3be37b26923699a90ba59a1b66be27"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "588104d90a040a72217ef4847115cd42"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "a85e6d33c9d43a7b0b53c8c6046831b8"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "081f34b9e322a5b9c57994ca14fa97e9"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "a1f040bdb2cb9210a06ba912cfc535d2"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "8d72fd54d12f63fd8c8cca4f2fef85b8"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "1320500ccaaf21c3ce415cc787d7e26e"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "7625f8c8f8476f2bd86d3141541db30b"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "d346e68c2e9d60b67df8508c1555c476"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "306eb372ad9060f6da81ec2409db718c"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "58ab0f3c788399d4d601b2b4db876d10"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "7ca91fb27bb5f230688c49c28c3ca644"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "d9dac186f3cf87ae9d7d84eec648fe26"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "232442f504efd774ed275e240b33a02d"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "b3ba9a75305fd9d63844f87e7cc9973b"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "53f982c78de7db3f1fa6144701c96d9d"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "a25878523f0948656ab5f049813b0bf1"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "c9fee42dc70ddae8dda0b56f4b36dfa0"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "7b5ffd4cb20f4dfb0f2ce43b5a5b6f8e"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "0c0040a7d03fc20f175a7c99414caf04"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "3c4f66cf2a1e070c708b9ded493eb7f9"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "32e5db9210d9b6e25fb62b6091200d71"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "ee6fac023ba9acfbdeccb1b16a5c0a50"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "4c6a3c30b708d942888c356bcfdcaabd"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "5401059d1b6da8fcff73b109d713554b"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "5e1f1fd93097862bc210c8b389b22932"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "2df55815cefc5e89007d7f245ec316a6"
  },
  {
    "url": "pages/fb5fc5/index.html",
    "revision": "9f6edb66b14c919e403a6124df40fdc4"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "tags/index.html",
    "revision": "f864af970827f6071d1efcde9cb20682"
  },
  {
    "url": "zai.ban.qian.yan.html",
    "revision": "dd42b9b614100ef7cc88cd439e476711"
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
