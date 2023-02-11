---
title: prettier
date: 2022-10-20 10:02:03
permalink: /prettier
sidebar: auto
categories:
  - 尚未分类
---

## 官网

## 配置的困境：

这个问题很大，格式化取决于本地的 vscode 插件或配置，而不是‘项目根目录下的配置文件’或‘开发环境依赖包’。这个让我很坐牢。

我希望的是，vscode 的相关格式化插件，可以自己识别项目根目录下的配置文件，识别到有.eslintrc 的文件时，他就按照文件配置来做格式化。

否则就按照 vscode 的用户配置，或工作区配置来格式化。

这个阶段有严格的优先级：
1： 项目本身的配置。
2： vscode 全局用户配置。
3： vscode 本地工作区配置。

但我不停地切换不同的项目时，上述 3 种阶段的配置差异让我坐牢。

有的项目不需要格式化，有的项目需要主动的，自动的格式化，有的项目需要手动格式化。

情况太多了。希望搞一个配置文件，一次性处理好。

## 可能的配置识别方案

让 vscode 的用户或工作区配置，识别出本地的 prettier 配置。

![image-20221020100452727](https://raw.githubusercontent.com/RuanZhongNan/img-store/main/img/image-20221020100452727.png)

## vscode + prettier + wxml

在微信小程序开发中，使用`vscode`，配合`vscode`的`prettier`插件，结合一些配置，实现本地项目的格式化配置。

参考资料：[https://blog.csdn.net/HoweeGoss/article/details/125744750](https://blog.csdn.net/HoweeGoss/article/details/125744750)

`.vscode\settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[wxml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[wxss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.documentSelectors": ["**/*.wxml", "**/*.wxss"]
}
```

`.prettierrc`

```json
{
  "overrides": [
    {
      "files": "*.wxml",
      "options": {
        "parser": "html"
      }
    },
    {
      "files": "*.wxss",
      "options": {
        "parser": "css"
      }
    }
  ]
}
```

支持以完成。目前点击保存即可完成对`wxml`文件的格式化。

## 使用`vscode`的`prettier-eslint`插件

.vscode\extensions.json
