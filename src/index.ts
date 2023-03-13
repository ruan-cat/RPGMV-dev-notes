type DefDateList = ["", ""];

const _getDefaultList = (): DefDateList => ["", ""];

/** 基础的 必填字段名 为了实现统一配置业务所需的字段 */
type BasePropName = {
	/** 起始时间字段名 */
	startPropName: string;

	/** 结束时间字段名 */
	endPropName: string;

	/** 表单对象 */
	form: Record<string, unknown>;
};

/** 调试用的参数 */
type DebugParam = {
	/** 是否输出控制台信息？ */
	isConsole?: boolean;
};

/** setter函数所需的必填参数 */
type SetterFunParam = {
	p: Array<unknown> | null;
};

/** getter函数一般情况下的返回值 */
type GetterFunCommonRes = [unknown, unknown];

// /** 工具函数参数 */
// type ToolFunParam = BasePropName & DebugParam & SetterFunParam;
// /** 工具函数 */
// type ToolFun = (toolFunParam: ToolFunParam) => unknown;

type GetterFun = (
	GetterFunParam: BasePropName & DebugParam
) => DefDateList | GetterFunCommonRes;

type SetterFun = (
	SetterFunParam: BasePropName & DebugParam & SetterFunParam
) => void;

/** getterFun
 * @author rzn
 */
export const getterFun: GetterFun = ({
	startPropName,
	endPropName,
	form,
	isConsole = false,
}) => {
	const resList: GetterFunCommonRes = [form[startPropName], form[endPropName]];

	isConsole ? console.warn(" in getterFun ", resList) : void 0;

	return resList.some((elm) => elm === null || elm === void 0)
		? _getDefaultList()
		: resList;
};

/** setterFun
 * @author rzn
 * @description
 * 一个设置函数
 */
export const setterFun: SetterFun = ({
	startPropName,
	endPropName,
	form,
	p,
	isConsole = false,
}) => {
	isConsole ? console.log(" in setterFun p =  ", p) : void 0;

	[form[startPropName], form[endPropName]] =
		!p || p.length === 1 || p.some((elm) => !elm) ? _getDefaultList() : p;

	isConsole
		? console.log(" in set res =  ", [form[startPropName], form[endPropName]])
		: void 0;
};

const testObj = {
	startTime: "",
	endTime: "",

	// TODO: 不懂为什么要配置该类型
	get list(): DefDateList | GetterFunCommonRes {
		return getterFun({
			startPropName: "startTime",
			endPropName: "endTime",
			form: this,
		});
	},

	set list(p) {
		setterFun({
			startPropName: "startTime",
			endPropName: "endTime",
			form: this,
			p,
		});
	},
};

try {
	console.log(" in testObj ", testObj);
} catch (e: unknown) {
	console.error(" in error ", (e as Error).message);
}
