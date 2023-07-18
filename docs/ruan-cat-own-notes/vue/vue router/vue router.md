## 动态匹配路由参数的例子

```js
children: [
	{
		// path: "/leasingBusiness/appraisalInfo/:appraisalNo/:reportNo/:data",

		/**
		 * https: //v3.router.vuejs.org/zh/guide/essentials/dynamic-matching.html#高级匹配模式
		 * https: //github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters
		 * 尝试使用更好的匹配模式 实现动态参数接收
		 *
		 * 匹配一个或多个参数
		 * /:appraisalNo+
		 *
		 * 匹配零个或多个参数
		 * /:reportNo*
		 *
		 * 匹配零个或多个参数
		 * /:data*
		 */
		path: "/leasingBusiness/appraisalInfo/:appraisalNo*/:reportNo*/:data*",
		// TODO: 搜索并更改。
		name: "DetailInfo",
		component: (resolve) =>
			require([
				"@/views/systems/leasing/housing/leasingEvaluation/info/Info",
			], resolve),
		props: true,
		meta: {
			breadcrumb: true,
			title: "评估详细信息",
			isLocalDefineRouter: true,
		},
	},
];
```

## 动态路由导入

学习待办：
1： webpack 的分包技术。chunk 包拆分配置。
2： 模块懒加载。异步加载。

目前学习情况：
在 vue2 的 vue-admin-element 项目中，最新版的路由使用就是用了 import()函数实现的。问题在于当前项目使用的架构过于老旧了。import 函数在 vue-cli 内反而是能用的。关键在于动态路由的数据库存储方案。

## 路由选项配置

https://github.com/pillarjs/path-to-regexp/tree/v1.7.0#optional

需要去测试实验路由选项配置的写法。实现多参数的任意配置。

## 升级路由管理方案为动态导入方式

- https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/lazy-loading.html

尝试 把 require 升级成 import 的动态导入写法。

### 结论

不做。或者说很难做。

#### 最新版的 vue-element-admin 对路由的处理方案变化了

- https://github.com/PanJiaChen/vue-element-admin

整个路由的处理方案完全地，同步地使用了 vue-router 本身提供的动态路由添加方案。和目前我们使用的框架截然不同。

这已经不是单纯的 require 改写成 import 了。还要考虑权限管理、全局路由守卫等地方的更改了。实操时，恐怕没有时间去这样改动。需要折腾的内容实在是太多了。

新版 import 写法：

```js
const c = {
	path: "/icon",
	component: Layout,
	children: [
		{
			path: "index",
			component: () => import("@/views/icons/index"),
			name: "Icons",
			meta: { title: "Icons", icon: "icon", noCache: true },
		},
	],
};
```

旧版 require 写法：

```js
// 示例 example
const c = {
	path: "/example",
	component: Layout,
	hidden: true,
	children: [
		{
			path: "/example/",
			name: "Example",
			component: (resolve) => require(["@/views/example/index.vue"], resolve),
			meta: { title: "示例", noCache: true },
		},
	],
};
```

## Redirected when going from "/login" to "/dashboard" via a navigation guard.

- https://www.cnblogs.com/zyh2333/p/14714031.html
