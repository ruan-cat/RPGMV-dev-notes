import * as fs from "node:fs";
import * as path from "node:path";

import * as yaml from "js-yaml";
import { getRuanCatPkgInfo } from "@ruan-cat/utils/src/ruan-cat-pkg-info";

import type { ThemeBlogHomeProjectOptions } from "vuepress-theme-hope";

interface IconPkgName {
	name: string;
	icon: string;
}

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

function mapPkgInfoToProjectOptions(pkgInfo: any): ThemeBlogHomeProjectOptions[] {
	return pkgInfo.map((pkg: any) => {
		const name = pkg.name.replace("@ruan-cat/", "");
		const iconPkg = iconPkgNames.find((iconPkg) => iconPkg.name === name);
		const projectOption: any = {
			name,
			desc: pkg.description,
			link: `https://www.npmjs.com/package/${pkg.name}`,
		};
		if (iconPkg) {
			projectOption.icon = iconPkg.icon;
		}
		return projectOption;
	});
}

async function generateYamlFile() {
	const pkgInfo = await getRuanCatPkgInfo();
	const projects = mapPkgInfoToProjectOptions(pkgInfo);
	const yamlContent = yaml.dump({ projects });

	const outputDir = path.join(process.cwd(), "dist");
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir);
	}

	const outputPath = path.join(outputDir, "ruancat-pkg-info.yaml");
	fs.writeFileSync(outputPath, yamlContent, "utf8");
}

generateYamlFile().catch(console.error);
