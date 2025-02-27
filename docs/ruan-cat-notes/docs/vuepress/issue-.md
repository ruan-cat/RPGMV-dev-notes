# 在 vitepress 内如何使用 @vuepress/markdown 的 importCodePlugin 插件？

我非常喜欢 vuepress 的[`导入代码块`](https://vuejs.press/zh/guide/markdown.html#导入代码块)功能，并期望在 vitepress 内也使用这样的代码块导入语法写文档。

请问我应该怎么在 vitepress 项目内使用 @vuepress/markdown 的 importCodePlugin 插件？

请问下面的配置方式对么？

```ts
// @ts-ignore
import { defineConfig, type DefaultTheme } from "vitepress";
// @ts-ignore
import { importCodePlugin } from "@vuepress/markdown";

export default defineConfig({
	/**
	 * @see https://vitepress.dev/zh/guide/markdown#advanced-configuration
	 */
	markdown: {
		// @ts-ignore
		config: (md) => {
			// @ts-ignore
			md.use(importCodePlugin, { handleImportPath: (str) => join(process.cwd(), str) });
		},
	},
});
```
