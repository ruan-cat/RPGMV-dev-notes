# pnpm10

这个 10 版本真的要命。

- https://zhuanlan.zhihu.com/p/17067327424

## 默认的钩子脚本不再自动运行了

比如安装依赖时，常见的 postinstall 命令，现在在 pnpm10 版本不再主动运行了。

## ERR_PNPM_VIRTUAL_STORE_DIR_MAX_LENGTH_DIFF

我在安装全局依赖时，出现这个问题：

```log
 ERR_PNPM_VIRTUAL_STORE_DIR_MAX_LENGTH_DIFF  This modules directory was created using a different virtual-store-dir-max-length value. Run "pnpm install" to recreate the modules directory.
```

- https://github.com/pnpm/pnpm/issues/8972#issuecomment-2649654519

issue 说运行以下命令即可：

```bash
pnpm i -g
```

不运行这个命令，我本来就安装好的全局包，就全部丢失了。

## approve-builds

在我全局安装依赖时，出现这个要求：

::: details 要求运行 `pnpm approve-builds -g`

<<< ./approve-builds-when-global.log

:::

```bash
pnpm approve-builds -g
```

按照要求做，然后在交互式的命令行内选择要构建的依赖包即可。

这是我最反感 pnpm10 的一部分，因为默认的 postinstall 行为被关掉了，改成要求我们手动批准允许构建的依赖包。

## 配置 onlyBuiltDependencies

在 package.json 内的 pnpm.onlyBuiltDependencies 内提供允许预构建的依赖包。即可避免使用 `approve-builds` 命令。

- https://pnpm.io/zh/settings#onlybuiltdependencies
- https://www.pnpm.cn/next/package_json#pnpmonlybuiltdependencies

### neverBuiltDependencies

`neverBuiltDependencies` 和 `onlyBuiltDependencies` 是互斥的配置，目前（2025-7-21）我没有使用。

- https://blog.nyaasu.top/front-end/electron_pnpm10.html
- https://www.idzd.top/archives/2923/
- https://github.com/pnpm/pnpm/issues/9032#issuecomment-2633440395
