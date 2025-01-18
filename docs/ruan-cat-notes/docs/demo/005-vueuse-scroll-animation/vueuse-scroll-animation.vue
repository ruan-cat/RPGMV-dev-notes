<script lang="ts" setup>
import { ref, computed, watch, useTemplateRef } from "vue";
import { useElementBounding, reactify } from "@vueuse/core";

/** 计算触发点的位置，通常在窗口底部的四分之一位置 */
const triggerBottom = (window.innerHeight / 5) * 4;

/**
 * 全部的滚动项dom元素
 * @description
 * 这里的内容全都是数组，数组中的每一项都是一个dom元素
 */
const boxItems = useTemplateRef("boxItem");

/**
 * 是否显示
 * @description
 * 通过比较top和触发点的位置，来判断是否显示
 */
function isShow(top: number, triggerBottom: number) {
	return top < triggerBottom;
}

/**
 * 响应式的计算函数
 * @description
 * 用于实现动态绑定两个数据，用computed动态关联两个响应式数据
 */
const isShowReactive = reactify(isShow);

/**
 * 初始化函数
 * @description
 * 初始化动态的响应式数据群
 * 要在先获取dom的情况下再去初始化响应式数据 应当在onMounted生命周期内执行
 */
function init() {
	const renders = boxItems.value.map((boxItem) => {
		// 获取动态计算的值 该值会随着滚动实现动态计算
		const { top } = useElementBounding(boxItem);

		// 根据响应式数据，动态计算出当前元素是否应该显示出来，后续的样式变更根据此状态完成
		const isShow = isShowReactive(top, triggerBottom);
		return {
			top,
			isShow,
		};
	});
	return renders;
}

/**
 * 记录状态的数组
 * @description
 * 一开始就是空数组
 */
const renders = ref<ReturnType<typeof init>>([]);

onMounted(() => {
	renders.value = init();
});
</script>

<template>
	<section class="vueuse-scroll-animation">
		<div class="box-container">
			<!-- 如果存在状态值，就动态地添加类 -->
			<section class="box" v-for="num in 20" :key="num" ref="boxItem" :class="{ show: renders?.[num - 1]?.isShow }">
				{{ num }}
			</section>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.vueuse-scroll-animation {
	width: 100%;
	// 增加该配置后 动画效果没那么好看了
	// overflow: hidden;

	/* 容器样式：使用 Flex 布局、圆角和阴影 */
	.box-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;

		.box {
			background-color: steelblue;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 400px;
			height: 200px;
			margin: 10px;
			border-radius: 10px;
			box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
			transition: transform 0.4s ease;
			font-size: 4rem;

			// 奇数个方块向右滑入
			&:nth-of-type(odd) {
				transform: translateX(400%);
			}

			// 偶数个方块向左滑入
			&:nth-of-type(even) {
				transform: translateX(-400%);
			}

			/* 添加 show 类时的样式，实现方块滑入效果 */
			&.show {
				transform: translateX(0);
			}
		}
	}
}
</style>
