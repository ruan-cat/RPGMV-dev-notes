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
$gap: 20px !default;

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

		transition: all $time1 ease-in-out;
		gap: 0;

		.content {
			z-index: 2;

			transition: all $time1 ease-in-out $time1;

			background-color: #f2f2f2;
			width: 100%;
			// height: 100%;

			// flex-grow: 1;
		}

		.aside {
			z-index: 1;

			transition: all $time1 ease-in-out;

			background-color: gray;
			width: 0;
			height: 100%;
		}

		&.has-aside {
			transition: all $time1 ease-in-out;
			gap: $gap;

			.content {
				transition: all $time1 ease-in-out;

				width: calc(100% - $aside-width - $gap);
				// flex-grow: 3;
			}

			.aside {
				transition: all $time1 ease-in-out $time1;

				width: $aside-width;
				// flex-grow: 1;
			}
		}
	}
}
</style>
