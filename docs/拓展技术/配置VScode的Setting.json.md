---
title: 配置VScode的Setting.json
---

# 如何编写控制Live Server插件的settings.json文件并改变其端口号

在启动我们本地的web项目时，有时需要对```Live Server```插件提供的端口号进行调整，比如说将预设值```5500```调整成自己想要的其他数值。这时我们需要去```settings.json```文件内进行修改。

假设你已经学会了用```Live Server```启动web，并假设我们要设置的端口号为```4399```。

首先，我们在本项目的```.vscode```文件夹内新建一个与```launch.json```文件并列的```settings.json```。
在```settings.json```中做以下配置：

``` JavaScript
{
  "liveServer.settings.port": 4399,	
  "liveServer.settings.root": "/"
}
```

我们不仅要修改```settings.json```的值，还要同步修改```launch.json```内```url```属性的值为```http://localhost:4399```，这样我们才算是修改好了```Live Server```的端口号。

[点此阅读其他的参考文章。](https://blog.csdn.net/qq_39438464/article/details/113783740)