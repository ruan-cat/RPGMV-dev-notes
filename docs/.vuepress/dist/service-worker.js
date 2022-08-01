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
    "revision": "8ccb6c3b9c30297e938fba7e0d10c2cb"
  },
  {
    "url": "assets/css/0.styles.ead3373e.css",
    "revision": "291e2daeb4752faa0dbed280003e612d"
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
    "url": "assets/js/10.8940c8c3.js",
    "revision": "03dfe9fe041e3a6ddb576c862e2f1727"
  },
  {
    "url": "assets/js/11.e452672a.js",
    "revision": "6712e5a75ac061f021b286bd003b353f"
  },
  {
    "url": "assets/js/12.4127e9af.js",
    "revision": "c45911e62c042b17f601d9bb01a67289"
  },
  {
    "url": "assets/js/13.761a4e5f.js",
    "revision": "bc4918ecefe49f4b18d2d58a9537876d"
  },
  {
    "url": "assets/js/14.b290d193.js",
    "revision": "03f1341ae3fbd2a21fe0fa8d3752a84d"
  },
  {
    "url": "assets/js/15.ab38392b.js",
    "revision": "66f1eebd7aa31d511ff5cf21d461636f"
  },
  {
    "url": "assets/js/16.78bd388d.js",
    "revision": "ae649b1a86fa95d70b7e3e055faa242d"
  },
  {
    "url": "assets/js/17.820aadb5.js",
    "revision": "a7fc30f4752508864f1a02bbc38e5145"
  },
  {
    "url": "assets/js/18.32f1dc2a.js",
    "revision": "339a86a54edf6602e48e30f2d1060ecf"
  },
  {
    "url": "assets/js/19.eb77f256.js",
    "revision": "57c6b7705e3f255535782be992b8eb45"
  },
  {
    "url": "assets/js/2.847bc281.js",
    "revision": "84cbb09e1ae4a70258ab7f7ea562065a"
  },
  {
    "url": "assets/js/20.3a4f5392.js",
    "revision": "7463928ea24a7c607575318f115e2efd"
  },
  {
    "url": "assets/js/21.88233420.js",
    "revision": "6a575347f2ab4a428843adb6e6e62167"
  },
  {
    "url": "assets/js/22.58c540ee.js",
    "revision": "f7f50b08b35f7cb7621d5c12ffe1a3e3"
  },
  {
    "url": "assets/js/23.dc9fa351.js",
    "revision": "8023ed0d8e8797a8d823fdfe6b734e9c"
  },
  {
    "url": "assets/js/24.2f5b7994.js",
    "revision": "837d55ec077290973a447b75208c31f1"
  },
  {
    "url": "assets/js/25.519ba199.js",
    "revision": "8a14f879c217827e6339e2397dfa23de"
  },
  {
    "url": "assets/js/26.09c394a5.js",
    "revision": "e2b2b02508531b17c9ac4a06dc175e27"
  },
  {
    "url": "assets/js/27.4aa24316.js",
    "revision": "bce281f5428d940821318bb3a96de211"
  },
  {
    "url": "assets/js/28.c2873a52.js",
    "revision": "40008baf0a9d84fe59bfd50a3dd40061"
  },
  {
    "url": "assets/js/29.5a0d387d.js",
    "revision": "1a1dd8d57e2c4da746f1dead574c6381"
  },
  {
    "url": "assets/js/3.21ed67dd.js",
    "revision": "a0334631491a5344b3288a2926225ed9"
  },
  {
    "url": "assets/js/30.9a60363b.js",
    "revision": "a113955493077c8aef0c494d22f21525"
  },
  {
    "url": "assets/js/31.5cabf6d9.js",
    "revision": "22451b25e782fbaf4b8f41924c5ce78b"
  },
  {
    "url": "assets/js/32.aa67e481.js",
    "revision": "fee13e3ae9b62092119432a5301f5156"
  },
  {
    "url": "assets/js/33.51b4dec4.js",
    "revision": "b5d5cb661a8688e72369f98e7cd79bc8"
  },
  {
    "url": "assets/js/34.f7015a9d.js",
    "revision": "f9c9d3b4cca08e6f88d648c945b26c59"
  },
  {
    "url": "assets/js/35.81194fb5.js",
    "revision": "b9c6cc821140600c574de877d566b5b7"
  },
  {
    "url": "assets/js/36.9cd6587a.js",
    "revision": "ecf2f6f878c435a4448093698b09c983"
  },
  {
    "url": "assets/js/37.214cecd0.js",
    "revision": "41e74182f6281bcecb698c32774db8a6"
  },
  {
    "url": "assets/js/38.0d590d41.js",
    "revision": "96ac35104d2667be7136a3ca10ac3178"
  },
  {
    "url": "assets/js/39.772dc50e.js",
    "revision": "dca8b5fa4b331b677e8502078e1d3d55"
  },
  {
    "url": "assets/js/4.19fd35e1.js",
    "revision": "2e12bd2f2536507a324b8a7745af7854"
  },
  {
    "url": "assets/js/40.4778be27.js",
    "revision": "1a4b3ddd9a6312281f30fee0769e3285"
  },
  {
    "url": "assets/js/41.3e5bdc34.js",
    "revision": "cf0fe8d19237de9533d4a5ccd3683ed1"
  },
  {
    "url": "assets/js/42.41456093.js",
    "revision": "5d568069c3a4e024aba68b8fdfddc6bd"
  },
  {
    "url": "assets/js/43.2be3b76e.js",
    "revision": "098c93b0585bd1e0279e53c4081567f5"
  },
  {
    "url": "assets/js/44.c94709ff.js",
    "revision": "2b17488f2662b9792b0c2fb8f55e24e1"
  },
  {
    "url": "assets/js/45.76ed8318.js",
    "revision": "9b559a23fba4e641db05ee0e3a9d6584"
  },
  {
    "url": "assets/js/46.11312f6b.js",
    "revision": "885485d4e454d605b06913f781352970"
  },
  {
    "url": "assets/js/47.483b7648.js",
    "revision": "69c3945c5c14db0f8a80245defcd0885"
  },
  {
    "url": "assets/js/48.563b3f9f.js",
    "revision": "3dd6f3a0b4f63b014d0307248a0d7d77"
  },
  {
    "url": "assets/js/49.552608bb.js",
    "revision": "e62f0205d921e02e9892c443f388b22b"
  },
  {
    "url": "assets/js/5.eee28d9f.js",
    "revision": "87206abea4d48fa4a23e56a7c0a1014c"
  },
  {
    "url": "assets/js/50.ed2a62b3.js",
    "revision": "86ca56d97569ab02032121267f2f147b"
  },
  {
    "url": "assets/js/51.3790c9b6.js",
    "revision": "fddbc162a623c9d5435c2226565326dd"
  },
  {
    "url": "assets/js/52.8c6d132f.js",
    "revision": "76e3b9bbd26e2a582e0e54bda6ec4e1e"
  },
  {
    "url": "assets/js/53.bb936391.js",
    "revision": "7762d94090ea2c473df5fd685f98f285"
  },
  {
    "url": "assets/js/54.03df0dc7.js",
    "revision": "3d20cbf9e413e7dc8bd41107eaefaf1a"
  },
  {
    "url": "assets/js/55.f4e6e98c.js",
    "revision": "1be1a385d9864b21ae9dfba983fb7874"
  },
  {
    "url": "assets/js/56.9b575a2b.js",
    "revision": "b68cefbd394fac2a5b585a210f030f4e"
  },
  {
    "url": "assets/js/57.df1d0f14.js",
    "revision": "8b7e63cb54615fb306af0bdc2d14d6eb"
  },
  {
    "url": "assets/js/58.165287e4.js",
    "revision": "bbc4e3e4074e21853a5cc1097c1d1d5f"
  },
  {
    "url": "assets/js/59.eeb2d8d8.js",
    "revision": "51afa02a152dc9a76e57f361bfd15e57"
  },
  {
    "url": "assets/js/6.10174a92.js",
    "revision": "43da562a07f27229a56ea629f2210f9b"
  },
  {
    "url": "assets/js/60.0feb16fc.js",
    "revision": "73c960a65334b7624d99273d1a9aead4"
  },
  {
    "url": "assets/js/61.1e4b2ad3.js",
    "revision": "338edec1f2374bc18088d80180c46888"
  },
  {
    "url": "assets/js/62.152a3230.js",
    "revision": "c469005209159b147fd9672748982084"
  },
  {
    "url": "assets/js/63.d1577535.js",
    "revision": "15fe69b8db30e1d65de7f056b038e969"
  },
  {
    "url": "assets/js/64.d1c8e132.js",
    "revision": "021e8844ef0f0dde049a4404bd542559"
  },
  {
    "url": "assets/js/65.8d89948d.js",
    "revision": "39c79f06fcaf0be0db1e909808932c21"
  },
  {
    "url": "assets/js/66.ff310058.js",
    "revision": "c820d56539a5440071903a1a708a0da1"
  },
  {
    "url": "assets/js/67.d4b15986.js",
    "revision": "78bbe931708017fe61e4d4be2540f830"
  },
  {
    "url": "assets/js/68.d72a191f.js",
    "revision": "d622794e539c5214a9addf7c850fe48e"
  },
  {
    "url": "assets/js/69.f3d99103.js",
    "revision": "4ea4c8b8553d92c19c5415efaff66867"
  },
  {
    "url": "assets/js/7.6d9d85dc.js",
    "revision": "c9c926a9dded3d1712e0ad2d19799cc7"
  },
  {
    "url": "assets/js/70.e9e62218.js",
    "revision": "6ae6b77ae39a2dd73980b0e627bdd120"
  },
  {
    "url": "assets/js/71.eb0ecaaf.js",
    "revision": "336b23096922648bbd63dff95802a437"
  },
  {
    "url": "assets/js/72.475d331a.js",
    "revision": "c09b71bfefbceccb16a393740b4d5ebe"
  },
  {
    "url": "assets/js/73.4847b29f.js",
    "revision": "f5974b0ca358e03f87120c25d62b3686"
  },
  {
    "url": "assets/js/74.46770bb9.js",
    "revision": "a66afe7ba16fa9f0afc7b01b932b856e"
  },
  {
    "url": "assets/js/75.0d3ed0a3.js",
    "revision": "a0a33708d6c75f03bd148746e9cb309e"
  },
  {
    "url": "assets/js/76.7e9ba24b.js",
    "revision": "048eed9e86e8daccb40ac776f2db23c7"
  },
  {
    "url": "assets/js/77.312f886b.js",
    "revision": "5cba486e75b86fba124cb3e37f19c111"
  },
  {
    "url": "assets/js/78.0dc3e45b.js",
    "revision": "9aed5c0a3fb8fd21ba825855f3a9eab8"
  },
  {
    "url": "assets/js/79.38417ee6.js",
    "revision": "8a3db272e4386aa994b8e9005ff59762"
  },
  {
    "url": "assets/js/8.a648af3f.js",
    "revision": "8169aa75d4e871b1bef8da074058c625"
  },
  {
    "url": "assets/js/80.63178d7b.js",
    "revision": "c1e821475021c6f3ad14f518d91ff002"
  },
  {
    "url": "assets/js/81.bbd6bd1b.js",
    "revision": "54e46e938fa13f1407fdfbb7271d0437"
  },
  {
    "url": "assets/js/9.0c8cc0cf.js",
    "revision": "d644a3e08b5750d76c8a90a2685daada"
  },
  {
    "url": "assets/js/app.2bf7e2f6.js",
    "revision": "096bc324970b092dfed4be30739904e7"
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
    "revision": "e9452e9386bfe07475bcf0550c8baba3"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/07e629/index.html",
    "revision": "3ce22c4f36962ccf65cc7ff2cca42981"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "8a8900100f0d4d3241c015328574615b"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "f4677355e6f3b2f3bfba4e894f1b4e83"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "091e4ac86295edae0627cc38baa36d52"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "f9cddefb8f004006ee9b64e1b5616a0d"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "59e7d6c2d08931caf8749c0a736288b9"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "cab6617ca3ff0ccd265137d52783cc34"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "d99fb0dac725698324047e517c62672b"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "c522e99d8fd5ff90dc93256cd1ceead2"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "8526061e92a61c4d129e20a4253a240c"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "dad4ae7ec68af489e0a79ee1a93da613"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "90839bfb1d89b6055db55777b6d27e9d"
  },
  {
    "url": "pages/452b27/index.html",
    "revision": "040a4cc87957bb5513756c9a52290305"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "d5b6cac65e49bcee2caf61792fff7b12"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "937716718a46317ea64812abee643de9"
  },
  {
    "url": "pages/4c52ff/index.html",
    "revision": "cc0c5d4f52193d95a942e63db3e9488e"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "21df48b5525dcd2194cb4c28f6fb1aaa"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "e844b382e383f15f3ebc299e084d3fb3"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "283da4a1415ee675da4348c0267138da"
  },
  {
    "url": "pages/68697d/index.html",
    "revision": "8c703bfff9616765918b4d7d99978509"
  },
  {
    "url": "pages/6be093/index.html",
    "revision": "b23df347ae6475b54fc69e0d28521866"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "24d3a477161279070fd9eb8c10c941db"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "4b5ec288caa9752dad1c294078016770"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "532d6ccf00a4e725350bdcdfd6fc818d"
  },
  {
    "url": "pages/7b95b9/index.html",
    "revision": "55c319be36b50618f56715eb9ade67fa"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "b094d94566ed4ed76ba7b2a81fb6485a"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "c9bf22f86b07674eaf2c0b82f71ea587"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "1a90f53f080e89f1f9b0df57ebc47861"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "ac0976f4138d205adb0206254a841edb"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "c864e634a64f86753533847d8de4abb5"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "24c6715c657452953cf6197cdd5aec41"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "0d1f06400ee20874a5339e26fdcf8aab"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "9cfe0954a1880cf86e58cb55de5ef702"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "6dbe350777297a49c8041f75cbf6e4f9"
  },
  {
    "url": "pages/a6ca3a/index.html",
    "revision": "dff34d21016155096b393849bff26d91"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "7e0d251f8df1e205bc3abbd9dadef7da"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "5e368a0ac1a14fe4f3d09ebef1507009"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "3b2ef5b79f4004b9eff40c5ac9a7edb9"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "f305989fd6448114a05d3363c5251e9d"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "280592da3ac7e35e8a284f207cf73d84"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "54e0cd1141efbb6489de4e91b094c550"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "8f2545e981c1933313e6a5d34e3aee05"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "55c20eee142e104a95b641e84545be0c"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "b6658696cb10a1056c40f97a64fbca9b"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "3f970882325d27fa36c76ea60297614e"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "c7ef18267a45aa5c2a188331e6fe843b"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "14c316274abbb77a43125551c42cf0c4"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "0a086c10ed3505ee2689b6d8e63613bc"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "0b916edf80a06211bb0907cfd1ac6d5f"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "be8cb8f06bcf87486abf0fd1ec41b853"
  },
  {
    "url": "pages/da3888/index.html",
    "revision": "71a1e1b10b4046f3de7346d4be8d55f6"
  },
  {
    "url": "pages/dc65bf/index.html",
    "revision": "02f5391ad5f8248975a39699696f24ec"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "50c2b35d5be0ea8051765a6b642c9179"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "c264430fe0e50dd153a2a5d64a28294d"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "15e403a0f1178a07e09b3a0512435edd"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "f1580ff30b4e8d141f82b32ea5bc202b"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "88deb65ef1b7dbc02dadf637127cbfc6"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "bfdd33b23d4c30af7fa519566b7481f1"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "c1e833af7a7e9af54d2697f9c0adfa7a"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "45af1f62195351a8a1711721fcc82638"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "b37cd387c33dedfe2b0ccf925c3b4c15"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "8ec0156abb5d35a86bf7345facde641b"
  },
  {
    "url": "pages/f65105/index.html",
    "revision": "0840f238f54ae693f6a8b061cb742c58"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "f896389b32e0f936ab0ece20be777c6d"
  },
  {
    "url": "pages/JavaScript/class-inherit-overwrite/index.html",
    "revision": "cded02d756a6f7b1ef03477d77cd5e6e"
  },
  {
    "url": "pages/JavaScript/index.html",
    "revision": "5e2e2e8f2d9d893ec05ff4854d0b6d43"
  },
  {
    "url": "preface/index.html",
    "revision": "180c044ddb55860072b565b50c88b3bc"
  },
  {
    "url": "resources/rmmv-source-code-translation/index.html",
    "revision": "0edc099f16473576abb7af2e71c2c998"
  },
  {
    "url": "rmmv-base-js-course/How-To-Get-Start/index.html",
    "revision": "16cc4533c6e2a87674618de8d843a696"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "VScode/settings-json-formatOnSave/index.html",
    "revision": "2b8d754d2d24a98d239be28d2178ba68"
  },
  {
    "url": "wang.zhan.shuo.ming.html",
    "revision": "2f2e7a975194ee60427ccf60c04dada3"
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
