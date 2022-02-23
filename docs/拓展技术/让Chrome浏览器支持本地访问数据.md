---
title: 让Chrome浏览器支持本地访问数据
---

## 具体解释与实现方式
经典的```ajax```所支持的协议不包括```file```协议，也就是本地访问文件。为了让```Chrome```可以直接调用本地的数据，可以按照以下的设置实现。

找到装在电脑内的```Google Chrome```，并在其**属性**状态栏内的**快捷方式->目标**栏中添加代码：``` --allow-file-access-from-files```。注意在填写时要注意前面要加上空格。

如果控制台报出以下的错误，那么就可以判断是跨域浏览的问题了。
``` JavaScript
Access to XMLHttpRequest at ‘文件地址’ from origin 'null' has been blocked by CORS policy: 
Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
``` 

[点此阅读关于```--allow-file-access-from-files```的文章。](https://blog.csdn.net/weixin_41697143/article/details/80784701)











## 为什么不能直接通过点击index.html文件的方式来启动mv项目？

因为浏览器打开```index.html```文件时，使用的是**file协议**，而不是```ajax```所支持的协议，而且mv项目本身一定会导入```.json```文件，这就共同触发了**跨域浏览**问题。当前浏览器的**file协议**无法访问本地```.json```数据。

解决这种问题的方式，这里笔者介绍两个。

### 使用ajax所支持的协议来打开html文件
指的是，可以使用http的协议来访问该文件。具体做法是：搭建一个本地的服务器，进而访问文件。原理是如此的，具体实现操作可以参考[VScode调试mv](./VScode调试mv.md)。

### 设置浏览器，使其支持file协议的浏览
关于此方案，可以参考[让Chrome浏览器支持本地访问数据](./让Chrome浏览器支持本地访问数据.md)。