import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { viteBundler } from "@vuepress/bundler-vite";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { componentsPlugin } from "vuepress-plugin-components";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { typedocPlugin } from "vuepress-plugin-typedoc/next";

import typedocConf from "../../../typedoc.config.cjs";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

/** 设置开始识别根目录在 */
const pathSrc = path.resolve(__dirname, "types");

const port = 6312;

export default defineUserConfig({
	theme,
	base: "/",

	shouldPrefetch: false,
	port,

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

	markdown: {
		headers: {
			level: [2, 3, 4, 5],
		},
	},

	alias: {
		"@DrillGoods": path.resolve(
			__dirname,
			"./components/drill-goods/DrillGoods.vue"
		),
	},

	bundler: viteBundler({
		viteOptions: {},
		vuePluginOptions: {},
	}),

	/**
	 * 尝试实现element-plus的类型生成，并导入。而不是单纯的组件导入和注册。
	 * 组件全局注册，已经由vuepress另外实现了。
	 * 想实现针对组件的类型生成与识别。
	 *
	 * 暂时又取消注释了 这个导致代码又莫名其妙跑不起来了
	 */
	// bundler: viteBundler({
	// 	viteOptions: {
	// 		// 加上此内容后就出错了 不知道是不是vuepress的解析问题。直接说SFC缺少内容。
	// 		// plugins: [vue()],
	// 		plugins: [
	// 			vue(),
	// 			AutoImport({
	// 				resolvers: [ElementPlusResolver()],
	// 				dts: path.resolve(pathSrc, "auto-imports.d.ts"),
	// 				imports: ["vue"],
	// 			}),
	// 			Components({
	// 				resolvers: [ElementPlusResolver()],
	// 				dts: path.resolve(pathSrc, "components.d.ts"),
	// 			}),
	// 		],
	// 	},
	// }),

	// 尝试处理跨域问题 请求公共的图片接口报错
	// bundler: viteBundler({
	// 	viteOptions: {
	// 		server: {
	// 			proxy: {
	// 				// https://api.vvhan.com/api/acgimg
	// 				"/vvhan-img": {
	// 					// target: `https://localhost:${port}/`,
	// 					target: "https://api.vvhan.com/",
	// 					changeOrigin: true,
	// 					// 不可以省略rewrite
	// 					rewrite: (path) => path.replace(/^\/vvhan-img/, ""),
	// 				},
	// 			},
	// 		},
	// 	},
	// }),

	plugins: [
		/** 参考资料 https://vuejs.press/zh/reference/plugin/register-components.html */
		registerComponentsPlugin({
			// 有疑惑 可以写多个文件夹路径么？ 目前经过测试不能。
			componentsDir: path.resolve(__dirname, "../../docs"),
			componentsPatterns: ["**/*.vue", "./.vuepress/**/*.vue"],
			getComponentName(filename) {
				console.log(" in getComponentName filename", filename);
				const res = path.trimExt(filename.replace(/.*\//, ""));

				console.log(" in getComponentName res", res);

				return res;
			},
		}),

		// FIXME: 高版本配置 导致bug
		// 直接导入项目根目录下的配置文件 这样效率更高
		// typedocPlugin(typedocConf),

		// componentsPlugin({
		// 	components: ["BiliBili"],
		// }),

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
