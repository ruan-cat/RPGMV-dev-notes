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
