import { defineRuancatPresetTheme } from "@ruan-cat/vitepress-preset-config/theme";

import "./style.css";
import "./tools.scss";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "animate.css";

import { createPinia } from "pinia";
import piniaPluginPersistedstate, { createPersistedState } from "pinia-plugin-persistedstate";

export default defineRuancatPresetTheme({
	enhanceAppCallBack({ app, router, siteData }) {
		const pinia = createPinia();
		pinia.use(piniaPluginPersistedstate);
		app.use(pinia);

		app.use(ElementPlus);
	},
});
