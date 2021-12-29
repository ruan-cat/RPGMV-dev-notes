"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genNav = void 0;
const path_1 = require("./path");
const handleNavSort = (nav) => nav.forEach(n => {
    if (n.items) {
        handleNavSort(n.items);
    }
    nav.sort((n1, n2) => n1.text > n2.text ? 1 : -1);
});
const genNav = (sidebarData) => Object.keys(sidebarData)
    .reduce((acc, group, index, arr) => {
    var _a;
    const [, menu] = group.split('/');
    const [{ title }] = sidebarData[group];
    const re = acc.find(a => a.text === menu);
    const link = path_1.padWithSlash(group);
    if (re) {
        (_a = re.items) === null || _a === void 0 ? void 0 : _a.push({ text: title, link });
    }
    else {
        acc.push({ text: menu, items: [{ text: title, link }] });
    }
    if (index === arr.length - 1) {
        handleNavSort(acc);
    }
    return acc;
}, []);
exports.genNav = genNav;
