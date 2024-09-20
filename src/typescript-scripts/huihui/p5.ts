export type Fucker = {
	name: string;
	money: number;
};
export interface IFucker {
	name: string;
	money: number;
}

export type FilterType = "contain" | "exclude" | "congruence";
export type FilterTarget = "FullLink" | "Domain";
export type FilterRule = {
	type: FilterType;
	target: FilterTarget;
	value: string;
};
export interface IFilterRule {
	type: FilterType;
	target: FilterTarget;
	value: string;
}

export type ParamsArraySetter<T extends { [k: string]: unknown }> = {
	list: Array<T>;
	key: keyof T;
	value: T[keyof T];
	index: number;
};
export type ArraySetter<T extends { [k: string]: unknown }> = (params: ParamsArraySetter<T>) => void;

function handle<T extends { [k: string]: unknown }>({ list, key, value, index }: ParamsArraySetter<T>) {
	list[index][key] = value;
}

handle<Fucker>({ index: 1, key: "money", list: [], value: "q" });
handle<IFucker>({ index: 1, key: "money", list: [], value: "q" });
handle<FilterRule>({ index: 1, key: "target", list: [], value: "q" });
handle<IFilterRule>({ index: 1, key: "money", list: [], value: "q" });

// const handle: ArraySetter<Fucker> = function ({ index, key, list, value }) {
// 	list[index][key] = value;
// };
