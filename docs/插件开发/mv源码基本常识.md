---
title: mv源码基本常识
date: 2022-04-22 09:00:25
permalink: /pages/4a9094/
categories: 
  - 插件开发
tags: 
  - 
---




## 源码基础常识



### 通论
drill：简单来说rmmv就是一个封装好的盒子，在rmmv里面可以向调用外面的dom结构，但是在dom层，是没法接触到rmmv的内部结构的。


### 项目调试方式
按F8进行debug。


### update方法原理
update一帧运行一次、refresh一般是需要的时候、调用一下刷新。







## 源码类的基础语法知识


### 类的定义方式
mv项目的绝大多数类采用[混合的构造函数/原型方式](https://blog.csdn.net/iteye_9339/article/details/81473212)来定义。





### 类的继承方式
mv项目中的绝大多数类采用[寄生组合式继承](https://blog.csdn.net/xgy123xx/article/details/106019671)的方式来完成类的继承。






### 寄生组合式继承定义
所谓寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。其背后的基本思路是：不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已。本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。[引自《JavaScript高级程序设计》](https://blog.csdn.net/qq_35718410/article/details/91412908)

其中，我们常见的```Object.create()```方法是```ES5```中**原型式继承**的规范化。

[点此查阅更多细节。](https://blog.csdn.net/weixin_36465540/article/details/90176318)

结合上面两个部分的内容，作者有了以下的理解:
::: tip 理解
方法的定义与继承均在```prototype```原型链完成，属性则是在```function```类本身中定义，且继承的时候也是用构造函数来完成属性的继承。
:::








### Object.create()实现继承的例子
这里粘贴了和`mv`项目几乎相同的继承例子，作为本小节内容。[MDN.Object.create()](https://developer.mozilla.org/zh-CN/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Object/create)

``` js
// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;}
// 父类的方法
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');};
// Rectangle - 子类(subclass)
function Rectangle() {
  Shape.call(this); // call super constructor.}
// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
var rect = new Rectangle();
console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```







### 用ES5的原型链语法实现类的定义与继承
本小节是上一节内容的拓展。这里使用了拓展性质的`jsdoc`注释语法，在实际的`mv`插件开发中建议使用。
``` js
/**
 * 小萝莉类
 * @class LittleGirl
 * @classdesc 小萝莉类，作为小女孩的基础类
 * @description
 * 类的命名规范，我们总是默认让类的命名遵循大驼峰命名法
 */
function LittleGirl() {
  this.defaultLines = "嘤嘤嘤";
};

/**
 * 撒娇方法
 * @memberof LittleGirl
 * @description 小萝莉对象撒娇
 */
LittleGirl.prototype.coquetry = function () {
  console.log(" 发出了： " + this.defaultLines + " 的声音。");
};

/**
 * 小爱丽丝类
 * @class LittleAlice
 * @classdesc 小爱丽丝类，特指钻头的小爱丽丝。
 */
function LittleAlice() {
  LittleGirl.call(this);
  this.defaultLines = "不可以涩涩哦~";
};

// 用Object.create方法实现原型链的继承
LittleAlice.prototype = Object.create(LittleGirl.prototype);
// 指定小爱丽丝类的构造器为小萝莉
LittleAlice.prototype.constructor = LittleGirl;

/**
 * 阮喵喵 属于一种小爱丽丝
 * @description
 * 用new关键字执行构造函数 实例化对象
 */
var ruanCat = new LittleAlice();
// 阮喵喵开始撒娇
ruanCat.coquetry();
```













### 用ES6的语法糖优化类的定义与继承
本小节是上一节的优化写法。在实际的`mv`插件开发中，不一定要使用这样的写法。
``` js
class LittleGirl {
  constructor() {
    this.defaultLines = "嘤嘤嘤";
  }
  coquetry() {
    console.log(" 发出了： " + this.defaultLines + " 的声音。");
  }
}

class LittleAlice extends LittleGirl {
  constructor() {
    super();
    this.defaultLines = "不可以涩涩哦~";
  }
}

const ruanCat = new LittleAlice();
ruanCat.coquetry();
```







### mv继承的简单示例
`mv`采用了"寄生组合式继承"，即————通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。以```Scene_Base```为例：

```Scene_Base```类通过```Stage.prototype.initialize.call(this);```的方式，来继承来自父类```Stage```的属性。

通过```Scene_Base.prototype = Object.create(Stage.prototype);``` 和 ```Scene_Base.prototype.constructor = Scene_Base;``` 的原型链方式继承来自父类`Stage`的方法。








## 对mv源码的总体理解
以下内容为作者自己的理解，不一定准确。

::: tip 理解
- 在```JavaScript ES5```版本中，继承写法的最优解是**寄生组合式继承**，使用```call(this)```方法来实现子构造方法调用父构造方法，实现"属性"的继承；使用```Object.create```和```prototype.constructor```的方式实现原型链指向，实现"方法"的继承。

- 在```JavaScript ES6```版本中，使用语法糖可以同时实现"**属性**"和"**方法**"的继承。

- **mv源码**中的```call(this)```写法目的是为了实现继承；**mv插件**的```call(this)```写法目的是为了实现方法功能拓展。

- mv插件编写原理是：使用```call(this)```方法调用原来的方法，做出功能拓展，利用```PluginsManager```的```document.appendChild```方法实现代码的导入，并利用V8引擎实现的**词法作用域**与变量原理实现```JavaScript```的**方法覆盖**，最后实现mv源码调用mv插件的方法。

- mv插件写法的本质是**直接修改mv源码**。
:::










### 参考文章

- MDN
  
  [用object.create实现类式继承](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create#用_object.create实现类式继承)

  [使用call方法调用父构造函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call#使用_call_方法调用父构造函数)

  [继承](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Inheritance)

  [继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)


- CSDN
  
  [JS基础--组合继承，寄生组合式继承](https://blog.csdn.net/weixin_36465540/article/details/90176318)

  [寄生组合式继承](https://blog.csdn.net/qq_35718410/article/details/91412908)

  [javascript 的七种继承方式（六）寄生组合式继承](https://blog.csdn.net/lixiaosenlin/article/details/108140634)

  [https://blog.csdn.net/xgy123xx/article/details/106019671](https://blog.csdn.net/xgy123xx/article/details/106019671)
