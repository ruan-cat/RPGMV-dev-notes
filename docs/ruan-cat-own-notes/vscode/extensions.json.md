# extensions.json 的配置

在使用 vscode 开发时，常用插件可以伴随着项目一同配置。形成项目推荐的插件配置文件。

- 主动通知安装插件

![image-20230131091920983](https://raw.githubusercontent.com/RuanZhongNan/img-store/main/img/image-20230131091920983.png)

当前项目可以通知 vscode 安装指定插件 https://blog.csdn.net/chenrongwei92/article/details/119523252

## 个人常用的插件

这里仅仅是笔者个人常用的 vscode 插件，在此记录，方便在其他项目内快速配置 extensions.json 文件。

```json
{
	"recommendations": [
		// 代码格式化： 针对前端开发常见文件的格式化工具
		"esbenp.prettier-vscode",
		// LSP语言服务： vue2.7 / vue3的 .vue SFCs 的 LSP 语言支持服务
		"vue.volar",
		// LSP语言服务： vscode针对scss语言的LSP语言支持服务
		"mrmlnc.vscode-scss",
		// LSP语言服务： 针对vue3+typescript下的语言支持服务
		"vue.vscode-typescript-vue-plugin",
		// 优化开发体验： TODO字符串高亮
		"wayou.vscode-todo-highlight",
		// 优化开发体验： tags标签匹配高亮
		"vincaslt.highlight-matching-tag",
		// 优化开发体验： i18n字符串翻译高亮
		"lokalise.i18n-ally",
		// 优化开发体验： icon字符串语义化转换
		"antfu.iconify",
		// 优化开发体验：增强的typescript报错提示
		"yoavbls.pretty-ts-errors",
		// 代码片段： 针对element-ui组件库的代码片段。
		"oibit.element-ui-helper",
		// 小工具： 根据js的json字面量，生成ts类型
		"russell.any-type"
	]
}
```
