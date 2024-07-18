// const orderStates = <const>[
// 	10, // 未支付
// 	10, // 待支付
// 	10, // 待支付
// 	10, // 待支付
// ];

const enum orderStates {
	/** 未支付 */
	Unpaid = 10,
	/** 待支付 */
	ToBePaid = 20,
	/** 已支付 */
	Paid = 30,
	/** 已完成 */
	Completed = 40,
}

/** 订单状态 */
export type OrderStates = (typeof orderStates)[keyof typeof orderStates];
