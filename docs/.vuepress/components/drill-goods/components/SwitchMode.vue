<script lang="ts" setup>
import { ref } from "vue";

import { useMode } from "../hooks/use-mode";
import type { Mode } from "../hooks/use-mode";

const { mode } = useMode();

type SwitchModeProps = {
	mode: Mode;
};

const props = withDefaults(defineProps<SwitchModeProps>(), {
	mode: "info",
});

const switcher = mode;
switcher.value = "info";

const activeValue = ref<Mode>("info");
const inactiveValue = ref<Mode>("edit");

// import { storeToRefs } from "pinia";

// import { useSingleCommodity } from "../stores/use-single-commodity";
// const { commodity } = storeToRefs(useSingleCommodity());
// console.log("  in SetMenu ", commodity);
</script>

<template>
	<section>
		<el-switch
			v-model="switcher"
			:active-value="activeValue"
			:inactive-value="inactiveValue"
			@change=""
		>
		</el-switch>
	</section>
</template>

<style lang="scss" scoped>
.SwitchMode-root {
}
</style>
