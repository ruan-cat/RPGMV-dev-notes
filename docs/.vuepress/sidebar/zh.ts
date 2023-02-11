import { sidebar } from 'vuepress-theme-hope';

// origin config 目前不使用默认提供的demo侧边栏配置，自己尝试配置一下侧边栏
// export const zhSidebar = sidebar({
//   '/': [
//     '',
//     {
//       text: '如何使用',
//       icon: 'creative',
//       prefix: 'guide/',
//       link: 'guide/',
//       children: 'structure',
//     },
//     {
//       text: '文章',
//       icon: 'note',
//       prefix: 'posts/',
//       children: 'structure',
//     },
//     'intro',
//     'slides',
//   ],
// });

export const zhSidebar = sidebar({
  '/': 'structure',
});
