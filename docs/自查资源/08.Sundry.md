---
title: Sundry
date: 2022-04-22 09:00:25
permalink: /pages/8354f6/
categories:
  - 自查资源
tags:
  - 
---
# Sundry 杂项内容
此处的内容不属于严格意义上的网站内容，仅仅只是作者本人临时写入数据的地方。

## 待处理内容
有一个App叫做 ： MV游戏厅

http://www.51zixue.net/JavaScript/79183.html
显式地调用 window的close方法，实现关闭。

现在学习这个教程的修改方式：
https://m.gamer.com.tw/home/creationDetail.php?sn=3857290
一个实例：

函数别名[[[] 函数别名教程 https://www.bilibili.com/video/av13028923?p=3]]。










## 蔡德东提供的 服务器和网站上线的教程

服务器、域名基础：https://www.bilibili.com/video/BV18a4y1Y7e9

在腾讯云买了个轻量级应用服务器

介绍【宝塔系统】：集成了各种设置，如数据库、Nginx等，现在不需要慢慢一一设置了，直接一键安装就好

然后安装宝塔系统
https://www.bilibili.com/video/BV1QY411p76N

接着各种设置
https://www.bilibili.com/video/BV1aV411n7SH/?spm_id_from=333.788.recommend_more_video.2

注意登入宝塔时要输入腾讯云API密钥，跟着提示设置就好

这时因为前端应用文件和后台API放在同一个服务器上了，所以不会存在跨域问题。如果提示有，那就是代码没输入对地址

https://blog.csdn.net/qq_45464560/article/details/116884716

端口不能乱设置，有些会和浏览器自带的冲突。这里我选了6666刚和冲突了，导致宝塔进不去了

如果要改登录端口，改之前要在服务器安全组/防火墙那里放行要改的端口，然后在宝塔改就行了




## 与仇九有关的内容

### mv事件与人物的理解

#### Q
是不是每一个移动的单位都会被当做是一个事件，所以需要用循环的方式来循环一个事件，才能实现批量刷新怪物的业务？

#### A
1.
Game_CharacterBase有子类Game_Character，
Game_Character 有子类Game_player和Game_Event。
Game_Character有对应的显示精灵Sprite_Character，Game_player和Game_Event的对应精灵都是一个Sprite_Character。
2.
Game_player的实例是$gamePlayer。
Game_Event的实例都储存在Game_Map的_events属性中，而 Game_Map的实例是$gameMap.
3.在Scene_Map中（实例为SceneManager._scene）的updateMain中，$gamePlayer和$gameMap会执行对应的update函数，而$gameMap的update函数又会执行_events中各个事件实例的update函数.


“一个移动的单位”的相关东西在Game_Chharacter中，而Game_Player（玩家）和Game_Event（事件）都继承了他的方法。所有的事件都是循环刷新的啊。










### 关于复制事件的插件理解
1.所有的复制事件插件都大同小异，就是先加载对应的地图文件（Map001.json等），然后将其转为js对象，然后获取其中的事件数据，整个储存在$dataMap中，而事件数据在$dataMap.events中以数组的形式储存着各个事件的数据。
在载入地图时就会依照$dataMap.events中的数据，建立每一个事件的Game_Evnets实例，将其储存在$gameMap._events中。
2.而复制事件脚本就是重复这个步骤而已，不过是在当前地图载入其他插件的数据文件（Map001.json等），然后在此地图使用这个事件数据实例化Game_Evnets，然后也添加到$gameMap._events中。一般来说，新的复制的事件id就是当前地图最大事件id+1.
3.我的插件可以在复制了事件后使用函数$gameMap.lastestSpawnEventId()获得刚才复制的新事件的id.










### 事件复制插件的用法

#### Q
将两个事件结合在一起的写法，省略 spawnEvent  的写法。

#### A
1.要建立一个新的事件当然还是得那样（读取地图数据，读取这个地图数据中某个事件的数据，然后建立Game_Event的实例）。
2.一个怪物数据总归还是用事件做的方便嘛，如果是要完全做一个新的敌人，不使用插件，那可以写一个Game_Character的新子类，比如Game_MapEnemy(不直接使用Game_Enemy的原因是mv已经使用了)，然后完全根据脚本对其进行控制。
3.如果你想直接根据某个事件数据直接建立新的事件（而不是读取其他地图数据中的事件数据），那你用我的复制事件插件也支持这样做。
首先将新事件的事件数据赋值给$dataDirectEvent（用于传递新事件的事件数据），然后执行$gameMap.spawnEvent(null,null,null,x,y)就可以在当前地图的(x,y)处建立一个新事件，这个新事件的各个数据就依照那个事件数据生成。我做这个功能的主要原因是我以前给我的ARPG系统做“队友战斗”时要用。







### 灯光插件

https://www.youtube.com/watch?v=bLDWt06mTJw

https://www.dropbox.com/s/1tyvhkn2qjanrno/QJ-Lighting-V1.0-Demo-English.rar?dl=0

https://qiujiu.itch.io/qj-lighting

https://rpg.blue/thread-488642-1-1.html

https://forums.rpgmakerweb.com/index.php?threads/rmmv-light-ultra-shadow-event-shadow.144763/



——————

https://forums.rpgmakerweb.com/index.php?threads/rmmv-light-ultra-shadow-event-shadow.144763/

https://qiujiu.itch.io/qj-lighting

https://rpg.blue/thread-488642-1-1.html
我一直在写灯光插件，昨天终于全部完工了。

我写这个插件本来是想为我的牧场游戏做战斗，但是我写灯光插件的这一个月内，我发现国内有大量的地牢与牧场游戏(比我想的要多太多了)，而我缺乏能稳定合作的美术，配乐，也没有营销经验，所以肯定没法脱颖而出。因为我这个牧场游戏的基本框架搭建完成了，再写下去就是丰富内容和细节了，继续制作对我的相关技术提升已经微乎其微了。

已经我现在应该加入别人的小团队来获得经验，所以很抱歉，我的牧场游戏又弃坑了……这不知道是我的第几次弃坑了…………………


2月2号-2月4号我回老家过年，那几天我同时肚子痛，落枕，头晕……



## 重构别人的网站

### consolelog rmdoc 网站的信息
目标网站：https://consolelog.gitee.io/rmdoc/rmmv/
仓库：https://gitee.com/consolelog/rmdoc
仓库维护者 B站个人空间： https://space.bilibili.com/261142262

### 文件目录结构理解
核心要转换的目标是成体系的，由.adoc生成的html。处理docs文件夹下面仅有的，有意义的3个html文件。

### 重构策略
- 使用pandoc对已经上述声明的3个文件转换成md格式的文件。
- 使用VuePress文档框架构建界面

### 合作重构
- 与`大胃王`沟通，新建一个全新的仓库。该仓库的全部初始化文件全部由阮中楠提供。
  - 阮中楠提供3个有意义的md文件，包括附属的img图片
  - 阮中楠提供全套的，开箱即用的VuePress项目全套配置
  - 阮中楠声明VuePress文档框架的使用方式，
- 由大胃王熟悉新的文档编辑框架，用VuePress替换asciidoctor
- 由大胃王打包生成文档，并使用gitee page推出全新版本的网站
- 由阮中楠联系9梦菌，让B站视频[【RMMV脚本】（一）了解RPG Maker MV的JS脚本框架与如何编写脚本插件](https://www.bilibili.com/video/BV1dJ41117Tp)置顶新的网站

