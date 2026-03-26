import Vue from "vue";
import * as dayjs from "dayjs";
import utc = require("dayjs/plugin/utc");

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
        utc_enabled(): boolean {
            return (this as any).$store.state.utc
        },
        formatted(): string {
            const vm = this as any
            if (this.utc_enabled)
                return dayjs.utc(vm.value).format(vm.format)
            else
                return dayjs.utc(vm.value).local().format(vm.format)
        }
    }
})