<script lang="ts" setup>
import { ref, computed, watch } from "vue";

type Item = {
	image: string;
};

const items = ref<Item[]>([{}]);
</script>

<template>
	<section class="ExpandingCards-root">
		<h1>你好 这是 ExpandingCards</h1>

		<section class="container">
			<section class="item"></section>
		</section>
	</section>
</template>

<style lang="scss" scoped>
.ExpandingCards-root {
	.container {
		.item {
		}
	}
}
</style>
