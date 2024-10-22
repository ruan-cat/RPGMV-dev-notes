# bug

viteBundler 的 outDir 配置导致打包失败

在我自己的项目内，错误如下：

![2024-06-25-10-54-16](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-06-25-10-54-16.png)

这是刚才重新新建的项目，填写同样的配置，提供 outDir 路径，项目报错：

![2024-06-25-10-54-39](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-06-25-10-54-39.png)

## 代码

```ts
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

import theme from "./theme.js";

export default defineUserConfig({
	base: "/",

	locales: {
		"/": {
			lang: "en-US",
			title: "Docs Demo",
			description: "A docs demo for vuepress-theme-hope",
		},
		"/zh/": {
			lang: "zh-CN",
			title: "文档演示",
			description: "vuepress-theme-hope 的文档演示",
		},
	},

	theme,

	bundler: viteBundler({
		viteOptions: {
			build: {
				outDir: "dist/monorepo-3",
			},
		},
		vuePluginOptions: {},
	}),

	// Enable it with pwa
	// shouldPrefetch: false,
});
```

## 报错

```text
 *  正在执行任务: pnpm run docs:build


> vuepress-theme-hope-template@2.0.0 docs:build E:\code\rm-workspace\main-proj\test\my-docs
> vuepress-vite build src

✔ Initializing and preparing data - done in 3.11s
✔ Compiling with vite - done in 5.50s
✖ Rendering 27 pages - failed in 2ms
Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'E:\code\rm-workspace\main-proj\test\my-docs\src\.vuepress\.temp\.server\app.CXhGcoFq.mjs' imported from E:\code\rm-workspace\main-proj\test\my-docs\node_modules\.pnpm\@vuepress+utils@2.0.0-rc.14\node_modules\@vuepress\utils\dist\index.js
    at finalizeResolution (node:internal/modules/esm/resolve:265:11)
    at moduleResolve (node:internal/modules/esm/resolve:933:10)
    at defaultResolve (node:internal/modules/esm/resolve:1157:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:383:12)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:352:25)
    at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:227:38)
    at ModuleLoader.import (node:internal/modules/esm/loader:315:34)
    at importModuleDynamically (node:internal/modules/esm/translators:161:31)
    at importModuleDynamicallyCallback (node:internal/modules/esm/utils:222:14)
    at importFile (file:///E:/code/rm-workspace/main-proj/test/my-docs/node_modules/.pnpm/@vuepress+utils@2.0.0-rc.14/node_modules/@vuepress/utils/dist/index.js:73:63)
 ELIFECYCLE  Command failed with exit code 1.
```
