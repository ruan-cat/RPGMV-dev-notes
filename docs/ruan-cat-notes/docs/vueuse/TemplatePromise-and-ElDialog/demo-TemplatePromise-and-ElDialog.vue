<script lang="ts" setup>
import { createTemplatePromise } from "@vueuse/core";

import { type DialogProps } from "element-plus";

/** 可选的弹框props */
type DialogPropsPartial = Partial<DialogProps>;

/**
 * 弹框组件 配置对象
 * @description
 */
interface DemoDialogProps {
	dialog?: DialogPropsPartial;
}

/** 测试的业务dto */
interface TestBusinessDTO {
	id: number;
	name: string;
}

const TemplatePromise = createTemplatePromise();

function openDiglog() {
	// TemplatePromise.openDialog({
	// 	title: "测试弹框",
	// 	content: "这是一个测试弹框",
	// });
}
</script>

<template>
	<section class="demo-TemplatePromise-and-ElDialog-root">
		<ElButton type="success" @click="openDiglog"> 点击显示内容 </ElButton>
	</section>
</template>

<style lang="scss" scoped>
.demo-TemplatePromise-and-ElDialog-root {
}
</style>
