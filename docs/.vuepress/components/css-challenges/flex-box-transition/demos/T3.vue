<script lang="ts" setup>
import { ref, computed } from "vue";
import "animate.css";

import type { AnimateControlVueProps } from "../types/AnimateControlVueProps";

const props = withDefaults(defineProps<AnimateControlVueProps>(), {
	isOpenAside: false,
	transitionTime: `${0.28}s`,
});

const classobj = computed(() => {
	return { "has-aside": props.isOpenAside };
});

const transitionClassNamePrefix = "rzn";
</script>

<template>
	<section class="T3-root">
		<section class="main" :class="classobj">
			<section class="content"></section>
			<section class="aside"></section>
		</section>
	</section>
</template>

<style lang="scss" scoped>
$aside-width: 25% !default;

$transitionTime: v-bind(transitionTime);

$time1: $transitionTime;
$time2: calc($time1 * 2);

// v-bind的值是hash后的值 会增加额外的变量值。而不是所期望的写死字符串值。
// $classNamePrefix: v-bind(transitionClassNamePrefix);
$classNamePrefix: "rzn";

.T3-root {
	.main {
		position: relative;

		display: flex;
		justify-content: flex-start;

		height: 400px;

		.content {
			z-index: 2;

			// transition: all $time1 ease-in-out;
			transition: all $time1 ease-in-out $time1;

			background-color: #f2f2f2;
			width: 100%;
			height: 100%;
		}

		.aside {
			z-index: 1;

			// transition: all $time1 ease-in-out;
			transition: all $time1 ease-in-out;

			background-color: gray;
			// width: $aside-width;
			width: 0;
			height: 100%;
		}

		&.has-aside {
			.content {
				transition: all $time1 ease-in-out;
				// animation-duration: calc($transitionTime * 2);
				// animation-delay: $transitionTime;

				// width: calc(100% - $aside-width) !important;
				width: calc(100% - $aside-width);
			}

			.aside {
				transition: all $time1 ease-in-out $time1;

				width: $aside-width !important;
			}
		}
	}
}
</style>
