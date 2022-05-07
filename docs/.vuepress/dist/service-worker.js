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
    "revision": "90941620b5df843a5a7b2095c1648ed2"
  },
  {
    "url": "archives/index.html",
    "revision": "d593974af543870bded98e3cd4eb7555"
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
    "url": "assets/js/10.99ade901.js",
    "revision": "68bf33dda726bb8a3c59308a5a430a6f"
  },
  {
    "url": "assets/js/11.5f716503.js",
    "revision": "0e33df0865ebe1f3beed1a0026069f50"
  },
  {
    "url": "assets/js/12.0ca922e9.js",
    "revision": "479299bf7da4d86d272ffd8dfbf7d766"
  },
  {
    "url": "assets/js/13.4a4c92eb.js",
    "revision": "39f50f727683ca02b0c05b83cd900051"
  },
  {
    "url": "assets/js/14.184edc41.js",
    "revision": "82d2249ee96eb898ce29ecb622b4f49c"
  },
  {
    "url": "assets/js/15.c46f57e8.js",
    "revision": "bc816bd6eb1b1b80ab0d9fee945e9522"
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
    "url": "assets/js/18.3b20e22f.js",
    "revision": "234a760be7bfff50db4d6e33b32c47ac"
  },
  {
    "url": "assets/js/19.dadee569.js",
    "revision": "bf17c5056cf73cc149402505b8d99b19"
  },
  {
    "url": "assets/js/2.800d3d26.js",
    "revision": "f8c2e64f4834650cd6dea4d1113c051e"
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
    "url": "assets/js/23.27cefc83.js",
    "revision": "08c8dcfdc9058ba1b3f5441549733e7c"
  },
  {
    "url": "assets/js/24.8032bea4.js",
    "revision": "a5c03b775d1c579d2234c82622643cbd"
  },
  {
    "url": "assets/js/25.6cf77d8f.js",
    "revision": "af33172ef947ca11c9cc4afbd40c2496"
  },
  {
    "url": "assets/js/26.bc10d08b.js",
    "revision": "46cdd99e1c1dbd1035806c1fcc9fade7"
  },
  {
    "url": "assets/js/27.1d85cef4.js",
    "revision": "03aa8ed6673db7946e2041ce8f4b010b"
  },
  {
    "url": "assets/js/28.9619544e.js",
    "revision": "3d527abab8e0bc6aa80ae4962d261fba"
  },
  {
    "url": "assets/js/29.35dff1c1.js",
    "revision": "c80f2338526066ca88dfc1730fd1e65b"
  },
  {
    "url": "assets/js/3.0e0ed363.js",
    "revision": "6f3c6381f449f957671f8304342d6555"
  },
  {
    "url": "assets/js/30.7db03c1c.js",
    "revision": "0c7e638189fa091cfb4ebefb11d52377"
  },
  {
    "url": "assets/js/31.6f8a989b.js",
    "revision": "7683762c93d247dbd5e947bf89e03d82"
  },
  {
    "url": "assets/js/32.5ff13aac.js",
    "revision": "91f7cc2817a7b62bc148e233f145329b"
  },
  {
    "url": "assets/js/33.92d2845a.js",
    "revision": "205fa404e565ae88d4ea1fb62d518c67"
  },
  {
    "url": "assets/js/34.3bf55185.js",
    "revision": "5ee29ef8f56e33000fd1633b27f67fd7"
  },
  {
    "url": "assets/js/35.6b64e213.js",
    "revision": "c01633e87142b24a25d8df5be2b666a2"
  },
  {
    "url": "assets/js/36.ac68e782.js",
    "revision": "8aa3ed2f68bf51d8f054c0834ab9d1a5"
  },
  {
    "url": "assets/js/37.77038e9b.js",
    "revision": "d7bd68691a407ea8944cda7fcdcd0654"
  },
  {
    "url": "assets/js/38.2ad06800.js",
    "revision": "93974d84087e0f33f35053f1761db39a"
  },
  {
    "url": "assets/js/39.a31f4104.js",
    "revision": "ad5d35730e2934481786784747ca34aa"
  },
  {
    "url": "assets/js/4.2d76b5e3.js",
    "revision": "8fb97f3d357f23eaa576fa64edb30cad"
  },
  {
    "url": "assets/js/40.1207e85b.js",
    "revision": "fecd7f66eb39e03ed9f41cb6b17705a5"
  },
  {
    "url": "assets/js/41.64e24810.js",
    "revision": "196745a670505d4c072a64c3a6d16c74"
  },
  {
    "url": "assets/js/42.d3b355b9.js",
    "revision": "35007584739041e2d32c08202662d252"
  },
  {
    "url": "assets/js/43.8647db8a.js",
    "revision": "2bc097b6969660a3f95701c02c1c5707"
  },
  {
    "url": "assets/js/44.0c4f0019.js",
    "revision": "6cdc3fa6714032fcea316182112072cf"
  },
  {
    "url": "assets/js/45.20f51a37.js",
    "revision": "c5f436dfe325fe17d74724ff43fb2495"
  },
  {
    "url": "assets/js/46.96ee0988.js",
    "revision": "a4505c9efc104376a376010c346adb8a"
  },
  {
    "url": "assets/js/47.3756e421.js",
    "revision": "c96565bcf079fa5ea0e3d78eae8806ad"
  },
  {
    "url": "assets/js/48.d053bd0b.js",
    "revision": "646a2b2f08ce14e3566281fe207c0b52"
  },
  {
    "url": "assets/js/49.986463f8.js",
    "revision": "fd74ad8aff934d0e220e21bf42728a9a"
  },
  {
    "url": "assets/js/5.f01516a5.js",
    "revision": "8bed3c3755c9336d7d98a55914380b22"
  },
  {
    "url": "assets/js/50.a70d9c86.js",
    "revision": "c22d433fab57cd96c98b97673051b816"
  },
  {
    "url": "assets/js/51.131dc290.js",
    "revision": "768c099dd500b40067f922d7b859e852"
  },
  {
    "url": "assets/js/52.87dd0050.js",
    "revision": "f574efeee9330e02bf670fb34b24a894"
  },
  {
    "url": "assets/js/53.a095540b.js",
    "revision": "dbc2ba69d9b34512dd0074a2cb26bfde"
  },
  {
    "url": "assets/js/54.22b82585.js",
    "revision": "fbf1a1bb8b92b6629102af1172663e9e"
  },
  {
    "url": "assets/js/55.72686ec2.js",
    "revision": "2ae99e1a443866eaa5b92bb6dbb39077"
  },
  {
    "url": "assets/js/56.13c64fed.js",
    "revision": "d01393c6a6f284709a2aa63899a6c5c2"
  },
  {
    "url": "assets/js/57.43d4ff71.js",
    "revision": "05b930ff4993ed4fbc343c966980bef3"
  },
  {
    "url": "assets/js/58.9179fc0f.js",
    "revision": "b5477ae0e8de4c2df6886a61822c1aeb"
  },
  {
    "url": "assets/js/59.18d10741.js",
    "revision": "e2249a767b8d2802c74622b407bb4cfb"
  },
  {
    "url": "assets/js/6.908be73d.js",
    "revision": "68611f8d0a307c2f7c812e67327ad245"
  },
  {
    "url": "assets/js/60.58331e3b.js",
    "revision": "33aa38a114852c694c4339a7832648ad"
  },
  {
    "url": "assets/js/61.5ded75a9.js",
    "revision": "857686d6c424a778b2f87fdcafb715d3"
  },
  {
    "url": "assets/js/62.d9b490f9.js",
    "revision": "cf6cf4f1c5177e47fda7bb319f29f7c7"
  },
  {
    "url": "assets/js/7.49887580.js",
    "revision": "24aa7598939c3bfc3e113681411ff5d7"
  },
  {
    "url": "assets/js/8.b85c4b27.js",
    "revision": "d5fa1740c69a2dabc0b81335924c6776"
  },
  {
    "url": "assets/js/9.49cfaa0f.js",
    "revision": "f9d27592e43724a8c2b0162db6db5155"
  },
  {
    "url": "assets/js/app.2a46caec.js",
    "revision": "05e77483b1bfb5a20923deafa9683795"
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
    "revision": "3fc7d6deadfd679a9ce9f815af78bdc8"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "30f67032430bf44a4440b12c55cadc28"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "8901418cc405a8e3f489e0ca79671abf"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "036f3c03111f03b588307cfcdc7aa619"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "83cee8cdcf55a5f34bf22b248463b0e9"
  },
  {
    "url": "pages/168760/index.html",
    "revision": "f44228132074a3f9c758a92d4244350e"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "c1222bb0eb98b1bdc81900414571725f"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "12976046713f0c96fa8d2563ba931309"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "c10603facbb963bb24281e2676aaad8a"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "cb4fa5975834cf568e46850686c82534"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "e5d265df23e53e9e28c9c97b04033b4d"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "560fda36b547441b00f0a5b0c10c2292"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "86b584fd215fcde553aa7a46e19eec6e"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "440de9cf894855434f567d7cb5777ff7"
  },
  {
    "url": "pages/4e74f5/index.html",
    "revision": "009bf4fbf33597a9f0eb9ed294cc059d"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "01921a937ebbe910b946c90c7f9c1cc1"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "6a2906a54fb87ee19ce59572f9512d73"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "94064a1ecbf04563a317550d20e5569d"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "c2c15a4b3f40f61388b64d0e66b79d31"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "2957d7fecd8ed0b7aba87f13ce9c6028"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "b9a10896aa10d00db0c03c3d7a89f87c"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "33f21072ea0f7047b03022fee2e22b6f"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "e99c6c4c12b14cc972d497c11b6292f8"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "2b47b0f69da372ba36c2543beb827536"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "27c3ede9ded9a0d26800adadf30497c1"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "89f8547cd0184e14b7750c5dc087b439"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "75932a0c32b2f3700f8bab6084d524d7"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "d1c2317dca3a597814b67f98c2550fa6"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "61ada54ce62b4a1be3f565f32152729e"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "6aef0a5f3a86885b4ca01f4fb7c9ba6f"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "24fd2751a356735d834c8491389c7661"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "e849f971e7220ad1e549a6d52b5846ca"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "e06c86837e0b7f45d705fb61db836c00"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "8bdc25769f2857b051063686f42b8e3b"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "14bb483680b73154e697ed93a150cdec"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "8427b46ade34a5289223bdf4651db0d0"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "16bc7db67a97ade24d501b04cb5c753d"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "b3be0b2dbf30ef086b3c2335e9fadab6"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "6653141487d8e30d243ed16a7bd926a8"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "9bb7548bd39f42f674256395a7668ba6"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "cc6f2ee682a0b0a45be28d87e0480ef5"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "b549e9275b99c721e8fe748a5b9a0246"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "6415de7321143e6b83f278b8cee33b44"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "fcd1b3684c91e0eae84737b03a4f2e97"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "1dd104d8ec442d2a9c81eb6d78a0144d"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "978807d60d38c369e8145a787b38a221"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "0be687761f02bd89817127a43e00944c"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "703ce62c2b59ac7cb0404fce15f6f2b2"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "bf9203a9c5f352d22ee9f44cca061be5"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "fb6b21038014090215e644b61e665c7b"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "264d88de23a5afcff4566b60344f6ee1"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "75734a127a4aea33f348ff938edd8b1a"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "ec73affa22db9348efefb63df91e3522"
  },
  {
    "url": "pages/fb5fc5/index.html",
    "revision": "fd49b52cb8ce6ad0bc0dffbb7ea2ab50"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "tags/index.html",
    "revision": "d34845c894312e6850bc56a8c48e3605"
  },
  {
    "url": "zai.ban.qian.yan.html",
    "revision": "dc5151ea08f37540feae960a2f937aeb"
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
