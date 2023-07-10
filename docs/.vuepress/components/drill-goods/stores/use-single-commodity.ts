import { defineStore } from "pinia";

import { ref } from "vue";

export type Commodity = {
	/** 商品名称 */
	name: string;

	/** 商品价格 */
	price: number;

	/** 商品描述 */
	desc: string;

	/** 商品图标 这里默认是 iconify 的图标字符串 */
	icon: string;

	/** 图标颜色 不使用则默认为 vuepress 系统主题色 */
	iconColor?: string;
};

// export const defCommodity =

/** 使用 商品单品 管理store */
export const uesSingleCommodity = defineStore(
	"singleCommodity",
	() => {
		// const l

		const someState = ref("你好 pinia");
		return { someState };
	},

	{
		persist: true,
	}
);
