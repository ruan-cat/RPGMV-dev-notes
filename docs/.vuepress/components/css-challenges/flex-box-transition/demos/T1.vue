<script lang="ts" setup>
import { ref, computed } from "vue";

import type { AnimateControlVueProps } from "../types/AnimateControlVueProps";

const props = withDefaults(defineProps<AnimateControlVueProps>(), {
	isOpenAside: false,
	transitionTime: `${0.28}s`,
});

const classobj = computed(() => {
	return { "has-aside": props.isOpenAside };
});
</script>

<template>
	<section class="T1-root">
		<section class="main" :class="classobj">
			<section class="content"></section>
			<section class="aside"></section>
		</section>
	</section>
</template>

<style lang="scss" scoped>
.T1-root {
	.main {
		$aside-width: 25% !default;

		display: flex;
		justify-content: flex-start;

		height: 400px;
		// transition: all v-bind(transitionTime) ease-in-out;

		.content {
			// transition: all v-bind(transitionTime) ease-in-out;
			// transition: all v-bind(transitionTime) ease-in-out;
			transition: all v-bind(transitionTime) ease-in-out;

			background-color: #f2f2f2;
			width: 100%;
			height: 100%;
		}

		.aside {
			// transition: all v-bind(transitionTime) ease-in-out;
			transition: all v-bind(transitionTime) ease-in-out 1s;

			background-color: gray;
			width: 0px;
			height: 100%;
		}

		&.has-aside {
			.content {
				width: calc(100% - $aside-width) !important;
			}

			.aside {
				width: $aside-width !important;
			}
		}
	}
}
</style>
