import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
	theme,
	base: "/",

	shouldPrefetch: false,
	port: 6312,

	locales: {
		"/": {
			lang: "zh-CN",
			title: "阮喵喵的rmmv开发笔记",
			description: "前端流行技术在rmmv的实战应用开发经验总结",
		},
	},

	plugins: [
		// 目前仍旧无效
		docsearchPlugin({
			indexName: "ruan-cat",
			appId: "26AGWKLS5F",
			// 这是爬虫提供的
			// apiKey: 'c0121d37470f12e725a3cf2b45dda7e7',
			// 这是邮件提供的
			apiKey: "56468a67aa27242ac177690073ba0e15",
			// 这是用 Search API Key 重新生成的
			// apiKey: 'd96c038fd76a2f91c146152fbf24a1de',
			locales: {
				"/": {
					placeholder: "搜索文档",
					translations: {
						button: {
							buttonText: "搜索文档",
							buttonAriaLabel: "搜索文档",
						},
						modal: {
							searchBox: {
								resetButtonTitle: "清除查询条件",
								resetButtonAriaLabel: "清除查询条件",
								cancelButtonText: "取消",
								cancelButtonAriaLabel: "取消",
							},
							startScreen: {
								recentSearchesTitle: "搜索历史",
								noRecentSearchesText: "没有搜索历史",
								saveRecentSearchButtonTitle: "保存至搜索历史",
								removeRecentSearchButtonTitle: "从搜索历史中移除",
								favoriteSearchesTitle: "收藏",
								removeFavoriteSearchButtonTitle: "从收藏中移除",
							},
							errorScreen: {
								titleText: "无法获取结果",
								helpText: "你可能需要检查你的网络连接",
							},
							footer: {
								selectText: "选择",
								navigateText: "切换",
								closeText: "关闭",
								searchByText: "搜索提供者",
							},
							noResultsScreen: {
								noResultsText: "无法找到相关结果",
								suggestedQueryText: "你可以尝试查询",
								reportMissingResultsText: "你认为该查询应该有结果？",
								reportMissingResultsLinkText: "点击反馈",
							},
						},
					},
				},
			},
		}),

		// searchProPlugin({
		// 	indexContent: true,
		// 	customFields: [
		// 		// 类型报错
		// 		// {
		// 		//   getter: (page) => page.frontmatter.category,
		// 		//   formatter: {
		// 		//     '/': 'Category: $content',
		// 		//     '/zh/': '分类：$content',
		// 		//   },
		// 		// },
		// 		// {
		// 		//   getter: (page) => page.frontmatter.tag,
		// 		//   formatter: {
		// 		//     '/': 'Tag: $content',
		// 		//     '/zh/': '标签：$content',
		// 		//   },
		// 		// },
		// 	],
		// }),
	],
});
