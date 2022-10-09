---
title: vue-router
date: 2022-05-09 09:51:56
permalink: /pages/6f9f35/
tags: 
  - null
categories: 
  - js
  - vue
---


# vue-router
vue-router

## 动态匹配路由参数的例子

``` js
children: [
  {
    // path: "/leasingBusiness/appraisalInfo/:appraisalNo/:reportNo/:data",

    /**
     * https: //v3.router.vuejs.org/zh/guide/essentials/dynamic-matching.html#高级匹配模式
     * https: //github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters
     * 尝试使用更好的匹配模式 实现动态参数接收
     *
     * 匹配一个或多个参数
     * /:appraisalNo+
     *
     * 匹配零个或多个参数
     * /:reportNo*
     *
     * 匹配零个或多个参数
     * /:data*
     */
    path: "/leasingBusiness/appraisalInfo/:appraisalNo*/:reportNo*/:data*",
    // TODO: 搜索并更改。
    name: "DetailInfo",
    component: resolve =>
      require([
        "@/views/systems/leasing/housing/leasingEvaluation/info/Info"
      ], resolve),
    props: true,
    meta: {
      breadcrumb: true,
      title: "评估详细信息",
      isLocalDefineRouter: true
    }
  }
]
```