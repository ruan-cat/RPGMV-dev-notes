<script lang="ts" setup>
import { useSingleton } from "./use-singleton.js";
import UseComputedBugChild from "./UseComputedBugChild.vue";

const { isAddComputed, singletonData } = useSingleton();
</script>

<template>
	<section class="UseComputedBug-root">
		<h3>外部组件</h3>

		<!-- <el-tag type="danger" size="normal"  effect="dark" closable @close=""></el-tag> -->

		<el-tag type="danger" size="normal" effect="dark">
			{{ singletonData }}
			{{ isAddComputed }}
		</el-tag>

		<UseComputedBugChild></UseComputedBugChild>
	</section>
</template>

<style lang="scss" scoped>
.UseComputedBug-root {
}
</style>
