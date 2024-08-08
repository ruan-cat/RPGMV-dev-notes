<script lang="ts" setup>
import { ref, computed, watch } from "vue";

defineOptions({
	/**
	 * 爱丽丝悬浮装饰弹框
	 * @description
	 * 另外右下角加个小爱丽丝。
	 *
	 * - 鼠标接近这个 div，小爱丽丝就往下躲起来
	 * - 离开 div，小爱丽丝又冒出来。
	 */
	name: "AliceHover",
});
</script>

<template>
	<section class="alice-hover-root"></section>
</template>

<style lang="scss" scoped>
$size: 10rem;

$width-rate: 400;
$height-rate: 368;

$unit: calc($size / $width-rate);

$width: calc($width-rate * $unit);
$height: calc($height-rate * $unit);

$hidden-rate: -0.65;
$show-rate: -0.17;

// 从其他的vuepress组件内照抄而来
.alice-hover-root {
	position: fixed !important;
	right: 6.5rem;
	bottom: $height * $hidden-rate;
	z-index: 100;

	width: $width;
	height: $height;

	background-color: transparent;
	background-image: url(./assets/小爱丽丝_70探头_透明底.png);
	background-size: 100% 100%;
	background-position: center;

	transition: all 0.3s ease-in-out;

	&:hover {
		bottom: $height * $show-rate;
	}
}
</style>
