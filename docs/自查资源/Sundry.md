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