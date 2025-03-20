import { setUserConfig, setGenerateSidebar, addChangelog2doc } from "@ruan-cat/vitepress-preset-config/config";

// 为文档添加自动生成的changelog
// addChangelog2doc({
// 	// 设置changelog的目标文件夹
// 	target: "./docs",
// 	// 设置changelog顶部的yaml数据。通常是排序
// 	data: {
// 		order: 1000,
// 		dir: {
// 			order: 1000,
// 		},
// 	},
// });

const userConfig = setUserConfig({
	title: "阮喵喵笔记",
	description: "自己的笔记",
	themeConfig: {
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/ruan-cat",
			},
		],
	},
});
// @ts-ignore
userConfig.themeConfig.sidebar = setGenerateSidebar({
	documentRootPath: "./docs",
});
export default userConfig;
