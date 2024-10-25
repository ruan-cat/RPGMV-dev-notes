// TODO: 等待封装成一个独立的子包 实现跨项目的复用
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as fs from "node:fs";

import { sync } from "glob";
import yaml from "js-yaml";

import { type PackageJson } from "pkg-types";
import { type PnpmWorkspace } from "@ruan-cat/utils/src/types/pnpm-workspace.yaml.shim.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** 工作区文件的目录配置类型 */
interface Folder {
	name: string;
	path: string;
}

/**
 * 路径转换工具
 */
function pathChange(path: string) {
	return path.replace(/\\/g, "/");
}

/**
 * 根据 pnpm-workspace.yaml 生成工作区配置数组
 * @description
 */
function getFolders() {
	// TODO: 待优化 这里的路径读取还是不够智能 有写死的情况
	// 读取 pnpm-workspace.yaml 文件 文件路径
	const workspaceConfigPath = join(__dirname, "..", "pnpm-workspace.yaml");

	// 文件
	const workspaceFile = fs.readFileSync(workspaceConfigPath, "utf8");

	/**
	 * pnpm-workspace.yaml 的配置
	 */
	const workspaceConfig = <PnpmWorkspace>yaml.load(workspaceFile);

	/**
	 * packages配置 包的匹配语法
	 */
	const pkgPatterns = workspaceConfig.packages;

	// console.log(" ？ pkgPatterns ", pkgPatterns);

	/**
	 * 全部的 package.json 文件路径
	 */
	let pkgPaths: string[] = [];

	// 根据每个模式匹配相应的目录
	pkgPatterns!.map((pkgPattern) => {
		// TODO: 待优化 这里的路径读取还是不够智能 有写死的情况
		const matchedPath = pathChange(join(__dirname, "..", pkgPattern, "package.json"));

		// console.log(" 检查拼接出来的路径： ", matchedPath);

		const matchedPaths = sync(matchedPath, {
			ignore: "**/node_modules/**",
		});

		// 找到包路径，就按照顺序逐个填充准备
		pkgPaths = pkgPaths.concat(...matchedPaths);
		return matchedPaths;
	});

	// console.log("pkgPaths :>> ", pkgPaths);

	/**
	 * 目前项目的根目录
	 * @description
	 * 绝对路径
	 */
	const workspaceRoot = pathChange(process.cwd());

	const folders: Folder[] = pkgPaths.map(function (pkgJsonPath) {
		/**
		 * 包配置文件数据
		 */
		const pkgJson = <PackageJson>JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));

		/** 包名 且不可能为空包名 */
		const pkgJsonName = <string>pkgJson.name;

		// console.log(" ? 变换后的路径 ", pathChange(pkgJsonPath));

		// 输入
		// E:/store/gitHub-desktop/vercel-monorepo-test
		// E:/store/gitHub-desktop/vercel-monorepo-test/packages/vuepress-preset-config/package.json
		// 输出
		// ./packages/vuepress-preset-config

		/** 相对路径 */
		const relativePath = pathChange(pkgJsonPath).replace(`${workspaceRoot}/`, "");

		/** 没有 package.json 的相对路径 */
		const relativePathWithNoPkgJson = relativePath.replace(/\/package\.json$/, "");

		/** 最终用于工作区配置的路径 */
		const pathForCodeWorkspace = `./${relativePathWithNoPkgJson}`;

		// console.log(" ? pathForCodeWorkspace ", pathForCodeWorkspace);

		return <Folder>{
			name: pkgJsonName,
			path: pathForCodeWorkspace,
		};

		// 如果确实存在该文件，就处理。否则不管了。
		// 我们不判断文件是否存在了，这些路径都是存在文件的，
		// if (fs.existsSync(pkgJsonPath)) {
		// 	return {
		// 		name: createLabelName(pkgJson),
		// 		value: createPackagescopes(pkgJson),
		// 	};
		// }
	});

	return folders;
}

/**
 * 默认的工作区文件夹配置
 * @description
 * 默认要把根目录准备好 要能够访问到根目录
 */
const defFolders: Folder[] = [
	{
		name: "root",
		path: "./",
	},
];

const folders = [...defFolders, ...getFolders()];

const codeWorkspaceContent = {
	folders,
};

const defCodeWorkspaceFilename = <const>"vscode";

/**
 * 生成 vscode.code-workspace 文件
 */
function generateCodeWorkspace(filename: string = defCodeWorkspaceFilename) {
	const postfix = <const>".code-workspace";
	const fullName = <const>`${filename}${postfix}`;

	// TODO: 待优化 这里的路径读取还是不够智能 有写死的情况
	const codeWorkspacePath = join(__dirname, "..", fullName);
	fs.writeFileSync(codeWorkspacePath, JSON.stringify(codeWorkspaceContent, null, 2));
}

// 我们的工作区名称为 note笔记项目
generateCodeWorkspace("note笔记项目");
