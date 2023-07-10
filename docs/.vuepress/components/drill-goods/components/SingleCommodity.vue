<script lang="ts" setup>
import { storeToRefs } from "pinia";

import { useSingleCommodity } from "../stores/use-single-commodity";

const { commodity } = storeToRefs(useSingleCommodity());

console.log("  in SingleCommodity ", commodity.value);
</script>

<template>
	<section>
		<!-- style="width: 100%" -->
		<el-table :data="commodity">
			<el-table-column prop="name" label="名称" min-width="180" />
			<el-table-column prop="desc" label="描述" width="180" />

			<el-table-column prop="icon" label="标签" />

			<el-table-column prop="icon" label="标签">
				<template #default="scope"> </template>
			</el-table-column>
		</el-table>
	</section>
</template>

<style lang="scss" scoped></style>
