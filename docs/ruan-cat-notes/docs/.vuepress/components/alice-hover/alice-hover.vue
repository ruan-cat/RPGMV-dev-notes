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
	<section class="alice-hover-root">
		<section class="alice"></section>
	</section>
</template>

<style lang="scss" scoped>
// 定义基础大小
$base-size: 10rem;
$padding: 3rem;
$layout-size: $base-size + $padding;

// 图片尺寸比例
$width-rate: 400;
$height-rate: 368;

// 计算单位尺寸
$base-unit: calc($base-size / $width-rate);
$layout-unit: calc($layout-size / $width-rate);

// 计算具体长度
@function getlength($rate, $unit: $base-unit) {
	// @return calc(#{$rate} * #{$unit});
	@return calc($rate * $unit);
}

$layout-w: getlength($width-rate, $layout-unit);
$layout-h: getlength($height-rate, $layout-unit) - $padding;

$alice-w: getlength($width-rate);
$alice-h: getlength($height-rate);

$hidden-rate: -0.17;
$show-rate: -0.65;

// 从其他的vuepress组件内照抄而来
.alice-hover-root {
	position: fixed !important;
	right: 5.35rem;
	bottom: 0;
	z-index: 100;

	width: $layout-w;
	height: $layout-h;

	display: flex;
	justify-content: center;
	align-items: end;

	.alice {
		width: $alice-w;
		height: $alice-h;

		position: relative;
		bottom: $alice-h * $hidden-rate;

		background-color: transparent;
		background-image: url("./assets/LittleAlice_70Probe_Transparent-bottom.png");
		background-size: 100% 100%;
		background-position: center;

		transition: all 0.3s ease-in-out;
	}

	&:hover {
		.alice {
			bottom: $alice-h * $show-rate;
		}
	}
}
</style>
