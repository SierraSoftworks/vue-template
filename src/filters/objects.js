"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclude = exports.get = void 0;
const vue_1 = __importDefault(require("vue"));
const get = vue_1.default.filter("get", (value, path) => {
    if (!path)
        return value;
    return path.split(".").reduce((value, path) => {
        if (value === undefined)
            return undefined;
        if (Array.isArray(value)) {
            try {
                return value[parseInt(path)];
            }
            catch (e) { }
        }
        return value[path];
    }, value);
});
exports.get = get;
const exclude = vue_1.default.filter("exclude", (obj, ...fields) => {
    return Object.keys(obj).filter(f => !~fields.indexOf(f)).reduce((obj2, k) => {
        obj2[k] = obj[k];
        return obj2;
    }, {});
});
exports.exclude = exclude;
