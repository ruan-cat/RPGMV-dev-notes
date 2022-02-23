(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{617:function(t,e,s){"use strict";s.r(e);var r=s(9),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"用vscode的方式来运行调试mv项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用vscode的方式来运行调试mv项目"}},[t._v("#")]),t._v(" 用VScode的方式来运行调试mv项目")]),t._v(" "),s("p",[t._v("本小节内容涉及到了插件开发的内容，但是并不涉及具体代码编写，只涉及到简单的软件设置。")]),t._v(" "),s("p",[t._v("在实际开发的时候，会遇到这样的一个开发情况：我需要先对插件设置断点，然后再启动游戏触碰断点，随后再跟着进程一步一步的摸清楚代码的运行情况。虽然RPGMV本身会提供一个调试工具，按F8可以开启调试工具，但是这个工具是先启动游戏，再启动调试，然后我们才可以给目标代码设置断点。这个顺序不对，这样的顺序也不符合我们常见的软件开发，那我们就必须找到一个新的方法来启动MV项目代码。因此本小节问题还可以这样称呼："),s("strong",[t._v("如何在不使用RPGMV这款软件来独立启动其附属的MV项目代码？")])]),t._v(" "),s("h2",{attrs:{id:"技术栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术栈"}},[t._v("#")]),t._v(" 技术栈")]),t._v(" "),s("p",[s("code",[t._v("VScode")]),t._v(" + "),s("code",[t._v("Live Server")]),t._v(" + "),s("code",[t._v("Chrome")])]),t._v(" "),s("h2",{attrs:{id:"配置流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置流程"}},[t._v("#")]),t._v(" 配置流程")]),t._v(" "),s("p",[t._v("下面介绍下面介绍基本流程。下面的安装流程和相关操作可以打乱一下顺序。")]),t._v(" "),s("h3",{attrs:{id:"下载代码编辑器vscode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载代码编辑器vscode"}},[t._v("#")]),t._v(" 下载代码编辑器VScode")]),t._v(" "),s("p",[t._v("从官网上下载，全称为"),s("code",[t._v("Visual Studio Code")]),t._v("。"),s("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("点此进入官网"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"下载浏览器chrome"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载浏览器chrome"}},[t._v("#")]),t._v(" 下载浏览器Chrome")]),t._v(" "),s("p",[t._v("全称为"),s("code",[t._v("Google Chrome")]),t._v("。"),s("a",{attrs:{href:"https://www.google.cn/chrome/",target:"_blank",rel:"noopener noreferrer"}},[t._v("点此进入官网"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"下载vscode插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载vscode插件"}},[t._v("#")]),t._v(" 下载VScode插件")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("VScode")]),t._v("中下载软件插件"),s("code",[t._v("Live Server")]),t._v("和"),s("code",[t._v("Debugger for Chrome")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"live-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#live-server"}},[t._v("#")]),t._v(" Live Server")]),t._v(" "),s("p",[t._v("具体截图如下：\n"),s("img",{attrs:{src:"https://gitee.com/HechiCollegeComputerAssociation/image-store/raw/master/picgo-file/image-20220223091736226-16455790913541.png",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"debugger-for-chrome"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugger-for-chrome"}},[t._v("#")]),t._v(" Debugger for Chrome")]),t._v(" "),s("p",[t._v("具体截图如下：\n"),s("img",{attrs:{src:"https://gitee.com/HechiCollegeComputerAssociation/image-store/raw/master/picgo-file/image-20220223091933586.png",alt:"image-20220223091933586"}})]),t._v(" "),s("h3",{attrs:{id:"配置vscode的launch-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置vscode的launch-json"}},[t._v("#")]),t._v(" 配置VScode的launch.json")]),t._v(" "),s("p",[t._v("在工程文件夹内找到文件夹"),s("code",[t._v(".vscode")]),t._v("，若没有则手动创建。新增并修改"),s("code",[t._v("launch.json")]),t._v("文件。")]),t._v(" "),s("p",[t._v("复制粘贴"),s("code",[t._v("Debugger for Chrome")]),t._v("提供的代码并作出小改动，更改"),s("strong",[t._v("本地服务器端口号")]),t._v("和"),s("strong",[t._v("调试器名称")]),t._v("。")]),t._v(" "),s("p",[t._v("可参考的"),s("code",[t._v("launch.json")]),t._v("配置写法如下：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 IntelliSense 了解相关属性。 ")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 悬停以查看现有属性的描述。")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更多配置教程，请访问： ")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.bilibili.com/video/BV1jJ411c7zK")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.bilibili.com/video/BV11A411n7Lq")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 版本号 暂无意义 直接复制粘贴即可")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.2.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"configurations"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以Chrome浏览器来启动")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chrome"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"launch"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调试器名称 可以自己任意取名 尽量不要取名为空字符串")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"阮喵喵项目调试器(该名称在launch.json设置)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// VScode 的 live server 插件所提供的默认本地服务器端口为5500。")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"webRoot"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${workspaceFolder}"')]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br")])]),s("h3",{attrs:{id:"配置vscode的setting-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置vscode的setting-json"}},[t._v("#")]),t._v(" 配置VScode的Setting.json")]),t._v(" "),s("p",[t._v("在启动我们本地的web项目时，有时需要对"),s("code",[t._v("Live Server")]),t._v("插件提供的端口号进行调整，比如说将预设值"),s("code",[t._v("5500")]),t._v("调整成自己想要的其他数值。这时我们需要去"),s("code",[t._v("settings.json")]),t._v("文件内进行修改。")]),t._v(" "),s("p",[t._v("假设你已经学会了用"),s("code",[t._v("Live Server")]),t._v("启动web，并假设我们要设置的端口号为"),s("code",[t._v("4399")]),t._v("。")]),t._v(" "),s("p",[t._v("首先，我们在本项目的"),s("code",[t._v(".vscode")]),t._v("文件夹内新建一个与"),s("code",[t._v("launch.json")]),t._v("文件并列的"),s("code",[t._v("settings.json")]),t._v("。\n在"),s("code",[t._v("settings.json")]),t._v("中做以下配置：")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"liveServer.settings.port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4399")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"liveServer.settings.root"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("我们不仅要修改"),s("code",[t._v("settings.json")]),t._v("的值，还要同步修改"),s("code",[t._v("launch.json")]),t._v("内"),s("code",[t._v("url")]),t._v("属性的值为"),s("code",[t._v("http://localhost:4399")]),t._v("，这样我们才算是修改好了"),s("code",[t._v("Live Server")]),t._v("的端口号。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/qq_39438464/article/details/113783740",target:"_blank",rel:"noopener noreferrer"}},[t._v("点此阅读其他的参考文章。"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"配置浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置浏览器"}},[t._v("#")]),t._v(" 配置浏览器 "),s("Badge",{attrs:{type:"warning",text:"非必要"}})],1),t._v(" "),s("p",[t._v("找到装在电脑内的"),s("code",[t._v("Google Chrome")]),t._v("，并在其"),s("strong",[t._v("属性")]),t._v("状态栏内的"),s("strong",[t._v("快捷方式->目标")]),t._v("栏中添加代码： "),s("code",[t._v("–remote-debugging-port=9222")]),t._v(" 。注意在填写时要注意前面要加上"),s("strong",[t._v("空格")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"视频参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频参考"}},[t._v("#")]),t._v(" 视频参考")]),t._v(" "),s("p",[t._v("具体教学可以参考以下两个B站教程：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.bilibili.com/video/BV1jJ411c7zK",target:"_blank",rel:"noopener noreferrer"}},[t._v("原版"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.bilibili.com/video/BV11A411n7Lq",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮中楠改编版"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"启动流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动流程"}},[t._v("#")]),t._v(" 启动流程")]),t._v(" "),s("p",[t._v("下面介绍启动流程：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("开启本地服务器\n在"),s("code",[t._v("VScode")]),t._v("下启动"),s("code",[t._v("Live Server")]),t._v("并开启本地服务器。")])]),t._v(" "),s("li",[s("p",[t._v("点击调试\n在"),s("code",[t._v("VScode")]),t._v("中找到"),s("code",[t._v("debugger")]),t._v("栏，并选择"),s("code",[t._v("debug")]),t._v("的工具。按F5运行/调试。")])])]),t._v(" "),s("h2",{attrs:{id:"基本原理介绍与答疑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本原理介绍与答疑"}},[t._v("#")]),t._v(" 基本原理介绍与答疑")]),t._v(" "),s("p",[t._v("接下来介绍基本原理，并提出几个容易迷糊的问题。")]),t._v(" "),s("h3",{attrs:{id:"为什么需要两个vscode插件-单独用一个debugger-for-chrome不行么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要两个vscode插件-单独用一个debugger-for-chrome不行么"}},[t._v("#")]),t._v(" 为什么需要两个VScode插件？单独用一个Debugger for Chrome不行么？")]),t._v(" "),s("p",[t._v("我们的目的是为了在自己的电脑上面运行"),s("code",[t._v("MV")]),t._v("项目，说稍微专业一点就是：在自己的电脑上面的本地服务器上启动能够访问本地文件的前端代码。而"),s("code",[t._v("Debugger for Chrome")]),t._v("插件本身不提供"),s("strong",[t._v("建立本地服务器")]),t._v("的功能，所以我们才要额外下载一个"),s("code",[t._v("Live Server")]),t._v("插件来建立并启动本地服务器。")]),t._v(" "),s("h3",{attrs:{id:"为什么要先启动live-server再使用debugger-for-chrome"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要先启动live-server再使用debugger-for-chrome"}},[t._v("#")]),t._v(" 为什么要先启动Live Server再使用Debugger for Chrome？")]),t._v(" "),s("p",[t._v("只有先建立本地服务器才可以使用调试。建立本地服务器的最本质要求是，因为"),s("code",[t._v("MV")]),t._v("项目的本质是一个前端网页游戏，还是一个会调用本地的"),s("code",[t._v(".json")]),t._v("数据库文件的前端网页游戏，所以才需要建立本地服务器。只有本地服务器才可以调用本地文件。")]),t._v(" "),s("h3",{attrs:{id:"为什么要额外设置vscode自动生成的launch-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要额外设置vscode自动生成的launch-json"}},[t._v("#")]),t._v(" 为什么要额外设置VScode自动生成的launch.json？")]),t._v(" "),s("p",[s("code",[t._v("launch.json")]),t._v("的本质是"),s("code",[t._v("VScode")]),t._v("提供给项目的"),s("em",[t._v("调试工具设置清单")]),t._v("。只有先设置好这个清单内容，告诉"),s("code",[t._v("VScode")]),t._v("我需要怎么样的调试工具，我们才可以用"),s("code",[t._v("VScode")]),t._v("启动/调试MV代码。")])])}),[],!1,null,null,null);e.default=a.exports}}]);