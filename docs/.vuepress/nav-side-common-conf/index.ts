// 侧边栏 和 顶部导航栏的数组形式配置类型
import {
  SidebarArrayOptions,
  NavbarOptions,
  SidebarGroupItem,
  SidebarStructureItem,
  SidebarItem,
} from 'vuepress-theme-hope';

/** 本地自定义的 共同数组类型 @deprecated 实际使用的时候 类型无法共同使用 */
type CommonArrayOptions = SidebarArrayOptions | NavbarOptions;

/** 顶部导航栏配置数组 */
export const navConfList: NavbarOptions = [
  {
    text: '插件开发',
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

(navConfList as SidebarGroupItem[]).forEach((elm) => (elm.collapsible = true));

//     // 不再此处定义，类型无法兼容此字段
// collapsible: true,

/** 左侧侧边栏配置数组 */
export const sideConfList: SidebarArrayOptions = [
  {
    text: '阮喵喵自己的笔记',
    prefix: '阮喵喵自己的笔记/',
    children: 'structure',
    collapsible: true,
  },
  ...navConfList,
];
