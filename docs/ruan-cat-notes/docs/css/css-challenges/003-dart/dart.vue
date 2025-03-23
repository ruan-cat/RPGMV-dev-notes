<!-- #region snippet -->
<script lang="ts" setup>
import { ref, computed, watch } from "vue";

/** 当前累计旋转的角度 */
const rotation = ref(0);

function rotateDart() {
	rotation.value += 90;
}
</script>
<!-- #endregion snippet -->

<template>
	<section class="dart-root">
		<section class="dart-box" :style="{ transform: `rotate(${rotation}deg)` }">
			<section class="dart-heart" @click="rotateDart()"></section>
			<section class="dart-blade" v-for="num in 4" :key="num" :style="{ '--item-index': num }">
				{{ num }}
			</section>
		</section>
	</section>
</template>

<style lang="scss" scoped>
// 旋转核心
$heartSize: 4rem;
// 盒子
$dartBoxSize: 25rem;
// 刀片
$bladeSize: ($dartBoxSize - $heartSize) * 0.5;

@mixin do-transition {
	transition: all 0.28s ease-in-out;
}

.dart-root {
	display: flex;
	align-items: center;
	justify-content: center;
	height: fit-content;
	width: 100%;

	.dart-box {
		position: relative;
		height: $dartBoxSize;
		width: $dartBoxSize;

		@include do-transition();

		.dart-heart {
			height: $heartSize;
			width: $heartSize;
			background-color: rebeccapurple;

			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			cursor: pointer;
		}

		.dart-blade {
			height: $heartSize;
			width: $bladeSize;

			background-color: rosybrown;
			// border: 3px black solid;

			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) rotate(calc(90deg * var(--item-index)))
				translate(-(($bladeSize + $heartSize) * 0.5), 0);

			clip-path: ellipse(100% 100% at 100% 0%);
		}
	}
}
</style>
