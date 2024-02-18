import { spawnSync } from "node:child_process";

const packageManager = "pnpm";

const registry = spawnSync(`${packageManager} config get registry`, {
	shell: true,
})
	.stdout.toString()
	// 去掉多余的换行符
	.replace(/[\r\n]/g, "")
	.replace(/\/?$/, "/");

// .replace(/\/?$/, "/");
console.log(`Using ${packageManager} registry: ${registry}`);
console.log("registry = ", registry);

// const res = "https://registry.npmmirror.com/\n".replace(/\/?$/, "/");
// console.log(" ? = res ", res);
