import Vue from "vue"
import * as dayjs from "dayjs"
import * as dayjsrt from "dayjs/plugin/relativeTime"
import * as dayjscal from "dayjs/plugin/calendar"

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