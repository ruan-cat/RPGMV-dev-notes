<script setup lang="ts">

/**
 * 在vuepress内，不能使用相对路径实现导入的 要用别名
 *  
 * - https://theme-hope.vuejs.press/zh/guide/component/sfc.html#导入文件
 */
// import DemoTemplatePromiseAndElDialog from "./demo-TemplatePromise-and-ElDialog.vue";
// import DemoTemplatePromiseAndElDialog from "@docs/vueuse/TemplatePromise-and-ElDialog/demo-TemplatePromise-and-ElDialog.vue";

</script>

# createTemplatePromise 和 ELDialog 组件的使用

createTemplatePromise，用来创建 promise 风格的弹框组件。打开弹框可以用调用函数的方式实现。

很自然而然的想到，如何跟 element-plus 的弹框组件结合使用呢？现给出一个使用案例：

## 可交互案例

<!-- 以vuepress全局注册方式使用的vue组件 -->
<demo-TemplatePromise-and-ElDialog />

<!-- 以局部导入的方式注册的vue组件 -->

<!-- <DemoTemplatePromiseAndElDialog></DemoTemplatePromiseAndElDialog> -->

## 案例源码

::: details 源码

@[code vue](./demo-TemplatePromise-and-ElDialog.vue)

:::

## 注意事项

使用 createTemplatePromise 时，我们没有很好的方式来使用弹框的生命周期了。比如我想在弹框打开和关闭的生命周期内，做点什么。比如常见的清空表单。这个时候就出问题了。

变通做法如下；

- 弹框`打开`的生命周期函数

  > TemplatePromise.start 函数

- 弹框`关闭`的生命周期函数

  > 弹框组件的 @close 事件

其中，我们额外维护弹框组件了 model-value 变量，其目的是为了使用 @close 事件，统一捕获弹框的关闭的事件。在弹框组件的源码内，更新 model-value 变量就能有效触发 @close 事件。

## 参考资料

- https://juejin.cn/post/7293173815181738022
