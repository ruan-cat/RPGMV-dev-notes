<script lang="ts" setup generic="CellParamType">
import { ref, computed, watch } from "vue";
import { type HuihuiSelectProps } from "./HuihuiSelectProps";

// type _CellParamType = CellParamType;

// interface HuihuiSelectProps<T = _CellParamType> {
// 	onCellCilck?(cellParam: T): void;
// 	cellParam?: T;
// }

// const props = defineProps<HuihuiSelectProps<CellParamType>>();
const props = defineProps<{
	onCellCilck(cellParam: CellParamType): void;
	cellParam: CellParamType;
}>();
</script>

<template>
	<section class="huihui-select-root"></section>
</template>

<style lang="scss" scoped>
.huihui-select-root {
}
</style>
