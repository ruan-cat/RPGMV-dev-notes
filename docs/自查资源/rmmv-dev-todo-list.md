---
title: rmmv-dev-todo-list
date: 2022-07-06 11:46:31
permalink: /pages/4c52ff/
---

## 作者对于rmmv的工作目标（rmmv开发待办）

### drill page图片层级调整实验
重新考虑静态资源文件与`md`文件的组织层级，不一定放在同一个文件夹下，而是在`\docs\.vuepress\public\img`内。因为图片`id`不更改

#### 实现方式
1.1： 设计pandoc命令生成的文件路径名。
1.2： 设计全局字符串替换的规则。
1.3： 设计路由自动生成的规则。设计依赖于文件夹路径的路由名称。处理拼音中文名的路由配置。查询vdoing的路由配置写法。
未来期望情况：
2： 提供公共的图片集，不做img图片的分仓库管理。未来再考虑自动化上传img图片与md引用路径的绝对替换。







### 使用ts模块化rmmv，实现一个cli
- 让webpack管理，运行，打包一个小规模的demo
- 让这个小规模的demo迁移到vue-cli内，将配置迁移，缩减至‘vue.config.js’内
- 模块化rmmv，迁移至vue-cli内。
- 标记，推广为‘rmmv-cli’
- js -> ts 发布‘rmmv-ts-cli’


### 学习代码压缩技术
代码压缩尝试
uglifyjs





### 待学习的jsdoc2md技术
这个技术可以将jsdoc转变成md。
https://github.com/jsdoc2md/jsdoc-to-markdown

https://github.com/jsdoc2md/jsdoc-to-markdown/blob/master/docs/API.md


### 待研究的光追技术
YEP_GridFreeDoodads.js
FilterController.js
ParticleEmitter.js
https://sigmasuccour.itch.io/false-server
遊戲這裡下載




### 错误日志本地导出的功能

### js文件的自动检测更新，下载文件与模块异步加载

### 设计模式的学习
继承、组合、聚合。这三种东西怎么实现？有什么优缺点？在什么时候使用最好？



### 在线运行的rmmv
CodeSandbox，代码在线运行器，云IDE，这个工具稍做改动，兴许就可以在线运行一个rmmv了。







