<script lang="ts" setup>
import { ref } from "vue";

import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";
import JsonExcel from "vue-json-excel3";

import { useSingleCommodity } from "../stores/use-single-commodity";

const { commodity } = storeToRefs(useSingleCommodity());

console.log("  in SingleCommodity ", commodity.value);

const json_fields = ref({
	"Complete name": "name",
	City: "city",
	Telephone: "phone.mobile",
	"Telephone 2": {
		field: "phone.landline",
		callback: (value) => {
			return `Landline Phone - ${value}`;
		},
	},
});

const json_data = ref([
	{
		name: "Tony Peña",
		city: "New York",
		country: "United States",
		birthdate: "1978-03-15",
		phone: {
			mobile: "1-541-754-3010",
			landline: "(541) 754-3010",
		},
	},
	{
		name: "Thessaloniki",
		city: "Athens",
		country: "Greece",
		birthdate: "1987-11-23",
		phone: {
			mobile: "+1 855 275 5071",
			landline: "(2741) 2621-244",
		},
	},
]);
</script>

<template>
	<section class="SingleCommodity-root">
		<!-- 
			导出文件
			https://www.npmjs.com/package/vue-json-excel3
			https://github.com/pratik227/vue3-json-excel
			前端 vue 导出为excel

			TODO: 实现导出为Excel文件

			初步实现了导出 但是发现这个导出 是依赖于组件的 不是那种通过执行函数实现的。
		-->

		<JsonExcel
			:data="json_data"
			:fields="json_fields"
			worksheet="My Worksheet"
			name="filename.xls"
		>
			<el-button type="primary" size="default">下载导出文件 </el-button>
		</JsonExcel>

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
