---
permalink: /prepare-develop-environment/node-launch-mv/
order: 20
shortTitle: 用live-server运行mv项目
---

# 为什么一定要考虑用 node 环境来运行 rmmv？

因为要实现`node`环境下`js`模块化代码加载和**热更新**，所以我们需要让`rmmv`项目代码变成一定程度上的`node`项目。

## 参考资料

[在 Node 服务器中运行 html 文件](https://blog.csdn.net/qq_34458968/article/details/123711204)

## 改造步骤

### 直接构建 node 项目

在你已经配置了`node`环境的前提下，直接使用命令行`npm init`构建一个`node`项目。本文不提供`node`环境配置教程细节和命令行含义细节，需要你自行去`CSDN`查找资料自学。

### 安装 live-server 依赖

```sh
npm i live-server -S
```

### 配置运行命令

在`package.json`内配置运行命令。其中端口号`port`可以任意更改。

```json
{
	"scripts": {
		"rmmv-node-serve": "./node_modules/.bin/live-server --port=4399"
	}
}
```

## 使用步骤

### 运行命令 <Badge type='warning' text='不推荐' />

```sh
npm run rmmv-node-serve
```

### VScode 点击命令 <Badge text='推荐' />

在`VScode`中点击侧边栏的`npm`脚本整理的命令即可运行命令。
