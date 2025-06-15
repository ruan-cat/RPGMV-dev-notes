# vscode 的配置

vscode 是可以基于项目做出配置的，为了统一每一个人的 vscode 行为，故在这里配置文件。

配置语法我不讲。自己去 vscode 官网翻找。

## 核心配置文件

settings.json

前端组内最常用的，最核心的配置：

提供分支筛选的功能，仅仅筛选出前端小组的分支。

```json
{
	// 参考资料 https://github.com/mhutchie/vscode-git-graph/blob/develop/README.md
	"git-graph.customBranchGlobPatterns": [
		{
			"name": "f1小组分支",
			// 参考资料 https://stackoverflow.com/questions/45439796/globbing-in-git-log-to-show-certain-branches
			"glob": "*f1*"
		}
	]
}
```

## vscode 插件声明

extensions.json。用来声明本项目在开发中，几乎是不可或缺的 vscode 插件。他们极大地提高了我们的开发效率。

我不具体介绍细节了。你自己根据下面的插件 id，去搜索。

- https://marketplace.visualstudio.com/

```json
{
	"recommendations": [
		// vue3的 .vue SFCs 的 LSP 语言支持服务
		"Vue.volar",
		// 使用 prettier 实现格式化
		"esbenp.prettier-vscode",
		// 使用 eslint 实现代码检查
		"dbaeumer.vscode-eslint",
		// 使用 gitlens 插件 实现git代码管理
		"eamodio.gitlens",
		// 使用 git-graph 插件 实现git提交分支图的查看
		"mhutchie.git-graph",
		"streetsidesoftware.code-spell-checker",
		"christian-kohler.npm-intellisense",
		"sdras.vue-vscode-snippets",
		"hollowtree.vue-snippets",
		// UI交互增强插件 TODO高亮
		"wayou.vscode-todo-highlight",
		// UI交互增强插件 TODO树统计
		"Gruntfuggly.todo-tree"
	],
	"unwantedRecommendations": [
		// 不使用该插件 该插件事实上被官方弃用了
		"Vue.vscode-typescript-vue-plugin"
	]
}
```
