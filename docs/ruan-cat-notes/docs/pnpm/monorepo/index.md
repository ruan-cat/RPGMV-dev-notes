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

## monorepo 带来的挑战

1. 批量删除依赖文件？
2. 子包安装别的子包？
3. 根包如何安装依赖？
4. 子包如何安装依赖？
5. tsconfig.json 如何配置？

## 其他参考资料

- [`从零单排：使用pnpm创建monorepo`](https://juejin.cn/post/7145010706063523854)
