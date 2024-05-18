# @antfu/eslint-config 的使用

目前（2024 年 5 月 19 日）考虑用@antfu/eslint-config 实现对 eslint 的一揽子配置。

## 参考资料

- [antfu：为什么我不使用 Prettier](https://antfu.me/posts/why-not-prettier-zh)
- https://github.com/antfu/eslint-config
- [前端规范(一)之 ESlint 以及@antfu/eslint-config](https://blog.csdn.net/weixin_42424283/article/details/128806611)
- [Nuxt 深入浅出 · 配置 antfu.eslint-config](https://juejin.cn/post/7338074027281104936)

## 依赖包覆盖

未来我应该要写包的依赖配置，比如我导入了很多 eslint 的插件，但是不清楚该怎么去覆盖其提供的默认配置。

可能的包覆盖配置教程：

- https://github.com/antfu/eslint-config/blob/main/README.md#rules-overrides
