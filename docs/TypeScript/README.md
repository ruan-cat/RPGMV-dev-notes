# 阮中楠自己的一些 TypeScript 笔记

阮中楠还没考虑将 TS 加入到 RMMV 中。

## 网站：

[**《tslang》**](https://www.tslang.cn/)
[点此进入对应仓库](https://github.com/zhongsp/TypeScript)

[**《TypeScript 入门教程》**](https://ts.xcatliu.com/)
[点此进入对应仓库](https://github.com/xcatliu/typescript-tutorial)

[**《TypeScript 使用指南手册》**](http://www.patrickzhong.com/TypeScript/)
[点此进入对应仓库](https://github.com/zhongsp/TypeScript)

## 疑惑？

import 语句导入时，会在本地构建一个浅拷贝还是一个深拷贝？

import 导入的模块可以被修改么？

## 学习待办：

### tsc 命令配置

通过 tsc 的文件配置，实现打包编译文件，让指定文件压缩成一个单个的 js 文件，而不是直接生成多份 js 文件。目前并没有找到合适的技术实现这样的配置。

## 项目内的.d.ts 配置

目前的痛点是，自己会经常的设计出一些就较为复杂的配置对象，而这些配置对象本身没有更多的类型提醒，开发效率很低。

希望可以实现自定义的类型配置。实现对某些类复杂参数的自定义类型定义，并且让 vscode 实现识别。
比如说在 vue-cli 内，定义了一个配置类对象：

```js
const formRenderConfDemo = {
  layout: 'single',
  form: {
    vModel: 'user',
    props: 'user',
  },
  elFormItem: {
    props: 'user',
    rules: {},
  },
};
class FormRenderConfClass {
  constructor({ layout, form, elFormItem } = formRenderConfDemo) {
    this.layout = layout;
    this.form = form;
    this.elFormItem = elFormItem;
  }
}
```

然后实际使用的情况如下：

```js
const myLocalConf = new FormRenderConfClass({
  /* 具体的业务配置对象，希望此处实现类型校验 */
});
```

如上图，希望在新建`FormRenderConfClass`对象时，对其构造函数的形参实现类型提示。目前不太懂如何编写能够被`vscode`识别的`d.ts`。
