<script lang="ts" setup>
import { ref } from "vue";
import { useVModel } from "@vueuse/core";

import { useMode } from "../hooks/use-mode";
import type { Mode } from "../hooks/use-mode";

type SwitchModeProps = {
	mode: Mode;
};

const props = withDefaults(defineProps<SwitchModeProps>(), {
	mode: "info",
});

const emit = defineEmits(["update:mode"]);

const switcher = useVModel(props, "mode", emit);

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
		>
			{{ switcher }}
		</el-switch>
	</section>
</template>

<style lang="scss" scoped>
.SwitchMode-root {
}
</style>
