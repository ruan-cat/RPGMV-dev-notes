---
dir:
  collapsible: false
  link: true
---

# 升级依赖

## 升级满足匹配规则的依赖

比如此配置，升级项目内全部满足 `@ruan-cat` 前缀的依赖，并升级到最后一个版本。

### pnpm9.5.0

```bash
pnpm up @ruan-cat/*@latest
```

### pnpm9.15.0

在 pnpm9.15.0 内，无法完成升级。要写成以下形式才行，做完整的匹配：

```bash
pnpm update '@ruan-cat/*' --latest
```

### pnpm9.15.0 的单包升级依赖

非常诡异，搞不懂。上面的写法在单独的包内，是不能完成升级的。会报错。

```bash
pnpm update '@ruan-cat/*' --latest
```

::: details 运行 `pnpm update '@ruan-cat/*' --latest` 命令

![2025-06-25-03-22-12](https://gh-img-store.ruan-cat.com/img/2025-06-25-03-22-12.png)

:::

::: details 直接报错

![2025-06-25-03-22-58](https://gh-img-store.ruan-cat.com/img/2025-06-25-03-22-58.png)

<<< ./error-002.log

:::

不明白为什么过几个月后，之前能用的方案就又不能用了。按照报错，说是 `--latest` 参数在加上单引号的范围查询内，是不能使用的。

在几个项目内反复折腾了一下，现在又不得不写成 9.5.0 版本的写法，只不过加上了单引号，以范围查询的方式升级依赖。

```bash
pnpm up '@ruan-cat/*@latest'
```

目前（2025-6-25），这个写法在多个项目内都能正常工作。

### pnpm9.15.0 的 -F monorepo 升级依赖

我手上有 2 个 monorepo 项目，这个筛选参数又莫名其妙的不通用。一个项目能用，另一个项目又不能用了。

针对以下命令：

```bash
pnpm -F=* up @ruan-cat/*@latest
```

我在文档项目内，是可以正常运行的，到了别的 monorepo 项目，又不行了。

::: details 使用全量筛选参数升级整个项目全部包的依赖

![2025-06-25-03-32-45](https://gh-img-store.ruan-cat.com/img/2025-06-25-03-32-45.png)

:::

::: details 失败

![2025-06-25-03-34-09](https://gh-img-store.ruan-cat.com/img/2025-06-25-03-34-09.png)

又莫名其妙的提示说，没有匹配到任何子包。

<<< ./error-003.log

:::

### pnpm9.15.0 的 -r monorepo 升级依赖

针对上面 `-F=*` 参数无法筛选任何子包的错误，目前只能用更加保守的写法，完成升级：

```bash
pnpm -w up '@ruan-cat/*@latest' && pnpm -r up '@ruan-cat/*@latest'
```

## 升级全部依赖

这个写法是错误的：

```bash
pnpm up *@latest
```

会引发以下报错：

::: details

<<< ./error.log

:::

正确的写法应该是：

```bash
pnpm up * @latest
```

更加精简的写法：

```bash
pnpm up -L
```

在 monorepo 内的写法，增加 `-r` 参数即可。连同根包也能匹配到位。

```bash
pnpm -r up -L
```
