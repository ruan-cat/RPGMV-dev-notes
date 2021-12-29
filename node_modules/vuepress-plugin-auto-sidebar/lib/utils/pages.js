"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupPagesByMenuPath = exports.distinguishSpecifiedSortPages = exports.handleIgnorePages = exports.handlePages = void 0;
const colors = require("colors");
const path_1 = require("./path");
const handlePages = (pages) => pages
    .filter(page => page.relativePath)
    .map((page) => ({
    relativePath: page.relativePath,
    menuPath: path_1.getMenuPath(page.relativePath),
    frontmatter: page.frontmatter,
    date: page.date,
    createdTime: page.createdTime,
    filename: page.filename
}))
    .filter(path_1.filterRootMarkdowns)
    .filter((page) => !page.frontmatter.autoIgnore);
exports.handlePages = handlePages;
const handleIgnorePages = (groupPages, ignoreOptions) => {
    ignoreOptions.forEach(({ menu, regex }) => {
        const pages = groupPages[menu];
        if (!pages) {
            console.log(colors.red(`未匹配到路径 ${menu}`));
        }
        else {
            const re = regex ? RegExp(regex) : /.*/;
            const filterPages = pages.filter(page => !page.filename.match(re));
            groupPages[menu] = filterPages;
        }
    });
};
exports.handleIgnorePages = handleIgnorePages;
const distinguishSpecifiedSortPages = (pages) => pages
    .reduce((acc, page) => {
    if (page.frontmatter.autoPrev || page.frontmatter.autoNext) {
        acc.specifiedSortPages.push(page);
    }
    else {
        acc.defaultPages.push(page);
    }
    return acc;
}, {
    specifiedSortPages: [],
    defaultPages: []
});
exports.distinguishSpecifiedSortPages = distinguishSpecifiedSortPages;
const groupPages = (pages, key) => pages
    .map(page => page[key])
    .reduce((acc, cur, i) => {
    acc[cur] = (acc[cur] || []).concat(pages[i]);
    return acc;
}, {});
const groupPagesByMenuPath = (pages) => groupPages(pages, 'menuPath');
exports.groupPagesByMenuPath = groupPagesByMenuPath;
