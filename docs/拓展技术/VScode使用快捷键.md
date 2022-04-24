---
title: VScode使用快捷键
date: 2022-04-22 09:00:25
permalink: /pages/c73398/
categories:
  - 拓展技术
tags:
  - 
---

# VScode使用快捷键
这里的快捷键使用不一定适用于mv插件开发，更多的是拓展代码编写能力。


## koroFileHeader插件的快捷键
`VScode`的`koroFileHeader`插件可以生成代码的头部注释。手动为代码生成头部注释的快捷键是`Ctrl+Window+I`。使用快捷键`Ctrl+Shift+P`输入命令`@command:extension.fileheader`或输入命令`fileheader`也可以生成头部注释。



## shakeText 晃动文本的配置写法
这里提供shakeText的配置范例写法，你可以根据以下的范例自行更改。
``` js
shakeText({
  text: "一串字符",
  mode: "horizontal",
  padding: 22,
  period: 60
});
```


