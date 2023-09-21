import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import { viteBundler } from "@vuepress/bundler-vite";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { typedocPlugin } from "vuepress-plugin-typedoc/next";

import typedocConf from "../../typedoc.config.cjs";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

/** 设置开始识别根目录在 */
const pathSrc = path.resolve(__dirname, "types");

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

			// https://theme-hope.vuejs.press/zh/config/theme/i18n.html
			// TODO 想设置这个名称 右侧侧边栏名称？
			// metaLocales
		},
	},

	alias: {
		"@DrillGoods": path.resolve(
			__dirname,
			"./components/drill-goods/DrillGoods.vue"
		),
	},

	/**
	 * 尝试实现element-plus的类型生成，并导入。而不是单纯的组件导入和注册。
	 * 组件全局注册，已经由vuepress另外实现了。
	 * 想实现针对组件的类型生成与识别。
	 */
	bundler: viteBundler({
		viteOptions: {
			// 加上此内容后就出错了 不知道是不是vuepress的解析问题。直接说SFC缺少内容。
			// plugins: [vue()],
			plugins: [
				vue(),
				AutoImport({
					resolvers: [ElementPlusResolver()],
					dts: path.resolve(pathSrc, "auto-imports.d.ts"),
					imports: ["vue"],
				}),
				Components({
					resolvers: [ElementPlusResolver()],
					dts: path.resolve(pathSrc, "components.d.ts"),
				}),
			],
		},
	}),

	plugins: [
		/** 参考资料 https://vuejs.press/zh/reference/plugin/register-components.html */
		registerComponentsPlugin({
			componentsDir: path.resolve(__dirname, "./components"),
			componentsPatterns: ["**/*.vue", "./components/**/*.vue"],
			getComponentName(filename) {
				return path.trimExt(filename.replace(/.*\//, ""));
			},
		}),

		// 直接导入项目根目录下的配置文件 这样效率更高
		typedocPlugin(typedocConf),

		// 目前有效 缺点是国内使用`algolia`速度稍慢
		docsearchPlugin({
			indexName: "ruan-cat",
			appId: "26AGWKLS5F",
			// 这是邮件提供的
			apiKey: "56468a67aa27242ac177690073ba0e15",
			// 这是爬虫提供的
			// apiKey: 'c0121d37470f12e725a3cf2b45dda7e7',
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

		// 该内容暂时保留 目前通过正确的爬虫配置，可以实现后端搜索了。
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
