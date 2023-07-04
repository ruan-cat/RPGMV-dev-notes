# code-runner

## 运行 typescript

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
