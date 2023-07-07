import { defineClientConfig } from "@vuepress/client";
import DrillGoods from "./components/drill-goods/DrillGoods.vue";

export default defineClientConfig({
	enhance: ({ app, router, siteData }) => {
		app.component("DrillGoods", DrillGoods);
	},
});
