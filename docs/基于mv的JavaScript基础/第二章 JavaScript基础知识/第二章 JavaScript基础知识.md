# 第二章 JavaScript基础知识
本章会涉及一些基础的语法。这些语法和其他多数的编程语言相似或相同，如果你学过或接触过其他类似的编程语言，建议快速浏览即可。

如果你是初学者，还可以考虑去[菜鸟教程](https://www.runoob.com/js/js-tutorial.html)内查阅更多的相关知识点。在学习JavaScript的基础时，建议去更加专业的官方文档内查阅知识点。点此进入[MDN](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics)来搜索查找各类JavaScript的语法使用细节。

##  基本语法
### 区分大小写
JavaScript是区分大小写的，也就是说，大写字母和小写字母会被认为是不同的部分，例如变量名rename，Rename以及RENAME是不同的三个变量，虽然它们看起来含义相同。

### 空白
大多数情况下，JavaScript是忽略空白部分的，所以你可以使用空格键、制表键等来缩进代码，使其变得好看许多。例如图2-1中的两端代码，虽然功能是一样的，但是下面的部分明显比上面的部分简洁、清晰。要是隔两天你再来看，那么你愿意看哪一种呢？

![](https://rpg.blue/data/attachment/forum/201608/15/163701w49x9oo554o5occ4.png)

### 注释
注释必须好好写，注释必须好好写，注释必须好好写。（重要的事情说三遍）注释是帮助你理解的一部分文字，并不在代码中起作用。

c式的/*与*/，或者c++式的//都可以，其中/*和*/可以跨行注释其中的所有内容，//只能注释在它后面的这一行的内容。

::: tip JSDoc格式的注释
如果你养成了写注释的好习惯，可以试着使用JSDoc风格的注释替换传统单纯的注释，准确清晰地说明各项语义化的注释内容。VScode已经默认支持。

以下是可以参考的JSDoc注释语法文档：
- [脚本之家](http://shouce.jb51.net/jsdoc/index.html)
- [github.jsdoc3](https://jsdoc.app/)
- [JSDoc在线手册](http://www.dba.cn/book/jsdoc/)
- [html中文网](https://www.html.cn/doc/jsdoc/)
:::

### 分号
分号对于JavaScript虽然不是必要的（事实上解释器会自动补全），但是这里推荐你老老实实的每句话后面加分号，否则会出现一些稀奇古怪的事情。

### 换行
换行用于把两条语句隔开，以增加可读性，一样推荐你老老实实的换行，不要偷懒。另外，不要把一句话拆开两行。

### 使用VScode实现代码格式化 <Badge text="进阶"/>
代码格式化可以有效的解决上述提及到的缩进和分号补全问题。推荐使用VScode的JavaScript格式化插件来实现这样的基础功能。希望大家不要在代码缩进、自动补全、分号补全等小细节上花费太多的时间。推荐使用VScode的插件Beautify

![](https://i.bmp.ovh/imgs/2022/01/35a901574c8b3a8b.png)

此内容不属于JavaScript的基础内容，故这里不介绍Beautify插件的细节配置。想进阶学习请自己去CSDN自行搜索相关配置。







## JavaScript语句
JavaScript有两种语句，简单语句和复合语句。简单语句就是看着简单的，例如：
``` js
x=5;
```

复合语句就是看着很复杂的，包含了多个结构的，例如：
``` js
if(con==1) {
  x=5;
}else{
  x=8;
}
```

事实上这两者没什么本质不同，你也不必要区分的那么仔细，我也不打算详细区别这两个东西。





## JavaScript的保留字
ECMA-262 描述了一组具有特定用途的关键字。这些关键字可用于表示控制语句的开始或结束，或者用于执行特定操作等。按照规则，关键字也是语言保留的，不能用作标识符。以下就是ECMAScript的全部关键字（带*号上标的是第5 版新增的关键字）：
``` js
break       do        instanceof        typeof
case        else        new        var
catch        finally        return        void
continue        for        switch        while
debugger*        function        this        with
default        if        throw        delete
in        try
```

ECMA-262 还描述了另外一组不能用作标识符的保留字。尽管保留字在这门语言中还没有任何特定的用途。但它们有可能在将来被用作关键字。以下是ECMA-262 第3 版定义的全部保留字：
``` js
abstract        enum        int        short
boolean        export        interface        static
byte        extends        long        super
char        final        native        synchronized
class        float        package        throws
const        goto        private        transient
debugger        implements        protected        volatile
double        import        public
```

第5 版把在非严格模式下运行时的保留字缩减为下列这些：
``` js
class        enum        extends        super
const        export        import
```

在严格模式下，第5 版还对以下保留字施加了限制：
``` js
implements        package        public        interface
private        static        let        protected
yield
```

总之，这些词都不要使用做自己的变量名字就好，否则会跟系统预定义的功能起冲突。







## 变量和数据类型

### 变量
变量是储存信息的容器。变量需要起一个变量名。变量名须以字母、```$```或 _ 符号开头，而且对大小写敏感

建议大家平常都用字母开头，我个人比较讨厌美元和短命鬼。

使用变量前需要声明这个变量，我们使用var来声明一个变量，例如：
``` js
var a=5;
var b=10;
var c=a+b;
var pi=3.14;
```

就像这样，我们就声明了一系列的变量，并且给他们赋了相应的值。也可以不赋值来声明一个变量，在后面的使用中再给它赋值，例如：
``` js
var m;
m=250;
```

赋值要使用=，叫做赋值号，注意，这东西不是等号，不表示两个相等，只是把右边的值给左边，或者说把左边的变量设置成和右边一样的。



### 使用ES6的const和let来代替var定义变量 <Badge text='进阶' />
建议使用JavaScript的ES6版本提供的const和let来定义变量，而不是传统的var。用实现块级作用域的变量来代替全局变量式的var。这种写法更加规范稳妥，不容易出现插件变量名冲突。这里不进一步介绍块级作用域。

用const定义常量，即不会发生变化的变量，不可被再次赋值的变量
``` js

```


### 数据类型
数据类型就是数据的类型。
JavaScript有字符串、数字、布尔、数组、对象、Null、Undefined这样几种基本数据类型。
而且，JavaScript拥有动态的数据类型，这意味着相同的变量可用作不同的类型，例如，前一刻它还是个数字，后面就变成字符串了：

``` js
var a;//声明一个变量a
a=5;//给a赋值5，此时a是个数字类型
a="hehe";//给a赋值“hehe”，此时a是个字符串类型
```

#### 数字
这就是表示一个数字，没什么好说的，例如：
``` js
var x1=34.00;      //使用小数点来写
var x2=34;         //不使用小数点来写
```

还可以用科学计数法，例如：
``` js
var y=123e5;      // 12300000
var z=123e-5;     // 0.00123
```

#### 布尔
布尔类型是逻辑运算的，只有两个值：true和false。


#### 字符串
一种比较特殊的（我不喜欢特殊……）类型，用引号包裹着的内容来表示。单引号可以，双引号也可以，例如：
``` js
var carname="Bill Gates";
var carname='Bill Gates';
```

也可以用引号包裹引号，这种字符串是里面有引号的字符串，例如：
``` js
var answer="Nice to meet you!";
var answer="He is called 'Bill'";
var answer='He is called "Bill"';
```

#### 数组
数组就是一些变量的顺序组合，JavaScript中这样来创建一个数组：




#### 引用类型 <Badge text='进阶' />

