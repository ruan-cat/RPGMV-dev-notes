"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterRootMarkdowns = exports.getMenuPath = exports.padWithSlash = void 0;
const padWithSlash = (path) => `${path.startsWith('/') ? '' : '/'}${path}${path.endsWith('/') ? '' : '/'}`;
exports.padWithSlash = padWithSlash;
const getMenuPath = (path) => exports.padWithSlash(path.split('/').slice(0, -1).join('/'));
exports.getMenuPath = getMenuPath;
const filterRootMarkdowns = (page) => page.menuPath !== '//';
exports.filterRootMarkdowns = filterRootMarkdowns;
