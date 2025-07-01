# 尝试使用 changelogithub 生成 github release 发行版

- https://github.com/unjs/changelogen
- https://github.com/antfu/changelogithub

这两个库，更加倾向于设置 github release 的发行版报告，而不是设置到 changelog 文件内。

实际使用下来，在 monorepo 内，效果不好。

工作流：

```yaml
- name: 生成github release的信息
	run: npx changelogithub
	env:
		GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

## 更改触发条件

在 monorepo 内，生成的 git tags 不是 v 开头的，需要改写触发条件。

```yaml
on:
  push:
    tags:
      - "@ruan-cat/*"
```

这产生了额外的心智负担。

## 单标签触发发版时成功

如果推送时，git tag 只包含一个包的标签时，就成功。

## 多标签触发发版时失败

### 上述的匹配方式会导致多个工作流启动

一个提交触发了两次部署。发包提交不应该触发多个部署的。

::: details 触发多个工作流

![2025-07-01-23-54-45](https://gh-img-store.ruan-cat.com/img/2025-07-01-23-54-45.png)

:::

### 并发发包导致的版本号重名

::: details

![2025-07-01-23-58-13](https://gh-img-store.ruan-cat.com/img/2025-07-01-23-58-13.png)

:::

上面说包没有发行，然后实际发行的时候，又被另外的工作流完成了，被干扰了，导致本工作流无法继续执行。

因为已经被完成了，所以发包才会出现这种上下矛盾的情况。

::: details

<<< ./error-2025-7-1-01.log

:::

### 多标签导致 github 修改日志的 url 生成失败

格式不对，无法生成基于 tag 标签的 github 修改日志。

::: details

<<< ./error-2025-7-1-02.log

:::
