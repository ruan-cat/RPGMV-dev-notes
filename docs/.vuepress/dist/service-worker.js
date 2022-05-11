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
    "revision": "72609d2272c41b34a5c031af7bc3dac6"
  },
  {
    "url": "assets/css/0.styles.a8c97304.css",
    "revision": "eb6165af38ab63e40e5341bfdd617d5d"
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
    "url": "assets/js/10.31c12c20.js",
    "revision": "1715f1714e7824b0872ad686c3711071"
  },
  {
    "url": "assets/js/11.21331f14.js",
    "revision": "766ea2f526a634a7da7d90a77e3cac5c"
  },
  {
    "url": "assets/js/12.7d4a349f.js",
    "revision": "096f6415ec87f3f8205bf3204d75380a"
  },
  {
    "url": "assets/js/13.ee840f1d.js",
    "revision": "e5f026678e291f253c9ac48d0b4ac19b"
  },
  {
    "url": "assets/js/14.53b377d1.js",
    "revision": "ec5df6f851cf6919a5216f44e6117746"
  },
  {
    "url": "assets/js/15.7adc8e8c.js",
    "revision": "1a53f7068320dda51b3ae77aadc067fa"
  },
  {
    "url": "assets/js/16.ac950f27.js",
    "revision": "dca4d3a8cb9d120e9197b595d83d96a8"
  },
  {
    "url": "assets/js/17.2b19da35.js",
    "revision": "57bb342033883020ecd3b2d37e952ea4"
  },
  {
    "url": "assets/js/18.4e73c565.js",
    "revision": "f084c6102e1fb7fec3425bf3e267d0a3"
  },
  {
    "url": "assets/js/19.35a1729c.js",
    "revision": "539d008eb4c007b24a97befd66659b47"
  },
  {
    "url": "assets/js/2.9e2f5094.js",
    "revision": "1c18fd19d390f540ce53d1f282189919"
  },
  {
    "url": "assets/js/20.d2fd57ce.js",
    "revision": "5def411f5d2e3aa78b5a792df63057ac"
  },
  {
    "url": "assets/js/21.61a295ac.js",
    "revision": "4e1bdefd89a6ced6db91a7ca76c7e318"
  },
  {
    "url": "assets/js/22.871f9928.js",
    "revision": "d4f36d2e1204674505b7c48cb81fdd3e"
  },
  {
    "url": "assets/js/23.261671c5.js",
    "revision": "7224667a4706e9f612f18c6589e62b4d"
  },
  {
    "url": "assets/js/24.ff830f46.js",
    "revision": "2b96501c88d6c6bc11bcafe287c18fe6"
  },
  {
    "url": "assets/js/25.98e911ee.js",
    "revision": "932a53fc418f28b4e3b31ea4f6190f78"
  },
  {
    "url": "assets/js/26.efe24ae1.js",
    "revision": "336725a9273208eb89a238cddd96cca4"
  },
  {
    "url": "assets/js/27.753caef3.js",
    "revision": "d6b37de5254b7b44bd3fe1e71fd7a384"
  },
  {
    "url": "assets/js/28.a0e0de41.js",
    "revision": "8b5c363dca826d8bb3ff80fa5ebdc0a8"
  },
  {
    "url": "assets/js/29.3e035ee5.js",
    "revision": "257971bbd078af4efc192eba50b96d66"
  },
  {
    "url": "assets/js/3.dd283f9f.js",
    "revision": "4c68ec085200edaeb1725c743c3aa80c"
  },
  {
    "url": "assets/js/30.02cb9d46.js",
    "revision": "9fc9f687ffa22fa8e99a190295b596f0"
  },
  {
    "url": "assets/js/31.4e128987.js",
    "revision": "d4b9097a961a28fc796d8eab20618efa"
  },
  {
    "url": "assets/js/32.4dee021c.js",
    "revision": "73f6cc15bb5b159beb6a983a2c0715f6"
  },
  {
    "url": "assets/js/33.2bd1a398.js",
    "revision": "da11e83fb2f3993ae6d1929ee87aae75"
  },
  {
    "url": "assets/js/34.49e63ebb.js",
    "revision": "d4f8c07208f784b3a73d91a61b5cb126"
  },
  {
    "url": "assets/js/35.1e9352b1.js",
    "revision": "5880ac7f078c63f73f937d20d5c262eb"
  },
  {
    "url": "assets/js/36.74aa5509.js",
    "revision": "4fadabde4633b4b7b3623f93ec1136dd"
  },
  {
    "url": "assets/js/37.583cbb44.js",
    "revision": "e15311fcc4dbe3ccdb2b2f7d14f43925"
  },
  {
    "url": "assets/js/38.84bd98ac.js",
    "revision": "f531628bd41e9f23b1e05b4366d2716f"
  },
  {
    "url": "assets/js/39.fa015338.js",
    "revision": "d21be84d8b3f8f1c77b311ef6b426e71"
  },
  {
    "url": "assets/js/4.f9c1587f.js",
    "revision": "904dfb600da3d03a9d6771b576176747"
  },
  {
    "url": "assets/js/40.676cf0b3.js",
    "revision": "d6865196861f5483148ea5efede572d8"
  },
  {
    "url": "assets/js/41.eca8577c.js",
    "revision": "bd6c7ab65586c5b3bbf83a141d1c632a"
  },
  {
    "url": "assets/js/42.4adfdd8d.js",
    "revision": "9c5b623176d102b4431997ef2a7bba6e"
  },
  {
    "url": "assets/js/43.cf8dcf5f.js",
    "revision": "965f04f16a8b9ad8fb141700ccda302f"
  },
  {
    "url": "assets/js/44.732b342d.js",
    "revision": "1e5ca6ea178c134952f90669d175b329"
  },
  {
    "url": "assets/js/45.77390733.js",
    "revision": "af0c2772c468bfa0ff53c9ed7ff58cde"
  },
  {
    "url": "assets/js/46.14077329.js",
    "revision": "0a03ceba425f5e7641e146523426e935"
  },
  {
    "url": "assets/js/47.0209ef1d.js",
    "revision": "2dc196534fda80a22a7664801e318425"
  },
  {
    "url": "assets/js/48.79dd6875.js",
    "revision": "bb05e3c36b43aea55fdadb4d801cf6e8"
  },
  {
    "url": "assets/js/49.4044970e.js",
    "revision": "40747bd61b6af1dd262323292f5ed5b2"
  },
  {
    "url": "assets/js/5.b24dcf3e.js",
    "revision": "ddd851ddab7508037517d3f0531d148f"
  },
  {
    "url": "assets/js/50.d3c0ab3a.js",
    "revision": "1f33774426c46a46921158518082b19c"
  },
  {
    "url": "assets/js/51.e110d2b7.js",
    "revision": "8cd3bc60938a40c84ff7c57824042ffc"
  },
  {
    "url": "assets/js/52.6b8ce26a.js",
    "revision": "89dbd8a54434a1c62c94627abd5d183b"
  },
  {
    "url": "assets/js/53.533f79cb.js",
    "revision": "bfac22fea33b90e16804e974fd225d12"
  },
  {
    "url": "assets/js/54.0a21df8b.js",
    "revision": "b44a41f02ea05885e3de34691e2c679e"
  },
  {
    "url": "assets/js/55.436539aa.js",
    "revision": "3a1a71a7aeb90b37f3cc61845f5332e2"
  },
  {
    "url": "assets/js/56.376e37aa.js",
    "revision": "8da18b63ab7841ad1a7c6bcf60c45f3f"
  },
  {
    "url": "assets/js/57.80a75be9.js",
    "revision": "6250aa54bcf26022f92a52bc46ad04ce"
  },
  {
    "url": "assets/js/58.79d0a7ed.js",
    "revision": "61a7a58468fdebbb711107bf6c7f15ed"
  },
  {
    "url": "assets/js/59.dc47fa3f.js",
    "revision": "d70365ba3d2f7aae58738d2e285ee5e8"
  },
  {
    "url": "assets/js/6.5de718cf.js",
    "revision": "75add762c3bcd88c94f9615724ef19d3"
  },
  {
    "url": "assets/js/60.399dc07d.js",
    "revision": "79070a670891968ff30edd897a423298"
  },
  {
    "url": "assets/js/61.4ee55e45.js",
    "revision": "8f988e4671dcdaa90f02b6df01814c61"
  },
  {
    "url": "assets/js/62.76d90b92.js",
    "revision": "85314a94d036ed295417c0a6eaaed6fc"
  },
  {
    "url": "assets/js/63.bc77063f.js",
    "revision": "3cd51cfe3ed9cb7eb7f814e452d92ed7"
  },
  {
    "url": "assets/js/64.cb252efa.js",
    "revision": "8d4896d175372f0cbd3e790006c7cdb6"
  },
  {
    "url": "assets/js/65.58107ed5.js",
    "revision": "91d71d70d209637b17b3d24613f46ebd"
  },
  {
    "url": "assets/js/66.e90c4f4c.js",
    "revision": "69f755380000dbd4f82069a9e9f3f149"
  },
  {
    "url": "assets/js/67.2809d159.js",
    "revision": "c84c0a1f4d4af60f8bf02208f2da486c"
  },
  {
    "url": "assets/js/68.39d90b70.js",
    "revision": "33d097c4acc3d8401d645c2fe3946803"
  },
  {
    "url": "assets/js/69.8afd134e.js",
    "revision": "6eb1ddcfaff4d7efd65c7248282b7923"
  },
  {
    "url": "assets/js/7.7d80c2b9.js",
    "revision": "c2852d1994ebcd7d8d98644cf8f9071e"
  },
  {
    "url": "assets/js/8.2b113649.js",
    "revision": "402889c312e7fbb370c302a6f9f10d63"
  },
  {
    "url": "assets/js/9.f309d9b3.js",
    "revision": "979d97f7471ae53e965e9e9cd67c6217"
  },
  {
    "url": "assets/js/app.b1152eaf.js",
    "revision": "9795bf77888bf90dec0ef53de7420844"
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
    "revision": "42fe70b3c1a0945c6d24a269031d516c"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/07e629/index.html",
    "revision": "17cb4274f1c61b59731803ab26c19ba5"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "76d79f82b1a48394defeef0a0a3f7157"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "bf1091c55de32e08509abff7602fca04"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "2eeaa18cf960d01953bd46727370329a"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "f0d7337e26b1d57424a9a65b23c664af"
  },
  {
    "url": "pages/168760/index.html",
    "revision": "8ef6ab9d45a018f9b0e589d595174540"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "d812660076c98c4fbfe60268882c177c"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "c958b12b5e290d2a423dfbab44955516"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "5d5b2dc2b69b1e60ff2935136e1d1981"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "b08d9fdaa681bd6e6fdb19fe52af3628"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "888c874acbe95a5d0cd7d936c9e963e2"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "f1b02bcbcd4a8517d7f4989917b87888"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "bb3ab67a800ffd191e1c93fb585292b3"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "127b0709a508b6328e7ea7260c6f50db"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "6463eab7542216379b25ee306f81b820"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "add184d54aa31e4f63bf0788d451714d"
  },
  {
    "url": "pages/4e74f5/index.html",
    "revision": "40789ed2ba3c45ff209b7f650f407611"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "a128bfbabd2880e47871803b342eec3d"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "b225d48a27301744581acb21ea3aa41e"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "a85e43c9a0d8c8ef18f50cc2558cb81c"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "21288489461b498ed6cd6afc09f46236"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "394e40009b3d8346e6612613ab6e357c"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "813f7558c851d29b27adecada495765e"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "6257523ada4e7b2738d94f688d95f89c"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "27ebd7eaacf4652773d1b4c09961c144"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "1a457cfb3fb18f4bc9673b14c3b107e9"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "476898473edbd67d0f6d3aeb8457a1ad"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "e4a5c74a6e6fd0f18d05ff78dbe58c96"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "364f1752d596a850a2e3ea5a93d5ad25"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "bd4da5c1f123de28be357f7418616844"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "3bdcbe6b8dddd5270a1718b2589ee268"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "95a9ddada952f8d7fadf0391594f60d2"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "9250782e6e47bf8c1797af2082c2aaee"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "8c278ccab88a25b6d8fd39450c0ba8fb"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "d27b92a9815ba91e15f52b56d7fc3dd0"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "1b3838ece6b892a56092d0722b3fa4f9"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "8b73beb0e9578fca6273abbf765b4a71"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "33a618102e3bc05a2a0f6f2a7dae51b5"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "65b8439cd48fa1eb4b8f5d27a2ce1416"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "f938c5bb79615965d37249057f6e08b0"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "fc0c2c6895b2c244e33cce44b36b42ec"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "368cfe67c15d42259995dbdd4e3dde06"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "028a186f0e67c6701b342ed7146e1637"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "a9c9e9a22c095c48b1c5e9e93ece5b51"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "197410610a735fe52d6fdcea920d6407"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "5fae3e0760ef292de9c77324fedef62d"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "e65efcd41f705dc19e2b258bb983f3dc"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "b90545c0cab941bf7679f6d8ddd7ef88"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "b327e5ea4d876663f24d369ff106c610"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "6d7e6664b6fb5d23786698e35aecd98c"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "3f7983121f61fb6ee9ba5432199aec31"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "009fc927cad407ae570f79a1e78d374a"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "bd6a68e8ad6e5f79a20795945826c586"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "2ff4f9ef2f4a1c38ee26c3e0118a7e03"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "a525517568b9969fac66484c23613c6a"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "568576b669d91aeab9cd448b93857d7e"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "bf2fcd606d9301f37e101068bac95529"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "e2445ab1228f10dcc9ee472ba628117d"
  },
  {
    "url": "pages/fb5fc5/index.html",
    "revision": "aa432e0d2cf27fc61726ffcdb79365ef"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "zai.ban.qian.yan.html",
    "revision": "44ea92f30ae582184ea6a46561ab29ad"
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
