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
    "revision": "5f7087fd2ebc3ea163274bc4fbca553c"
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
    "url": "assets/js/11.1910cc50.js",
    "revision": "3b6af741d2d6cae4d9cee90a8cfe5aca"
  },
  {
    "url": "assets/js/12.0432a607.js",
    "revision": "b201d7114a2f64dd73abff6039b044ac"
  },
  {
    "url": "assets/js/13.f774808c.js",
    "revision": "8446bea005da85d0d58a244591eb2e0f"
  },
  {
    "url": "assets/js/14.258ce7d3.js",
    "revision": "7644c78dda3d665a657bbb3f5688be5b"
  },
  {
    "url": "assets/js/15.f4223a25.js",
    "revision": "5f49c272aa5960a287ff4c0dbb2e6835"
  },
  {
    "url": "assets/js/16.8a4bbdab.js",
    "revision": "336e3c8983eac3f7fa8a861c13aa3193"
  },
  {
    "url": "assets/js/17.6533d38a.js",
    "revision": "ea752a727b491233211fb1098e01b4ac"
  },
  {
    "url": "assets/js/18.f4e7d99b.js",
    "revision": "aed672bc91e512fc0118be12f23a63b0"
  },
  {
    "url": "assets/js/19.24cd9ea2.js",
    "revision": "98c144778e843ee6cd66ebce1420f151"
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
    "url": "assets/js/21.2a85b3c8.js",
    "revision": "a1d9b93e482bc3ced990576e3088542c"
  },
  {
    "url": "assets/js/22.be328d49.js",
    "revision": "cf932199cdbbcf8b4ed5cba9920d476e"
  },
  {
    "url": "assets/js/23.41b0fd1a.js",
    "revision": "404e1e37f707b9f7aed0d57138d0a407"
  },
  {
    "url": "assets/js/24.97fc0890.js",
    "revision": "41172905ad6454044cf17fecf9d80971"
  },
  {
    "url": "assets/js/25.262a81b0.js",
    "revision": "db853fd9c3e6cd72859306fdc979b2e4"
  },
  {
    "url": "assets/js/26.4f1fe496.js",
    "revision": "e104a916eaaae4027d2adfd22a54012d"
  },
  {
    "url": "assets/js/27.5f46bdf8.js",
    "revision": "03cdb33a116e0b4068846d95636beecf"
  },
  {
    "url": "assets/js/28.d9b66ade.js",
    "revision": "1c0c61e74ce4789217dd7abe3f14afc5"
  },
  {
    "url": "assets/js/29.f36e15f6.js",
    "revision": "0da4dc8252228dad80fa921407f47d44"
  },
  {
    "url": "assets/js/3.252ad3e4.js",
    "revision": "9faa55c87ac921078197fd21514ca544"
  },
  {
    "url": "assets/js/30.cbb040d9.js",
    "revision": "1e67bf309b6d1c1f5ee2647f99907a0b"
  },
  {
    "url": "assets/js/31.a5d068f0.js",
    "revision": "d168d57dfe7485d58ee5e6d5279cc71f"
  },
  {
    "url": "assets/js/32.91684527.js",
    "revision": "4a48e84cecc824f722fcd21db9d12bcd"
  },
  {
    "url": "assets/js/33.dcb38529.js",
    "revision": "5a39b7788c9e3793f7424ebd2d03d082"
  },
  {
    "url": "assets/js/34.a410b048.js",
    "revision": "83e232caa02acc85698d109f2256109d"
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
    "url": "assets/js/42.a3f4cf96.js",
    "revision": "dd106c5075121e096e484b59611b0249"
  },
  {
    "url": "assets/js/43.b779caf5.js",
    "revision": "83861eb1b0c1a8aea39342abcb3fc079"
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
    "url": "assets/js/47.5fd8c1f8.js",
    "revision": "06f6d64e4fd83f5f8070377ee9b9bc1d"
  },
  {
    "url": "assets/js/48.f80948d1.js",
    "revision": "77311a099dabd250c5db9d0ecf84f5fa"
  },
  {
    "url": "assets/js/49.04f127df.js",
    "revision": "83aaed709cc8ae62736d5c2d28a3ceea"
  },
  {
    "url": "assets/js/5.eee28d9f.js",
    "revision": "87206abea4d48fa4a23e56a7c0a1014c"
  },
  {
    "url": "assets/js/50.4ef82535.js",
    "revision": "6a73a90601de400bc2600d60e76d9ead"
  },
  {
    "url": "assets/js/51.0aeeeae3.js",
    "revision": "9d51446dbf0b2934263491704574ab21"
  },
  {
    "url": "assets/js/52.c733d110.js",
    "revision": "a9f598ca7a2f484fffe035eea1065b47"
  },
  {
    "url": "assets/js/53.da737292.js",
    "revision": "4d2d5b5322d676ceee08274d3b34e4d0"
  },
  {
    "url": "assets/js/54.5ce7a982.js",
    "revision": "2d0679ddd551fdbb91e789a388cb4b37"
  },
  {
    "url": "assets/js/55.06d4665e.js",
    "revision": "c8d374594df26f495170eefa018cbbd0"
  },
  {
    "url": "assets/js/56.60e9dbac.js",
    "revision": "c9f638a5b039de2137dc2287cce62da6"
  },
  {
    "url": "assets/js/57.a693d3aa.js",
    "revision": "630d2e58e6c090d6aee69f6ade609f01"
  },
  {
    "url": "assets/js/58.28d1f9f8.js",
    "revision": "5b2bb8f024dc80564425b4304f280424"
  },
  {
    "url": "assets/js/59.9a429a47.js",
    "revision": "5450deda37b77e94b3cfcc9424b3bc2b"
  },
  {
    "url": "assets/js/6.dc2fbf3c.js",
    "revision": "b51dcfa0c150f6eb21107da2a64e362a"
  },
  {
    "url": "assets/js/60.525141ef.js",
    "revision": "69f9e9957342837e618569dc81244bfe"
  },
  {
    "url": "assets/js/61.a23ec698.js",
    "revision": "ca5d908426e0fe151042ad9702561686"
  },
  {
    "url": "assets/js/62.6468e33b.js",
    "revision": "0e3b8aebb6fc696aa447a2150ed7377c"
  },
  {
    "url": "assets/js/63.61794e79.js",
    "revision": "f4f6693d5b00b274f002e0841babb5a7"
  },
  {
    "url": "assets/js/64.3615426f.js",
    "revision": "9ff9d76a5a3340e519b261c3fb5c6b50"
  },
  {
    "url": "assets/js/65.2e221980.js",
    "revision": "31255df40cfebfceb0acc5c4b850031f"
  },
  {
    "url": "assets/js/66.513e9889.js",
    "revision": "87f093ee71cc3eef94b236b82c151c64"
  },
  {
    "url": "assets/js/67.811ead6f.js",
    "revision": "6e354bed169aec3d58ab11fed4f6e19b"
  },
  {
    "url": "assets/js/68.33ba6a3e.js",
    "revision": "eb04f912750a7d16cb699e7af418c1ad"
  },
  {
    "url": "assets/js/69.f4f6bfc7.js",
    "revision": "3c5d59ec98924cf8d5d7ac4d3120ca53"
  },
  {
    "url": "assets/js/7.052e5bec.js",
    "revision": "b12eb9449eb57e8274cf1cad0ee0c2b0"
  },
  {
    "url": "assets/js/70.7978da9e.js",
    "revision": "4f235ea057f32670b4e87dde1800b6a1"
  },
  {
    "url": "assets/js/71.a404be28.js",
    "revision": "d902e1c8548c9bfc5394e3889aa3298c"
  },
  {
    "url": "assets/js/72.60a24f87.js",
    "revision": "e63f1c3083c7854fa0e626967b66dcfe"
  },
  {
    "url": "assets/js/73.c77addf5.js",
    "revision": "2c6453a53ebe2a163d9070f7eb706b23"
  },
  {
    "url": "assets/js/74.af90914b.js",
    "revision": "7039a4dc50d1dddaf666454b8d550816"
  },
  {
    "url": "assets/js/75.e001dbaf.js",
    "revision": "fc999ca43c619a23e445d2f4b37b1abc"
  },
  {
    "url": "assets/js/76.f8d104f2.js",
    "revision": "b103d5cb3c372266c438e3590d622634"
  },
  {
    "url": "assets/js/77.cf1356a7.js",
    "revision": "f3401edac656a8ac9fc0e7b45d6bd1dc"
  },
  {
    "url": "assets/js/78.c1895a50.js",
    "revision": "7b81d103e1c214a95a184098e0cdfd46"
  },
  {
    "url": "assets/js/79.e6db493a.js",
    "revision": "4f7ac89632cbb21646169e41f5650b0f"
  },
  {
    "url": "assets/js/8.91675950.js",
    "revision": "c513c3e2621b08d889f515907ef53358"
  },
  {
    "url": "assets/js/80.3134f6f4.js",
    "revision": "9bdb7ae7d9bf14455bd28fdf18b8ba29"
  },
  {
    "url": "assets/js/9.3d90c90b.js",
    "revision": "e6cff7b7b4f896bdcafac659e1734b02"
  },
  {
    "url": "assets/js/app.40ad59f2.js",
    "revision": "0c607159409632ffab357a8ab30eed9c"
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
    "revision": "dbed64680d35c07b73fdb421d04961ac"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/07e629/index.html",
    "revision": "91d5d0a87283088c03b9ff1dbcdfe645"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "9ee0d9d75bd4e92a5391947be2771646"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "a9c64dad3a5934900f6368ce515236d9"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "3314e984a002c823bac18678cff66f3c"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "3555bc8010ce03deffa8cbcde12463d5"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "fe5c4543e137c76a100fdbc62ca5d096"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "0952b8f07940611d93c2287089f3a50f"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "e30522dbf2e716e5ab3cff0364200a4b"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "b0f7fce3610f391a286318ff53874735"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "0190a48e5a0f9f10b6c7c174be6d719f"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "63153377c0ba72d601fa6d10ec2d6868"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "a9c26e2b55746cbc0c8afc1a2f2be3ae"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "9e34efba7706b8f25f41fe5c3f353f40"
  },
  {
    "url": "pages/452b27/index.html",
    "revision": "77fa44a7c45af563fca3a4a99fa3ffdf"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "46f42aea3617891b94c35f442f91d244"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "34542e4269b4de7cda9af45417ae63bf"
  },
  {
    "url": "pages/4c52ff/index.html",
    "revision": "b5570f583a2aec259e55cdc9a1adcb9b"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "6bfb8a1d124deca09e5b29ec45a68edc"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "b6c891f93809a3b28ddace8ea9dd4a39"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "08b4b4acdc86b753622f57a6ff0400b6"
  },
  {
    "url": "pages/68697d/index.html",
    "revision": "4edff10006cd6369d95c1fc72fed06e8"
  },
  {
    "url": "pages/6be093/index.html",
    "revision": "7ffa34b39730c98b4e42575264efe181"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "e819f74a11edd5360444e566b6a6b125"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "bffeb3401c88b03d803150dfa093990c"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "1337a2cdd044a996c7bcfb78ba965995"
  },
  {
    "url": "pages/7b95b9/index.html",
    "revision": "b6d35122a3eaebc55ef307f93e5409f1"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "f2a098c73a3ea2cac63a69868fd29555"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "99da5f61258b2b814c736f1bbc619a5e"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "0b26dcea0115c33f76a941b699c42a36"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "f5a751d78643ea5bd074cfe69b15291a"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "f516625cd4cc2203dde54d7d3320886c"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "cd82a7e2a08b2857251010b525401245"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "11a7d638014b90a98fd90dda48771bba"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "e6c6df0ed62b398a58ed933943930904"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "60970b62148dd6c2c6d472ab56d152f8"
  },
  {
    "url": "pages/a6ca3a/index.html",
    "revision": "af0df6376c97794d797c85f0a3157565"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "cf93540cef2023ec54d775f6f98ebee3"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "896102db1c69f30692ebbdcb7efbc064"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "8d39fa619fab07512885249ab681bfaf"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "28402f91abb27948a083d02c1d793589"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "2a851624c85887e57d089300b78616ce"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "8e91144e6a74c482fb14efb94d821927"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "4827a9ff4625b03c626bc98abd55c130"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "afc83adf82b33e1f16a7375132c1bfaf"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "ee9fec8795d5fbc3eb05e08a1912eeaf"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "d20b1cfd6f159cb4e35890c3c3f8b106"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "4f67a5b8e41068f38bd92044cdf84f5e"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "1831bbc97c140a013b82544d746ff7cb"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "c272d99e1ad9124afa14c67911f67de1"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "85961cbce7d5af93ab588bce098bb4e5"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "fdea8df0ca771acb883a986b00a5ac1a"
  },
  {
    "url": "pages/da3888/index.html",
    "revision": "5ae88184112895e2db3ac0e6d438a26f"
  },
  {
    "url": "pages/dc65bf/index.html",
    "revision": "e262f862a5a44d67803ed9539e51d0ec"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "27a8a7ac363cbcab1eab3580080a10f3"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "0395e4348b73de33aec739daf09eae7d"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "db3c87141c2800301a921c5a4dce0d59"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "23345ddd1e9b3ba2a6cf902bcad0d334"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "486081431c39ea2bfe47c525147128ab"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "ccda1b1fd442350bc4fcc81f79201829"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "c46c14de8ab3c14b1472a9e6e26c0347"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "3b788fb8aabf7c04b454756a60254c64"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "f89595650aaebed575bc7c0b40b81af9"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "375d0c346707bd54f0b3ea87efd9fbf3"
  },
  {
    "url": "pages/f65105/index.html",
    "revision": "f407b3bb8b5edbd2d4c986e8758d40f1"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "6d41ec411056309859066d0b1f660f8f"
  },
  {
    "url": "preface/index.html",
    "revision": "1ff8d589fed9f2cca6dd21a4a8af8edf"
  },
  {
    "url": "resources/rmmv-source-code-translation/index.html",
    "revision": "6a90800938b1f328e8ff070ed9f3b835"
  },
  {
    "url": "rmmv-base-js-course/How-To-Get-Start/index.html",
    "revision": "39dc01f76ff169b89c677d0e928dc2d5"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "VScode/settings-json-formatOnSave/index.html",
    "revision": "66a987a82ddd9b3a1b1523794bec3852"
  },
  {
    "url": "wang.zhan.shuo.ming.html",
    "revision": "6059543fcd8342f525d0a334d72bd00d"
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
