window.process = {
    env: {
        NODE_ENV: "development"
    }
}

require.config({
    paths: {
        "vue-module": "from-cdn",
        "vuex": "from-cdn",
        "vue-router-module": "from-cdn",
        "element-ui": "from-cdn",
        "vue-class-component": "https://cdn.jsdelivr.net/npm/vue-class-component@6.1.2/dist/vue-class-component.min",

        "moment": "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min",
        "markdown-it": "https://cdnjs.cloudflare.com/ajax/libs/markdown-it/8.4.1/markdown-it.min",
        "text": "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min",
        "highlight-js": "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min"
    },
    map: {
        "*": {

        }
    },
    shim: {
        "vue-module": {
            exports: "Vue"
        },
        "vue-router-module": {
            exports: "VueRouter"
        },
        "vuex": {
            exports: "Vuex"
        },
        "element-io": {
            exports: "ELEMENT"
        },
        "moment": {
            exports: "moment"
        },
        "showdown": {
            exports: "showdown"
        }
    }
})

define("vue", ["vue-module"], (Vue) => ({ "default": Vue }))
define("vue-router", ["vue-router-module"], (VueRouter) => ({ "default": VueRouter }))

requirejs(["vue", "element-ui"], (Vue, ELEMENT) => {
    requirejs(["app"], function(app) {})
})
