<script setup lang="ts">
import { computed } from "vue"

/**
 * A date-like value displayed using the visitor's locale.
 */
const props = defineProps<{
    /** A Date, parseable date string, or Unix timestamp in milliseconds. */
    value: Date | string | number
}>()

const date = computed(() => new Date(props.value))
const datetime = computed(() => date.value.toISOString())
const formatted = computed(() => new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short"
}).format(date.value))
</script>

<template>
    <time :datetime="datetime">{{ formatted }}</time>
</template>
