# 曾经询问 chatGPT 的问题

这里将保存曾经询问过 chatGPT 的问题，未来希望从中学习到知识。能够独立解决问题。

## ts 的 getter 类型写法？

一个 typescript 领域的问题，如以下类型定义：

```ts
/** 调查结果内容 */
export type SurveyResultsContent = {
	longitude: number;
	latitude: number;
	// 该如何编写？
	// position: [longitude, latitude];
};
```

我希望类型 SurveyResultsContent 的 position 属性是一个元组，包含有 longitude 和 latitude 属性。请问在 typescript 类型系统该怎么写？我希望实现 position 属性能够自动组装，生成该格式的元组。

## vue3 的 PropType 类型？

在使用 typescript 的 vue3 项目内，针对以下代码段：

```ts
import { defineProps } from "vue";
import type { PropType } from "vue";
const props = defineProps({
	loading: Boolean,
	width: {
		type: String as PropType<string>,
		default: "100%",
	},
	height: {
		type: String as PropType<string>,
		default: "300px",
	},
});
```

请问定义 props 时，为什么要额外使用 PropType 来限定类型？PropType 类型在 vue3 内主要是用来做什么的？

## 类型导入合并写法？

在 typescript 语境下，以下两行代码段可以合并么？如果可以合并，该怎么写？
import { defineProps } from "vue";
import type { PropType } from "vue";

## img 的 src 的类型

在使用 typescript 的 vue3 项目内，如下代码，`<img>`标签使用了 item 对象的 img 属性，请问 img 属性在 typescript 类型系统中，应该被赋予怎样的类型？

```html
<img :src="item.img" alt="" />
```

## ts 类型拓展

在 typescript 语境下，我已知有 ReallyExist 类型，其定义如下：

```ts
type ReallyExist = {
	enrollEndTime: string;
	enrollStartTime: string;
	enrollSurplusNum: number;
	isEnroll: number;
};
```

现在我想生成一个新的类型，名为 LifeLongLearnPlan 类型，该类型包含有 ReallyExist 类型且具有更多未知的属性。请问该怎么编写 LifeLongLearnPlan 类型？

要求至少给出两种写法。其中一种要使用 typescript 的泛型工具。

## 高德地图

我在使用 @amap/amap-jsapi-types 类型库时，以下代码报错了：

```js
var polygon = new AMap.Polygon({
	pathL: pathArray,
	strokeWeight: 1,
	fillColor: "#021a33",
	fillOpacity: 0.85,
});
```

称 AMap.Polygon 构造函数“应有 0 个参数，但获得 1 个。可是我看的很多文章都说可以写成以上形式。请问我应该如何拓展 @amap/amap-jsapi-types 类型库的 AMap.Polygon 构造函数？

## 生成指定规格的数值类型字符串

请编写一段 js 代码，用于实现以下功能：

编写一个函数，按照规律生成指定长度的数字内容字符串，返回一个字符串格式的数组。

测试用例 1：
输入 strLen 长度 3，输入 start 开始值 1，输入 end 结尾值 66，其输出的数组结果应为：
['001','002','003', ... ,'065','066' ]

测试用例 2：
输入 strLen 长度 2，输入 start 开始值 3，输入 end 结尾值 9，其输出的数组结果应为：
['03','04', ... ,'07','08','09' ]

回答时，请按照以下要求作答：
1 请至少给出两种答案。其中一种使用传统的 for 循环完成。另一种使用 lodash 提供的 api 完成。
2 请提供参考资料。

## 前端文件夹划分规范

请问在前端开发中，前端文件夹划分规范大概是怎么样的？在 vue3 的架构中，utils，tools 和 hooks 文件夹分别应该对应怎么样的

## 格栅布局

一个 css3 和 html5 领域内的问题。我现在使用了 grid 格栅布局。dom 结构例子如下：

```html
<section class="root">
	<section class="1"></section>
	<section class="2"></section>
	<section class="3"></section>
</section>
```

这些元素的高度都是随着界面的大小变化的。现在假设`class="2"`的元素里面有一个表格，其表格高度是不确定的。这个表格撑开了父元素。

现在我不希望这个父元素的高度被撑开，希望`class="2"`选择器的`<section>`标签高度是被格栅布局设定的高度所确定，请问我应该怎么处理？请给出仅且使用 css 选择器的方案，不涉及到任何 JavaScript 的方案。

## vue2 事件监听

请问在 vue2 的场景下，在那个生命周期钩子函数内做事件监听？又应该在那个生命周期钩子函数内取消事件监听？请以浏览器事件 beforeprint 为例子，写一段代码示例。语言限定为 js，vue 版本限定为 vue2 版本。

## 编写类型声明

如以下例子所示：

```js
const toolbarOrder = ["cancelThisTask", "fuck"];

/** 自定义的按钮 */
const customBars = {
	cancelThisTask: {
		name: "cancelThisTask",
		visible: false,
		fun: () => {},
	},
	fuck: {
		name: "fuck",
		visible: true,
		fun: () => {},
	},
};
```

请为 toolbarOrder 和 customBars 变量编写 typescript 的类型声明文件。

### 变更 1

现在我的要求有变更，变更如下：

- toolbarOrder 是一个动态的字符串数组。其填写的字符串内容和数目都是不确定的。

- customBars 仍旧是一个对象，其键是 toolbarOrder 数组内出现的字符串，其 name 属性的取值也是 toolbarOrder 数组的数组元素

- name 属性取值必须和键名相同。如上例子所示，当键名为 fuck 时，其 name 属性取值也是 fuck。

作答要求如下：

- 至少使用 typescript 的泛型语法。
- 必须提供参考资料链接。

请根据此变更以及作答要求，结合上一个提问的例子，重新作答。

## 更加优雅的接口请求 loading 变量的处理？怎么更好的获取到接口请求时请求状态？

在 JavaScript 语境下，有以下的异步数据请求接口。isloading 变量用于控制页面的加载等待交互效果。怎么更好的获取到接口请求时请求状态？以下代码还可以怎么优化？

```js
this.isloading = true;
await $post(wfUrls.getTaskInfo, { taskId: taskId })
	.then(() => {})
	.catch((err) => {})
	.finally(() => {
		this.isloading = false;
	});
```

## 设置 github 的代理？

## typescript 类型拓展？

<!-- 尚未询问；-->

在 vue3 + typescript 场景下的问题：

现在有如下的 typescript 类型:

```ts
type SurveyResults = {
	/** 调查对象都具有的id值 */
	id: string;

	/** 分类项标题 */
	title: string;

	/** 分类项统计总数 */
	total: number;

	/** 子项总数 */
	childItemTotal?: number;

	/** 子项数组 */
	childList?: Array<SurveyResults>;
};
```

我现在使用 element-plus 组件库的`<el-collapse-item>`组件。需要在 vue 组件内定义新的，临时使用的类型 CollapseItemRender。CollapseItemRender 类型如何在 SurveyResults 类型的基础上，合并增加`<el-collapse-item>`组件的 props 类型？

