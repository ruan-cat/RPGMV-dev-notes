interface A<T = any> {
	key: keyof T;
}

interface B<T = any> {
	key: string & keyof T;
}

interface SomeDto {
	name: string;
	age: number;
}

export const a: A<SomeDto> = {
	key: "age",
};

export const b: B<SomeDto> = {
	key: "age",
};
