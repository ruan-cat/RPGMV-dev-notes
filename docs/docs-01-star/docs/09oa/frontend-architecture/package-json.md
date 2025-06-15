# package.json

本文件是架构中重头戏，这控制了整个 node 项目非常多的行为。

这里介绍各种命令、和其他没见过的字段。

## 大家没怎么见过字段

### 软性的环境版本声明

```json
{
	"packageManager": "pnpm@9.5.0",
	"engines": {
		"node": ">=20.15.1",
		"vscode": "^1.22.0",
		"pnpm": ">=9.5.0"
	}
}
```

### cz 初始化配置

这里写的是 git 目录文件夹相对于前端项目目录的位置。

我们前端目录，距离项目的 git 根目录是差了一个文件夹的，即 oa-frontend。

因此要特殊处理。

```json
{
	"config": {
		"commitizen": {
			"path": "oa-frontend/node_modules/cz-git"
		}
	}
}
```

## 额外封装的命令

### preinstall 安装前的前置命令

```bash
npx only-allow pnpm && npm run corepack:pnpm
```

### 格式化

```json
{
	"lint:eslint": "eslint . --fix",
	"format:prettier": "prettier --write ."
}
```

### 基于 vercel 的部署

```json
{
	"deploy-vercel": "node --import=tsx ./scripts/vercel-deploy-tool.ts"
}
```

### 删除类型声明文件

```json
{
	"rm:types": "node --import=tsx ./scripts/del-types.ts"
}
```

### 运行前的命令

```json
{
	"predev": "npm run rm:types"
}
```
