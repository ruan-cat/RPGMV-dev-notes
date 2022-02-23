(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{579:function(s,t,a){"use strict";a.r(t);var n=a(9),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"原生的-markdown-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原生的-markdown-语法"}},[s._v("#")]),s._v(" 原生的 Markdown 语法")]),s._v(" "),a("p",[s._v("当然，你可以在 Markdown 中使用所有 Markdown 的原生语法，如果有一些不太方便使用 Markdown 语法实现的，你也可以在其中书写 HTML 语法")]),s._v(" "),a("h2",{attrs:{id:"vuepress-默认的扩展语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-默认的扩展语法"}},[s._v("#")]),s._v(" VuePress 默认的扩展语法")]),s._v(" "),a("p",[s._v("VuePress 内置了一些比较易用的语法特性，这使得你可以更加容易地书写文章，这里简单列举下支持的语法，具体特性请前往 "),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/guide/markdown.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress Markdown 扩展语法"),a("OutboundLink")],1),s._v(" 查看")]),s._v(" "),a("ul",[a("li",[s._v("GitHub 风格的表格")]),s._v(" "),a("li",[s._v("Table of Contents")]),s._v(" "),a("li",[s._v("Emoji")]),s._v(" "),a("li",[s._v("代码块\n"),a("ul",[a("li",[s._v("代码块语法高亮")]),s._v(" "),a("li",[s._v("代码块中的行高亮")]),s._v(" "),a("li",[s._v("显示行号")]),s._v(" "),a("li",[s._v("代码段的导入")])])])]),s._v(" "),a("h2",{attrs:{id:"使用-markdown-it-插件扩展语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-markdown-it-插件扩展语法"}},[s._v("#")]),s._v(" 使用 "),a("code",[s._v("markdown-it")]),s._v(" 插件扩展语法")]),s._v(" "),a("p",[s._v("你还可以使用 "),a("code",[s._v("markdown-it")]),s._v(" 插件对语法进行扩展")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("markdown")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// markdown-it-anchor 的选项")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("anchor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("permalink")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// markdown-it-toc 的选项")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("toc")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("includeLevel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("extendMarkdown")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("md")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用更多的 markdown-it 插件!")]),s._v("\n      md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'markdown-it-xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"在-markdown-中使用-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-markdown-中使用-vue"}},[s._v("#")]),s._v(" 在 Markdown 中使用 Vue")]),s._v(" "),a("p",[s._v("你甚至可以在 Markdown 中直接使用 Vue 以及 Vue 组件，就像这个主题内置的徽章"),a("Badge",{attrs:{text:"Badge"}}),s._v("，更多示例请见 VuePress 官网"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/using-vue.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("在 Markdown 中使用 Vue"),a("OutboundLink")],1)],1),s._v(" "),a("h2",{attrs:{id:"使用插件扩展语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用插件扩展语法"}},[s._v("#")]),s._v(" 使用插件扩展语法")]),s._v(" "),a("p",[s._v("还有一些 VuePress 插件可以提升你的 Markdown 语法，你可以参考"),a("RouterLink",{attrs:{to:"/drill-api/2.6.1/plugins/#插件怎么用"}},[s._v("插件的使用")]),s._v("来添加你自己想要的插件")],1),s._v(" "),a("p",[s._v("下面简单介绍两个比较实用的插件")]),s._v(" "),a("h3",{attrs:{id:"容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[s._v("#")]),s._v(" 容器")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/container/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-container"),a("OutboundLink")],1),s._v(" 允许你可以使用来自定义一个容器，主题利用该插件内置了三个简单易用的块容器，你可以通过以下方式来启用")]),s._v(" "),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[s._v("::: tip\nThis is a tip\n:::\n\n::: warning\nThis is a warning\n:::\n\n::: danger\nThis is a dangerous warning\n:::\n\n::: theorem 牛顿第一定律\n假若施加于某物体的外力为零，则该物体的运动速度不变。\n\n::: right\n来自 "),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("维基百科")]),s._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B")]),s._v(")")]),s._v("\n:::\n\n::: details\n这是一个详情块，在 IE / Edge 中不生效\n:::\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("This is a tip")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("This is a warning")])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"title"}),a("p",[s._v("This is a dangerous warning")])]),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[s._v("牛顿第一定律")]),a("p",[s._v("假若施加于某物体的外力为零，则该物体的运动速度不变。")]),s._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[s._v("来自 "),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B",target:"_blank",rel:"noopener noreferrer"}},[s._v("维基百科"),a("OutboundLink")],1)])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("See More")]),s._v(" "),a("p",[s._v("这是一个详情块，在 IE / Edge 中不生效")])]),s._v(" "),a("h3",{attrs:{id:"流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程图"}},[s._v("#")]),s._v(" 流程图")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://flowchart.vuepress.ulivz.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-flowchart"),a("OutboundLink")],1),s._v(" 可以让你在 Markdown 中直接绘制流程图，就像这样")]),s._v(" "),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@flowstart\ncond=>condition: Process?\nprocess=>operation: Process\ne=>end: End\n\ncond(yes)->process->e\ncond(no)->e\n@flowend\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("p",[s._v("@flowstart\ncond=>condition: Process?\nprocess=>operation: Process\ne=>end: End")]),s._v(" "),a("p",[s._v("cond(yes)->process->e\ncond(no)->e\n@flowend")])])}),[],!1,null,null,null);t.default=r.exports}}]);