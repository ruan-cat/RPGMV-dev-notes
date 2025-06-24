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
