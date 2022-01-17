# 第一章 RPG Maker MV以及JavaScript

## RPG Maker MV简介
制作游戏需要专业的游戏引擎，这样可以事半功倍，若要想制作```RPG```类型的游戏，那么```RPG Maker MV```是一个不错的选择。

```RPG Maker```，又名**RPG制作大师**、**RPGツークル**、**RPG Tsukuru**。是一款Enterbrain Incorporation公司出品的RPG游戏制作工具，分为RPG Maker 2000，RPG Maker 2003，RPG Maker XP，RPG Maker VX，RPG Maker VX Ace，RPG Maker MV。

我们现在要介绍的是最新版的RPG Maker MV，这个版本可以实现的功能与前作基本一致，但最大的不同在于使用的语言由Ruby变成了JavaScript，以及由此带来的与Html5结合的便利。

现在，我们可以借助Html5+JavaScript，将制作的游戏部署到PC端，Android端，IOS端。通俗来讲，凡是可以浏览网页的设备，只要配置足够，都可以运行MV制作的游戏。

::: tip mv源码的技术栈
HTML5 + JavaScript ES5
:::

## JavaScript简介

JavaScript是一种属于网络的脚本语言,已经被广泛用于Web应用开发，常用来为网页添加各式各样的动态功能，为用户提供更流畅美观的浏览效果。通常JavaScript脚本是通过嵌入在HTML中来实现自身的功能的。

实际上，我们的RPG Maker MV游戏本身就可以看做一个html组成的网站，因此，MV的游戏也需要使用JavaScript来实现其功能。可以说，网页制作使用的JavaScript和MV游戏制作使用的JavaScript没有什么不同。

但是，若要问JavaScript和java有什么关系，请参考雷锋与雷峰塔。记住这一点，不要把两者混用。

它最初由Netscape的Brendan Eich设计。 Netscape在最初将其脚本语言命名为LiveScript，后来Netscape在与Sun合作之后将其改名为JavaScript。JavaScript最初受Java启发而开始设计的，目的之一就是“看上去像Java”，因此语法上有类似之处，一些名称和命名规范也借自Java。但JavaScript的主要设计原则源自Self和Scheme。JavaScript与Java名称上的近似，是当时Netscape为了营销考虑与Sun微系统达成协议的结果。为了取得技术优势，微软推出了JScript来迎战JavaScript的脚本语言。为了互用性，Ecma国际（前身为欧洲计算机制造商协会）创建了ECMA-262标准（ECMAScript）。两者都属于ECMAScript的实现。尽管JavaScript作为给非程序人员的脚本语言，而非作为给程序人员的脚本语言来推广和宣传，但是JavaScript具有非常丰富的特性。

发展初期，JavaScript的标准并未确定，同期有Netscape的JavaScript，微软的JScript和CEnvi的ScriptEase三足鼎立。1997年，在ECMA（欧洲计算机制造商协会）的协调下，由Netscape、Sun、微软、Borland组成的工作组确定统一标准：ECMA-262。

我们使用JavaScript，也应当遵守标准。目前，js的最新标准是es6。

