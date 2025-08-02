# 基于 tsconfig.json 批量设置 vite 项目的 alias 别名配置

vite 别名配置和 tsconfig.json 别名重复了，有没有办法让 vite 自己去识别 tsconfig.json 的配置，自己生成别名呢？

使用 [`@ruan-cat/vite-plugin-ts-alias`](https://github.com/ruan-cat/monorepo/tree/dev/vite-plugins/vite-plugin-ts-alias) 插件即可。

- https://github.com/ruan-cat/monorepo/tree/dev/vite-plugins/vite-plugin-ts-alias
- https://stackoverflow.com/questions/77249074/how-do-i-use-typescript-path-aliases-in-vite

## 具体用法

::: details

<<< ./vite.config-alias.ts#snipaste{ts twoslash}

:::

## 避雷 vite-tsconfig-paths

`vite-tsconfig-paths` ，就是个鸡巴。配置了莫名其妙报错。反正我是不想配置了。那么简单的一个功能，总是报错。

- https://github.com/aleclarson/vite-tsconfig-paths

## 避雷 vite-plugin-ts-alias

[这个插件](https://github.com/Codpoe/vite-plugin-ts-alias)内部没有对缺失的变量做任何提示，而是直接退出函数，导致调试困难。故不推荐使用。

为了处理这个插件，专门自己独立封装一遍该包。
