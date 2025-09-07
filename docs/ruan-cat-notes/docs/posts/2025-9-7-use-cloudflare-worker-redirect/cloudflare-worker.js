/**
 * Cloudflare Worker 域名重定向脚本
 * 重定向到指定的掘金用户页面
 */

export default {
	async fetch(request, env, ctx) {
		// 目标重定向地址
		const targetUrl = "https://juejin.cn/user/2406144257559271/posts";

		try {
			// 获取请求的URL
			const requestUrl = new URL(request.url);

			// 构建重定向响应
			const response = new Response(null, {
				status: 301, // 永久重定向
				headers: {
					Location: targetUrl,
					"Cache-Control": "public, max-age=86400", // 缓存24小时
					"X-Redirect-Reason": "Domain redirect to Juejin profile",
				},
			});

			return response;
		} catch (error) {
			// 错误处理：如果重定向失败，返回错误页面
			return new Response(
				`<!DOCTYPE html>
        <html>
        <head>
          <title>Redirect Error</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1>重定向错误</h1>
          <p>无法完成重定向，请直接访问：<a href="${targetUrl}">${targetUrl}</a></p>
          <p>错误信息：${error.message}</p>
        </body>
        </html>`,
				{
					status: 500,
					headers: {
						"Content-Type": "text/html; charset=utf-8",
					},
				},
			);
		}
	},
};
