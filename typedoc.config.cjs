// {
// 	"entryPoints": [
// 		"./src/index.ts"
// 	],
// 	"tsconfig": "./tsconfig.json",
// 	"cleanOutputDir": true,
// 	"out": "docs-typedoc",
// 	"sidebar": {
// 		"fullNames": true,
// 		"parentCategory": "API"
// 	}
// }

/**
 * @type {import('typedoc').TypeDocOptions}
 *
 * @description
 * https://typedoc.org/guides/options/#javascript-files
 *
 * https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/vuepress-plugin-typedoc#v2x
 */
module.exports = {
	entryPoints: [
		"./src/index.ts",
		"docs/.vuepress/components/drill-goods/hooks/",
		"docs/.vuepress/components/drill-goods/stores/",
	],
	entryPointStrategy: "Expand",
	// https://juejin.cn/post/7087441097252667429
	// "includes": ["src/*.ts"]
	// includes: ["docs/.vuepress/components/drill-goods/**/*.ts"],
	// includes: [
	// 	"docs/.vuepress/components/drill-goods/hooks/",
	// 	"docs/.vuepress/components/drill-goods/stores/",
	// ],
	tsconfig: "./tsconfig.json",
	readme: "./src/readme.md",
	out: "docs-typedoc",
	cleanOutputDir: true,
	sidebar: {
		fullNames: true,
		parentCategory: "API",
	},
};
