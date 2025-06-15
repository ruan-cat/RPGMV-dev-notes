# vite 配置文件

这是配置的重灾区。这里的配置很复杂。

## 导入依赖

导入的依赖大多数是插件

::: details 依赖

<<< ./vite/imp.ts

:::

## 文件路径

要做文件操作，基本上需要得到路径的。

在 esm 环境下，要变通地得到 node 环境下的全局常量。

```ts
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
function pathResolve(dir: string) {
	const resPath = resolve(__dirname, ".", dir);
	return resPath;
}
```

## 创建类型声明文件时用的公共工具

生成特殊规则的文件名称。主要是实现大小写转换、约定导出文件目录、导入模板。

::: details 工具

<<< ./vite/create-type-file.ts

:::

## 构建配置

我们的构建事实上是有 bug 的。不同的包管理器，其依赖的存储格式不同。如果不做处理，打包会生成一个体积巨大的 js 文件，加载的时候用户很容易出现长时间的白屏。

::: details 打包时手动分包的特殊处理

<<< ./vite/build.ts

:::

## 路径别名

对常见的文件夹做路径别名设置，避免导入文件时过于冗长：

::: details 路径别名

<<< ./vite/resolve.ts

:::

与此同时，tsconfig.json 也要同步地做出改动：

在我们项目内，负责客户端的是 tsconfig.app.json 文件。

::: details tsconfig.app.json

<<< ./vite/examlpe-tsconfig.json

:::

## 插件

vite 插件配置是麻烦且复杂的。上限很高，完全取决于你自己对此的投入。

### 类型化路由插件

基于目录结构，生成自动化路由。这可以让我们不再需要写路由了。但是对大家有另外一套全新的文件命名规范，要求很高。

这个插件会颠覆大家写页面的组织形式。但是该工具事实上过于激进，目前没有全面使用。

- https://nuxt.com/docs/guide/directory-structure/pages
- https://uvr.esm.is/guide/file-based-routing.html

::: details VueRouter

<<< ./vite/VueRouter.ts

:::

### 打包体积分析插件

常规的打包体积分析插件。

你现在就可以看我们前端项目的打包体积分析报告：

- https://01s-09oa.ruancat6312.top/visualizer/index.html

::: details visualizer

<<< ./vite/visualizer.ts

:::

### vue 语言插件

vite 不是默认支持 vue 的，要安装插件，vite 才认识 vue 组件，才能提供基础的语言服务。

### 自动生成类型声明文件插件

让你绝大多数的组件变绿，可以让你不用导入组件，直接根据路径名来使用组件。

对大家的目录组织要求很高。而且几乎没多少人能够习惯自动导入的组件。

::: details autoImport

<<< ./vite/autoImport-for-create.ts

:::

### 自动导入插件

常规的自动导入。你用什么，就导入什么。

本插件不会全量地提供类型声明的，你用了什么，他才会自动生成。

::: details AutoImport

<<< ./vite/AutoImport.ts

:::

### 针对 vue 的自动导入插件

常规的插件。不做解释。

::: details Components

<<< ./vite/Components.ts

:::

### 针对 icon 组件的自动导入插件

常规插件。为 icon 提供自动导入。

::: details Icons

<<< ./vite/Icons.ts

:::

### 开发调试插件

爆炸级别的插件。牛逼到爆炸的插件。在你开发时，提供一揽子的开发工具。

比如：

- 路由
- 页面
- 全局存储
- 编译预览
- 页面组件分析
- 直接跳转到 vscode 对应的 vue 组件
- 如果你用 cloudflare D1 数据库，还可以直接看数据库表

::: details vueDevTools

<<< ./vite/vueDevTools.ts

:::

### html 注入插件

依赖注入插件。比如全局控制 html 文件内嵌的内容。

这个插件还有一种用法，就是自定义特定目录下的 index.html。

::: details createHtmlPlugin

<<< ./vite/createHtmlPlugin.ts

:::
