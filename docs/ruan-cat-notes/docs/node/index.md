# node

运行环境。

## 没见过路径导入语法

`import { fileURLToPath, URL } from "node:url";` 这是什么导入方式？

没见过这样的模块命名。很少用导入模块的 meta 信息。

- https://juejin.cn/post/7195057558229352509

```js {1,10}
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	css: {
		// css预处理器
		preprocessorOptions: {
			scss: {
				// 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
				// 给导入的路径最后加上 ;
				additionalData: '@import "@/assets/style/mixin.scss";',
			},
		},
	},
});
```

## 20.15.1

用 node22.9.0 时出现这个报错，使用 node20.15.1 就不会有和这个错误了。

```bash
Command failed with exit code 3221225477.
```
