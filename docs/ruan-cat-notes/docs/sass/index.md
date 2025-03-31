# scss-sass 预处理语言

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

## vue-cli 使用 sass 依赖包导致热更新与编译时速度缓慢

```bash
Deprecation Warning: $weight: Passing a number without unit % (0) is deprecated.

To preserve current behavior: $weight * 1%

More info: https://sass-lang.com/d/function-units

   ╷
24 │     color: mix($--tag-info-color, $--color-white, $fontColorWeight);
   │            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ╵
```

总是出这个问题。而且每次热更新都非常缓慢。

目前的处理方式是，避免直接使用来自 element-ui 提供的 scss 文件。其语法实现依赖于 node-sass，这和我们正在使用的 dart-sass 截然不同。

## Sass @use 替代 @import ？

TODO: Sass @use 替代 @import ？

- https://juejin.cn/post/7119019352149458974
- [Sass 之模块化](https://juejin.cn/post/7051936281315508260)

### 新语法？

这几个语法怎么使用，搞不清楚之间的联系：

- @use
- @import
- @mixin
- @include

### 进度

尝试使用模块化的 scss，但是不清楚该怎么写，怎么让 vscode 能够准确实现识别。

- 更多合适的语法说明文章？
- vscode 识别？

## 差值语法

- https://blog.csdn.net/hide_in_darkness/article/details/107539805
- https://juejin.cn/post/7116139958699556877#heading-11
