<script lang="ts" setup>
import { ref, computed } from "vue";

import Test from "./test.vue";

const isOpenAside = ref(false);

const buttonTextdef = ["打开侧边栏", "隐藏侧边栏"] as const;

type ButtonText = (typeof buttonTextdef)[number];

const buttonText = computed<ButtonText>(() => {
	return isOpenAside.value ? "隐藏侧边栏" : "打开侧边栏";
});

function switcher() {
	isOpenAside.value = !isOpenAside.value;
}

const classobj = computed(() => {
	return { "has-aside": isOpenAside.value };
});

const transitionTime = `${0.28}s`;
</script>

<template>
	<section class="flex-box-transition-root">
		<!-- <h2>练习动画</h2> -->

		<el-button type="primary" size="default" @click="switcher()">
			{{ buttonText }}
		</el-button>

		<section class="main" :class="classobj">
			<section class="content"></section>
			<section class="aside"></section>
		</section>

		<!-- preview -->
		<section>
			<!-- chatgpt 给出的东西不合适 -->
			<!-- <Test></Test> -->
		</section>
	</section>
</template>

<style lang="scss" scoped>
.flex-box-transition-root {
	width: 100%;
	height: 100%;
	background-color: rgba($color: gray, $alpha: 0.2);

	$aside-width: 25% !default;

	.main {
		display: flex;
		justify-content: flex-start;

		height: 400px;
		// transition: all v-bind(transitionTime) ease-in-out;

		.content {
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
