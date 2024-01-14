# temp 处理错误

## 复述错误

1. 收到邮件

   ![2024-01-14-20-23-37](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-14-20-23-37.png)

2. cloudflare 称未激活

   ![2024-01-14-20-24-05](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-14-20-24-05.png)

3. 在域名注册商 godaddy 中，我配多配置了一个 nameserver，现在 cloudflare 就发邮件说我这个有问题了。

   ![2024-01-14-20-24-23](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-14-20-24-23.png)

我该怎么做？

## 需求复述

1. 我在 vercel 内部署了越来越多的项目，想使用 vercel 提供的通配符域实现动态子域名设置。

   ![2024-01-14-20-25-28](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-14-20-25-28.png)

2. 这篇文章要求我，使用【通配符域】需要设置 nameserver

   ![2024-01-14-20-25-47](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-14-20-25-47.png)

3. 按照要求，我在域名注册商 godaddy 内增加了 nameserver

   ![2024-01-14-20-26-33](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-14-20-26-33.png)

## 由 cdd 给出的方案

不用填这个的，你在 cloudflare 用 CNAME 就可以了，这样你的 ruan-cat.com 即可以拿来 fanqiang，也可以用在 vercel 上通过三级域名访问不同项目

举例，我的域名：fq.bhcdd.xyz，是用来 fanqiang 的：

![2024-01-14-20-29-20](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-14-20-29-20.png)

域名：test.bhcdd.xyz，是我在 vercel 上的一个项目

这里把 vercel 给你分配的默认域名改掉

![2024-01-14-20-29-40](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-14-20-29-40.jpeg)

我就是在这里改的：

![2024-01-14-20-29-55](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-14-20-29-55.jpeg)

改了之后，记得 cloudflare 要加上 vercel 的 CNAME 记录（不是 A 记录，A 记录内容是 IPV4 地址，CNAME 记录内容是域名）:

![2024-01-14-20-30-17](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-14-20-30-17.png)

然后等几分钟，vercel 会把你天的三级域名，自动生成 HTTPS 证书，就可以访问了

我再重新创建一个，这是 vercel 给我的项目默认分配的域名：

![2024-01-14-20-30-40](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-14-20-30-40.jpeg)

![2024-01-14-20-30-53](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-14-20-30-53.jpeg)

进去填写，改成你要自定义的三级域名

![2024-01-14-20-31-11](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-14-20-31-11.png)

上面箭头指示，它给你两个方法，要么让你在域名解析服务器那里加上 CNAME，要么把你的域名解析权，交给 vercel

因为你的域名还需要给 cloudflare fanqiang，所以我们选第一个

现在我加上去了，后面那个 DNS 代理你开不开都行

![2024-01-14-20-31-53](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-14-20-31-53.png)

等几分钟，它显示这样就可以了，https://test2.bhcdd.xyz/ 就能访问了

![2024-01-14-20-32-06](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2024-01-14-20-32-06.jpeg)
