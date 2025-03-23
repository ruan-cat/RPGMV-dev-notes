import { defineRuancatPresetTheme } from "@ruan-cat/vitepress-preset-config/theme";

import "./style.css";
import "./tools.scss";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
export default defineRuancatPresetTheme({
	enhanceAppCallBack({ app, router, siteData }) {
		app.use(ElementPlus);
	},
});
