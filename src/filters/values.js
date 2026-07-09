"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultValue = void 0;
const vue_1 = __importDefault(require("vue"));
const defaultValue = vue_1.default.filter("default", (value, def) => (value === null || value === undefined) ? def : value);
exports.defaultValue = defaultValue;
