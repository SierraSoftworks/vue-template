import Vue from "vue"
import Component from "vue-class-component"
import * as MarkdownIt from "markdown-it"
import * as hljs from "highlight-js"

@Component({
    name: "markdown",
    template: `<span v-html="compiledHtml"></span>`,
    props: {
        value: String,
        inline: {
            required: false,
            type: Boolean,
            default: false
        }
    }
})
export default class Markdown extends Vue {
    value!: string
    inline!: boolean

    get compiledHtml() {
        if (this.inline) return this.markdownConverter.renderInline(this.value || "")
        return this.markdownConverter.render(this.value || "")
    }

    private markdownConverter = new MarkdownIt({
        html: true,
        linkify: true,
        highlight: (src: string, lang: string) => {
            if (!lang) return src

            try {
                return hljs.highlight(lang, src).value
            } catch (err) {
                console.debug(`Unknown language '${lang}' used in Markdown`)
                return src
            }
        }
    })
}