// SidebarArrayOptions

// 侧边栏 和 顶部导航栏的数组形式配置类型
import { SidebarArrayOptions, NavbarOptions } from 'vuepress-theme-hope';

/** 本地自定义的 共同数组类型 */
type CommonArrayOptions = SidebarArrayOptions | NavbarOptions;

/** 本地自定义的 共同侧边栏和顶部导航栏 路由配置数组 */
export const navSideCommonConfList: CommonArrayOptions = [
  {
    text: '阮喵喵自己的笔记',
    children: [],
  },
  {
    text: '插件开发',
    collapsible: true,
    prefix: '/developing-rmmv-plugins/',
    children: [
      'index/',
      'source-code-infrastructure/',
      'plugins-infrastructure/',
      'basic-concept/',
      'nature/',
    ],
  },
];
