/**
 * 自动生成类型声明文件插件
 */
autoImport([
	// components 目录
	{
		// 文件命名规则
		name: createDirOptionNameFunction("ComponentIn"),
		// 匹配规则 匹配全部的vue组件
		pattern: ["**/*.vue"],
		// 监听的文件夹
		dir: pathResolve("./src/components"),
		// 生成的文件
		// FIXME: 当不包含文件路径时，就出现错误 如果没有预先准备好文件夹，就会生成失败。
		toFile: pathResolve("./types/components-in-components-path.d.ts"),
		// 文件生成模板
		template: autoImportTemplate,
		codeTemplates: [
			{
				key: "//typeCode",
				template: 'type ComponentIn{{name}}Instance = InstanceType<typeof import("{{path}}")["default"]>;\n  ',
			},
			{
				key: "//code",
				template: '{{name}}: typeof import("{{path}}")["default"];\n    ',
			},
		],
	},

	// views 目录
	{
		name: createDirOptionNameFunction("Page"),
		pattern: ["**/*.vue"],
		dir: pathResolve("./src/views"),
		toFile: pathResolve("./types/components-in-views-path.d.ts"),
		template: autoImportTemplate,
		codeTemplates: [
			{
				key: "//typeCode",
				template: 'type Page{{name}}Instance = InstanceType<typeof import("{{path}}")["default"]>;\n  ',
			},
			{
				key: "//code",
				template: '{{name}}: typeof import("{{path}}")["default"];\n    ',
			},
		],
	},
]);