## typescript 同内容别名字段设置 类型拓展？

typescript 领域的问题：

已知 SurveyResultsContent 类型，如下：

```ts
type SurveyResultsContent = {
	/** 经度 */
	longitude: number;

	/** 纬度 */
	latitude: number;

	/** 地址 显示名称 */
	address: string;

	/** 场所名称 如学校具体名称：华南理工大学；饭店名称； */
	name?: string;
};
```

现在想新建一个 InfoRender 类型。其中这个新类型用`交叉类型`语法拓展了 SurveyResultsContent 类型的字段。新类型保留了 SurveyResultsContent 类型的全部的字段，新增加一个 title 属性，title 属性仅仅是 SurveyResultsContent 的 name 属性的别名。请问该怎么编写此要求下的 InfoRender 类型？

## 嵌套结构的语法糖？

如下代码：

```ts
export type Tree = {
	data: unknown;
	hasChild: boolean;
	childList?: Tree[];
};
```

假设我业务变更，出现了这样的类型：

```ts
export type TreeWithId = {
	data: {
		id: string;
	};
	hasChild: boolean;
	childList?: TreeWithId[];
};
```

请问我应该怎么优化这样的类型写法？请提供给我一个类型编写范式，让我参考。你的回答需注意以下事项：

- 重新优化 Tree 类型，用泛型定义内部嵌套的树形结构。
- 未来增加的额外字段均被添加到 data 内，请设计好合适的 data 字段类型。
- 设计的 Tree 类型仅且包含三个字段。即 data、hasChild、childList。
- 至少提供 2 种代码重构的例子。
- 在回答的最后均提供涉及到的语法，技术等内容的参考链接。

## 自动合并多个类型的泛型？并将所有合并泛型的内容均设置成可选属性。

一个 typescript 领域的问题：

请编写一个泛型工具，实现多个类型的合并。并且合并后可以实现拓展类型的全部字段均为可选字段。

请按照以下要求作答：

- 该泛型名为 Merge，提供多个参数。第一个参数是合并的基础类型。泛型参数为 TargetType。
- 泛型 Merge 的第二个或者是更多的参数可以任意填写。这些参数请用展开语法编写形参。名为 SourcesType
- SourcesType 参数应为一个数组。其类型约束为 Record 组成的数组。
- TargetType 参数也应当被类型约束为 Record。
- 请使用 Partial 泛型来实现可选字段的需求。
- 除了 TargetType 类型的字段以外，其他全部的 SourcesType 数组内的全部涉及的字段，均为可选的字段。
- 如果回答包含了一个或多个工具类型，请额外做出解释。
- 请提供至少 2 种的实现方式。
- 在回答的最后均提供涉及到的语法，技术等内容的参考链接。

## 指定一个类型的特定几个属性为可选项

如以下代码：

```ts
type TreeNode<T extends Record<string, unknown> = {}> = {
	data: T;
	hasChild: boolean;
	childNum: number;
	childList?: TreeNode<T>[];
};
```

我希望生成一个名为 TreeNodeSimple 的类型，这个类型是 TreeNode 的简化类型。请帮我写一个名为 PartialOptionalTool 泛型类型。其使用的格式如下：

```ts
const a: PartialOptionalTool<TargetType, "a" | "b"> = {};
```

- PartialOptionalTool 泛型的第一个形参是被约束成`Record<string, unknown>`的键值对对象，取名应为 TargetType 。
- PartialOptionalTool 泛型的第二个形参是字符串组成的联合类型，即 TargetType 类型的键。

测试用例如下：

```ts
type TreeNodeSimple = PartialOptionalTool<TreeNode, "hasChild" | "childNum">;
// 通过测试用例
const treeNodeSimple: TreeNodeSimple<{ title: sting }> = {
	data: {
		title: "某标题",
	},
	childList: [
		{
			data: {
				title: "子项数据的小标题",
			},
		},
		{
			data: {
				title: "另一个子项数据的小标题",
			},
			childList: [],
		},
	],
};
```

你编写的 PartialOptionalTool 类型至少应该通过以上的测试用例。

## 指定一个类型的特定几个属性为可选项 -2

已知 TreeNode 类型，如下：

```ts
type TreeNode<T extends Record<string, unknown> = {}> = {
	/** 当前节点存储的业务数据 */
	data: T;

	hasChild: boolean;

	/** 子项数目 如果没有子数组，就应该默认设置为0  */
	childNum: number;
	childList?: TreeNode<T>[];
};
```

其经过了一个 PartialOptionalTool 泛型的加工，生成了名为 TreeNodeSimple 的泛型，如下：

```ts
type TreeNodeSimple<T extends Record<string, unknown> = {}> = {
	data: T;
	hasChild?: boolean;
	childNum?: number;
	childList?: TreeNodeSimple<T>[];
};
```

请为我编写 PartialOptionalTool 泛型。

## 含有泛型的 interface 类型怎么应用在 function 上面？

如下，这是一个含有泛型的 interface 接口：

```ts
interface RecursionFun4TreeNodeSimple<T> {
	(list: TreeNodeSimple<T>, cb: (item: T) => void): void;
}
```

这是目标函数 recursion：

```ts
/** 递归函数 */
function recursion() {}
```

我想给 recursion 函数应用上 RecursionFun4TreeNodeSimple 接口，作为类型。请问该怎么写？

## 含有泛型的 interface 类型怎么应用在 function 上面？ -2

如下，这是一个含有泛型的 interface 接口：

```ts
interface RecursionFun4TreeNodeSimple<T> {
	(list: TreeNodeSimple<T>[], cb: (item: T) => void): void;
```

我想定义一个名为 recursion 的函数，这个函数直接使用该 RecursionFun4TreeNodeSimple 接口，请问该怎么写？

## 从指定目录内获取到全部的类型

一个 typescript 领域的问题：

文件夹组织结构如下

```txt
D:.
│  bi.ts
│  bus.ts
│  mock-api.ts
│  surveyItemConfStore.ts
│  surveyItemFieldLabelConfStore.ts
│  surveyResultsContentStore.ts
│
└─entity
        hospital.ts
        school.ts
```

在文件 hospital.ts 内存在这样的类型：

```ts
/** 医院 实体类 */
export type Hospital = {
	/** 机构类型(中类) */
	organizationTypeMedium: string;
};
```

在文件 school.ts 内存在这样的类型：

```ts
/** 学校 实体类
 * @description
 * 这是对外声明的使用的实体类 相当于实际能用的数据库类型定义 定义了完整字段类型
 */
export type School = {
	/** 学校机构标识码 */
	schoolOrganizationCode: string | number;

	/** 学校(机构)办学类型(大类) */
	organizationTypeBig: string;

	/** 学校(机构)办学类型(中类) */
	organizationTypeMedium: string;
};
```

在 surveyItemFieldLabelConfStore.ts 存在这样的一个类型：

