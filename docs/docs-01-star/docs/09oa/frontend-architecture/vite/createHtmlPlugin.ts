createHtmlPlugin({
	inject: {
		data: {
			title: getViteEnv(mode, "VITE_APP_TITLE"),
		},
	},
});
