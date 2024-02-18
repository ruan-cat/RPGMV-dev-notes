import { spawnSync } from "node:child_process";

const packageManager = "pnpm";

const registry = spawnSync(`${packageManager} config get registry`, {
	shell: true,
})
	.stdout.toString()
	// 去掉多余的换行符
	.replace(/[\r\n]/g, "")
	.replace(/\/?$/, "/");

const registry1 = spawnSync(`${packageManager} config get registry`, {
	shell: true,
}).stdout.toString();

// .replace(/\/?$/, "/");
console.log(`Using ${packageManager} registry: ${registry}`);
console.log(" ? = registry1 ", registry1);

const res = "https://registry.npmmirror.com/\n".replace(/\/?$/, "/");
console.log(" ? = res ", res);
