import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

/**
 * @see https://juejin.cn/post/6983191125242675230
 * @see https://commitlint.js.org/reference/configuration.html#typescript-configuration
 */
const Configuration: UserConfig = {
	extends: ["@commitlint/config-conventional"],
	formatter: "@commitlint/format",
	rules: {
		"type-enum": [
			RuleConfigSeverity.Error,
			"always",
			["build", "ci", "perf", "feat", "fix", "refactor", "docs", "chore", "style", "revert", "test"],
		],

		"type-case": [0],
		"type-empty": [0],
		"scope-empty": [0],
		"scope-case": [0],
		"subject-full-stop": [0],
		"subject-case": [0, "never"],
		"header-max-length": [0, "always", 72],
	},
};

export default Configuration;
