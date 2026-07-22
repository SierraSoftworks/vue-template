<script setup lang="ts">
import { DateTime, HealthStatus } from "../components"

const createdAt = new Date()
</script>

<template>
    <section>
        <h2>Vue 3 template</h2>
        <p>
            A lightweight starting point using Vue 3, Pinia, TypeScript, and Vite.
        </p>
        <p>This page was rendered <DateTime :value="createdAt" />.</p>
        <HealthStatus />
    </section>
</template>
