<script lang="ts" setup>
import { ref, computed, watch } from "vue";

import { ElAlert, ElButton } from "element-plus";

import * as XLSX from "xlsx";

const title = ref("你好 这是临时使用的文件导入工具");

const tableData = ref([]);

async function beforeUpload(file) {
	const result = await readXLSX(file);
	console.log(result);
	tableData.value = result;
	return false;
}

function readXLSX(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.readAsBinaryString(file);
		reader.onload = (evt) => {
			const data = evt.target.result;
			const wb = XLSX.read(data, { type: "binary" });
			const ws = workbook.Sheets[workbook.SheetNames[0]];
			const jsonData = XLSX.utils.sheet_to_json(ws);
			resolve(jsonData);
		};
	});
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

		<el-button type="primary" size="large" @click=""> 导入文件 </el-button>
	</section>
</template>

<style lang="scss" scoped>
.LoadExcel-root {
}
</style>
