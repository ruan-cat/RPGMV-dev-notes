export default {
	/** @see https://juejin.cn/post/7381372081915166739#heading-8 */
	"commit-msg": "npx --no-install commitlint --edit '$1'",
	"pre-commit": "npx lint-staged",
	"pre-push": "pnpm run format",
};
