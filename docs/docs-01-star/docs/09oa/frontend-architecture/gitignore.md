# git 提交忽略配置

凡是自动生成出来的东西，都应该被忽略。

诸如：

- 包管理器
- 特定 vite 插件
- vercel 部署工具
- 编译缓存
- 打包产物

这里用的是 glob 语法。

```bash
# 不提交仓库中的依赖包
node_modules

# 不提供自动生成的类型文件
auto-imports.d.ts
typed-router.d.ts

# 满足特定命名规则的文件，认定为自动生成的类型文件，不予提交
components*.d.ts
components.d.ts
components-instance.d.ts


# 忽略自动生成的依赖锁文件 不提供包管理器的依赖锁文件
pnpm-lock.yaml
package-lock.json

# 忽略自动生成vercel部署配置文件
.vercel
vercel.null.def.json

# 忽略生成的构建缓存
.vite

# 忽略vite的中间构建文件 防止其他人误提交此文件
vite.config.ts.*.mjs
```

## 匹配

用 glob 语法完成特定文件的匹配，匹配成功了就不予提交。

很不常用，只有你经常性地生成文件时，你才会考虑该语法。

```bash
vite.config.ts.*.mjs
components*.d.ts
```
