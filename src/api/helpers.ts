export class ApiError extends Error {
    constructor(
        message: string,
        readonly status: number,
        readonly code?: string
    ) {
        super(message)
        this.name = "ApiError"
    }
}

export function buildUrl(baseUrl: string, path: string) {
    return `${baseUrl.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`
}

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
