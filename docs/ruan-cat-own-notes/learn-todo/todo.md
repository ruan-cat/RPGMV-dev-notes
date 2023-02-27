# 个人学习待办

## 设计模式的学习

继承、组合、聚合。这三种东西怎么实现？有什么优缺点？在什么时候使用最好？

## 设计模式

https://notes.youngkbt.cn/design-pattern

## 什么是微前端技术？

了解关于微前端的技术
https://qiankun.umijs.org/zh

## 构建便于查询的数据结构？

查询？目前有这几种方式实现可以查询性质的数据结构构建。

1： find 函数直接查询。
2： 构建查询用的数据结构。
2.1： Object.assign
2.2： Object.fromEntries

## screen to gif

一款录制工具。需要检查。看看和 LICEcap 之间的差异？

## 前端学习待办：

FileSaver

## vue3 的 ref 函数

韦景堂称 ref 函数可以有效的，优雅的实现异步数据获取与页面组件渲染之间的关联问题。

我目前没有学到更好的解决方案，不知道蔡德东有没有更加优雅合适的方案：
1： 简单粗暴的方式
必须等待异步数据到了以后，才开始做组件渲染。直接 v-if 或者是 key 来控制组件渲染。
2： 麻烦但是交互较好的方式
watch 或者是 compute 数据。监听数据变化，只要变化了，就更新变量并实现数据的响应式渲染。

韦景堂称该 ref 函数可以克服上述方案的困境。有待尝试。

## vue 组件的即使阅览与单元测试

文章
https://www.v2ex.com/t/840680

仓库
https://github.com/jaweii/AutoPreview/blob/main/README-zh.md

### 当前进度

vue2 不行，vue3 生态下可以考虑配置

## 学习 rouyi 的搜索栏功能

在 https://gitee.com/y_project/RuoYi-Vue 内，其顶部导航栏的搜索栏非常有用，有空可以考虑嵌套使用。
HeaderSearch 组件
