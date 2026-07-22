<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
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
