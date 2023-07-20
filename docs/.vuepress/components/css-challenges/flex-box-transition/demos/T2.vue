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
	<section class="T2-root">
		<section class="main" :class="classobj">
			<section class="content"></section>

			<!-- :name="transitionClassNamePrefix" -->
			<!-- animate__animated -->
			<!-- name="rzn" -->
			<Transition :name="transitionClassNamePrefix">
				<section class="aside" v-if="isOpenAside"></section>
			</Transition>
		</section>
	</section>
</template>

<style lang="scss" scoped>
$aside-width: 25% !default;

$transitionTime: v-bind(transitionTime);

.T2-root {
	.main {
		// $aside-width: 25% !default;
		position: relative;

		display: flex;
		justify-content: flex-start;

		height: 400px;

		.content {
			z-index: 2;
			transition: all v-bind(transitionTime) ease-in-out;

			background-color: #f2f2f2;
			width: 100%;
			height: 100%;
		}

		.aside {
			z-index: 1;

			// transition: all v-bind(transitionTime) ease-in-out 1s;
			background-color: gray;
			width: $aside-width;
			height: 100%;
		}

		&.has-aside {
			.content {
				width: calc(100% - $aside-width) !important;
			}

			// .aside {
			// 	width: $aside-width !important;
			// }
		}
	}

	.rzn-enter-from {
		&.aside {
			width: 0px;
			opacity: 0;
		}
	}

	.rzn-enter-active {
		animation-name: slideInLeft;
		// animation-duration: v-bind(transitionTime);
		animation-duration: calc($transitionTime * 2);
		// animation-delay: v-bind(transitionTime);
		animation-delay: 1s;

		transition: all v-bind(transitionTime) ease-in-out 1s;
	}

	.rzn-enter-to {
		&.aside {
			width: $aside-width;
			opacity: 1;
		}
	}
}
</style>
