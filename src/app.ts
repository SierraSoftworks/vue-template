import Vue from "vue";

import "./components/index";
import "./filters/index";
import "./views/index";

import { store } from "./store";
import { router } from "./router";

export const app = new Vue({
    el: "#app",
    data: {

    },
    store,
    router,
    computed: {
        loading(): boolean {
            return (this as any).$store.state.loading
        },
        api(): string {
            return (this as any).$store.state.api
        },

        username(): string {
            return (this as any).$store.state.username
        },
        error(): Error {
            return (this as any).$store.state.requestError
        }
    },
    watch: {
        error(err) {
            if (!err) return
            (this as any).$notify.error({
                title: `${err.code || 500} ${err.name || 'Server Error'}`,
                message: err.message || err,
                duration: 0
            })
        }
    },
    methods: {

    }
})