```ts
/** 字段显示 配置类型 */
type FieldConf = {
	/** 当前行对应的字段名
	 * @description
	 * 必填项 必须要声明清楚该字段到底对应那个那个变量名
	 */
	fieldName: string;
};
```

我希望 FieldConf 类型的 fieldName 字段所对应的类型，是 entity 目录内全部实体类类型的字段。

我需要在文件 surveyItemFieldLabelConfStore.ts 内编写代码，实现对 entity 目录内全部导出类型的收集。我要收集到全部的导出的类型，并且将这些类型的字段全部整合到一个类型，并赋值给 FieldConf 的 fieldName 字段。

请编写一个类型 AllEntityField，我将这样使用：

```ts
type FieldConf = {
	fieldName: AllEntityField;
};
```

fieldName 期望得到的类型提示应该至少包含这样的联合类型：

```ts
type AllEntityField =
	| "schoolOrganizationCode"
	| "organizationTypeBig"
	| "organizationTypeMedium"
	| "其他的未指出的类型";
// 这里应该包含更多的字段名
```

作答要求：

- 提供参考链接
- 提供至少两种方案

###

不行。你的方案并没有实现搜索遍历 ./entity 目录内的全部 ts 文件，并收集全部导出的类型。

请使用 node 的 api 或者是其他的开源库，来实现遍历整个文件夹内的全部.ts 文件。

以下的代码不能实现我所期望的功能。请重新编写。

```ts
import * as entities from "./entity";
```

###

不行。你的方案虽然遍历了文件夹，但是 entities 是什么，却没有说明清楚。请在上两个答案的基础上，定义清楚 entities 的内容。完善好代码。

## typescript 判断变量类型 -1

存在 DefCommonFieldConf_withBuziConf 类型：

```ts
/** 含有更多业务配置字段的 默认字段配置类型
 * @description
 * 为了说明常用默认字段在具体业务内的数据，比如说声明常用字段在短详情列表内`是否显示`，`排序顺序`等信息，故提供此类型。
 */
type DefCommonFieldConf_withBuziConf = Omit<
	DefCommonFieldConf,
	"labelName" | "surveyItemName"
> & {
	/** 默认字段都已经配置过标签名了，这里不再要求必填标签名 */
	labelName?: string;

	/** 默认字段的配置如果要参与到具体的业务配置的话，就必须要指定清楚所从属的分类类型 */
	surveyItemName: SurveyItemName;
};
```

针对如下代码：

```ts
/** 简单的存储数组
 * @description
 * 这里负责统一数据类型 补全一些字段
 *
 * 但是这里不负责对业务数据的默认补全。基于业务显示控制的其他逻辑应该交由接口来做数据处理。
 */
export const simpleStoreList: Readonly<FieldConf>[] = simpleAllConfList.map(
	(item, indx, arr) => {
		// 请提供给我一个类型判断的写法
		typeof
		// if () {}
		// return {};
	}
);
```

我现在期望在上述的 map 回调函数内，对所遍历的 item 做类型判断。如果 item 是 DefCommonFieldConf_withBuziConf 类型，就做相关逻辑。请根据上述代码，补全 if 语句的逻辑。

## typescript 判断变量类型 -2

已知以下类型：

```ts
type Fucker = {
	name: string;
	age?: number;
	time: number;
};

type ParticularFucker = {
	name: string;
	age: number;
	time?: number;
	history: {}[];
};
```

已知以下变量：

```ts
const user = {
	name: "ruan-",
	age: 12,
	time: 2,
	history: [{}, {}],
};
```

请为我编写两个函数，分别名为 isFucker 和 isParticularFucker，用于判断一个对象是否是对应的类型。其中：

- isFucker 函数用于判断一个变量是否是 Fucker 类型
- isParticularFucker 函数用于判断一个变量是否是 ParticularFucker 类型

请用 typescript 来编写上述函数。并给出参考资料。

###

请分别用 instanceof、typeof 和类型守卫 is 的语法，针对上述的 isFucker 和 isParticularFucker 函数，来给出 3 种不用的解决方案。

## typescript 类型体操

### 1 从字面量生成类型

以下代码：

```ts
type A1 = "";
type A2 = string;

type B1 = 123;
type B2 = number;
```

请为我编写一个类型工具。实现字面量类型转换为基础类型。

### getter/setter 类型

我不会写 typescript 类型。请告诉我以下 js 对象的 typescript 类型：

```js
const a = {
	_addrJson: "",
	get addrJson() {
		let target = this._addrJson;
		if (!!target && target !== "") {
			return JSON.parse(target);
		} else {
			return {};
		}
	},
	set addrJson(p) {
		this._addrJson = p;
	},
};
```

### 指定格式的字符串类型

以下代码：

```ts
export type CodeName = {
	code: number | string;
	name: string;
};
export type CodeNames = [CodeName, CodeName, CodeName];
export type AddrJsonList = CodeNames;
const codeNames: CodeNames = [
	{
		code: 1,
		name: "北京市",
	},
	{
		code: 2,
		name: "天津市",
	},
	{
		code: 2,
		name: "天津市",
	},
];
console.log(JSON.stringify(codeNames));
// export type AddrJson = ??;
```

请编写类型 AddrJson。这个类型一定是 CodeNames 类型的 JSON.stringify() 函数返回结果。务必实现严格的字符串格式。

### 特定 json 格式的字符串类型

```js
('[{"code":1,"name":"北京市"},{"code":2,"name":"天津市"},{"code":3,"name":"深圳市"}]');
('[{"code":34,"name":"北京市"},{"code":542,"name":"天津市"},{"code":52,"name":"深圳市"}]');
('[{"code":"232","name":"北京市"},{"code":"634","name":"天津市"},{"code":"63","name":"深圳市"}]');
```

结合上述的内容，请根据这些字符串，为我编写一个更合适的 AddrJson 类型。

### 生成字符串类型

如下 typescript 类型：

```ts
export type AssetType = 1 | 2;
```

我希望得到一个纯字符串的类型，比如：

```ts
export type AssetTypeStringAble = "1" | "2";
```

请告诉我如何实现？是否需要自己封装工具？

## 代码优化

请用 lodash 和原生 javascript 两种方式来优化以下代码写法：

```js
function findStateinfo(stateId) {
	const state = Zuan.parameters.find((item) => item.stateId === stateId);
	const turn = state.Turn;
	const count = state.Counter;
	const maxTurn = state.MaxTurn;
	const maxCounter = state.MaxCounter;
	const amount = state.Amount;
	const step = state.step;
	const turnColor = state.turncolor;
	const countColor = state.countcolor;
	const turnpos = state.turnfontpos;
	const countpos = state.countfontpos;
	const scale = state.scale;
	const pos = state.pos;
	return {
		turn,
		count,
		maxTurn,
		maxCounter,
		amount,
		step,
		turnColor,
		countColor,
		turnpos,
		countpos,
		scale,
		pos,
	};
}
```

### pickByFieldNameList

<!-- TODO: 待询问 -->

