"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGitCreatedTime = exports.checkGit = void 0;
const execa = require("execa");
const path_1 = require("path");
const checkGit = (cwd) => {
    try {
        execa.commandSync('git log', { cwd });
        return true;
    }
    catch (_a) {
        return false;
    }
};
exports.checkGit = checkGit;
const getGitCreatedTime = (filepath) => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout } = yield execa('git', ['--no-pager', 'log', '--follow', '--format=%at', '--reverse', '--', path_1.basename(filepath)], {
        cwd: path_1.dirname(filepath)
    });
    return Number.parseInt(stdout, 10) * 1000;
});
exports.getGitCreatedTime = getGitCreatedTime;
