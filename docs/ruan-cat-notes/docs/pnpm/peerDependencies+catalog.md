# 控制指定包版本的范围

某些依赖是比较麻烦的，对其他的包版本有严格的限制。

在 monorepo 内，就需要统一管控指定包的版本了。

我们可以用 peerDependencies 和 catalog 的方式控制指定依赖的版本，避免出现错误。

如下面的例子所示：

::: details pnpm 配置 catalog

在项目根目录的 pnpm-workspace.yaml 内：

@[code yaml](./peerDependencies+catalog/pnpm-workspace.example.yaml)

:::

::: details package.json 配置 peerDependencies

在对应子包的 package.json 内：

@[code json](./peerDependencies+catalog/package.example.json)

:::

这样 typescript 的版本就被固定好了，不会出现安装过高版本的情况了。
