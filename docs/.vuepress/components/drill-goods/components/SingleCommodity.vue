<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { storeToRefs } from "pinia";

import { useSingleCommodity } from "../stores/use-single-commodity";

const { commodity } = storeToRefs(useSingleCommodity());

console.log("  in SingleCommodity ", commodity.value);
</script>

<template>
	<section class="SingleCommodity-root">
		<el-table :data="commodity">
			<el-table-column prop="name" label="名称" width="180" />

			<el-table-column prop="desc" label="描述" min-width="180" />

			<el-table-column prop="icon" label="标签">
				<template #default="scope">
					<Icon :icon="scope.row.icon"></Icon>
				</template>
			</el-table-column>
		</el-table>
	</section>
</template>

<style lang="scss" scoped>
.SingleCommodity-root {
	:deep(.el-table) {
		table {
			// 清除边距
			margin: 0 0;
		}
	}
}
</style>
