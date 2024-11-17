// 参考资料 https://blog.csdn.net/qq_37718797/article/details/120536817
// declare module "*.vue" {
// 	import { defineComponent } from "vue";
// 	const Component: ReturnType<typeof defineComponent>;
// 	export default Component;
// }

// 从vben项目内抄的 尝试实现对vue文件的类型推断
declare module "*.vue" {
	import { DefineComponent } from "vue";
	const Component: DefineComponent<{}, {}, any>;
	export default Component;
}

/**
 * @see https://github.com/unplugin/unplugin-vue-markdown#typescript-shim
 */
// declare module "*.md" {
// 	import type { ComponentOptions } from "vue";
// 	const Component: ComponentOptions;
// 	export default Component;
// }
