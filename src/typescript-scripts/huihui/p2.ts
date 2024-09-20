export type FilterType = "contain" | "exclude" | "congruence";
export type FilterTarget = "FullLink" | "Domain";
export interface FilterRule {
	type: FilterType;
	target: FilterTarget;
	value: string;
}

export type Fucker = {
	name: string;
	money: number;
};
export interface IFucker {
	name: string;
	money: number;
}

export type ParamsArraySetter<
	// T extends Record<string, unknown>
	T,
	// K extends keyof T = keyof T
> = {
	list: Array<T>;
	key: keyof T;
	// value: { [k in keyof T]-?: T[k] }[keyof T];
	// value: T[K];
	value: T[keyof T];
	index: number;
};
// export declare function arraySetter<T>(
// 	params: ParamsArraySetter<
// 		T extends Record<string, unknown> ? Record<string, unknown> : never
// 	>
// ): void;
// export interface ArraySetter<T extends Record<string, unknown>> {
// 	arraySetter: typeof arraySetter;
// }
export interface ArraySetter<
	// T extends Record<string, unknown>
	T,
> {
	(params: ParamsArraySetter<T>): void;
}

const handler: ArraySetter<Fucker> = function ({ index, key, list, value }) {
	list[index][key] = value;
	return;
};
