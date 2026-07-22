<script setup lang="ts">
import { storeToRefs } from "pinia"

import { useAppStore } from "./store"

const store = useAppStore()
const { loading, requestError } = storeToRefs(store)
</script>

<template>
    <div class="app-shell">
        <aside class="side-menu">
            <h1>vue-template</h1>
            <nav>
                <RouterLink to="/">Home</RouterLink>
            </nav>
        </aside>

        <main>
            <p v-if="loading" role="status">Loading…</p>
            <p v-if="requestError" class="error" role="alert">
                {{ requestError.message }}
            </p>
            <RouterView />
        </main>
    </div>
</template>
