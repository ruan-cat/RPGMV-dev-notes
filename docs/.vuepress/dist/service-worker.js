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
    "revision": "bcc4a48a3d3ffa4ae361633dc226fffb"
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
    "url": "assets/js/10.5cfad186.js",
    "revision": "da61a445625b02d7fadcafc5d5acc9cf"
  },
  {
    "url": "assets/js/11.88f40c7a.js",
    "revision": "9c3e77a17e08304d44fad589d8438805"
  },
  {
    "url": "assets/js/12.427fd13f.js",
    "revision": "898db50f678254264b903ab32f8ffe9c"
  },
  {
    "url": "assets/js/13.e4f9ab84.js",
    "revision": "7de201ade0fc3f6e7c4b195dd86343cb"
  },
  {
    "url": "assets/js/14.150259ba.js",
    "revision": "3da40731a49c47e0a5977e2c7934271f"
  },
  {
    "url": "assets/js/15.985338f1.js",
    "revision": "fce66b3b6525f925ed9e11e38c535cd5"
  },
  {
    "url": "assets/js/16.1f204020.js",
    "revision": "9a0de6620e3d567360982b252f5be029"
  },
  {
    "url": "assets/js/17.a87cda05.js",
    "revision": "334544cd287f101042873a619ab29e74"
  },
  {
    "url": "assets/js/18.4b1b76aa.js",
    "revision": "a591967871f746f542a3aaafba297bcc"
  },
  {
    "url": "assets/js/19.38e702bb.js",
    "revision": "051acdf11cede042d1fe45d59c7373f3"
  },
  {
    "url": "assets/js/2.8b7a0c79.js",
    "revision": "84cbb09e1ae4a70258ab7f7ea562065a"
  },
  {
    "url": "assets/js/20.bb7f2b78.js",
    "revision": "19288efb7d010e3d126cb3608a072ffa"
  },
  {
    "url": "assets/js/21.16730c2a.js",
    "revision": "8384a77034c0a4ba74797c203bbd76fa"
  },
  {
    "url": "assets/js/22.cd4808e9.js",
    "revision": "302fffc65e3dca2094678b020e6f282b"
  },
  {
    "url": "assets/js/23.cd4505e3.js",
    "revision": "e655eb7499599f1774122c15a2e30d0e"
  },
  {
    "url": "assets/js/24.c58a75f2.js",
    "revision": "395c72081a01edda0a744b8be344535a"
  },
  {
    "url": "assets/js/25.87d6dd85.js",
    "revision": "fbc0cd143c19ccd9a83c81c4104c60a4"
  },
  {
    "url": "assets/js/26.e7a001a1.js",
    "revision": "ae593d4206ba0a6b54fa883aa02578d7"
  },
  {
    "url": "assets/js/27.5d655ab0.js",
    "revision": "84ee26cec4c929cc2c52b8c17a4f2f37"
  },
  {
    "url": "assets/js/28.558684da.js",
    "revision": "3618a420fcb932e0b3e20feee50adc05"
  },
  {
    "url": "assets/js/29.326a2a71.js",
    "revision": "5c6c6ae77500ba0a920b6fda129e86b9"
  },
  {
    "url": "assets/js/3.ad74109f.js",
    "revision": "5f1a4f1d9c89a81728130c9a9fe06f63"
  },
  {
    "url": "assets/js/30.3b06d3b7.js",
    "revision": "86e47326a09c8946eed8f0f15c9c6fda"
  },
  {
    "url": "assets/js/31.158600cf.js",
    "revision": "168929462340129486dd45687432ea6d"
  },
  {
    "url": "assets/js/32.3960c64b.js",
    "revision": "872d2dbbe0862a1472fc7635ebb29bde"
  },
  {
    "url": "assets/js/33.ce16e68a.js",
    "revision": "213e1044156aa59e7c3424428f9f08cd"
  },
  {
    "url": "assets/js/34.7936512f.js",
    "revision": "f16d6711efa45d0878b02b228162903d"
  },
  {
    "url": "assets/js/35.fa894cef.js",
    "revision": "66058b78ea98d6c570c104d53e3d8474"
  },
  {
    "url": "assets/js/36.bba39749.js",
    "revision": "735db14702618a56c059e20459819134"
  },
  {
    "url": "assets/js/37.965cc35b.js",
    "revision": "45fa422f66f7635a04c1eb7410ee42aa"
  },
  {
    "url": "assets/js/38.b6318cef.js",
    "revision": "6d9ad1bcf30c8f4e1b413970db8c7ad3"
  },
  {
    "url": "assets/js/39.eaa71191.js",
    "revision": "1c5877a9dcbb2b93344b52b63a1eba89"
  },
  {
    "url": "assets/js/4.19fd35e1.js",
    "revision": "2e12bd2f2536507a324b8a7745af7854"
  },
  {
    "url": "assets/js/40.7a9b3621.js",
    "revision": "7e9fe6bc7fff8cf9ecd964cdfe8b7099"
  },
  {
    "url": "assets/js/41.89732f10.js",
    "revision": "1cdf1baf523449854d55362cc7cc81e6"
  },
  {
    "url": "assets/js/42.43705594.js",
    "revision": "efb4db61e405ea74d35c281f8da5c6e9"
  },
  {
    "url": "assets/js/43.d7176e44.js",
    "revision": "63182ac6e7dc662219535b9efe79f260"
  },
  {
    "url": "assets/js/44.56c20c94.js",
    "revision": "ebb7b74614aa2a9188b8daaffaee98f7"
  },
  {
    "url": "assets/js/45.d7e9ec8c.js",
    "revision": "8cd19fadbe099a924978f85c33e1a7e2"
  },
  {
    "url": "assets/js/46.c1b3b703.js",
    "revision": "8d097dd2db8f201948b3bf671d660763"
  },
  {
    "url": "assets/js/47.e6731d10.js",
    "revision": "422076e3368e2f8f9fc35ed93c3699e5"
  },
  {
    "url": "assets/js/48.a92ef85d.js",
    "revision": "e540c05c3e6fa687657896fb65b9198c"
  },
  {
    "url": "assets/js/49.d683ffdb.js",
    "revision": "97117b5784fe629aa0b08bdd47dde0fe"
  },
  {
    "url": "assets/js/5.ec2f3e58.js",
    "revision": "baf8e8726cf23a063762871013109e5f"
  },
  {
    "url": "assets/js/50.6a5e3702.js",
    "revision": "00d97ddf4d95bb1d183632524bee3f0c"
  },
  {
    "url": "assets/js/51.77eae6d7.js",
    "revision": "4375c51bdab74a171dcb6e23cd15fbd7"
  },
  {
    "url": "assets/js/52.646ef7d3.js",
    "revision": "758a5d535d152a2c291d164fcbfcf919"
  },
  {
    "url": "assets/js/53.1eec52a2.js",
    "revision": "ff9d5382aa38e539ca0ee559b8bd82c6"
  },
  {
    "url": "assets/js/54.c24cf9ec.js",
    "revision": "96296ab49c161a48da2cfc9332716989"
  },
  {
    "url": "assets/js/55.f4e6e98c.js",
    "revision": "1be1a385d9864b21ae9dfba983fb7874"
  },
  {
    "url": "assets/js/56.53a5f4aa.js",
    "revision": "0735bbdcbdb4af99dddba233f124ffc3"
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
    "url": "assets/js/6.0ac7fc6f.js",
    "revision": "800e410eb8c83f007c6e456ae7c4e98b"
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
    "url": "assets/js/63.993e4280.js",
    "revision": "d596aa04cc6adbfdebd388d26ffeda12"
  },
  {
    "url": "assets/js/64.03c77746.js",
    "revision": "230fde296a0362bcc2de6e645297f807"
  },
  {
    "url": "assets/js/65.34d4af3b.js",
    "revision": "8d68644c4fc05dc3d4d71ad0f1e937f8"
  },
  {
    "url": "assets/js/66.39454c86.js",
    "revision": "23fc9621fce45a1fb01d728d792c1bc5"
  },
  {
    "url": "assets/js/67.4ac553b3.js",
    "revision": "ddcfe10efa4c8ac60934e4de923ec121"
  },
  {
    "url": "assets/js/68.719c6692.js",
    "revision": "eab1e4a4ad347fed9bfa0d398a29359d"
  },
  {
    "url": "assets/js/69.66da9cb8.js",
    "revision": "11a681f56171747a859d854fc80c081f"
  },
  {
    "url": "assets/js/7.00a7dd3f.js",
    "revision": "194d56ac0f0bbeb26203ca996e118e8c"
  },
  {
    "url": "assets/js/70.f4bc1c27.js",
    "revision": "290dbe2487b1dd4ee776492663cf6df1"
  },
  {
    "url": "assets/js/71.1dffc4b1.js",
    "revision": "1bfa96ab95d20569990197b563e10723"
  },
  {
    "url": "assets/js/72.459e0b36.js",
    "revision": "6f556287662e60e9695466952e5ec11e"
  },
  {
    "url": "assets/js/73.c2560e44.js",
    "revision": "1f78d282cfa754948dfd11048e02def8"
  },
  {
    "url": "assets/js/74.a109ef4d.js",
    "revision": "c86a94f1e62a48a3b4cb776c0c62c854"
  },
  {
    "url": "assets/js/75.dae4176f.js",
    "revision": "8a0ee4dd61fc7d93a203f0bfb606510a"
  },
  {
    "url": "assets/js/76.00355ba4.js",
    "revision": "5ff8f2091afa51d96efec96c2ecf6c9b"
  },
  {
    "url": "assets/js/77.e969065a.js",
    "revision": "ab77d520b077cbcdc031b816c6409ed4"
  },
  {
    "url": "assets/js/78.cd7eddd5.js",
    "revision": "d16089169a0361f357ef35277c42a3e4"
  },
  {
    "url": "assets/js/79.4b6d541d.js",
    "revision": "dec605c06b2e37de01387de9275e2bc4"
  },
  {
    "url": "assets/js/8.b3370187.js",
    "revision": "6ad3d98e036388cb183d21bbf922f308"
  },
  {
    "url": "assets/js/80.e4e18f0e.js",
    "revision": "f577c0b87626ae56bb42693f9a1a858f"
  },
  {
    "url": "assets/js/81.b3a29f73.js",
    "revision": "90d8bed1e72ff0bdcda9a18551c68127"
  },
  {
    "url": "assets/js/82.33b51ca6.js",
    "revision": "55282431f3552b0369b8c61e8dc0cd15"
  },
  {
    "url": "assets/js/9.5028d906.js",
    "revision": "b6f56dad75e12bcdef926294ca2dcf7f"
  },
  {
    "url": "assets/js/app.79de2715.js",
    "revision": "ad70305ca95782da56e7ce72fea8ef51"
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
    "url": "extend-tech/index.html",
    "revision": "2ef0f5e7538b7fd3e9f05fa0a890ac25"
  },
  {
    "url": "index.html",
    "revision": "e86e8be08e560eba0c9877bf6d2aeeb2"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/01c73a/index.html",
    "revision": "0c5149e9d9be590cbd4979beaee6a006"
  },
  {
    "url": "pages/0e0ace/index.html",
    "revision": "ec7460212919199f4886461fc225dbd5"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "f4579dffe3ff89dd1b56319193686f5d"
  },
  {
    "url": "pages/12e42e/index.html",
    "revision": "41be37b871d7df5daad6a237e2acbe81"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "1fec134668a063e204741d0aa4082fa8"
  },
  {
    "url": "pages/1df150/index.html",
    "revision": "5e2cd30ff0b8a6aa5a6efd57ba1c1454"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "b5db09d2060327c10a7fe59e37a35a3a"
  },
  {
    "url": "pages/28865b/index.html",
    "revision": "6d80e1a98fdd5c17628d79988f272036"
  },
  {
    "url": "pages/2b7823/index.html",
    "revision": "65e73411b24123a72689125aed73e891"
  },
  {
    "url": "pages/2f9a95/index.html",
    "revision": "7763a79953bfb5456cf57712e2508f34"
  },
  {
    "url": "pages/348e2c/index.html",
    "revision": "8e2c466966fe39a10ad9a27a9af12e53"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "3b9cfe43a63030d9d7604dba96614cb2"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "3ac38e6d3c3a96e0963dd0f3cf21c700"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "0de067c3cd4bfeea3bf1abef35b71367"
  },
  {
    "url": "pages/452b27/index.html",
    "revision": "a27a29610901636df779fe0994daf4e8"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "fa2810689c45dcb67c7071927d46d567"
  },
  {
    "url": "pages/5e1760/index.html",
    "revision": "1e593f0ff8c26a982f21010e9f0b1018"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "a4d42a4b284cf37b5958f04f0da768de"
  },
  {
    "url": "pages/61b2c6/index.html",
    "revision": "626f8db466093872fa4bd25e5d95908a"
  },
  {
    "url": "pages/65c0ee/index.html",
    "revision": "cd90c03abcc6ac6f4f9483efeab176c6"
  },
  {
    "url": "pages/66713d/index.html",
    "revision": "fdc3f09d98fce0507bbcbddfafb90485"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "e22159726da4f6908b7863f638dd85d8"
  },
  {
    "url": "pages/68697d/index.html",
    "revision": "df602255da6465414196e0ad84e6b8a1"
  },
  {
    "url": "pages/6be093/index.html",
    "revision": "f6c9ff334654df3ecb7a31fd774c267e"
  },
  {
    "url": "pages/6dc096/index.html",
    "revision": "8d0607b5a2149d275ad71bac92932cc0"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "d0f8905f9a90f85abd9b8bfb401a433b"
  },
  {
    "url": "pages/7b5691/index.html",
    "revision": "16c059f9ff219c1fbc7d226df5f5f6d9"
  },
  {
    "url": "pages/7b95b9/index.html",
    "revision": "ed08a5f29cf31a394504e0a3a7757257"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "c53420efc072a7b00b41eafb5c32a62a"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "4f04635240df11418c9601edc4c0f867"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "68cc7cb76b622335e69748699f6a5f25"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "68931af6c7fb82fe01f5fdff6cd3e5d8"
  },
  {
    "url": "pages/94ea5d/index.html",
    "revision": "cfcc216840f821af4c8bf998e85d1948"
  },
  {
    "url": "pages/956375/index.html",
    "revision": "6434c75cab3910b6ebd469a9f8b4077d"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "a23356aeee59be150e0f51bad38d123a"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "be18bd8cc6530ca92f4c190563e80bbb"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "347336dcbb562ba908c9229f91cb4fb4"
  },
  {
    "url": "pages/a30fdf/index.html",
    "revision": "8f149aaae936ec71822899c94e9b82f1"
  },
  {
    "url": "pages/a53f89/index.html",
    "revision": "6c877c5404f7d6af2ff1c8adc120db0f"
  },
  {
    "url": "pages/a6ca3a/index.html",
    "revision": "dd1928062ba3b018c22153b469dfe598"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "fd9f8208ad50a8af8bcbaa734e568922"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "b048d1c86c5cc176116a5e934fc1ed1c"
  },
  {
    "url": "pages/ad6a7b/index.html",
    "revision": "6f2f06c99deb866fd78cfef0de548b5b"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "60c04fb01ad116706812e7028bd4a4c8"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "35dc4b718bd26b09e965f9edb632ea7c"
  },
  {
    "url": "pages/bc31e4/index.html",
    "revision": "e30e77dfbdedc522acbde83300386410"
  },
  {
    "url": "pages/be8a48/index.html",
    "revision": "e073f23f3bcac0097eaedc303f9e2bde"
  },
  {
    "url": "pages/c7ac92/index.html",
    "revision": "b264515c851e6c2772ccbe56072d52fe"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "2a59580abc5d73ca563458711f22366f"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "fa01f0126c2a5c70a1a7d80bc0c7c132"
  },
  {
    "url": "pages/d4b093/index.html",
    "revision": "76b67a5649d57053dcff06fde4e4e158"
  },
  {
    "url": "pages/da3888/index.html",
    "revision": "722e2c25aed22ab2024ee102f02fea74"
  },
  {
    "url": "pages/db673f/index.html",
    "revision": "e0809a003f3384bee6716b19925a31bf"
  },
  {
    "url": "pages/dc65bf/index.html",
    "revision": "0b873239356e0606dbe82a43f8451dae"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "d839fb2d80e8483f8e9b6533bc9402e6"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "a8982e51683346ff49d70a08d2fdcdb7"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "7c780c1d34c014c52ff9b8f9a6eba111"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "3f6afb4835b2e1fe93c91b94386a77ea"
  },
  {
    "url": "pages/f34f1e/index.html",
    "revision": "8d71c6971355b1ac9b50e3623513d41b"
  },
  {
    "url": "pages/f7d977/index.html",
    "revision": "6c56a67b525e3dc7b11fb8624ed3c05f"
  },
  {
    "url": "pages/fd5cfa/index.html",
    "revision": "880cca701ea1c3f531a8da25a9c33428"
  },
  {
    "url": "pages/JavaScript/class-inherit-overwrite/index.html",
    "revision": "af53051ed74287d0a05de2bb425d9e49"
  },
  {
    "url": "pages/JavaScript/index.html",
    "revision": "ecbb8163008c2fbdd719a53e31acd36d"
  },
  {
    "url": "preface/index.html",
    "revision": "e1fbdaea140d4462963045e56af99a3a"
  },
  {
    "url": "resources/rmmv-source-code-translation/index.html",
    "revision": "084a37dd9bb1982084f591e985e2e98d"
  },
  {
    "url": "rmmv-base-js-course/How-To-Get-Start/index.html",
    "revision": "f5ea8168c9c4a321f6aa2b9c6014f7f0"
  },
  {
    "url": "rmmv-base-js-course/index.html",
    "revision": "83a110612f97c389273aed73983a59a1"
  },
  {
    "url": "rmmv-dev-todo-list/index.html",
    "revision": "2d69a445f2aabadf34cfa46a9f2352da"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "vscode/settings-json-formatOnSave/index.html",
    "revision": "f402d31c8a0e1093922f73815bb6e29e"
  },
  {
    "url": "vscode/shortcut-key/index.html",
    "revision": "bc532aaa91b4854a2e371f629873b5c4"
  },
  {
    "url": "wang.zhan.shuo.ming.html",
    "revision": "9f61995e0b918535ce44098018e58bd9"
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
