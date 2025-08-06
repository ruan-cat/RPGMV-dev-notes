# GitHub Desktop，官方的仓库下载工具

一种简易的 github 仓库下载工具。

## 在更新后出现无权限打开 vscode 的情况

现象如下：

![2025-08-06-11-45-44](https://gh-img-store.ruan-cat.com/img/2025-08-06-11-45-44.png)

### 先确保更新到最新版

1. 确定已经更新到最新版
2. 明确现在的最新版本号，比如这里是 `3.5.2` 。

![2025-08-06-11-46-58](https://gh-img-store.ruan-cat.com/img/2025-08-06-11-46-58.png)

### 找到本地文件

找到实际启动的 exe。

![2025-08-06-11-48-17](https://gh-img-store.ruan-cat.com/img/2025-08-06-11-48-17.png)

根据版本号找到 exe，在本例子中，这里是 `C:\Users\pc\AppData\Local\GitHubDesktop\app-3.5.2\GitHubDesktop.exe` 程序。

![2025-08-06-11-49-01](https://gh-img-store.ruan-cat.com/img/2025-08-06-11-49-01.png)

### 修改 exe 的权限

赋予该 exe 管理员权限即可。

![2025-08-06-11-50-51](https://gh-img-store.ruan-cat.com/img/2025-08-06-11-50-51.png)

随后重启 GitHub Desktop，即可用 vscode 打开项目了。

### 高频出现

该问题是高频出现的，只要 GitHub Desktop 更新到新版本，就要对每一个新版本的 exe 做一次管理员授权。
