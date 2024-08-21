// 让本文件被定义为一个模块 允许使用顶层await
export {};

/** 等待函数 固定耗时 以便模拟异步接口请求 */
function wait() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(void 0);
		}, 1000);
	});
}

/** 一个异步函数 */
function asyncFun(query: string = "你是笨猪，哈哈哈哈") {
	const response = {
		data: {
			info: query,
		},
		msg: "success",
		code: 200,
	};

	type Response = typeof response;

	return new Promise<Response>(async (resolve) => {
		await wait();
		resolve(response);
	});
}

/** 一个具体的对象 */
const formState = await asyncFun().then((res) => {
	return res.data;
});

console.log(" formState  ", formState);
