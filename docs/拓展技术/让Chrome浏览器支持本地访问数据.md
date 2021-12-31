---
title: 让Chrome浏览器支持本地访问数据
---

# 具体解释与实现方式
经典的```ajax```所支持的协议不包括```file```协议，也就是本地访问文件。为了让```Chrome```可以直接调用本地的数据，可以按照以下的设置实现。

找到装在电脑内的```Google Chrome```，并在其**属性**状态栏内的**快捷方式->目标**栏中添加代码：``` --allow-file-access-from-files```。注意在填写时要注意前面要加上空格。

如果控制台报出以下的错误，那么就可以判断是跨域浏览的问题了。
``` JavaScript
Access to XMLHttpRequest at ‘文件地址’ from origin 'null' has been blocked by CORS policy: 
Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
``` 

[点此阅读关于```--allow-file-access-from-files```的文章。](https://blog.csdn.net/weixin_41697143/article/details/80784701)