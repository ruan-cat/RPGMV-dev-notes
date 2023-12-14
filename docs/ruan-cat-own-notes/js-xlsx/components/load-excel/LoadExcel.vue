<script lang="ts" setup>
import { ref, computed, watch } from "vue";

import { ElAlert, ElButton, ElUpload } from "element-plus";

import * as XLSX from "xlsx";

type TableData = unknown[];

const title = ref("你好 这是临时使用的文件导入工具");

const tableData = ref<TableData>([]);

function readXLSX(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.readAsBinaryString(file);
		reader.onload = (evt) => {
			const data = evt?.target?.result;

			const wb = XLSX.read(data, { type: "binary" });

			// const ws = workbook.Sheets[workbook.SheetNames[0]];
			const ws = wb.Sheets[wb.SheetNames[0]];
			const jsonData = XLSX.utils.sheet_to_json(ws);

			console.warn(` 检查导入的数据？ `, jsonData);

			resolve(jsonData);
		};
	});
}

async function beforeUpload(file) {
	const result = await readXLSX(file);
	console.log(result);
	tableData.value = result as TableData;
	return false;
}
</script>

<template>
	<section class="LoadExcel-root">
		<el-alert
			type="warning"
			effect="light"
			show-icon
			:title="title"
			:closable="false"
		></el-alert>

		<!-- <el-button type="primary" size="large" @click=""> 导入文件 </el-button> -->

		<el-upload
			ref="upload"
			:auto-upload="true"
			accept=".xls,.xlsx"
			:before-upload="beforeUpload"
			:show-file-list="false"
		>
			<template #trigger>
				<el-button type="primary">选择文件</el-button>
			</template>
		</el-upload>
	</section>
</template>

<style lang="scss" scoped>
.LoadExcel-root {
}
</style>
