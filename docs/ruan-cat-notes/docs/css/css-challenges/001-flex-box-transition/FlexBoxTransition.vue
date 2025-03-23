<!-- #region snippet -->
<script lang="ts" setup>
import "animate.css";

import { ElButton } from "element-plus";
import { ref, computed } from "vue";
import { useToggle } from "@vueuse/core";

const [isOpenAside, switcher] = useToggle(false);

const buttonTextdef = <const>["打开侧边栏", "隐藏侧边栏"];
type ButtonText = (typeof buttonTextdef)[number];

const buttonText = computed<ButtonText>(() => {
	return isOpenAside.value ? "隐藏侧边栏" : "打开侧边栏";
});

const transitionTime: `${number}s` = `${0.28}s`;

const classobj = computed(() => {
	return { "has-aside": isOpenAside.value };
});
</script>
<!-- #endregion snippet -->

<template>
	<section class="flex-box-transition-root">
		<ElButton type="primary" size="default" @click="switcher()">
			{{ buttonText }}
		</ElButton>

		<section class="T3-root">
			<section class="main" :class="classobj">
				<section class="content"></section>
				<section class="aside"></section>
			</section>
		</section>
	</section>
</template>

<style lang="scss" scoped>
.flex-box-transition-root {
	width: 100%;
	height: 100%;
	background-color: rgba($color: gray, $alpha: 0.2);
}

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
		display: flex;
		justify-content: flex-start;
		height: 400px;
		transition: all $time1 ease-in-out;
		gap: 0;

		.content {
			transition: all $time1 ease-in-out $time1;
			background-color: #f2f2f2;
			width: 100%;
			height: 100%;
		}

		.aside {
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
			}

			.aside {
				transition: all $time1 ease-in-out $time1;
				width: $aside-width;
			}
		}
	}
}
</style>
