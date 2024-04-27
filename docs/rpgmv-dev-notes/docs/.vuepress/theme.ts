import dayjs from "dayjs";

import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar";
import { zhSidebar } from "./sidebar";

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

	// logo: '/logo.svg',
	logo: undefined,

	repo: "RuanZhongNan/RPGMV-dev-notes",

	docsDir: "docs",

	footer,

	blog: {
		medias: {
			BiliBili: "https://space.bilibili.com/359907572",
			Gitee: "https://gitee.com/HechiCollegeComputerAssociation",
			GitHub: "https://github.com/RuanZhongNan",
		},
	},

	encrypt: {
		config: {
			"/demo/encrypt.html": ["1234"],
			"/zh/demo/encrypt.html": ["1234"],
		},
	},

	// navbarLayout: {
	//   start: ['Brand'],
	//   center: ['Links'],
	//   end: ['Language', 'Repo', 'Outlook', 'Search'],
	// },

	plugins: {
		// 目前暂时不考虑使用博客风格 未来拆分出项目笔记后再考虑
		blog: false,

		// If you don’t need comment feature, you can remove following option
		// The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
		// To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
		comment: {
			/**
			 * Using Giscus
			 */
			provider: "Giscus",
			repo: "RuanZhongNan/RPGMV-dev-notes",
			repoId: "R_kgDOH7md9w",
			category: "Announcements",
			categoryId: "DIC_kwDOH7md984CRo_I",

			/**
			 * Using Twikoo
			 */
			// provider: "Twikoo",
			// envId: "https://twikoo.ccknbc.vercel.app",

			/**
			 * Using Waline
			 */
			// provider: "Waline",
			// serverURL: "https://vuepress-theme-hope-comment.vercel.app",
		},

		// Disable features you don’t want here
		// mdEnhance: {
		//   align: true,
		//   attrs: true,
		//   chart: true,
		//   codetabs: true,
		//   container: true,
		//   demo: true,
		//   echarts: true,
		//   figure: true,
		//   flowchart: true,
		//   gfm: true,
		//   imgLazyload: true,
		//   imgSize: true,
		//   include: true,
		//   katex: true,
		//   mark: true,
		//   mermaid: true,
		//   playground: {
		//     presets: ['ts', 'vue'],
		//   },
		//   presentation: {
		//     plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
		//   },
		//   stylize: [
		//     {
		//       matcher: 'Recommended',
		//       replacer: ({ tag }) => {
		//         if (tag === 'em')
		//           return {
		//             tag: 'Badge',
		//             attrs: { type: 'tip' },
		//             content: 'Recommended',
		//           };
		//       },
		//     },
		//   ],
		//   sub: true,
		//   sup: true,
		//   tabs: true,
		//   vPre: true,
		//   vuePlayground: true,
		// },

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

		// 目前有效 缺点是国内使用`algolia`速度稍慢
		// docsearch: {
		// 	indexName: "ruan-cat",
		// 	appId: "26AGWKLS5F",
		// 	// 这是邮件提供的
		// 	apiKey: "56468a67aa27242ac177690073ba0e15",
		// 	// 这是爬虫提供的
		// 	// apiKey: 'c0121d37470f12e725a3cf2b45dda7e7',
		// 	// 这是用 Search API Key 重新生成的
		// 	// apiKey: 'd96c038fd76a2f91c146152fbf24a1de',
		// 	locales: {
		// 		"/": {
		// 			placeholder: "搜索文档",
		// 			translations: {
		// 				button: {
		// 					buttonText: "搜索文档",
		// 					buttonAriaLabel: "搜索文档",
		// 				},
		// 				modal: {
		// 					searchBox: {
		// 						resetButtonTitle: "清除查询条件",
		// 						resetButtonAriaLabel: "清除查询条件",
		// 						cancelButtonText: "取消",
		// 						cancelButtonAriaLabel: "取消",
		// 					},
		// 					startScreen: {
		// 						recentSearchesTitle: "搜索历史",
		// 						noRecentSearchesText: "没有搜索历史",
		// 						saveRecentSearchButtonTitle: "保存至搜索历史",
		// 						removeRecentSearchButtonTitle: "从搜索历史中移除",
		// 						favoriteSearchesTitle: "收藏",
		// 						removeFavoriteSearchButtonTitle: "从收藏中移除",
		// 					},
		// 					errorScreen: {
		// 						titleText: "无法获取结果",
		// 						helpText: "你可能需要检查你的网络连接",
		// 					},
		// 					footer: {
		// 						selectText: "选择",
		// 						navigateText: "切换",
		// 						closeText: "关闭",
		// 						searchByText: "搜索提供者",
		// 					},
		// 					noResultsScreen: {
		// 						noResultsText: "无法找到相关结果",
		// 						suggestedQueryText: "你可以尝试查询",
		// 						reportMissingResultsText: "你认为该查询应该有结果？",
		// 						reportMissingResultsLinkText: "点击反馈",
		// 					},
		// 				},
		// 			},
		// 		},
		// 	},
		// },

		// uncomment these if you want a PWA
		// pwa: {
		//   favicon: "/favicon.ico",
		//   cacheHTML: true,
		//   cachePic: true,
		//   appendBase: true,
		//   apple: {
		//     icon: "/assets/icon/apple-icon-152.png",
		//     statusBarColor: "black",
		//   },
		//   msTile: {
		//     image: "/assets/icon/ms-icon-144.png",
		//     color: "#ffffff",
		//   },
		//   manifest: {
		//     icons: [
		//       {
		//         src: "/assets/icon/chrome-mask-512.png",
		//         sizes: "512x512",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-mask-192.png",
		//         sizes: "192x192",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-512.png",
		//         sizes: "512x512",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-192.png",
		//         sizes: "192x192",
		//         type: "image/png",
		//       },
		//     ],
		//     shortcuts: [
		//       {
		//         name: "Demo",
		//         short_name: "Demo",
		//         url: "/demo/",
		//         icons: [
		//           {
		//             src: "/assets/icon/guide-maskable.png",
		//             sizes: "192x192",
		//             purpose: "maskable",
		//             type: "image/png",
		//           },
		//         ],
		//       },
		//     ],
		//   },
		// },
	},
});
