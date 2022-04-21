// export default ({ router, Vue, isServer }) => {
//   Vue.mixin({
//     mounted() {
//       // 不加 setTimeout 会有报错，但不影响效果
//       setTimeout(() => {
//         try {
//           docsearch({
//             appId: 'N62BQRC6XH',
//             apiKey: '6d2809cce481a42771539d8823524569',
//             indexName: 'RPGMV-dev-notes',
//             container: '.search-box',
//             debug: false,
//           });
//         } catch (e) {
//           console.log(e);
//         }
//       }, 100);
//     },
//   });
// };
