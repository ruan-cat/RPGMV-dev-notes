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

## 使用插件实现破解版

TODO: 等待补全，目前没有实践过。

## 在 win 右键菜单内添加 cursor 打开此文件夹

为了提高开发效率，故需要在 window 系统的右键菜单内，添加这个快捷方式。

- https://github.com/yuzhounh/Open-with-Cursor

直接下载本仓库，用 zip 下载仓库。然后运行 exe 文件即可。

添加后的效果如下：

![2025-07-03-21-33-58](https://gh-img-store.ruan-cat.com/img/2025-07-03-21-33-58.png)

## cursor 模型封锁

大约在 2025-7-17 左右，cursor 开始封锁中国大陆。

### 设置 http1.1

设置 http1.1 即可。如下图所示：

- https://www.bilibili.com/video/BV1iputzCEvL/

![2025-07-18-03-54-43](https://gh-img-store.ruan-cat.com/img/2025-07-18-03-54-43.png)

### 设置配置

在 cursor 内设置用户配置：

- https://www.bilibili.com/video/BV17PgNzHEQv/

```json
{
	"http.proxy": "http://localhost:10809",
	"http.proxyStrictSSL": false,
	"http.proxySupport": "override",
	"http.noProxy": [],
	"cursor.general.disableHttp2": true
}
```

## mcp 配置自动审批

- https://forum.cursor.com/t/how-to-allow-mcp-to-execute-automatically-in-cursor/100418
