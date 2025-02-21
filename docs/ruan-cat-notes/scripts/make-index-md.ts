import * as fs from "node:fs";
import * as path from "node:path";

import * as yaml from "js-yaml";
// import { type PackageInfo, getRuanCatPkgInfo } from "@ruan-cat/utils/node-esm";
import { type PackageInfo, getRuanCatPkgInfo } from "@ruan-cat/utils/src/node-esm/ruan-cat-pkg-info.ts";

import type { ThemeBlogHomeProjectOptions } from "vuepress-theme-hope";

interface IconPkgName {
	name: string;
	icon: string;
}

/** 包名和icon名称的配置数组 */
const iconPkgNames: IconPkgName[] = [
	{
		icon: "vscode-icons:folder-type-tools",
		name: "utils",
	},
	{
		icon: "logos:vercel-icon",
		name: "vercel-deploy-tool",
	},
	{
		icon: "logos:vue",
		name: "vuepress-preset-config",
	},
	{
		icon: "vscode-icons:file-type-vscode",
		name: "generate-code-workspace",
	},
];

/**
 * 将包信息映射为项目选项
 * @description
 * - 去除包名中的 `@ruan-cat/` 前缀
 * - 从 `iconPkgNames` 中查找对应的 icon
 * - 有icon的就加入，否则不加入
 */
function mapPkgInfoToProjectOptions(packageInfos: PackageInfo[]) {
	return packageInfos.map((pkg) => {
		const name = pkg.name.replace("@ruan-cat/", "");
		const iconPkg = iconPkgNames.find((iconPkg) => iconPkg.name === name);
		const projectOption: ThemeBlogHomeProjectOptions = {
			name,
			desc: pkg.description,
			link: pkg.url,
		};
		if (iconPkg) {
			projectOption.icon = iconPkg.icon;
		}
		return projectOption;
	});
}

/**
 * 对项目选项进行排序
 * @description
 * - 有icon的排在前面
 * - 按照名称排序
 */
function sortProjectOptions(projectOptions: ThemeBlogHomeProjectOptions[]) {
	return projectOptions.sort((a, b) => {
		if (a.icon && !b.icon) return -1;
		if (!a.icon && b.icon) return 1;
		return a.name.localeCompare(b.name);
	});
}

/**
 * 生成项目选项的yaml文件内容
 */
async function generateProjectOptionsYamlContent() {
	// 获取包信息
	const pkgInfo = await getRuanCatPkgInfo();
	// 将包信息映射为项目选项 并排序
	const projects = sortProjectOptions(mapPkgInfoToProjectOptions(pkgInfo));
	// 生成yaml文件内容
	const projectsContent = yaml.dump({ projects });

	return projectsContent;
}

async function generateYamlFile(yamlContent: string) {
	const outputDir = path.join(process.cwd(), "dist");
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir);
	}
	const outputPath = path.join(outputDir, "ruancat-pkg-info.yaml");
	fs.writeFileSync(outputPath, yamlContent, "utf8");
}

/**
 * 获取基础信息的yaml文件内容
 * @description
 * blog-home-base-info.yaml
 */
function getBaseInfoYamlContent() {
	// 从项目根目录读取模板文件 即node笔记项目 而不是单仓根目录
	const baseInfoPath = path.join(process.cwd(), "./templates/blog-home-base-info.yaml");
	if (!fs.existsSync(baseInfoPath)) {
		throw new Error("blog-home-base-info.yaml file not found");
	}
	const baseInfoContent = fs.readFileSync(baseInfoPath, "utf8");
	return baseInfoContent;
}

/**
 * 含有yaml的markdown模板
 */
function markdownWithYamlTemplate(params: { baseInfoContent: string; projectsContent: string }) {
	const { baseInfoContent, projectsContent } = params;
	return `---\n${baseInfoContent}\n${projectsContent}\n---`;
}

/** 写入md文档 */
async function writeMdFile() {
	const baseInfoContent = getBaseInfoYamlContent();
	const projectsContent = await generateProjectOptionsYamlContent();
	const mdContent = markdownWithYamlTemplate({ baseInfoContent, projectsContent });
	const mdPath = path.join(process.cwd(), "./docs/index.md");
	fs.writeFileSync(mdPath, mdContent, "utf8");
}

writeMdFile().catch(console.error);
