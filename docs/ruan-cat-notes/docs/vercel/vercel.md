# vercel

我是 vercel 的重度使用用户，这里记录着关于 vercel 部署的一些实践。

## vercel.json ？

## vercel 被墙的 cname 配置

- https://www.cnblogs.com/cubeyu/articles/17451621.html

## vercel 对包管理器的选择策略以及让 vercel 使用 corepack 的策略

- https://vercel.com/docs/functions/runtimes/node-js#node.js-version
- https://vercel.com/docs/deployments/configure-a-build#corepack
- https://vercel.com/docs/deployments/builds/package-managers

vercel 的 pnpm 使用策略依赖于 pnpm-lock.yaml 文件。如果我仓库没有这个文件，那么 vercel 用的是 pnpm6，是低版本的，项目时无法启动的。

根据官方教程，我们在 vercel 项目仪表盘内配置环境变量，允许其使用 corepack，这样 vercel 就会使用正确的 pnpm 了。

## 配置 ENABLE_EXPERIMENTAL_COREPACK 环境变量

具体示例如下：

![2024-05-17-14-23-45](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-05-17-14-23-45.png)

## 额度

- https://github.com/RuanZhongNan/RPGMV-dev-notes/actions/runs/9976519939/job/27569258838
- https://github.com/vercel/vercel/discussions/6617
- https://vercel.com/docs/limits/overview#deployments-per-day-(free)

简单来说，就是当天部署的额度用完了。

![2024-07-17-23-19-29](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-07-17-23-19-29.png)

在 usage 内，查询请求报告。可得知，当天用的很多。

![2024-07-17-23-38-29](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-07-17-23-38-29.png)

![2024-07-17-23-40-03](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-07-17-23-40-03.png)
