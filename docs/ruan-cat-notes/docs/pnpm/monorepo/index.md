# 用 pnpm 实现 monorepo 单仓架构

经过长时间的学习和实践，目前（2025-5-4）已经很熟悉用 pnpm+monorepo 的方式来组织项目了。

## 快速入门

可以用 [turborepo](https://turborepo.com/docs/getting-started/examples) 的例子来快速搭建一个 monorepo 项目，并同时学习 turbo 的任务调度。

也可以看这个[简短的视频](https://www.bilibili.com/video/BV1Aj411h7F2/)来学习，我当初（2023-09-27）就是看这个视频入门 monorepo 的。

## 简单概述

组织起来很简单。

1. 写 `pnpm-workspace.yaml` 工作区配置文件。
2. 用特定的语法来安装依赖。

没了，就这样。

## 其他参考资料

- [`从零单排：使用pnpm创建monorepo`](https://juejin.cn/post/7145010706063523854)

## 批量删除 `node_modules` 文件夹

在单仓项目内，如何批量删除 node_modules 依赖？有时候需要重装依赖的。

这里有很多种方案，介绍其中一种：

```bash
pnpm -r exec rm -rf node_modules
```

- https://stackoverflow.com/questions/70030643/how-to-delete-all-node-modules-from-all-packages-in-npm-7-workspace-monorepo#comment137536515_70030644

1. 删除前

![2024-04-30-16-45-25](https://gh-img-store.ruan-cat.com/img/2024-04-30-16-45-25.png)

2. 删除后

![2024-04-30-16-49-56](https://gh-img-store.ruan-cat.com/img/2024-04-30-16-49-56.png)

确实有文件被删除了。

### 仍有一些缺点

上述方案仍旧有一些缺点

#### 基于工作区的命令，而不是面向整个项目的命令

`pnpm -r xxx` 命令是 --recursive 的简写，指的是遍历工作区，在工作区内执行命令。现在的命令只能面向工作区，却忽略了项目根目录，还是有点缺漏，不方便。

- https://pnpm.io/zh/cli/recursive

#### 不得不在 git bash 界面内执行

命令 `rm -rf node_modules` 直接在 vscode 提供的 powershell 终端内，不能直接运行的，只能在 `git bash` 内执行命令。

### rimraf 匹配全部包

- https://juejin.cn/post/7117897323014783013#heading-41

```json
{
	"scripts"{
		"clearAllNm": "rimraf node_modules pnpm-lock.yaml && rimraf */**/node_modules"
	}
}
```

### rimraf 的 glob 语法

实测发现，使用显性的 -g 指令可以用 glob 语法完成匹配并删除。

- https://github.com/isaacs/rimraf/blob/main/README.md#command-line-interface

在 window 系统内，加上**单引号**。

```bash
rimraf -g '**/{node_modules,package-lock.json,pnpm-lock.yaml,yarn.lock}'
```

::: warning

注意，即使在 node 内运行命令，也要增加**单引号**。

:::

## 项目存在大量重复的，通用性命令

在 monorepo 实践中，发现有很多这种重复的，冗余的命令。有什么方式实现批量设置么？

```json
{
	"clear": "rimraf dist .turbo .vercel .cache .temp",
	"rm:node_modules": "rimraf node_modules pnpm-lock.yaml"
}
```

pnpm 的 -r 参数是否适合呢？不适合，这个参数是递归地执行 pnpm 的命令，不能执行用户定义的命令。
