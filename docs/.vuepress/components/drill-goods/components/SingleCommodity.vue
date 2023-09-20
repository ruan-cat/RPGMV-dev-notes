<script lang="ts" setup>
import { ref } from "vue";

import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";
import * as XLSX from "xlsx";
import { ElTable } from "element-plus";

import { useMode } from "../hooks/use-mode";
import { useSingleCommodity } from "../stores/use-single-commodity";
import SwitchMode from "../components/SwitchMode.vue";

const { commodity } = storeToRefs(useSingleCommodity());
const { mode } = useMode();

console.log("  in SingleCommodity ", commodity.value);

/**
 * 类型声明写法
 * - https://juejin.cn/post/6978035248487464974#heading-2
 */
const tableRef = ref<null | InstanceType<typeof ElTable>>(null);

/**
 * 参考资料
 * - https://juejin.cn/post/7097426696365670430
 * - https://zhuanlan.zhihu.com/p/632551852
 */
function exportFn() {
	const tableDom = tableRef.value?.$el;
	const ws = XLSX.utils.table_to_sheet(tableDom);
	const wb = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
	XLSX.writeFile(wb, "i18n.xlsx");
}
</script>

<template>
	<section class="SingleCommodity-root">
		<SwitchMode v-model:mode="mode"></SwitchMode>

		<!-- 
			导出文件
			https://www.npmjs.com/package/vue-json-excel3
			https://github.com/pratik227/vue3-json-excel
			前端 vue 导出为excel
			
			初步实现了导出 但是发现这个导出 是依赖于组件的 不是那种通过执行函数实现的。

			不使用依赖于组件的文件导出
		-->
		<!-- <JsonExcel
			v-if="false"
			:data="json_data"
			:fields="json_fields"
			worksheet="My Worksheet"
			name="filename.xls"
		>
			<el-button type="primary" size="default">下载导出文件 </el-button>
		</JsonExcel> -->

		<el-button type="primary" size="default" @click="exportFn()">
			下载导出文件
		</el-button>

		<el-table :data="commodity" ref="tableRef">
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
