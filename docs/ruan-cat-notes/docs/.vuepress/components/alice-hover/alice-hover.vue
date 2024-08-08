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
.alice-hover-root {
}
</style>
