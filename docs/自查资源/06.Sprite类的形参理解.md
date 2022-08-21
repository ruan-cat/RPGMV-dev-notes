---
title: Sprite类的形参理解
date: 2022-06-13 17:15:55
permalink: /pages/452b27/
---



## Sprite类的形参理解


《针对[【SIAKO.Mobi】RPG Maker MV Plugin Scripting 脚本教学【渐进篇】 13节](https://www.bilibili.com/video/av23706785?p=13)和“ 【RPG Maker MV插件编程】【实例教程4】玩转标题画面 ”的导入图片示例的具体写法对比研究——Sprite类形参的写法》

我们按照`SIAKO.Mobi`的写法，写出了一下的代码，但是运行的时候总是出现`Cannot set property 'bitmap' of undefined`的报错：
``` js
this.titleFrontImage = new Sprite();
this.titleFrontImage.bitmap = ImageManager.loadTitle2(titleFrontImage);
this.addChild(this.titleFrontImage);
```

以下这段代码是可以运行的27 above。
``` js
var temp = ImageManager.loadTitle2(titleFrontImageName);
this.temp_image = new Sprite(temp);
this.addChild(this.temp_image);
```

我现在猜测，是在`new`一个`Sprite`类对象的时候，形参写错了，我参考了以下的源码得出的猜想：

``` js
//在Scene_Title类的源码中。系统针对Sprite类形参的写法是，另外在new一个Bitmap类对象。其中，Bitmap类对象的参数为Graphics.width, Graphics.height
this._gameTitleSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));

//在Scene_Title类的源码中。系统源码的在填写Sprite类的形参是直接填写一个图片。
this._backSprite1 = new Sprite(ImageManager.loadTitle1($dataSystem.title1Name));
```



现在更改了一下代码的写法，就通过了：
this.titleFrontImage = new Sprite( ImageManager.loadTitle2(titleFrontImageName) );
this.addChild(this.temp_image);

我觉得，在new一个Sprite类对象的时候，形参应该要填写好具体的图像。而不是像SIAKO.Mobi那样不填写参数格式。我重新写好了一段代码，发现不是SIAKO.Mobi写法的问题，而是我的写法问题。

**先new一个Bitmap位图对象，用ImageManager.方法导图，然后再把Bitmap位图对象填写形参至Sprite对象内。或者针对于现存的Sprite对象，直接对Sprite.bitmap进行赋值。**