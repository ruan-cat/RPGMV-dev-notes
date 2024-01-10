# 在 node 项目内约束包管理器

这里特别说明如何约束 node 项目的包管理器为 pnpm

```json
{
	"scripts": {
		"preinstall": "npx only-allow pnpm"
	},
	"packageManager": "pnpm@8.12.0"
}
```
