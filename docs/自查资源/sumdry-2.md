---
title: sumdry-2
date: 2022-06-13 17:25:25
permalink: /pages/a6ca3a/
---


# ???




## 在`github`内`rmmv`的关键词
用合适的关键词在g`ithub`内快速搜索合适的`开源插件`，`示例`。
[`rpg-maker-mv`](https://github.com/topics/rpg-maker-mv) 
[`rpgmakermv`](https://github.com/topics/rpgmakermv) 
[`rpg-mv`](https://github.com/topics/rpg-mv) 




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






## 如何用ES6的类语法糖来继承prototype的“函数类”？
想要使用ES6开发插件，必须会遇到如何使用ES6来继承源码的prototype函数类，MDN的class参考给了我们一个具体的示例
function Animal (name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(this.name + ' makes a noise.');}
class Dog extends Animal {
  speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }}
var d = new Dog('Mitzie');
d.speak();//Mitzie makes a noise.  Mitzie barks.

我们可以给出这样的准则：
①　在class继承的子类中，在构造函数内都使用super来调用父类的属性。否则子类无法使用this来调用父类的属性。
②　如果重写的方法在功能上和父类相同，就使用super，否则不使用super。这种写法相当于.call(this)。





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




## 原生的方式获取本地文件
``` js
/**
 * @author 阮中楠
 * @method loadSetting_RuanZhongNan
 * @deprecated
 * @description
 * 导入阮中楠的开发者个人设置。这个方法用于导入阮中楠专属的设置控件。
 * 
 * 主调方法：Scene_Boot.prototype.create
 * 
 * 算法：
 * 在游戏开始装载时，与 DataManager.loadDatabase()方法并列地导入数据。
 * 
 * 使用DataManager.loadDataFile的算法来导入。
 * 
 * 教程：
 * 主教程：https://blog.csdn.net/ryelqy/article/details/79279273
 * 
 * 规范示例：https://xhr.spec.whatwg.org/#interface-xmlhttprequest
 * 
 * API接口：https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest
 */
static loadSetting_RuanZhongNan() {
  var xhr = new XMLHttpRequest();
  //网址请求 打开( 'GET' , url位置) 这里写的是绝对路径。
  xhr.open('GET', 'js/plugins/customDateFile/setting_RuanZhongNan.json', true);
  //设置导入数据的数据类型 
  xhr.overrideMimeType('application/json');
  //导入数据 这个写法是固定的。
  xhr.onload = function () {
    //我们的全局变量 $settingRZN 都被window全局变量所保存。
    window.$settingRZN = JSON.parse(xhr.responseText);
  };
  //发送请求
  xhr.send(null);
}
```




## 其他人的一些随笔说明
Drill_up：
“窗口和贴图都是同源的，窗口就是一种组合式贴图，只不过窗口被rmmv封装了一层，把特殊文字、窗口皮肤、下一步指针封装到一起了，而且还不能拆出来。这里比较麻烦的是，如果要显示简单文字，贴图可以直接drawtext，但是如果要显示特殊文字，包括多行文本、不同颜色不同大小的字符，都必须贴个窗口，这就显得比较臃肿，虽然不会用上……”






## Graphics和SceneManager的初始化问题：
你只有执行了main.js，你才可以使用Graphics的方法，而且只要是用了Graphics，SceneManager也一并启动了。因为Graphics的初始化就是用SceneManager来完成的。因此在写代码报错时，要注意此时是否已经执行到main.js了，如果没有运行到main.js的SceneManager，就不能使用Graphics系列的静态方法。





## SceneManager.run方法无条件获取错误的特点：
只要是被SceneManager运行过的代码，自己单独写的throw error就一定会被其catchException方法所捕捉，然后后续输出的e.name是无法被更改的，这就意味着，我们做不了自定义错误类的name属性。







## try-catch语句的特性：
真正使程序彻底停下来的，不是throw error，而是try-catch语句。当程序有多个错误时，mv提示界面只显示了一个错误的原因是，try-catch语句会立刻让程序停下来。





## Window_Base._dimmerSprite变量设计的意义
这个变量设计的意义是，让窗口的背景和其框统一变成由_dimmerSprite控制的灰色渐变样式。，让dimmerSprite的层级覆盖过this._windowContentsSprite窗口内容精灵，进而实现“替换”窗口背景和窗口边框。

我们可以探究以下这个问题：
Window_MapName.prototype.drawBackground和Window_Base.prototype.refreshDimmerBitmap的效果区别问题？

首先，Window_Base.prototype.refreshDimmerBitmap方法修改的是this._dimmerSprite.bitmap，
而Window_MapName.prototype.drawBackground方法修改的是this.contents即this._windowContentsSprite。由这二者的区别，我们可以提出：为什么要设置Window_Base._dimmerSprite这个变量？绘制阴影为什么要专门设置该变量？

_dimmerSprite和其他常见的窗口精灵不同，他被首次定义在Window_Base.initialize方法内部，是Window_Base定义了它。
Window_Base.prototype.initialize = function(x, y, width, height) {
    Window.prototype.initialize.call(this);
  ......
    //模糊精灵 = null
    this._dimmerSprite = null;
};

真正使其加载进入窗口的是Window_Base.showBackgroundDimmer方法。这个方法不仅加载_dimmerSprite，而且还实质性地设置了具体的bitmap值，使得窗口出现竖直的灰色渐变。
Window_Base.prototype.showBackgroundDimmer = function() {
    if (!this._dimmerSprite) {
        this._dimmerSprite = new Sprite();
        this._dimmerSprite.bitmap = new Bitmap(0, 0);
        this.addChildToBack(this._dimmerSprite);
    }
    var bitmap = this._dimmerSprite.bitmap;
    if (bitmap.width !== this.width || bitmap.height !== this.height) {
        this.refreshDimmerBitmap();
    }
    this._dimmerSprite.visible = true;
    this.updateBackgroundDimmer();
};

Window.addChildToBack方法才将_dimmerSprite正式并归进入窗口内部。他并归的是一个window的_windowSpriteContainer，即“窗口精灵容器”的后面一位。这个代码让_dimmerSprite盖过了_windowSpriteContainer，所以我们才看不到_windowSpriteContainer所包含的窗口背景及窗口框。
Window.prototype.addChildToBack = function(child) {
    var containerIndex = this.children.indexOf(this._windowSpriteContainer);
    return this.addChildAt(child, containerIndex + 1);
};





## window系的contentsOpacity和contents变量的本质
这两个变量都和_windowContentsSprite，“窗口内容精灵”相关。contentsOpacity是精灵的透明度、contents是精灵的位图bitmap。
Window_MapName窗口的背景绘图就是在contents内部绘制的，其渐变的刷新效果也是控制contentsOpacity变量。




## window系的opacity变量的本质
这里指的是window基类定义的opacity变量，opacity变量的本质是 _windowSpriteContainer.alpha ，“窗口精灵容器”的透明度。只要修改了opacity的值，就修改了窗口的框和其背景的透明度[[[] 
Window.prototype._createAllParts = function() {
......
this._windowSpriteContainer.addChild(this._windowBackSprite);
this._windowSpriteContainer.addChild(this._windowFrameSprite);
......
}
]]。
其中，窗口精灵容器_windowSpriteContainer包括了：_windowBackSprite和_windowFrameSprite ，即窗口背景精灵和窗口框精灵。
读者可以探究以下的问题来加深对此内容的理解：为什么Window_MapName窗口可以让其窗口框及背景为空？使得我们每次看到地图名称时，都看不到窗口的边框和背景？





## DataManager.loadDataFile方法原理解释
我们的json文件是怎么加入到项目中的？其本质是运用了XMLHttpRequest类[[[] MDN. XMLHttpRequest https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest]]的方法。CSDN大多数的文章都简单地介绍了XMLHttpRequest类的使用方式，DataManager.loadDataFile方法的流程也几乎如出一辙。基本上的流程是：
用XMLHttpRequest.open方法来打开json文件。
用XMLHttpRequest.overrideMimeType方法指定导入文件的类型为json。
用XMLHttpRequest.onload方法来显性地写一个函数，并接受XMLHttpRequest.responseText属性的返回值。
用XMLHttpRequest.send方法来收尾。

值得说明的是，上述的全部流程都是严格的，先写open，在写send；使用onload方法时，还运用了window全局变量，mv很多的全局变量都被保存与此；json文件的本质是字符串形式的JavaScript对象，要用JSON.parse[[[] 菜鸟教程.JavaScript JSON.parse() https://www.runoob.com/js/javascript-json-parse.html]]方法来将字符串转换成具体的对象。




