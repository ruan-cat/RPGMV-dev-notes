// @ts-check
/** @type {import("prettier").Config} */
const config = {
	// FIXME: 等待修复
	plugins: ["prettier-plugin-lint-md/dist/prettier-plugin-lint-md.js"],
	singleQuote: false,
	printWidth: 120,
	semi: true,
	jsxSingleQuote: true,
	useTabs: true,
	tabWidth: 2,
	endOfLine: "auto",
	"space-around-alphabet": true,
	"space-around-number": true,
	// 允许代码块为空的
	"no-empty-code-lang": false,
};

export default config;
