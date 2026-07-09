"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.json = void 0;
const vue_1 = __importDefault(require("vue"));
const json = vue_1.default.filter("json", value => JSON.stringify(value, null, 2));
exports.json = json;
