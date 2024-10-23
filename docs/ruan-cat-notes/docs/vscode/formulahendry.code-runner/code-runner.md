# code-runner 代码片段运行插件

- https://zhuanlan.zhihu.com/p/533004101

不过这个参考质量，仅仅是考虑了单纯的 ts 代码片段，而不考虑使用模块的情形，有局限性。

## 运行模块导入的 typescript

期望使用该插件实现模块化内容的识别和运行。

目前的运行命令是，并不是直接使用 vscode 插件实现的：

```bash
npx ts-node-esm src\hooks\useEarlyWarningMapData\useEarlyWarningMapData.ts --files
```

### 在 package.json 内增加 { "type": "module" } 参数

- https://blog.csdn.net/sinat_36521655/article/details/109863364

在 package.json 中只输入下边这一句就可以了 { "type": "module" }

在某些有特殊的项目中，不能设置该值。这会导致其他的错误。该配置还是很有局限性的。

### ts-node 换成 ts-node-esm

参考资料不记得了，就记得换成 esm 的

### tsconfig.json 增加 "esModuleInterop": true

### 加上 --files 指令

参考资料不记得了。

## 用基于 ts-node/esm 的方式来运行 typescript 单文件脚本

学习新的配置方式了。通过阅读 code-runner 插件的配置细节，得知 code-runner 想要运行 typescript 文件，本质上是运行命令来运行 typescript 单文件。

问题就可以转换为以下方向：

- 怎么使用 node 运行 typescript 文件？
  - 运行普通的 typescript 文件？
  - 运行含有 esm 模块的文件？

### 基于 ts-node/esm 的最佳实践

在使用 ts-node/esm 依赖的前提下，其最佳实践如下：

- https://www.cnblogs.com/bzsheng/p/14535080.html

```json
{
	"code-runner.executorMap": {
		"typescript": "node --loader ts-node/esm $fullFileName --files"
	}
}
```

使用 code-runner 插件提供的变量，获取要运行的文件路径。剩下的就是想办法用命令式的方式运行 typescript 了。

## 用基于 vite-node 的方案高效率地运行 typescript 单文件脚本

- https://stackoverflow.com/a/75970462/18167453

时隔太久了，我有点不太记得当初是怎么配置了。

在 vite-node 的方案下，运行导入外部模块的 typescript 代码片段时，是这样配置的：

```json
{
	"code-runner.executorMap": {
		"typescript": "pnpm vite-node $fullFileName --files"
	}
}
```

使用 pnpm 安装全局依赖 vite-node。然后运行即可。

## `node --import=tsx` 方案运行 typescript 单文件脚本

- https://nodejs.org/en/learn/typescript/run#registering-tsx-via-node

安装 tsx，确保 node 版本在 22.6.0 以上。

```json
{
	"code-runner.executorMap": {
		"typescript": "node --import=tsx $fullFileName"
	}
}
```

## 运行单独的 typescript 文件

上述的 code-runner 配置，本质上是配置运行 typescript 文件的 cli 命令行，目前能运行 typescript 文件的技术选型如下：

- ts-node
- vite-node
- tsc
- tsx
- vue-tsc
- [node](https://nodejs.org/en/learn/typescript/run)

目前（2024-9-18）考虑使用 tsx 和 node（v22.6.0）来运行单独的 typescript 文件，他们速度很快。

换 node 版本，用（22.2.0）来运行。因为 22.6.0 有 bug。但是不记得是什么 bug 了，反正导致项目跑不起来。
