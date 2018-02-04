import Vue from "vue"

const defaultValue = Vue.filter("default", (value, def) => (value === null || value === undefined) ? def : value)

export {
    defaultValue
}