# 用 pnpm 实现 monorepo 单仓架构

## 尝试先初始化一个单仓项目

- https://juejin.cn/post/7145010706063523854

## 单仓下不能使用 vscode 来批量安装推荐插件了 ？

https://zhuanlan.zhihu.com/p/382536075

## 批量删除 `node_modules` 文件夹

在单仓项目内，如何批量删除 node_modules 依赖？有时候需要重装依赖的。

这里有很多种方案，介绍其中一种：

```bash
pnpm -r exec rm -rf node_modules
```

- https://stackoverflow.com/questions/70030643/how-to-delete-all-node-modules-from-all-packages-in-npm-7-workspace-monorepo#comment137536515_70030644

1. 删除前

![2024-04-30-16-45-25](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-04-30-16-45-25.png)

2. 删除后

![2024-04-30-16-49-56](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-04-30-16-49-56.png)

确实有文件被删除了。

### 仍有一些缺点

上述方案仍旧有一些缺点

#### 基于工作区的命令，而不是面向整个项目的命令

`pnpm -r xxx` 命令是 --recursive 的简写，指的是遍历工作区，在工作区内执行命令。现在的命令只能面向工作区，却忽略了项目根目录，还是有点缺漏，不方便。

- https://pnpm.io/zh/cli/recursive

#### 不得不在 git bash 界面内执行

命令 `rm -rf node_modules` 直接在 vscode 提供的 powershell 终端内，不能直接运行的，只能在 `git bash` 内执行命令。

## 项目存在大量重复的，通用性命令

在 monorepo 实践中，发现有很多这种重复的，冗余的命令。有什么方式实现批量设置么？

```json
{
	"clear": "rimraf dist .turbo .vercel .cache .temp",
	"rm:node_modules": "rimraf node_modules pnpm-lock.yaml"
}
```

pnpm 的-r 参数是否适合呢？
