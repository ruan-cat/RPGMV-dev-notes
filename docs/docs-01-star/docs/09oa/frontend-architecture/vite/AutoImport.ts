AutoImport({
	imports: [
		VueRouterAutoImports,
		"@vueuse/core",
		"vue",
		{
			"@ruan-cat/utils": ["isConditionsEvery", "isConditionsSome"],
		},
	],
	ignore: ["vue-router"],
	dirs: ["src/**/*"],
	dts: "./types/auto-imports.d.ts",
	resolvers: [ElementPlusResolver()],
});
