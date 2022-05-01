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
    "revision": "50d4a6ee6440c23703b75d9bcea2bf29"
  },
  {
    "url": "archives/index.html",
    "revision": "bccb65fb5854f59c93a4048613384fc1"
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
    "url": "assets/js/10.3a6d7269.js",
    "revision": "498dd5f38c69af5f44f545122e94de42"
  },
  {
    "url": "assets/js/11.da927152.js",
    "revision": "aa6439c9947b3010fae97212d2c75a04"
  },
  {
    "url": "assets/js/12.4a1bdfee.js",
    "revision": "15c4f15cf93b8c6f2a5cca7989a15294"
  },
  {
    "url": "assets/js/13.7de14ba6.js",
    "revision": "adb3c030a87be07cfd73a61ca441d0c7"
  },
  {
    "url": "assets/js/14.e324f963.js",
    "revision": "eacab6786fdef5bb2083a029af85e900"
  },
  {
    "url": "assets/js/15.682038f0.js",
    "revision": "a4a6017112449be983539f540035611a"
  },
  {
    "url": "assets/js/16.96eed515.js",
    "revision": "0b9cffd8889b72414a429996d4e23a46"
  },
  {
    "url": "assets/js/17.3705c14c.js",
    "revision": "e73b2e52e2973b29bc5cfcdc21872f18"
  },
  {
    "url": "assets/js/18.4d378029.js",
    "revision": "903dac01b13576d2a12f13faaabf4499"
  },
  {
    "url": "assets/js/19.810f1fef.js",
    "revision": "8bd117924cdf38a16bc5bcf28268f882"
  },
  {
    "url": "assets/js/2.800d3d26.js",
    "revision": "f8c2e64f4834650cd6dea4d1113c051e"
  },
  {
    "url": "assets/js/20.e8c117a7.js",
    "revision": "f65b430fa66d9240afd76cb826b5aef8"
  },
  {
    "url": "assets/js/21.20fb60c3.js",
    "revision": "57de1a20630fee7d25752d23b53efd32"
  },
  {
    "url": "assets/js/22.44af7d47.js",
    "revision": "2e5fb6f551a636f288de1899b01cbc1b"
  },
  {
    "url": "assets/js/23.a747f848.js",
    "revision": "b36027b6fc3c1514f78153f16cb353fd"
  },
  {
    "url": "assets/js/24.23472f23.js",
    "revision": "9539968828338fbaba2836a1591ec9a3"
  },
  {
    "url": "assets/js/25.65b132f2.js",
    "revision": "a1843b0662e35874aa7604ddb93acb72"
  },
  {
    "url": "assets/js/26.b486af75.js",
    "revision": "2e81ca6dedaa01a304cc1433d93b8799"
  },
  {
    "url": "assets/js/27.9cba93bc.js",
    "revision": "8b1f66eac47e6d0855d5473d985a8733"
  },
  {
    "url": "assets/js/28.ced11d9c.js",
    "revision": "51effe03aecd945eb4e8518a67166415"
  },
  {
    "url": "assets/js/29.c617a404.js",
    "revision": "b2645d04feaafc48acedc8d98890beb5"
  },
  {
    "url": "assets/js/3.e55545c5.js",
    "revision": "844cd1a446156978c2e89a50cd47bdaa"
  },
  {
    "url": "assets/js/30.efaaa0e5.js",
    "revision": "9bfe16dd79a718e684b92289dee3d6f4"
  },
  {
    "url": "assets/js/31.fef21de2.js",
    "revision": "d9293078975b56b55249cea4316a8e6b"
  },
  {
    "url": "assets/js/32.b246af85.js",
    "revision": "cb7622cd3f7051683012cb64d6d1ad13"
  },
  {
    "url": "assets/js/33.cebdd4c6.js",
    "revision": "703353369e4997546a9dffea6fd80074"
  },
  {
    "url": "assets/js/34.12758c16.js",
    "revision": "af47150c36b444c7fe197cdaf0746d25"
  },
  {
    "url": "assets/js/35.9d4d3e1b.js",
    "revision": "ab6bb0fdcfe03a5646125db269088771"
  },
  {
    "url": "assets/js/36.7fda7b89.js",
    "revision": "03521aabd3ab0e6085d2f065780defcd"
  },
  {
    "url": "assets/js/37.c99587ad.js",
    "revision": "d9bed1bd4da6a11caf0c09fa91ee0df4"
  },
  {
    "url": "assets/js/38.ca51bf32.js",
    "revision": "62087dd753dfc8f6ccd363b519f5df0c"
  },
  {
    "url": "assets/js/39.c6d70e11.js",
    "revision": "6990df79929c83b192225460ca040a05"
  },
  {
    "url": "assets/js/4.2d76b5e3.js",
    "revision": "8fb97f3d357f23eaa576fa64edb30cad"
  },
  {
    "url": "assets/js/40.945d8392.js",
    "revision": "d4cd855097e55863c502dcf4fb9ab632"
  },
  {
    "url": "assets/js/41.972a51c2.js",
    "revision": "763cfe3713d6a76ad771784b79599fb4"
  },
  {
    "url": "assets/js/42.12b1fad6.js",
    "revision": "6aafc148f003f78656dc71092fa8dd7b"
  },
  {
    "url": "assets/js/43.3ca5cef6.js",
    "revision": "3416d0935ed142254681b5d680d8177e"
  },
  {
    "url": "assets/js/44.5b4c00f7.js",
    "revision": "672c80225404d4f1582c563f9cbc3ed6"
  },
  {
    "url": "assets/js/45.f12fba58.js",
    "revision": "d510df207722210e1f93367fe9047104"
  },
  {
    "url": "assets/js/46.e77bca0a.js",
    "revision": "1d8638d3e1e79f0045e9d41dd86e9eca"
  },
  {
    "url": "assets/js/47.b35b2f54.js",
    "revision": "9f1441e6263efac5b2c311795fd934f0"
  },
  {
    "url": "assets/js/48.ca3e69cc.js",
    "revision": "b80fbd446c5e6fd2fe5b9436234ca8ff"
  },
  {
    "url": "assets/js/49.4d957f75.js",
    "revision": "adfbef935b07b048f8e8620c93508e8c"
  },
  {
    "url": "assets/js/5.00a9b8f6.js",
    "revision": "0cd76bca495e9ea10888597c5faf00b2"
  },
  {
    "url": "assets/js/50.baa13feb.js",
    "revision": "8a1d2aa207a3960740db2cc83c1090da"
  },
  {
    "url": "assets/js/51.ecf18dbf.js",
    "revision": "a2a1c45294f8a86889ccebf30f0e7a1f"
  },
  {
    "url": "assets/js/52.c86fcede.js",
    "revision": "adb1e06422a7ae22a41f0237f1d84c79"
  },
  {
    "url": "assets/js/53.3cc9e76b.js",
    "revision": "88565f1fd562c1df396686c713c6534f"
  },
  {
    "url": "assets/js/54.31e0a25d.js",
    "revision": "effd0f2f82e6325eababd315cfe7557a"
  },
  {
    "url": "assets/js/55.637432a9.js",
    "revision": "644e9c583ea2cdcffeb25e09f4f0bbd7"
  },
  {
    "url": "assets/js/56.80fde97c.js",
    "revision": "51fa05a2e2c8284c0de268f313b28a09"
  },
  {
    "url": "assets/js/57.e6fd5cb5.js",
    "revision": "7a686a5fb9781df3615562216d28e6a4"
  },
  {
    "url": "assets/js/58.ec33ee77.js",
    "revision": "912789542b5aaac555eab380c2092427"
  },
  {
    "url": "assets/js/59.9747bc66.js",
    "revision": "3d5193e5f2e0f0424f206251d0807c9a"
  },
  {
    "url": "assets/js/6.5ad722d9.js",
    "revision": "54399bf024d9e08e2ab16cebee1d1fee"
  },
  {
    "url": "assets/js/60.108c9f05.js",
    "revision": "1d07c4f623f3259658ebd93cf9f49779"
  },
  {
    "url": "assets/js/7.552286d6.js",
    "revision": "a7309886b188ca5cc82e4d583b82c72c"
  },
  {
    "url": "assets/js/8.5436d790.js",
    "revision": "7707bd19a82a730bd3185271cc5b0dd5"
  },
  {
    "url": "assets/js/9.86069d41.js",
    "revision": "25bf249188c465ccc8a55e8264c7c372"
  },
  {
    "url": "assets/js/app.d9b39c82.js",
    "revision": "4c61f6cf054fb17d70a8f5934d28cf17"
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
    "revision": "f2294c04245a5591ca89b24cbf9fc182"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "0965fd50925aa57a947154b0ea178d95"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "4c35d9cfb28708fb2023f879d677851b"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "638d7c598d044b7c9ed1f7155a063e0d"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "73f8ba56ae63c343e07a8e1f3c0c70d3"
  },
  {
    "url": "pages/168760/index.html",
    "revision": "3e9212d4a032a34e68d127d1d575ac99"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "0d02b80168ec76d6c780cecb1bd922a1"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "0f0c4f23cbf3d3fde411ad4778349597"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "6416ba5d292b7ae7c999e6f6a5b6c12a"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "b71044e2ddbf427eea3cb994269dbbe4"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "589a6293f9cabe3cf7bd1a7694b76318"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "c2170dd4a3482edeb99b7553b01a37df"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "26527b706a91d1610a75d4d6d527b41c"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "b9625851a021bb609e27c2779cbd66bf"
  },
  {
    "url": "pages/4e74f5/index.html",
    "revision": "d7002ee66be6b0177d59d0f73d430feb"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "0552c87a10c43ab0057e29ed721f32e9"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "c1029a09ab80fc707ba8274f44bb1023"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "f4242619fab1d2d9c8f1b64c47b915f5"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "fb699602285b6404a59f94ed0bdb3c1b"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "131e9179f6d28ab99b8076e7320c8709"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "38299a8a4f395615c71e253001252ca0"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "acefb48a10c8a762ce3233cb9301cb2b"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "cf9092b87be6b25b667b3365029f168f"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "ad8848b53dacab18c1712c130bb51154"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "0a268437829bb71a99a6a2e8d63444fc"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "1d207de701376ec2b8f7a1f3bfb33658"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "dd209e21442a5aa43c5d48796cd014b7"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "85684411478d0354b41afb72a67e11c3"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "a28847f5f8f37bd2baca6ddbdfccb469"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "08542799eb4696c55e41f60eaca058cc"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "8c07293c108124dffa14b2a3fcf28c2b"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "3f30068af4e00139a674ffa4f26d11ee"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "81b88065944d1d49d5ea8f82253c9278"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "71807b7485875ab5eb88bf5eec01f72c"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "f6849aecc8c35997b867cd679734380f"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "0f19c23489b213bb3773a9826112587d"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "ebbd62582f462196a8621d829234c9a6"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "c751f34fb8558fe22eaf4aaa72f4a756"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "73fe394a5e01aaa09fe4070bcdc689e1"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "d519b6a18312f875bf107a5e50403fa5"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "8c62496e1c9974bf508d0ef9e26e2a85"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "7dd47cac3fbb964dc62ee5ce9c40fce6"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "274f2627317516780d509471d70937f5"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "2a609e1900df8800301f125fc4b02cac"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "47a13cc8decaf808f28a1ed21684cd0c"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "e6c8e3dd4c142ce7faeefadf895708b9"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "c5bd4edce3b069824be8bf460ef9a689"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "bbb7518dc3e55cae437623323cd02066"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "6eadeeb462a34e5b71e8303a5763a37c"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "e3d6b66593c6cfaf3f7d0415ee93e7e4"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "29c8facf0ba884d9fbaba0d4ce854d52"
  },
  {
    "url": "pages/fb5fc5/index.html",
    "revision": "f5fe2188d05c3f3987dbf5b3e96b02eb"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "tags/index.html",
    "revision": "14734c92ee2a8b2a660ee424d1857acd"
  },
  {
    "url": "zai.ban.qian.yan.html",
    "revision": "9f7dca6f855d5500b9c752d05e99fc20"
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
