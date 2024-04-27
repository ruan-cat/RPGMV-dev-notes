<script>
// @ts-check
// 默认启用vscode提供的ts强类型检查

// 默认导入一揽子vue2.7内常用的组合式api。 prettier忽略本行。
// prettier-ignore
import { defineComponent, ref, computed, watch, nextTick, onMounted } from "vue";

// 默认导入来自lodash-es提供的常用工具。 prettier忽略本行。
// prettier-ignore
import { isArray, isUndefined, isString, isNumber, isNil, isEqual, toString, merge, cloneDeep } from "lodash-es";

/**
 * test
 * @author
 * @description
 */
export default defineComponent({
	name: "test",

	props: {
		fuck: {
			default: "",
		},
	},

	emits: [],

	components: {},

	setup(props, { attrs, slots, emit, expose }) {
		return {};
	},

	data() {
		return {};
	},

	computed: {},

	methods: {},

	watch: {},

	created() {},

	mounted() {},
});
</script>

<template>
	<section class="test-root"></section>
</template>

<style lang="scss" scoped>
.test-root {
}
</style>
