# vuepress-theme-hope

## 导入 element-plus 组件库

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
