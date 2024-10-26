# vscode 的插件

各种 VScode 的插件使用记录，包括错误、快捷键、使用技巧等

## 本文件的重构

把每一个涉及到的插件，都给我专门移动到对应的专属文件夹，一律用插件的专属 id 名作为文件夹来全局索引。

这样可以做出更加精细的插件配置学习。

## 插件推荐

TODO: 去看更多的 vscode 插件推荐的文章、B 站视频、知乎专栏文章、掘金等。拓展更好的 vscode 开发环境，提高工作效率

https://zhuanlan.zhihu.com/p/139140492

### Zhihu On VSCode ?

https://marketplace.visualstudio.com/items?itemName=niudai.vscode-zhihu

## koroFileHeader

### 头部注释

`VScode`的`koroFileHeader`插件可以生成代码的头部注释。手动为代码生成头部注释的快捷键是`Ctrl+Window+I`。使用快捷键`Ctrl+Shift+P`输入命令`@command:extension.fileheader`或输入命令`fileheader`也可以生成头部注释。

## vetur

### Root file specified for compilation

结论，傻逼问题。VScode 犯病。起因是重命名了 vue 文件，导致插件识别时出现错误。不管即可。

直接去 CSDN 查即可得出结论。

### 根目录下的 package.json 影响了项目变量的类型提示

`vetur`插件在不同项目架构下，出现识别错误。根目录下是否存在`package.json`文件，会影响用`.d.ts`增强的变量类型提示。如果根目录下没有该文件时，`vetur`插件就不能识别该文件，导致我们编写的`.d.ts`失去作用，如下所示：

- 能够支持`dts`类型提示的情况

