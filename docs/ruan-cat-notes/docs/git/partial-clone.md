# 部分克隆技术

最近经常需要阅读 vercel、cloudflare、nuxt 等仓库的官方 template 模板仓库，这些仓库太大了，需要考虑学习部分克隆。

git 是有部分克隆的方式的。

## 参考资料

::: details

- https://blog.csdn.net/qq_58062502/article/details/136511531
- https://git-scm.com/docs/git-clone/zh_HANS-CN

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

## 稀疏克隆对仓库的支持程度有限么？

有点怀疑，比如云效、gitee 这一类仓库，对稀疏克隆的支持程度是否有限？
