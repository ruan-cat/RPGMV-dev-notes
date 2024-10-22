# 初始化项目失败

```bash
pnpm dlx nuxi@latest init nuxt-test
```

## 手动下载文件的方案

- https://github.com/nuxt/nuxt/issues/21853#issuecomment-1936082781

## 更改本机 hosts 文件的方案

- https://github.com/nuxt/nuxt/issues/21853#issuecomment-1915961040

## NUXI_INIT_REGISTRY 重设为中国 gitee 镜像的方案

- https://github.com/nuxt/cli/issues/159#issuecomment-1864239250

## 设置 dns 的方案

目前是有效的。

- https://github.com/nuxt/cli/issues/159#issuecomment-1712453844

### 1 设置本机电脑 cdn

- https://zhuanlan.zhihu.com/p/377418585
- https://blog.lindexi.com/post/国内好用的-DNS-列表.html

::: details 设置电脑 cdn

![设置电脑cdn](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-08-28-23-12-15.png)

:::

::: details 设置以下的 dns 记录

```bash
114.114.114.114
223.5.5.5
180.76.76.76
1.1.1.1
```

:::

### 2 Watt Toolkit 不代理 `raw.githubusercontent.com` 地址

::: details 不做设置

![不设置githubusercontent.com](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-08-28-23-16-54.png)

:::

这会让本机的 hosts 文件默认设置该网站，会导致 nuxt 初始化命令失败。

### giget 使用了 githubusercontent

nuxt 初始化失败的主要原因在于 giget 的默认使用了 githubusercontent，现在我们去测试 giget，也是正常可用的。

```bash
pnpm dlx giget@latest gh:unjs/template test-giget-1
```

::: details 测试 giget

![giget也能够正常使用](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-08-28-23-20-13.png)

:::
