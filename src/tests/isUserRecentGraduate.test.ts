import { expect, test } from "vitest";
import { isUserRecentGraduate } from "../typescript-scripts/moment-test/isUserRecentGraduate";

test("当前用户是否为`应届毕业生`？", () => {
	expect(isUserRecentGraduate("2021-07-01")).toBe(false);
	expect(isUserRecentGraduate("2024-09-11")).toBe(true);
	expect(isUserRecentGraduate("2024-04-01")).toBe(true);
	expect(isUserRecentGraduate("2025-07-01")).toBe(true);
	expect(isUserRecentGraduate("2023-09-01")).toBe(true);
	expect(isUserRecentGraduate("2023-07-01")).toBe(true);
	expect(isUserRecentGraduate("2023-03-22")).toBe(false);
	expect(isUserRecentGraduate("")).toBe(false);
	expect(isUserRecentGraduate("2017-11-23")).toBe(false);
});
