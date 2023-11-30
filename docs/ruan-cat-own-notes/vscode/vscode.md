# vscode 的使用

只是在这里记录一下 VScode 的东西。和 rmmv 关系不大。未来会考虑在教程内专门增加，细化一个 VScode 的使用配置教程。

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

## TODO: 学习待办

- Live Preview 插件是否可以更好的运行 VScode？
- Live Share 是什么？怎么实现 VScode 的快速在线分享？

## 设置管理员权限

在 win10 系统内，一般这样操作：

![2023-11-29-23-37-32](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2023-11-29-23-37-32.png)

因为某些行为需要管理员权限。

该配置会带来新的问题，即`vscode 没有检查更新按钮`。

## vscode 没有检查更新按钮

- https://blog.csdn.net/admans/article/details/126671210
- https://www.jianshu.com/p/dd6602d454ba
- https://github.com/microsoft/vscode/issues/157624

### 解决方案

我们应该安装 system 类型的 vscode，而不是 user 类型的 vscode。

这是 system 类型的 vscode：

![2023-11-29-23-31-45](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2023-11-29-23-31-45.png)

这是 user 类型的 vscode：

![2023-11-29-23-32-54](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2023-11-29-23-32-54.png)

### 下载 system 类型的 vscode

我们应该去专门的下载页面内，找到专门的分类来下载。

- https://code.visualstudio.com/download

![2023-11-30-09-25-07](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2023-11-30-09-25-07.png)

有两种安装包，下载时注意区分：

- VSCodeSetup-x64-1.84.2.exe
- VSCodeUserSetup-x64-1.84.2.exe

![2023-11-30-09-28-41](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2023-11-30-09-28-41.png)
