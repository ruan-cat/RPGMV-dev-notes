---
dir:
  collapsible: false
  link: true
  order: 30
---

# map 函数演示

## 需求

```ts
// 封装数据
const medicalData = [
	{ labl_name_chn: "医疗机构代码", category: "医疗机构", list_name_chn: "基本信息" },
	{ labl_name_chn: "统一社会信用代码", category: "医疗机构", list_name_chn: "基本信息" },
	{ labl_name_chn: "医疗机构名称", category: "医疗机构", list_name_chn: "基本信息" },
	{ labl_name_chn: "医疗机构简称", category: "医疗机构", list_name_chn: "基本信息" },
	{ labl_name_chn: "主要负责人", category: "医疗机构", list_name_chn: "基本信息" },
	// ... 其他数据项
	{ labl_name_chn: "信用等级名称", category: "医疗机构", list_name_chn: "基本信息" },
	{ labl_name_chn: "上级医疗机构代码", category: "医疗机构", list_name_chn: "基本信息" },
	{ labl_name_chn: "机构性质", category: "医疗机构", list_name_chn: "基本信息" },
];
```

```ts
const ds = [
	{
		obj_id: "1",
		code: null,
		list_id: "11111111111111111111",
		poolarea_no: "370100",
		labl_id: "11111111111111111110",
		labl_name: "MedicalIinstitutionCode",
		labl_name_chn: "医疗机构代码",
		col_name: "MedicalIinstitutionCode",
		list_name_chn: "基本信息",
		updt_frqu: null,
		data_ymd: null,
		datatype: "String",
		act_stas: "1",
		data_fmt: null,
	},
];
```

将 medicalData 的 labl_name_chn 和 list_name_chn 属性循环放进 ds 对应的属性中。用数组的 map 方法

## 代码

::: details

@[code ts](./map.ts)

:::
