# eslint

尽管我清楚 eslint 和 prettier 相互打架，但还是要面对他。必须要面对 eslint 这个困难。

## 系统性的学习策略

值得注意的是，用 @antfu/eslint-config 去配置 eslint 时，其配置风格完全割裂了，完全不像是之前学习的 eslint 配置。

这种感觉就类似于 vue2 突然切换到 vue3 这样。

以后学习 eslint 配置时，自己要意识到什么是旧版配置，什么是新版配置。新旧版本配置如何迁移切换？

## git 提交时的自动格式化配置

在观察别人的后台管理项目时，可以在`package.json`内看到类似的配置：

```json
{
	"husky": {
		"hooks": {
			"pre-commit": "lint-staged"
		}
	},
	"lint-staged": {
		"src/**/*.{js,vue}": ["eslint --fix", "git add"]
	}
}
```

目前不清楚这种配置的内容，需要专门看看`package.json`、`git`和`eslint`的文档。记得`eslint`的文档提供了这样的配置。

目前这个配置的效果是：每次`git`推送时，都做一次`eslint`的格式化。

这个配置可以规范团队协作时的代码规范，但是目前不敢使用。因为团队不使用`git`来控制代码版本。

## 前端工程化 eslint

- [antfu：为什么我不使用 Prettier](https://antfu.me/posts/why-not-prettier-zh)
- https://github.com/antfu/eslint-config
- [前端规范(一)之 ESlint 以及@antfu/eslint-config](https://blog.csdn.net/weixin_42424283/article/details/128806611)
- [ESLint 扁平化配置使用指南](https://juejin.cn/post/7282606413841580091)
- [Nuxt 深入浅出 · 配置 antfu.eslint-config](https://juejin.cn/post/7338074027281104936)

## eslint 和 prettier 的依赖包

- eslint-plugin-prettier
- eslint-config-prettier

这两个依赖包，我一直以来都搞不清楚是什么关系的。

## @antfu/eslint-config 的使用

未来我应该要写包的依赖配置，比如我导入了很多 eslint 的插件，但是不清楚该怎么去覆盖其提供的默认配置。

可能的包覆盖配置教程：

- https://github.com/antfu/eslint-config/blob/main/README.md#rules-overrides