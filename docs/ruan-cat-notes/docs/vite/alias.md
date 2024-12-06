# 基于 tsconfig.json 批量设置 vite 项目的 alias 别名配置

vite 别名配置和 tsconfig.json 别名重复了，有没有办法让 vite 自己去识别 tsconfig.json 的配置，自己生成别名呢？

使用 `vite-plugin-ts-alias` 插件即可。

- https://github.com/Codpoe/vite-plugin-ts-alias
- https://stackoverflow.com/questions/77249074/how-do-i-use-typescript-path-aliases-in-vite

## 具体用法

@[code ts](./alias/vite.config-alias.ts)

## 避雷

`vite-tsconfig-paths` ，就是个鸡巴。配置了莫名其妙报错。反正我是不想配置了。那么简单的一个功能，总是报错。

- https://github.com/aleclarson/vite-tsconfig-paths
