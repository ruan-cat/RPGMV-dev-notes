## 用 dart-sass 去替换 node-sass

现在使用的是 vue-element-admin 后台管理系统，所以可以参考此方案做升级。[Node Sass to Dart Sass | vue-element-admin](https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/advanced/sass.html#升级方案)

### sass-loader 的对应版本

目前在安装时，出现了版本差异导致的安装失败错误。

```bash
Syntax Error: TypeError: this.getOptions is not a function
```

目前，绝大多数的文章都在建议降低 sass-loader 的版本号。这里借助别人别人已经探索成功的配置，实现了项目启动。[Scss--将 node-sass 切换为 sass(原 dart-sass)](https://blog.csdn.net/feiying0canglang/article/details/126372260#t6)

## implementation 的问题

- https://juejin.cn/post/6990170277162254372

在目前的 vue-cli 情况下，implementation 可能会有错误。vue.config.js 需要配置

```js
conf = {
	css: {
		loaderOptions: {
			sass: {
				implementation: require("sass"),
			},
		},
	},
};
```

## 用 sass-migrator 批处理错误

- https://blog.csdn.net/qq_38951259/article/details/127278847

## Sass @use 替代 @import ？

TODO

- https://juejin.cn/post/7119019352149458974
