# rolldown-vite 过渡版本的 vite

- https://voidzero.dev/posts/announcing-rolldown-vite
- https://vite.dev/guide/rolldown.html

根据文章可知，rolldown-vite，可以加快 vite 打包速度。

去小项目内配置这些内容，试试看能不能提速。

```json
{
	"devDependencies": {
		"vite": "npm:rolldown-vite@latest"
	},
	"pnpm": {
		"overrides": {
			"vite": "npm:rolldown-vite@latest"
		}
	}
}
```

## 目前（2025-6-25）还不行

![2025-06-25-18-38-14](https://gh-img-store.ruan-cat.com/img/2025-06-25-18-38-14.png)

```bash
$env:RUST_BACKTRACE=1; pnpm dlx rolldown-vite build --configLoader runner
```

mdd
