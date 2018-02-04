import Vue from "vue";
import * as Vuex from "vuex";

Vue.use(Vuex);

export const MUT_CONNECTED = "connected"
export const MUT_DISCONNECTED = "disconnected"
export const MUT_SET_API = "set-api"
export const MUT_REQUEST_ERROR = "set-request-error"
export const MUT_LOADING = "set-loading"

export const MUT_SET_USERNAME = "set-username"

export const ACT_CONNECT = "connect"
export const ACT_DISCONNECT = "disconnect"
export const ACT_REFRESH = "refresh"

interface StoreData {
    api: string;

    connected: boolean;
    loading: boolean;
    requestError: Error;

    username: string;
}

export const store = new Vuex.Store<StoreData>({
    state: {
        api: localStorage.getItem("api:url") || window.location.origin,
        connected: false,
        requestError: null,
        loading: false,

        username: localStorage.getItem("username") || ""
    },
    mutations: {
        [MUT_SET_API] (state, url: string) {
            state.api = url
            localStorage.setItem("api:url", url)
        },
        [MUT_REQUEST_ERROR] (state, error: Error) {
            state.requestError = error
        },
        [MUT_LOADING] (state, loading: boolean) {
            state.loading = loading
        },

        [MUT_SET_USERNAME] (state, person: string) {
            state.username = person
            localStorage.setItem("username", person)
        }
    },
    actions: {
        
    },
    getters: {
        
    }
})