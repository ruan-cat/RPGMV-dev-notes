import { defineConfig } from "vite";

// @ts-ignore
import { tsAlias } from "@ruan-cat/vite-plugin-ts-alias";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	return {
		plugins: [
			tsAlias({
				/**
				 * tsconfig name, optional.
				 * @default 'tsconfig.json'
				 */
				tsConfigName: "tsconfig.app.json",
			}),
		],
	};
});
