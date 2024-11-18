<script lang="ts" setup>
import { createTemplatePromise, useToggle, type TemplatePromiseProps } from "@vueuse/core";
import { merge, isUndefined, cloneDeep, isEmpty } from "lodash-es";
import type { DialogProps } from "element-plus";
import { ElMessage, ElButton, ElInput, ElDialog, ElCollapseTransition } from "element-plus";

/** 可选的弹框props */
type DialogPropsPartial = Partial<DialogProps>;

/** 测试的业务dto */
interface TestBusinessDTO {
	/** 名称 */
	name: string;
}

/**
 * 弹框组件 配置对象
 * @description
 * 弹框组件的配置对象 相当于调用函数的参数
 */
interface DemoDialogProps {
	dialog?: DialogPropsPartial;
	testBusinessDTO?: TestBusinessDTO;
}

const form = ref<TestBusinessDTO>({
	name: "",
});

/**
 * 是否校验通过？
 * @description
 * 用于控制弹框关闭时的校验逻辑
 *
 * 这里为了演示，判断字符串是否是空字符串。只要不是空字符串，就认定为通过校验
 *
 * 在你的业务中，这里可以判断逻辑可以写成表单校验的结果。
 */
const isValidate = computed(() => !isEmpty(form.value.name));

type TemplatePromisePropsTuple = [TestBusinessDTO, [DemoDialogProps]];

/** promise化的弹框组件 */
const TemplatePromise = createTemplatePromise<TemplatePromisePropsTuple[0], TemplatePromisePropsTuple[1]>();

// 维护弹框的显示与打开属性 是为了触发弹框的回调事件函数
const [isOpen, toggleOpen] = useToggle(false);
// 是否确认提交
const [isConfirm, toggleConfirm] = useToggle(false);

/**
 * 默认弹框属性
 * @description
 * 默认弹框属性不设置频繁变更的属性 比如弹框的显示与打开属性
 */
const defDialogProps = ref<DialogPropsPartial>({
	// 不需要设置显示属性
	// modelValue: isOpen.value,
	draggable: true,
	closeOnClickModal: false,
});

/**
 * 创建弹框属性
 * @description
 * 用户提供的属性 来自于slot插槽，故需要设计成一个函数获取到插槽提供值，然后合并默认值
 */
function createDialogProps(dialogProps?: DialogPropsPartial) {
	// 用合并属性的方式，重新创建一个对象
	return merge<DialogPropsPartial, DialogPropsPartial, DialogPropsPartial>(
		{},
		defDialogProps.value,
		isUndefined(dialogProps) ? {} : dialogProps,
	);
}

/** 简易的重设表单函数 */
function resetForm() {
	form.value = {
		name: "",
	};
}

type OnDialogCloseParams = Pick<
	TemplatePromiseProps<TemplatePromisePropsTuple[0], TemplatePromisePropsTuple[1]>,
	"resolve" | "reject"
>;

/** 弹框组件关闭时的回调函数 */
function onDialogClose({ resolve, reject }: OnDialogCloseParams) {
	/**
	 * 对多种弹框关闭情形做统一处理
	 *
	 * 校验通过且点击了确认按钮 就返回表单数据 返回深克隆的新数据 避免稍后的重置表单改变了数据
	 *
	 * 不通过 就直接返回 undefined
	 */
	isValidate.value && isConfirm.value ? resolve(cloneDeep(form.value)) : reject(void 0);

	/**
	 * 在关闭弹框时 重置表单
	 * 现对外输出本弹框组件的数据 然后再清空表单信息
	 */
	resetForm();

	/**
	 * 弹框组件的关闭事件 我们这里设计成默认返回为true
	 * 相当于不做拦截，默认就直接关闭弹框
	 */
	return true;
}

/**
 * 确认按钮
 * @description
 * 点击确认按钮 只做单纯的校验
 * 校验通过就关闭窗口
 */
async function doConfirm() {
	toggleConfirm(true);
	if (isValidate.value) {
		toggleOpen(false);
	} else {
		ElMessage.warning("请输入名称，名称不为空");
	}
}

/**
 * 取消按钮
 * @description
 * 直接关闭弹框
 */
function doCancel() {
	toggleOpen(false);
}

/**
 * 打开弹框
 * @description
 * 对外暴露的打开弹框组件
 *
 * 只有执行了 start 函数，才会开始渲染组件。
 *
 * 本函数不能代表弹框组件的打开生命周期。
 */
async function open(params: DemoDialogProps) {
	const dialogProps = merge<DemoDialogProps, DemoDialogProps>(
		// 基础信息
		{
			dialog: defDialogProps.value,
		},
		// 外部传值
		params,
	);

	// 打开弹框 触发弹框组件的事件
	toggleOpen(true);
	/**
	 * 关闭确认状态
	 * 在这里，你的弹框组件应该维护其他的状态 以确保弹框的状态是干净的
	 */
	toggleConfirm(false);
	// 在打开弹框时 设置表单数据 设置数据时，深克隆避免影响原数据
	form.value = cloneDeep(dialogProps.testBusinessDTO);
	return await TemplatePromise.start(dialogProps);
}

defineExpose({
	// 如果是封装简单的弹框组件 应该对外暴露出本函数 让外部组件打开本弹框
	open,
});

/** 业务数据 */
const testBusinessDTO = ref<TestBusinessDTO>({
	name: "",
});

/**
 * 业务代码 打开弹框
 * @description
 * 打开弹框的过程属于异步过程
 */
async function openDiglog() {
	/** 弹框组件的返回值 */
	const responseBusinessDTO = await open({
		dialog: {
			title: "修改名称",
		},
		testBusinessDTO: testBusinessDTO.value,
	});

	testBusinessDTO.value = responseBusinessDTO;
}
</script>

<template>
	<section class="demo-TemplatePromise-and-ElDialog-root">
		<ElButton type="warning" @click="openDiglog()"> 打开修改弹框 </ElButton>

		<section>
			表单内的数据：
			{{ form }}
		</section>

		<section>
			当前业务数据：
			{{ testBusinessDTO }}
		</section>

		<TemplatePromise v-slot="{ promise, resolve, reject, args }">
			<ElDialog
				v-bind="createDialogProps(args[0]?.dialog)"
				:model-value="isOpen"
				@close="onDialogClose({ resolve, reject })"
				style="width: 30vw"
			>
				<template #default>
					请输入名称：
					<ElInput
						v-model="form.name"
						:minlength="2"
						:maxlength="10"
						:clearable="true"
						:show-word-limit="true"
					></ElInput>
				</template>

				<template #footer>
					<ElButton type="primary" @click="doConfirm"> 确定 </ElButton>
					<ElButton type="info" @click="doCancel"> 取消 </ElButton>
				</template>
			</ElDialog>
		</TemplatePromise>
	</section>
</template>

<style lang="scss" scoped>
.demo-TemplatePromise-and-ElDialog-root {
}
</style>
