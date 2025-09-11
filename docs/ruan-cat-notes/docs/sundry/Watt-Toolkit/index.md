# Watt Toolkit，简易免费的翻墙代理加速工具

Watt Toolkit，对我来说是重要的工具。但是有时候会被他干扰，有些地址需要忽略掉。

## 下载安装

下载链接如下：

- https://steampp.net/

## raw.githubusercontent.com

会影响 giget 的接口请求。

::: details 忽略项

![不设置githubusercontent.com](https://gh-img-store.ruan-cat.com/img/2024-08-28-23-16-54.png)

:::

## roadmap.sh/frontend

fonts.gstatic.com

跨域。

### 现象

::: details 现象

![roadmap.sh/frontend的资源被跨域了](https://gh-img-store.ruan-cat.com/img/2024-09-02-19-50-57.png)

:::

### 忽略项

::: details 忽略项

![不设置fonts.gstatic.com](https://gh-img-store.ruan-cat.com/img/2024-09-02-19-55-54.png)

:::

### 恢复使用

::: details 恢复使用

![恢复使用](https://gh-img-store.ruan-cat.com/img/2024-09-02-19-56-57.png)

:::

## api.github.com

目前，是 giget 使用该地址来请求资源。当 Watt Toolkit 开启时，会干扰正常的下载。

### 现象

::: details 现象

![运行别人项目时，称giget报错](https://gh-img-store.ruan-cat.com/img/2024-10-22-23-29-37.png)

:::

### 忽略项

::: details 忽略项

![不设置api.github.com](https://gh-img-store.ruan-cat.com/img/2024-10-22-23-36-26.png)

:::

### 恢复使用

::: details 恢复使用

![2024-10-22-23-39-53](https://gh-img-store.ruan-cat.com/img/2024-10-22-23-39-53.png)

:::

## github.com （push）

情况有所变化，之前我使用本工具时，一直以来用的都是配置 `github.com` 要被代理的。近期（2025-9-11）发现，在使用 v2rayN 的 TUN 模式时，无法 push 提交了。一定会出现以下错误：

```log
fatal: unable to access 'https://github.com/ruan-cat/uni-app-monorepo.git/': The requested URL returned error: 403
```

忽略 github.com 站点的加速即可。也算是告别这个配置了。这个配置，我印象里，大概用了 3 年吧。如今取消配置了。

不知道是不是 911 的缘故，导致美国国内服务器很敏感，无法提交。先关掉本配置，在另行观察。

### 忽略项

::: details 忽略 `github.com` 的加速

![2025-09-11-18-48-57](https://gh-img-store.ruan-cat.com/img/2025-09-11-18-48-57.png)

:::
