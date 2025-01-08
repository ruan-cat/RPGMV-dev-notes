<script lang="ts" setup>
import { ref, computed, watch } from "vue";

import { ElButton } from "element-plus";

const circleItemNum = ref(4);
</script>

<template>
	<section class="transform-rotate-root">
		<section class="circle">
			<section class="circle-item" v-for="num in circleItemNum" :key="num" :style="{ '--item-index': num }"></section>
		</section>

		<section class="btns">
			<ElButton type="danger"> 减少 </ElButton>
			<ElButton type="success"> 增加 </ElButton>
			<ElButton type="primary"> 旋转 </ElButton>
		</section>
	</section>
</template>

<style lang="scss" scoped>
.transform-rotate-root {
	--circleItemNum: v-bind("circleItemNum");
	$circleItemNum: 4;
	// $circleItemNum: var(--circleItemNum);

	// 圆圈直径
	$circleSize: 20rem;
	// 圆圈半径
	$circleRadius: calc($circleSize / 2);
	// 圆圈每一个项的半径
	$circle-item-size: 2.5rem;

	width: 100%;
	height: auto;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;

	.circle {
		background-color: pink;
		width: $circleSize;
		height: $circleSize;
		border-radius: 50%;

		position: relative;

		.circle-item {
			width: $circle-item-size;
			height: $circle-item-size;

			position: absolute;
			background-color: red;

			// 由ai生成 期望使用循环的方式生成样式
			// var(--circleItemNum)
			// @for $i from 1 through $circleItemNum {
			// 	&:nth-child(#{$i}) {
			// 		top: 50%;
			// 		left: 50%;
			// 		transform: translate(-50%, -50%) rotate(calc(360deg / var(--circleItemNum) * #{$i}));
			// 	}
			// }

			--sig-deg: calc(360deg / var(--circleItemNum));
			--curr-deg: calc(var(--sig-deg) * var(--item-index));

			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) rotate(var(--curr-deg)) translate($circleRadius);
		}
	}

	.btns {
	}
}
</style>