请编写一个 pickByFieldNameList 函数，用于实现上述的业务取值。实现在对象内取键值，并映射生成出新的字段名，最后生成一个新的对象。

回答要求：

- 分别用 typescript 和 javascript 实现。
- 分别用 lodash 和原生代码实现。
- 应该返回给我 4 个答案。

## 机器学习系列的内容

你好，现在新建一个长期有效的会话，这一系列的对话将主要涉及到以下的技术栈：

- python
- anaconda
- pycharm
- PyTorch
- Jupyter Notebook
- kaggle

我会在这个回话内讨论`机器学习`和`人工智能`的问题。请做好准备。今后本回话内讨论的技术都会以上述技术栈为前提。

未来可能会逐步增加所设计的技术栈。

如果我讨论的内容涉及到了其他领域，请及时询问我是否要添加技术栈。

### kaggle 运行 Jupyter Notebook

如何在 kaggle 内运行 Jupyter Notebook 的代码？如何在 kaggle 内训练我自己的 yolov5 模型？

### 在线 yolov5 模型训练

请为我推荐几个云训练的平台。我想在云平台内训练 AI 模型。主要训练 yolov5 模型。

- 其范围应该包括中国国内和国外的平台。优先推荐国外的平台。
- 至少推荐 20 个平台
- 提供平台的访问链接

Amazon Web Services (AWS): https://aws.amazon.com/
Microsoft Azure: https://azure.microsoft.com/
Google Cloud Platform (GCP): https://cloud.google.com/
IBM Watson: https://www.ibm.com/cloud/watson
Alibaba Cloud: https://www.alibabacloud.com/
Tencent Cloud: https://cloud.tencent.com/
Baidu AI Open Platform: https://ai.baidu.com/
Paperspace: https://www.paperspace.com/
FloydHub: https://www.floydhub.com/
Crestle: https://www.crestle.com/
Spell: https://www.spell.ml/
Determined AI: https://www.determined.ai/
Scaleway: https://www.scaleway.com/
OVHcloud: https://www.ovhcloud.com/
Arize AI: https://www.arize.com/
Comet.ml: https://www.comet.ml/
Valohai: https://www.valohai.com/
Databricks: https://databricks.com/
Seldon: https://www.seldon.io/
Neptune.ai: https://neptune.ai/

### 代码解释

我是 python 初学者，看不懂以下代码，请为我解释以下代码段：

```python
dataset = {
            "file":[],
            "name":[],
            "width":[],
            "height":[],
            "xmin":[],
            "ymin":[],
            "xmax":[],
            "ymax":[],
           }
dataset['name']+=[name]
```

从中涉及到了什么语法？请提供语法参考资料链接。

### 代码解释

逐行解释一下 python 代码

```python
dict_info = {
    'with_mask': 0,
    'without_mask': 1,
    'mask_weared_incorrect': 2
}
label_ = dict_info.get(label)
if label_:
		label_ = label_
else:
		label_ = 0
```

### 数据拆分

我现在已经使用 label-studio 导出了 yolo 格式的数据集，现在的文件存储路径类似于下面的格式：

```bash
project-ID-at-YEAR-MONTH-DAY-HOUR-MINUTE-STRING.zip
    notes.json
    classes.txt
    labels
        image_filename1.txt
        image_filename2.txt
        image_filename3.txt
        ...
    images
        image_filename1.jpg
        image_filename2.jpg
        image_filename3.jpg
        ...
```

请为我编写一段 python 代码，实现这样的功能：

- 对数据集做拆分。目前仅需要拆分出 ['train', 'val', 'test'] 三个文件夹。

我会在能够被 yolo 项目识别出来的 yaml 配置文件内使用上述文件路径，其格式如下：

```yaml
path: /home/ai_rzn/images/mask/mask-1/res
train: images/train
val: images/val
```

拆分后的文件夹组织格式预期如下：

```bash
D:.
├─images
│  ├─test
│  ├─train
│  │      maksssksksss0.png
│  │      maksssksksss1.png
│  │      maksssksksss10.png
│  │   	  ...
│  └─val
│          maksssksksss101.png
│          maksssksksss12.png
│          maksssksksss127.png
│          ...
└─labels
    ├─test
    ├─train
    │      maksssksksss0.txt
    │      maksssksksss1.txt
    │      maksssksksss10.txt
    │      ...
    └─val
            maksssksksss101.txt
            maksssksksss12.txt
            maksssksksss127.txt
            ...
```

其中，文件之间具有严格对应关系

- 能够提供 python 运行时的命令行参数。要求使用 argparse.ArgumentParser() 和 parser.add_argument() 函数来实现命令行参数的解析。假设该文件名为 Splitting.py ，我不希望在运行该 Splitting.py 脚本文件时，加上冗长的命令行参数。
  需要增加的命令行参数如下：

  - --input-dir 输入目录
    我在运行 Splitting.py 时，会提供一个 window 系统下的图片数据根目录，作为图片集的输入目录，类似于如下的格式
    ```txt
    D:\common-software\Google-Chrome-Local-Cache\project-1-at-2023-06-07-11-31-4dfb9658
    ```
  - --output-dir 输出目录
    我在运行 Splitting.py 时，会提供一个 windows 系统下的图片数据根目录，作为图片集的输出目录，类似于如下的格式
    ```txt
    D:\common-software\Google-Chrome-Local-Cache\img-res
    ```

- 拆分数据集时，train 训练集的拆分比例是 0.8，val 验证集的拆分比例是 0.1，test 测试集的拆分比例是 0.1。

### 图片文件数据统一格式化批处理

我现在通过某些方式拿到了一些数据集，这些数据集具有以下的文件存储格式：

```bash
├─义工清理垃圾
│      Baidu_0002.jpeg
│      Baidu_0003.jpeg
│      Baidu_0021.jpeg
│      Baidu_0022.jpeg
│      Baidu_0023.jpeg
│      Baidu_0024.jpeg
│      Baidu_0025.jpeg
│      Baidu_0026.png
│      Baidu_0027.jpeg
│      ...
│
├─乱扔垃圾
│      Baidu_0001.jpeg
│      Baidu_0027.png
│      Baidu_0002.jpeg
│      ...
│
├─游客乱扔垃圾
│      Baidu_0001.webp
│      Baidu_0002.jpeg
│      Baidu_0012.png
│      Baidu_0026.png
│      ...
│
└─随手扔垃圾
        Baidu_0000.jpeg
        Baidu_0001.jpeg
        ...
```

请为我编写一份名为 img-handle.py 的 python 文件。

img-handle.py 代码应该具有这样的几个变量，便于我未来手动重设参数：

- img_input_dir
  要处理的图像文件夹路径。这里的路径默认取值为 D:\code\web-dev-work-place\github-desktop-store\Image-Downloader\images\person-drop-litter\try-1\store

- img_output_dir
  要输出的文件夹路径。默认取值为 D:\code\web-dev-workplace\github-desktop-store\Image-Downloader\images\person-drop-litter\try-1\res

