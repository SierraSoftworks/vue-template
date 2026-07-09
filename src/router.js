"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const vue_1 = __importDefault(require("vue"));
const vue_router_1 = __importDefault(require("vue-router"));
vue_1.default.use(vue_router_1.default);
/**
 * Helper method to parse query parameters and route parameters into
 * a route's `props` property. Define the route with `{ props: routeProps }`
 * to enable this.
 * @param route The route that should have its properties populated
 */
function routeProps(route) {
    return Object.assign({}, route.query, route.params);
}
/**
 * Allows you to load a component asynchronously, provided that component
 * exports itself as the default export on its module.
 * @param module The path of the module that the component is defined in
 */
function asyncComponent(module) {
    return () => new Promise((resolve) => {
        requirejs([module], function (component) {
            resolve(component.default);
        });
    });
}
const routes = [
    { name: 'home', path: "/", component: asyncComponent("views/home") }
];
exports.router = new vue_router_1.default({
    routes,
    mode: "history",
    linkActiveClass: "active"
});
