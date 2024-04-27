# 用 VScode 的方式来运行调试 mv 项目

本小节内容涉及到了插件开发的内容，但是并不涉及具体代码编写，只涉及到简单的软件设置。

在实际开发的时候，会遇到这样的一个开发情况：我需要先对插件设置断点，然后再启动游戏触碰断点，随后再跟着进程一步一步的摸清楚代码的运行情况。虽然 RPGMV 本身会提供一个调试工具，按 F8 可以开启调试工具，但是这个工具是先启动游戏，再启动调试，然后我们才可以给目标代码设置断点。这个顺序不对，这样的顺序也不符合我们常见的软件开发，那我们就必须找到一个新的方法来启动 MV 项目代码。因此本小节问题还可以这样称呼：**如何在不使用 RPGMV 这款软件来独立启动其附属的 MV 项目代码？**

> [!caution]
> 这篇文档事实上已经过时了。[请阅读最新版（2024-01-03）的文章](./vscode+rmmv.md)。

## 技术栈

`VScode` + `Live Server` + `Chrome`

## 配置流程

下面介绍下面介绍基本流程。下面的安装流程和相关操作可以打乱一下顺序。

### 下载代码编辑器 VScode

从官网上下载，全称为`Visual Studio Code`。[点此进入官网](https://code.visualstudio.com/)

### 下载浏览器 Chrome

全称为`Google Chrome`。[点此进入官网](https://www.google.cn/chrome/)

### 下载 VScode 插件

在`VScode`中下载软件插件`Live Server`和`Debugger for Chrome`。

#### Live Server

具体截图如下：
![image-20220815124912429](https://raw.githubusercontent.com/RuanZhongNan/img-store/main/img/image-20220815124912429.png)

#### Debugger for Chrome

具体截图如下：
![image-20220815125004409](https://raw.githubusercontent.com/RuanZhongNan/img-store/main/img/image-20220815125004409.png)

### 配置 VScode 的 launch.json

在工程文件夹内找到文件夹`.vscode`，若没有则手动创建。新增并修改`launch.json`文件。

复制粘贴`Debugger for Chrome`提供的代码并作出小改动，更改**本地服务器端口号**和**调试器名称**。

可参考的`launch.json`配置写法如下：

```json
{
	// 使用 IntelliSense 了解相关属性。
	// 悬停以查看现有属性的描述。
	// 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
	// 更多配置教程，请访问：
	// https://www.bilibili.com/video/BV1jJ411c7zK
	// https://www.bilibili.com/video/BV11A411n7Lq

	// 版本号 暂无意义 直接复制粘贴即可
	"version": "0.2.0",
	"configurations": [
		{
			// 以Chrome浏览器来启动
			"type": "chrome",
			"request": "launch",
			// 调试器名称 可以自己任意取名 尽量不要取名为空字符串
			"name": "阮喵喵项目调试器(该名称在launch.json设置)",
			// VScode 的 live server 插件所提供的默认本地服务器端口为5500。
			"url": "http://localhost:8080",
			"webRoot": "${workspaceFolder}"
		}
	]
}
```

### 配置 VScode 的 Setting.json

在启动我们本地的 web 项目时，有时需要对`Live Server`插件提供的端口号进行调整，比如说将预设值`5500`调整成自己想要的其他数值。这时我们需要去`settings.json`文件内进行修改。

假设你已经学会了用`Live Server`启动 web，并假设我们要设置的端口号为`4399`。

首先，我们在本项目的`.vscode`文件夹内新建一个与`launch.json`文件并列的`settings.json`。
在`settings.json`中做以下配置：

```JavaScript
{
  "liveServer.settings.port": 4399,
  "liveServer.settings.root": "/"
}
```

我们不仅要修改`settings.json`的值，还要同步修改`launch.json`内`url`属性的值为`http://localhost:4399`，这样我们才算是修改好了`Live Server`的端口号。

[点此阅读其他的参考文章。](https://blog.csdn.net/qq_39438464/article/details/113783740)

### 配置浏览器 <Badge type='warning' text='非必要' />

找到装在电脑内的`Google Chrome`，并在其**属性**状态栏内的**快捷方式->目标**栏中添加代码： `–remote-debugging-port=9222` 。注意在填写时要注意前面要加上**空格**。

### 视频参考

具体教学可以参考以下两个 B 站教程：

- [原版](https://www.bilibili.com/video/BV1jJ411c7zK)
- [阮中楠改编版](https://www.bilibili.com/video/BV11A411n7Lq)

## 启动流程

下面介绍启动流程：

- 开启本地服务器
  在`VScode`下启动`Live Server`并开启本地服务器。

- 点击调试
  在`VScode`中找到`debugger`栏，并选择`debug`的工具。按 F5 运行/调试。

## 基本原理介绍与答疑

接下来介绍基本原理，并提出几个容易迷糊的问题。

### 为什么需要两个 VScode 插件？单独用一个 Debugger for Chrome 不行么？

我们的目的是为了在自己的电脑上面运行`MV`项目，说稍微专业一点就是：在自己的电脑上面的本地服务器上启动能够访问本地文件的前端代码。而`Debugger for Chrome`插件本身不提供**建立本地服务器**的功能，所以我们才要额外下载一个`Live Server`插件来建立并启动本地服务器。

### 为什么要先启动 Live Server 再使用 Debugger for Chrome？

只有先建立本地服务器才可以使用调试。建立本地服务器的最本质要求是，因为`MV`项目的本质是一个前端网页游戏，还是一个会调用本地的`.json`数据库文件的前端网页游戏，所以才需要建立本地服务器。只有本地服务器才可以调用本地文件。

### 为什么要额外设置 VScode 自动生成的 launch.json？

`launch.json`的本质是`VScode`提供给项目的*调试工具设置清单*。只有先设置好这个清单内容，告诉`VScode`我需要怎么样的调试工具，我们才可以用`VScode`启动/调试 MV 代码。
