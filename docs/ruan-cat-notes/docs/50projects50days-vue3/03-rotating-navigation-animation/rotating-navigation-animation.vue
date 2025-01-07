<script lang="ts" setup>
import { ref, computed, watch } from "vue";
</script>

<template>
	<section class="rotating-navigation-animation-root">
		<h2>wefwefg</h2>

		<div class="container">
			<!-- 旋转的内容... -->
			<div class="circle-container">
				<div class="circle">
					<button id="close">
						<i class="fas fa-times"></i>
					</button>
					<button id="open">
						<i class="fas fa-bars"></i>
					</button>
				</div>
			</div>

			<div class="content">
				<!-- 文章内容... -->
			</div>
		</div>

		<nav>
			<ul>
				<!-- 导航项... -->
			</ul>
		</nav>
	</section>
</template>

<style lang="scss" scoped>
.rotating-navigation-animation-root {
}
</style>
