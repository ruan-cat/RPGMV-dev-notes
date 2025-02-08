# 在 pnpm + monorepo 单仓架构下，`i18n-ally.enabledFrameworks` 配置无法自动识别框架

## 失效现象

如下图所示：

插件开启了，但是文本没有翻译：

![2023-08-29-20-12-23](https://gh-img-store.ruan-cat.com/img/2023-08-29-20-12-23.png)

![2023-08-29-20-13-06](https://gh-img-store.ruan-cat.com/img/2023-08-29-20-13-06.png)

报错信息如下：

![2023-08-29-20-13-36](https://gh-img-store.ruan-cat.com/img/2023-08-29-20-13-36.png)

## 项目文件目录

项目文件目录大致如下：

pnpm 实现 monorepo 单仓，管理的目录为 packages。packages 有 main 和 docs 两个子项目。

![2023-08-29-20-15-13](https://gh-img-store.ruan-cat.com/img/2023-08-29-20-15-13.png)

## 尝试如下

通过阅读源码，尝试手动配置 enabledFrameworks，情况如下：

在不配置 `i18n-ally.enabledFrameworks` 时，失效：

![2023-08-29-20-18-29](https://gh-img-store.ruan-cat.com/img/2023-08-29-20-18-29.png)

主动配置时，才有效：

![2023-08-29-20-18-52](https://gh-img-store.ruan-cat.com/img/2023-08-29-20-18-52.png)
