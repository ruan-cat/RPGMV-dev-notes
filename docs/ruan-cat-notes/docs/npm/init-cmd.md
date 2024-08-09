# 初始化命令

npm 和 pnpm 有多个等效的初始化 node 项目的命令。对这些命令别名和参数很疑惑。

经过实验，发现这几个命令都是等效的：

```bash
pnpm create cloudflare@latest cfw-08-09-v012 -y

# pnpm的init没有-y命令
# pnpm init cloudflare@latest -y
# 有疑惑 这行命令似乎语法就是错的
# pnpm init cloudflare@latest

pnpx create-cloudflare@latest cfw-08-09-v013 -y
pnpm dlx create-cloudflare@latest cfw-08-09-v014 -y

# 有疑惑 npm的-y命令无法实现默认选择问题的功能
npm create cloudflare@latest cfw-08-09-v015 -y

# 有疑惑 npm的-y命令无法实现默认选择问题的功能
npm init cloudflare@latest cfw-08-09-v016 -y

npx create-cloudflare@latest cfw-08-09-v017 -y
```

::: details cloudflare 命令行 参考资料

- https://developers.cloudflare.com/workers/get-started/guide/
- https://developers.cloudflare.com/d1/get-started/
  :::

::: details 别名命令 参考资料

- npm [init](https://github.com/npm/cli/blob/latest/docs/lib/content/commands/npm-init.md)
- stackoverflow [what-is-the-npm-create-command](https://stackoverflow.com/questions/57133219/what-is-the-npm-create-command)

- pnpm [dlx](https://pnpm.io/zh/cli/dlx)
- pnmp [create](https://pnpm.io/zh/cli/create)

- 掘金 [npm create 命令](https://juejin.cn/post/6844903909958352909)

:::
