---
dir:
  collapsible: false
  link: true
  order: 50
---

<script setup>
import C from "@docs/demo/005-vueuse-scroll-animation/vueuse-scroll-animation.vue";
</script>

# 改写滚动动画写法

尝试用 vueuse 改造滚动动画，力求代码编写优雅简洁。

<C />

## 改造思路

用数据驱动变化。用响应式数据去驱动样式的动态添加。

1. 注意到 vueuse 的 useElementBounding 可以实现响应式地动态计算 dom 元素的值，在鼠标滚动时，就能够动态使用 Element.getBoundingClientRect() 函数动态地计算元素的 top 值。改造将围绕着该响应式值来完成。

   > - [useElementBounding](https://vueuse.org/core/useElementBounding/)
   > - [Element.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)

2. 先用 useTemplateRef 获取到全部的 dom 元素。先获取 dom 元素，再初始化全部的响应式数据。

   > - [useTemplateRef](https://cn.vuejs.org/api/composition-api-helpers.html#usetemplateref)

3. 遍历一次元素，唯一执行一次 useElementBounding ，生成出响应式变量。
4. 最后到 dom 元素内，根据计算结果，动态添加 class。

## 改造优点

1. 减少了手动监听滚动事件，和手动维护样式动态添加的心智负担。
2. 思维模式仅考虑单纯的数据变化，而不是监听滚动事件。

## 源码

::: details

@[code vue](./vueuse-scroll-animation.vue)

:::
