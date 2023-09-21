<script lang="ts" setup>
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";
import * as XLSX from "xlsx";
import {
	ElTable,
	ElMessage,
	ElTableColumn,
	ElButton,
	ElForm,
	ElFormItem,
	type FormRules,
} from "element-plus";
import { debounce } from "lodash-es";

import { useMode } from "../hooks/use-mode";
import {
	useSingleCommodity,
	type Commodity,
} from "../stores/use-single-commodity";
import SwitchMode from "../components/SwitchMode.vue";

const { commodity } = storeToRefs(useSingleCommodity());
const { mode, isEdit, isInfo } = useMode();

console.log("  in SingleCommodity ", commodity.value);

/**
 * 类型声明写法
 * - https://juejin.cn/post/6978035248487464974#heading-2
 */
const tableRef = ref<null | InstanceType<typeof ElTable>>(null);

/** 表格文件后缀 */
const tableFileSuffix = <const>"xlsx";

/** 导出的文件名称 */
const xlsxFilename = computed(() => `小爱丽丝商品表-.${tableFileSuffix}`);

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
	XLSX.writeFile(wb, xlsxFilename.value);

	ElMessage({
		type: "success",
		message: "导出成功",
		showClose: true,
		grouping: true,
		duration: 2000,
	});
}

const debounceExportFn = debounce(exportFn, 1500, {
	// 点击的一瞬间会立刻执行一次，在连续的点击后，最后一次经过延迟时间后，导出最后一次。
	leading: true,
});

/** 防抖的按钮点击 */
function debounceBtnClick() {
	debounceExportFn();
}

const form = ref({
	list: commodity.value,
});
const rules = ref<FormRules<Commodity>>({
	// list: [{ required: true, message: "请输入商品名称" }],
	desc: [{ required: true, message: "请输入商品描述" }],
	price: [{ required: true, message: "请输入商品价格" }],
});
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

		<el-button type="primary" size="default" @click="debounceBtnClick()">
			导出文件
		</el-button>

		<el-form :model="form" ref="form" :rules="rules" :inline="false">
			<!-- <el-form-item label="">
				<el-input v-model="form."></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item> -->
		</el-form>

		<el-table :data="commodity" ref="tableRef">
			<el-table-column prop="name" label="名称" width="180">
				<template #default> </template>
			</el-table-column>

			<el-table-column prop="desc" label="描述" min-width="180" />

			<el-table-column prop="price" label="价格" min-width="180" />

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
