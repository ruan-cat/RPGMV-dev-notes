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
    "revision": "0db0920e9e1bdcf5d9df3ab6c3d952d0"
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
    "url": "assets/js/10.7b16f3c9.js",
    "revision": "281f17939e5c5e9ba16ab07ff831a689"
  },
  {
    "url": "assets/js/11.30b28693.js",
    "revision": "4ea7f9e2008a9f97a3eabfacf8342e38"
  },
  {
    "url": "assets/js/12.eb5e24b8.js",
    "revision": "63799cc524a615c083e6e88a70f33479"
  },
  {
    "url": "assets/js/13.013bb20e.js",
    "revision": "4e83622a1dc5dca8356e2ce1fc4568cc"
  },
  {
    "url": "assets/js/14.bee31d63.js",
    "revision": "a930559336978344ecee942b924e6494"
  },
  {
    "url": "assets/js/15.c3b108ec.js",
    "revision": "fc03f5c58c799aa102b7d30841cccc31"
  },
  {
    "url": "assets/js/16.6ab8e6a9.js",
    "revision": "cb60cfbb2e06b5ed3a24e923751cff43"
  },
  {
    "url": "assets/js/17.73b519b9.js",
    "revision": "cd29dfa41c4a27ce8dff2a5b100482a6"
  },
  {
    "url": "assets/js/18.4b2be6a2.js",
    "revision": "950ba009bf0b41edf99c2189e2265c58"
  },
  {
    "url": "assets/js/19.f87292db.js",
    "revision": "4a41ba9059f414c028b35d9f88392502"
  },
  {
    "url": "assets/js/2.07725434.js",
    "revision": "ac71c983bf3f775cb8aa1f2b7a5f143e"
  },
  {
    "url": "assets/js/20.056e4c8d.js",
    "revision": "f45af8862552b253e06a9953b5304e97"
  },
  {
    "url": "assets/js/21.bef0c3a2.js",
    "revision": "5d4677c26053b2d0d01bc9a6e8131131"
  },
  {
    "url": "assets/js/22.f8c46870.js",
    "revision": "8f593841e2d521121e95cb7e04e10147"
  },
  {
    "url": "assets/js/23.28582a90.js",
    "revision": "38bb6b88b3b7445fe7284846951638bf"
  },
  {
    "url": "assets/js/24.3abd9d2f.js",
    "revision": "1da5598bb10e897e1e0d985d678e1601"
  },
  {
    "url": "assets/js/25.8ee85ea0.js",
    "revision": "322e47626acf313ae4ca3ebe0762bb05"
  },
  {
    "url": "assets/js/26.5d92b371.js",
    "revision": "a0886b10c97cc12a7a97b6b81582197e"
  },
  {
    "url": "assets/js/27.f820baf1.js",
    "revision": "885c37c4fa87b66a26531d5760525570"
  },
  {
    "url": "assets/js/28.12fefee5.js",
    "revision": "4e6224a53c2802d4c293bc9230c6438b"
  },
  {
    "url": "assets/js/29.0cc83de5.js",
    "revision": "c4e612114cc16fc3f1cb6af99495f7b8"
  },
  {
    "url": "assets/js/3.522be963.js",
    "revision": "e232bf391d3a124d03f323f659567464"
  },
  {
    "url": "assets/js/30.eb2b4cdf.js",
    "revision": "dc0a4bf6e37a393ed318895e3693c8b7"
  },
  {
    "url": "assets/js/31.a67be300.js",
    "revision": "f017e4028368ccb993bcab665d8dc847"
  },
  {
    "url": "assets/js/32.e554e2f8.js",
    "revision": "2903d19e2979850c6e631f82bbf816bd"
  },
  {
    "url": "assets/js/33.e59d5926.js",
    "revision": "00439f39f8a5d5aae56e2e5e1ff7dae6"
  },
  {
    "url": "assets/js/34.44a2c58b.js",
    "revision": "c54a560fe1a522078f2d1af2108c6ac3"
  },
  {
    "url": "assets/js/35.ac7285d5.js",
    "revision": "20ebc2afe49dd4fdde14c51a18e9f25e"
  },
  {
    "url": "assets/js/36.9a064ab7.js",
    "revision": "767174e5485f166d30a45f1b24164ebc"
  },
  {
    "url": "assets/js/37.17eebfec.js",
    "revision": "e86a0e67b871cf5480cffd16d391afe1"
  },
  {
    "url": "assets/js/38.6cb2b6f8.js",
    "revision": "a532e24987afdc4f375425d50b674287"
  },
  {
    "url": "assets/js/39.d77d119e.js",
    "revision": "59ed299195c653b6cfb13face189942a"
  },
  {
    "url": "assets/js/4.43e5415d.js",
    "revision": "be0809ab98b84ebb06134eca0932a600"
  },
  {
    "url": "assets/js/40.bc98e881.js",
    "revision": "f33121865e4e916085e37874dd22707d"
  },
  {
    "url": "assets/js/41.1e81d965.js",
    "revision": "02b370861b5051bcf369d8fbae71c183"
  },
  {
    "url": "assets/js/42.372b52c8.js",
    "revision": "2756e5fb2fc370975691827b7bf6157d"
  },
  {
    "url": "assets/js/43.fc86da46.js",
    "revision": "bbc2404c82879f2c703486914c846a4a"
  },
  {
    "url": "assets/js/44.bbe4e089.js",
    "revision": "00ecbd2f8d5319c151a7f4518f83a112"
  },
  {
    "url": "assets/js/45.0cefbff9.js",
    "revision": "90fcb4cc1ea29758448a93464afbb15f"
  },
  {
    "url": "assets/js/46.58d66a22.js",
    "revision": "968510379e3e509587ddd68ce0339424"
  },
  {
    "url": "assets/js/47.5f4e936b.js",
    "revision": "ce3c8c69e20fbf573d9e68d383cc7aa3"
  },
  {
    "url": "assets/js/48.6513f8d1.js",
    "revision": "2c0106bc0f111cc5c93f0c86d02e50dc"
  },
  {
    "url": "assets/js/49.d37c250a.js",
    "revision": "f806a79a2221954f81073d409f17d5b3"
  },
  {
    "url": "assets/js/5.e83109bd.js",
    "revision": "0b6d52b48a4151a27871b036ebfdace8"
  },
  {
    "url": "assets/js/50.234f133c.js",
    "revision": "71fe55fe2c0614301fcc976378a6184c"
  },
  {
    "url": "assets/js/51.b9e2914d.js",
    "revision": "d64cc2d17a924d932beb9d7ec3ed03cb"
  },
  {
    "url": "assets/js/52.ec0a4f49.js",
    "revision": "758a5d535d152a2c291d164fcbfcf919"
  },
  {
    "url": "assets/js/53.53546d61.js",
    "revision": "ff9d5382aa38e539ca0ee559b8bd82c6"
  },
  {
    "url": "assets/js/54.e58918e0.js",
    "revision": "ac79d3d80bd18147b347296026bcecf0"
  },
  {
    "url": "assets/js/55.59ecfae1.js",
    "revision": "828280e30d5bfed56f893253365a2ea7"
  },
  {
    "url": "assets/js/56.2274bf3a.js",
    "revision": "0735bbdcbdb4af99dddba233f124ffc3"
  },
  {
    "url": "assets/js/57.8c1cf1ba.js",
    "revision": "9b5ad966de3e7adc1470b58e32f2cc3c"
  },
  {
    "url": "assets/js/58.d828df98.js",
    "revision": "2fba562a54ac281cef0714178b516b36"
  },
  {
    "url": "assets/js/59.c3578104.js",
    "revision": "2d5f602d80784a10358636503b6dcec5"
  },
  {
    "url": "assets/js/6.4bffff26.js",
    "revision": "c55efc0281e853156ba199cafafaed7d"
  },
  {
    "url": "assets/js/60.6f4154e7.js",
    "revision": "f10f756ea67d80938667fd1b35d1fb23"
  },
  {
    "url": "assets/js/61.97a74dd9.js",
    "revision": "1da28861e754ff23f8d38d253fd64d8b"
  },
  {
    "url": "assets/js/62.d581c36a.js",
    "revision": "581fba6575204deb2825e7f4f7a0b272"
  },
  {
    "url": "assets/js/63.bdb25c96.js",
    "revision": "b56c5b87a626e41ff00a2144a2650836"
  },
  {
    "url": "assets/js/64.2e403ed8.js",
    "revision": "dec6bf019b0c52609a91b1b09ee5c075"
  },
  {
    "url": "assets/js/65.1f4b1545.js",
    "revision": "5b72405314ce20d4b35023b4de6093d8"
  },
  {
    "url": "assets/js/66.d6357aaf.js",
    "revision": "940c5c4ba127baf4fecc1f2183eaf369"
  },
  {
    "url": "assets/js/67.e48c3c8b.js",
    "revision": "3eace40e388db4dbd57684b7aaedc141"
  },
  {
    "url": "assets/js/68.bb821977.js",
    "revision": "5b9f550ca281de56997a835dc46ca0fa"
  },
  {
    "url": "assets/js/69.49f30aee.js",
    "revision": "0ff1306f612c6efa29863648943ba577"
  },
  {
    "url": "assets/js/7.0c4fd8c3.js",
    "revision": "6c9c2539899e771dca756d37277ae706"
  },
  {
    "url": "assets/js/70.31f05936.js",
    "revision": "afe2309ad3b49eae7a870bfb84c340a4"
  },
  {
    "url": "assets/js/71.4affc68f.js",
    "revision": "75cfa1190bb75ee07dcd1905dae1527f"
  },
  {
    "url": "assets/js/72.ad881831.js",
    "revision": "5a5194994dcdcc21b6dc67b7766e9f84"
  },
  {
    "url": "assets/js/73.938eb223.js",
    "revision": "d429c2a15fd4d39eff63ebe7c5bf4689"
  },
  {
    "url": "assets/js/74.9827d2b4.js",
    "revision": "2076747396b09ba323012cf05b828be8"
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
    "url": "assets/js/8.5062d0f1.js",
    "revision": "9a9e4f12bcb1ebf0bd0d081492109f56"
  },
  {
    "url": "assets/js/9.c7376a47.js",
    "revision": "cef0f20b2120b7967b8ede1fa7477475"
  },
  {
    "url": "assets/js/app.bcd4db0f.js",
    "revision": "b84e7c4a4657ceebe769edc0d11dda38"
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
    "revision": "ff3798c9fc3c3095a7ef553a80eb9436"
  },
  {
    "url": "index.html",
    "revision": "7e8d2584020d455b5e92e1eed60be3e4"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/01c73a/index.html",
    "revision": "e21f388e6d9a604699bfb6642f422044"
  },
  {
    "url": "pages/085ac6/index.html",
    "revision": "b0213f8e84fc7d77991a425cd557f008"
  },
  {
    "url": "pages/0e0ace/index.html",
    "revision": "c1b00edea5210a992e2d56ba06eed298"
  },
  {
    "url": "pages/12e42e/index.html",
    "revision": "1d1a8f2a0975746ff119bf582dd92b2a"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "9c8f1887953c52c17c2c43ce7de5bc92"
  },
  {
    "url": "pages/1df150/index.html",
    "revision": "c302b0a21e5914e78112ffb071c09d43"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "fd801527ab71cd10516b276fe26e3c7c"
  },
  {
    "url": "pages/261296/index.html",
    "revision": "70eefb04a398543a3f3d621a3b2f530a"
  },
  {
    "url": "pages/28865b/index.html",
    "revision": "2bd7aeb480e9ba1450c659d29c4bc7c7"
  },
  {
    "url": "pages/2b7823/index.html",
    "revision": "82a3a908485e2a9100386e377e8c283a"
  },
  {
    "url": "pages/2f9a95/index.html",
    "revision": "cb7c363398bf1d297896ae2390f5935e"
  },
  {
    "url": "pages/348e2c/index.html",
    "revision": "da226cd2c784625e023b1e771e3bce99"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "09b6bdd7755c227ce02e82e8077f377e"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "1df6122eff6c367626f229f3029431e1"
  },
  {
    "url": "pages/4261e1/index.html",
    "revision": "6dbbb2ed5034de31dce579e3ebbef1c7"
  },
  {
    "url": "pages/452b27/index.html",
    "revision": "ad33a32b1fcf7d0a08ad8eacca747a8e"
  },
  {
    "url": "pages/4ad23a/index.html",
    "revision": "3f76a7c2232c15871e11102bd86c008a"
  },
  {
    "url": "pages/5e1760/index.html",
    "revision": "505eaec128433ec8110d275682c40f40"
  },
  {
    "url": "pages/5f5b7e/index.html",
    "revision": "f5a12365543e380131c4fd9686dbbbac"
  },
  {
    "url": "pages/65c0ee/index.html",
    "revision": "dbac226aa929bce0fc5275a0c2df2110"
  },
  {
    "url": "pages/66713d/index.html",
    "revision": "adc37a51118adfd28072147861cb893c"
  },
  {
    "url": "pages/68697d/index.html",
    "revision": "191fd5a65cdbd2c0753bb79b7bdb97c4"
  },
  {
    "url": "pages/6dc096/index.html",
    "revision": "57f78cb74e614f3be7469ab68515a794"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "1046e1e624423b28dd0b3963df1de402"
  },
  {
    "url": "pages/78348a/index.html",
    "revision": "1cb0793dbb7d818be48bba9a90f4928d"
  },
  {
    "url": "pages/78ff99/index.html",
    "revision": "8593542e2c9987bfcc15a16f094494b9"
  },
  {
    "url": "pages/7b5691/index.html",
    "revision": "ae2e27cec8d4a938fa4a213f9d54c0b2"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "8b0cf7dd273e6ab0d7e859635e4d6cec"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "8e267c7edb366446d7b8a69d0fac2cc5"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "65678f2746d3248f5be830f1e74df203"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "60d5f6e2d58a5e079e91188e0cd8a14c"
  },
  {
    "url": "pages/94ea5d/index.html",
    "revision": "afe6e12c68bb66e6bd2ee29adfd15b90"
  },
  {
    "url": "pages/956375/index.html",
    "revision": "8a48cb911641ea183bdbb56ab8955c3b"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "573ebc9c77ed3cbf1b964fc12af66cca"
  },
  {
    "url": "pages/a30fdf/index.html",
    "revision": "1cb6dd913feea9cc55ac38ac03f18ca0"
  },
  {
    "url": "pages/a53f89/index.html",
    "revision": "f2a364f72dc23e315fd955195d645850"
  },
  {
    "url": "pages/a6ca3a/index.html",
    "revision": "d79ea339fd9cbc3cf2ecd0d7c9715a48"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "516ba366239f9f93778ab75eb85a31f6"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "743c54b3cc1bb4f347cc74c42eabf6fc"
  },
  {
    "url": "pages/ad6a7b/index.html",
    "revision": "1be5b0d42dad451a887838398b327f9d"
  },
  {
    "url": "pages/aeef46/index.html",
    "revision": "9bf73d5cead1602e0577f46c8b8816ff"
  },
  {
    "url": "pages/bc31e4/index.html",
    "revision": "c84d0d73a45c5331bb70d765cb4a6e91"
  },
  {
    "url": "pages/be8a48/index.html",
    "revision": "359a1da86ce263e2aa5ec978e4fd80b8"
  },
  {
    "url": "pages/c3ce51/index.html",
    "revision": "9069a513c1ca18661e96d3aaaf45d12e"
  },
  {
    "url": "pages/c7ac92/index.html",
    "revision": "863e6678ebf5459d1d074e4f955df614"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "2843da41de00c0e10197321d45da58b1"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "5cdae82fe2a3178ffd2a046e0accb2db"
  },
  {
    "url": "pages/d4b093/index.html",
    "revision": "dd3ad782f1fef15be91474cc313c881f"
  },
  {
    "url": "pages/da3888/index.html",
    "revision": "b357d572f72cd18810ab72fc75c92d84"
  },
  {
    "url": "pages/db673f/index.html",
    "revision": "39818cee43e5928f0a916d0d8c9dd63c"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "6eda7a24479816e53830a556cfa16321"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "b613787507c1033bd32f697f1901b1de"
  },
  {
    "url": "pages/f34f1e/index.html",
    "revision": "13881eadd87cd1b8c2fe0cc7a0c020c6"
  },
  {
    "url": "pages/f7d977/index.html",
    "revision": "6475989be1b737d46b4faabd8c1b3267"
  },
  {
    "url": "pages/fd538a/index.html",
    "revision": "673331b83950fbb12bc48d810a174d7a"
  },
  {
    "url": "pages/fd5cfa/index.html",
    "revision": "ac3ddc8c7e3e1fe5f33b9438be8d8508"
  },
  {
    "url": "pages/JavaScript/class-inherit-overwrite/index.html",
    "revision": "793b0e56824aab5d63185ae4cfb55fe3"
  },
  {
    "url": "pages/JavaScript/index.html",
    "revision": "ab6b4cf4d73b87c3e4731db2e192aa3e"
  },
  {
    "url": "reading-source-code/index.html",
    "revision": "9f15b3943d68f48b77657bce25a6eb77"
  },
  {
    "url": "rmmv-base-js-course/How-To-Get-Start/index.html",
    "revision": "01ee8291d24f5f2e365f20ff4fbb4725"
  },
  {
    "url": "rmmv-base-js-course/index.html",
    "revision": "0e1609469f8b1f62f1a344b51bdc086c"
  },
  {
    "url": "rmmv-dev-todo-list/index.html",
    "revision": "65a2d8b583b629282055d87c6cac9600"
  },
  {
    "url": "rmmv-resource/index.html",
    "revision": "f804cc038ab7b77150589f73f0708f9c"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "vscode/settings-json-formatOnSave/index.html",
    "revision": "1ba4136f168887ae08fdd7a7e8083c2e"
  },
  {
    "url": "vscode/shortcut-key/index.html",
    "revision": "af8cb29e4dc2e054b892ea6d003c0708"
  },
  {
    "url": "wang.zhan.shuo.ming.html",
    "revision": "3110bbf0da176c67fb58bb0deaf70f8c"
  },
  {
    "url": "write-rmmv-plug/index.html",
    "revision": "80f53d532c2387da34942118f428b76c"
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
