<script lang="ts" setup>
import { watch } from "vue";
import { random } from "lodash-es";
import { useSingleton } from "./use-singleton.ts";

const { isAddComputed, singletonData } = useSingleton();

function randomSetValue() {
	singletonData.value.taskId = random(1, 34) + "";
	singletonData.value.businessKey = random(64, 232) + "";
}

function reset() {
	singletonData.value.taskId = singletonData.value.businessKey = "";
}

watch(
	[() => singletonData.value.businessKey, () => singletonData.value.taskId],

	async ([nBusinessKey, nTaskId], [oBusinessKey, oTaskId]) => {
		console.log("  检查id变化情况？ ", {
			nBusinessKey,
			nTaskId,
			oBusinessKey,
			oTaskId,
		});

		if (nBusinessKey === "" && nTaskId === "") {
			singletonData.value.isAdd = true;
		} else {
			singletonData.value.isAdd = false;
		}
	},

	{
		deep: true,
		immediate: true,
	}
);
</script>

<template>
	<section class="UseComputedBugChild-root">
		<h4>内部代码</h4>

		<el-button type="primary" size="default" @click="randomSetValue()">
			随机设置id值
		</el-button>

		<el-button type="primary" size="default" @click="reset()">
			清空为空字符串
		</el-button>

		<section>
			<el-tag type="info" size="normal" effect="dark">
				{{ singletonData }}
				{{ isAddComputed }}
			</el-tag>
		</section>
	</section>
</template>

<style lang="scss" scoped>
.UseComputedBugChild-root {
}
</style>
