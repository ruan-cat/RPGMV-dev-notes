export type Fucker = {
	name: string;
	money: number;
};
export interface IFucker {
	name: string;
	money: number;
}

export type ParamsArraySetter<T extends { [k: string]: unknown }> = {
	list: Array<T>;
	key: keyof T;
	value: T[keyof T];
	index: number;
};
export type ArraySetter<T extends { [k: string]: unknown }> = (
	params: ParamsArraySetter<T>
) => void;

// function handle<T extends { [k: string]: unknown }>(
// 	list: Array<T>,
// 	index: number,
// 	key: keyof T,
// 	value: T[keyof T]
// ) {
// 	list[index][key] = value;
// }

const handle: ArraySetter<Fucker> = function ({ index, key, list, value }) {
	list[index][key] = value;
};
