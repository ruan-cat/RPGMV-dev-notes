<script lang="ts" setup>
// defineProps, withDefaults,
import { ref, reactive, computed } from "vue";
// import { storeToRefs } from "pinia";

const tabBusinessConfList = [
	{
		name: "singleCommodity",
		label: "商品单品管理",
	},

	{
		name: "setMenu",
		label: "套餐组合管理",
	},
];

const selected = ref(tabBusinessConfList[0].name);
</script>

<template>
	<section>
		<h3>校验是否正确使用</h3>

		<el-tabs v-model="selected">
			<el-tab-pane label="商品单品管理" name="singleCommodity">
				<h2>商品单品管理</h2>
			</el-tab-pane>

			<el-tab-pane label="套餐组合管理" name="setMenu">
				<h2>套餐组合管理</h2>
			</el-tab-pane>

			<!-- <el-tab-pane
				v-for="item in panes"
				:key="item.key"
				:label="item.label"
				:name="item.key"
			>
			</el-tab-pane> -->
		</el-tabs>
	</section>
</template>

<style lang="scss" scoped></style>
