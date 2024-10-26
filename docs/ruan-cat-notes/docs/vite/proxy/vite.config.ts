import { type UserConfig, type ConfigEnv, loadEnv, defineConfig } from "vite";

/**
 * 用全量导入的方式 获取类型
 * 这些类型不能写成export导入的形式，会导致全局类型声明失效
 *
 * 也可以等效地用 三斜线表达式 实现全量导入
 * <reference types="./types/env.shim.d.ts" />
 */
import "./types/env.shim.d.ts";

// https://vitejs.dev/config/
export default defineConfig(function ({ mode }: ConfigEnv): UserConfig {
	// 提供类型声明 便于得到使用提示
	const env = loadEnv(mode, process.cwd()) as unknown as ImportMetaEnv;

	const VITE_proxy_prefix = env.VITE_proxy_prefix;
	const VITE_APP_API_URL = env.VITE_base_url;
	const VITE_app_port = env.VITE_app_port;

	return {
		server: {
			// 应用端口
			port: Number(VITE_app_port),
			proxy: {
				[VITE_proxy_prefix]: {
					changeOrigin: true,
					// 接口地址
					target: VITE_APP_API_URL,
					rewrite: (path) => path.replace(new RegExp("^" + VITE_proxy_prefix), ""),
				},
			},
		},
	};
});
