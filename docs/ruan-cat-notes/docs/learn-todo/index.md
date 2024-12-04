# 个人学习待办

## 设计模式的学习

继承、组合、聚合。这三种东西怎么实现？有什么优缺点？在什么时候使用最好？

## 设计模式

- https://notes.youngkbt.cn/design-pattern

## 什么是微前端技术？

了解关于微前端的技术

- https://qiankun.umijs.org/zh

## 构建便于查询的数据结构？

查询？目前有这几种方式实现可以查询性质的数据结构构建。

1： find 函数直接查询。
2： 构建查询用的数据结构。
2.1： Object.assign
2.2： Object.fromEntries

## screen to gif

一款录制工具。需要检查。看看和 LICEcap 之间的差异？

## 前端学习待办

FileSaver

## vue3 的 ref 函数

WeiJingTang 称 ref 函数可以有效的，优雅的实现异步数据获取与页面组件渲染之间的关联问题。

我目前没有学到更好的解决方案，不知道 Cai 某有没有更加优雅合适的方案：
1： 简单粗暴的方式
必须等待异步数据到了以后，才开始做组件渲染。直接 v-if 或者是 key 来控制组件渲染。
2： 麻烦但是交互较好的方式
watch 或者是 compute 数据。监听数据变化，只要变化了，就更新变量并实现数据的响应式渲染。

WeiJingTang 称该 ref 函数可以克服上述方案的困境。有待尝试。

## vue 组件的即时阅览与单元测试

- https://www.v2ex.com/t/840680
- https://github.com/jaweii/AutoPreview/blob/main/README-zh.md

### 当前进度

vue2 不行，vue3 生态下可以考虑配置

## 学习 rouyi 的搜索栏功能

在 https://gitee.com/y_project/RuoYi-Vue 内，其顶部导航栏的搜索栏非常有用，有空可以考虑嵌套使用。
HeaderSearch 组件

## 在 vue2 和 vue3 内使用 vueuse 提供的一揽子工具

### 在 vue2 怎么使用？

这个例子等待学习
https://github.com/vueuse/vueuse-vue2-example

## gasp

这是什么前端动画库？怎么使用？

## vscode 插件 codeium ？

学习该插件的使用

https://marketplace.visualstudio.com/items?itemName=Codeium.codeium

https://codeium.com/

## storybook

这是一个实现组件库的工具。可以考虑以下的技术栈实现组件库：

- storybook
- typescript
- vue3
- vite

目前还不是很懂这个组件库的生成。我没有找到类似的，可以参考的 github 例子。

- https://storybook.js.org/blog/storybook-vue3/

## twoslash shiki vitepress

这些技术能够让文档站点的 typescript 代码提供惊人的行内提示。有空研究。

## 钻头官网增加小爱丽丝看板娘/桌宠

我应该先去复现几个 vuepress 看板娘例子，随后再开始和钻头沟通相关事宜。

## vuepress 导入自定义组件

在 vuepress 内导入 mo7 提供的自定义组件。学一下怎么深度定制 vuepress

## 修复 md-it 的部署报错

测试单仓项目，部署时出现错误。需要去处理。

## 让 github action + vercel 实现有意义的 pnpm 单仓部署（已完成）

目前是不能实现有意义的单仓部署的。因为 vercel 工作流要求用指定工作路径实现单仓划分。这个很不合理。

已完成。不知道什么时候完成的，已经完成很久了。
