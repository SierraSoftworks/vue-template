import Vue from "vue"
import * as moment from "moment"

const relativeTime = Vue.filter("relativeTime", value => moment.utc(value).local().fromNow())
const calendarTime = Vue.filter("calendarTime", (value) => moment.utc(value).calendar())
const formatTime = Vue.filter("formatTime", (value, format) => moment.utc(value).format(format || "YYYY-MM-DD HH:mm"))

export {
    relativeTime,
    calendarTime,
    formatTime
}