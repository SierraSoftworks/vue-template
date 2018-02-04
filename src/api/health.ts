import {store} from "../store";
import * as helpers from "./helpers";

export interface Health {
    started: Date;
}

/**
 * Queries the API server for its current health status
 */
export function getHealth() {
    return fetch(helpers.buildUrl(store.state.api, "/api/v1/healthz"))
        .then(res => helpers.apiHandleResponse<Health>(res, true))
}