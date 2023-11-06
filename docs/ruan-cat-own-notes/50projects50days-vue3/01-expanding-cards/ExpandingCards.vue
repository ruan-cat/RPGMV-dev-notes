<script lang="ts" setup>
import { ref, computed, watch } from "vue";

type Item = {
	image: string;
};

/**
 * 随机图片接口
 * @description
 *
 * @see https://www.laoluowl.cn/archives/35
 */
const imageApi = [
	// 樱花随机二次元图片API
	"https://www.dmoe.cc/random.php",

	// 随机二次元图片API接口
	"https://api.vvhan.com/api/acgimg",
];

const image = computed(
	() => imageApi[Math.floor(Math.random() * imageApi.length)]
);

const items = ref<Item[]>([]);

function initItems() {
	items.value = [
		{
			image: image.value,
		},
	];
}
initItems();
</script>

<template>
	<section class="ExpandingCards-root">
		<h1>你好 这是 ExpandingCards</h1>

		<section class="container">
			<section class="item" @click="" v-for="item in items"></section>
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
