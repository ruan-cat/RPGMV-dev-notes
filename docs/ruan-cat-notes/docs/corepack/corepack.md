# 管理包管理工具的工具

corepack 从 node14、node16 的最后两个版本内提供，是一个管控设置包管理器的默认官方工具。

目前仅管控 pnpm 和 yarn。

## 切换 node 版本后要及时开启 corepack

要及时地在全局运行以下命令：

```bash
corepack enable
```

开启 corepack 后会提供全局命令，具体效果见以下 gif 示意图。

::: details 以 node20.15.0 为例

![corepack-enable-with-node-20.15.0](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-08-26-15-56-47.gif)

:::

::: details 以 node22.4.1 为例

![corepack-enable-with-node-22.4.1](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-08-26-15-57-02.gif)

:::

这个故障和目前正在使用的 node 版本切换工具 nvmd（nvm-desktop）无关。单纯的 corepack 问题。
