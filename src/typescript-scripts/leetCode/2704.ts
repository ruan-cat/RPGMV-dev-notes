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
