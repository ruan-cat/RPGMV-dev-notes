// export

function leetCode_2704_expect(val: unknown) {
	const source = val;

	function template(params: {
		val: unknown;
		judge: (targetVal: unknown) => boolean;
		errMsg: string;
	}) {
		const target = params.val;
		try {
			if (params.judge(target)) {
				return true;
			} else {
				throw new Error(params.errMsg);
			}
		} catch (error) {}
	}

	return {
		toBe(val: unknown) {
			return template({
				judge: (targetVal) => targetVal === source,
				errMsg: "Not Equal",
				val,
			});
		},

		notTobe(val: unknown) {
			return template({
				judge: (targetVal) => targetVal !== source,
				errMsg: "Equal",
				val,
			});
		},
	};
}

const a: unknown = 1;

// const is = (p = "") => [+p, "" + p].includes;
// 属性 在类型“(string | number)[]”上不存在。是否需要更改目标库? 请尝试将 “lib” 编译器选项更改为“es2016”或更高版本。
