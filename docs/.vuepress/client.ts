import { defineClientConfig } from "vuepress/client";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "animate.css";

// https://stackoverflow.com/questions/10358100/how-to-access-localstorage-in-node-js
// import { LocalStorage } from "node-localstorage";

import { createPinia } from "pinia";
import piniaPluginPersistedstate, {
	createPersistedState,
} from "pinia-plugin-persistedstate";

// import DrillGoods from "./components/drill-goods/DrillGoods.vue";
// import FlexBoxTransition from "./components/css-challenges/flex-box-transition/FlexBoxTransition.vue";

// const piniaUseLocalStorage =
// 	typeof window !== "undefined"
// 		? window.localStorage
// 		: new LocalStorage("./scratch");

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

		// 不再手动全局注册
		// app.component("DrillGoods", DrillGoods);

		// 手动全局注册 目前发现可以实现自动全局导入了
		// app.component("FlexBoxTransition", FlexBoxTransition);
	},
});
