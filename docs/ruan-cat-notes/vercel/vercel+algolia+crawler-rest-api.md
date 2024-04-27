# vercel algolia crawler-rest-api

## 想实现 vercel 回调的 algolia 爬虫自动更新

目前我遇到的痛点问题是，基于 vercel 部署的 vuepress 项目，未能够及时同步更新 algolia 爬虫，导致刚刚更新网站未能够及时搜索到相应的内容。希望实现合适的功能，实现部署后直接驱动 algolia 爬虫服务更新内容。

## chatGPT 给出的方案

问 chatGPT，如下

我现在用 vercel 实现了一个 vuepress 静态网址的部署，请问 vercel 有类似于回调钩子函数的配置帮助我实现 algolia 爬虫服务的及时更新么？

为了避免再次进入 chatGPT 时出现错误，这里把把回答全部附上：

::: tip
是的，Vercel 支持在部署过程中运行自定义命令，可以在此处添加钩子函数来触发 Algolia 的爬虫服务更新。具体步骤如下：

- 在项目根目录下创建一个名为 .vercel 的文件夹。
- 在 .vercel 文件夹中创建一个名为 post-build.sh 的脚本文件。
- 在 post-build.sh 中添加钩子函数，例如：

```bash
#!/bin/sh

# Run Algolia crawler after build
curl -X POST "https://your-algolia-endpoint.com" \
     -H "Content-Type: application/json" \
     -d '{"apiKey": "your-api-key", "indexName": "your-index-name"}'
```

这个脚本将在每次部署后执行，并触发 Algolia 的爬虫服务更新。注意替换 your-algolia-endpoint.com、your-api-key 和 your-index-name 分别为您自己的 Algolia 相关信息。

- 保存 post-build.sh 文件并将其添加到 Git 仓库中。
- 将代码推送到 Vercel 仓库，等待自动部署完成。

当 Vercel 完成部署后，钩子函数将自动运行，触发 Algolia 的爬虫服务更新。

:::

## crawler-rest-api

通过 bing 搜索，找到了可能有效的 api 服务，可以考虑直接使用该 api 实现爬虫的重新索引。

https://www.algolia.com/doc/tools/crawler/apis/crawler-rest-api/

## 进度

目前上述方案均没有去试验过。
