<script lang="ts" setup>
import { ElButton } from "element-plus";
import { ref, computed } from "vue";
// import type { AnimateControlVueProps } from "./types/AnimateControlVueProps";

import Try1 from "./demos/T1.vue";
import Try2 from "./demos/T2.vue";
import Try3 from "./demos/T3.vue";

const isOpenAside = ref(false);

const buttonTextdef = ["打开侧边栏", "隐藏侧边栏"] as const;

type ButtonText = (typeof buttonTextdef)[number];

const buttonText = computed<ButtonText>(() => {
	return isOpenAside.value ? "隐藏侧边栏" : "打开侧边栏";
});

function switcher() {
	isOpenAside.value = !isOpenAside.value;
}

const transitionTime: `${number}s` = `${0.28}s`;
</script>

<template>
	<section class="flex-box-transition-root">
		<!-- <h2>练习动画</h2> -->

		<ElButton type="primary" size="default" @click="switcher()">
			{{ buttonText }}
		</ElButton>

		<!-- <Try1 :is-open-aside="isOpenAside" :transition-time="transitionTime"></Try1> -->
		<!-- <Try2 :is-open-aside="isOpenAside" :transition-time="transitionTime"></Try2> -->
		<Try3 :is-open-aside="isOpenAside" :transition-time="transitionTime" />
	</section>
</template>

<style lang="scss" scoped>
.flex-box-transition-root {
	width: 100%;
	height: 100%;
	background-color: rgba($color: gray, $alpha: 0.2);
}
</style>
