<script lang="ts" setup>
import { ElTag } from "element-plus";
import { useSingleton } from "./use-singleton.js";
import UseComputedBugChild from "./UseComputedBugChild.vue";

const { isAddComputed, singletonData } = useSingleton();
</script>

<template>
	<section class="UseComputedBug-root">
		<h3>外部组件</h3>

		<ElTag type="danger" size="large" effect="dark">
			{{ singletonData }}
			{{ isAddComputed }}
		</ElTag>

		<UseComputedBugChild></UseComputedBugChild>
	</section>
</template>

<style lang="scss" scoped>
.UseComputedBug-root {
}
</style>
