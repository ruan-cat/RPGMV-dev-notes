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
    "revision": "eb918ee7d4333930d0e1fdb0bd6e6312"
  },
  {
    "url": "archives/index.html",
    "revision": "b54f3fccaca5998f1b6f1154109faba9"
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
    "url": "assets/js/10.2d55b8a5.js",
    "revision": "ee90a9d930c5422a1a8b645ab237e7a5"
  },
  {
    "url": "assets/js/11.43be5fda.js",
    "revision": "5b526dbee1b6e502a558647c06c04118"
  },
  {
    "url": "assets/js/12.d686c697.js",
    "revision": "63fdb7035e067adfbf7614040dfa1c5b"
  },
  {
    "url": "assets/js/13.cbbdded8.js",
    "revision": "8695a12c79900207be63dd4690a5b8d3"
  },
  {
    "url": "assets/js/14.79ca2cbc.js",
    "revision": "d66d142d2ffd7a5c9d8aec4bf50fd61c"
  },
  {
    "url": "assets/js/15.86b3eab5.js",
    "revision": "1e6b0d9a5b4bddebc70213dd72d10948"
  },
  {
    "url": "assets/js/16.321a6dca.js",
    "revision": "71f2f7d7ee0e54fe3bdfe997ad7931fd"
  },
  {
    "url": "assets/js/17.c585b67e.js",
    "revision": "27a9cf6faed4343cbbf4245a2755be99"
  },
  {
    "url": "assets/js/18.7f212fd9.js",
    "revision": "a06c2b991a92d27844750dceb91345cb"
  },
  {
    "url": "assets/js/19.ad21c0a8.js",
    "revision": "608328c90c435a96d2cd8ede0600bf46"
  },
  {
    "url": "assets/js/2.c2bd81e7.js",
    "revision": "c743eaf797724ddde19b3841e08c7c2e"
  },
  {
    "url": "assets/js/20.45e5d825.js",
    "revision": "dd6ad6cf81a41a70828b9dcf2a6fbadd"
  },
  {
    "url": "assets/js/21.f4c1724f.js",
    "revision": "834008b4326cdadc6644ef267f24e396"
  },
  {
    "url": "assets/js/22.23266964.js",
    "revision": "eb92c2f89d2f9a3dccb58324ed35e371"
  },
  {
    "url": "assets/js/23.3f103f04.js",
    "revision": "2943108f0972d7c1d8599b2df2cdb272"
  },
  {
    "url": "assets/js/24.a6a25b34.js",
    "revision": "96f6ef4c83b68d5ccbf01fa3814ab479"
  },
  {
    "url": "assets/js/25.851d88fd.js",
    "revision": "9a825947acaea6f8485e69d2c0319fd8"
  },
  {
    "url": "assets/js/26.8bd51d7c.js",
    "revision": "08b31952050c901741df61b65b866989"
  },
  {
    "url": "assets/js/27.59b6dc71.js",
    "revision": "0f6cbdbaa3ccc08f8228a07ca5bb586a"
  },
  {
    "url": "assets/js/28.02f841b7.js",
    "revision": "73a12df416d9d53310eb53de8ca32ab2"
  },
  {
    "url": "assets/js/29.c457cff0.js",
    "revision": "cec432c5dffd0b7ce30b98a49de6be5f"
  },
  {
    "url": "assets/js/3.65af8341.js",
    "revision": "b72c5682054f2c74d1d166fd60638370"
  },
  {
    "url": "assets/js/30.c7b15736.js",
    "revision": "6f3fb26347fd31729926491775672782"
  },
  {
    "url": "assets/js/31.1c5e898d.js",
    "revision": "3f1e24ad4dc996e695b2e23c3afacc21"
  },
  {
    "url": "assets/js/32.5cea9610.js",
    "revision": "e0cd295634858bca54597429f0958339"
  },
  {
    "url": "assets/js/33.de817520.js",
    "revision": "2a2140cd91da71000f15d62b21e2def9"
  },
  {
    "url": "assets/js/34.ead9d54c.js",
    "revision": "7ab884ff14a3a3ea710b1f3fc61eeaf2"
  },
  {
    "url": "assets/js/35.902f210d.js",
    "revision": "bb934bcbdc37164fbb93dc87099f21c7"
  },
  {
    "url": "assets/js/36.5b4994bc.js",
    "revision": "97cf7e877290453aaa34edef14cd7c98"
  },
  {
    "url": "assets/js/37.5e1b9015.js",
    "revision": "f1d76ee474e60b6511f6ed74a6a72e9a"
  },
  {
    "url": "assets/js/38.bc707ecf.js",
    "revision": "84e19d4ce880bc5929287ee0736aba29"
  },
  {
    "url": "assets/js/39.1e36cb4a.js",
    "revision": "33892a227c1ca42f24d8d4591efd5e3a"
  },
  {
    "url": "assets/js/4.28334808.js",
    "revision": "a2e1bccebeeec5ec1e66653ba801f12e"
  },
  {
    "url": "assets/js/40.30a713ce.js",
    "revision": "8703b782d0b12eeca8ffe60cfc2209a1"
  },
  {
    "url": "assets/js/41.12b9a943.js",
    "revision": "01166513f9ccfacbdd42a67001be0918"
  },
  {
    "url": "assets/js/42.f227c58d.js",
    "revision": "844335985f0d8b6a24af0407d7c48055"
  },
  {
    "url": "assets/js/43.22ba3a8b.js",
    "revision": "84dc2177399f5e55800563f0942807f2"
  },
  {
    "url": "assets/js/44.fc8a6b0a.js",
    "revision": "828c8fe556c83b9677e72128bb08b990"
  },
  {
    "url": "assets/js/45.60185257.js",
    "revision": "9bc2753e56c504e018ee17442dcd8e36"
  },
  {
    "url": "assets/js/46.e77bca0a.js",
    "revision": "1d8638d3e1e79f0045e9d41dd86e9eca"
  },
  {
    "url": "assets/js/47.87fe1cd1.js",
    "revision": "6002aee6cc0edf52aa21a39c0b1a9845"
  },
  {
    "url": "assets/js/48.af79ce81.js",
    "revision": "fee7b5dac3d9afd8e3e4e5da8c3f9cde"
  },
  {
    "url": "assets/js/49.291b372a.js",
    "revision": "33cb476178832d8e6860c1a970fde413"
  },
  {
    "url": "assets/js/5.d0df89db.js",
    "revision": "4c6e9775f961ef0490e8322c4ac69772"
  },
  {
    "url": "assets/js/50.a739b7aa.js",
    "revision": "1bb3aa8cdc5ffd3419c6a38b36db6913"
  },
  {
    "url": "assets/js/51.e81d3d95.js",
    "revision": "21bf66430eab47614fbb7fc13bb05d3e"
  },
  {
    "url": "assets/js/52.3794123b.js",
    "revision": "c63ff87bbc76caeded8db8efe0db4101"
  },
  {
    "url": "assets/js/53.b4315e77.js",
    "revision": "6387070139c05195657294480afb8e8d"
  },
  {
    "url": "assets/js/54.cabe59fd.js",
    "revision": "609486488112085621a7e3278819ba85"
  },
  {
    "url": "assets/js/55.6d677bd7.js",
    "revision": "19b967cf1adf0afceb8be5a5eb7d4d3e"
  },
  {
    "url": "assets/js/56.255a5b8f.js",
    "revision": "4cbbd7a5384d87ad8000fd76015ee398"
  },
  {
    "url": "assets/js/57.be6ec9fb.js",
    "revision": "28c557300238f0c92886280136c7de48"
  },
  {
    "url": "assets/js/58.d8e016d6.js",
    "revision": "4e5837a48725739966714ada21bec4ef"
  },
  {
    "url": "assets/js/59.ce6781f4.js",
    "revision": "a0854eae8a1311e8dc66697ef96dd7dc"
  },
  {
    "url": "assets/js/6.70f279a7.js",
    "revision": "b8bb2310b1478545c4267df877c63316"
  },
  {
    "url": "assets/js/60.275d8d5b.js",
    "revision": "e783441655ee7d6f55f0e45a3665bed9"
  },
  {
    "url": "assets/js/7.7f67e723.js",
    "revision": "0cbcde0161df97d46104375b64c6b8a0"
  },
  {
    "url": "assets/js/8.7b361c42.js",
    "revision": "889cdbf04f65f440fa5bb21cfc614375"
  },
  {
    "url": "assets/js/9.36746dff.js",
    "revision": "05e9783c096afd13779da41e4482ee6f"
  },
  {
    "url": "assets/js/app.43f7ccd9.js",
    "revision": "fe687d0e775d22644e98d6a575bd150f"
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
    "revision": "cad50a050b7e9f4eb5ff6a57b8c8137c"
  },
  {
    "url": "index.html",
    "revision": "1a750f784b4c8dce4cdc11e9832bd546"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "5892868c6cf1e1b09279e96ea511d2df"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "804955d579135f42b486acadb75c72e0"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "4f64986a1b6f8be555deb633b850c682"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "2bd04038273ea07730c1495b9a83c2e9"
  },
  {
    "url": "pages/168760/index.html",
    "revision": "a96aaf432065fdd5f826458b8ce0cb25"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "3e68c315b7f06dc5c18ec1b35722af50"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "c16e9e446aff2693a43fbab7663a541e"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "31ec36416d9765f38cb66fbc71116be2"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "c62dead92be3a778bd459d33b3afe937"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "af9bcd468226b61d7deaede2a4cf26b7"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "07eba6930e1790cafa58467abda44fcf"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "e667fcf786cb05d724cdf2ba94b9993a"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "972a5b34f511b0d1bbdc8fe438b1a5fb"
  },
  {
    "url": "pages/4e74f5/index.html",
    "revision": "dd1f4553f67b7e4b5c39bc9f72ebadf8"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "3423d18b634c872573a9adbbdac44068"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "69880fb4d2c57eeb169c1f4f89d45e7b"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "4c1475cb8c2dfba1c27202efd4e2e19b"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "df5556e77ce51de9284c6ec1f0c0c8de"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "4a9cd8db4daf3efacdd21d36a1e14ef9"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "3233e4980328b1ee6b788f604b058d84"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "08e1a119ea2ecd041571d028b6859761"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "044c7989f50b5632ba361541f268264f"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "8833dafce7016d6ae15d21a1d99c3e91"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "d9ed59c099f8cb9da0b3225d04705a80"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "29a296a7eadfabb9c6e436e23979df85"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "e897536251d3eb095b8f07a88238a44d"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "93d5c2dd42a8a323ad4072d5c32dfc7d"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "1d2e00eec45041f6623fe38e663d37d7"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "fa87b3d4c6b7fd8efa6ba0929a2ded7c"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "db58c97d4f9448e84f033442cfd662a7"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "6b5d7abc14d515e34e395df93396cd48"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "13fa0ad211dd84e70fe2723a00795dc3"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "1ffbf701edbab5aeb1b819e412a1308d"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "defec3725808d58efb311447286b0e4d"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "b31e85a212a152d46896407f96bded32"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "4be8a93ebb3c02de99c77073f9c7ce08"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "e0d47c860391a9e122d4e7d78ce989a7"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "28ee730deba7155c7fd479440b6e165c"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "adb1fbe5bec73f69eee1771201916502"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "631b7e35480a665b27b59609113bd4e8"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "25684277a843190946f16567b050dc48"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "21e5673c5bbabe06b390afaff20c2849"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "bcd2933c818d0011babb38627685ea1f"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "6bf572f79d0cdccb814837b415777abe"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "6bbdc4a28a913d6c2246ba6beacd40e1"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "1014e986bfec80868a7549863a13ed83"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "cbadbf48985c76e9d63cc760c3348575"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "259e00939acb7d57c82fbc8e04dc4d7c"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "bff7f0cbdd9a60aa23142c657cd459bf"
  },
  {
    "url": "pages/fb5fc5/index.html",
    "revision": "3e87218d2cf597ff93407c58712803d1"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "tags/index.html",
    "revision": "dff6ce45d31435b23027e311c3e974a7"
  },
  {
    "url": "zai.ban.qian.yan.html",
    "revision": "72db0f847251f26c3996641f65d3deb1"
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
