---
dir:
  collapsible: false
  link: true
  order: 70
---

<script setup>
import C from "@docs/50projects50days-vue3/07-split-landing-page/split-landing-page.vue";
</script>

# 拆分登录页

## 自写重构 demo

<demo vue="./split-landing-page.vue" />
<!-- <ClientOnly>
	<C />
</ClientOnly> -->

## 文章教程

- https://juejin.cn/post/7263009476058513464#heading-6

## 改写思路

- https://vueuse.org/core/useMouseInElement/

用封装好的鼠标移入移出工具来完成。

## 源码

::: details

@[code vue](./split-landing-page.vue)

:::
