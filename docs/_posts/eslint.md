---
title: eslint
date: 2022-10-09 18:48:13
permalink: /pages/fade30/
sidebar: auto
categories: 
  - 尚未分类
---


# git提交时的自动格式化配置
在观察别人的后台管理项目时，可以在`package.json`内看到类似的配置：
``` json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,vue}": [
      "eslint --fix",
      "git add"
    ]
  },
}
```
目前不清楚这种配置的内容，需要专门看看`package.json`、`git`和`eslint`的文档。记得`eslint`的文档提供了这样的配置。

目前这个配置的效果是：每次`git`推送时，都做一次`eslint`的格式化。

这个配置可以规范团队协作时的代码规范，但是目前不敢使用。因为团队不使用`git`来控制代码版本。

