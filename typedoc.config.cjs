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
	entryPoints: ["./src/index.ts"],
	tsconfig: "./tsconfig.json",
	readme: "./src/readme.md",
	out: "docs-typedoc",
	cleanOutputDir: true,
	sidebar: {
		fullNames: true,
		parentCategory: "API",
	},
};
