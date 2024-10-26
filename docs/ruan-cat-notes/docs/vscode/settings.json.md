# Settings.json 与配置

## 自动格式化

当我们为`VScode`设置**自动格式化**配置时，应该使用局部的配置，而不是个人账户的全局配置。

### 界面化的配置 <Badge type="tip" text="推荐的快速配置" />

进入设置界面，搜索`formatOnSave`，并在设置界面内做出差异性的改动。这里建议是让个人的全局配置为否，局部配置为是。界面如下图所示：

- 个人全局配置为否：

![image-20220708110100034](https://raw.githubusercontent.com/ruan-cat/img-store/main/img/image-20220708110100034.png)

- 工作区局部配置为真

![image-20220708110118798](https://raw.githubusercontent.com/ruan-cat/img-store/main/img/image-20220708110118798.png)

### 手动的 json 配置 <Badge type="warning" text="稳妥的保守配置" />

有时候需要依赖于手动的`.json`配置来实现，手动新建`.vscode\settings.json`文件，写入以下配置：

```json {2}
{
	"editor.formatOnSave": true,
	"formattingToggle.affects": ["editor.formatOnPaste", "editor.formatOnSave", "editor.formatOnType"]
}
```

### 参考资料

https://blog.csdn.net/weixin_43343144/article/details/105345307

## path-intellisense.mappings

TODO:

```json
{
	"path-intellisense.mappings": {
		"/@/": "${workspaceRoot}/src"
	}
}
```
