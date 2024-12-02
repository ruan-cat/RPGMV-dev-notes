import { type Config } from "@ruan-cat/vercel-deploy-tool/src/config.ts";

const config: Config = {
	vercelProjetName: "rpgmv-dev-notes-betd",
	vercelOrgId: "team_cUeGw4TtOCLp0bbuH8kA7BYH",
	vercelProjectId: "prj_uyMHnLoqFJAOpeBVlHZochteDZdB",
	vercelToken: "",

	deployTargets: [
		// 笔记项目
		// {
		// 	type: "userCommands",
		// 	outputDirectory: "docs/.vuepress/dist/**/*",
		// 	targetCWD: "./docs/ruan-cat-notes",
		// 	url: ["notes.ruan-cat.com", "ruan-cat-notes.ruan-cat.com", "ruan-cat-notes.ruancat6312.top"],
		// 	userCommands: ["pnpm -C=./docs/ruan-cat-notes build:docs"],
		// },

		// rmmv笔记项目
		{
			type: "userCommands",
			outputDirectory: "docs/.vuepress/dist/**/*",
			targetCWD: "./docs/rpgmv-dev-notes",
			url: ["rpgmv-dev-notes.ruancat6312.top", "rpgmv-dev-notes.ruan-cat.com", "mv.ruan-cat.com"],
			userCommands: ["pnpm -C=./docs/rpgmv-dev-notes build:docs"],
		},
	],
};

export default config;
