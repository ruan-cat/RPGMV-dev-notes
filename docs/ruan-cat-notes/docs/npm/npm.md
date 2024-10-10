# npm

## 清空缓存

怎么清空项目的 node 缓存的？是用`npm cache clean --force`还是`npm cache verify`？

怎么清空项目的本地缓存？像这样的东西用什么命令可以快速清空？

![2023-02-20-11-18-58](https://raw.githubusercontent.com/RuanZhongNan/img-store/main/img/2023-02-20-11-18-58.png)

## 输出全局安装的依赖包 npm ls -g

- https://docs.npmjs.com/cli/v6/commands/npm-ls

指定为 json 格式输出

```bash
npm ls -g --json=true
```

查询指定深度，目前仅查询第一层即可。

```bash
npm ls -g --json=true --depth=0
```

## funding ？

```bash
90 packages are looking for funding
  run `npm fund` for details
```

npm 包怎么标记自己为 looking for funding ？

TODO: 如果自己也想让自己的包标记为 funding，对外宣布这些依赖包寻求资助，该怎么实现呢？

与 2023-07-04 号标记的待办任务。现在（2024-10-11）有能力发包了，标记依赖包寻求资助是很容易的。小事情，有空就做。

## `Life Cycle Scripts` npm 命令的生命周期

- https://docs.npmjs.com/cli/v6/using-npm/scripts

我们经常使用的 preinstall 就是一个生命周期脚本。可以用此命令来约束整个项目，常见用法是用此命令来约束项目的包管理器。

比如以下常见配置：

```json
{
	"scripts": {
		"preinstall": "npx only-allow pnpm"
	},
	"packageManager": "pnpm@8.12.0"
}
```

[点此了解本笔记关于 node 项目包管理器约束的文章](../pnpm/node-project-assign-pkg-manager.md)。

## 快速查询包的版本和相关信息

快速地使用命令行查询包的信息，避免直接在浏览器内访问 npm 官网，查询比较慢。

- https://docs.npmjs.com/cli/v10/commands/npm-view

```bash
npm v you-package-name
```

### 举例

```bash
npm v vercel

# pnpm也能够支持该命令简写
pnpm v vercel
```