- business_name
  业务名称。即全部批处理后的图片文件命名。默认取值为 person-drop-litter

- file_format
  文件格式。即全部批处理后的图片格式。默认取值为 png

上述的变量应该集中地放在一起，尽可能放在 img-handle.py 的头部。

img-handle.py 应当具有以下功能：

- 统一复制生成图片至指定的存储路径
  遍历 img_input_dir 的文件夹路径，读取全部的图像文件，将其转换为图像形式保存在 img_output_dir 中。

- 图片文件名按照格式统一处理
  按照 {business_name}-{index} 的 python 字符串模板格式，为每个图像文件命名。例如：

  - person-drop-litter-0001
  - person-drop-litter-0023
  - person-drop-litter-1402

- 文件类型的统一处理
  全部的图片指定为 file_format 的格式。当 file_format 指定为 png 时，将保存在 img_output_dir 中的图像格式是 png 的图像。不管看到哪一种图片文件类型，不管是 jpg、webp、jpeg 还是什么类型，都统一改成 file_format 指定的文件类型。

- 扁平数据结构储存
  上述的整理后图片都是统一保存在同一个文件夹的，不做子文件夹的拆分。

## python

### pip install

我不太清楚 pip install 有多少种安装方式。请向我介绍 pip 的全部安装方式。并为我提供官方的中文教程链接。

### -U git

已知以下命令：

```bash
pip install -U "git+https://github.com/facebookresearch/fvcore.git"
```

分别回答以下问题：

- pip install 的 -U 命令是什么意思？
- pip 安装的不是一个 python 包名，而是 git 仓库链接。这是什么语法？pip install 还有那种特别的安装方式？除了安装本地包，安装 git 仓库内容，还有那种安装写法？
- 安装 git 仓库的东西，同时 python 解释器会做本地编译么？

回答问题时，请同时提供相关的参考资料链接。

### 1

我使用 argparse.ArgumentParser() 的方式获取到了一些字符串。现在想组装生成以下格式的字符串：

输入：
"D:\common-software\Google-Chrome-Local-Cache\project-1-at-2023-06-07-11-31-4dfb9658"

输出：
r"D:\common-software\Google-Chrome-Local-Cache\project-1-at-2023-06-07-11-31-4dfb9658"

请使用 python 模板字符串的语法来编写程序，实现上述需求。并提供一个 demo 示例。

### 代码优化

对以下的 python 代码做优化。要求将写死的文件路径统一用变量来配置。希望实现更改单一变量即可实现全部存储路径的变更功能。

比如 data/labels 、 data/ImageSets 这样的路径字符串，必须给出一个放在代码顶部的全局变量，便于未来统一修改。

```python
# -*- coding: utf-8 -*-
# xml解析包
import xml.etree.ElementTree as ET
import pickle
import os
from os import listdir, getcwd
from os.path import join

classes = ['fall']

sets = ['train', 'test', 'val']


# 进行归一化操作
def convert(size, box):  # size:(原图w,原图h) , box:(xmin,xmax,ymin,ymax)
    dw = 1. / size[0]  # 1/w
    dh = 1. / size[1]  # 1/h
    x = (box[0] + box[1]) / 2.0  # 物体在图中的中心点x坐标
    y = (box[2] + box[3]) / 2.0  # 物体在图中的中心点y坐标
    w = box[1] - box[0]  # 物体实际像素宽度
    h = box[3] - box[2]  # 物体实际像素高度
    x = x * dw  # 物体中心点x的坐标比(相当于 x/原图w)
    w = w * dw  # 物体宽度的宽度比(相当于 w/原图w)
    y = y * dh  # 物体中心点y的坐标比(相当于 y/原图h)
    h = h * dh  # 物体宽度的宽度比(相当于 h/原图h)
    return (x, y, w, h)  # 返回 相对于原图的物体中心点的x坐标比,y坐标比,宽度比,高度比,取值范围[0-1]


# year ='2012', 对应图片的id（文件名）
def convert_annotation(image_id):
    '''
    将对应文件名的xml文件转化为label文件，xml文件包含了对应的bunding框以及图片长款大小等信息，
    通过对其解析，然后进行归一化最终读到label文件中去，也就是说
    一张图片文件对应一个xml文件，然后通过解析和归一化，能够将对应的信息保存到唯一一个label文件中去
    labal文件中的格式：calss x y w h　　同时，一张图片对应的类别有多个，所以对应的ｂｕｎｄｉｎｇ的信息也有多个
    '''
    # 对应的通过year 找到相应的文件夹，并且打开相应image_id的xml文件，其对应bund文件
    in_file = open('data/Annotations/%s.xml' % (image_id), encoding='utf-8')
    # 准备在对应的image_id 中写入对应的label，分别为
    # <object-class> <x> <y> <width> <height>
    out_file = open('data/labels/%s.txt' % (image_id), 'w', encoding='utf-8')
    # 解析xml文件
    tree = ET.parse(in_file)
    # 获得对应的键值对
    root = tree.getroot()
    # 获得图片的尺寸大小
    size = root.find('size')
    # 如果xml内的标记为空，增加判断条件
    if size != None:
        # 获得宽
        w = int(size.find('width').text)
        # 获得高
        h = int(size.find('height').text)
        # 遍历目标obj
        for obj in root.iter('object'):
            # 获得difficult ？？
            difficult = obj.find('difficult').text
            # 获得类别 =string 类型
            cls = obj.find('name').text
            # 如果类别不是对应在我们预定好的class文件中，或difficult==1则跳过
            if cls not in classes or int(difficult) == 1:
                continue
            # 通过类别名称找到id
            cls_id = classes.index(cls)
            # 找到bndbox 对象
            xmlbox = obj.find('bndbox')
            # 获取对应的bndbox的数组 = ['xmin','xmax','ymin','ymax']
            b = (float(xmlbox.find('xmin').text), float(xmlbox.find('xmax').text), float(xmlbox.find('ymin').text),
                 float(xmlbox.find('ymax').text))
            print(image_id, cls, b)
            # 带入进行归一化操作
            # w = 宽, h = 高， b= bndbox的数组 = ['xmin','xmax','ymin','ymax']
            bb = convert((w, h), b)
            # bb 对应的是归一化后的(x,y,w,h)
            # 生成 calss x y w h 在label文件中
            out_file.write(str(cls_id) + " " + " ".join([str(a) for a in bb]) + '\n')


# 返回当前工作目录
wd = getcwd()
print(wd)

for image_set in sets:
    '''
    对所有的文件数据集进行遍历
    做了两个工作：
　　　　１．将所有图片文件都遍历一遍，并且将其所有的全路径都写在对应的txt文件中去，方便定位
　　　　２．同时对所有的图片文件进行解析和转化，将其对应的bundingbox 以及类别的信息全部解析写到label 文件中去
    　　　　　最后再通过直接读取文件，就能找到对应的label 信息
    '''
    # 先找labels文件夹如果不存在则创建
    if not os.path.exists('data/labels/'):
        os.makedirs('data/labels/')
    # 读取在ImageSets/Main 中的train、test..等文件的内容
    # 包含对应的文件名称
    image_ids = open('data/ImageSets/%s.txt' % (image_set)).read().strip().split()
    # 打开对应的2012_train.txt 文件对其进行写入准备
    list_file = open('data/%s.txt' % (image_set), 'w')
    # 将对应的文件_id以及全路径写进去并换行
    for image_id in image_ids:
        list_file.write('data/images/%s.jpg\n' % (image_id))
        # 调用  year = 年份  image_id = 对应的文件名_id
        convert_annotation(image_id)
    # 关闭文件
    list_file.close()
```

