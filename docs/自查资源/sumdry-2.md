---
title: sumdry-2
date: 2022-06-13 17:25:25
permalink: /pages/a6ca3a/
---


# ???

## 对addChild()方法的理解以及与addWindow()方法的联系，addWindow()方法的必要性说明

在Stage基类和Window基类中，他们都是对PIXI.Container类的实现，在PIXI.Container中，都具有addChild()方法。所以绝大部分的用Stage类和Window类作为超类的子类都可以使用addChild()方法。
事实上，addWindow()方法其本质也是实现addChild()方法。因此，我们可以尝试全部使用addChild方法来代替使用addWindow方法，减少使用新的方法，减少记忆。源码如下：
Scene_Base.prototype.addWindow = function(window) {
    this._windowLayer.addChild(window);
};

但是我们最好还是使用addWindow方法。因为addWindow方法是建立在Scene_Base类的_windowLayer成员变量，只要控制了_windowLayer变量，就可以对一个场景内部的全体窗口进行统一的控制了。这就是addWindow的必要性。






## 重构准则

在模块化开发下，这些代码应该这样重构：

1：成员变量初始化写法的重构
old： this.initialize.apply(this, arguments);
new：super();

这行代码的本质是实现变量的成员变量的赋初值，在constructor构造函数内调用super();即可初始化来自父类的成员变量。

2：父类方法调用的重构
old：Scene_Base.prototype.create.call(this);
new：super.create();

这行代码的本质是调用来自父类的方法，并在调用父类方法的时候，绑定子类的this对象，实现子类对象调用父类方法。用类似于Java的super关键字即可调用来自父类的方法。





## sarange-project-code-database 萨兰奇项目注意事项
1.JSDoc命令：
在 E:\GitText\sarange-project-code-database\js 文件下启动cmd，并执行以下代码。

jsdoc CodeManager.js -r plugins
jsdoc -r plugins

代码解释：对js文件夹内的CodeManager.js和其目录下的plugins文件夹的全部内容，进行JSDoc文档的输出。

2.新的JSDoc命令
执行：






## siakomobi
这是巴哈姆特的siakomobi写的书本：《RPG Maker MV游戏制作基本外功篇:从操作到完成游戏一镜到底,马上就会!》这个书本可以说是RPGMV界内的教材。我现在没有。
Siakomobi的作品：《七音图腾篇》（UltraKagura）




