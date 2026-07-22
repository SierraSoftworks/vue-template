import { defineStore } from "pinia"

/**
 * Global application state for API connectivity and user preferences.
 */
export const useAppStore = defineStore("app", {
    state: () => ({
        api: localStorage.getItem("api:url") ?? window.location.origin,
        connected: false,
        loading: false,
        requestError: null as Error | null,
        username: localStorage.getItem("username") ?? ""
    }),
    actions: {
        /**
         * Updates the API base URL and persists it for future visits.
         */
        setApi(url: string) {
            this.api = url
            localStorage.setItem("api:url", url)
        },
        /**
         * Updates whether an API request is in progress.
         */
        setLoading(loading: boolean) {
            this.loading = loading
        },
        /**
         * Records an API request error, or clears it when passed `null`.
         */
        setRequestError(error: Error | null) {
            this.requestError = error
        },
        /**
         * Updates the username and persists it for future visits.
         */
        setUsername(username: string) {
            this.username = username
            localStorage.setItem("username", username)
        }
    }
})