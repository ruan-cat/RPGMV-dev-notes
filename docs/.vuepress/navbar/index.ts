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

// 学习const常量写法
// /** 用户课程状态 配置类型 固定规定的配置类型
//  * 用const的方式生成唯一的枚举类型
//  * 参考资料 https://zhuanlan.zhihu.com/p/437553121
//  */
// const userCourseStatusConf = {
// 	1: "已报名",
// 	2: "学习中",
// 	3: "完成学习",
// } as const;
// /** 用户课程状态 配置类型 常量枚举类型 */
// export type UserCourseStatusConf = typeof userCourseStatusConf;
// /** 用户课程状态 */
// export type UserCourseStatus = keyof UserCourseStatusConf;
// /** 用户课程状态 显示文本 */
// export type UserCourseStatusText = UserCourseStatusConf[UserCourseStatus];
