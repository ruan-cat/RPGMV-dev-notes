# 已完成的学习任务

## 让 github action + vercel 实现有意义的 pnpm 单仓部署

目前是不能实现有意义的单仓部署的。因为 vercel 工作流要求用指定工作路径实现单仓划分。这个很不合理。

已完成。不知道什么时候完成的，已经完成很久了。

## screen to gif

一款录制工具。需要检查。看看和 LICEcap 之间的差异？

不检查了。现在的 gif 录制用的是 [PixPin](https://pixpin.cn/) 。

## 全面替换这个过时的 cdn 代理商

- https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img
- [参考资料](../sundry/jsdelivr/index.md)

已完成替换，换成：

- https://gh-img-store.ruan-cat.com/img

## 给 awesome-yami 写一个 pr

1. 搞清楚脚本的工作逻辑，问 AI 搞清楚对方的打包逻辑在做什么。
2. 编撰好具体的 issue 缘由，表明代码有什么问题，我想怎么优化处理。
3. 在自己已经 fork 的 repo 内，开始编写优化代码。
4. 提交 pr。
5. 编写一个掘金文章，讲述自己的思考。以及对 tsx 的应用。以文章的方式多讲自己的思考和实践步骤。
6. 写在简历内，便于求职的时候有话术可以谈。

### 劝说注意点

1. 降低复杂度。
2. 核心业务重构，业务安全。
3. 没有引入新的问题。

### 已完成

- [pr](https://github.com/Open-Yami-Community/awesome-yami/pull/3)
- [掘金文章](https://juejin.cn/post/7546565160363507739)

## 制作便于查询 stars 的网站

1. https://github.com/ruan-cat/stars-list 拿到数据，制作网站。
2. 搞清楚 github pages 的工作流，打包然后直接走工作流，先部署到 github pages 内。

### 已完成

- https://ruan-cat.github.io/stars-list
