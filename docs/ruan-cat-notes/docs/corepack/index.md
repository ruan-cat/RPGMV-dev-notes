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

## 安装失败

比如这段全局安装的命令：

```bash
corepack install pnpm@9.15.0 -g
```

报错如下：

::: details

@[code txt](./corepack-install-global-error-log.txt)

:::

截图如下：

::: details

![2024-12-29-18-04-11](https://gh-img-store.ruan-cat.com/img/2024-12-29-18-04-11.png)

:::

### 问题定性

这属于典型的网络代理问题。由于我为了解决其他工具的网络问题，配置了很多环境变量，因此本问题我更加倾向于全局设置镜像源。设置 corepack 的镜像源为淘宝源，而不是官方镜像源。

### 解决过程

先去其他的目录内，运行命令 `pnpm v pnpm@9.15.0` ，以便查询相关信息。相关信息如下：

::: details

@[code txt](./pnpm_v_pnpm@9.15.0_log.txt)

:::

目前 pnpm 是在淘宝镜像下查询的，注意到关键信息 tarball ，在淘宝源的有效 url 为

- https://registry.npmmirror.com/pnpm/-/pnpm-9.15.0.tgz

可以考虑让 corepack 更改镜像源为淘宝源，下载该 tarball 即可完成安装。

### 阅读文档

- https://github.com/nodejs/corepack#environment-variables

官方文档明确说明了可以配置 COREPACK_NPM_REGISTRY 环境变量。

### 全局配置

在本机全局的 .npmrc 内设置镜像源。

```bash
# 设置全局 corepack 的镜像源，处理corepack安装pnpm失败的故障
# https://github.com/nodejs/corepack#environment-variables
# https://github.com/nodejs/corepack/issues/67
# https://github.com/nodejs/corepack/issues/572
COREPACK_NPM_REGISTRY=https://registry.npmmirror.com/
```

至此已解决问题。
