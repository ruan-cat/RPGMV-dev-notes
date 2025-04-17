# 在 vercel 使用 corepack

将前端项目部署到 vercel 时，有时会遇到需要配置 corepack 的场景。

根据[官方文档](https://vercel.com/docs/package-managers)得知，vercel 的 pnpm 使用策略依赖于项目内具体的 pnpm-lock.yaml 文件。但是项目可能不会提交锁文件。

如果我仓库没有这个文件，那么 vercel 用的是 pnpm6，是低版本的，项目时无法启动的。

根据[官方教程](https://vercel.com/docs/builds/configure-a-build#corepack)，我们在 vercel 项目仪表盘内配置环境变量，允许其使用 corepack，这样 vercel 就会使用正确的 pnpm 了。

## 参考资料

- https://vercel.com/docs/functions/runtimes/node-js#node.js-version
- https://vercel.com/docs/deployments/configure-a-build#corepack
- https://vercel.com/docs/deployments/builds/package-managers
