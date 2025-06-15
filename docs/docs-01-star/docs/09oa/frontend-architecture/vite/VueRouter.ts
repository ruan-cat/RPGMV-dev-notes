/**
 * 类型化路由插件
 * @description
 * 其定义位置必须在 `@vitejs/plugin-vue` 插件之前。
 *
 * @see https://uvr.esm.is/introduction.html#installation
 */
VueRouter({
	dts: "./types/typed-router.d.ts",
	routesFolder: [
		{
			/**
			 * 在我们项目中，页面放在 views 文件夹下。
			 *
			 * 文档建议是写在pages内
			 * src: "src/pages",
			 */
			src: "src/views",
			// 下面的配置暂时不使用
			// override globals
			// exclude: (excluded) => excluded,
			// filePatterns: (filePatterns) => filePatterns,
			// extensions: (extensions) => extensions,
		},
	],
	getRouteName,
});
