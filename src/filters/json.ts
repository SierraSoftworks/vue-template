import Vue from "vue"

const json = Vue.filter("json", value => JSON.stringify(value, null, 2))
export {
    json
}