![image-20221129155137613](https://raw.githubusercontent.com/ruan-cat/img-store/main/img/image-20221129155137613.png)

- 完全不能识别的情况

![image-20221129155202158](https://raw.githubusercontent.com/ruan-cat/img-store/main/img/image-20221129155202158.png)

### 来自`eslint`的`vue/multi-word-component-names`报错

在该版本内得到了及时的修复。不必自己额外配置 `eslint.config.js` 来单独屏蔽掉了。
https://github.com/vuejs/vetur/releases/tag/v0.37.3

## git-commit-plugin

`git`的提交信息是有提交规范的。这个提交规范仅仅限制在字符串形式的提交记录上。现在可以用`vscode`的插件快速使用规范提供的模板，实现配置。使用[`git-commit-plugin`](https://marketplace.visualstudio.com/items?itemName=redjue.git-commit-plugin)插件即可。

### 常用配置

```json
{
	/*
    git-commit-plugin 提交记录插件 长度配置 这里配置到50
    参考资料： https://github.com/RedJue/git-commit-plugin#settings-options

    v < 1.1.2
    "GitCommitPlugin.MaxSubjectWords": 50

    v >= 1.1.2
    "GitCommitPlugin.MaxSubjectCharacters": 50

    在1.1.2版本内，该api的名称被更改了，需注意更改全局配置。
  */

	"GitCommitPlugin.MaxSubjectCharacters": 50
}
```

## 代码截图插件

这里主要考虑`CodeSnap`和`Polacode`插件。目前采用的是`CodeSnap`插件来实现代码片段的截图分享。

- [CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)
- [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode)

## 快捷键映射配置

平时常用的`Ctrl` + `Shift` + `/`和`Ctrl` + `D`快捷键，均来至于插件[`Eclipse Keymap`](https://marketplace.visualstudio.com/items?itemName=alphabotsec.vscode-eclipse-keybindings)，而不是`vscode`自带的快捷键。

## 几款高度相似的 vue 开发插件

当前结论：
`Vetur`是`vue2`版本的插件，`Volar`是`vue3`版本的插件。

参考资料：
`Vetur`的官方`issue`。指出其插件将保持和`vue2`相同的生命周期，将会被替换
https://github.com/vuejs/vetur/issues/3476

官网文档的迁移说明。英文版明确说明了`ide`的识别支持从`Vetur`升级到了`Volar`。
https://v3-migration.vuejs.org/recommendations.html#new-framework-level-recommendations

值得注意的是，`Vuter`是从`Vetur`项目`fork`而来的，我们也应该尽可能的不使用该工具。
https://github.com/yoyo930021/vuter

- Vuter
  https://marketplace.visualstudio.com/items?itemName=yoyo930021.vuter

- Volar
  https://marketplace.visualstudio.com/items?itemName=Vue.volar

- Vetur
  https://marketplace.visualstudio.com/items?itemName=octref.vetur
  https://vuejs.github.io/vetur/

## `code runner`

该插件可以快速运行代码，但是在运行 `ts` 时，需要本机额外安装全局依赖包。
https://github.com/formulahendry/vscode-code-runner/issues/632

## `EditorConfig for VS Code`

[插件详情](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

该插件能够快速配置当前项目的`.editorconfig`文件。应该作为常用的插件，并且每一个项目都应该使用该插件来快速生成`.editorconfig`文件。

### 使用示例

比如说我们遇到了一个新的项目，如下截图

![2023-02-19-13-07-10](https://raw.githubusercontent.com/ruan-cat/img-store/main/img/2023-02-19-13-07-10.png)

该项目的间距等格式化相关的信息都不太合适，想要快速格式化，这里是推荐在项目根目录内新建`.editorconfig`文件，并且去配置`indent_style = tab`。

- 右键新建文件
  > ![2023-02-19-13-19-35](https://raw.githubusercontent.com/ruan-cat/img-store/main/img/2023-02-19-13-19-35.png)
- 修改`indent_style`配置
  > ![2023-02-19-13-20-13](https://raw.githubusercontent.com/ruan-cat/img-store/main/img/2023-02-19-13-20-13.png)

最后在`prettier`等格式化插件的配置下，就可以格式化本文件了，如下图所示：

![2023-02-19-13-21-51](https://raw.githubusercontent.com/ruan-cat/img-store/main/img/2023-02-19-13-21-51.png)

## `vs-picgo`

[插件详情](https://marketplace.visualstudio.com/items?itemName=Spades.vs-picgo)

该插件实现了本地 `picgo` 的配置识别，并直接使用相关服务实现上传。

### 上传图片的快捷键

其中，默认的图片上传快捷键不是`Ctrl+C`，而是`Ctrl+Alt+U`。

### 上传历史记录

本插件的上传历史记录默认保存在`C盘`的`vs-picgo-data.json`文件内。在`settings.json`内一般需要配置为：

```json
{
	"picgo.dataPath": "C:\\Users\\Administrator\\vs-picgo-data.json"
}
```

### 推荐的工作区配置

```json
{
	"recommendations": ["Spades.vs-picgo"]
}
```

### 配置该插件时遇到的问题

目前的关于该插件的配置，存在着写死的绝对路径配置。

```json
{
	"picgo.configPath": "C:\\Users\\Administrator\\AppData\\Roaming\\picgo\\data.json",
	"picgo.dataPath": "C:\\Users\\Administrator\\vs-picgo-data.json"
}
```

该配置在不同的电脑上，导致了错误。`vscode`直接显示出`command 'picgo.uploadImageFromClipboard' not found`的错误。因为查询不到正确的全局`picgo`配置。这个配置缺陷很大。

调整后，就不会出现该错误了，可以正常的上传。

![2023-02-20-11-31-06](https://raw.githubusercontent.com/ruan-cat/img-store/main/img/2023-02-20-11-31-06.png)

## test - picgo

![2023-02-19-14-28-13](https://raw.githubusercontent.com/ruan-cat/img-store/main/img/2023-02-19-14-28-13.png)

直接使用 picgo 可以直接上传 bili 的图片，可以生成出有意义的图片
![](https://article.biliimg.com/bfs/article/2731e1bc7389c6133f9363c84a9cdb282c2a277a.png)

## 学习待办

该插件存在显示问题，需要我们重新配置显示的图标
![2023-02-20-14-08-42](https://raw.githubusercontent.com/ruan-cat/img-store/main/img/2023-02-20-14-08-42.png)

## 测试性质的流程图

```mermaid
graph TB
  2[["2号插件"]]-->|执行次序2 2号插件 先执行后回调|3-s["3号插件(开始)"];
  3-s["3号插件(开始)"]-->|执行次序3 执行|3-e["3号插件(结束)"];
  2[["2号插件"]]-->|执行次序5 1号插件 先回调后执行|1(["1号插件"]);
  1(["1号插件"]) & 3-e["3号插件(结束)"] -->|执行次序1 1号插件 先执行后回调|2[["2号插件"]];
```

```mermaid
gantt
  title 优化的异步loading写法
  dateFormat SSS
  axisFormat %L

  section 任务
  主异步任务 :active, 000, 500
  loading加载任务 :active, 300, 500
```

## vue-class-component

https://github.com/fmfe/vue-class-setup

https://github.com/vuejs/vue-class-component

感觉现在写 vue 组件的方式很多。需要搞清楚这些是什么东西。

### 当前学习情况

目前好好学习 vue3 的组合式语法即可。不学习该 class 写法了。
