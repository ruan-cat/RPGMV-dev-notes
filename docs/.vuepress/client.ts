import { defineClientConfig } from "@vuepress/client";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import DrillGoods from "./components/drill-goods/DrillGoods.vue";

export default defineClientConfig({
	enhance: ({ app, router, siteData }) => {
		const pinia = createPinia();
		pinia.use(piniaPluginPersistedstate);

		app.use(pinia);
		app.use(ElementPlus);
		app.component("DrillGoods", DrillGoods);
	},
});
