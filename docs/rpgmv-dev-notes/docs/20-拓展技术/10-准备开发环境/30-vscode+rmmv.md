---
permalink: /prepare-develop-environment/use-vscode-plugins-launch-mv/
order: 30
shortTitle: 用vscode插件运行mv项目
---

# 用 vscode 运行并调试 rmmv 项目

## 单纯的运行 html 文件

### 原理解释

其配置的本质是借用 vscode 的插件启动本地服务器，然后打开浏览器访问本地服务器。

### 安装 ms-vscode.live-server 插件

- [vscode 插件 ms-vscode.live-server](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)

![2024-01-03-11-49-01](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-03-11-49-01.png)

### 预览项目

这里以钻头的项目为例。点击侧边栏预览，开启 3000 端口，在 vscode 内预览。

![2024-01-03-11-49-31](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-03-11-49-31.png)

也可以自己去其他的浏览器手动打开。如下例子所示：

### chrome

![2024-01-03-11-50-08](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-03-11-50-08.png)

### edge

![2024-01-03-11-50-27](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-03-11-50-27.png)

### QQ 浏览器

![2024-01-03-11-50-42](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-03-11-50-42.png)

## 使用 vscode 的调试功能

- https://blog.csdn.net/lvyiwuhen/article/details/115867663

### 原理解释

其配置的本质是以 chrome 浏览器文件协议的方式打开 html 文件。

### 配置 launch.json 文件

在 `.vscode/launch.json` 内填写一下配置：

```json
{
	// 使用 IntelliSense 了解相关属性。
	// 悬停以查看现有属性的描述。
	// 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
	"version": "0.2.0",
	"configurations": [
		{
			// 修改启动的名字
			"name": "rmmv",
			// 用来启动chrome浏览器
			"type": "chrome",
			"request": "launch",
			"sourceMaps": true,
			"webRoot": "${workspaceFolder}",
			// 会自动生成一个 ${tmpdir} 文件名，如果报错可以开启这个选项
			"userDataDir": "${tmpdir}",
			// 更改属性名为"file"，属性值此时表示此时打开的文件，就不需要手动改文件路径了。
			"file": "${workspaceFolder}/index.html",
			// 需要跨域的话就打开以下注释。预先在源码目录创建文件夹 UserDataDir
			"runtimeArgs": ["--disable-web-security", "--user-data-dir=${workspaceRoot}\\UserDataDir"],
			"runtimeExecutable": "stable"
		}
	]
}
```

### 以调试模式运行项目

启动该调试配置即可。

![2024-01-03-12-41-43](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-03-12-41-43.png)

会自己打开 chrome 浏览器。可以做断点调试了。

![2024-01-03-12-45-30](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-03-12-45-30.png)
