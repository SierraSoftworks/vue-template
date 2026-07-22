/**
 * An error returned by an API request.
 */
export class ApiError extends Error {
    /**
     * Creates an API error.
     *
     * @param message Human-readable description of the failure.
     * @param status HTTP response status.
     * @param code Optional application-specific error code from the response.
     */
    constructor(
        message: string,
        readonly status: number,
        readonly code?: string
    ) {
        super(message)
        this.name = "ApiError"
    }
}

/**
 * Joins an API base URL and path with one separating slash.
 *
 * @param baseUrl API base URL, with or without a trailing slash.
 * @param path Relative path, with or without a leading slash.
 * @returns The combined URL.
 *
 * @example
 * buildUrl("https://api.example.com/", "/api/v1/users")
 * // "https://api.example.com/api/v1/users"
 */
export function buildUrl(baseUrl: string, path: string) {
    return `${baseUrl.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`
}

/**
 * Serializes values as a URL query string.
 *
 * @param values Values to serialize. `null` and `undefined` are omitted.
 * @returns An encoded query string including `?`, or an empty string when no
 * values are present.
 */
export function buildQuery(
    values: Record<string, string | number | boolean | null | undefined>
) {
    const query = new URLSearchParams()

    for (const [key, value] of Object.entries(values)) {
        if (value !== null && value !== undefined) {
            query.set(key, String(value))
        }
    }

    const serialized = query.toString()
    return serialized ? `?${serialized}` : ""
}

/**
 * Parses a Fetch API response as JSON or text based on its content type.
 *
 * @typeParam T Expected response body type.
 * @param response Response to parse.
 * @returns The parsed response body.
 * @throws {@link ApiError} when the response has a non-success status.
 */
export async function handleResponse<T>(response: Response): Promise<T> {
    const isJson = response.headers.get("content-type")?.includes("application/json")
    const body = isJson ? await response.json() : await response.text()

    if (!response.ok) {
        const error = typeof body === "object" && body !== null
            ? body as { message?: string, code?: string }
            : {}

        throw new ApiError(
            error.message ?? response.statusText ?? "API request failed",
            response.status,
            error.code
        )
    }

    return body as T
}
