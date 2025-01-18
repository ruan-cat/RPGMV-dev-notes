# vuepress-theme-hope

## 导入 element-plus 组件库

### v1

自己琢磨的，用比较复杂的 vite 来实现导入。

在文件 `docs\.vuepress\config.ts` 内使用 vite，并导入 element-plus 组件。

```ts
import { defineUserConfig } from "vuepress";

import { viteBundler } from "@vuepress/bundler-vite";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineUserConfig({
	bundler: viteBundler({
		viteOptions: {
			plugins: [
				AutoImport({
					resolvers: [ElementPlusResolver()],
				}),
				Components({
					resolvers: [ElementPlusResolver()],
				}),
			],
		},
	}),
});
```

### v2

别人推荐的，用特定的函数来实现全局导入。

```txt
import { defineClientConfig } from "@vuepress/client";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export default defineClientConfig({
	enhance: ({ app, router, siteData }) => {
		app.use(ElementPlus);
	},
});
```

## 客户端配置的使用方法

- https://vuejs.press/zh/advanced/cookbook/usage-of-client-config.html

可以充分的使用 defineClientConfig 函数来使用默认的 app，即全局的 vue 实例。这样就可以使用一些列 vue3 的 api 了。比如 app.use()。
