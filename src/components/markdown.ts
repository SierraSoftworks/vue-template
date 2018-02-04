import Vue from "vue";
import * as showdown from "showdown";

const markdownConverter = new showdown.Converter({
    openLinksInNewWindow: true
})

Vue.component("markdown", {
    template: `<div v-html="compiledHtml"></div>`,
    props: ["value"],
    computed: {
        compiledHtml: function() {
            return markdownConverter.makeHtml(this.value || "")
        }
    }
})