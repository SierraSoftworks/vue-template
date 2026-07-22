import { defineStore } from "pinia"

export const useAppStore = defineStore("app", {
    state: () => ({
        api: localStorage.getItem("api:url") ?? window.location.origin,
        connected: false,
        loading: false,
        requestError: null as Error | null,
        username: localStorage.getItem("username") ?? ""
    }),
    actions: {
        setApi(url: string) {
            this.api = url
            localStorage.setItem("api:url", url)
        },
        setLoading(loading: boolean) {
            this.loading = loading
        },
        setRequestError(error: Error | null) {
            this.requestError = error
        },
        setUsername(username: string) {
            this.username = username
            localStorage.setItem("username", username)
        }
    }
})