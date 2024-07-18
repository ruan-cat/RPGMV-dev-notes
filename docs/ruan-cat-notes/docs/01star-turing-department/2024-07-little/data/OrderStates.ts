// const orderStates = <const>[
// 	10, // 未支付
// 	10, // 待支付
// 	10, // 待支付
// 	10, // 待支付
// ];

/** 订单状态 */
// const
export enum OrderStates {
	/** 未支付 */
	Unpaid = 10,
	/** 待支付 */
	ToBePaid = 20,
	/** 已支付 */
	Paid = 30,
	/** 已完成 */
	Completed = 40,
}
