<script lang="ts" setup>
import { ref, computed, watch } from "vue";

import {
	ElAlert,
	ElButton,
	ElUpload,
	ElTable,
	ElTableColumn,
} from "element-plus";

import { pick, isArray } from "lodash-es";

import * as XLSX from "xlsx";

/** 表格的数据类型 */
interface TableData {
	用户名: string;
	登陆账号: string;
	部门: string;
	手机号: number;
	角色: string;
	账号使用状态: string;
	已经存在的用户数据: string;
	用户是否存在: string;
}

const title = ref("你好 这是临时使用的文件导入工具");

/**
 * https://zhuanlan.zhihu.com/p/632551852
 */
const tableData = ref<TableData[]>([]);

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
	tableData.value = result as TableData[];
	return false;
}

/**
 * 按照条件过滤 筛选出来的表格数据
 */
const list = computed(() => {
	return tableData.value
		.filter((elm) => elm.账号使用状态 === "启用")
		.filter((elm) => elm.用户是否存在 === "存在")
		.map((elm) =>
			pick(elm, [
				"用户名",
				"角色",
				// "登陆账号",
				// "部门",
				// "手机号",
				// "账号使用状态",
				// "已经存在的用户数据",
				// "用户是否存在",
			])
		);
});

const reverseList = computed(() => {
	const storeMap = new Map<string, string[] | string>();

	list.value.forEach((elm) => {
		const roles = elm.角色.split(",");

		roles.forEach((role) => {
			if (!storeMap.has(role)) {
				storeMap.set(role, []);
			}

			(storeMap.get(role) as string[])?.push(elm.用户名);
		});
	});

	storeMap.forEach((value, key, map) => {
		if (isArray(value)) {
			map.set(key, value.join(","));
		}
	});

	return Object.entries(Object.fromEntries(storeMap.entries())).map((elm) => ({
		角色: elm[0],
		用户名: elm[1] as string,
		// 用户名: elm[1],
	}));
});
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

		<!-- max-height: 50vh; -->
		<el-table
			:data="list"
			style="width: 100%"
			max-height="50vh"
			:stripe="true"
			:border="true"
			:highlight-current-row="true"
		>
			<el-table-column prop="用户名" label="用户名" width="180" />
			<el-table-column prop="角色" label="角色" min-width="180" />
		</el-table>
	</section>
</template>

<style lang="scss" scoped>
.LoadExcel-root {
}
</style>
