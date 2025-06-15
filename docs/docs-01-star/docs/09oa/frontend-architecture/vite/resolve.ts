const resolve = {
	alias: {
		"@": fileURLToPath(new URL("./src", import.meta.url)),
		components: fileURLToPath(new URL("./src/components", import.meta.url)),
		types: fileURLToPath(new URL("./src/types", import.meta.url)),
		views: fileURLToPath(new URL("./src/views", import.meta.url)),
		api: fileURLToPath(new URL("./src/apis", import.meta.url)),
		stores: fileURLToPath(new URL("./src/stores", import.meta.url)),
		router: fileURLToPath(new URL("./src/router", import.meta.url)),
		utils: fileURLToPath(new URL("./src/utils", import.meta.url)),
		models: fileURLToPath(new URL("./src/models", import.meta.url)),
	},
};
