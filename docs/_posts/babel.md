---
title: babel
date: 2022-10-09 18:48:13
permalink: /pages/127b11/
sidebar: auto
categories: 
  - 尚未分类
---


# vue-cli内使用babel

## 困境
目前我希望这样使用babel：我可以通过升级指定依赖包的方式，直接获取到最新版的JavaScript语法。包括自动转换成ES5。目前我想使用指定语法时，需要像下面这样使用：


- 手动安装指定依赖包

![image-20221009182127742](https://raw.githubusercontent.com/RuanZhongNan/img-store/main/img/image-20221009182127742.png)




- 在vue-cli指定推荐的babel.config.js内，指定额外插件

![image-20221009182143432](https://raw.githubusercontent.com/RuanZhongNan/img-store/main/img/image-20221009182143432.png)







## 暂定的解决方案
目前理解不是很充分，给出以下方式来说明：

- 安装依赖
  开发依赖
  https://www.npmjs.com/package/@vue/cli-plugin-babel
  https://www.npmjs.com/package/@vue/babel-preset-app

  生产依赖
  https://www.npmjs.com/package/core-js


- babel.config.js配置
  ``` js
  module.exports = {
    presets: [
      // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
      "@vue/cli-plugin-babel/preset"
    ]
  };
  ```


完成。接下来就可以直接在vue组件内使用高版本的js了，包括可选链运算符、空值合并运算符等。