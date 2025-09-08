---
juejin: 111
desc: 11
---

<!-- TODO: 编写完整的文章，并准备发文。 -->

# 使用 github workflow 部署 github page

## 动机

随着个人技术的学习，我拥有越来越多的仓库了。对于每一个前端项目，往往都需要提供一个 url 链接，来访问页面。

## 技术选型

### 不想过多使用托管平台

### 用 github 工作流就地在当前仓库内部署页面

## 开启 github 仓库允许 github action 生成 github page

如果不开启，那么后续会出现以下故障，如图所示：

![2025-09-08-18-35-12](https://gh-img-store.ruan-cat.com/img/2025-09-08-18-35-12.png)

<!--
	这里为了掘金发文，没有使用vitepress的导入代码片段写法，故代码片段会存在更新不及时的情况。
	完整的代码片段 error-repo-not-github-page-config.log
-->

```log
Error: Get Pages site failed. Please verify that the repository has Pages enabled and configured to build using GitHub Actions, or consider exploring the `enablement` parameter for this action.
Error: HttpError: Not Found
```

## 编写工作流

## 参考资料

- [`【GitHub】基于Actions和Pages实现项目的自动构建与部署`](https://blog.meta-code.top/2024/08/15/2024-13/)
