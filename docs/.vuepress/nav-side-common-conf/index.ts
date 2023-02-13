// 侧边栏 和 顶部导航栏的数组形式配置类型
import {
  SidebarArrayOptions,
  NavbarOptions,
  SidebarGroupItem,
} from 'vuepress-theme-hope';

/** 本地自定义的 共同数组类型 @deprecated 实际使用的时候 类型无法共同使用 */
type CommonArrayOptions = SidebarArrayOptions | NavbarOptions;

/** 本地自定义的 共同侧边栏和顶部导航栏 路由配置数组 */
export const navSideCommonConfList = [
  {
    text: '阮喵喵自己的笔记',
    children: [],
    // children: 'structure',
  },
  {
    text: '插件开发',
    // 不再此处定义，类型无法兼容此字段
    // collapsible: true,
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

/** 顶部导航栏配置数组 */
export const navConfList: NavbarOptions = navSideCommonConfList;

/** 左侧侧边栏配置数组 专门用于配置`collapsible`属性 */
export const sideConfList: SidebarArrayOptions = (
  navSideCommonConfList as SidebarGroupItem[]
).map((elm) => ({
  ...elm,
  collapsible: true,
}));
