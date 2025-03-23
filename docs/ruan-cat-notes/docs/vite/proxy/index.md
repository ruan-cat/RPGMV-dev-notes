# 反向代理

vite 配置开发环境时，基本上是需要配置反向代理的。下面是我的反向代理最佳实践。

## 准备环境变量的类型

在 `types/env.shim.d.ts` 目录内新建文件：

::: details 针 env 常见环境变量的类型声明拓展

我们这里需要用三斜线表达式，全量导入 vite 的客户端类型声明。

并且对类型 ImportMetaEnv 做拓展。

<<< ./env.shim.d.ts#snipaste{typescript twoslash}

:::

## 配置环境变量

在项目根目录下配置环境变量。

::: details 环境变量

<<< ./.env.development#snipaste{bash twoslash}

:::

## 配置 vite

导入环境变量，然后使用。注意导入的环境变量直接使用都是字符串。

::: details 配置 vite 反向代理

<<< ./vite.config.ts#snipaste{typescript twoslash}

:::
