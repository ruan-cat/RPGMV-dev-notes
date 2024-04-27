# getCurrentInstance

## vue2 的旧生态无法支撑其他的依赖升级到高版本

在 vue2.7 写组合式 api 时，由于框架使用的历史缘故，许多依赖不能同步升级到高版本，导致不提供组合式 api。

比如 vue-i18n，vue-router 。这些依赖都不能很好地升级掉高版本。

vue-i18n 只能到 v8 版本。不能到 v9 版本。

vue-router 只能到 v3 版本。不能到 v4 版本。

因此，在 vue2.7 的 setup 语法糖内，需要使用变通的方式获取到 this，获取到 vue 实例。

## 获取 vue 实例

- https://blog.csdn.net/lhkuxia/article/details/117597616

## 打包报错

- https://blog.csdn.net/xzwwjl1314/article/details/114977566
