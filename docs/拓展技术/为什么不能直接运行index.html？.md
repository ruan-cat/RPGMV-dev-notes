---
title: 直接运行index.html来启动mv
---

# 为什么不能直接通过点击index.html文件的方式来启动mv项目？

因为浏览器打开index.html文件时，使用的是file协议，而不是ajax所支持的协议，而且mv项目本身一定会导入.json文件，这就共同触发了“跨域浏览”问题。当前浏览器的file协议无法访问本地.json数据。

解决这种问题的方式，这里笔者介绍两个：

## 使用ajax所支持的协议来打开html文件
指的是，可以使用http的协议来访问该文件。具体做法是：搭建一个本地的服务器，进而访问文件。原理是如此的，具体实现操作可以参考本文的“如何使用VScode来调试RMMV项目(VScode+Live Server+Debugger for Chrome+launch.json)”。

## 设置浏览器，使其支持file协议的浏览
关于此方案，可以参考[让Chrome浏览器支持本地访问数据](./让Chrome浏览器支持本地访问数据.md)。



