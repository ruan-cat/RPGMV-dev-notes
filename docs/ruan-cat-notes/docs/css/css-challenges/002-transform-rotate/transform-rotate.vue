<script lang="ts" setup>
import { ref, computed, watch } from "vue";

import { ElButton } from "element-plus";
</script>

<template>
	<section class="transform-rotate-root">
		<section class="circle"></section>

		<section class="btns">
			<ElButton type="danger"> 减少 </ElButton>
			<ElButton type="success"> 增加 </ElButton>
			<ElButton type="primary"> 旋转 </ElButton>
		</section>
	</section>
</template>

<style lang="scss" scoped>
.transform-rotate-root {
	width: 100%;
	height: auto;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;

	.circle {
		$size: 20rem;
		background-color: pink;
		width: $size;
		height: $size;
		border-radius: 50%;
	}

	.btns {
	}
}
</style>
