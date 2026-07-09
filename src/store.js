"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.ACT_REFRESH = exports.ACT_DISCONNECT = exports.ACT_CONNECT = exports.MUT_SET_USERNAME = exports.MUT_LOADING = exports.MUT_REQUEST_ERROR = exports.MUT_SET_API = exports.MUT_DISCONNECTED = exports.MUT_CONNECTED = void 0;
const vue_1 = __importDefault(require("vue"));
const Vuex = __importStar(require("vuex"));
vue_1.default.use(Vuex);
exports.MUT_CONNECTED = "connected";
exports.MUT_DISCONNECTED = "disconnected";
exports.MUT_SET_API = "set-api";
exports.MUT_REQUEST_ERROR = "set-request-error";
exports.MUT_LOADING = "set-loading";
exports.MUT_SET_USERNAME = "set-username";
exports.ACT_CONNECT = "connect";
exports.ACT_DISCONNECT = "disconnect";
exports.ACT_REFRESH = "refresh";
exports.store = new Vuex.Store({
    state: {
        api: localStorage.getItem("api:url") || window.location.origin,
        connected: false,
        requestError: null,
        loading: false,
        username: localStorage.getItem("username") || ""
    },
    mutations: {
        [exports.MUT_SET_API](state, url) {
            state.api = url;
            localStorage.setItem("api:url", url);
        },
        [exports.MUT_REQUEST_ERROR](state, error) {
            state.requestError = error;
        },
        [exports.MUT_LOADING](state, loading) {
            state.loading = loading;
        },
        [exports.MUT_SET_USERNAME](state, person) {
            state.username = person;
            localStorage.setItem("username", person);
        }
    },
    actions: {},
    getters: {}
});
