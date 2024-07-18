type Conditions = Array<(...args: unknown[]) => boolean>;

/**
 * 是否每一个条件函数都满足？
 * @description
 * ### 设计理由
 * 旨在于封装这样的代码段
 * ```js
 * const conditions = [
 * 	() => !isEqual(nAssetRecord, oAssetRecord),
 * 	() => !isEqual(nAssetRecord, defPropsAssets),
 * 	() => isEdit.value || isInfo.value,
 * ];
 * conditions.every((condition) => condition())
 * ```
 */
export function isConditionsEvery(conditions: Conditions) {
	return conditions.every((condition) => condition());
}

export function isConditionsSome(conditions: Conditions) {
	return conditions.some((condition) => condition());
}
