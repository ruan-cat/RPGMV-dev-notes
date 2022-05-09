(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{638:function(t,e,s){"use strict";s.r(e);var a=s(15),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"具体解释与实现方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具体解释与实现方式"}},[t._v("#")]),t._v(" 具体解释与实现方式")]),t._v(" "),s("p",[t._v("经典的"),s("code",[t._v("ajax")]),t._v("所支持的协议不包括"),s("code",[t._v("file")]),t._v("协议，也就是本地访问文件。为了让"),s("code",[t._v("Chrome")]),t._v("可以直接调用本地的数据，可以按照以下的设置实现。")]),t._v(" "),s("p",[t._v("找到装在电脑内的"),s("code",[t._v("Google Chrome")]),t._v("，并在其"),s("strong",[t._v("属性")]),t._v("状态栏内的"),s("strong",[t._v("快捷方式->目标")]),t._v("栏中添加代码："),s("code",[t._v("--allow-file-access-from-files")]),t._v("。注意在填写时要注意前面要加上空格。")]),t._v(" "),s("p",[t._v("如果控制台报出以下的错误，那么就可以判断是跨域浏览的问题了。")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Access to XMLHttpRequest at ‘文件地址’ from origin "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'null'")]),t._v(" has been blocked by "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CORS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("policy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \nCross origin requests are only supported "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" protocol schemes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chrome"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("extension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/weixin_41697143/article/details/80784701",target:"_blank",rel:"noopener noreferrer"}},[t._v("点此阅读关于"),s("code",[t._v("--allow-file-access-from-files")]),t._v("的文章。"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"为什么不能直接通过点击index-html文件的方式来启动mv项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么不能直接通过点击index-html文件的方式来启动mv项目"}},[t._v("#")]),t._v(" 为什么不能直接通过点击index.html文件的方式来启动mv项目？")]),t._v(" "),s("p",[t._v("因为浏览器打开"),s("code",[t._v("index.html")]),t._v("文件时，使用的是"),s("strong",[t._v("file协议")]),t._v("，而不是"),s("code",[t._v("ajax")]),t._v("所支持的协议，而且mv项目本身一定会导入"),s("code",[t._v(".json")]),t._v("文件，这就共同触发了"),s("strong",[t._v("跨域浏览")]),t._v("问题。当前浏览器的"),s("strong",[t._v("file协议")]),t._v("无法访问本地"),s("code",[t._v(".json")]),t._v("数据。")]),t._v(" "),s("p",[t._v("解决这种问题的方式，这里笔者介绍两个。")]),t._v(" "),s("h3",{attrs:{id:"使用ajax所支持的协议来打开html文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用ajax所支持的协议来打开html文件"}},[t._v("#")]),t._v(" 使用ajax所支持的协议来打开html文件")]),t._v(" "),s("p",[t._v("指的是，可以使用http的协议来访问该文件。具体做法是：搭建一个本地的服务器，进而访问文件。原理是如此的，具体实现操作可以参考"),s("RouterLink",{attrs:{to:"/拓展技术/VScode调试mv.html"}},[t._v("VScode调试mv")]),t._v("。")],1),t._v(" "),s("h3",{attrs:{id:"设置浏览器-使其支持file协议的浏览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置浏览器-使其支持file协议的浏览"}},[t._v("#")]),t._v(" 设置浏览器，使其支持file协议的浏览")]),t._v(" "),s("p",[t._v("关于此方案，可以参考"),s("RouterLink",{attrs:{to:"/拓展技术/让Chrome浏览器支持本地访问数据.html"}},[t._v("让Chrome浏览器支持本地访问数据")]),t._v("。")],1)])}),[],!1,null,null,null);e.default=r.exports}}]);