截止第二版重构，JavaScript的版本已经到了```ES10```。读者可自行[搜索](https://so.csdn.net/so/search?q=JavaScript%20%E7%89%88%E6%9C%AC)```JavaScript```的最新版本以及更新的语法。第二版教程不会详细的解释、说明、介绍、教学高版本的```JavaScript```语法。

## RPG Maker MV中使用插件
首先先明确mv项目的目录结构，如下图；
<!-- ![](https://i.bmp.ovh/imgs/2022/01/855df61179cdf9c7.png) -->
![](https://rpg.blue/data/attachment/forum/201608/15/162940b3og0z9ha819o1ot.png)

- **audio** 视频资源
- **data** mv数据库，如装备数据
- **fonts** 字体
- **icon** 项目运行的图标
- **img** 图片
- **js** JavaScript代码
- **movies** 视频资源
- **save** 存档
- **Game.rpgproject** rmmv项目识别文件
- **index.html** mv项目载体

其中，js目录下即是JavaScript所在的地方，打开js，libs是MV的库，系统所用到的一些配置都在其中。plugins是游戏的插件所在地，放在这里面的js文件才能被当做插件加载。如下图：
![](https://rpg.blue/data/attachment/forum/201608/15/162940ocgd0gc6iww3zfz7.png)

其余的文件都是游戏的系统脚本，游戏程序的实现全靠这几部分。

- **main.js**
是主文件，游戏的入口。

- **plugins.js**
是一个表，里面是对插件使用的配置情况。

- **rpg_core.js**
是游戏的核心，里面有游戏对图形等等的处理方法。

- **rpg_managers.js**
是游戏对数据的管理。

- **rpg_object.js**
是游戏中所用到的对象。

- **rpg_scenes.js**
是游戏中所显示的场景。

- **rpg_sprites.js**
是游戏中的精灵。

- **rpg_windows.js**
是游戏中的窗口。

关于mv源码翻译的内容，可以点此阅览。（待维护）

libs文件夹下，其内容如下图所示。其中，```fpsmeter.js```用于帧数测试。```lz-string.js```用于大量数据存储。```pixi.js```用于```HTML5 2D```渲染。
![](https://rpg.blue/data/attachment/forum/201608/15/162940ezg1zj5qg1gmx511.png)


我们用到最多的就是```plugins```文件夹，此文件夹下所有的文件都会反映在```RPG Maker MV```的插件管理器中，如下图所示：
![](https://rpg.blue/data/attachment/forum/201608/15/162940dxx36ftqf7xtx2zl.png)

在```plugins```文件夹内可以阅览全部可供使用的插件。如图：
![](https://rpg.blue/data/attachment/forum/201608/15/162941z07geeyp9ehoxhsq.png)


::: tip 优化点
值得注意的是，大批量的导入插件会导致插件下拉列表长度过长，影响插件的查找与配置。在编写插件时，可以采用模块化开发的方式来导入插件。点此开始学习模块化插件开发。（待补充）
:::


这里，我们选择一个插件，EnemyBook，此插件的帮助文档显示了作者对使用者的提示，如下图。在我们自己写给自己用时，虽然当时不需要提示，但日子久了仍然会忘记一些功能的具体实现，因此，帮助文档是必不可少的。
![](https://rpg.blue/data/attachment/forum/201608/15/162941luxj2z2jmn22r233.png)

::: tip 拓展
大部分插件开发者的帮助文档是以RMMV可识别的注释形式，直接写入在插件内，这很容易造成文件冗长，不利于源码阅读。作者建议使用```JSDoc```的注释来配置生成自动化的**插件使用说明书**，点此阅读JSDoc在mv插件中的使用。（待补充）
:::

双击```parameters```参数表中的项目，就可以配置插件的参数，如下图。这也是由插件制作者设计好的。可以依据提示自行设置插件允许的功能。
![](https://rpg.blue/data/attachment/forum/201608/15/162941c03llz09if09t00l.png)

设置好之后，别忘了将```status```状态设置为```on```开启状态。这样，我们就可以使用该插件了。

现在，我们设置一个老爷爷，通过与他对话来打开EnemyBook怪物图鉴。其事件页面使用```Plugin Command```，在其中输入我们刚才在帮助文档中看到的命令。此处应该用打开怪物图鉴的命令EnemyBook Open，设置如下图：
![](https://rpg.blue/data/attachment/forum/201608/15/162941r2yloowwf5i5itfo.png)

测试游戏，可以看到，效果如图所示，??????的符号正是我们刚才设置的不知道的怪物的显示名字。
![](https://rpg.blue/data/attachment/forum/201608/15/162942u091q9nk6ks0efsp.png)

现在，我们进行一次战斗，之后再看看会发生什么，如图。
![](https://rpg.blue/data/attachment/forum/201608/15/162944ygdoy11r1ha17hgz.png)

战斗之后再打开EnemyBook，然后会发现，其中的Bat已经可以查看了，如图。
![](https://rpg.blue/data/attachment/forum/201608/15/162945gy1gv021jclpgvwj.png)

这就是插件的用法示例，通过学习，我们自己也可以设计并制作自己的插件。如果不想制作插件，学习```JavaScript```也有助于我们理解和使用插件，因为并不是每个制作者的帮助文档都写的简单明了。

::: tip 拓展
编写帮助文档很考验插件作者的写作水平。理想的帮助文档应当像[Vue.js](https://vuejs.bootcss.com/api/)的文档那样，清晰明了，简单易懂。
本教程不会提供帮助文档的写作教程。
:::


如果我们要自己创建插件，只需要在```pulgins```文件夹下创建一个新的文本文件，将扩展名改为```js```，然后就可以调用了。

::: tip 更合适的插件新建方式
新版建议使用```VScode```在```pulgins```文件夹内直接新建```JavaScript```文件，而不是先新建```txt```，再更改文件拓展名。读者可以在后续的章节内或本网站的其他地方学习到```VScode```的基本使用。
:::


## 如何编辑JavaScript
事实上，任何文本编辑器都可以打开并编辑后缀名为```.js```的```JavaScript```的脚本文件，但笔者在这里推荐使用专业的编辑器，比如```notepad++```，以及笔者用的```visual studio code```，如图所示。
一个好的编辑器可以帮助你完成一些繁琐的任务，使得编程事半功倍。
![](https://rpg.blue/data/attachment/forum/201608/15/162945psts26b6flbsoe9l.png)

上图展示的是未汉化的```VScode```，```VScode```是可以通过插件配置设置成中文的。点此阅读```VScode```的汉化教程。（待补充）


## 在事件中使用脚本
事实上，我们在事件中除了可以使用插件定义好的插件命令外，还可以直接在事件中嵌套入JavaScript语句。如图所示。
![](https://rpg.blue/data/attachment/forum/201608/15/162946j3zxgkxx93ks39kx.png)

在事件中插入脚本，即```JavaScript```语句，之后在游戏中可以通过事件来触发，如图。
![](https://rpg.blue/data/attachment/forum/201608/15/162946wvf2vvlwzcjtree8.png)

::: warning 规范化
新版不建议在```mv```的事件内编写```JavaScript```，这不方便代码调试与管理。应当仅通过调用方法的方式执行```JavaScript```逻辑。
:::

