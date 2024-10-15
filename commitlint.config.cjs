// @ts-check
/**
 * @description
 * 这个配置文件不能使用ts格式 ts不被支持
 *
 * @see https://cz-git.qbb.sh/zh/config/#中英文对照模板
 * @see https://cz-git.qbb.sh/zh/recipes/#
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");
const yaml = require("js-yaml");
const lodash = require("lodash");

const defScopes = [
	"root|根目录",
	"vuepress-preset-config|vp2预设配置",
	"vercel-deploy-tool|vc部署工具",
	"utils|工具包",
	"demo|测试项目",
];

/**
 * 路径转换工具
 * @param { string } path 路径
 * @returns { string } 改造后的路径
 */
function pathChange(path) {
	return path.replace(/\\/g, "/");
}

/**
 * 创建标签名称
 * @param { import("pkg-types").PackageJson } packageJson package.json数据
 * @returns { string }
 */
function createLabelName(packageJson) {
	const { name, description } = packageJson;
	const noneDesc = `该依赖包没有描述。`;
	const desc = lodash.isUndefined(description) ? noneDesc : description;
	return `${name ?? "bug：极端情况，这个包没有配置name名称"}    >>|>>    ${desc}`;
}

/**
 * 创建包范围取值
 * @param { import("pkg-types").PackageJson } packageJson package.json数据
 * @returns { string }
 */
function createPackagescopes(packageJson) {
	const { name } = packageJson;
	const names = name?.split("/");
	/**
	 * 含有业务名称的包名
	 * @description
	 * 如果拆分的数组长度大于1 说明包是具有前缀的。取用后面的名称。
	 *
	 * 否则包名就是单纯的字符串，直接取用即可。
	 */
	// @ts-ignore 默认 name 名称总是存在的 不做undefined校验
	const packageNameWithBusiness = names?.length > 1 ? names?.[1] : names?.[0];
	return `${packageNameWithBusiness}`;
}

/**
 * 根据 pnpm-workspace.yaml 配置的monorepo有意义的包名，获取包名和包描述
 * @description
 * 根据 pnpm-workspace.yaml 配置的monorepo有意义的包名，获取包名和包描述
 *
 * Array<{name: string, description: string}>
 * Promise<import("cz-git").ScopesType>
 * @return { import("cz-git").ScopesType }
 */
function getPackagesNameAndDescription() {
	// 读取 pnpm-workspace.yaml 文件 文件路径
	const workspaceConfigPath = path.join(__dirname, "pnpm-workspace.yaml");

	// 文件
	const workspaceFile = fs.readFileSync(workspaceConfigPath, "utf8");

	/**
	 * pnpm-workspace.yaml 的配置
	 * @type { import("./types/pnpm-workspace.yaml.shim.ts").PnpmWorkspace }
	 */
	// @ts-ignore 忽略unknown的警告
	const workspaceConfig = yaml.load(workspaceFile);

	/**
	 * packages配置 包的匹配语法
	 */
	const pkgPatterns = workspaceConfig.packages;

	// 如果没查询到packages配置，返回默认的scopes
	if (lodash.isUndefined(pkgPatterns)) {
		return defScopes;
	}

	/**
	 * 全部的 package.json 文件路径
	 * @type { string[] }
	 */
	let pkgPaths = [];

	// 根据每个模式匹配相应的目录
	pkgPatterns.map((pkgPattern) => {
		const matchedPath = pathChange(path.join(__dirname, pkgPattern, "package.json"));

		const matchedPaths = glob.sync(matchedPath, {
			ignore: "**/node_modules/**",
		});

		// 找到包路径，就按照顺序逐个填充准备
		pkgPaths = pkgPaths.concat(...matchedPaths);
		return matchedPaths;
	});

	// console.log("pkgPaths :>> ", pkgPaths);

	/**
	 * @returns { import("cz-git").ScopesType }
	 */
	const czGitScopesType = pkgPaths.map(function (pkgJsonPath) {
		// 如果确实存在该文件，就处理。否则不管了。
		if (fs.existsSync(pkgJsonPath)) {
			/**
			 * 包配置文件数据
			 * @type { import("pkg-types").PackageJson }
			 */
			const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
			return {
				// 标签名称 对外展示的标签名称
				name: createLabelName(pkgJson),
				// 取值
				value: createPackagescopes(pkgJson),
			};
		}

		return {
			name: "警告，没找到包名，请查看这个包路径是不是故障了：",
			value: "pkgJsonPath",
		};
	});

	return czGitScopesType;
}

