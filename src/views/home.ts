import Vue from "vue"
import Component from "vue-class-component"
import {RawLocation} from "vue-router"
import {router} from "../router"

import * as template from "text!./home.html"
@Component({
    template
})
export default class HomeView extends Vue {
    navigate(name: string, opts?: RawLocation) {
        if (~name.indexOf("://")) return window.open(name, "_blank")
        router.push(Object.assign({
            name
        }, opts))
    }
}