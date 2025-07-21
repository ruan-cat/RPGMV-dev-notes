# pnpm10

这个 10 版本真的要命。

- https://zhuanlan.zhihu.com/p/17067327424

## 默认的钩子脚本不再自动运行了

比如安装依赖时，常见的 postinstall 命令，现在在 pnpm10 版本不再主动运行了。

## ERR_PNPM_VIRTUAL_STORE_DIR_MAX_LENGTH_DIFF

我在安装全局依赖时，出现这个问题：

```bash
 ERR_PNPM_VIRTUAL_STORE_DIR_MAX_LENGTH_DIFF  This modules directory was created using a different virtual-store-dir-max-length value. Run "pnpm install" to recreate the modules directory.
```

- https://github.com/pnpm/pnpm/issues/8972#issuecomment-2649654519

issue 说运行以下命令即可：

```bash
pnpm i -g
```
