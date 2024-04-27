import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { viteBundler } from "@vuepress/bundler-vite";

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

	markdown: {
		headers: {
			level: [2, 3, 4, 5],
		},
	},

	bundler: viteBundler({
		viteOptions: {},
		vuePluginOptions: {},
	}),

	plugins: [],
});
