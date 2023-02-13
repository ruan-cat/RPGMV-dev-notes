import { navbar } from 'vuepress-theme-hope';

import { navSideCommonConfList } from '../nav-side-common-conf/index.js';

export const zhNavbar = navbar(
  navSideCommonConfList
  //   [
  //   {
  //     text: '阮喵喵自己的笔记',
  //     children: [],
  //   },
  //   {
  //     text: '插件开发',
  //     prefix: '/developing-rmmv-plugins/',
  //     children: ['source-code-infrastructure/', 'plugins-infrastructure/'],
  //   },
  // ]
);
