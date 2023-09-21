type FilterType = "contain" | "exclude" | "congruence";
type FilterTarget = "FullLink" | "Domain";
interface FilterRule {
	type: FilterType;
	target: FilterTarget;
	value: string;
}
type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};
type MyType = Prettify<keyof FilterRule>;

function