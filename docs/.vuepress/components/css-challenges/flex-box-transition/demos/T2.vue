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
			<Transition name="rzn">
				<section class="aside" v-if="isOpenAside"></section>
			</Transition>
		</section>
	</section>
</template>

<style lang="scss" scoped>
$aside-width: 25% !default;

.T2-root {
	.main {
		// $aside-width: 25% !default;

		display: flex;
		justify-content: flex-start;

		height: 400px;

		.content {
			transition: all v-bind(transitionTime) ease-in-out;

			background-color: #f2f2f2;
			width: 100%;
			height: 100%;
		}

		.aside {
			// transition: all v-bind(transitionTime) ease-in-out 1s;
			background-color: gray;
			width: 0px;
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
}

.rzn-enter-from {
	// width: 0px;
}

.rzn-enter-active {
	animation-name: slideInLeft;
	animation-duration: v-bind(transitionTime);
	animation-delay: v-bind(transitionTime);
}

.rzn-enter-to {
	// width: $aside-width;
}
</style>
