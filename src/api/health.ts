import type { ApiClient } from "./client"

export interface Health {
    started: string
}

export function getHealth(client: ApiClient) {
    return client.get<Health>("/api/v1/healthz")
}
