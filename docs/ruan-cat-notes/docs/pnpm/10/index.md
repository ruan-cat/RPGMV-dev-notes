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