#### 1

将图片的后缀名抽离出来，独立出来。也封装成一个独立可编辑的，位于顶部的全局变量。特别是 jpg 部分。应该迁移至文件顶部。未来可能换成 png 等其他格式。

<!-- TODO: 待完善 待使用的工具 -->

### 文件批量重命名-1

请为我编写一个名为 filename-remove-space.py 的 python 脚本，用于实现以下功能：

- 能够根据给定文件夹路径，递归地扫描全部的子文件夹。能够遍历全部的文件。
- 遍历全部的文件。读取文件名。如果发现文件名中间存在空格，就移除。

例子：

按照以下代码编写要求书写代码：

- 位于顶部的全局变量 workpath ，用于指定要扫描的工作目录。

## linux

我在 linux 系统运行了一个安装包的命令。可能是 pip 或者是 npm 在安装依赖包。假设我不小心关闭了 MobaXterm 的终端窗口，我该怎么去查看上次正在运行的，正在安装的异步任务？

- 怎么唤起已经运行的异步任务？
- 查看多个异步任务列表？
- 进入特定任务的详情？

### 2

我想在 linux 执行某个进程，并可以查看进程的执行情况。我应该使用那个命令查看？或者是使用那款工具来查看正在运行的进程情况？

## label-studio

本次会话专用于 label-studio 工具。以下是参考资料：

- https://github.com/heartexlabs/label-studio/
- https://labelstud.io/

在本次会话中，请教我相关的 label-studio 基础操作。

### 1

我的 label-studio 是安装在 window 环境的。

我新建了一个本地项目，注意到这个项目存储在 C 盘，而且图片资源在以下路径：

```bash
C:\Users\ruanzhongnan\AppData\Local\label-studio\label-studio\media\upload\1
```

怎么让本地的项目文件保存到指定的目录，而不是默认的 C 盘？我需要对大量的图片做标注，不希望本地项目的全部图片都保存在 C 盘。

### 2

抱歉。我根本找不到这个 `config.xml` 的配置文件。而且我这里根本没有什么 Label Studio 项目文件。我本地启动了 Label Studio 服务，然后运行平台。但是我不清楚到底在哪里去设置项目的存储路径，总是在 C 盘。

注意到每次启动 label-studio 时，都是出现以下内容。东西总是存储在 C 盘。

```bash
Can't load sqlite3.dll from current directory
=> Database and media directory: C:\Users\ruanzhongnan\AppData\Local\label-studio\label-studio
=> Static URL is set to: /static/
=> Database and media directory: C:\Users\ruanzhongnan\AppData\Local\label-studio\label-studio
=> Static URL is set to: /static/
```

请重新给我一个方案。要么告诉我去哪里找到这个配置文件，要么重新给一个方案来实现项目存储。

### 3

我在 window 系统内使用 label-studio ，怎么实现本地数据集的导入？

怎么处理下面的错误？

```bash
[ErrorDetail(string='Path D:\\code\\web-dev-work-place\\github-desktop-store\\Image-Downloader\\images\\person-drop-litter\\try-1 must start with LOCAL_FILES_DOCUMENT_ROOT=C:\\ and must be a child, e.g.: C:\\abc', code='invalid')]
```

### 4

我遇到了这样的错误，怎么处理？

```bash
Serving local files can be dangerous, so it's disabled by default. You can enable it with LOCAL_FILES_SERVING_ENABLED environment variable, please check docs: https://labelstud.io/guide/storage.html#Local-storage
```

我现在用 anaconda 来启动 label-studio 项目，请问我应该怎么在 anaconda 终端内设置环境变量？

## prettier

<!-- 在 vscode 的 prettier 插件内对.xml 文件做格式化？ -->

我现在在使用 vscode 的 prettier 插件，怎么配置 prettier 使得其可以解析和格式化我的 xml 文件？

### 1

抱歉，对该回答不满意。

此时我没有 node 项目，不使用任何 npm，不使用任何 node 包管理工具。我用 vscode 打开了一份或多份 xml 文件。并期望使用 vscode 的 prettier 插件实现格式化。

## window.open

我现在在使用 javascript 的 window.open 来打开新的页面

```js
const windowObjectReference = window.open("", BPMWindowName);
```

我想使用 windowObjectReference.location.href 来获取 url 的值，并更改其 url 的 query 参数。但是出现了跨域错误，错误如下：

```bash
Uncaught (in promise) DOMException: Blocked a frame with origin "http://localhost:9527" from accessing a cross-origin frame.
    at _callee$ (webpack-internal:///./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js?!./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_nwtvwtk5tmh22l2urnqucz7kqu/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.10.1_fkqghwdjlrlxqvtcpawlwlrtjq/node_modules/vue-loader/lib/index.js?!./src/views/systems/backlog/backlog/components/Index.vue?vue&type=script&lang=js&:868:68)
    at tryCatch (webpack-internal:///./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js?!./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_nwtvwtk5tmh22l2urnqucz7kqu/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.10.1_fkqghwdjlrlxqvtcpawlwlrtjq/node_modules/vue-loader/lib/index.js?!./src/views/systems/backlog/backlog/components/Index.vue?vue&type=script&lang=js&:70:17)
    at Generator.eval (webpack-internal:///./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js?!./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_nwtvwtk5tmh22l2urnqucz7kqu/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.10.1_fkqghwdjlrlxqvtcpawlwlrtjq/node_modules/vue-loader/lib/index.js?!./src/views/systems/backlog/backlog/components/Index.vue?vue&type=script&lang=js&:151:22)
    at Generator.eval [as next] (webpack-internal:///./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js?!./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_nwtvwtk5tmh22l2urnqucz7kqu/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.10.1_fkqghwdjlrlxqvtcpawlwlrtjq/node_modules/vue-loader/lib/index.js?!./src/views/systems/backlog/backlog/components/Index.vue?vue&type=script&lang=js&:95:21)
    at asyncGeneratorStep (webpack-internal:///./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js?!./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_nwtvwtk5tmh22l2urnqucz7kqu/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.10.1_fkqghwdjlrlxqvtcpawlwlrtjq/node_modules/vue-loader/lib/index.js?!./src/views/systems/backlog/backlog/components/Index.vue?vue&type=script&lang=js&:332:24)
    at _next (webpack-internal:///./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js?!./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_nwtvwtk5tmh22l2urnqucz7kqu/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.10.1_fkqghwdjlrlxqvtcpawlwlrtjq/node_modules/vue-loader/lib/index.js?!./src/views/systems/backlog/backlog/components/Index.vue?vue&type=script&lang=js&:351:9)
```

