import { hopeTheme, sidebar, type ThemeOptions } from "vuepress-theme-hope";

import { footerTmpl, authorName } from "@ruan-cat/vuepress-preset-config";

const footer = footerTmpl();

const sidebarConfig = sidebar([
	// 不直接在侧边栏内提供项目首页
	// "/",
	// 网站介绍
	"/website-introduction",

	// 拓展技术
	{
		text: "拓展技术",
		prefix: "/expansion-technique/",
		// link: "/expansion-technique/",
		collapsible: true,
		children: [
			"",
			{
				text: "工程化",
				prefix: "engineered/",
				// link: "/engineered/",
				// link: "/expansion-technique/engineered/",
				collapsible: true,
				children: "structure",
			},
			{
				text: "准备开发环境",
				prefix: "prepare-develop-environment/",
				collapsible: true,
				children: "structure",
			},
			{
				text: "版本控制",
				prefix: "version-control/",
				collapsible: true,
				children: "structure",
			},
			{
				text: "随笔",
				prefix: "essays/",
				collapsible: true,
				children: "structure",
			},
		],
	},

	// 插件开发
	{
		text: "插件开发",
		// prefix: "/developing-rmmv-plugins/",
		prefix: "/插件开发/",
		// link: "/developing-rmmv-plugins/",
		collapsible: true,
		children: "structure",
	},

	// 源码解析  learn-source-code
	{
		text: "源码解析",
		prefix: "/learn-source-code/",
		collapsible: true,
		children: "structure",
	},
]);

export const hopeThemeConfig: ThemeOptions = {
	// hostname: 'https://mister-hope.github.io',
	// hostname: 'https://www.ruan-cat.com/',
	// 尝试移除底部的斜线
	hostname: "https://www.ruan-cat.com",

	fullscreen: true,
	// 开发模式下是否启动热更新，显示所有更改并重新渲染
	hotReload: true,

	author: {
		name: authorName,
		url: "https://github.com/RuanZhongNan",
	},

	// iconAssets: "iconfont",

	logo: undefined,

	repo: "RuanZhongNan/RPGMV-dev-notes",

	docsDir: "docs",

	sidebar: "structure",
	// sidebar: sidebarConfig,

	footer,
	displayFooter: false,

	blog: {
		medias: {
			BiliBili: "https://space.bilibili.com/359907572",
			Gitee: "https://gitee.com/HechiCollegeComputerAssociation",
			GitHub: "https://github.com/RuanZhongNan",
		},
	},

	plugins: {
		// 目前暂时不考虑使用博客风格 未来拆分出项目笔记后再考虑
		blog: false,

		comment: {
			/**
			 * Using Giscus
			 */
			provider: "Giscus",
			repo: "RuanZhongNan/RPGMV-dev-notes",
			repoId: "R_kgDOH7md9w",
			category: "Announcements",
			categoryId: "DIC_kwDOH7md984CRo_I",
		},

		// 禁用不需要的配置
		mdEnhance: {
			align: true,
			// 启用 GFM 警告
			// 使用特殊标记为 Markdown 元素添加属性
			attrs: true,
			gfm: true,
			// TODO: 升级
			// alert: true,
			// hint: true,
			// imgLazyload: true,
			// imgSize: true,
			// figure: true,
			include: true, //导入文件
			mark: true,
			footnote: true,
			tasklist: true,
			sub: true, // 上下角标
			sup: true,
			mermaid: true,
		},

		/**
		 * 按照教程导入组件
		 * 发现似乎有bug 可能是自己使用了自定义组件导入方案 导致默认的两个组件没了
		 * 这里手动导入默认提供的 FontIcon 和 Badge
		 */
		components: {
			components: ["BiliBili", "FontIcon", "Badge"],
		},

		searchPro: {
			indexContent: true,
			autoSuggestions: true,
		},
	},
};

export default hopeTheme(hopeThemeConfig);
