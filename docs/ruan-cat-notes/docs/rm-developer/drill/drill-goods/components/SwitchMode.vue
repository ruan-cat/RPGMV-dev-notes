<script lang="ts" setup>
import { ElSwitch } from "element-plus";
import { ref } from "vue";
import { useVModel } from "@vueuse/core";

import { useMode } from "../hooks/use-mode.js";
import type { Mode } from "../hooks/use-mode.js";

import IconsInfo from "./Icons/IconsInfo.vue";
import IconsSettings from "./Icons/IconsSettings.vue";

type SwitchModeProps = {
	mode: Mode;
};

const props = withDefaults(defineProps<SwitchModeProps>(), {
	mode: "info",
});

const emit = defineEmits(["update:mode"]);

const switcher = useVModel(props, "mode", emit);

/** 激活值 即查看 */
const activeValue = ref<Mode>("info");

/** 失活值 即编辑 */
const inactiveValue = ref<Mode>("edit");
</script>

<template>
	<section>
		<!-- TODO: 学习使用 vue-i18n v9 来实现集中管理的文本管理 -->
		<!-- active-text="查看详情"
			inactive-text="编辑数据" -->
		<ElSwitch
			v-model="switcher"
			inline-prompt
			style="--el-switch-off-color: #13ce66"
			:active-value="activeValue"
			:inactive-value="inactiveValue"
			:active-icon="IconsInfo"
			:inactive-icon="IconsSettings"
		>
			{{ switcher }}
		</ElSwitch>
	</section>
</template>

<style lang="scss" scoped>
.SwitchMode-root {
}
</style>
