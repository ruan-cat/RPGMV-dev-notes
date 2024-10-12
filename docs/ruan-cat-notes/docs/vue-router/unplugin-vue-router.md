# unplugin-vue-router 动态路由插件

## 动态路由导入

学习待办：
1： webpack 的分包技术。chunk 包拆分配置。
2： 模块懒加载。异步加载。

目前学习情况：
在 vue2 的 vue-admin-element 项目中，最新版的路由使用就是用了 import()函数实现的。问题在于当前项目使用的架构过于老旧了。import 函数在 vue-cli 内反而是能用的。关键在于动态路由的数据库存储方案。

## 用插件试着实现导入

- https://github.com/posva/unplugin-vue-router
- https://router.vuejs.org/zh/guide/advanced/typed-routes.html
