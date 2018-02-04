import Vue from "vue";
import VueRouter from "vue-router";
import {Route} from "vue-router";
import {store} from "./store";

Vue.use(VueRouter);

/**
 * Helper method to parse query parameters and route parameters into
 * a route's `props` property. Define the route with `{ props: routeProps }`
 * to enable this.
 * @param route The route that should have its properties populated
 */
function routeProps(route: Route) {
    return Object.assign({}, route.query, route.params);
}

/**
 * Allows you to load a component asynchronously, provided that component
 * exports itself as the default export on its module.
 * @param module The path of the module that the component is defined in
 */
function asyncComponent(module: string) {
    return () => new Promise((resolve) => {
        requirejs([module], function(component) {
            resolve(component.default)
        })
    })
}

const routes = [
    { name: 'home', path: "/", component: asyncComponent("views/home") }
]

export const router = new VueRouter({
    routes,
    mode: "history",
    linkActiveClass: "active"
})