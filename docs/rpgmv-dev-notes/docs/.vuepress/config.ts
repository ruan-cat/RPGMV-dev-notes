import { defineRuanCatVuepressConfig } from "@ruan-cat/vuepress-preset-config";
import theme from "./theme";

export default defineRuanCatVuepressConfig({
	title: "阮喵喵的rmmv开发笔记",
	base: "/",
	lang: "zh-CN",
	description: "天才小爱丽丝，冲鸭！",
	markdown: {
		headers: {
			level: [2, 3, 4, 5],
		},
	},
	theme,
});
