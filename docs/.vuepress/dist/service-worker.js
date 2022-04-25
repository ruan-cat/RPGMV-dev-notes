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
    "revision": "e7c3beb9faa6b9eb63316c47a63d9efa"
  },
  {
    "url": "archives/index.html",
    "revision": "1fd9479ea5828f3514598b5032f389fc"
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
    "url": "assets/js/10.26a9f138.js",
    "revision": "aa9c251246961b51b39fac4b7ac6dff0"
  },
  {
    "url": "assets/js/11.02dfd4a7.js",
    "revision": "c23987e86df9e0e6893c19f00b472ac8"
  },
  {
    "url": "assets/js/12.76544af3.js",
    "revision": "7298e314b1a547eaa747d453409f6403"
  },
  {
    "url": "assets/js/13.a72bc185.js",
    "revision": "d96c848271026ee6146a17e0307a2b1c"
  },
  {
    "url": "assets/js/14.49f0f688.js",
    "revision": "2c3fde8807893f97dc38d0e77845da9b"
  },
  {
    "url": "assets/js/15.34e54f01.js",
    "revision": "5f062dd4d8f74fb1fb3fd762ae8e0271"
  },
  {
    "url": "assets/js/16.ff716ca1.js",
    "revision": "004b1583d834009b4bf1eb30f439c829"
  },
  {
    "url": "assets/js/17.2e42e9b7.js",
    "revision": "1112053cf802df069b91c396b22af3b4"
  },
  {
    "url": "assets/js/18.7fd27d91.js",
    "revision": "149ae33b05366bd5cc374e5d996918d3"
  },
  {
    "url": "assets/js/19.dadee569.js",
    "revision": "bf17c5056cf73cc149402505b8d99b19"
  },
  {
    "url": "assets/js/2.c2bd81e7.js",
    "revision": "c743eaf797724ddde19b3841e08c7c2e"
  },
  {
    "url": "assets/js/20.85adbb34.js",
    "revision": "965d49d95b08966e672af8fbb08a7e68"
  },
  {
    "url": "assets/js/21.34246f28.js",
    "revision": "8f2b915548ea421cd29f182a3e51ddfa"
  },
  {
    "url": "assets/js/22.14a9132d.js",
    "revision": "eeca162125241f5703d9cc6ed6e3af7b"
  },
  {
    "url": "assets/js/23.e0cb14c2.js",
    "revision": "95317647f83327bec32e8d7905edbad5"
  },
  {
    "url": "assets/js/24.767ed875.js",
    "revision": "b6e9144cfa3d29a4c714320033bc2421"
  },
  {
    "url": "assets/js/25.021df14e.js",
    "revision": "364b18e5ce2b154bcc80e93f009b65f9"
  },
  {
    "url": "assets/js/26.3ecf613c.js",
    "revision": "9834802e6da7e32de27dbe23ed90e5d1"
  },
  {
    "url": "assets/js/27.ef98fbf8.js",
    "revision": "9abf6a6ca1b668012883c109558beb10"
  },
  {
    "url": "assets/js/28.2cfb31b6.js",
    "revision": "11ae266b4f6618ff70b310598bf3ed8f"
  },
  {
    "url": "assets/js/29.c457cff0.js",
    "revision": "cec432c5dffd0b7ce30b98a49de6be5f"
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
    "url": "assets/js/31.042e9802.js",
    "revision": "f945b6af2fc7c30b94742bc49f525a40"
  },
  {
    "url": "assets/js/32.5cea9610.js",
    "revision": "e0cd295634858bca54597429f0958339"
  },
  {
    "url": "assets/js/33.61a6153d.js",
    "revision": "b716ce1ce352a32527a9e2b0ad1a4064"
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
    "url": "assets/js/36.bb4522eb.js",
    "revision": "ef1042ace662ad142fd5b194ff6cdd1c"
  },
  {
    "url": "assets/js/37.b939e8bb.js",
    "revision": "40b856b052e4809544235eaefa687ad7"
  },
  {
    "url": "assets/js/38.60d10dad.js",
    "revision": "82b6a5271fd51769df939f56eeb7b80c"
  },
  {
    "url": "assets/js/39.e917b2b4.js",
    "revision": "4d7eb337941cce8849ad8f1d18603906"
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
    "url": "assets/js/41.2bfab084.js",
    "revision": "60c4ad044a6031e2e27469d1c432f709"
  },
  {
    "url": "assets/js/42.cdbcf5c1.js",
    "revision": "1af6e0840e398e87b9c6bb52419916f7"
  },
  {
    "url": "assets/js/43.f7d78ac4.js",
    "revision": "54e6f0a03773ee2ef874dfedb0a68aa4"
  },
  {
    "url": "assets/js/44.c250aadc.js",
    "revision": "3950fc8eab84c83dd4a4b09fabe49a48"
  },
  {
    "url": "assets/js/45.2890d37d.js",
    "revision": "c8f6a004dc08d1cc4feff69f9d77276b"
  },
  {
    "url": "assets/js/46.e4e52e7c.js",
    "revision": "07278be7fec1272b3b513d9e097453cb"
  },
  {
    "url": "assets/js/47.2b0f758e.js",
    "revision": "dc7775314ef9848446c60a3a12745092"
  },
  {
    "url": "assets/js/48.0a966c9f.js",
    "revision": "e64702d1382694458639b66fde175988"
  },
  {
    "url": "assets/js/49.7025bcca.js",
    "revision": "b445da1333b368f38b02f9470e2f05b8"
  },
  {
    "url": "assets/js/5.edc0f664.js",
    "revision": "6c492f6029bab929f494cdc44ec1918b"
  },
  {
    "url": "assets/js/50.993bd09f.js",
    "revision": "70eb1a5260eb29d42a9c22486a665b7e"
  },
  {
    "url": "assets/js/51.47e742c8.js",
    "revision": "86f6b94a2e88e58144f2cc665f533567"
  },
  {
    "url": "assets/js/52.a3ebbeee.js",
    "revision": "e5d42db66d01a27931cc258296579def"
  },
  {
    "url": "assets/js/53.cf03dc5f.js",
    "revision": "38f31b5bc86136c592eaf6de37d11d0b"
  },
  {
    "url": "assets/js/54.efd601c6.js",
    "revision": "db87a5b69a136f38d8b2fecb72ddfc3d"
  },
  {
    "url": "assets/js/55.d3a50e7a.js",
    "revision": "a0d19b4cd39fd4b4703f064ef82140e3"
  },
  {
    "url": "assets/js/56.8a7ea3e6.js",
    "revision": "439d39675847041c26d0ed4d5e724395"
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
    "url": "assets/js/6.70f279a7.js",
    "revision": "b8bb2310b1478545c4267df877c63316"
  },
  {
    "url": "assets/js/7.26aa5505.js",
    "revision": "99219d1660fcccd83f7a6b9cf3de6631"
  },
  {
    "url": "assets/js/8.4eb18b30.js",
    "revision": "97e3662f147de9f7088ea4533e3e86c8"
  },
  {
    "url": "assets/js/9.3b7339cd.js",
    "revision": "f70f8fcbb575427e64f32c51d2045256"
  },
  {
    "url": "assets/js/app.824dfd74.js",
    "revision": "9bd5e7d764897f40232bf337ca4890da"
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
    "revision": "a71e4d1c1b94f07164cb7737ed0ec1f4"
  },
  {
    "url": "index.html",
    "revision": "a93e262856b02f926e6a8c29c4400841"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "632860fc39527f144987e2fd26de6a2f"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "51fbb4abf6f47594712c4dcf77cae3f0"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "1b03b69ce4be3cbef375255a26db518d"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "2ba760c4e992195b11ff7313f3012dd6"
  },
  {
    "url": "pages/168760/index.html",
    "revision": "9ae78fe62902eb0b98860de977e8b534"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "1732320c61f440e3a813c43e67dd216c"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "1e1487ef5307f26800c05020fcfb1392"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "9dec5102bc90ab60fad6ca5e0c1d689b"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "bac634a4a40c3465d6ab0fc61e08b3be"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "c85664657702e75b4da91a69b80a9bfc"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "1f35923d075f20b39dee0c99ede9e9dc"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "5e5e9718b20d74a84616e4484ab646d3"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "9e3d9a159d1cb1271ce93f1d618e428d"
  },
  {
    "url": "pages/4e74f5/index.html",
    "revision": "d59b2d5608d48c4cf886da0deff25e61"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "44ddfd5c5db12b977ffefe8e46bbd31b"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "609d666280878bb9a1e56ddf0ab70105"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "89ce9284cbb6f8e6fb99776fc97c12f8"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "6195f078fce47082699ab9e74c61bc94"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "798708d2bba2b3607a82c995d0c19095"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "fce3df3a89393d36c7e614d2f98eaa77"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "86840cd1a7e62cd33c11334d68aaddad"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "ef1c8c61d5bd9dcebee7aa1055fb049e"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "bc04456a4fa4eef4b8de561f5beae8df"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "739d5ba207ff1ba5780a36b22abd0a2a"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "1e0b41ce8ed80865a98b1a27d42a87f4"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "eda6d7c8e11d35fb7afdc5e7d7c3a0b5"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "517de25cf6edebb8d71c4aac967888cc"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "8548748c1109511f8ed199eb3438d354"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "7883618de202e20aa0d019309d3260af"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "902526ea2e27f9c0bbcb9574a0e3e46e"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "4fe6c7cda30249ad533b3022524d072d"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "946d4e28df9c52ba4519c156b72dd79e"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "dd927a9754a48084ca4f9f362d381d08"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "78d0cfd0d366c6323ad5542ad09111bb"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "a979acac17b9c77ba0164c61050ba031"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "3d3551e95ffaeb5bb73f8e65d2e9217e"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "0b1e6d26457dcfc7a0cc1513aee343c4"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "0ef4a292a5c6ee1e2948e786d93354e3"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "4446b8efc3bbda003976ba962ab2ad1f"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "70e983b64193f51f2057eae9dd7f6ace"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "22a2f77fd7b4d65aa0184dee987f81f9"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "bc772281ce137c58e09cf08ce43b513c"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "56efed0d91fc053247f42cd17b237510"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "4bebbf045340501784c23a936abfa30c"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "e93b1f28909ae25e1f763a4a27516689"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "a136af3e5d3b4993f1549417ec72cdd1"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "65a50972e5fe6ec754525a53cf6b14c9"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "25c7640f5c51f561b244160af2403646"
  },
  {
    "url": "pages/fb5fc5/index.html",
    "revision": "2f547436e5f98463ac5304855ab6fbdd"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "tags/index.html",
    "revision": "ea533a52e4c6fb45c66aeaa23a018d3e"
  },
  {
    "url": "zai.ban.qian.yan.html",
    "revision": "d14489f3e4c51817df1fa6ef9f3c1297"
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
