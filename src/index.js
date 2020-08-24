const isDebug = window.location.hostname === "localhost";
const debugSuffix = isDebug ? "" : ".min"

require.config({
    paths: {
    },
    map: {
        "*": {

        }
    },
    packages: [
        {
            name: "vue-module",
            location: "https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.12",
            main: "vue" + debugSuffix
        },
        {
            name: "vue-router-module",
            location: "https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.4.3",
            main: "vue-router" + debugSuffix
        },
        {
            name: "vuex",
            location: "https://cdnjs.cloudflare.com/ajax/libs/vuex/3.5.1",
            main: "vuex" + debugSuffix
        },
        {
            name: "dayjs",
            location: "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.8.34",
            main: "dayjs.min"
        },
        {
            name: "ELEMENT",
            location: "https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.13.2",
            main: "index"
        },
        {
            name: "vue-class-component",
            location: "https://cdn.jsdelivr.net/npm/vue-class-component@7.2.5",
            main: "dist/vue-class-component" + debugSuffix
        },
        {
            name: "highlight-js",
            location: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.3",
            main: "highlight.min"
        },
        {
            name: "markdown-it",
            location: "https://cdnjs.cloudflare.com/ajax/libs/markdown-it/11.0.0",
            main: "markdown-it" + debugSuffix
        },
        {
            name: "text",
            location: "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12",
            main: "text" + debugSuffix
        }
    ],
    shim: {
        "ELEMENT": {
            deps: ["vue"]
        }
    },
    deps: [
        "vue-module",
        "vue-router-module",
        "vuex"
    ],
    callback: () => {
        requirejs(["vue", "ELEMENT", "ELEMENT/locale/en"], (Vue, ElementUI, locale) => {
            Vue.use(ElementUI, { locale })

            requirejs(["app"], function (app) { })
        })
    }
})

define("vue", ["vue-module"], (Vue) => {
    Vue.default = Vue
    return Vue
})

define("vue-router", ["vue-router-module"], (VueRouter) => {
    VueRouter.default = VueRouter
    return VueRouter
})
