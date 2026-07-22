import { buildQuery, buildUrl, handleResponse } from "./helpers"

type Query = Record<string, string | number | boolean | null | undefined>

/**
 * A small HTTP client which makes typed requests relative to an API base URL.
 *
 * @example
 * const client = new ApiClient("https://api.example.com")
 * const users = await client.get<User[]>("/api/v1/users", { active: true })
 */
export class ApiClient {
    /**
     * Creates an API client.
     *
     * @param baseUrl Base URL used for every request.
     */
    constructor(private readonly baseUrl: string) {}

    /**
     * Makes an HTTP request and parses its response.
     *
     * An `Accept: application/json` header is included by default. Headers in
     * `init` take precedence over this default.
     *
     * @typeParam T Expected response body type.
     * @param path Path relative to the configured base URL.
     * @param init Standard Fetch API request options.
     * @returns The parsed JSON or text response body.
     * @throws {@link ApiError} when the server returns a non-success status.
     */
    async request<T>(path: string, init?: RequestInit): Promise<T> {
        const response = await fetch(buildUrl(this.baseUrl, path), {
            ...init,
            headers: {
                "Accept": "application/json",
                ...init?.headers
            }
        })

        return handleResponse<T>(response)
    }

    /**
     * Makes a typed GET request with optional query parameters.
     *
     * @typeParam T Expected response body type.
     * @param path Path relative to the configured base URL.
     * @param query Query values. `null` and `undefined` values are omitted.
     * @returns The parsed JSON or text response body.
     * @throws {@link ApiError} when the server returns a non-success status.
     */
    get<T>(path: string, query: Query = {}): Promise<T> {
        return this.request<T>(`${path}${buildQuery(query)}`)
    }
}
