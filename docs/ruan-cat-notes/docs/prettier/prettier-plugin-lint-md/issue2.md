# 文件格式不同导致运行失败

`.cjs`格式的插件在 prettier 的 plugins 内无法工作，纯`.js`格式才能工作。

## 依赖关系

package.json 安装的依赖如下：

```json
{
	"devDependencies": {
		"@lint-md/core": "^2.0.0",
		"prettier": "^3.3.2",
		"prettier-plugin-lint-md": "^1.0.0"
	}
}
```

## 成功运行的 prettier 配置

在 prettier.config.js 内：

```js
// @ts-check
/** @type {import("prettier").Config} */
const config = {
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
```

## 失败情况

在 plugins 内填写为 `prettier-plugin-lint-md/dist/prettier-plugin-lint-md.cjs` 或者是 `prettier-plugin-lint-md`时，无反应。commonjs 格式无反应。
