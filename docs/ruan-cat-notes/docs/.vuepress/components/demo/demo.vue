<script lang="ts" setup>
import { ref, computed, watch } from "vue";

import { type HuihuiSelectProps } from "./HuihuiSelectProps";
import HuihuiSelect from "./huihui-select.vue";

interface IOption {
	label: string;

	value: number;
}

const cellParam = ref<IOption>({
	label: "label",
	value: 1,
});

// const huihuiSelectProps = ref<HuihuiSelectProps>({
// 	cellParam: cellParam.value,
// });

function onCellCilck(p) {}
</script>

<template>
	<section class="demo-root">
		<HuihuiSelect :cellParam="cellParam" :on-cell-cilck="onCellCilck" />
	</section>
</template>

<style lang="scss" scoped>
.demo-root {
}
</style>
