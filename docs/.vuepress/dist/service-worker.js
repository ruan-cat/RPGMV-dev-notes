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
    "revision": "cadff72a2454d70d751033674b5dc80c"
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
    "url": "assets/js/10.25720876.js",
    "revision": "fca728e8e813833c87436ee60d6c92a2"
  },
  {
    "url": "assets/js/11.a27a9674.js",
    "revision": "31e2aca997881a5916de4787838bb08f"
  },
  {
    "url": "assets/js/12.78cb2bf9.js",
    "revision": "5acb14e66947c472802233e9204d50be"
  },
  {
    "url": "assets/js/13.cf7118c6.js",
    "revision": "5f1dc6975d57a09305447dd8b3653be9"
  },
  {
    "url": "assets/js/14.a007425b.js",
    "revision": "646f91d85377f98d032c221e34f8905f"
  },
  {
    "url": "assets/js/15.b7c83cbc.js",
    "revision": "0e063be343f5053ae0a6cde3c1196c6d"
  },
  {
    "url": "assets/js/16.05386356.js",
    "revision": "e32471d7d058a168ef4d9fa32c62eda7"
  },
  {
    "url": "assets/js/17.60c9ae56.js",
    "revision": "95acaf917d5bbdbd625390f901e6e128"
  },
  {
    "url": "assets/js/18.f4e7d99b.js",
    "revision": "aed672bc91e512fc0118be12f23a63b0"
  },
  {
    "url": "assets/js/19.64220e4a.js",
    "revision": "938c3350fe189fb9b9545b7507496df7"
  },
  {
    "url": "assets/js/2.847bc281.js",
    "revision": "84cbb09e1ae4a70258ab7f7ea562065a"
  },
  {
    "url": "assets/js/20.0c4b5ffa.js",
    "revision": "d9ff8ddc5a308f3e7aedbb665187bee5"
  },
  {
    "url": "assets/js/21.cc8b6a64.js",
    "revision": "08fd860f51cd265248250b7a2979aec4"
  },
  {
    "url": "assets/js/22.be328d49.js",
    "revision": "cf932199cdbbcf8b4ed5cba9920d476e"
  },
  {
    "url": "assets/js/23.35ccee67.js",
    "revision": "5a24b89c503638851af3a19fefa23a27"
  },
  {
    "url": "assets/js/24.015700e4.js",
    "revision": "cfd84ed38618195f874becbabb5aef2d"
  },
  {
    "url": "assets/js/25.54a919cb.js",
    "revision": "519c543dcaff4ded7ae12525833e09ae"
  },
  {
    "url": "assets/js/26.4f1fe496.js",
    "revision": "e104a916eaaae4027d2adfd22a54012d"
  },
  {
    "url": "assets/js/27.64656e30.js",
    "revision": "aee0d265c7e374e7fc9e87687118dbaa"
  },
  {
    "url": "assets/js/28.678cd4bc.js",
    "revision": "4c1ece2f1d7e75dd4acc5c9a41ce7ef7"
  },
  {
    "url": "assets/js/29.02876dfd.js",
    "revision": "08dd42d17be9b617a2df7084bba7a0ad"
  },
  {
    "url": "assets/js/3.522be963.js",
    "revision": "e232bf391d3a124d03f323f659567464"
  },
  {
    "url": "assets/js/30.adc51575.js",
    "revision": "12aded3ef28a6d47fb34b54dd1df8fdf"
  },
  {
    "url": "assets/js/31.a5d068f0.js",
    "revision": "d168d57dfe7485d58ee5e6d5279cc71f"
  },
  {
    "url": "assets/js/32.df674e68.js",
    "revision": "d332b7e8096d64b911592d08a1e0a30c"
  },
  {
    "url": "assets/js/33.1b32fe27.js",
    "revision": "127d4f3e2af78e2a1d8edf87c71d55e8"
  },
  {
    "url": "assets/js/34.77643250.js",
    "revision": "4c69026f41c9487f960d86da8e00841c"
  },
  {
    "url": "assets/js/35.9a8baa35.js",
    "revision": "4fa436c08dcefa6ccb8c94a79f9f3216"
  },
  {
    "url": "assets/js/36.4c1fae8a.js",
    "revision": "741724bc26c8e5b2cda0a5f04000c1dc"
  },
  {
    "url": "assets/js/37.a73139ca.js",
    "revision": "cb18d0c4557b769f27ae3a1d4316e36a"
  },
  {
    "url": "assets/js/38.7efce020.js",
    "revision": "d59474d497bb6017843db423262cba04"
  },
  {
    "url": "assets/js/39.ea831023.js",
    "revision": "46a7303b2d9cb8087783afb05f0e87d4"
  },
  {
    "url": "assets/js/4.19fd35e1.js",
    "revision": "2e12bd2f2536507a324b8a7745af7854"
  },
  {
    "url": "assets/js/40.fb3e45bf.js",
    "revision": "7953782afb10311f62ddce73431d1796"
  },
  {
    "url": "assets/js/41.604ad903.js",
    "revision": "c5d384e9a59d5c46042fe4206a9817be"
  },
  {
    "url": "assets/js/42.41a9fa3a.js",
    "revision": "1ffd8ac408a5356f46c01dc614a04f9c"
  },
  {
    "url": "assets/js/43.ccbe03eb.js",
    "revision": "19f45ec0ed443815f6bdfaf8a099fbb3"
  },
  {
    "url": "assets/js/44.4f787039.js",
    "revision": "90693ebb2e83954f2abc2018faf6e4a7"
  },
  {
    "url": "assets/js/45.533c2ad3.js",
    "revision": "c734cc73644aa8a2239bf7b7b7eadbe7"
  },
  {
    "url": "assets/js/46.550714f9.js",
    "revision": "da5f2586701672432fa7a2c550a88b70"
  },
  {
    "url": "assets/js/47.29b8491b.js",
    "revision": "79608b8cc7c0f432cbee60df84d51faa"
  },
  {
    "url": "assets/js/48.f80948d1.js",
    "revision": "77311a099dabd250c5db9d0ecf84f5fa"
  },
  {
    "url": "assets/js/49.b4332191.js",
    "revision": "5d56272c9607b44e0b755826b929e19e"
  },
  {
    "url": "assets/js/5.bf9691c3.js",
    "revision": "dd06b5007ac3150b697b23446f05f9d8"
  },
  {
    "url": "assets/js/50.0ae62fe7.js",
    "revision": "4c991933b5dc1cdfd46b338e134397c4"
  },
  {
    "url": "assets/js/51.2d8d5924.js",
    "revision": "749a61c327c22c2c58bd1e278c70ab8c"
  },
  {
    "url": "assets/js/52.0c2c6eba.js",
    "revision": "38918fced0c375a69912bfaa7af2cd9b"
  },
  {
    "url": "assets/js/53.5d61c346.js",
    "revision": "c4f2cbd9da19b37773aa5eb75632609c"
  },
  {
    "url": "assets/js/54.e560f3a0.js",
    "revision": "40f3db0c3e4017f4aa5710404d4ea211"
  },
  {
    "url": "assets/js/55.558e00ea.js",
    "revision": "43dacff66261fb79a3f2da600ab08d0e"
  },
  {
    "url": "assets/js/56.4bfaa0f7.js",
    "revision": "92f86a618a9a001cfcae4983536c7dc3"
  },
  {
    "url": "assets/js/57.9e340291.js",
    "revision": "8437eec9549c47536c63260c42e9cb77"
  },
  {
    "url": "assets/js/58.acb3e065.js",
    "revision": "5fc981c79b1443242a266a58a888f55d"
  },
  {
    "url": "assets/js/59.f441e9ff.js",
    "revision": "c13c9f12643b08744e00042db56a4a78"
  },
  {
    "url": "assets/js/6.0d087194.js",
    "revision": "5b95a59269b9c7de55b332db8e2aa78f"
  },
  {
    "url": "assets/js/60.f9c2a38a.js",
    "revision": "872cb9dcfe6080cfeb8827b1f5b16206"
  },
  {
    "url": "assets/js/61.009da961.js",
    "revision": "a70867d8b8029523f4c78d8a3e6a1344"
  },
  {
    "url": "assets/js/62.3d159754.js",
    "revision": "926bd99b1be6868893d113a34cbe978a"
  },
  {
    "url": "assets/js/63.c8bb6521.js",
    "revision": "874b8c64cd02f3086fa9a1b8dc1f60ae"
  },
  {
    "url": "assets/js/64.328d9bf1.js",
    "revision": "88faa13f0826eccfedbe463da568b950"
  },
  {
    "url": "assets/js/65.5d8c216e.js",
    "revision": "25862ecc68605081696bee9b28629c80"
  },
  {
    "url": "assets/js/66.56e7adf6.js",
    "revision": "ac22cabb6f234123538e3ed84c7e0ce3"
  },
  {
    "url": "assets/js/67.295768b7.js",
    "revision": "64b95a59c6f8adb4812fd2331e20bb80"
  },
  {
    "url": "assets/js/68.d4282aef.js",
    "revision": "6a3cf2d479a829e043edd041be360551"
  },
  {
    "url": "assets/js/69.44d4025a.js",
    "revision": "5307ce69f8be1b95afedbf47bd1326b9"
  },
  {
    "url": "assets/js/7.c1f91910.js",
    "revision": "17f753a1223c4302023b55b14ae8a854"
  },
  {
    "url": "assets/js/70.6f5c8b00.js",
    "revision": "a1dcad790f98631ab89b98e908cb170b"
  },
  {
    "url": "assets/js/71.ed0318d9.js",
    "revision": "57f5d0c4d023c7b716e32d074920a815"
  },
  {
    "url": "assets/js/72.a385fd46.js",
    "revision": "98cf44c05c36811d6cac0a6bc92a530a"
  },
  {
    "url": "assets/js/73.ebb6a4e0.js",
    "revision": "c6f5aa10439a16c03c5c78b8282aca9b"
  },
  {
    "url": "assets/js/74.f62dcb69.js",
    "revision": "84b0dc91ffcf50902f9f345a65f4fbb0"
  },
  {
    "url": "assets/js/75.8daea318.js",
    "revision": "c2e814acce7ef85e5967f58d0b011066"
  },
  {
    "url": "assets/js/76.8e58041d.js",
    "revision": "f78b89238e7cbefe2cd6dcfb13b327a7"
  },
  {
    "url": "assets/js/77.ec11c2a9.js",
    "revision": "e59fd8e54f62b1f7a61f84440618ddef"
  },
  {
    "url": "assets/js/78.2bd31566.js",
    "revision": "c5b3b0af124d5d4cb235b45648488e3d"
  },
  {
    "url": "assets/js/79.2743e7be.js",
    "revision": "054f48cf250563e1828b4b173faa6021"
  },
  {
    "url": "assets/js/8.7e8349d1.js",
    "revision": "171fbec0a5509c94c2ce2ccc300288ea"
  },
  {
    "url": "assets/js/9.3d90c90b.js",
    "revision": "e6cff7b7b4f896bdcafac659e1734b02"
  },
  {
    "url": "assets/js/app.dd914086.js",
    "revision": "34890e33b87d7f387ac69468896639b9"
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
    "revision": "d6b9d42e70062897aef0459bc89cfebe"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/07e629/index.html",
    "revision": "1d9814e697a6d26c457d560018c5f550"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "ef629286ba14833ca8bb3482d196d087"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "36ceda4d3a226b9d251ab49675b81ec4"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "f00b7d8ef2a0352a2fe7c51585413874"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "c27adae3a3116f37fb87bb41bec1b237"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "d91bf36af35f07af0df7d77573a9b1a4"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "e651827af04a2ee144c2109783ea84d3"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "86a92122d6389f6e9798fa81e5167ab8"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "054226f3c959ec5117d8cb1ba876287f"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "b23ba2e9fdf22907710c52fddea055aa"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "750077eb07bb689718c0ebd979b6a5a4"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "aa1a037ff5191616ff46f2bcc13a2434"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "60b3475a57f5366b1884ef84d62f7b66"
  },
  {
    "url": "pages/452b27/index.html",
    "revision": "7c083a17a073f0d148944cd62bfe0dc7"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "996449ef76ec8a0ac2115ba6cbbb0262"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "f6972fc321663b660c1cd37c4e5dfa79"
  },
  {
    "url": "pages/4c52ff/index.html",
    "revision": "50dab90f61247b922389cf46862f1116"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "33aa154d85ddb2cde45b20ce13d45049"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "1a38714b192f4c85d502ff81aa810df6"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "d0b7c0d6864a9b70e7bd5d04ba756d83"
  },
  {
    "url": "pages/68697d/index.html",
    "revision": "aa59f2bdcd15a552f38f82eeb3fb17e1"
  },
  {
    "url": "pages/6be093/index.html",
    "revision": "57b62a0c72b248c990e00dc2975a0ee3"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "761383c84627f9b10d893ea3b7e259fc"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "ea206ef69007cb30386ce4cf5565a45c"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "9dcb78f95237564a25cff7eb130aea7c"
  },
  {
    "url": "pages/7b95b9/index.html",
    "revision": "338392c8afafa1a53c3ac82f981ece43"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "4333f9fd57030f52cdfa1e0d2ebb6ccc"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "7904754185fde9a618ce4823f8594063"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "7b881bf3d0dfe891bec1f4fcaa1a5eb6"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "3a7d5de0bb16e9e620a978b448ee67bc"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "44f02d513021dab2f7581d5d0fcbcf0e"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "5ba34987bd48374e980a03ea7aa30b04"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "6309d9b42dec18ff30767c15738817cb"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "b60ff5648fe764846222174e5f485cfe"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "66372061a1b9892003bfe2d19aad10aa"
  },
  {
    "url": "pages/a6ca3a/index.html",
    "revision": "7bdab17eef5c2c1a76c3340b0f1852f9"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "e6ae79a18e5fe1453ef621454ad7f379"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "5b547c68936635d7e9114d637ac055d6"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "1f9bfcddb960b33046410fd2773d9321"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "a90c388ed7de4c1e3a804b18fa0a89ea"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "68cb66948566f06643fea1f997344b5b"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "dfa9fd95c21b189d7c58f78781240869"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "cceea5b670e347ceb7abbfb00b4de67a"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "e102265a155bb023d4ec2f976a34118c"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "704394584e49ebd7e3113a44fbccc43d"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "34816fb48783546af1433d0cae5a1779"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "f923c3d3104946cbfd3f1aae5ee031d7"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "84b441af89764ea2f56a199901599c31"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "5648b25f3e4ae023514edd34cb577861"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "3e58dc0d1b9cef202571e76eae59fe24"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "b45d41173ea7b1e222dc72a5aac9fdbf"
  },
  {
    "url": "pages/da3888/index.html",
    "revision": "ab0e3dadf9ba4ba9f7ad9c9c7891631d"
  },
  {
    "url": "pages/dc65bf/index.html",
    "revision": "880d572e772c552a2da2b94e19fb8158"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "a12814c44620da6cba0b26bf5b0253d6"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "1fda1814fa5a164fd72d156cabd4bf38"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "faccfe6aeb2bcb0b181f6d2ad6fc8bc7"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "eef72bc409f8779f42efa6788ea2b1f8"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "9fe310173ce8b31bf305422de28d7016"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "3952281de134881ca82457fcad1626ca"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "ba0f883e097c9dd8b6e1cae20e31dfc4"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "e8b050aee80ebe6307ba3e9bbaa2bc72"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "73eb0fd8a3f93d36a84ad84addad4dda"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "d087d3e41380cdd7f4e5c2a48a95d6e2"
  },
  {
    "url": "pages/f65105/index.html",
    "revision": "6c6715e5d3060b5fc70119d6b2bb2940"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "58fe4c8a3281c8b4763c185ba9062a9a"
  },
  {
    "url": "preface/index.html",
    "revision": "17e67d679540ede95abe8cf168bc4fd6"
  },
  {
    "url": "resources/rmmv-source-code-translation/index.html",
    "revision": "3932f2c4ac18c8fdb01babed5a0be0c5"
  },
  {
    "url": "rmmv-base-js-course/How-To-Get-Start/index.html",
    "revision": "4b9a95588a115dbe3998444c788d5b13"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "wang.zhan.shuo.ming.html",
    "revision": "fd465d8dd9d018fde8808d0adc98dd4f"
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
