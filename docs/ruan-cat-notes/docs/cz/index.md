# 以 commitizen 为中心的 git 提交格式化工具

commitizen，简称 cz，他用于管控我们 git commite 提交。

相关的配置很多，附属插件，依赖也很多。目前（2024-10-23）暂不考虑继续折腾该内容。

## 最低限度的快速初始化 cz

我手上已经有很多项目了，需要实现最低限度的初始化。

0. 全局安装 commitizen

为提高效率，需要高效率的使用 `cz` 来快速在命令行内写 commit，全局包才提供这样的功能。故我会全局安装该依赖。

```bash
pnpm i -g commitizen
```

1. 安装依赖

```bash
pnpm i -D commitizen cz-git
```

2. 配置 commitizen 使用的规则

在 package.json 内：

```json
{
	"config": {
		"commitizen": {
			"path": "node_modules/cz-git"
		}
	}
}
```

这就可以了。
