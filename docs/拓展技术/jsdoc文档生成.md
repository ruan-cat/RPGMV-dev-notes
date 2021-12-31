---
title: jsdoc文档生成
---

# 如何使用基于node.js的JSDoc制作自己写的mv项目插件代码的API网页版说明文档

在插件开发中，我们会写出很多的代码。为了使其他人更好地阅读我们的代码，除了在代码中写上注释，还有生成```API接口文档```的方式来帮助他人阅读代码。对于```JavaScript```这种弱类型的语言来说，就更需要写注释了。对于mv项目来说，大部分的插件代码都没有写注释，那我们要本着负责的态度，对自己的代码负责，就更需要写清楚自己代码的注释。

## jsdoc是什么？
在生成API接口文档之前，我们要先了解```JSDoc```是什么？```JSDoc```不仅是一个**API接口生成工具**，更是一种**注释语法**，它类似于```JavaDoc```，更确切地讲，```JSDoc```就是从```JavaDoc```引申而来的。在使用```JSDoc```工具之前，我们要先学会其注释语法。事实上，```VScode```本身就自动对```JavaScript```支持```JSDoc```，学习成本会大幅下降。

[点此阅读JSDoc在线手册](http://www.dba.cn/book/jsdoc/)

在CSDN中，绝大多数的```JSDoc```使用教程都在使用极其熟悉的```npm```包导入方式，要想使用```npm```，就必须先安装[NodeJS环境](https://blog.csdn.net/qq_39308408/article/details/97754889)。安装完```NodeJS```后，[JSDoc的安装和使用](https://blog.csdn.net/qq_44810574/article/details/89194784)就极其容易了。

## jsdoc的简单使用
下面简单介绍基本流程。关于node安装，建议读者自行去CSDN查询关于node.js环境的安装配置教程。

### 安装node环境
去[node官网](https://nodejs.org/en/download/)下载```windows installer```版本的安装包。

### 配置npm
在你的```nodejs```目录下创建两个目录，分别是```node_cache```和```node_global```。在```cmd```执行下面这两个命令： 
``` bash
npm config set prefix  '你的安装位置\nodejs\node_global'
npm config set cache  '你的安装位置\nodejs\node_cache'
```

### 配置环境变量
在环境变量的配置界面配置```NODE_PATH```，值填：```你的安装位置\nodejs\node_global\node_modules```
修改```Path```中含有```npm```值的式子，修改为：```你的安装位置\nodejs\node_global\```

### 安装jsdoc
在```cmd```输入以下命令安装```jsdoc```
``` bash
npm install -g jsdoc
```

### 使用jsdoc命令
找到自己写插件代码所储存的上一层级文件夹目录，在此目录中打开```cmd```。在此```cmd```中输入以下命令。
``` bash
jsdoc -r 文件夹名称
```

### 阅览生成的文档
在新生成的```out```文件夹内点击```index.html```文件即可检查自己所写插件代码的API接口文档。
