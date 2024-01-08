# vercel+github

这里简单记录 vercel+github 的实践方案和情况：

刚刚我熟练使用 gitee、github、vercel、vuepress 来部署文档。

- 使用 gitee 私有仓库存储 md
- 生成 github 的 token
- 配置 gitee 与 github 的单向关联
- 新建 github 私有仓库
- 配置 vercel 能够访问的 github 仓库权限
- 配置 vercel 访问 github 私有仓库，并配置 vuepress+pnpm 的启动命令
- 部署并使用

目前实现的效果如下：

- gitee 推送 md
- github 拉取 md
- vercel 直接自动更新

目前仍旧遇到许多问题：

- 高频率的 vercel 部署，会频繁的发送邮件，怎么去 vercel 内针对性的配置邮件通知？
- 如何实现访问域名能够在国内使用？尽量不使用自己的域名，用其他免费国内域名快速访问，代理 vercel 的域名？
