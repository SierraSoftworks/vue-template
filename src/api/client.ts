import { buildQuery, buildUrl, handleResponse } from "./helpers"

type Query = Record<string, string | number | boolean | null | undefined>

export class ApiClient {
    constructor(private readonly baseUrl: string) {}

    async request<T>(path: string, init?: RequestInit) {
        const response = await fetch(buildUrl(this.baseUrl, path), {
            ...init,
            headers: {
                "Accept": "application/json",
                ...init?.headers
            }
        })

        return handleResponse<T>(response)
    }

    get<T>(path: string, query: Query = {}) {
        return this.request<T>(`${path}${buildQuery(query)}`)
    }
}
