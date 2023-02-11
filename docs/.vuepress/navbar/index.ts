import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  {
    text: '阮喵喵自己的笔记',
    children: [],
  },
  {
    text: '插件开发',
    prefix: 'developing-rmmv-plugins/',
    children: ['infrastructure/'],
  },
]);
