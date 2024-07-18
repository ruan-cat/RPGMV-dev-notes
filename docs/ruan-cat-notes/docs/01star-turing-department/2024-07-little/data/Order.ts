/**
 * 订单类
 */
export interface Order {
	/** 订单id */
	id: string;

	/** 下单日期 */
	orderDate: string;

	/** 订单状态 */
	states: Order;
}
