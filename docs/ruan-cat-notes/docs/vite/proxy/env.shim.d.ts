/// <reference types="vite/client" />

interface ImportMetaEnv {
	/**
	 * 应用端口
	 * @example
	 * "8080"
	 */
	VITE_app_port: `${number}`;

	/**
	 * API 基础路径(代理前缀)
	 * @example
	 * "/dev-api"
	 */
	VITE_proxy_prefix: string;

	/**
	 * API 地址。即接口请求最终的服务器地址。
	 * @example
	 * "https://pcapi-xiaotuxian-front-devtest.itheima.net"
	 */
	VITE_base_url: string;

	/** 是否开启 Mock 服务 */
	VITE_MOCK_DEV_SERVER: `${boolean}`;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
