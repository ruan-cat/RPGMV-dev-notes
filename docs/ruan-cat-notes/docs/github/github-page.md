# github page

## 用工作流实现 github page 的部署？

用工作流实现 github page 的部署？

- JamesIves/github-pages-deploy-action@v4

这个好像可行。现在（2024-10-10）的项目越来越多了，可以考虑让某一个仓库用自己的仓库名称作为域名域，直接实现部署。

现在手头上会有一个其他组织机构的项目，不完全是我自己的，所以不想配置写入自己的 github token，和 vercel token。

需要避免写入 token。而我之前的方案都是需要配置 token 的。

## 该方案似乎要求提供很多的仓库

- https://github.com/orgs/vuepress-theme-hope/repositories

hope 主题有很多基于 github page 的页面，但是这些页面都和很多纯粹的静态文档仓库相对应。

如果使用他的方案，那么我也要创建很多仓库，用于存储多个网站项目。这不太能接受。
