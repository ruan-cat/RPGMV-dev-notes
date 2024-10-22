# 扁平化配置

eslint 的配置愈发复杂，最近推出了扁平化配置。

- https://eslint.org/blog/2023/10/flat-config-rollout-plans/#main
- [ESLint 扁平化配置使用指南](https://juejin.cn/post/7282606413841580091)

## 从 .eslintrc 到 eslint.config.js

### v10 版本会弃用旧版本的配置文件

大势所趋，以后到了高版本的 eslint 后，传统的配置文件就要被弃用了。

这个破坏性变更，很容易让之前的配置无法运行。

![2024-05-16-20-23-30](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-05-16-20-23-30.png)

- https://eslint.org/blog/2023/10/flat-config-rollout-plans/#main

### 参考资料

迁移参考资料：

- https://eslint.org/docs/latest/use/configure/migration-guide
- https://github.com/antfu/eslint-config/blob/main/README.md#rules-overrides
