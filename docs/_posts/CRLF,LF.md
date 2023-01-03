---
title: CRLF,LF
date: 2022-12-02 11:20:40
permalink: /pages/00fbf5/
sidebar: auto
categories:
  - 尚未分类
---


## CRLF,LF
这个东西会影响svn和git的文件提交。有时候会出现文本相同但是文件不匹配的情况，目前我的项目是svn和git共同使用的，所以经常会出现类似的提交问题。git切换分支并修改后，会导致大部分文件出现重复修改的情况，进而导致每次svn的提交都会要求提交过多无意义的内容。

经过检查和排查，目前发现引起这一类现象的原因是文件的CRLF和LF之间的差异。

## git对CRLF差异的配置
参考资料
https://blog.csdn.net/qq_36587420/article/details/114380288

目前没有查询到更多相关的配置。猜测很多东西都可以配置CRLF和LF。

## 用editorconfig来配置
https://editorconfig.org/#example-file
在项目根目录下配置.editorconfig文件。目前暂时不使用，因为配置该例子后，prettier的格式化似乎受到影响。就会使用双引号而不是期望的单引号。

## vscode本身的配置
在首选项内搜索eol来配置。
