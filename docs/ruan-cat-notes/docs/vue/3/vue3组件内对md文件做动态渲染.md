# vue3 组件内对 md 文件做动态渲染

在某些场景下，期望 vue3 组件可以直接读取，扫描指定的 md 文件，并且渲染成 vue 组件，并带有路由。这样的需求类似于 vuepress 和 vitepress。

现在的 vuepress 和 vitepress 是在 md 内写 vue 组件，而不是期望的 vue 组件直接扫描特定的 md 并做出静态页面。

## 为什么不是直接用 vuepress/vitepress ？

因为这些框架的设计是在 md 内写 vue。不是我期望的在 vue 内模块化的导入 md 并直接渲染成静态文本。

一个是在 md 内加上动态的 vue 逻辑，另一个是在动态 vue 内加入大批量静态模块化的 md。二者是不一样的。

前者是在大量的静态资源基础上，加上少量的动态 vue 组件实现业务。

后者是在普遍动态的页面内，对特定文本段落做模块化的导入和渲染。比如说美观好看的用户注册规约等。

## 把 markdown 直接当做是 vue 组件直接使用？

TODO: 把 markdown 直接当做是 vue 组件直接使用？我记得 antfu 有类似的包，将 md 当成 vue 组件，直接导入在业务 vue 组件内，对外直接展示一大堆的预设文本。

## 参考资料

<!-- TODO: 待学习 -->

- [记一次 Vue 3 动态展示 markdown 文件](https://desnlee.com/post/vue3-markdown/)
