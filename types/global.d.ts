// 参考资料 https://blog.csdn.net/qq_37718797/article/details/120536817
declare module "*.vue" {
	import { defineComponent } from "vue";
	const Component: ReturnType<typeof defineComponent>;
	export default Component;
}
