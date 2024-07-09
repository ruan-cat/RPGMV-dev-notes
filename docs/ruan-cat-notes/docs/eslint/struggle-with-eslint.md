# 与 eslint 斗争

这里记录配置 eslint 的各种问题，这里会不断优化，迭代最佳实践

## 要安装的依赖

```bash
pnpm i -D eslint @antfu/eslint-config eslint-config-prettier eslint-plugin-prettier
pnpm i -D prettier prettier-plugin-lint-md
```

## .vscode\settings.json

```json
{
	// 参考资料 https://github.com/mhutchie/vscode-git-graph/blob/develop/README.md
	"git-graph.customBranchGlobPatterns": [
		{
			"name": "f1小组分支",
			// 参考资料 https://stackoverflow.com/questions/45439796/globbing-in-git-log-to-show-certain-branches
			"glob": "*f1*"
		}
	],
	// Enable the ESlint flat config support
	// (remove this if your ESLint extension above v3.0.5)
	"eslint.experimental.useFlatConfig": true,
	// 在项目内，我们指定格式化工具默认为 prettier
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	// Disable the default formatter, use eslint instead
	// 与antfu不同的是，我们使用prettier作为格式化工具。
	"prettier.enable": true,
	"editor.formatOnSave": true,
	// "editor.defaultFormatter": "dbaeumer.vscode-eslint",
	// Auto fix
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": "explicit",
		"source.organizeImports": "never"
	},
	/** 
    - https://www.cnblogs.com/sq800/p/17484485.html
  */
	"eslint.format.enable": true,
	"eslint.workingDirectories": [
		{
			"mode": "auto"
		}
	],
	// Silent the stylistic rules in you IDE, but still auto fix them
	"eslint.rules.customizations": [
		{
			"rule": "style/*",
			"severity": "off"
		},
		{
			"rule": "format/*",
			"severity": "off"
		},
		{
			"rule": "*-indent",
			"severity": "off"
		},
		{
			"rule": "*-spacing",
			"severity": "off"
		},
		{
			"rule": "*-spaces",
			"severity": "off"
		},
		{
			"rule": "*-order",
			"severity": "off"
		},
		{
			"rule": "*-dangle",
			"severity": "off"
		},
		{
			"rule": "*-newline",
			"severity": "off"
		},
		{
			"rule": "*quotes",
			"severity": "off"
		},
		{
			"rule": "*semi",
			"severity": "off"
		}
	],
	// Enable eslint for all supported languages
	"eslint.validate": [
		"javascript",
		"javascriptreact",
		"typescript",
		"typescriptreact",
		"vue",
		"html",
		"markdown",
		"json",
		"jsonc",
		"yaml",
		"toml",
		"xml",
		"gql",
		"graphql",
		"astro"
	]
}
```

## .editorconfig

```text
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = tab
indent_size = 2
tab_width = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false
```

## prettier.config.js

```js
// @ts-check
/** @type {import("prettier").Config} */
const config = {
	plugins: ["prettier-plugin-lint-md"],
	singleQuote: false,
	printWidth: 120,
	semi: true,
	jsxSingleQuote: true,
	useTabs: true,
	tabWidth: 2,
	endOfLine: "auto",
	"space-around-alphabet": true,
	"space-around-number": true,
	"no-empty-code-lang": false,
	"no-empty-code": false,
};

export default config;
```

## eslint.config.js

```js
// @ts-check
import antfu from "@antfu/eslint-config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default antfu(
	{
		// Or customize the stylistic rules
		stylistic: {
			indent: 2, // 4, or 'tab'
			quotes: "double", // or 'double'
			semi: true, // or 'always'
		},

		// TypeScript and Vue are auto-detected, you can also explicitly enable them:
		typescript: {
			tsconfigPath: "tsconfig.json",
		},

		vue: true,

		javascript: {
			/**
			 * @see https://eslint.org/docs/latest/use/configure/migration-guide#importing-plugins-and-custom-parsers
			 */
			overrides: {
				"jsdoc/require-description": "error",
				"jsdoc/check-values": "error",
			},
		},

		// Disable jsonc and yaml support
		jsonc: false,
		yaml: false,

		// `.eslintignore` is no longer supported in Flat config, use `ignores` instead
		ignores: [
			"**/fixtures",
			// ...globs
		],

		/**
		 * @see https://juejin.cn/post/7338074027281104936
		 */
		formatters: {
			/**
			 * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
			 * By default uses Prettier
			 */
			css: true,
			/**
			 * Format HTML files
			 * By default uses Prettier
			 */
			html: true,
			/**
			 * Format Markdown files
			 * Supports Prettier and dprint
			 * By default uses Prettier
			 */
			markdown: "prettier",
		},
	},

	{
		rules: {
			"no-console": "off",
			// 设置为总是警告
			// "style/semi": ["warn", "always"],
		},
	},

	{
		rules: {
			"prettier/prettier": [
				"error",
				{
					usePrettierrc: true,
					singleQuote: false,
					printWidth: 120,
					semi: true,
					jsxSingleQuote: true,
					useTabs: true,
					tabWidth: 2,
					endOfLine: "auto",
				},
			],
		},
	},

	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
);
```
