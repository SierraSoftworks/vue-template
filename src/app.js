"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const vue_1 = __importDefault(require("vue"));
require("./components/index");
require("./filters/index");
require("./views/index");
const store_1 = require("./store");
const router_1 = require("./router");
exports.app = new vue_1.default({
    el: "#app",
    data: {},
    store: store_1.store,
    router: router_1.router,
    computed: {
        loading() {
            return this.$store.state.loading;
        },
        api() {
            return this.$store.state.api;
        },
        username() {
            return this.$store.state.username;
        },
        error() {
            return this.$store.state.requestError;
        }
    },
    watch: {
        error(err) {
            if (!err)
                return;
            this.$notify.error({
                title: `${err.code || 500} ${err.name || 'Server Error'}`,
                message: err.message || err,
                duration: 0
            });
        }
    },
    methods: {}
});
