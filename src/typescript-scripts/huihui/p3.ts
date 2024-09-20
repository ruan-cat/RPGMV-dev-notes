export type Fucker = {
	name: string;
	money: number;
};
export interface IFucker {
	name: string;
	money: number;
}

// export type ParamsArraySetter<T> = {
// 	list: Array<T>;
// 	key: keyof T;
// 	value: T[keyof T];
// 	index: number;
// };

function handle<K extends keyof IFucker>(list: Array<IFucker>, index: number, key: K, value: IFucker[K]) {
	list[index][key] = value;
}
