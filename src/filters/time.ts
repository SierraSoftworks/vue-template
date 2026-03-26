import Vue from "vue"
import * as dayjs from "dayjs"
import dayjsrt = require("dayjs/plugin/relativeTime")
import dayjscal = require("dayjs/plugin/calendar")

dayjs.extend(dayjsrt)
dayjs.extend(dayjscal)

const relativeTime = Vue.filter("relativeTime", value => dayjs.utc(value).local().fromNow())
const calendarTime = Vue.filter("calendarTime", (value) => dayjs.utc(value).calendar())
const formatTime = Vue.filter("formatTime", (value, format) => dayjs.utc(value).format(format || "YYYY-MM-DD HH:mm"))

export {
    relativeTime,
    calendarTime,
    formatTime
}