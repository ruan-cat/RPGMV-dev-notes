(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{574:function(t,e,v){"use strict";v.r(e);var a=v(6),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"为什么不能直接通过点击index-html文件的方式来启动mv项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么不能直接通过点击index-html文件的方式来启动mv项目"}},[t._v("#")]),t._v(" 为什么不能直接通过点击index.html文件的方式来启动mv项目？")]),t._v(" "),v("p",[t._v("因为浏览器打开"),v("code",[t._v("index.html")]),t._v("文件时，使用的是"),v("strong",[t._v("file协议")]),t._v("，而不是"),v("code",[t._v("ajax")]),t._v("所支持的协议，而且mv项目本身一定会导入"),v("code",[t._v(".json")]),t._v("文件，这就共同触发了"),v("strong",[t._v("跨域浏览")]),t._v("问题。当前浏览器的"),v("strong",[t._v("file协议")]),t._v("无法访问本地"),v("code",[t._v(".json")]),t._v("数据。")]),t._v(" "),v("p",[t._v("解决这种问题的方式，这里笔者介绍两个。")]),t._v(" "),v("h2",{attrs:{id:"使用ajax所支持的协议来打开html文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用ajax所支持的协议来打开html文件"}},[t._v("#")]),t._v(" 使用ajax所支持的协议来打开html文件")]),t._v(" "),v("p",[t._v("指的是，可以使用http的协议来访问该文件。具体做法是：搭建一个本地的服务器，进而访问文件。原理是如此的，具体实现操作可以参考"),v("RouterLink",{attrs:{to:"/拓展技术/VScode调试mv.html"}},[t._v("VScode调试mv")]),t._v("。")],1),t._v(" "),v("h2",{attrs:{id:"设置浏览器-使其支持file协议的浏览"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置浏览器-使其支持file协议的浏览"}},[t._v("#")]),t._v(" 设置浏览器，使其支持file协议的浏览")]),t._v(" "),v("p",[t._v("关于此方案，可以参考"),v("RouterLink",{attrs:{to:"/拓展技术/让Chrome浏览器支持本地访问数据.html"}},[t._v("让Chrome浏览器支持本地访问数据")]),t._v("。")],1)])}),[],!1,null,null,null);e.default=r.exports}}]);