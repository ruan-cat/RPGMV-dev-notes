# i18n-ally i18n 翻译增强插件

## 在单仓项目应该主动开启并填写 i18n-ally.enabledFrameworks 配置

- https://github.com/lokalise/i18n-ally/issues/997
- https://github.com/lokalise/i18n-ally/wiki/FAQ#-i-am-working-on-a-monorepo-and-the-extension-can-not-detect-my-project

上述 issue 是我发的。事实上官方 wiki 文档说的很清楚：在单仓项目内，插件不提供自动框架识别，应该自己填写声明。

在 setting.json 内：

```json
{
	// 单仓项目需要主动声明所使用的框架。
	"i18n-ally.enabledFrameworks": ["vue"]
}
```