/** @type { import("cz-git").ScopesType } */
let scopes = defScopes;
scopes = getPackagesNameAndDescription();

// .commitlintrc.js
/** @type {import("cz-git").UserConfig} */
module.exports = {
	rules: {
		// @see: https://commitlint.js.org/#/reference-rules
	},
	prompt: {
		alias: { fd: "docs: fix typos" },

		messages: {
			type: "选择你要提交的类型 :",
			scope: "选择一个提交范围（可选）:",
			customScope: "请输入自定义的提交范围 :",
			subject: "填写简短精炼的变更描述 :\n",
			body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
			breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
			footerPrefixesSelect: "选择关联issue前缀（可选）:",
			customFooterPrefix: "输入自定义issue前缀 :",
			footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
			confirmCommit: "是否提交或修改commit ?",
		},

		/**
		 * 基于monorepo内项目，决定提交范围域
		 */
		scopes,

		// https://cz-git.qbb.sh/zh/recipes/#多选模式
		enableMultipleScopes: true,
		scopeEnumSeparator: ",",

		allowCustomScopes: true,
		allowEmptyScopes: true,
		customScopesAlign: "bottom",
		customScopesAlias: "custom",
		emptyScopesAlias: "empty",

		types: [
			{ value: "✨ feat", name: "✨ feat:     新增功能 | A new feature" },
			{ value: "🐞 fix", name: "🐞 fix:      修复缺陷 | A bug fix" },
			{ value: "📃 docs", name: "📃 docs:     文档更新 | Documentation only changes" },
			{ value: "🌈 style", name: "🌈 style:    代码格式 | Changes that do not affect the meaning of the code" },
			{
				value: "🦄 refactor",
				name: "🦄 refactor: 代码重构 | A code change that neither fixes a bug nor adds a feature",
			},
			{ value: "🎈 perf", name: "🎈 perf:     性能提升 | A code change that improves performance" },
			{ value: "🧪 test", name: "🧪 test:     测试相关 | Adding missing tests or correcting existing tests" },
			{
				value: "🔧 build",
				name: "🔧 build:    构建相关 | Changes that affect the build system or external dependencies",
			},
			{ value: "🐎 ci", name: "🐎 ci:       持续集成 | Changes to our CI configuration files and scripts" },
			{ value: "🎉 init", name: "🎉 init:     初始化 | 项目初始化。" },
			{ value: "↩ revert", name: "↩ revert:   回退代码 | Revert to a commit" },
			{ value: "🐳 chore", name: "🐳 chore:    其他修改 | Other changes that do not modify src or test files" },
			{
				value: "🤔 save-file",
				name: "🤔 save-file:    保存文件 | 文件保存类型。仅仅是为了保存文件。有时候会需要紧急提交，并快速切换分支。此时就需要提交代码。并保存文件。",
			},
			{ value: "⚙️ config", name: "⚙️ config:    更新配置 | 配置更新。通用性的配置更新。" },
			{ value: "✋ main-pull-update", name: "✋ main-pull-update:    主分支拉取更新 | 主分支拉取更新。" },
			{ value: "🗑 del", name: "🗑 del:    删除垃圾 | 删除无意义的东西，注释，文件，代码段等。" },
			{ value: "⏩ mark-progress", name: "⏩ mark-progress:    标记进度 | 标记进度。" },
		],
		useEmoji: true,
		emojiAlign: "center",
		useAI: false,
		aiNumber: 1,
		themeColorCode: "",

		upperCaseSubject: false,
		markBreakingChangeMode: false,
		allowBreakingChanges: ["feat", "fix"],
		breaklineNumber: 100,
		breaklineChar: "|",
		skipQuestions: [],
		issuePrefixes: [
			// 如果使用 gitee 作为开发管理
			{ value: "link", name: "link:     链接 ISSUES 进行中" },
			{ value: "closed", name: "closed:   标记 ISSUES 已完成" },
		],
		customIssuePrefixAlign: "top",
		emptyIssuePrefixAlias: "skip",
		customIssuePrefixAlias: "custom",
		allowCustomIssuePrefix: true,
		allowEmptyIssuePrefix: true,
		confirmColorize: true,
		scopeOverrides: undefined,
		defaultBody: "",
		defaultIssues: "",
		defaultScope: "",
		defaultSubject: "",
	},
};
