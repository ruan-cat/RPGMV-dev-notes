export type FilterType = "contain" | "exclude" | "congruence";
export type FilterTarget = "FullLink" | "Domain";
export interface FilterRule {
	// good
	type: FilterType;
	target: FilterTarget;

	// bad
	// type: FilterType | string;
	// target: FilterTarget | string;

	value: string;
}

/**
 * 参考资料
 * https://segmentfault.com/q/1010000020263396
 * https://stackoverflow.com/a/57022514/18167453
 */
function handle<T extends keyof FilterRule>(
	value: FilterRule[T],
	index: number,
	key: T
) {
	const data: FilterRule[] = [];
	data[index][key] = value;
}

// type Prettify<T> = {
// 	[K in keyof T]: T[K];
// } & {};
// type KeyOfFilterRule = Prettify<keyof FilterRule>;
// type ValueOfFilterRule = Prettify<FilterRule[KeyOfFilterRule]>;
// type FilterRuleV = FilterRule[KeyOfFilterRule];
