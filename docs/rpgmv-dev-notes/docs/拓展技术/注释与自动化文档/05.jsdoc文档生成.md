# 如何使用基于 node.js 的 JSDoc 制作自己写的 mv 项目插件代码的 API 网页版说明文档

在插件开发中，我们会写出很多的代码。为了使其他人更好地阅读我们的代码，除了在代码中写上注释，还有生成`API接口文档`的方式来帮助他人阅读代码。对于`JavaScript`这种弱类型的语言来说，就更需要写注释了。对于`mv`项目来说，大部分的插件代码都没有写注释，那我们要本着负责的态度，对自己的代码负责，就更需要写清楚自己代码的注释。

## jsdoc 是什么？

在生成`API`接口文档之前，我们要先了解`JSDoc`是什么？`JSDoc`不仅是一个**API 接口生成工具**，更是一种**注释语法**，它类似于`JavaDoc`，更确切地讲，`JSDoc`就是从`JavaDoc`引申而来的。在使用`JSDoc`工具之前，我们要先学会其注释语法。事实上，`VScode`本身就自动对`JavaScript`支持`JSDoc`，学习成本会大幅下降。

[点此阅读 JSDoc 在线手册](http://www.dba.cn/book/jsdoc/)

在`CSDN`中，绝大多数的`JSDoc`使用教程都在使用极其熟悉的`npm`包导入方式，要想使用`npm`，就必须先安装[node 环境](https://blog.csdn.net/qq_39308408/article/details/97754889)。安装完`node`环境后，[JSDoc 的安装和使用](https://blog.csdn.net/qq_44810574/article/details/89194784)就极其容易了。

## 配置环境

关于`node`安装，建议读者自行去[CSDN](https://www.csdn.net/)查询关于`node`环境的安装配置教程。

### 安装 node 环境 <Badge type='warning' text='不严谨' />

去[node 官网](https://nodejs.org/en/download/)下载`windows installer`版本的安装包。

### 配置 npm <Badge type='warning' text='不严谨' />

在你的`nodejs`目录下创建两个目录，分别是`node_cache`和`node_global`。在`cmd`执行下面这两个命令：

```bash
npm config set prefix  '你的安装位置\nodejs\node_global'
npm config set cache  '你的安装位置\nodejs\node_cache'
```

### 配置环境变量 <Badge type='warning' text='不严谨' />

在环境变量的配置界面配置`NODE_PATH`，值填：`你的安装位置\nodejs\node_global\node_modules`
修改`Path`中含有`npm`值的式子，修改为：`你的安装位置\nodejs\node_global\`

## 使用全局的 jsdoc <Badge type='warning' text='不推荐' />

### 安装 jsdoc

在`cmd`输入以下命令安装`jsdoc`

```bash
npm install -g jsdoc
```

如果你没有配置好本地`npm`的全局包储存位置，那么全局安装的包总是会自动储存到 C 盘，这很容易让你的 C 盘爆满。请不要高估 C 盘的承载能力，也不要随意地使用全局安装，除非你已经确定将`npm`的本地仓库配置到了非 C 盘的位置。

### 使用 jsdoc 命令

找到自己写插件代码所储存的上一层级文件夹目录，在此目录中打开`cmd`。在此`cmd`中输入以下命令。

```bash
jsdoc -r 文件夹名称
```

### 阅览生成的文档

在新生成的`out`文件夹内点击`index.html`文件即可检查自己所写插件代码的`API接口文档`。

## 使用局部的 jsdoc <Badge text='推荐' />

相比于全局的`jsdoc`，作者跟建议大家使用**局部**的`jsdoc`。`jsdoc`其本质是一个文档生成工具，没必要安装为全局包，安装为项目的局部开发环境依赖包即可。

以下的内容更加倾向于专业开发者阅读，如果你在阅读的时候遇到障碍，你可能需要去了解学习关于`node`环境、`npm`以及`依赖包`等相关概念。

### 前提

此时，我们总是默认当前项目为标准的`node`项目，如果你已经配置好了本机的`node`环境，请在你的`mv`工程下使用`npm init`命令来初始化一个`node`项目。你可以理解为把`mv`项目拓展为`node`项目，而不是`node`项目覆盖了你的`mv`项目。

### 局部安装开发环境的 jsdoc

```bash
npm install --save-dev jsdoc
```

这行命令与上述的全局安装命令有着很大的区别，请读者自行去查阅`npm`命令参数`-g`与`--save-dev`之间的差别。

### 在项目根目录下配置 conf.json 文件

在项目根目录下新建`conf.json`并配置。本文不提供细致的配置教程，[点此参考`conf.json`的配置写法](https://www.html.cn/doc/jsdoc/about-configuring-jsdoc.html)。配置参考如下：

```json
{
	"tags": {
		"allowUnknownTags": true,
		"dictionaries": ["jsdoc", "closure"]
	},
	"source": {
		"include": ["sourceCodeFile"],
		"exclude": [],
		"includePattern": ".+\\.js(doc)?$",
		"excludePattern": "(^|\\/|\\\\)_"
	},
	"plugins": [],
	"templates": {
		"cleverLinks": false,
		"monospaceLinks": false
	},
	"opts": {
		"template": "templates/default", // same as -t templates/default
		"encoding": "utf8", // same as -e utf8
		"destination": "rpgmv-api-doc",
		"recurse": true // same as -r
		// "tutorials": "path/to/tutorials" // same as -u path/to/tutorials
	}
}
```

### 执行 jsdoc 命令并在指定文件夹内生成出 api 文档

推荐默认在根目录下执行`jsdoc`命令：

```bash
node ./node_modules/jsdoc/jsdoc.js -c conf.json
```

上述命令行的配置写法参考于[此文章](https://blog.csdn.net/weixin_34128839/article/details/91934667)。此时生成的静态网页在`rpgmv-api-doc`文件夹内，因为作者在`conf.json`内的`destination`配置项中指明了输出文件夹目录。

## jsdoc 的高阶配置 <Badge type='error' text='进阶' />

本节内容展示的是进阶版本`jsdoc`配置，默认你已经阅读完了上述的全部内容。本节内容几乎就是为了给**专业程序员**阅读的，如果你本身没有相当过硬的基础，这些内容对你来说属于天书，请不要在此浪费时间。

默认你具有这样的基础或能力

- 翻墙阅览`github`仓库
- 能够阅读简单的**纯英文**`API`文档

### 参考资料

- [jsdoc 官方文档](https://jsdoc.app/)
- [jsdoc 的 github 仓库](https://github.com/jsdoc/jsdoc)

### 使用更加易于配置的.js 格式替代.json 格式的配置文件

[此文档](https://jsdoc.app/about-configuring-jsdoc.html#configuration-file-formats)指出，高版本以上的`jsdoc`是支持`CommonJS module`模块的，参照文档要求自行改造配置文件即可。页面如下图：
![image-20220815124718084](https://raw.githubusercontent.com/RuanZhongNan/img-store/main/img/image-20220815124718084.png)

作者的可参考写法如下：

```js
"use strict";

module.exports = {
	tags: {
		allowUnknownTags: true,
		dictionaries: ["jsdoc", "closure"],
	},

	source: {
		include: ["sourceCodeFile"],
		exclude: [],
		includePattern: ".+\\.js(doc)?$",
		excludePattern: "(^|\\/|\\\\)_",
	},

	plugins: [],

	templates: {
		cleverLinks: false,
		monospaceLinks: false,

		// 使用主题插件 better-docs 的名称配置
		"better-docs": {
			name: "阮中楠文档",
		},

		// 使用主题插件 tui-jsdoc-template 的配置
		name: "阮中楠的文档",
		footerText: "底部导航栏文字",
	},

	opts: {
		/**
		 * 可用的一些模板 需要自行安装下载 自行去github搜索相关细节
		 * templates/default
		 * node_modules/minami
		 * node_modules/better-docs
		 * node_modules/tui-jsdoc-template
		 */
		template: "node_modules/tui-jsdoc-template",
		encoding: "utf8",
		destination: "rpgmv-api-doc",
		recurse: true,
		readme: "./README.md",
		verbose: true,
		// "tutorials": "path/to/tutorials"
	},
};
```

### 使用新的命令行来生成文档

```bash
node ./node_modules/jsdoc/jsdoc.js -c jsdoc.js
```

### 使用更加炫酷的主题插件

`jsdoc`作为一款文档自动化生成工具，自然是可以配置文档主题的。文档主题样式同样以`node`包安装。这里不介绍如何配置。

[点此查阅如何在 jsdoc 配置文件中配置主题插件](https://jsdoc.app/about-plugins.html#creating-and-enabling-a-plugin)。

[点此查阅官方推荐的一些主题插件](https://github.com/jsdoc/jsdoc#templates)。

### 主页的 readme.md 文档配置

自动生成的文档主页一般总是配置成项目的`readme.md`文件，使用以下配置即可引用文档：

```js
opts: {
	readme: "./README.md";
}
```
