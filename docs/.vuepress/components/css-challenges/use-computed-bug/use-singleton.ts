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
	// 在组合式api中，每次执行一次本函数 都会生成唯一的一个实例 这会实现mixins混入生成独立的实例。
	// const innerData = ref(cloneDeep(singletonData));
	// 为了实现全局单例，不应该实现克隆。
	// 组合式api相当于每次都执行的一个工厂函数。
	const innerData = ref(singletonData);

	const isAddComputed = computed(() => innerData.value.isAdd);

	return {
		singletonData: innerData,
		isAddComputed,
	};
}
