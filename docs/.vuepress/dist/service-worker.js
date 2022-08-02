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
    "revision": "de5b7ea67421b203350a805be5741be7"
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
    "url": "assets/js/11.3ed6ed7d.js",
    "revision": "11de307c83a405b93a4207159361f6f3"
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
    "url": "assets/js/14.0e108d03.js",
    "revision": "8f06cbe5c7845d3d36cbd8bb67fcb900"
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
    "url": "assets/js/20.dd513556.js",
    "revision": "f7678daf6e77666c8fadaf52f0fa8b0c"
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
    "url": "assets/js/27.4d2655c0.js",
    "revision": "df4a549b689a514561ddd9961544d3eb"
  },
  {
    "url": "assets/js/28.c2873a52.js",
    "revision": "40008baf0a9d84fe59bfd50a3dd40061"
  },
  {
    "url": "assets/js/29.4d6dcb51.js",
    "revision": "a1d3ec8c89791a3987a53b9d767018f3"
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
    "url": "assets/js/36.07e26c1a.js",
    "revision": "e7b0671ffd4756be238ffc95dac57f65"
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
    "url": "assets/js/41.a3330447.js",
    "revision": "f7c772a14f46909bc1fcd15b84697286"
  },
  {
    "url": "assets/js/42.e40993d1.js",
    "revision": "b71b586328a87168c2f3cc30b2526203"
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
    "url": "assets/js/45.285a5658.js",
    "revision": "ca7403b7a10e7a9be78dc38347988c2f"
  },
  {
    "url": "assets/js/46.043805b4.js",
    "revision": "6392e6aa0e4ed7dd6a49826e4deb9a8b"
  },
  {
    "url": "assets/js/47.562ed135.js",
    "revision": "cf5a5858582ecf32eaba046386bfc148"
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
    "url": "assets/js/51.724634a3.js",
    "revision": "87ced502c03244cd0b9fbfc7b774ac4a"
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
    "url": "assets/js/63.d1577535.js",
    "revision": "15fe69b8db30e1d65de7f056b038e969"
  },
  {
    "url": "assets/js/64.68687d1a.js",
    "revision": "967339b50666fe76981a259db9695789"
  },
  {
    "url": "assets/js/65.34d4af3b.js",
    "revision": "8d68644c4fc05dc3d4d71ad0f1e937f8"
  },
  {
    "url": "assets/js/66.ff310058.js",
    "revision": "c820d56539a5440071903a1a708a0da1"
  },
  {
    "url": "assets/js/67.9f9729d5.js",
    "revision": "80c120b22690785284dbc392aef0be80"
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
    "url": "assets/js/7.332cf23f.js",
    "revision": "b480e389b23a17ec69154a323df04d98"
  },
  {
    "url": "assets/js/70.b6e659d9.js",
    "revision": "8233ba2e49b922eda2bb7e92aaabe3c1"
  },
  {
    "url": "assets/js/71.216c9d72.js",
    "revision": "f603348b27bb1cb75dd4c90b4215f5bd"
  },
  {
    "url": "assets/js/72.15876d5d.js",
    "revision": "4a29c707fe0f5dd6d25129a4c83e4c5a"
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
    "url": "assets/js/9.9f98cc91.js",
    "revision": "d87ce72d56e1664acfd8ef7b499b4d49"
  },
  {
    "url": "assets/js/app.8ec5b43e.js",
    "revision": "f0046856899c5f03ac9c0ca762c02b09"
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
    "revision": "2c4a88082134de1edc0068ae136d2841"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/07e629/index.html",
    "revision": "7bf456b6daf68bc795a61d960aa463cb"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "c3dda173b6fa883f69bd034c1459d2eb"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "f39a77a8f00425f001cead41f4d2146a"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "2fd9394cdaa96d4c74c26343d80620b8"
  },
  {
    "url": "pages/18c3c9/index.html",
    "revision": "c3f9ed282fc2e6e20f4c2a7e502e46a5"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "7384d72b5db96d370d26dc1696f02c7d"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "c301cf9786fc2645b39d29b035eeceb5"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "478756066699929669218ca73e111e00"
  },
  {
    "url": "pages/38321c/index.html",
    "revision": "12294a69b03c1bf391bacc289be20ee2"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "5738cbebf54b86ff020030cc42bab3ff"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "8482b3e2f93fd969d3f9c34c862cb925"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "b140d06b49f59e0d2971671ac9e991ef"
  },
  {
    "url": "pages/452b27/index.html",
    "revision": "5b5cd22605f5efe5eff48f9629cc74bd"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "6172d18376648ad7fc770bdbcb03cbdd"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "aca91a1db71110e06e22fb9043e3e539"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "9f9a933949f9ff903b6974babe176f4e"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "f2129ed22a3541ded4db1e86cf510df0"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "7871bd373cc936cd18cd9e39646a72c4"
  },
  {
    "url": "pages/68697d/index.html",
    "revision": "40a58c1b18d1d26d43f66f7814450850"
  },
  {
    "url": "pages/6be093/index.html",
    "revision": "30498fd782e2462171065c5f704eba02"
  },
  {
    "url": "pages/6f9f35/index.html",
    "revision": "f3fa3df9523d67bff65a387304715111"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "395a5640dc21dd44dda136de4dda3dc9"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "e4d5ec0fba43cef30e6b851b0002d6f4"
  },
  {
    "url": "pages/7b95b9/index.html",
    "revision": "af4cdbd84d446185f1a6b0066323ccad"
  },
  {
    "url": "pages/7cd571/index.html",
    "revision": "08721c17174bc1c1de92923d189d05cd"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "00950d7cabc457bcdd1290bc778bef26"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "e8744a0218603a752d093e5806007e0e"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "6a21211468e1946bc24ec7042e92ca9b"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "e28438419113ccde889b3bca97493f68"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "89e3a42d58ab65641efe3bd7d6f42d43"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "251407954b288dea4e4d437bfad57e41"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "56d6ba69c806ee6bb8a35de4239c7e0f"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "742ec66bad47822b7df7797422dccf29"
  },
  {
    "url": "pages/a6ca3a/index.html",
    "revision": "e0e5cd0c97351d9d5901b9dcd5c418b8"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "b3be0260cb353258367a52c74b047ccb"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "d62e52a96532037ef0af3adce8b25486"
  },
  {
    "url": "pages/aaefe0/index.html",
    "revision": "a4124b253d6cf514c5916ce00a9358d6"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "3db77bef2e9de48386fffbd8f734c729"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "8c4c129ce353b6000afe3acf10d88255"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "855d85d9254571f51db6317b184bbb77"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "f80c835fcbf8537866c982587a2259b3"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "446497c1041733f94b1b39fe37546272"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "dbb0a93eda8d839f9bb30c8cacf38bcb"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "6cdbd1bb932bc88a7e9e7608fd28e835"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "49a3d1ba21d444c41382bd5a352460b0"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "c2e8708dfd9700a933566f8071bc15c8"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "2018ee53a2867d2005878d64594bacae"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "bbdefd1b2cea94f417e5a6b4a7f3bf4b"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "9b477ac0e7c251f1a1e563a99449dc5f"
  },
  {
    "url": "pages/da3888/index.html",
    "revision": "f6b5bfacd05646f55a5f0dbb71a9898f"
  },
  {
    "url": "pages/dc65bf/index.html",
    "revision": "ef7b59ff4452d82d265c0c9d7f90d9d5"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "e2642e63c8d3b52c642423c05091febd"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "548e1ed85ce65097bb272a466c61aa2b"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "b6400f67abb1ce0778129759ad3dbe14"
  },
  {
    "url": "pages/e42c04/index.html",
    "revision": "0d097cf062e4c87209dc1529363e34c1"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "d3ba9534a6bbe9e5ee9976a3111d88cc"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "dad749c09568dcb7af65d3aab9aa9d13"
  },
  {
    "url": "pages/e52753/index.html",
    "revision": "ce96bd3914b84ddafef868d10db96c8c"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "be9907a69841b9597b5e97e285ec5725"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "1324440e587fa7288e1db88f16c11391"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "5229b885aea4b3ff6b311cb455661000"
  },
  {
    "url": "pages/f65105/index.html",
    "revision": "02d62bee7c6b9fe8a50d89adc9815f57"
  },
  {
    "url": "pages/f7eee8/index.html",
    "revision": "7d8af11ceba0ee70424672db37df5515"
  },
  {
    "url": "pages/JavaScript/class-inherit-overwrite/index.html",
    "revision": "9091a79b942ade640ddb5fef1eda817a"
  },
  {
    "url": "pages/JavaScript/index.html",
    "revision": "9a804dbe57c901c5bcf7789a875d3c2c"
  },
  {
    "url": "preface/index.html",
    "revision": "595e0222631a95b92da809e9b1f863c3"
  },
  {
    "url": "resources/rmmv-source-code-translation/index.html",
    "revision": "9a97004981d016ea8fa418df91ab2f57"
  },
  {
    "url": "rmmv-base-js-course/How-To-Get-Start/index.html",
    "revision": "af6730f479051d2da1f5fb8c59490283"
  },
  {
    "url": "rmmv-dev-todo-list/index.html",
    "revision": "7a1fd0511a895ef532c55eaf05af192d"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "VScode/settings-json-formatOnSave/index.html",
    "revision": "e3b721be5126e857c044d7a8510308b2"
  },
  {
    "url": "wang.zhan.shuo.ming.html",
    "revision": "c8def26813b3ec5a667dda1629936776"
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
