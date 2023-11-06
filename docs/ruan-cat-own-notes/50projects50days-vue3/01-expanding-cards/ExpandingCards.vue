<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { v4 as uuidv4 } from "uuid";

import axios from "axios";

/** 遍历的图片项 */
type Item = {
	image: string;

	id: string;
};

/**
 * 随机图片接口
 * @description
 *
 * @see https://www.laoluowl.cn/archives/35
 * @see https://blog.csdn.net/SectSnow/article/details/115835711
 * @see https://www.dmoe.cc/
 */
const imageApi = [
	// 樱花随机二次元图片API
	"https://www.dmoe.cc/random.php",
	// "https://www.dmoe.cc/random.php?return=json",

	// 随机二次元图片API接口
	"https://api.vvhan.com/api/acgimg",
];

const image = computed(
	// () => imageApi[Math.floor(Math.random() * imageApi.length)]
	() => imageApi[0]
);

const items = ref<Item[]>([]);

const itemNumber = 5;

function initItems() {
	items.value = new Array(itemNumber).fill(1).map((elm) => {
		return {
			image: image.value,
			id: uuidv4(),
		};
	});
}
initItems();
</script>

<template>
	<section class="ExpandingCards-root">
		<section class="container">
			<section
				class="item"
				@click=""
				v-for="item in items"
				:key="item.id"
				:style="{ backgroundImage: `url(${item.image})` }"
			></section>
		</section>
	</section>
</template>

<style lang="scss" scoped>
.ExpandingCards-root {
	// 默认占据一半可视高度
	height: 50vh;
	width: 100%;

	.container {
		height: 100%;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;

		.item {
			flex: 1 0 auto;
			height: 100%;

			background-size: 100% 100%;
			background-repeat: no-repeat;
		}
	}
}
</style>
