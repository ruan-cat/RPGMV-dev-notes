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

## 学习进度设计

- [ ] 广泛地阅读文档，了解概念，明确边界范围
  - [ ] vue-router
  - [ ] unplugin-vue-router
  - [ ] nuxt
- [ ] 通过改造一个简单的商城 C 端项目，实现写死路由的动态化改造。
- [ ] 阅读其他的中后台项目，看看别人怎么使用动态路由+权限控制的。
