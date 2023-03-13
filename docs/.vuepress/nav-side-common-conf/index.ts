// 侧边栏 和 顶部导航栏的数组形式配置类型
import {
	SidebarArrayOptions,
	NavbarOptions,
	SidebarGroupItem,
	SidebarStructureItem,
	SidebarItem,
} from "vuepress-theme-hope";

import typedocConf from "../../../typedoc.config.cjs";

/** 本地自定义的 共同数组类型 @deprecated 实际使用的时候 类型无法共同使用 */
type CommonArrayOptions = SidebarArrayOptions | NavbarOptions;

/** 顶部导航栏配置数组 */
export const navConfList: NavbarOptions = [
	{
		text: "插件开发",
		prefix: "/developing-rmmv-plugins/",
		children: [
			"index/",
			"source-code-infrastructure/",
			"plugins-infrastructure/",
			"basic-concept/",
			"nature/",
		],
	},

	{
		text: "源码解析",
		prefix: "/understand-source-code/",
		children: [
			"菜单的背景图为什么是当前场景截图/",
			"场景类所需的基本函数/",
			"地图场景与菜单场景之间的切换/",
			"窗口速查表/",
			// 'source-code-infrastructure/',
			// 'plugins-infrastructure/',
			// 'basic-concept/',
			// 'nature/',
		],
	},
];

(navConfList as SidebarGroupItem[]).forEach((elm) => (elm.collapsible = true));

/** 左侧侧边栏配置数组 */
export const sideConfList: SidebarArrayOptions = [
	...navConfList,

	{
		text: "自查资源",
		prefix: "自查资源/",
		children: "structure",
		collapsible: true,
	},

	{
		text: "阮喵喵自己的笔记",
		prefix: "ruan-cat-own-notes/",
		children: "structure",
		collapsible: true,
	},

	{
		text: "测试用的typedoc结果",
		prefix: typedocConf.out,
		children: "structure",
	},
];
