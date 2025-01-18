# 使用 node 的 spawnSync 替换掉 execa

execa 和 spawnSync 都是运行命令的工具。当我们想用函数运行某一个命令时，就可以用这两个工具实现。

替换的主要目的是减少包体积，少安装一个依赖，直接使用 node 自带的工具即可。

## execa

```js
import { execa } from "execa";
```

## spawnSync

```js
import { spawnSync } from "node:child_process";
```
