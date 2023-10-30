/** 判断阮喵喵是否参与impart？ */
async function ajax3() {
	return true;
}

/** 查询阮喵喵涩涩值 */
async function ajax2() {
	return await ajax3();
}

async function ajax1() {
	try {
		return await ajax2();
	} catch (error) {
		console.log(error);
	}
}

async function main() {
	return await ajax1();
}

async function runner() {
	await main();
}
runner();
