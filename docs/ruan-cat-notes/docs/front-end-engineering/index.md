# 前端工程化

`前端工程化`包含了很多内容。

## 参考资料

TODO: 认为这个仓库值得学习。看看人家是怎么实现配置的。

- https://github.com/dishait/tov-template

## 整体导论

TODO: `前端工程化`肯定有别人整理好的总结、入门概论等。需要去收集并阅读一遍。

## simple-git-hooks

用来创建 git 钩子的。我们用 git 钩子来做各种事情，比如在 commit 信息钩子，提交前钩子内做事情。

- 仓库： https://github.com/toplenboren/simple-git-hooks

常见的用法是这样的：

- 在 `commit钩子` 内对提交信息做校验。
- 在 `提交前钩子` 内做代码格式化。

### 安装

```bash
pnpm i -D simple-git-hooks
```

### 配置钩子命令

我们通常在这些钩子内，配置各种各样的 lint 或 format 用途命令。

按照官方文档的[`Additional configuration options`](https://github.com/toplenboren/simple-git-hooks/blob/master/README.md#additional-configuration-options)所述，根据可以被识别的文件类型，这里推荐编写独立的配置文件 `simple-git-hooks.mjs` 。

举例如下：

```js
export default {
	// "commit-msg": "npx --no-install commitlint --edit '$1'",
	"pre-commit": "npx lint-staged",
	"pre-push": "pnpm run format",
};
```

这里就不赘述可以配置的钩子选项，和 git hooks 的概念了，详情可以看以下文章。

- [`《用simple-git-hooks防止同事提交垃圾代码》`](https://juejin.cn/post/7455229927191805992)

### 配置命令行

常见用法是，在 package.json 的 `postinstall` 钩子内，主动运行该命令，生成

```json
{
	"scripts": {
		"postinstall": "pnpm run init-git-hooks",
		"init-git-hooks": "simple-git-hooks"
	}
}
```
