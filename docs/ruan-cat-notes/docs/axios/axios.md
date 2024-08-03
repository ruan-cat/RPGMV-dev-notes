# axios

## 用 typescript 封装？

## 如何使用其类型？

## 1 版本更新细节？

## 拦截器和相关返回值的设计

axios 的拦截器，可以更改返回值，一般来说返回值是 AxiosResponse 类型的。

但是拦截器普遍的做法是，直接返回 data。对 AxiosResponse 解包，减少一层的 data。

::: details 拦截器返回解包后的 data

```ts {5}
client.addResponseInterceptor<HttpResponse>((response) => {
	const { data: responseData, status } = response;
	const { code, data, message: msg } = responseData;
	if (status >= 200 && status < 400 && code === 0) {
		return data;
	}
	throw new Error(msg);
});
```

- https://vscode.dev/github/vbenjs/vue-vben-admin/blob/main/apps/web-ele/src/api/request.ts#L55-L63

:::

这样的话，接口返回值也需要同步地做出更改。用强制类型转换来完成。

::: details 封装通用请求函数并强制类型转换

```ts {11}
class RequestClient {
	/**
	 * 通用的请求方法
	 */
	public async request<T>(url: string, config: AxiosRequestConfig): Promise<T> {
		try {
			const response: AxiosResponse<T> = await this.instance({
				url,
				...config,
			});
			return response as T;
		} catch (error: any) {
			throw error.response ? error.response.data : error;
		}
	}
}
```

- https://vscode.dev/github/vbenjs/vue-vben-admin/blob/main/packages/effects/request/src/request-client/request-client.ts#L218-L231

:::
