# 代码片段生成工具

- https://codess.dumogu.top/
- https://github.com/wudawuer/codess

这些代码片段，几乎是一次性生成使用的。每次都生成一次，然后长期使用。

## 安装依赖

```bash
pnpm i -D codess
```

这个包推荐安装成全局依赖，单次使用即可。可以用 `pnpm dlx` 或者是 `npx` 的方式使用。

## 在具体项目内初始化

运行初始化命令：

```bash
codess init
```

然后生成出 `codess.config.json` 配置文件，如下：

<<< ./codess.config-init.json

不推荐将这个配置文件上传到仓库内，因为我推荐单次使用该内容。

## 编写代码片段文档

比如我用 markdown 编写以下的代码片段：

在 snippets\annotation.md 内新建文件：

````txt
	<!-- prettier-ignore-start -->
	## annotation
	通用的注释模板。
	```
	/** $1 */
	```

	## annotation-toset
	通用的注释模板。多了一个额外的占位符，表示应该替换并填充值。
	```typescript,javascript
	/** toset */
	```

	## annotation-toset
	通用的注释模板。特指常用的 jsdoc @type 的模板。主要用在给单个变量导入 typescript 类型。
	```javascript
	/** @type { $1 } */
	```

	<!-- prettier-ignore-end -->
````

为了避免在 markdown 文档内，出现 prettier 格式化的干扰。这里我加上了 prettier-ignore 相关的注释。codess 允许我们使用 markdown 文档来编写代码片段，但是也有着严格的格式要求，不允许加上冗余的换行符。故我们需要让 vscode 的 prettier 格式化插件避免格式化该 md 文档。

## 配置识别本地的 md 文档

在 `codess.config.json` 配置文件内，配置识别文件。应为我们的代码片段是在 snippets 文件夹内写的，所以在配置文件内，我们要写上 snippets。

<<< ./codess.config-with-file.json

## 运行生成文件命令

运行命令：

```bash
codess build
```

## 检查生成出来的代码片段文件

`.vscode\file%3Asnippets.codess.code-snippets` 就是生成出来的 vscode 代码片段了。

::: details 代码片段文件

<<< ./codess.code-snippets

:::
