import dayjs from "dayjs";

import { hopeTheme } from "vuepress-theme-hope";

/** 作者对外称呼 */
const authorName = "阮喵喵";

/** 页脚模板函数 */
export function footerTmpl() {
	return `MIT Licensed | Copyright © ${dayjs().year()}-present ${authorName}`;
}

const footer = footerTmpl();

export default hopeTheme({
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

	iconAssets: "iconfont",

	logo: undefined,

	repo: "RuanZhongNan/RPGMV-dev-notes",

	docsDir: "docs",

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
			alert: true,
			// 使用特殊标记为 Markdown 元素添加属性
			attrs: true,
			hint: true,
			gfm: true,
			imgLazyload: true,
			imgSize: true,
			figure: true,
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
});
