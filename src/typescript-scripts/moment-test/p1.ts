import moment from "moment";

const schoolEnd = "2021-07-01";

/**
 * 当前用户是否为`应届毕业生`？
 * @description
 * 当前时间减去毕业时间少于6个月视为应届毕业生
 */
function isUserRecentGraduate() {
	return moment().diff(moment(schoolEnd), "months") <= 6;
}
