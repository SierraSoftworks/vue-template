import Vue from "vue";
import * as moment from "moment";

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
                return moment.utc(this.value).format(this.format)
            else
                return moment.utc(this.value).local().format(this.format)
        }
    }
})