# gitlens

## 官方教程

- https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
- https://www.gitkraken.com/gitlens
- https://github.com/gitkraken/vscode-gitlens
- https://gitlens.amod.io/

## 其他教程

https://juejin.cn/post/7038062974610702366

TODO: 怎么实现 gitlens 的 rebase 功能？还是需要专门花时间学习这个 gitlens 封装好的功能。

## 中文？

目前我没有看到 gitlens 有设置成中文的配置，相关的 pr 已经被毙掉了。

如果没有中文，我用 gitlens 也不是很方便。

看了几次了，都是这样无功而返。过几个月再看看 gitlens 有没有最新进展吧。

- https://github.com/gitkraken/vscode-gitlens/pull/3171
- https://github.com/gitkraken/vscode-gitlens/pulls?q=language

## 删除本地和远程分支

如图所示:

1. 选中分支，branch 菜单内，右键点击删除分支。

![2024-05-21-12-57-32](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-05-21-12-57-32.png)

2. 选择删除本地分支和远程分支。这里不选择强制删除。

![2024-05-21-12-58-43](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-05-21-12-58-43.png)

可以注意到，其本质还是运行命令行：

```bash
git push origin -d temp
```
