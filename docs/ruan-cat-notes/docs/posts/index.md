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

## git clean -fdx

试试看，看看能不能实现一次性删除一大堆内容？

## 限制依赖包可用的升级范围

有几个包升级到最新版的时候，破坏性太大，而且表意不明。破坏性变更说明的少，为了避免自己使用野鸡依赖包时莫名其妙地赤石，故希望有某种方式约束依赖包升级的版本号范围。

### 最新版依赖标签不对导致安装了低版本的依赖

有些包的最新版，打的标签不是 latest，而是 next，这导致升级最新版依赖时，往往升级到低版本了。

比如：

- @form-create/designer
- @form-create/element-ui
- @wangeditor/editor
- @wangeditor/editor-for-vue

目前（2025-7-4）的处理方式是，手动屏蔽掉这些包。还有没有更好的方案去升级依赖？

```json
{
	"up": "pnpm up '!@wangeditor/' '!@form-create/'"
}
```

### 某些依赖跨大版本升级时，没有破坏性变更说明

有部分依赖升级后，官方文档没有说清楚有什么变更。有些依赖不想花费精力去看清楚变更细节，能用就行，故不希望升级后出现任何故障。

比如：

- codemirror 限定到 5 版本。因为 6 版本没有说明清楚变更了什么。况且我也不想花时间迁移配置。
- cropperjs 限定到 1 版本。尽管有完整的[迁移日志](https://fengyuanchen.github.io/cropperjs/migration.html)，但是我不想花时间在这个包上面。

这些依赖需要被锁定范围。

### 某些依赖需要使用严格的 overrides 覆盖

某些依赖包被明确的说明，特定版本存在严重的 bug，需要用低版本覆盖掉最新版本。

比如：

```yaml
# pnpm-workspace.yaml
overrides:
  "css-select@^5.2.1": "5.2.0"
```

css-select ，需要严格约束到 5.2.0 版本。
