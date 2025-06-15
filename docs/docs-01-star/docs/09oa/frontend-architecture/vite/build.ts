const build = {
	assetsDir: "static",
	chunkSizeWarningLimit: 1000,
	rollupOptions: {
		output: {
			manualChunks(id) {
				if (id.includes("node_modules")) {
					const regex = /.pnpm\/(.*?)\//;
					// const res = id.toString().split("node_modules/")[1].split("/")[0].toString();
					const ids = id.toString().split("node_modules/");
					const targetId = ids[1];
					const chunkNames = targetId.split("/");
					// 如果等于pnpm，说明是pnpm的包，需要取第二个
					if (chunkNames[0] === ".pnpm") {
						// console.log("in  chunkNames[0]", chunkNames[0]);
						return chunkNames[1];
					} else {
						return chunkNames[0];
					}
				}
			},
		},
		external: new RegExp("views/sample/.*"),
	},
};
