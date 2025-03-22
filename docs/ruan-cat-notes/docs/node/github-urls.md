# 以 github url 的方式安装 node 依赖

我们可以把 github 仓库直接当成 node 依赖来安装。

## 处理 git 的代理问题

::: details 报错日志

```log
 ERROR  Command failed with exit code 128: git ls-remote git://github.com/ruan-cat/vitepress-demo-plugin.git/packages/plugin HEAD
fatal: unable to connect to github.com:
github.com[0: 127.0.0.1]: errno=Connection refused
```

:::

::: details 报错截图

![2025-03-22-13-19-05](https://gh-img-store.ruan-cat.com/img/2025-03-22-13-19-05.png)

:::

::: details 解决方案

设置 git 的代理

- https://blog.csdn.net/dashi_lu/article/details/89641778

```bash
git config --global http.proxy http://127.0.0.1:10809
git config --global https.proxy http://127.0.0.1:10809
```

:::

## 处理 github 22 端口链接失败问题

问题：

```log
ssh: connect to host github.com port 22: Connection refusedfatal: Could not read from remote repository.
```

解决方案：

- https://blog.csdn.net/misakivv/article/details/144929627

## 处理 ssh 无权限问题

问题：

```log
git@ssh.github.com: Permission denied (publickey).
```

解决方案：

- https://blog.csdn.net/lythinking/article/details/135071417

## 以指定的分支安装

参考资料：

- https://blog.csdn.net/p15097962069/article/details/106497043

```log
git+https://github.com/ruan-cat/vitepress-demo-plugin.git#single-pkg
```

## pnpm 安装 github 协议的依赖

```bash
pnpm -F=@ruan-cat/vitepress-preset-config i -P github:ruan-cat/vitepress-demo-plugin.git#single-pkg
```

## github 协议的包安装后没有 dist 文件，不会自动打包

要使用 npm 脚本的生命周期钩子 prepare。

参考资料：

- https://stackoverflow.com/questions/17509669/how-to-install-an-npm-package-from-github-directly#comment81381937_39490045
- https://docs.npmjs.com/cli/v11/using-npm/scripts#life-cycle-scripts
  > If a package being installed through git contains a prepare script, its dependencies and devDependencies will be installed, and the prepare script will be run, before the package is packaged and installed.

## 最后放弃

太折腾了。打算退而求其次，不用 fork 的仓库了，直接将期望的库弄成 monorepo 的一个子包。

最后打包时，发现疑似符号链接问题，找不到包。

```log
Failed to load url @git+https+++git@github.com+
```
