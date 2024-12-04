# vscode

吃饭的家伙。

## 本地修改无差异显示的错误

修改本地文件时，看不到侧边栏的修改差异提示，这个侧边栏提示叫做[`Gutter indicators`](https://code.visualstudio.com/docs/sourcecontrol/overview#_gutter-indicators)。可以清空本地的 git 缓存。命令：

```bash
git clean -df
```

[diff decorations gutter](https://hjk.life/posts/vscode-git-gutter/)

### 复现方式

vscode 文件重命名后 gutter indicators 无查看任何内容

发现。只要对文件做重命名。无论是位置重构，还是直接换名称，vscode 都不能很好的实现文件差异查询。侧边的条会消失。

无论是什么文件类型。

## 学习待办

- TODO: Live Share 是什么？怎么实现 vscode 的快速在线分享？

## 设置管理员权限

在 win10 系统内，一般这样操作：

![2023-11-29-23-37-32](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2023-11-29-23-37-32.png)

因为某些行为需要管理员权限。

该配置会带来新的问题，即`vscode 没有检查更新按钮`。

## vscode 没有检查更新按钮

- https://blog.csdn.net/admans/article/details/126671210
- https://www.jianshu.com/p/dd6602d454ba
- https://github.com/microsoft/vscode/issues/157624

### 解决方案

我们应该安装 system 类型的 vscode，而不是 user 类型的 vscode。

这是 system 类型的 vscode：

![2023-11-29-23-31-45](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2023-11-29-23-31-45.png)

这是 user 类型的 vscode：

![2023-11-29-23-32-54](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2023-11-29-23-32-54.png)

### 下载 system 类型的 vscode

我们应该去专门的下载页面内，找到专门的分类来下载。

- https://code.visualstudio.com/download

![2023-11-30-09-25-07](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2023-11-30-09-25-07.png)

有两种安装包，下载时注意区分：

- VSCodeSetup-x64-1.84.2.exe
- VSCodeUserSetup-x64-1.84.2.exe

![2023-11-30-09-28-41](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2023-11-30-09-28-41.png)

## 开启侧边栏的`粘性滚动功能`

- https://code.visualstudio.com/updates/v1_85#_sticky-scroll-in-trees

1. before 侧边栏无粘性滚动。

![2023-12-14-09-32-20](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2023-12-14-09-32-20.png)

2. 根据更新内容，做配置。这里给个人的用户全局配置文件内做配置，而不是工作局局部配置文件。

![2023-12-14-09-33-33](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2023-12-14-09-33-33.png)

```json
{
	"workbench.tree.enableStickyScroll": true,
	"workbench.tree.stickyScrollMaxItemCount": 7
}
```

3. after 侧边栏开启了粘性滚动。

![2023-12-14-09-34-33](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2023-12-14-09-34-33.png)

4. 插件的右侧侧边栏，也同样包含此功能。

![2023-12-14-09-35-05](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2023-12-14-09-35-05.png)

## 跳转到嵌体提示的定义

- https://code.visualstudio.com/updates/v1_85#_jump-to-definition-for-inlay-hints
- https://code.visualstudio.com/docs/editor/editingevolved#_inlay-hints

在 vscode 的 `1.85.1` 版本内，提供了该功能。对于增强跳转有很大的帮助。

## 在 vscode 查看 office

各种 vscode 查看插件？

- vscode-pdf
- Excel Viewer
- office viewer

- https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-office
- https://marketplace.visualstudio.com/items?itemName=robertohuertasm.open-vscode

目前选择的是 office viewer ，能查看就行了。暂时不考虑在 vscode 内编辑 office 的文件。

截止目前（2024-12-5），已经移除此插件。该插件导致了 vscode 无法使用复制粘贴快捷键的严重 bug。
