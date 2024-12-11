---
permalink: /expansion-technique/deploy-game-on-vercel/
shortTitle: 部署游戏到vercel
order: 40
---

# 将 rmmv/mz 游戏到 vercel 平台内

如果我们希望玩家能够以网站的方式访问游戏，那么我们需要部署到服务器内。

部署 rmmv/mz 游戏的逻辑，和搭建自己的博客是同样的道理。如果你能够自己搭建博客，那么部署 rmmv/mz 游戏也是相同的逻辑。

这里我们以仇九的 QJ_MZPlugin 插件 demo 为例子，演示如何用 github+vercel 平台的方式实现简单的游戏部署，并生成 url 地址链接。

## 准备好 demo

![2024-12-11-10-06-47](https://gh-img-store.ruan-cat.com/img/2024-12-11-10-06-47.png)

## 本地运行项目

首先在本地运行项目，确保项目在浏览器环境内是可以单独运行的。rmmv/mz 项目的本质是原生的 H5 项目，是静态的网页，在本地服务器内是可以访问的。

用 vscode 打开，用 live preview 插件打开，如下动图所示：

![本地运行项目](https://gh-img-store.ruan-cat.com/img/2024-12-11-10-16-53.gif)

## 移除和 node 函数高耦合的插件

有部分插件直接使用了 node 的 api，可能会导致项目无法在浏览器内直接阅览，需要移除掉这些插件。如果你无法移除掉这些插件，那么本方案就不适合你的项目。

对于本例，该插件是直接使用了 node 的 api，故需要移除掉。

![2024-12-11-10-21-31](https://gh-img-store.ruan-cat.com/img/2024-12-11-10-21-31.png)

## 初始化 git 项目

点击 vscode 旁边的源代码管理，初始化本地的 git 仓库。

![2024-12-11-10-28-39](https://gh-img-store.ruan-cat.com/img/2024-12-11-10-28-39.gif)

## 新建 .gitattributes 文件

在项目根目录下，新建 .gitattributes 文件。用于声明项目内那些文件属于二进制文件，避免下次克隆项目时，出现文件损坏。

![2024-12-11-10-32-15](https://gh-img-store.ruan-cat.com/img/2024-12-11-10-32-15.png)

具体配置项如下：

```bash
* text=auto

# Force the following filetypes to have unix eols, so Windows does not break them
*.* text eol=lf

*.png binary
*.jpg binary

# rm音频文件
*.ogg binary

# 字体文件
*.ttf binary

# 视频
*.webm binary

# rmmz的文件后缀
*.wasm binary
*.woff binary
*.efkefc binary
*.efkmodel binary
```

## 新建 github 仓库

去 github 先新建一个空仓库，这里我取名为 deploy-game-on-vercel-demo ，你们可以给仓库任意取名。

![2024-12-11-10-36-20](https://gh-img-store.ruan-cat.com/img/2024-12-11-10-36-20.gif)

我们直接输入仓库名称即可。其他的初始化选项都不需要选配，我们不需要 github 提供默认的初始化文件，我们自己就提供好了。

务必创建一个全空的仓库。

## 保存本地 git 仓库的更改，创建初始化提交

如以下动图所示：

![2024-12-11-10-40-44](https://gh-img-store.ruan-cat.com/img/2024-12-11-10-40-44.gif)

我们这里必须要写提交内容。填写 git commit 信息。建议不要胡乱填写 git commit。

## 配置远程仓库，并上传至 github 仓库

将我们刚才新创建的仓库地址，填写到本地仓库的远程库一栏中。即我们刚才在 github 上创建的空仓库， `https://github.com/ruan-cat/deploy-game-on-vercel-demo` 。

其中，远程仓库的名称建议填写为约定俗成的 origin，以便和绝大多数的 git 教程对齐。

![2024-12-11-10-43-09](https://gh-img-store.ruan-cat.com/img/2024-12-11-10-43-09.gif)

## 点击上传并在 github 内检查上传结果

上传时长取决于你的项目大小。建议想办法移除掉项目内不需要的文件，尽可能减少项目体积。

![2024-12-11-10-53-34](https://gh-img-store.ruan-cat.com/img/2024-12-11-10-53-34.gif)

这里就可以看到我们刚才填写的提交信息，即 git commit。

![2024-12-11-10-55-31](https://gh-img-store.ruan-cat.com/img/2024-12-11-10-55-31.png)

## 进入 vercel 平台并新建 vercel 项目

从 vercel 平台首页进入，点击新建部署，并导入刚才的新建的 github 项目。

- https://vercel.com/home

![2024-12-11-11-09-25](https://gh-img-store.ruan-cat.com/img/2024-12-11-11-09-25.gif)

## 配置 vercel 项目

配置项目的部署域名，稍后默认分配的二级域名名称就是 `deploy-game-on-vercel-demo` 。这里可以更改为你期望的二级域名。

![2024-12-11-11-11-00](https://gh-img-store.ruan-cat.com/img/2024-12-11-11-11-00.png)

## 部署 vercel 项目

其他的不需要配置，点击部署即可。

![2024-12-11-11-13-34](https://gh-img-store.ruan-cat.com/img/2024-12-11-11-13-34.png)

稍做等待即可完成部署。

![2024-12-11-11-14-50](https://gh-img-store.ruan-cat.com/img/2024-12-11-11-14-50.gif)

## 进入 vercel 项目控制台

进入控制台，查看 vercel 平台自动为我们生成的项目访问地址。

![2024-12-11-11-16-19](https://gh-img-store.ruan-cat.com/img/2024-12-11-11-16-19.png)

## 访问我们的游戏

- https://deploy-game-on-vercel-demo.vercel.app/

现在其他人就可以在浏览器内，用 url 在线玩我们的游戏了。

![2024-12-11-11-17-58](https://gh-img-store.ruan-cat.com/img/2024-12-11-11-17-58.png)
