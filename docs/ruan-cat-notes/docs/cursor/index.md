# AI 编辑器 cursor

## 不要安装 blockman 插件

vscode 的 blockman 插件阻碍了选择的代码段高亮。造成交互效果差，无法得知那些东西被选择到。

在使用 cursor 时，应该关闭 blockman 插件。

::: details 可以选中代码并提供高亮效果

![2025-03-26-23-38-09](https://gh-img-store.ruan-cat.com/img/2025-03-26-23-38-09.png)

:::

## 插件的存储位置是不一样的

cursor 和 vscode 都能识别 vscode 规格的插件，但是部分插件是会在本机存储文件的，这些文件的物理路径是不同的。

举例如下：

vscode 的文件：

::: details

![2025-04-24-02-04-35](https://gh-img-store.ruan-cat.com/img/2025-04-24-02-04-35.png)

:::

cursor 的文件：

::: details

![2025-04-24-02-04-55](https://gh-img-store.ruan-cat.com/img/2025-04-24-02-04-55.png)

:::

这些配置文件的存储路径就是不一样的，不是共享共用的。
