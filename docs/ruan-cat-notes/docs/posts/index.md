# 文章、杂项

## FormCreate 和 FcDesigner Pro 是不一样的

一个免费开源，另一个要收费。看清楚。

- [FormCreate](https://www.form-create.com/v3/guide/install)
- [FcDesigner Pro](https://pro.form-create.com/doc/)

不过我目前（2025-6-30）也不折腾这个低代码平台。留着。

## biome 还不能成为首选

目前（2025-6-30）biome，唉，现在只能说还是一个小丑。就等吧。md 不能格式化，那谁敢那这个替代 prettier 和 eslint。还是要等。

再等 oxlint 就抢走 biome 市场份额了。

- https://biomejs.dev/zh-cn/internals/language-support/

![2025-06-30-22-59-12](https://gh-img-store.ruan-cat.com/img/2025-06-30-22-59-12.png)

## 含有 vue 响应式变量的接口请求工具

### @tanstack/vue-query 和 useAxios

看看这个技术选型如何？对于获取接口请求的响应式变量而言，该方案有没有可行性？

这个东西会不会引入了太多概念了？大家觉得这个和我们现在的 useAxios 方案比起来，哪一个更加适合我们团队？

- https://tanstack.com/query/latest/docs/framework/vue/overview

### 对一个异步函数做包装，好像有点东西

- https://tanstack.com/query/latest/docs/framework/vue/installation#use-of-composition-api-with-script-setup

### vue-request

- https://github.com/AttoJS/vue-request

## 生成 github release 发行版

- https://github.com/unjs/changelogen
- https://github.com/antfu/changelogithub

这两个库，更加倾向于设置 github release 的发行版报告，而不是设置到 changelog 文件内。

实际使用下来，在 monorepo 内，效果不好。

## 想办法同时实现 github release 和 changelog 的生成

在一次提交内，实现两个 github release 的发布，并给各自的子包生成 changelog 文件。

- https://github.com/conventional-changelog/conventional-changelog/releases

![2025-07-01-22-16-56](https://gh-img-store.ruan-cat.com/img/2025-07-01-22-16-56.png)

### trigensoftware/simple-release-action

这个工作流，有点复杂，在 github action 内写的非常冗杂。

不能学。
