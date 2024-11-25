<script lang="ts" setup>
import { ElTag, ElButton } from "element-plus";
import { watch } from "vue";
import { random } from "lodash-es";
import { useSingleton } from "./use-singleton.js";

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
	},
);
</script>

<template>
	<section class="UseComputedBugChild-root">
		<h4>内部代码</h4>

		<ElButton type="primary" size="default" @click="randomSetValue()"> 随机设置id值 </ElButton>

		<ElButton type="primary" size="default" @click="reset()"> 清空为空字符串 </ElButton>

		<section>
			<ElTag type="info" size="large" effect="dark">
				{{ singletonData }}
				{{ isAddComputed }}
			</ElTag>
		</section>
	</section>
</template>

<style lang="scss" scoped>
.UseComputedBugChild-root {
}
</style>
