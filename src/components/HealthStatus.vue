<script setup lang="ts">
import { ref } from "vue"

import { ApiClient, getHealth, type Health } from "../api"
import { useAppStore } from "../store"
import DateTime from "./DateTime.vue"

const store = useAppStore()
const health = ref<Health | null>(null)

async function checkHealth() {
    store.setLoading(true)
    store.setRequestError(null)

    try {
        health.value = await getHealth(new ApiClient(store.api))
        store.connected = true
    } catch (error) {
        store.connected = false
        store.setRequestError(
            error instanceof Error ? error : new Error("Unable to contact the API")
        )
    } finally {
        store.setLoading(false)
    }
}
</script>

<template>
    <section class="health-status">
        <h3>API health</h3>
        <p v-if="health">
            Connected to an API started <DateTime :value="health.started" />.
        </p>
        <p v-else>Use this example to connect the view, store, and typed API client.</p>
        <el-button type="primary" :loading="store.loading" @click="checkHealth">
            Check API
        </el-button>
    </section>
</template>
