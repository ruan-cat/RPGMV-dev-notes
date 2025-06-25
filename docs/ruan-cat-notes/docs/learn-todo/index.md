# 个人学习待办

## 设计模式的学习

继承、组合、聚合。这三种东西怎么实现？有什么优缺点？在什么时候使用最好？

## 设计模式

- https://notes.youngkbt.cn/design-pattern

## 什么是微前端技术？

了解关于微前端的技术

- https://qiankun.umijs.org/zh

## 构建便于查询的数据结构？

查询？目前有这几种方式实现可以查询性质的数据结构构建。

1： find 函数直接查询。
2： 构建查询用的数据结构。
2.1： Object.assign
2.2： Object.fromEntries

## FileSaver

FileSaver

## vue 组件的即时阅览与单元测试

- https://www.v2ex.com/t/840680
- https://github.com/jaweii/AutoPreview/blob/main/README-zh.md

### 当前进度

vue2 不行，vue3 生态下可以考虑配置

## 学习 rouyi 的搜索栏功能

在 https://gitee.com/y_project/RuoYi-Vue 内，其顶部导航栏的搜索栏非常有用，有空可以考虑嵌套使用。
HeaderSearch 组件

## gasp

这是什么前端动画库？怎么使用？

## storybook

这是一个实现组件库的工具。可以考虑以下的技术栈实现组件库：

- storybook
- typescript
- vue3
- vite

目前还不是很懂这个组件库的生成。我没有找到类似的，可以参考的 github 例子。

- https://storybook.js.org/blog/storybook-vue3/

## vuepress 导入自定义组件

在 vuepress 内导入 mo7 提供的自定义组件。学一下怎么深度定制 vuepress

## 腾讯低代码 + 机器人

用低代码平台和机器人来实现通知功能？比如企业微信机器人，QQ 机器人的通知功能？

## 类似的提交库

学习以下的提交工具库，搞清楚该如何使用。

- https://github.com/unjs/changelogen
- https://github.com/antfu/changelogithub

## prepublishOnly

基于 prepublishOnly 怎么实现发包前的打包？怎么保证其 build 构建过程是遵循 turbo 依赖拓扑结构的？

## ai 平台的接口流式输出

- https://api-docs.deepseek.com/zh-cn/
- https://github.com/LangbaseInc/langui

我现在有 deepseek 的 key 了，尝试实现一个能够流式输出的前端交互界面。对接自己的大模型接口。

### 可能的参考资料

- https://vscode.dev/github/Jannchie/koishi-plugin-openai-chatbot/blob/main/src/index.ts

用简单的调用 api 方式，实现调接口。

```js
import { Configuration, OpenAIApi } from "openai";
```

## langchain

这是什么？为什么很多跟 ai 相关的客户端项目，都有这个东西？

## 尝试多个 ai 客户端平台，看看能否实现预配置提示词的功能

金玉良缘的需求是实现预配置提示词。如果现有的 ai 平台能实现，就先提供出来。

## 探索更多的 AI 生成代码平台

- cursor
- Cline
- v0
- blot

azure 注册：https://azure.microsoft.com/
azure AI 平台：https://ai.azure.com/
CherryStudio：https://cherry-ai.com/
火山引擎：https://www.volcengine.com
硅基流动：https://www.siliconflow.com/zh/home
OpenWeb UI: https://github.com/open-webui/open-webui
秘塔 AI 搜索：https://metaso.cn/
Perplexity 搜索： https://www.perplexity.ai/

## 本站首页改成允许增加 SiteInfo 的页面

<!-- <SiteInfo
  v-for="item in $frontmatter.projects"
  :key="item.link"
  v-bind="item"
/> -->

寻找新的文件写入算法，根据标识符，写入文件。看看 automd 有没有特定的标识符，可以实现自主导入特定文本段的功能。

或者其他按照标记符导入文本段的 node 库。

预期导入 domain 包的信息。

同时需要拓展 domain 包，让该依赖包有能力自主输出项目信息和描述。

## 单独 md 文档直接转义输出成含有 html 和 css 样式的 md

用平常的 md 语法来写文档，试图使用 markdown-it 的方式转义语法，并生成出简单的 md

未来再考虑用生成产物直接上传到各大博客平台，实现含有样式的，折叠栏的文章。

## 拓展好用的 zsh 插件

zsh 是干什么的？

是什么类型的生产力工具？

有什么好用的插件？

## 阅读`fantastic-admin`源码

- https://github.com/fantastic-admin/basic

这个看起来和 vben 有的一拼。有空看看源码。

## 学习 PlusProComponents

这个对 element-plus 有二次封装。似乎很适合实现 curd。

- https://plus-pro-components.com/guide/

个人已经不太想重复造轮子了，封装组件好烦。

## idea 破解版

- https://mp.weixin.qq.com/s/FE9SbCK9QD0vtFdCNoIhlA

找 wjt 跟进

## cursor 破解版

- https://github.com/yuaotian/go-cursor-help/issues/510
- https://downloads.cursor.com/production/61e99179e4080fecf9d8b92c6e2e3e00fbfb53f4/win32/x64/user-setup/CursorUserSetup-x64-0.48.9.exe

这里说的"apply the repo script"，我直接用的 powershell 脚本，粘贴回车就行：
irm https://aizaozao.com/accelerate.php/https://raw.githubusercontent.com/yuaotian/go-cursor-help/refs/heads/master/scripts/run/cursor_win_id_modifier.ps1 | iex

对了还有，目前这个方法就是根据新用户能免费用半个月的 pro 版本 cursor，每半个月注册一次就行。注册要用邮箱注册嘛，所以要解决邮箱不够用的问题，我用的是域名邮箱，你有一个域名 理论上就能有无限个临时邮箱了

## 风车 cursorfree

## 试着自己生成一个移动端 app

试试用别人的提示词，和 gemini、v0、cursor 沟通一下，生成原型图，然后制作项目。

- https://juejin.cn/post/7510151175677673487

试一下这一套重新开始的，小 demo 快速起步的工作流程。
