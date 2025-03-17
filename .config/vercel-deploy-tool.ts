import { type Config } from "@ruan-cat/vercel-deploy-tool/src/config.ts";
import { domains } from "@ruan-cat/domains";

const config: Config = {
	vercelProjetName: "rpgmv-dev-notes-betd",
	vercelOrgId: "team_cUeGw4TtOCLp0bbuH8kA7BYH",
	vercelProjectId: "prj_uyMHnLoqFJAOpeBVlHZochteDZdB",
	vercelToken: "",

	afterBuildTasks: ["pnpm turbo build:docs"],

	deployTargets: [
		// 笔记项目
		{
			type: "userCommands",
			outputDirectory: "docs/.vuepress/dist",
			targetCWD: "./docs/ruan-cat-notes",
			url: domains.notes as unknown as string[],
			// userCommands: ["pnpm -C=./docs/ruan-cat-notes build:docs"],
		},

		// rmmv笔记项目
		{
			type: "userCommands",
			outputDirectory: "docs/.vuepress/dist",
			targetCWD: "./docs/rpgmv-dev-notes",
			url: domains["rmmv-notes"] as unknown as string[],
			// userCommands: ["pnpm -C=./docs/rpgmv-dev-notes build:docs"],
		},
	],
};

export default config;
