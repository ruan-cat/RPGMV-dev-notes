---
title: mv源码基本常识
---

## 项目调试方式
按F8进行debug。

## update方法原理
update一帧运行一次、refresh一般是需要的时候、调用一下刷新。

## 类的定义方式
mv项目的绝大多数类采用[混合的构造函数/原型方式](https://blog.csdn.net/iteye_9339/article/details/81473212)来定义。

## 类的继承方式
mv项目中的绝大多数类采用[寄生组合式继承](https://blog.csdn.net/xgy123xx/article/details/106019671)的方式来完成类的继承。

### 寄生组合式继承定义
所谓寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。其背后的基本思路是：不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已。本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。[引自《JavaScript高级程序设计》](https://blog.csdn.net/qq_35718410/article/details/91412908)

其中，我们常见的```Object.create()```方法是```ES5```中**原型式继承**的规范化。

[点此查阅更多细节。](https://blog.csdn.net/weixin_36465540/article/details/90176318)

结合上面两个部分的内容，作者有了以下的理解:
::: tip 理解
方法的定义与继承均在```prototype```原型链完成，属性则是在```function```类本身中定义，且继承的时候也是用构造函数来完成属性的继承。
:::

## Object.create()实现继承的例子
由于作者水平有限，尚不能理解透彻该部分的继承。这里粘贴了和mv项目几乎相同的继承例子，作为本小节内容。[MDN.Object.create()](https://developer.mozilla.org/zh-CN/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Object/create)

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
  
  https://blog.csdn.net/weixin_36465540/article/details/90176318

  https://blog.csdn.net/qq_35718410/article/details/91412908

  https://blog.csdn.net/lixiaosenlin/article/details/108140634

  https://blog.csdn.net/xgy123xx/article/details/106019671
