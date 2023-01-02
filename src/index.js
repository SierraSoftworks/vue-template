const isDebug = window.location.hostname === "localhost";
const debugSuffix = isDebug ? "" : ".min"

require.config({
    paths: {
        "vue-class-component": "https://cdn.jsdelivr.net/npm/vue-class-component@7.2.6/dist/vue-class-component"+ debugSuffix,
        "highlight-js": "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight"+ debugSuffix,
        "markdown-it": "https://cdnjs.cloudflare.com/ajax/libs/markdown-it/13.0.1/markdown-it"+ debugSuffix,
        "text": "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text"+ debugSuffix,
    },
    map: {
        "*": {

        }
    },
    packages: [
        {
            name: "vue-module",
            location: "https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.14",
            main: "vue" + debugSuffix
        },
        {
            name: "vue-router-module",
            location: "https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.6.5",
            main: "vue-router" + debugSuffix
        },
        {
            name: "vuex",
            location: "https://cdnjs.cloudflare.com/ajax/libs/vuex/3.6.2",
            main: "vuex" + debugSuffix
        },
        {
            name: "dayjs",
            location: "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.7",
            main: "dayjs.min"
        },
        {
            name: "ELEMENT",
            location: "https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.15.12",
            main: "index"
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
