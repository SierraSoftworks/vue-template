import type { ApiClient } from "./client"

/**
 * Health information returned by the example API endpoint.
 */
export interface Health {
    /** ISO 8601 timestamp at which the API started. */
    started: string
}

/**
 * Fetches the current API health information.
 *
 * @param client Configured API client to use for the request.
 * @returns The API health information.
 * @throws {@link ApiError} when the request is unsuccessful.
 */
export function getHealth(client: ApiClient) {
    return client.get<Health>("/api/v1/healthz")
}
