import Vue from "vue";
import * as dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";

dayjs.extend(utc)

Vue.component("date", {
    template: `<time :datetime="value">{{formatted}}</time>`,
    props: {
        value: {
            required: true
        },
        format: {
            type: String,
            required: false,
            default: "YYYY-MM-DD HH:mm:ss"
        }
    },
    computed: {
        utc_enabled() {
            return this.$store.state.utc
        },
        formatted() {
            if (this.utc_enabled)
                return dayjs.utc(this.value).format(this.format)
            else
                return dayjs.utc(this.value).local().format(this.format)
        }
    }
})