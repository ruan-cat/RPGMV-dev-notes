import { defineClientConfig } from "vuepress/client";
import { inject } from "@vercel/analytics";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "animate.css";
// 测试 普通样式
// import "@ruan-cat/vuepress-preset-config/src/styles/common/index.scss";
// 测试 爱丽丝样式
// TODO: 待迁移到vitepress内
import "@ruan-cat/vuepress-preset-config/src/styles/drill-style/index.scss";

// https://stackoverflow.com/questions/10358100/how-to-access-localstorage-in-node-js
// import { LocalStorage } from "node-localstorage";
import { createPinia } from "pinia";
import piniaPluginPersistedstate, { createPersistedState } from "pinia-plugin-persistedstate";
import AliceHover from "./components/alice-hover/alice-hover.vue";
/**
 * 默认的 twoslash 是不会主动带上样式的 需要我们手动导入样式
 * @see https://shiki.tmrs.site/packages/vitepress#twoslash
 * @see https://shiki.tmrs.site/packages/twoslash
 */
import "@shikijs/twoslash/style-rich.css";
import "@shikijs/twoslash/style-classic.css";

import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";
/**
 * https://shiki.tmrs.site/packages/vitepress
 */
import "@shikijs/vitepress-twoslash/style.css";

export default defineClientConfig({
	enhance: ({ app, router, siteData }) => {
		const pinia = createPinia();
		pinia.use(piniaPluginPersistedstate);

		// https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/advanced.html#启用所有-store-默认持久化
		// pinia.use(
		// 	createPersistedState({
		// 		storage: piniaUseLocalStorage,
		// 		auto: false,
		// 	})
		// );

		app.use(pinia);
		app.use(ElementPlus);
		app.use(TwoslashFloatingVue);

		// 参考资料 https://vercel.com/docs/analytics/package
		// TODO: 学一下怎么配置node环境
		inject({
			mode: "production",
		});
	},

	// TODO: 考虑迁移到默认vuepress配置内，对外导出一个小爱丽丝工具。
	rootComponents: [AliceHover],
});
