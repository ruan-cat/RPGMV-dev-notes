/**
 * 一段简单的代码 帮助其他人优化if语句。
 */

type ConditionAndTextConfig = {
	condition: (...args: any[]) => boolean;
	text: string;
};

const conditionAndTextConfigs: ConditionAndTextConfig[] = [
	{
		condition: () => true,
		text: "A",
	},
	{
		condition: () => false,
		text: "B",
	},
	{
		condition: () => true,
		text: "C",
	},
];

function getCompositeText() {
	return conditionAndTextConfigs
		.filter(({ condition }) => condition())
		.map(({ text }) => text)
		.join(", ");
}
