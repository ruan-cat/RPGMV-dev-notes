/**
 * `Prettify` 帮助程序是一种实用程序类型，它采用对象类型并使悬停叠加更具可读性。
 * @see https://www.totaltypescript.com/concepts/the-prettify-helper
 */
export type Prettify<T> = {
	[K in keyof T]: T[K];
	// 本行忽略报错 改类型工具依赖该写法
	// eslint-disable-next-line ts/ban-types
} & {};

/**
 * 转换成 NumberLike 类型
 * @author f1-阮喵喵
 * @description
 * ### *设计理由*
 * 期望让一个数值类型的联合类型 变成`NumberLike`形式的类型
 */
export type ToNumberLike<T extends number> = T | `${T}`;
