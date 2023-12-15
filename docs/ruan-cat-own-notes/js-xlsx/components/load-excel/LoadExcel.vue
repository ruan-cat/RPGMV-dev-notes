<script lang="ts" setup>
import { ref, computed, watch, h } from "vue";

import {
	ElMessage,
	ElAlert,
	ElButton,
	ElUpload,
	ElTable,
	ElTableColumn,
	ElRow,
	ElCol,
	type UploadRawFile,
} from "element-plus";

import { pick, isUndefined } from "lodash-es";

import * as XLSX from "xlsx";

type Conditions = Array<(...args: any[]) => boolean>;

function isConditionsEvery(conditions: Conditions) {
	return conditions.every((condition) => condition());
}

function isConditionsSome(conditions: Conditions) {
	return conditions.some((condition) => condition());
}

/** 表格的数据类型 */
interface TableData {
	用户名: string;
	登陆账号: string;
	部门: string;
	手机号: number;
	角色: string;
	账号使用状态: string;
	已经存在的用户数据: string;
	用户是否存在?: string;
}

const title = ref("你好 这是临时使用的文件导入工具");

/**
 * https://zhuanlan.zhihu.com/p/632551852
 */
const tableData = ref<TableData[]>([]);

function readXLSX(file: UploadRawFile) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.readAsBinaryString(file);
		reader.onload = (evt) => {
			const data = evt?.target?.result;

			const wb = XLSX.read(data, { type: "binary" });

			const ws = wb.Sheets[wb.SheetNames[0]];
			const jsonData = XLSX.utils.sheet_to_json(ws);

			console.warn(` 检查导入的数据？ `, jsonData);

			resolve(jsonData);
		};
	});
}

async function beforeUpload(file: UploadRawFile) {
	const result = await readXLSX(file);
	tableData.value = result as TableData[];
	return false;
}

function createFilterUseConditions(elm: TableData): Conditions {
	return [
		() => (!isUndefined(elm.账号使用状态) ? elm.账号使用状态 === "启用" : true),

		() =>
			!isUndefined(elm.用户是否存在) ? elm.用户是否存在 === "不存在" : true,
	];
}

/**
 * 按照条件过滤 筛选出来的表格数据
 */
const list = computed(() => {
	return tableData.value
		.filter((elm) => isConditionsEvery(createFilterUseConditions(elm)))
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
	const storeMap = new Map<string, string[]>();

	list.value.forEach((elm) => {
		const roles = elm.角色.split(",");

		roles.forEach((role) => {
			if (!storeMap.has(role)) {
				storeMap.set(role, []);
			}

			storeMap.get(role)?.push(elm.用户名);
		});
	});

	// 不预设成字符串了
	// storeMap.forEach((value, key, map) => {
	// 	if (isArray(value)) {
	// 		map.set(key, value.join(","));
	// 	}
	// });

	return Object.entries(Object.fromEntries(storeMap.entries())).map((elm) => ({
		角色: elm[0],
		用户名: elm[1].join(","),
		总数: elm[1].length,
	}));
});

const layoutConf = ref({
	maxHeight: "100vh",
});

/**
 * EventTarget
 * MouseEvent
 * Event
 */
async function dblclickCopy($event: MouseEvent) {
	/** 参考资料： https://blog.csdn.net/weixin_45022563/article/details/127392836 */
	await navigator.clipboard
		.writeText(($event.target as HTMLElement).innerHTML)
		.then((res) => {
			ElMessage({
				type: "success",
				message: h("section", null, [
					h("section", null, "复制成功！"),
					h("section", null, "文本已保存在粘贴板内，随时可以复制粘贴。"),
					h("section", null, "使用快捷键 win+v 来打开粘贴板。"),
				]),
			});
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

		<el-row :gutter="20">
			<el-col :span="8" :offset="0">
				<el-table
					style="width: 100%"
					:data="list"
					:max-height="layoutConf.maxHeight"
					:stripe="true"
					:border="true"
					:highlight-current-row="true"
				>
					<el-table-column type="index" label="序号" width="80" />

					<el-table-column prop="用户名" label="用户名" width="180">
						<template #default="{ row, column, $index }">
							<section @dblclick="dblclickCopy($event)">
								{{ row["用户名"] }}
							</section>
						</template>
					</el-table-column>

					<el-table-column prop="角色" label="角色" min-width="180">
						<template #default="{ row, column, $index }">
							<section @dblclick="dblclickCopy($event)">
								{{ row["角色"] }}
							</section>
						</template>
					</el-table-column>
				</el-table>
			</el-col>

			<el-col :span="16" :offset="0">
				<el-table
					style="width: 100%"
					:data="reverseList"
					:max-height="layoutConf.maxHeight"
					:stripe="true"
					:border="true"
					:highlight-current-row="true"
				>
					<el-table-column type="index" label="序号" width="80" />

					<el-table-column prop="角色" label="角色" width="180">
						<template #default="{ row, column, $index }">
							<section @dblclick="dblclickCopy($event)">
								{{ row["角色"] }}
							</section>
						</template>
					</el-table-column>

					<el-table-column prop="用户名" label="用户名" min-width="180">
						<template #default="{ row, column, $index }">
							<section @dblclick="dblclickCopy($event)">
								{{ row["用户名"] }}
							</section>
						</template>
					</el-table-column>

					<el-table-column prop="总数" label="总数" width="80" fixed="right" />
				</el-table>
			</el-col>
		</el-row>
	</section>
</template>

<style lang="scss" scoped>
.LoadExcel-root {
	:deep(.el-table) {
		table {
			// 清除边距
			margin: 0 0;
		}

		.el-scrollbar__bar.is-vertical {
			width: 10px;

			.el-scrollbar__thumb:hover {
				background-color: gray;
			}
		}
	}
}
</style>
