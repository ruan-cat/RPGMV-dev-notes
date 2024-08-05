# 部分克隆技术

最近经常需要阅读 vercel、cloudflare、nuxt 等仓库的官方 template 模板仓库，这些仓库太大了，需要考虑学习部分克隆。

git 是有部分克隆的方式的。更加专业正式的称呼是： `sparse-checkout`

我们可以口语化的称呼`部分克隆`，正式称呼为`稀疏检出`。

## 参考资料

::: details 实践教程

- https://blog.csdn.net/qq_58062502/article/details/136511531
- https://git-scm.com/docs/git-clone/zh_HANS-CN

:::

::: details 稀疏检出

- https://cloud.tencent.com/developer/article/1604376
- https://github.blog/open-source/git/highlights-from-git-2-25/

:::

## 具体操作

以 cloudflare 的 worker-d1-api 目录举例：

- https://github.com/cloudflare/templates/tree/main/worker-d1-api

我现在要在本地内仅克隆此目录。运行以下命令：

```bash
git clone --filter=blob:none --sparse https://github.com/cloudflare/templates.git
cd templates
git sparse-checkout add worker-d1-api
```

参数配置具体含义

## 稀疏检出对仓库的支持程度有限么？

有点怀疑，比如云效、gitee 这一类仓库，对稀疏克隆的支持程度是否有限？
