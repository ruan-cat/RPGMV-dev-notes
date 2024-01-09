import moment from "moment";

/**
 * 当前用户是否为`应届毕业生`？
 * @param { string } schoolEnd 毕业时间
 * @description
 * 当前时间减去毕业时间少于6个月视为应届毕业生
 */
export function isUserRecentGraduate(schoolEnd: string) {
	return moment().diff(moment(schoolEnd), "months") <= 6;
}
