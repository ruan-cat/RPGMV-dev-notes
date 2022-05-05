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
    "revision": "a06f4bf968039ab3466e3ba68a17f50e"
  },
  {
    "url": "archives/index.html",
    "revision": "1f471653c46d40ffe239ad4f783b4319"
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
    "url": "assets/js/10.02f1ce2a.js",
    "revision": "08b2538145f874df7ea04a68a51f8a8e"
  },
  {
    "url": "assets/js/11.16d8b7d5.js",
    "revision": "72f323fdd5209acd1bb5281ba1a76e81"
  },
  {
    "url": "assets/js/12.aa1e1f1e.js",
    "revision": "83f18d8e645b8e709636b2a1f6706bcb"
  },
  {
    "url": "assets/js/13.a72bc185.js",
    "revision": "d96c848271026ee6146a17e0307a2b1c"
  },
  {
    "url": "assets/js/14.184edc41.js",
    "revision": "82d2249ee96eb898ce29ecb622b4f49c"
  },
  {
    "url": "assets/js/15.eb5c1af3.js",
    "revision": "8b99dfc69b24e792a74ad8e7055c2d55"
  },
  {
    "url": "assets/js/16.e6cfc9f9.js",
    "revision": "7718a8653fd3b64a2127f8ec93053640"
  },
  {
    "url": "assets/js/17.0654d984.js",
    "revision": "62e9c5613d7e018cb01d4aee88928d9e"
  },
  {
    "url": "assets/js/18.341aa29a.js",
    "revision": "46273b5d188824037fa437d81e9ec4dd"
  },
  {
    "url": "assets/js/19.fae52e90.js",
    "revision": "7e8923ffb8097ea6e37fe723f7049cdf"
  },
  {
    "url": "assets/js/2.800d3d26.js",
    "revision": "f8c2e64f4834650cd6dea4d1113c051e"
  },
  {
    "url": "assets/js/20.230dcc01.js",
    "revision": "eb1b700f58b678d936165f08d49dc20c"
  },
  {
    "url": "assets/js/21.781eb3c7.js",
    "revision": "ce91d6303d464b666b9c538dcc6a68ac"
  },
  {
    "url": "assets/js/22.3041816e.js",
    "revision": "ce454c8c70c2ae1063c545e7fea6ace0"
  },
  {
    "url": "assets/js/23.27cefc83.js",
    "revision": "08c8dcfdc9058ba1b3f5441549733e7c"
  },
  {
    "url": "assets/js/24.9976f1d5.js",
    "revision": "45b870f0eeaf2444fa0b7770db811544"
  },
  {
    "url": "assets/js/25.46a10ce2.js",
    "revision": "f859a530bd0ff95ef0502221ee9c3cc8"
  },
  {
    "url": "assets/js/26.06dac25d.js",
    "revision": "496ec0e951f2abc760cfdeaa1cb73b53"
  },
  {
    "url": "assets/js/27.874be97a.js",
    "revision": "0e193ab5c30d86542ed0d576990d89e4"
  },
  {
    "url": "assets/js/28.2cfb31b6.js",
    "revision": "11ae266b4f6618ff70b310598bf3ed8f"
  },
  {
    "url": "assets/js/29.e4119fac.js",
    "revision": "a0404e799d6d075e63ad92d1fdf92a62"
  },
  {
    "url": "assets/js/3.0e0ed363.js",
    "revision": "6f3c6381f449f957671f8304342d6555"
  },
  {
    "url": "assets/js/30.af890ed3.js",
    "revision": "f279a4da4147fdf0cbae42c2cab594af"
  },
  {
    "url": "assets/js/31.f9c3dcd2.js",
    "revision": "b5221558f744d67abca6cc1c405830e3"
  },
  {
    "url": "assets/js/32.f0969764.js",
    "revision": "994e6336ef2d6eb31be8eef280970112"
  },
  {
    "url": "assets/js/33.92d2845a.js",
    "revision": "205fa404e565ae88d4ea1fb62d518c67"
  },
  {
    "url": "assets/js/34.cc33b603.js",
    "revision": "b737c22703a3de01653ae4b4dd596679"
  },
  {
    "url": "assets/js/35.f55a0190.js",
    "revision": "4c8cca60fa7bc860854b58a330659256"
  },
  {
    "url": "assets/js/36.ac68e782.js",
    "revision": "8aa3ed2f68bf51d8f054c0834ab9d1a5"
  },
  {
    "url": "assets/js/37.f156ebbb.js",
    "revision": "7f6db9e74ecda2556788f1285e2d4579"
  },
  {
    "url": "assets/js/38.b2cc257f.js",
    "revision": "5b1b519ed925619e7b26eb154041bc52"
  },
  {
    "url": "assets/js/39.01afb604.js",
    "revision": "7ecde2beb76f3fb8b0a2721ad8023e06"
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
    "url": "assets/js/41.276579c8.js",
    "revision": "2b9c85f4083e6e3986e384b4d8e995b9"
  },
  {
    "url": "assets/js/42.d3b355b9.js",
    "revision": "35007584739041e2d32c08202662d252"
  },
  {
    "url": "assets/js/43.7d96efc7.js",
    "revision": "ae66c9cdf62e0740df3fb30b1203d0b1"
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
    "url": "assets/js/46.93e8e3f7.js",
    "revision": "9532f9fe38d5ce463a37735bd3dea484"
  },
  {
    "url": "assets/js/47.894bf7bc.js",
    "revision": "685cf598a757c620193b2ae3b933cf83"
  },
  {
    "url": "assets/js/48.473616a1.js",
    "revision": "86187b396574f176d74e247448060192"
  },
  {
    "url": "assets/js/49.986463f8.js",
    "revision": "fd74ad8aff934d0e220e21bf42728a9a"
  },
  {
    "url": "assets/js/5.fcc03322.js",
    "revision": "5ce014c2e8f01a50290ece8ba23c3e84"
  },
  {
    "url": "assets/js/50.a70d9c86.js",
    "revision": "c22d433fab57cd96c98b97673051b816"
  },
  {
    "url": "assets/js/51.347209ea.js",
    "revision": "f76140a725ba89b3952a19e4c299c010"
  },
  {
    "url": "assets/js/52.150f71dd.js",
    "revision": "25fabe4ade29a4c434e822f0ee78070f"
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
    "url": "assets/js/58.b8c85a9a.js",
    "revision": "f9ab117234d4a1e9b0289687b98a2639"
  },
  {
    "url": "assets/js/59.681f05b1.js",
    "revision": "07c55bc9c8e4d8c0d0dd1cd111fc3c1b"
  },
  {
    "url": "assets/js/6.fa28e650.js",
    "revision": "f48a4d6a92b9c94e087a1d66592753f7"
  },
  {
    "url": "assets/js/60.d9b90f4b.js",
    "revision": "78c1e457212ee370fc5e4aba1793f94b"
  },
  {
    "url": "assets/js/61.dc9ecbbf.js",
    "revision": "8b646d4ecaf099f5b3f9e920c463739b"
  },
  {
    "url": "assets/js/62.d9b490f9.js",
    "revision": "cf6cf4f1c5177e47fda7bb319f29f7c7"
  },
  {
    "url": "assets/js/7.53def3e9.js",
    "revision": "56a2a6c1c799ff9d50ab43c69bdad130"
  },
  {
    "url": "assets/js/8.e3a79438.js",
    "revision": "b28fc43c675fe1b6ad5f539e743eb69c"
  },
  {
    "url": "assets/js/9.18e887f0.js",
    "revision": "48449e81cd27e3f3faba7d857aa081ee"
  },
  {
    "url": "assets/js/app.1dad131a.js",
    "revision": "3eed5cbbb8272a9962bcde38839419a4"
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
    "revision": "4036c4dd3fc602e2b59840d03cc2bc32"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "01393d111de163ed21402e24c6521341"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "76c149633a749f2ff5d715666c1285d9"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "9898ec90e5411237dbd512b9c8d41947"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "1af98c2c40e68b440690dbe53e16ab77"
  },
  {
    "url": "pages/168760/index.html",
    "revision": "96ac99c658a23f4e14dc8eac2430a373"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "4365e50365e2810a20f44b56aecd26a2"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "a7591d5eb7bd56b203b7465b32272fa3"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "6ca431c5275d78133d04604e93874c26"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "8e4fbe157addad2eadbd3b19ad405a80"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "4c9c6aad5fe23274692b7964c9177c7e"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "7d4fdc4027caff1b89df81aaa61e6aca"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "bb78c46a26be219795fcaa2ae05922cf"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "6fea1ef3ec134660cc54f132ad2f5b42"
  },
  {
    "url": "pages/4e74f5/index.html",
    "revision": "918eac8ce9009bc09a1f4e3e5d7e9de5"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "b6374c36941af2fb5099d67996faa720"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "af0eb26d23c8eed5a70937a3fb2f2f28"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "81c51b17a37e167c8c7f51969a9f7e7f"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "ce853ba6018e8affe89f4a577e7b351f"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "0d0594e8c168f4a06bbf3545b822e547"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "052c1846b65d94b6a8a636d56908e110"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "b7addb5d725beddf5db5ddadd8aef8df"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "d35126237e234a153fdee6803d380c66"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "07180b0c85d3fcc489e42f9f3de65c03"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "5950cf9a5cab1ec74361d669bcbc21fc"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "40be201cdd04a0c06c51a624a9168bfc"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "d7727f600600b64da4f609ba8569fb86"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "c723309ed038f60e11c46a2d3b0358fb"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "af2d8ad2edd73ee834ff5a7dda5aeee9"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "8c5805efa24cf160f56f730ccae5a71a"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "c6c9351d32a36bda5b78c7b444a90f27"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "4a7bf54f2e4e3ee3afddc4ed5ecfe5b6"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "bc2d663c580f2d23c46ab7710a5b6c44"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "0c229a9a1f88282a1dafbb58e2dd3132"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "0bd3fd675a1aef8fe0cdfc085c303da4"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "1e746710baa99c1ba5c611cc29b2aa51"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "ac0d5b2fcd8db96a8279e683ff4a671e"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "9b1515fce2e64ea8db4cf8e7b65aa132"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "fc17a9f929e768d9ec3edc435844c281"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "c61ce469f3231c410fe0587af5e67fdc"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "df8200927e7bf07caec8c7e667ddf99d"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "ad1f6f7decf07cf661924fb606351bbf"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "b4fbbbd541cc30ad3670f066ec4cb777"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "e09fa5101310d51be53e1e0b59b97c59"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "70ab1fa21e34c65df5bad908352293fc"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "360f452c24a80fc7f0522c11f98c36ce"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "a425563196eafc995aa5d855152a720d"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "ad190ebe32faf852f9fb7e51eef6b42a"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "28191a27e9d893d5d45d7358d54e0dc9"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "f07235e158a0cbef73eec7a38a125db8"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "b2899d30603ac34bcbedbd9d12c9268d"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "b659ce83bccc3a0aa58a4380e99ce711"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "d308f40b5280ba4085a69f7351e388c0"
  },
  {
    "url": "pages/fb5fc5/index.html",
    "revision": "be7ed3e4725f09bb692ebe7fb3e9523e"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "tags/index.html",
    "revision": "2b87406195a580632c8a115f9889fbb0"
  },
  {
    "url": "zai.ban.qian.yan.html",
    "revision": "82054bb7a0c10e258426c12633044d0c"
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
