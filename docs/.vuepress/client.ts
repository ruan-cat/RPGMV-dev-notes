import { defineClientConfig } from "@vuepress/client";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { createPinia } from "pinia";
import piniaPluginPersistedstate, {
	createPersistedState,
} from "pinia-plugin-persistedstate";

import DrillGoods from "./components/drill-goods/DrillGoods.vue";

export default defineClientConfig({
	enhance: ({ app, router, siteData }) => {
		const pinia = createPinia();
		pinia.use(piniaPluginPersistedstate);

		// https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/advanced.html#启用所有-store-默认持久化
		pinia.use(
			createPersistedState({
				// 不指定存储的工具了 这里没有找到合适的方案，实现node环境内的兼容
				// storage: localStorage,
				auto: false,
			})
		);

		app.use(pinia);
		app.use(ElementPlus);
		app.component("DrillGoods", DrillGoods);
	},
});
