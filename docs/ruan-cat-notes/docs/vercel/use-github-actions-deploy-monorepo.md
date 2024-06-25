# 使用 github 工作流来部署 monorepo 项目

我应该阅读 https://github.com/amondnet/vercel-action 的工作流配置案例。

## 针对仓库 vercel-action 的学习

working-directory 字段，能否实现有意义的 monorepo 单仓部署呢？

不能，不能实现单仓部署。该配置仅仅是配置 vercel cli 的运行根目录。

## 总结结论

这个工作流很适合部署一个简单的前端项目，遇到 monorepo 场景就很不适合了。
