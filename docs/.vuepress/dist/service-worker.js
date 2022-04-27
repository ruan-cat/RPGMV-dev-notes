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
    "revision": "36c83218cb49d0f550845fec89e9f89d"
  },
  {
    "url": "archives/index.html",
    "revision": "a83aab50fba3d52e459377d8f7e6cd8f"
  },
  {
    "url": "assets/css/0.styles.a204ea2c.css",
    "revision": "4d7beba55589734df94a84f1d6c54079"
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
    "url": "assets/js/10.de479aa4.js",
    "revision": "0fb0c5bdf74f410accd34176c07063d9"
  },
  {
    "url": "assets/js/11.a4b6eafe.js",
    "revision": "e6d089912f2731f7f796d363a9068076"
  },
  {
    "url": "assets/js/12.51a9a61a.js",
    "revision": "d12df9a5444f22d436b418120e2b1b6b"
  },
  {
    "url": "assets/js/13.67419f16.js",
    "revision": "e6122f87837667b0ff498b31ac826474"
  },
  {
    "url": "assets/js/14.429364bb.js",
    "revision": "bdd8bdc7bcaaa1887f5d9cd794f49ee7"
  },
  {
    "url": "assets/js/15.2e0bb752.js",
    "revision": "66caa505922d6d702c7048d4511436e8"
  },
  {
    "url": "assets/js/16.4c6129f7.js",
    "revision": "ff10eab12605fb61583983806b9ab113"
  },
  {
    "url": "assets/js/17.5a739c72.js",
    "revision": "c881d659c2950a1b4979459e12a4cee5"
  },
  {
    "url": "assets/js/18.16723f67.js",
    "revision": "ebe0d3267074b255778e2dd563c1a126"
  },
  {
    "url": "assets/js/19.5982a209.js",
    "revision": "8f423d6ba5e138bfabeeef31ba2c15bb"
  },
  {
    "url": "assets/js/2.800d3d26.js",
    "revision": "f8c2e64f4834650cd6dea4d1113c051e"
  },
  {
    "url": "assets/js/20.4e0ab761.js",
    "revision": "a8094c396863e98bd10a1d88924bc978"
  },
  {
    "url": "assets/js/21.20fb60c3.js",
    "revision": "57de1a20630fee7d25752d23b53efd32"
  },
  {
    "url": "assets/js/22.44af7d47.js",
    "revision": "2e5fb6f551a636f288de1899b01cbc1b"
  },
  {
    "url": "assets/js/23.a747f848.js",
    "revision": "b36027b6fc3c1514f78153f16cb353fd"
  },
  {
    "url": "assets/js/24.23472f23.js",
    "revision": "9539968828338fbaba2836a1591ec9a3"
  },
  {
    "url": "assets/js/25.fdb121b9.js",
    "revision": "640d0deb9f490e19abeffae477c2d3d3"
  },
  {
    "url": "assets/js/26.46c66d23.js",
    "revision": "5e6300649be132a33fe09b468924e96c"
  },
  {
    "url": "assets/js/27.9cba93bc.js",
    "revision": "8b1f66eac47e6d0855d5473d985a8733"
  },
  {
    "url": "assets/js/28.ec52cdd5.js",
    "revision": "25cb23bf0fdcc0e784cca72dd74ba087"
  },
  {
    "url": "assets/js/29.8256a553.js",
    "revision": "911cdb884163513d6cf1bec84cff0e25"
  },
  {
    "url": "assets/js/3.693a0df1.js",
    "revision": "c45db8f6fe06be3fb2edb2e14175ee94"
  },
  {
    "url": "assets/js/30.efaaa0e5.js",
    "revision": "9bfe16dd79a718e684b92289dee3d6f4"
  },
  {
    "url": "assets/js/31.fef21de2.js",
    "revision": "d9293078975b56b55249cea4316a8e6b"
  },
  {
    "url": "assets/js/32.b854d357.js",
    "revision": "f97bccebaadadac959ee85947a874e57"
  },
  {
    "url": "assets/js/33.3009b550.js",
    "revision": "8a406d93644d3aa4ea365973ee6d0749"
  },
  {
    "url": "assets/js/34.770080bc.js",
    "revision": "941da7a8d010f8c230d129e0843c5208"
  },
  {
    "url": "assets/js/35.1fe86495.js",
    "revision": "636457fe5786fde867b40e10602cdbb4"
  },
  {
    "url": "assets/js/36.8684097c.js",
    "revision": "ad0231e7cdaed70832fbda71a05d1074"
  },
  {
    "url": "assets/js/37.8df4823c.js",
    "revision": "961d89346a6b58dd497971654399ef2c"
  },
  {
    "url": "assets/js/38.ca4bf6c6.js",
    "revision": "21eed261b0e11eca808fe3b80d7e57cc"
  },
  {
    "url": "assets/js/39.3342c59c.js",
    "revision": "c582b7cc8f52073e25a70e527c149b6f"
  },
  {
    "url": "assets/js/4.2d76b5e3.js",
    "revision": "8fb97f3d357f23eaa576fa64edb30cad"
  },
  {
    "url": "assets/js/40.7463196f.js",
    "revision": "9cd834b934a18d54dcba66a7b0418285"
  },
  {
    "url": "assets/js/41.2bfab084.js",
    "revision": "60c4ad044a6031e2e27469d1c432f709"
  },
  {
    "url": "assets/js/42.7bec7887.js",
    "revision": "fb91b832c32a396db6cde3ca8ed917cc"
  },
  {
    "url": "assets/js/43.7e2abf87.js",
    "revision": "2a39f15a1b16c793059f24993845d1ff"
  },
  {
    "url": "assets/js/44.c250aadc.js",
    "revision": "3950fc8eab84c83dd4a4b09fabe49a48"
  },
  {
    "url": "assets/js/45.46044952.js",
    "revision": "fedc21870100d803acb3797ecfd2c91f"
  },
  {
    "url": "assets/js/46.88ca7022.js",
    "revision": "5dfa31805cf900f2ff14d903af2b7ce4"
  },
  {
    "url": "assets/js/47.f60909e7.js",
    "revision": "ab9af5a58abb1cd87acf2c94216e80a1"
  },
  {
    "url": "assets/js/48.461ce381.js",
    "revision": "0b4c2893200b9f5f3bd3604b150586d4"
  },
  {
    "url": "assets/js/49.e51934ca.js",
    "revision": "a8d3b72aca527da9885a5476f71af725"
  },
  {
    "url": "assets/js/5.00a9b8f6.js",
    "revision": "0cd76bca495e9ea10888597c5faf00b2"
  },
  {
    "url": "assets/js/50.993bd09f.js",
    "revision": "70eb1a5260eb29d42a9c22486a665b7e"
  },
  {
    "url": "assets/js/51.9a2ed33d.js",
    "revision": "b324a322053e2185d78099c9a9162a14"
  },
  {
    "url": "assets/js/52.ebbefbd9.js",
    "revision": "462e43346bedf3f8369d2eacb9c9fae8"
  },
  {
    "url": "assets/js/53.95cabf6e.js",
    "revision": "3eaddc1d11740a0b39eb91a34048003f"
  },
  {
    "url": "assets/js/54.a337fb1c.js",
    "revision": "7319e4336e33f0f7e1be8af7f98ee24c"
  },
  {
    "url": "assets/js/55.6964d0ad.js",
    "revision": "ed740dc6768680bc0225e67caa2165b9"
  },
  {
    "url": "assets/js/56.0efeafe2.js",
    "revision": "18ccf21eba806d7ac3f9552d9912c136"
  },
  {
    "url": "assets/js/57.c91abb2d.js",
    "revision": "f765bbcc1357dfe066522a868dd79c59"
  },
  {
    "url": "assets/js/58.aadabde8.js",
    "revision": "a3f9740e8a51f2d0ed36836f78a2e724"
  },
  {
    "url": "assets/js/59.9fb726f3.js",
    "revision": "7ad87c940b73e0c2df93b56d0846318d"
  },
  {
    "url": "assets/js/6.5ad722d9.js",
    "revision": "54399bf024d9e08e2ab16cebee1d1fee"
  },
  {
    "url": "assets/js/7.0afd430c.js",
    "revision": "0d9d7eef95b0dbeb3fb614f1ea1a5e32"
  },
  {
    "url": "assets/js/8.20ea9297.js",
    "revision": "da9a0a538944cf3afea1b80c9903ce49"
  },
  {
    "url": "assets/js/9.805c9d6c.js",
    "revision": "06c23b7c05f3e126cf8ad8e777761360"
  },
  {
    "url": "assets/js/app.305edf07.js",
    "revision": "c23a0ed8e403127f4178b7bbbdbdef6d"
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
    "revision": "6c270852af03e567f4de70bcb3ec16d2"
  },
  {
    "url": "little-alice-icon.png",
    "revision": "9c3da38453bd7a186eaac52e8af96c3a"
  },
  {
    "url": "pages/087245/index.html",
    "revision": "5c3dde30b414bfe14ec9b7a22ef981bb"
  },
  {
    "url": "pages/09ccca/index.html",
    "revision": "4918a61ebc178bc80346c64602737f25"
  },
  {
    "url": "pages/0f2721/index.html",
    "revision": "3913d1f1afbc77e8cd5a0cbf17b8d816"
  },
  {
    "url": "pages/0f738c/index.html",
    "revision": "4826584b8db4915455b484a1b1639854"
  },
  {
    "url": "pages/168760/index.html",
    "revision": "6a66e3a8f7080c4fedec57bd7c6ef97d"
  },
  {
    "url": "pages/21dc47/index.html",
    "revision": "07581e810c19a5959f14b1b5d35a19e6"
  },
  {
    "url": "pages/23f86b/index.html",
    "revision": "23a8d0b910cdd89da69c71f8a981d1c4"
  },
  {
    "url": "pages/2dd403/index.html",
    "revision": "e52f4fcfde3bd9c2894ca57a52c58020"
  },
  {
    "url": "pages/3d37b7/index.html",
    "revision": "882c86a37df56c4e4da916b030cb5b92"
  },
  {
    "url": "pages/3fac57/index.html",
    "revision": "a988228eb8448ceb3415de2c6599fcea"
  },
  {
    "url": "pages/41c6cf/index.html",
    "revision": "2c5530baa4614461058e76b8d46cc955"
  },
  {
    "url": "pages/473aaa/index.html",
    "revision": "3ca02eaa6b2e8913404030c5efb2e50b"
  },
  {
    "url": "pages/4a9094/index.html",
    "revision": "aab71faa15d09cda424ff8e463ea61a6"
  },
  {
    "url": "pages/4e74f5/index.html",
    "revision": "a0f06fd55f088f6272a3c0879e925289"
  },
  {
    "url": "pages/599f64/index.html",
    "revision": "2d655fde67b7e4046995f8fc5db052e5"
  },
  {
    "url": "pages/5ee86f/index.html",
    "revision": "5da5d8b4dea54c7f3af10af188c87d72"
  },
  {
    "url": "pages/66f318/index.html",
    "revision": "5e94aaf5f7a46de75791f0b1328af43f"
  },
  {
    "url": "pages/6fe34d/index.html",
    "revision": "a94d955ec792f58b64a59cb7b63b3c7b"
  },
  {
    "url": "pages/70fbcf/index.html",
    "revision": "c8ec517817379c7df641e76387e4a351"
  },
  {
    "url": "pages/7da1cc/index.html",
    "revision": "c5511ddc962a431c96a3022d7803fdea"
  },
  {
    "url": "pages/8354f6/index.html",
    "revision": "96fa7196a61beed9dc6048cf1d320689"
  },
  {
    "url": "pages/857db1/index.html",
    "revision": "4612807a3f9766d862ee3b4a05c208ff"
  },
  {
    "url": "pages/8febd8/index.html",
    "revision": "3c964d2c70cc51f8aa0ec5a47ee2956b"
  },
  {
    "url": "pages/9bbe71/index.html",
    "revision": "535ed3a96f3e0bae3b6946d7f8078fbd"
  },
  {
    "url": "pages/9fe311/index.html",
    "revision": "4dc8cd3ee4ded1f85f97d02fe5146bb4"
  },
  {
    "url": "pages/a07dcd/index.html",
    "revision": "5d606db0ca0de18fc2ecd9a55579052d"
  },
  {
    "url": "pages/a29e0f/index.html",
    "revision": "c620212c1ea73f5a93f041e6165b2b16"
  },
  {
    "url": "pages/a77a14/index.html",
    "revision": "2a037fabf955c9613aed14f93d83789a"
  },
  {
    "url": "pages/aadfb4/index.html",
    "revision": "b259b52a6bcb749c10e3b8017d332261"
  },
  {
    "url": "pages/acab30/index.html",
    "revision": "ac96fa17d8b6a64bed5a792905371620"
  },
  {
    "url": "pages/b3543d/index.html",
    "revision": "0c6e39c7653f58e2bbcb4f6fc3af20de"
  },
  {
    "url": "pages/b3e66e/index.html",
    "revision": "045c1978b0f55b72f157a643847cca13"
  },
  {
    "url": "pages/b5cd47/index.html",
    "revision": "98eb17859d5b4ead3b5032a916f6bda8"
  },
  {
    "url": "pages/b8c1ec/index.html",
    "revision": "f23e9a8d4ec858384a9bd9404484f17f"
  },
  {
    "url": "pages/bf34d4/index.html",
    "revision": "2006f95cc89e1a3624b6d3ef7b635c6c"
  },
  {
    "url": "pages/c12632/index.html",
    "revision": "6c6b5ed5945335d7ae6b04f6b784a0ec"
  },
  {
    "url": "pages/c73398/index.html",
    "revision": "67ba9be013c4bd7c70cc5e3f5d2653f2"
  },
  {
    "url": "pages/ca160a/index.html",
    "revision": "2c792f74cf40c2edeca5eb7298d28ca1"
  },
  {
    "url": "pages/caf7ae/index.html",
    "revision": "cf30b87d92f04619793517fa72bf037a"
  },
  {
    "url": "pages/cbac44/index.html",
    "revision": "9eb4f00d5d737f61646dc21b73a29e9a"
  },
  {
    "url": "pages/d417b5/index.html",
    "revision": "d0cf4265be64bff42c912c2d428a9a69"
  },
  {
    "url": "pages/de8081/index.html",
    "revision": "d6f352abce0d44e42cb0c568d97968f2"
  },
  {
    "url": "pages/e0bb74/index.html",
    "revision": "4d685205327d577c6a9bd1f4364e42f2"
  },
  {
    "url": "pages/e20810/index.html",
    "revision": "5c98f80737536906a0e4873a1d3d10dd"
  },
  {
    "url": "pages/e4c66d/index.html",
    "revision": "d85b374ae8882d97b5d80f8d385cd651"
  },
  {
    "url": "pages/e4dccd/index.html",
    "revision": "bd166d497aec814edecbceaafa24afbb"
  },
  {
    "url": "pages/e6522d/index.html",
    "revision": "dd70816a5a62873695e333f24044b517"
  },
  {
    "url": "pages/ec8892/index.html",
    "revision": "824abe129709bebd29f69a3253855089"
  },
  {
    "url": "pages/f087c8/index.html",
    "revision": "c5dfb108f3242335b72b92aaf2ffd528"
  },
  {
    "url": "pages/fb5fc5/index.html",
    "revision": "9c47724b079b2912c8dc2e146ffd689f"
  },
  {
    "url": "ruanCat-logo.jpg",
    "revision": "6b4432b4fd03c53282fc7e093b18daa7"
  },
  {
    "url": "tags/index.html",
    "revision": "b0058b8ea9388f6e0c585ecccb48b585"
  },
  {
    "url": "zai.ban.qian.yan.html",
    "revision": "a05609804b82fb280e6c0af245e46a3a"
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
