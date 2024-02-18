<script lang="ts" setup>
import { ref, computed, watch } from "vue";

import { ElButton } from "element-plus";
</script>

<template>
	<section class="v1-root">
		<section class="container">
			<section class="progress_container"></section>

			<section class="circle active">1</section>
			<section class="circle">2</section>
			<section class="circle">3</section>
			<section class="circle">4</section>

			<ElButton class="btn"> 上一个 </ElButton>
			<ElButton class="btn"> 下一个 </ElButton>
		</section>
	</section>
</template>

<style lang="scss" scoped>
.v1-root {
}
</style>
