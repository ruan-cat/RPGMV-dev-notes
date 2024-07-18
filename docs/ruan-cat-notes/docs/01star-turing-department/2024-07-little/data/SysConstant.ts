// import { OrderStates } from "./OrderStates";
// import { type OrderStates } from "./OrderStates";
import { type OrderStates as OST, OrderStates as OSV } from "./OrderStates";

// import { type Prettify } from "utils/index";

/** 系统常量 */
export interface SysConstant {
	/** 订单状态 */
	// orderStates: OrderStatesType;
	// orderStates: typeof OrderStates;
	// orderStates: typeof OST;
	// orderStates: (typeof OST)[keyof typeof OST];
	// orderStates: OST;
	orderStates: keyof typeof OST;
}
const sysConstant: SysConstant = {
	// orderStates: OSV[10],
	orderStates: "Unpaid",
};

// const sysConstant = {
// 	orderStates:  OrderStates,
// };
// type SysConstant = typeof sysConstant;

// const a: SysConstant = {
// 	orderStates: OrderStates.Completed,
// };

// const orderStates_1: SysConstant["orderStates"] = OSV;
const orderStates_2: SysConstant["orderStates"] = sysConstant.orderStates;
// const orderStates_3: SysConstant["orderStates"] = sysConstant.orderStates.ToBePaid;
// const orderStates_4: SysConstant["orderStates"]["Paid"] = sysConstant.orderStates.Paid;
// const orderStates_1: SysConstant["orderStates"] = sysConstant.orderStates;
