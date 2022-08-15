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
    "revision": "fd3bc42ff9b02121ba3caa1972b291b2"
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
    "url": "assets/js/12.7514c398.js",
    "revision": "14239839869768cd23b15d04cd70454a"
  },
  {
    "url": "assets/js/13.c2a26dd9.js",
    "revision": "4cf6a0a4159a1e67849c64ac7eaf42eb"
  },
  {
    "url": "assets/js/14.819f1ac6.js",
    "revision": "f3e4ff9b42e44c8bb5fe16cb4bc77154"
  },
  {
    "url": "assets/js/15.76fae9cf.js",
    "revision": "fb0d05757d535d6e0cb8205b420e612a"
  },
  {
    "url": "assets/js/16.3ef0b0e6.js",
    "revision": "bcec52cdbcdd31b79ab2af341badbb81"
  },
  {
    "url": "assets/js/17.1076c245.js",
    "revision": "8252353084f2d9b3065d06fdb1ca705f"
  },
  {
    "url": "assets/js/18.2732e32c.js",
    "revision": "ad4e10e8825639af21ed695da4bbd8f3"
  },
  {
    "url": "assets/js/19.33b8e688.js",
    "revision": "efb8fdd713b16cc99d7cbe6d2e6403d4"
  },
  {
    "url": "assets/js/2.847bc281.js",
    "revision": "84cbb09e1ae4a70258ab7f7ea562065a"
  },
  {
    "url": "assets/js/20.100a619c.js",
    "revision": "7826795653af373c2aebe2722e63b683"
  },
  {
    "url": "assets/js/21.deb4e532.js",
    "revision": "4e5f76d205441e361f062180f1e0ddc3"
  },
  {
    "url": "assets/js/22.f6950258.js",
    "revision": "039da1962483dcbd1aae3f01d3e94d1b"
  },
  {
    "url": "assets/js/23.df551ebc.js",
    "revision": "dc41d20541de17ba344c9b343e5fdb83"
  },
  {
    "url": "assets/js/24.770af43f.js",
    "revision": "337cc3eb426720229ae22d3f981126aa"
  },
  {
    "url": "assets/js/25.af622581.js",
    "revision": "6da098b4a5245876dc3e88eeaa54096f"
  },
  {
    "url": "assets/js/26.18d5a4a6.js",
    "revision": "c7922b0a2f32838a9335d2ae8d44c48a"
  },
  {
    "url": "assets/js/27.b27d7218.js",
    "revision": "6e02405dd94695810eec42feeb40d5b2"
  },
  {
    "url": "assets/js/28.e2367cd3.js",
    "revision": "82def3aa73570ff9fe91d8c3a8dad2eb"
  },
  {
    "url": "assets/js/29.cd9e2fc9.js",
    "revision": "336a876350c9b41fe29afb0a9a0ef397"
  },
  {
    "url": "assets/js/3.ad74109f.js",
    "revision": "5f1a4f1d9c89a81728130c9a9fe06f63"
  },
  {
    "url": "assets/js/30.93fb9ca5.js",
    "revision": "c607bb02cc2bc37ef32fd5c8e587b651"
  },
  {
    "url": "assets/js/31.8fc4abf9.js",
    "revision": "fb2cc099d41090a830860f3299e33723"
  },
  {
    "url": "assets/js/32.4c4e182a.js",
    "revision": "a0a82aba40916ce6e20f8217364d7973"
  },
  {
    "url": "assets/js/33.594fd28a.js",
    "revision": "c3633c2126ea1e66dd5aff3a47b366a4"
  },
  {
    "url": "assets/js/34.bf68deb5.js",
    "revision": "e3680d7fbeed104c8d8611fb707b898e"
  },
  {
    "url": "assets/js/35.e0a1893f.js",
    "revision": "a4274248f5da8b666ce73e5cd8dbce1e"
  },
  {
    "url": "assets/js/36.0699092e.js",
    "revision": "f2248aec8c2f5b457a420e0652ced0f2"
  },
  {
    "url": "assets/js/37.32115f4d.js",
    "revision": "70f4389cda7672e58ec977f53ad21696"
  },
  {
    "url": "assets/js/38.4a8dac8c.js",
    "revision": "5c47f693189203528ea80861e10ea2ef"
  },
  {
    "url": "assets/js/39.1026213e.js",
    "revision": "166c1ad9001b7c0f5de25a17815068d3"
  },
  {
    "url": "assets/js/4.19fd35e1.js",
    "revision": "2e12bd2f2536507a324b8a7745af7854"
  },
  {
    "url": "assets/js/40.878d4c69.js",
    "revision": "add04db7f209d595a18bec10a67def5a"
  },
  {
    "url": "assets/js/41.a9cd0deb.js",
    "revision": "66f48d079cf0ae6fd74605cc4899f519"
  },
  {
    "url": "assets/js/42.4e22ae4e.js",
    "revision": "b792fa3de85f1248297bea50d98349d7"
  },
  {
    "url": "assets/js/43.78a67771.js",
    "revision": "b21d58438cdbb83f646f8468d9c0d3ae"
  },
  {
    "url": "assets/js/44.c94709ff.js",
    "revision": "2b17488f2662b9792b0c2fb8f55e24e1"
  },
  {
    "url": "assets/js/45.87f4f89b.js",
    "revision": "82c9b4b1347c17d2cf4113bcfd808627"
  },
  {
    "url": "assets/js/46.1397b31f.js",
    "revision": "b41a0fd04d83b1bb456e1ad817fa8739"
  },
  {
    "url": "assets/js/47.483b7648.js",
    "revision": "69c3945c5c14db0f8a80245defcd0885"
  },
  {
    "url": "assets/js/48.a3be5344.js",
    "revision": "e2607a1ed2e1b9816b5dd1ac6da60bc0"
  },
  {
    "url": "assets/js/49.0578643a.js",
    "revision": "a6d28c308cf6ce914016b7441f4df3d7"
  },
  {
    "url": "assets/js/5.eee28d9f.js",
    "revision": "87206abea4d48fa4a23e56a7c0a1014c"
  },
  {
    "url": "assets/js/50.ff13895a.js",
    "revision": "d9a9dd6fc133624412dfee89e8e9c744"
  },
  {
    "url": "assets/js/51.f7d1d0ce.js",
    "revision": "56a66bac16bad749f0fd70ee5f9b3e69"
  },
  {
    "url": "assets/js/52.340566a5.js",
    "revision": "f35ca0b19efedd1e6c709efc6b5bfa96"
  },
  {
    "url": "assets/js/53.b35812f9.js",
    "revision": "aa7838b726a368ce2f8d7449b03791d5"
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
    "url": "assets/js/63.993e4280.js",
    "revision": "d596aa04cc6adbfdebd388d26ffeda12"
  },
  {
    "url": "assets/js/64.03c77746.js",
    "revision": "230fde296a0362bcc2de6e645297f807"
  },
  {
    "url": "assets/js/65.2751cf8f.js",
    "revision": "0fad767b5755bc1fc6f215f98ec3e0d4"
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
    "url": "assets/js/68.87abf3d5.js",
    "revision": "b66b7cc1a4a47addb406eea82b32fc70"
  },
  {
    "url": "assets/js/69.bea57113.js",
    "revision": "a06277c5ab40f70062d90892ffb0b071"
  },
  {
    "url": "assets/js/7.332cf23f.js",
    "revision": "b480e389b23a17ec69154a323df04d98"
  },
  {
    "url": "assets/js/70.5546407d.js",
    "revision": "13e0a01b9fd32c91b537771dfee855d3"
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
    "url": "assets/js/8.b9191ba4.js",
    "revision": "96e4a16a11c5d123eee60ddcf9aec06f"
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
    "url": "assets/js/9.091c92d5.js",
    "revision": "86a798e37f35e4f42fa3eeefc0d34708"
  },
  {
    "url": "assets/js/app.f7b899c8.js",
    "revision": "4595828ab6307703bbd6abffddb647fc"
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
    "revision": "261c3e51d46cec8b1a72f9bb7eb7474b"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/07e629/index.html",
    "revision": "96573e2c373bd39f11b389cad426bcb7"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "1c74012b358ff91842b10f9790780390"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "a98de4b6d3b5dd03a485597c7ecc40ec"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "9a0bb1873ab63f249b022b07267aa07b"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "5761763b01b7542ebf56d768019eb3a7"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "1807ad3149e5782d8749d3b5169e5383"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "8434c204d81eab463f252e136561dd31"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "b319d41a8ffcb39968a76d1f10c95d38"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "85db521374428155827a8770a30d8783"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "0f5b8a1c6bc7a5f6097492d889bedf6e"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "5aafb948a3b90685944772715aba149e"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "846a4509dffe91ffb82483d5f61cde1f"
  },
  {
    "url": "pages/452b27/index.html",
    "revision": "b33dd3974476afad7fdb32099709cbb6"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "723e78b63587df7c2e0348ade9bbaedf"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "4505739cf9a8ad1901d770eb4ef1e702"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "b3c3ff1e5fa4cbb350e95dd54e4ccacf"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "6e8308e00ee1417bfee09a76dbd4af87"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "908dc42d7d3fb1560d9bdf72deb71566"
  },
  {
    "url": "pages/68697d/index.html",
    "revision": "52775363200858eb446163ef24b9e1e7"
  },
  {
    "url": "pages/6be093/index.html",
    "revision": "a8041f0d1292834f51c01654f51b4116"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "13f9c7a3e5ab62b895c7e63be7efa706"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "c0093cb60898cdf08d42a9c7769ed477"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "f466227f5dea9c91a05f1fa927f3f24d"
  },
  {
    "url": "pages/7b95b9/index.html",
    "revision": "02d6a7b665ff31c55edf4120eeca0783"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "de80200ad277d785a8ddb55261d74421"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "f513f54f3c9d55df51db974d094b253b"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "64b33919a5ab5efaac8c2f5909044803"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "e8f7e9af9770be5271e8f708b5b87b59"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "31fc2552cd82b8d59f89908b19a5d309"
  },
  {
    "url": "pages/956375/index.html",
    "revision": "6a84a83386a675d0fe1a4d139466f804"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "229ffb4465d44f02a694d550eeb263b9"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "53be250b1848d2261b667cd3b0b8c4fb"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "a03f6642d001dc881afa7c7afea75981"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "12e3c46abea3713967e2eb526c3cddda"
  },
  {
    "url": "pages/a6ca3a/index.html",
    "revision": "1e1e8636a0c213b0bbfa2b5bb3b11987"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "0bb678049f2aec0c083885d8eb5aed8d"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "b80cc266b3642fc2728fad3a5c203f79"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "df0f4ec1e0cc46040959d31f44e8a713"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "dcd47aaef21f6f05ada632b410e7f3ff"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "ed242804dd9e60029ac452c8016ef5f2"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "decb941edd13f86dfdd4b355036336f1"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "47f6b37be8e615bc8893eec3cc564f18"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "9752a5b8d890c8faa6b4cfddcea8b137"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "74718574850d6fb8fc94bb3cbff833b3"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "2c870f7ae842fa7ceb73fcccb5b6b9f4"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "b423b0dd4c2c9b428207718b0897932e"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "3f9beb746e03b43980ee6a37bc09c080"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "395599c433a3d6e9d5e3d8b26655188b"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "9c684fd0f89bbf5585433dfa896949fe"
  },
  {
    "url": "pages/da3888/index.html",
    "revision": "e64ffa5ba7ae1f64067cdda094977a81"
  },
  {
    "url": "pages/dc65bf/index.html",
    "revision": "7ab7eb5d4bb51cc24e34a0e987c71325"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "48369534913852a5ad3423d2b05c9078"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "ea09001f4ec4b69d6676d6e6e6a6b2a5"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "7281be138e4a7280ec269709dbd8ea24"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "ce245a00771a2ded940e38e80474192b"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "4f4c4873fe64c1450708f69852e34c9f"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "476e5319c4d737f19b2c53351d805dad"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "80e505795e29e08f60fd7978e1238215"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "9c0bdfb8ed409a1e1e448e0cd3cf1458"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "39046924ef0f98654e7d623377bb4262"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "07f384bddfaf3b072a31210d1179d71f"
  },
  {
    "url": "pages/f65105/index.html",
    "revision": "bbbde7931fd65e17260425449c895c62"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "0d9c9624908da7d3e8e50fe1abb10398"
  },
  {
    "url": "pages/JavaScript/class-inherit-overwrite/index.html",
    "revision": "bb85f47abce60288a474e55c9d635630"
  },
  {
    "url": "pages/JavaScript/index.html",
    "revision": "216ca1c00c43e29026d8801cd3270647"
  },
  {
    "url": "preface/index.html",
    "revision": "25213a43da42ce51e1e4de0837ec6784"
  },
  {
    "url": "resources/rmmv-source-code-translation/index.html",
    "revision": "98f4b9806e4198d7b3ff21dca1e3e60d"
  },
  {
    "url": "rmmv-base-js-course/How-To-Get-Start/index.html",
    "revision": "1e2e795a234a8eb7307447d5e034375a"
  },
  {
    "url": "rmmv-dev-todo-list/index.html",
    "revision": "61b7a8c2d4f4ffeea58dd9d78af1ef33"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "vscode/settings-json-formatOnSave/index.html",
    "revision": "e397337365d5e6819c550ec704b0cf49"
  },
  {
    "url": "vscode/shortcut-key/index.html",
    "revision": "6c4dc2ca6b39e6a470a91d53e35c6e5e"
  },
  {
    "url": "wang.zhan.shuo.ming.html",
    "revision": "9cada1564d5c56d94a69e58cef7b1efd"
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
