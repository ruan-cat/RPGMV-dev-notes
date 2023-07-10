import { ref } from "vue";

export type Mode = "info" | "edit";

export const useMode = function () {
	const mode = ref<Mode>("info");

	function getMode() {
		return mode.value;
	}

	/** 参考资料 自定义类型守卫 */
	function isInfo(p: Mode): p is "info" {
		return (p as Mode) === "info";
	}

	function isEdit(p: Mode): p is "edit" {
		return (p as Mode) === "edit";
	}

	function switchMode() {
		if (isEdit(mode.value)) {
			mode.value = "info";
		}

		if (isInfo(mode.value)) {
			mode.value = "edit";
		}
	}

	return {
		mode,

		getMode,
		isInfo,
		isEdit,
		switchMode,
	};
};
