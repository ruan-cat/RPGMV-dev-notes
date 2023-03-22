import { navbar } from "vuepress-theme-hope";

import { navConfList } from "../nav-side-common-conf/index.js";

export const zhNavbar = navbar(navConfList);

// 一段测试代码
// type ReallyExist = {
// 	enrollEndTime: string;
// 	enrollStartTime: string;
// 	enrollSurplusNum: number;
// 	isEnroll: number;
// };
// type LifeLongLearnPlan = ReallyExist & Record<string, unknown>;
// const item: LifeLongLearnPlan = {
// 	ferfger: "",
// 	g545: "",
// 	enrollEndTime: "",
// 	enrollStartTime: "",
// 	enrollSurplusNum: 0,
// 	isEnroll: 0,
// };