## scss css canvas

你好，现在新建一个长期有效的会话，这一系列的对话将主要涉及到以下的技术栈：

- scss
- css
- canvas

我会在这个回话内讨论样式、布局和动效的问题。请做好准备。今后本回话内讨论的技术都会以上述技术栈为前提。

未来可能会逐步增加所设计的技术栈。

如果我讨论的内容涉及到了其他领域，请及时询问我是否要添加技术栈。

### 样式优化-1

针对以下代码：

```scss
.device-cate-item {
	&:nth-child(1) {
		z-index: 4;
	}

	&:nth-child(2) {
		z-index: 3;
	}

	&:nth-child(3) {
		z-index: 2;
	}

	&:nth-child(4) {
		z-index: 1;
	}
}
```

有什么优化方式么？能不能实现数值的运算？

### 动效

用 vue3 + animate.css + scss + element-plus + typescript 实现一个右侧侧边栏移动的组件。要求实现比较丝滑的移动动效。

- 点击顶部按钮控制右侧侧边栏的进入和离开。
- 左侧的主界面要随着动画的移动开始变化宽度。
- 编写一个单文件组件。

## vue 文档生成器

请向我推荐几款针对 vue 的文档生成框架。比如说我在开发的时候，使用 vue2.7 或者是 vue3 的组合式 api 编写了以下代码：

```html
<script setup>
	/** https://blog.csdn.net/lhkuxia/article/details/117597616 */
	import { ref, getCurrentInstance, watch, defineProps, onMounted } from "vue";

	import commonJs from "@/assets/js/common.js";

	import VForm from "@/components/VForm/index.vue";
	import Layout from "@/components/Activiti/ApprovalInfo/layout/Layout.vue";

	const props = defineProps({
		/** 实例id 由路由提供的id值 */
		instanceId: { type: String },

		/** 业务id */
		businessKey: { type: String },

		/** 任务id 每一个待办任务的id */
		taskId: { type: String },

		/** 业务单据 */
		module: { type: String },
	});

	const toLayoutInstanceId = ref(props.instanceId);
	const toLayoutBusinessId = ref(props.businessKey);

	const conf = {
		tabsRenderList: [],
	};

	// 字典
	const dictRadioOptions = ref([]);
	const dictCheckboxOptions = ref([]);
	const dictSelectOptions = ref([]);

	commonJs.filterDataDict("sex", dictRadioOptions.value);
	commonJs.filterDataDict("useState", dictCheckboxOptions.value);
	commonJs.filterDataDict("useState", dictSelectOptions.value);

	const form = ref({
		name: "",
		num: "",
		sendTime: "",
		dictRadio: "",
		dictSelect: "",
		remark: "",
		pic: [],
		file: [],
		dictCheckbox: [],
	});

	const formData = ref({
		options: [
			{
				title: "名称",
				key: "name",
				type: "text",
			},
			{
				title: "数量",
				key: "num",
				type: "text",
			},
			{
				title: "发送日期",
				key: "sendTime",
				type: "date",
			},
			{
				title: "图片",
				key: "pic",
				type: "file",
				fileType: "image",
				listType: "picture-card",
				uploadTextTip: "",
			},
			{
				title: "文件",
				key: "file",
				type: "file",
				fileType: "file",
				listType: "text",
				uploadTextTip: "",
			},
			{
				title: "字典radio",
				key: "dictRadio",
				type: "radio",
				option: {
					data: dictRadioOptions.value,
					props: {
						key: "id", // 指定key对应data的字段
						label: "label", // 指定label对应data的字段
						value: "value", // 指定value对应data的字段
					},
				},
			},
			{
				title: "字典checkBox",
				key: "dictCheckbox",
				type: "checkbox",
				option: {
					data: dictCheckboxOptions.value,
					props: {
						key: "id", // 指定key对应data的字段
						label: "label", // 指定label对应data的字段
					},
				},
			},
			{
				title: "字典select",
				key: "dictSelect",
				type: "select",
				multiple: false,
				option: {
					data: dictSelectOptions.value,
					props: {
						key: "id", // 指定key对应data的字段
						label: "label", // 指定label对应data的字段
						value: "value", // 指定value对应data的字段
					},
				},
			},
			{
				title: "备注",
				key: "remark",
				type: "textarea",
			},
		],
		rules: {
			name: [
				{ required: true, message: "请输入", trigger: "blur" },
				{ max: 64, message: "长度最大为64个字符", trigger: "blur" },
			],
			num: [{ required: true, message: "请输入", trigger: "blur" }],
			sendTime: [{ required: true, message: "请输入", trigger: "blur" }],
			pic: [],
			file: [],
			dictRadio: [],
			dictCheckbox: [],
			dictSelect: [{ required: true, message: "请选择", trigger: "change" }],
			remark: [{ max: 255, message: "长度最大为255个字符", trigger: "blur" }],
		},
		labelWidth: "100px",
	});

	// 不考虑在vue2.7的setup内，监听实例提供的路由对象。做不到。太乱了。
	const { proxy: currentVueInstance } = getCurrentInstance();
	const { $route } = currentVueInstance;
</script>

<template>
	<section>
		<Layout
			:conf="conf"
			:instance-id="instanceId"
			:business-key="businessKey"
			:task-id="taskId"
			:module="module"
		>
			<template #baseInfo>
				<VForm
					ref="vformComponents"
					:rules="formData.rules"
					:options="formData.options"
					:form="form"
					:labelWidth="formData.labelWidth"
					:rowspan="1"
				>
				</VForm>
			</template>
		</Layout>
	</section>
</template>

<style lang="scss" scoped></style>
```

能否生成 markdown 格式的文件？

### 1

我在 vue 组件内编写了 jsdoc 或 tsdoc 格式的注释，请问用什么工具来生成 md 文件？请为我推荐几款工具，并提供 github 仓库链接。

### 2

我编写了一套 vue 组件库。请问怎么自动化生成文档？请为我推荐 vuepress、vitepress 相关的自动化生成框架，并提供 github 仓库链接。

## 库的使用

这是我正在使用的工具 unplugin-auto-import。

- https://github.com/antfu/unplugin-auto-import

我不会使用这个工具，请你教我使用。

需求是：在 webpack4 环境下，使用 unplugin-auto-import 实现对指定目录下全部的 ts 类型的重新导出。

比如在路径 `src/types/**` 下面，我需要用该工具识别该目录下全部的子文件，子目录。识别全部后缀为的.ts 和.d.ts 的文件。搜集这些文件导出的全部 typescript 类型，并在此工具内实现重新导出。

我期望在项目内，我使用的全部类型都来自于重导出的 auto-imports.d.ts 文件。

请为我编写在 vue.config.js 内使用 unplugin-auto-import 插件的配置代码。

