export interface HuihuiSelectProps<T> {
	onCellCilck?(cellParam: T): void;
	cellParam?: T;
}
