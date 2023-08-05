# 从 vue 组件生成文档 ？

TODO:

期望实现有效的的文档生成。比如说我使用 vue 的组合式 api，或者是选项式 api。不论在 vue2 还是 vue3，都可以根据 jsdoc 或者是 tsdoc 的格式来自动生成文档。

以下是可能的技术选型，等待逐步学习，调研。

## documentation

- https://github.com/documentationjs/documentation

## vue-styleguidist

- https://github.com/vue-styleguidist/vue-styleguidist

- https://www.cnblogs.com/mfyngu/p/13049965.html

## vuedoc

- https://github.com/vuedoc/md

有专门的配置文件。

能识别 jsdoc

## vuepress-apidoc

- https://gitee.com/DoLaMi/vuepress-apidoc

## libpack

- https://github.com/Zenquan/libpack

## vuepress-jsdoc

- https://github.com/ph1p/vuepress-jsdoc

## vuese

- https://github.com/vuese/vuese

- https://juejin.cn/post/6892314449488576520

## jsdoc-vue

- https://github.com/QingWei-Li/jsdoc-vue

## jsdoc-vuejs

- https://github.com/Kocal/jsdoc-vuejs

- https://zhuanlan.zhihu.com/p/205225678

## vite-plugin-vue-docs-2

- https://github.com/meetqy/vite-plugin-vue-docs-2

## 自动化文档生成的整体进度

截止目前，比较熟悉的文档生成框架是 jsdoc 和 typedoc。

按照数据源来划分，数据源对象可以是：

- .js 文件
- .ts 文件
- .vue 文件

按照注释格式划分，可以被划分为：

- jsdoc
- tsdoc
- 框架自有的格式

按照生成结果划分。可以被划分为：

- html
- md
