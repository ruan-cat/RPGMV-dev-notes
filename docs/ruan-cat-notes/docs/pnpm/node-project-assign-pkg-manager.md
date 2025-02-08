# 在 node 项目内约束包管理器

这里特别说明如何约束 node 项目的包管理器为 pnpm

```json
{
	"scripts": {
		"preinstall": "npx only-allow pnpm"
	},
	"packageManager": "pnpm@8.12.0"
}
```

## 用 corepack 自动升级最高版本的 pnpm

```bash
corepack use pnpm@latest
```

有疑惑 我现在很怀疑，能不能在 preinstall 这里加上该命令，用 node 环境去安装最高版本的 pnpm，自动去实现特定依赖的安装，包管理器的控制？

### 不认为这个方案很合适

升级 pnpm 版本时，应该用 pnpm 自己实现全局升级，而不是借助 corepack。

```bash
pnpm up -g pnpm@latest
```

## pnpm 自己认输啦，要依赖于 corepack 了

好像是 9 版本，在 pnpm9 版本内，不能原地升级了，要依赖于 corepack 才行。

```bash
corepack install -g pnpm@latest
```

## 用 corepack 实现当前 node 项目的包管理器设置

- https://lyh543.github.io/posts/2023-04-28-install-pnpm-by-corepack.html

不同的 node 项目，其 package.json 配置的 packageManager 是不一样的。有的项目配置了 8 版本的 pnpm，而有的是 9 版本 pnpm。

为了让每一个不同的 node 项目，都有自己对应的，符合 packageManager 配置的包管理器，应该使用 corepack 实现安装和配置。

在 node 项目内运行以下命令：

```bash
# 确定开启 corepack 功能
corepack enable

# 根据 packageManager 的配置，安装对应的包管理器
corepack install
```

### 实际举例

- 没有配置 packageManager 的 node 项目

![2024-05-12-17-07-27](https://gh-img-store.ruan-cat.com/img/2024-05-12-17-07-27.png)

- `"packageManager": "pnpm@8.15.8"`

![2024-05-12-17-08-26](https://gh-img-store.ruan-cat.com/img/2024-05-12-17-08-26.png)

- `"packageManager": "pnpm@9.0.4"`

![2024-05-12-17-09-02](https://gh-img-store.ruan-cat.com/img/2024-05-12-17-09-02.png)

- `"packageManager": "pnpm@8.14.1"`

![2024-05-12-17-09-47](https://gh-img-store.ruan-cat.com/img/2024-05-12-17-09-47.png)

- `"packageManager": "pnpm@8.15.8"`

![2024-05-12-17-10-23](https://gh-img-store.ruan-cat.com/img/2024-05-12-17-10-23.png)

上述例子就实现了，不同项目内使用不同版本的包管理器。
