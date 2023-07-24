import { ref, computed } from "vue";

import { cloneDeep } from "lodash-es";

const singletonData = {
	/** 业务id 各个业务提供的主键id */
	businessKey: "",

	/** 任务id */
	taskId: "",

	isAdd: false,
};
export function useSingleton() {
	const innerData = ref(cloneDeep(singletonData));

	const isAddComputed = computed(() => innerData.value.isAdd);

	return {
		singletonData: innerData,
		isAddComputed,
	};
}
