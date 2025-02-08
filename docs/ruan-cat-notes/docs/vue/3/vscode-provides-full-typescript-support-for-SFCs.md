# vscode 为 typescript 提供完整的单文件组件类型支持

在将 vite+js 的项目，迁移改造成 vite+ts 的项目架构时，出现了很多问题。

接下来要自己实验，完成这样的基础配置。

## 不会报错

vscode 不会对 vue 文件报错。

## 能给路径

vscode 能识别出 vue 文件的路径。如下图所示：

![2024-06-01-13-21-47](https://gh-img-store.ruan-cat.com/img/2024-06-01-13-21-47.png)

### 没设置好之前

这里故意给纯 js 的 vue 组件，增加强类型检查，这里会对 vue 组件报错。

![2024-06-01-19-18-22](https://gh-img-store.ruan-cat.com/img/2024-06-01-19-18-22.png)

```bash
无法找到模块“@/components/table-list-use/table-text.vue”的声明文件。“e:/code/rzn/java-pilot-base/01-star-08mes/zero-one-08mes/mes-frontend/src/components/table-list-use/table-text.vue”隐式拥有 "any" 类型。
```

这是很典型的 vscode 不认识 vue，提示出 any 类型。

### 在其他测试项目的测试结果

我先弄了两个 vite 项目，一个是 vite+js，另一个是 vite+ts 项目。在不考虑额外的 `*.d.ts` 文件的配置下，以下的两个配置就能保证 vscode 不会对类型报错，能补全完整的路径。

1. 将引用对方的组件，改造成 ts

这个在 ts 和 js 混用的项目内，改造成本太大了。不推荐该方案。

2. 设置 tsconfig.json 的 allowJs

```json
{
	"allowJs": true
}
```

这样，ts 组件引用对方的 js 组件时，就不会出错了。

### 增加设置后

能有效的提供路径补全。不报错。

![2024-06-01-19-25-54](https://gh-img-store.ruan-cat.com/img/2024-06-01-19-25-54.png)

在移除掉刻意的类型检查注解后，关闭掉已经打开的文件，vscode 仍旧是可以正常的提供路径补全，且不报错。

![2024-06-01-19-26-44](https://gh-img-store.ruan-cat.com/img/2024-06-01-19-26-44.png)

## 能给类型

vscode 在鼠标 hover 导入的组件时，提供类型声明。
