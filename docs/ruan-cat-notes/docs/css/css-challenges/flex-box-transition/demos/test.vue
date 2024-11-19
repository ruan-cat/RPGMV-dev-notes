<template>
	<div class="container">
		<div class="main-content" :style="{ width: mainContentWidth + 'px' }">
			<!-- 左侧主界面内容 -->
			<!-- 这里可以放置您的主界面内容 -->
			<button @click="toggleSidebar" class="toggle-button">Toggle Sidebar</button>
		</div>
		<transition name="slide">
			<div v-if="showSidebar" class="sidebar">
				<!-- 右侧侧边栏内容 -->
				<!-- 这里可以放置您的侧边栏内容 -->
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "SidebarComponent",
	setup() {
		const showSidebar = ref(false);
		const mainContentWidth = ref(window.innerWidth);

		const toggleSidebar = () => {
			showSidebar.value = !showSidebar.value;
		};

		return {
			showSidebar,
			mainContentWidth,
			toggleSidebar,
		};
	},
});
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	height: 100vh;
	overflow: hidden;

	.main-content {
		transition: width 0.3s ease; /* 添加过渡效果 */
		background-color: #f2f2f2;
		flex: 1;
		padding: 20px;
	}

	.sidebar {
		width: 300px;
		background-color: #e0e0e0;
		padding: 20px;
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: all 0.3s ease; /* 添加过渡效果 */
	}

	.slide-enter,
	.slide-leave-to {
		transform: translateX(100%);
	}

	.toggle-button {
		position: fixed;
		top: 20px;
		right: 20px;
		z-index: 999;
	}
}
</style>
