---
dir:
  collapsible: false
  link: true
---

# 升级依赖

## 升级满足匹配规则的依赖

比如此配置，升级项目内全部满足 `@ruan-cat` 前缀的依赖，并升级到最后一个版本。

```bash
pnpm up @ruan-cat/*@latest
```

## 升级全部依赖

这个写法是错误的：

```bash
pnpm up *@latest
```

会引发以下报错：

::: details

@[code](./error.log)

:::

正确的写法应该是：

```bash
pnpm up * @latest
```
