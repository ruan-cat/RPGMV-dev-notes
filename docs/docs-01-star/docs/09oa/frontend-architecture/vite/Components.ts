Components({
	version: 3,
	include: [],
	dirs: [
		// 不生成 不负责。目前此文件夹下面的组件，交给其他的插件实现生成，生成特定的命名规则前缀
		// "src/components",
		// 也不负责具体的路由页面
		// "src/views",
	],
	dts: "./types/components.d.ts",
	directoryAsNamespace: true,
	resolvers: [
		ElementPlusResolver(),
		resolver([0, 1]),
		IconsResolver({
			enabledCollections: ["icon-park"],
		}),
	],
});
