# @antfu/eslint-config 的使用

目前（2024 年 5 月 19 日）考虑用@antfu/eslint-config 实现对 eslint 的一揽子配置。

## 参考资料

- [antfu：为什么我不使用 Prettier](https://antfu.me/posts/why-not-prettier-zh)
- https://github.com/antfu/eslint-config
- [前端规范(一)之 ESlint 以及@antfu/eslint-config](https://blog.csdn.net/weixin_42424283/article/details/128806611)
- [Nuxt 深入浅出 · 配置 antfu.eslint-config](https://juejin.cn/post/7338074027281104936)

## 依赖包覆盖

未来我应该要写包的依赖配置，比如我导入了很多 eslint 的插件，但是不清楚该怎么去覆盖其提供的默认配置。

可能的包覆盖配置教程：

- https://github.com/antfu/eslint-config/blob/main/README.md#rules-overrides

## 安装并配置 eslint-plugin-prettier 和 eslint-config-prettier

- [github.com/prettier/eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/blob/main/README.md)
- [github.com/prettier/eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier/blob/master/README.md)

根据仓库的教程，结合扁平化配置，配置示例如下。

```js
import antfu from "@antfu/eslint-config";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { FlatCompat } from "@eslint/eslintrc";

export default antfu(
	{
		// 个人配置
	},

	// 旧文件格式的迁移配置
	...compat.config({
		extends: ["eslint:recommended"],
	}),

	{
		rules: {
			"prettier/prettier": [
				"off",
				{
					usePrettierrc: true,
				},
			],
		},
	},

	eslintPluginPrettierRecommended,
	eslintConfigPrettier
);
```

## 额外封装 prettier cli 命令

- https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint

这篇教程，说明了我们在使用 eslint-config-prettier 时，仍旧需要手动封装命令行。
