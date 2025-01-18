# 表单校验常用的类型工具

## 尝试编纂 element-plus `<el-form>` 组件的 rules 表单规则泛型工具类型

目前这段代码的 LoginFormFiled4rules 类型对定义的 form 表单有着强耦合的关系。需要想办法解耦。

```ts
import { reactive } from "vue";
import type { FormInstance, FormItemRule } from "element-plus";
import type { Arrayable } from "element-plus/es/utils";

const form = reactive({
	user: "",
	pwd: "",
});

/** 登陆表单 定义element-plus form组件 的 rules校验规则对象所需的泛型工具类 */
type LoginFormFiled4rules = Partial<Record<keyof typeof form, Arrayable<FormItemRule>>>;

/** 表单校验配置对象 */
const rules = reactive<LoginFormFiled4rules>({
	user: {},
});
```
