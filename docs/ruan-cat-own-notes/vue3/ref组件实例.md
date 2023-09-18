# ref 组件实例

## 获取并标注类型

- https://juejin.cn/post/6978035248487464974

在 vue3 + typescript 的项目中，为了获取到组件实例并增加类型，可以使用这样的写法以 element-plus 为例：

```ts
import { ElTable } from "element-plus";
const tableRef = ref<null | InstanceType<typeof ElTable>>(null);
```
