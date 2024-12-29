<script lang="ts" setup>
import { ref, computed, watch } from "vue";

import { ElInput } from "element-plus";

const inputValue = ref();

function change(event) {
	console.log(" ?  ", event);
	// let file = event.target.files;
	// console.log(file);
}

// TODO: 待实现
</script>

<template>
	<section class="webkitdirectory-demo-root">
		<!-- <ElInput v-model="inputValue" placeholder="请输入内容" type="file" webkitdirectory @change="change($event)" /> -->
		<input placeholder="请输入内容" type="file" webkitdirectory @change="change($event)" />
	</section>
</template>

<style lang="scss" scoped>
.webkitdirectory-demo-root {
}
</style>
