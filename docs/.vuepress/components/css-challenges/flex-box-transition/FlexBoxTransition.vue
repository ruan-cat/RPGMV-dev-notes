<script lang="ts" setup>
import { ref, computed } from "vue";

const isOpenAside = ref(false);

const buttonTextdef = ["打开侧边栏", "隐藏侧边栏"] as const;

type ButtonText = (typeof buttonTextdef)[number];

const buttonText = computed<ButtonText>(() => {
	return isOpenAside.value ? "隐藏侧边栏" : "打开侧边栏";
});

function switcher() {
	isOpenAside.value = !isOpenAside.value;
}
</script>

<template>
	<section class="flex-box-transition-root">
		<!-- <h2>练习动画</h2> -->

		<el-button type="primary" size="default" @click="switcher()">
			{{ buttonText }}
		</el-button>

		<section class="main">
			<section></section>
			<section></section>
		</section>
	</section>
</template>

<style lang="scss" scoped>
.flex-box-transition-root {
	width: 100%;
	height: 100%;
	background-color: rgba($color: gray, $alpha: 0.2);

	.main {
		display: flex;
		justify-content: flex-start;

		.container {
		}

		.aside {
			// visibility: ;
		}
	}
}
</style>
