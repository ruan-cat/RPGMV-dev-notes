# 环境变量

vercel 平台有很多环境变量，为了实现特殊的需求，需要部署环境能够读取平台提供的特定环境变量。

## 允许使用 corepack

配置 ENABLE_EXPERIMENTAL_COREPACK 环境变量

具体示例如下：

```bash
ENABLE_EXPERIMENTAL_COREPACK=1
```

![2024-05-17-14-23-45](https://gh-img-store.ruan-cat.com/img/2024-05-17-14-23-45.png)

## 获取全部的 git 日志信息

- https://nolebase-integrations.ayaka.io/pages/zh-CN/integrations/vitepress-plugin-git-changelog/getting-started#在-vercel-上进行构建

```bash
VERCEL_DEEP_CLONE=true
```
