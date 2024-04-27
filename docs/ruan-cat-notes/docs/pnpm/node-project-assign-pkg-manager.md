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

## 用 corepack 自动升级最高版本的 pnpm

```bash
corepack use pnpm@latest
```

有疑惑 我现在很怀疑，能不能在 preinstall 这里加上该命令，用 node 环境去安装最高版本的 pnpm，自动去实现特定依赖的安装，包管理器的控制？
