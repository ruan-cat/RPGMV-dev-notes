function sayHello_1() {
	const res = "你好呜！（萝卜塔猫猫叫）";
	return new Promise((resolve, reject) => {
		resolve(res);
	});
}

async function sayHello_2() {
	const res = "你好呜！（萝卜塔猫猫叫）";
	return res;
}

async function main() {
	const res1 = await sayHello_1();
	const res2 = await sayHello_2();

	console.log(" ?  res1 ", res1);
	console.log(" ?  res2 ", res2);
}

main();
