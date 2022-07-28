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
    "revision": "81d663317bc09749e823da9e107bea36"
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
    "url": "assets/js/13.cf9ff455.js",
    "revision": "58759750473830b9310831b5e27861d2"
  },
  {
    "url": "assets/js/14.6a7c7a5c.js",
    "revision": "b30bd82f65eb5b78075716daa821329d"
  },
  {
    "url": "assets/js/15.76fae9cf.js",
    "revision": "fb0d05757d535d6e0cb8205b420e612a"
  },
  {
    "url": "assets/js/16.78bd388d.js",
    "revision": "ae649b1a86fa95d70b7e3e055faa242d"
  },
  {
    "url": "assets/js/17.e0203ac9.js",
    "revision": "ba19a0a6f38dd9935c4e530c72ce8923"
  },
  {
    "url": "assets/js/18.792bb8cd.js",
    "revision": "7854fa2fd38bf6c69e474298c2abecc0"
  },
  {
    "url": "assets/js/19.b792e7e8.js",
    "revision": "7dfc3865f2506198a0ea416b3b152286"
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
    "url": "assets/js/21.8dc6a503.js",
    "revision": "6fa2163a48d3ba73da61c8da8bfe2554"
  },
  {
    "url": "assets/js/22.1b26c852.js",
    "revision": "17f01c31a48b5cbc50569c3ad4bff1fb"
  },
  {
    "url": "assets/js/23.f35b27c5.js",
    "revision": "b327d92151c6da69ca2a8e49766caed6"
  },
  {
    "url": "assets/js/24.26f20248.js",
    "revision": "e4299af10794a0c80a9d5bdba2e4f409"
  },
  {
    "url": "assets/js/25.849d182e.js",
    "revision": "32df9c0b77a5458e0df4e4bc8d7bdc9b"
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
    "url": "assets/js/32.42e82e5a.js",
    "revision": "099846de84f917573c58a8239567c041"
  },
  {
    "url": "assets/js/33.4717c104.js",
    "revision": "22624ea05189def000a1be9d6c5ac6f0"
  },
  {
    "url": "assets/js/34.06b19bb6.js",
    "revision": "5a51483fa035dee9f2a8c2423de52bfb"
  },
  {
    "url": "assets/js/35.c47e9e42.js",
    "revision": "78043a5643c35d4ec2ec046449ffce34"
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
    "url": "assets/js/39.0b0d7824.js",
    "revision": "80df0177214205d8bb4a9decf06c80b8"
  },
  {
    "url": "assets/js/4.19fd35e1.js",
    "revision": "2e12bd2f2536507a324b8a7745af7854"
  },
  {
    "url": "assets/js/40.da200db6.js",
    "revision": "af76d5db9ef7ec12e171783671311a55"
  },
  {
    "url": "assets/js/41.8eb2b5a1.js",
    "revision": "1e2fc0dbb027450fcf1ebf5a35a97c4c"
  },
  {
    "url": "assets/js/42.50572fd7.js",
    "revision": "56c2d434809d860aa30c37b11ad4eeda"
  },
  {
    "url": "assets/js/43.0a0671c7.js",
    "revision": "1df63ac62f55027f09b6fa2c548ad22c"
  },
  {
    "url": "assets/js/44.c94709ff.js",
    "revision": "2b17488f2662b9792b0c2fb8f55e24e1"
  },
  {
    "url": "assets/js/45.16796451.js",
    "revision": "597b8253ddfc4a2665867ce637c79ba2"
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
    "url": "assets/js/48.6cebdc13.js",
    "revision": "c0cdb8a96366951f30bcc048540a7c81"
  },
  {
    "url": "assets/js/49.552608bb.js",
    "revision": "e62f0205d921e02e9892c443f388b22b"
  },
  {
    "url": "assets/js/5.bf9691c3.js",
    "revision": "dd06b5007ac3150b697b23446f05f9d8"
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
    "url": "assets/js/54.7d45eeb9.js",
    "revision": "8a4427466f338c2200ed257acafbbb2c"
  },
  {
    "url": "assets/js/55.1a8a7bee.js",
    "revision": "100e82d374933df466e1fa18649d4f51"
  },
  {
    "url": "assets/js/56.dc434d64.js",
    "revision": "05aeac0ab0709348bf864f723546601c"
  },
  {
    "url": "assets/js/57.71aa152d.js",
    "revision": "75dcaf958cd9b1e04efc391d9a6e181e"
  },
  {
    "url": "assets/js/58.97338f50.js",
    "revision": "de2fc116e6997a3b373cf4cc789fb982"
  },
  {
    "url": "assets/js/59.eeb2d8d8.js",
    "revision": "51afa02a152dc9a76e57f361bfd15e57"
  },
  {
    "url": "assets/js/6.92418817.js",
    "revision": "17be3b4abbc5c5ab82793c7ae38d03f8"
  },
  {
    "url": "assets/js/60.ca49f445.js",
    "revision": "b322aad32e3216cb9e317bbf381ee585"
  },
  {
    "url": "assets/js/61.a7222f9b.js",
    "revision": "4f2c3c51c019839c1120c8556e457906"
  },
  {
    "url": "assets/js/62.c3273ca5.js",
    "revision": "03e7515d4dc94a84a081ad4b33966b2f"
  },
  {
    "url": "assets/js/63.cb597ad2.js",
    "revision": "f9b8e08b1730c857260f3c5785bf3a8a"
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
    "url": "assets/js/66.7ee55f15.js",
    "revision": "445487b01b364e5fa96a2643d6188bd0"
  },
  {
    "url": "assets/js/67.e50d44f8.js",
    "revision": "09a14a52942bff5dc39d048dd74a3d30"
  },
  {
    "url": "assets/js/68.db7136fc.js",
    "revision": "041a9b55eb8a9bdf739f1b4eb459d3f0"
  },
  {
    "url": "assets/js/69.60996f5e.js",
    "revision": "b7e13acb3153087de1a56cc3f6f7bcd2"
  },
  {
    "url": "assets/js/7.a41fcbb1.js",
    "revision": "38ef646ff39d266c2078ed31ac0e8537"
  },
  {
    "url": "assets/js/70.a1205089.js",
    "revision": "57fd048270867e81235d1f9a71235080"
  },
  {
    "url": "assets/js/71.216c9d72.js",
    "revision": "f603348b27bb1cb75dd4c90b4215f5bd"
  },
  {
    "url": "assets/js/72.614163bb.js",
    "revision": "6683296898268c9ee98b9a6c12b93655"
  },
  {
    "url": "assets/js/73.5f9f71c9.js",
    "revision": "b5ea7e89c496ed7e5d6e499e83e46bd3"
  },
  {
    "url": "assets/js/74.2dbd867c.js",
    "revision": "061d9e10c581b6acf10f401e51faff36"
  },
  {
    "url": "assets/js/75.0d3ed0a3.js",
    "revision": "a0a33708d6c75f03bd148746e9cb309e"
  },
  {
    "url": "assets/js/76.c513c1e0.js",
    "revision": "2caa8a24b8ed8d2368bb84eb1f4557f4"
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
    "url": "assets/js/8.7e7927f7.js",
    "revision": "bd69ea51c5b98a56eac33710bd6d3337"
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
    "url": "assets/js/9.091c92d5.js",
    "revision": "86a798e37f35e4f42fa3eeefc0d34708"
  },
  {
    "url": "assets/js/app.b0fa6f43.js",
    "revision": "7287c84e10db38734109675b3cc2986b"
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
    "revision": "03ee8bc633ba78ec2e3ea8a29c17e549"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/07e629/index.html",
    "revision": "b84bdac8b5c0f65cfb22ec80cd2d06bd"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "7b511e0fea92ceb7020b24207cae53fb"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "52ccd244297f31529fbaaebc1ea17898"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "7a7f4fd47fedee7874543d36b5c160bc"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "32d1ed93ac1796cd27c868642149a71d"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "1e3c4d6697f6f9c5814fa1f7d5e20f2a"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "ff3a67a3cdb04deacdcbcc605cdc126e"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "afba97582deb6f48dfc4df07ab719a8d"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "206940256fc4462c26c8621e30a320dd"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "39970a8932be6a41649bc42d87d3d05a"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "ab45ed5d3fe0f48ee084c92ec8cc42e0"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "a5f977fa98087372aba0ec9c04061f93"
  },
  {
    "url": "pages/452b27/index.html",
    "revision": "d2c198c5163269e3700ba1b47b3c91b9"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "a953dd26beac0596118aac663a2efd11"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "c98586721f4efbd8768afb6cddaa8161"
  },
  {
    "url": "pages/4c52ff/index.html",
    "revision": "3bd51d64c9bebe46de3706b8e123e837"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "846d5712142f21158316d5191fc29adf"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "029f5a440d3106b26625e6aa042a33ea"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "47d62a565bcd8bc028d9026883d05bf6"
  },
  {
    "url": "pages/68697d/index.html",
    "revision": "f549150b55f7b91621cc03c72f246a1f"
  },
  {
    "url": "pages/6be093/index.html",
    "revision": "d955e8634557b9ed222c25081e8411a4"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "8b5a2e5db85ac1d1c0802b8767b7f21c"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "4bceda12b5d9ea0810e93be56acfe0d1"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "0292f0548f9fbd85bec11d1f2d2bfcf1"
  },
  {
    "url": "pages/7b95b9/index.html",
    "revision": "7e7f0c11ef04473e097470206912c828"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "8f6f6faf2e3bbd2aeaa4f2c460420f11"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "5f0792dfb1920d5fdfddd55a3dae9549"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "ac9685f0cf33586f6e15697e0904b1cf"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "c5f21da92ae808ad951d544e17f2a928"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "abd6a45364d56f12f3e51974a1d2f62a"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "60db9cd28fb30c190d245699cd488afc"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "f157a49597c759eccdc87376181f7e3c"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "1ac075617d6b66ec3a1aaf064eab9f11"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "5cabe01a90bbb197cb25aeb9e16e13a6"
  },
  {
    "url": "pages/a6ca3a/index.html",
    "revision": "ce54d0522f6bc5b8b64d5170b89fd230"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "7bb832fd428c6e0d57427990874ba637"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "7d88fb8c305587ffa5d2c4d1a530ac5f"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "f18318c7f6deb996fe23b5414e2d662f"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "19a82b270aac9c9c7235d163232efa04"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "8a7df14bcf1d429ebe7692ca0fb38d1f"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "2bca595faaa8f6eaed5af7be7655ec35"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "0b33f4dae8d906b7e687789223084018"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "62e7165d310b6b68dc3078e6b5da0de6"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "7e6aa0447c6b4fe43c2f85f6e9049467"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "e4bb3e7a5aae416d4c3f3787c8936a34"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "b561baf9e5495851ed8343346bd3e911"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "d678aeda78a64417e94c8c520adafc31"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "6803f44d71402bcce6390e907c29a9fa"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "51a08403f80368639c6e0c30465dc2f9"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "6f2b9588bad4c7dae06f8bf4d260afbe"
  },
  {
    "url": "pages/da3888/index.html",
    "revision": "ee34d23753b00e8e9598d6621b4bd438"
  },
  {
    "url": "pages/dc65bf/index.html",
    "revision": "3e09241f6f12ae57d66108907a796e8a"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "6e7de56f8532e391ee20bf1d4d97b174"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "8c92595545b5b1bdd0876b6c420e2d38"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "8fcc7782d803678d1fe575a9ed4e250f"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "bd0f814fd3e36704d70591a7346c9f17"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "b23028ed964bd42250c1f80a2dfe0c2d"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "b84700a446bc671afd6ff99b1336c13a"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "34d04654db3a54024fef04aa2bc0b810"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "6cf933fe0e4e93dfb5590bdc71f13fa8"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "d65cd9f8d8720f185ab092d4692383c6"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "a98760490e078346d3a5ad6c1c734906"
  },
  {
    "url": "pages/f65105/index.html",
    "revision": "3ec3f0bf9349d712880566879b78c3d0"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "d4f65553cb26efef3ff18b07b9315c8a"
  },
  {
    "url": "pages/JavaScript/class-inherit-overwrite/index.html",
    "revision": "5dfb408c7fef294911395aea4543cbe7"
  },
  {
    "url": "pages/JavaScript/index.html",
    "revision": "ccd4fa3c367bbe8a9b49e8939b7bfb97"
  },
  {
    "url": "preface/index.html",
    "revision": "f69b28b55cc9c19085f76dbfff448bca"
  },
  {
    "url": "resources/rmmv-source-code-translation/index.html",
    "revision": "a2e35f1935cdb59c43f8745b52a2496a"
  },
  {
    "url": "rmmv-base-js-course/How-To-Get-Start/index.html",
    "revision": "96034cad69d10a4feee8ae15af34b1fc"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "VScode/settings-json-formatOnSave/index.html",
    "revision": "99560e027b27a16b93c3c1be5fbde11c"
  },
  {
    "url": "wang.zhan.shuo.ming.html",
    "revision": "5e30bc49f0a8eff55a628e6e20647308"
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
