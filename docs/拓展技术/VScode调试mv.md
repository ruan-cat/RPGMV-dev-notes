---
title: VScode调试mv
---

# 用VScode的方式来运行调试mv项目

本小节内容涉及到了插件开发的内容，但是并不涉及具体代码编写，只涉及到简单的软件设置。

在实际开发的时候，会遇到这样的一个开发情况：我需要先对插件设置断点，然后再启动游戏触碰断点，随后再跟着进程一步一步的摸清楚代码的运行情况。虽然RPGMV本身会提供一个调试工具，按F8可以开启调试工具，但是这个工具是先启动游戏，再启动调试，然后我们才可以给目标代码设置断点。这个顺序不对，这样的顺序也不符合我们常见的软件开发，那我们就必须找到一个新的方法来启动MV项目代码。因此本小节问题还可以这样称呼：**如何在不使用RPGMV这款软件来独立启动其附属的MV项目代码？**

下面介绍下面介绍基本流程。下面的安装流程和相关操作可以打乱一下顺序。

## 下载代码编辑器VScode
从官网上下载，全称为```Visual Studio Code```。[点此进入官网](https://code.visualstudio.com/)

## 下载浏览器Chrome
全称为```Google Chrome```。[点此进入官网](https://www.google.cn/chrome/)

## 下载VScode插件
在```VScode```中下载软件插件```Live Server```和```Debugger for Chrome```。

## 配置VScode的launch.json
在工程文件夹内找到文件夹```.vscode```，若没有则手动创建。新增并修改```launch.json```文件。

复制粘贴```Debugger for Chrome```提供的代码并作出小改动，更改**本地服务器端口号**和**调试器名称**。

## 配置浏览器
找到装在电脑内的```Google Chrome```，并在其**属性**状态栏内的**快捷方式->目标**栏中添加代码： ```–remote-debugging-port=9222``` 。注意在填写时要注意前面要加上**空格**。

## 视频参考
具体教学可以参考以下两个B站教程：
- [原版](https://www.bilibili.com/video/BV1jJ411c7zK)
- [阮中楠改编版](https://www.bilibili.com/video/BV11A411n7Lq)