## npm 版本差

我想了解 npm6、npm7、npm8 之间的区别。请为我提供文档链接。

- 首先是官方文档。
- 其次是中文解读的技术文章。

## 编写 vscode snippets

为我编写一个 vscode snippets。针对 vscode snippets 的 $TM_FILENAME_BASE 变量，生成指定格式的变量。现提供以下的测试用例：

| $TM_FILENAME_BASE 获取的值 |     期望生成的结果     |
| :------------------------: | :--------------------: |
|     use-stores-manage      |    useStoresManage     |
|        use-addrJson        |      useAddrJson       |
|    use-dfsw-dictionary     |   useDfswDictionary    |
|     use-dfsw-nui-tree      |     useDfswNuiTree     |
| use-element-ui-date-picker | useElementUiDatePicker |
|    use-element-ui-form     |    useElementUiForm    |
|        use-loading         |       useLoading       |
|          use-mode          |        useMode         |
|      use-route-query       |     useRouteQuery      |

回答要求：

- 对 $TM_FILENAME_BASE 的值移除短横杠。
- 生成的结果为小驼峰。
- 你的代码应该在 .code-snippets 内使用。
- 只使用 vscode snippets 允许的变量和函数。

## 代码优化

请用 lodash 和原生 javascript 两种方式来优化以下代码写法：

```js
function findStateinfo(stateId) {
	const state = Zuan.parameters.find((item) => item.stateId === stateId);
	const turn = state.Turn;
	const count = state.Counter;
	const maxTurn = state.MaxTurn;
	const maxCounter = state.MaxCounter;
	const amount = state.Amount;
	const step = state.step;
	const turnColor = state.turncolor;
	const countColor = state.countcolor;
	const turnpos = state.turnfontpos;
	const countpos = state.countfontpos;
	const scale = state.scale;
	const pos = state.pos;
	return {
		turn,
		count,
		maxTurn,
		maxCounter,
		amount,
		step,
		turnColor,
		countColor,
		turnpos,
		countpos,
		scale,
		pos,
	};
}
```

### pickByFieldNameList

<!-- TODO: 待询问 -->

请编写一个 pickByFieldNameList 函数，用于实现上述的业务取值。实现在对象内取键值，并映射生成出新的字段名，最后生成一个新的对象。

回答要求：

- 分别用 typescript 和 javascript 实现。
- 分别用 lodash 和原生代码实现。
- 应该返回给我 4 个答案。

## 尝试实现单仓项目内自动生成文档

我想搭建一个自动生成文档的前端项目。

- 该项目的架构和技术栈为 pnpm + monorepo + vue3 + vuepress + typescript
- 该单仓项目有两个子包。一个子包是叫做 main。包含了很多 javascript、typescript 和 vue3 的代码。
- 另一个子包叫做 docs。使用了 vuepress 作为文档框架。
- 我使用了 typedoc 和 vuepress-plugin-typedoc 依赖作为生成 typescript 文档的主要生成器。
- 我使用的是 typedoc.config.ts 配置文件，而不是.json 格式的配置文件。
- 使用了 vuepress-theme-hope 作为 vuepress 主题。
- 我只是单独运行了 docs 子包，并不会先运行或编译 main 子包。
- main 子包的 tsconfig.json 已经配置好了。希望 docs 子包的 tsconfig.json 可以尽量识别 main 的配置，并复用配置。

请告诉我，我该如何配置 monorepo 的 tsconfig.json？如何配置 typedoc.config.ts 文件，使得 docs 子包可以生成 main 的项目文档？

## typedoc

在 monorepo 仓库内， typedoc 怎么实现对单仓项目内其他子包的文档生成？

## typescript 特定模块导出的函数，做类型覆盖

你好，我想询问的问题是在 typescript 内，怎么实现对模块类型覆盖？

我在 package.json 内安装了 vue3 的依赖，并重命名。我目前的项目主要使用的 vue 版本是 vue2.7，如下：

```json
// in package.json
{
	"devDependencies": {
		"vue3": "npm:vue@^3.4.15"
	}
}
```

在 tsconfig.json 内导入了 global.d.ts。

在自己定义的 global.d.ts 内，期望用 vue3 的 defineComponent 类型声明，替换掉 vue2.7 的 defineComponent 类型声明。我是这样写的：

```ts
import { defineComponent as defineComponent3 } from "vue3";
declare module "vue" {
	// 请问接下来我该怎么写？才能实现类型声明的替换？
}
```

### 1

抱歉，这不符合我的期望。defineComponent 是一个函数，我希望对这个函数做类型拓展，或者是类型覆盖。

目前的写法，导致 vue 导出的其他模块均报错，报错如下：

```text
模块“"vue"”没有导出的成员“onMounted”
```

请更改写法，至少满足以下要求：

1. 仅仅更改 vue 模块内 defineComponent 函数的类型。其他的 vue 模块导出来的模块，均不受影响。
2. defineComponent 是函数，不允许使用 const 变量的方式做导出。defineComponent 的类型推导仍旧是函数。

### 2

请使用函数重载的方式实现。

## 文件整理脚本

请为我生成一段简单的 typescript，用于删除文件夹中的文件。

### 技术栈

typescript + node

我会用 node 环境运行这一段 typescript 代码。技术栈仅考虑 typescript。

### 需求

删除文件夹中含有特定名称的文件。要求遍历全部文件夹，删除文件名含有特定关键字的文件。

按照关键字删除文件时，使用正则表达式来匹配删除。

### 删除时打印记录

删除时，打印出被删除的文件名。

### 函数格式

函数名 removeFilesByKeyWords ，通过关键字删除文件。

函数仅接收两个参数：

- path: string, 文件夹路径
- keyword: string, 关键字

### 举例

假设某个文件夹下有如下几个文件：

```text
出车情况表-2019-04.xlsx
司机绩效评分表-2019-04.xls
月度用车情况表（2019-04）.xlsx
绩效评分情况表（2019-04）.xlsx
车辆月度费用统计表（2019-04）.xlsx
车队管理情况表（2019-04）.xlsx
部门月度用车情况表（2019-04）.xlsx
…… 其他更多的文件
```

keyword 填写为 `绩效评分情况表` 。

那么期望的结果为：

```text
出车情况表-2019-04.xlsx
司机绩效评分表-2019-04.xls
月度用车情况表（2019-04）.xlsx
车辆月度费用统计表（2019-04）.xlsx
车队管理情况表（2019-04）.xlsx
部门月度用车情况表（2019-04）.xlsx
…… 其他更多的文件
```

文件名为`绩效评分情况表（2019-04）.xlsx`的文件，被匹配成功，被删除。

### 遍历全部子文件夹

抱歉，该函数不能按照我的要求，遍历全部的子文件夹。请更改。

## 类型声明依赖包

在 typescript 里面使用 node 的 api，需要安装什么类型声明依赖包？安装的时候有什么注意事项？

要安装什么版本的？

需要安装 @types/node 包。
