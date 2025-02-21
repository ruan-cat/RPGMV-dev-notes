# vite，本地开发环境、打包工具

## 打包错误

- https://juejin.cn/post/7091544102021857288

路由动态模块导入写法需要写成函数

- https://learnku.com/vuejs/t/67885

## vite 使用 node api

```bash
Error: Module "fs" has been externalized for browser compatibility. Cannot access "fs.readdirSync" in client code.  See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
    at Object.get (__vite-browser-external:fs:3:11)
    at traverseDirectory (surveyItemFieldLabelConfStore.ts:28:19)
    at surveyItemFieldLabelConfStore.ts:53:1
```

针对 vite 的边际问题

- https://cn.vitejs.dev/guide/troubleshooting.html#others

TODO: 一个可能的方案

- https://juejin.cn/post/7145383283038093319

但是自己没空。等以后遇到 vite 开发 node 的东西时，再考虑该配置。

## ReferenceError: \_\_dirname is not defined in ES module scope

- https://github.com/rollup/plugins/pull/1415

## Uncaught TypeError: Function has non-object prototype 'undefined' in instanceof check

- https://github.com/vitejs/vite/discussions/14490

## TypeError: Cannot destructure property 'promises' of 'empty' as it is null
