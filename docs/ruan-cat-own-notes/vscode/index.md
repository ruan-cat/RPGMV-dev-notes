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

## 学习待办

1： Live Preview 插件是否可以更好的运行 VScode？
2： Live Share 是什么？怎么实现 VScode 的快速在线分享？
