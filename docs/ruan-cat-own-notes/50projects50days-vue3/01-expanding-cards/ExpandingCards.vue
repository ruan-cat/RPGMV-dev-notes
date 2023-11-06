<script lang="ts" setup>
import { ref, computed, watch, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";
import { ElImage } from "element-plus";

import axios from "axios";

/** @see https://www.dmoe.cc/ */
type GetImageResponse = {
	code: string;
	imgurl: string;
	width: string;
	height: string;
};

/** 遍历的图片项 */
type Item = {
	image: string;
	id: string;
};

/**
 * 随机图片接口 数据集
 * @description
 *
 * @see https://www.laoluowl.cn/archives/35
 * @see https://blog.csdn.net/SectSnow/article/details/115835711
 * @see https://www.dmoe.cc/
 */
const imageApiList = [
	// 樱花随机二次元图片API
	// "https://www.dmoe.cc/random.php",
	"https://www.dmoe.cc/random.php?return=json",

	// 随机二次元图片API接口
	"https://api.vvhan.com/api/acgimg",
];

const imageApi = imageApiList[0];

async function getImage() {
	return await axios.get<GetImageResponse>(imageApi).then((response) => {
		return response;
	});
}

const items = ref<Item[]>([]);

const itemNumber = 5;

/** `<el-image>` 的 preview-src-list 配置 */
const previewSrcList = computed(() => items.value.map((elm) => elm.image));

async function initItems() {
	const asyncList = new Array(itemNumber).fill(1).map((elm) => {
		return getImage();
	});

	await Promise.all(asyncList).then((response) => {
		items.value = response.map((res) => {
			return {
				image: res.data.imgurl,
				id: uuidv4(),
			};
		});
	});
}

onMounted(async () => {
	await initItems();
});
</script>

<template>
	<section class="ExpandingCards-root">
		<section class="container">
			<!-- @click="" -->
			<el-image
				class="item"
				v-for="item in items"
				:key="item.id"
				fit="cover"
				loading="lazy"
				:src="item.image"
				:preview-src-list="previewSrcList"
			>
				<template #error> </template>
			</el-image>

			<!-- <section
				class="item"
				@click=""
				v-for="item in items"
				:key="item.id"
				:style="{ backgroundImage: `url(${item.image})` }"
			></section> -->
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
			flex: 1 0;
			height: 100%;

			/**
				参考资料 https://blog.csdn.net/m0_47097190/article/details/131306821 
				使用背景图片时 样式设置才有效
			 */
			// 	// 保持原有比例
			// 	background-size: cover;
			// 	// 不重复
			// 	background-repeat: no-repeat;
			// 	// 图片居中
			// 	background-position: center;
		}
	}
}
</style>
