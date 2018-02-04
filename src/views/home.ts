import Vue from "vue"
import Component from "vue-class-component"
import {RawLocation} from "vue-router"
import {router} from "../router"

@Component({
    template: `
    <el-container>
        <el-header>
            <h1>vue-template</h1>
        </el-header>
        <el-main>
            <p>
                This is a quick demo app which showcases how you can build a Vue application with TypeScript
                and absolutely <strong>no</strong> other transpilers or bundlers. It's pretty great...
            </p>
        </el-main>
    </el-container>
    `
})
export default class HomeView extends Vue {
    navigate(name: string, opts?: RawLocation) {
        if (~name.indexOf("://")) return window.open(name, "_blank")
        router.push(Object.assign({
            name
        }, opts))
    }
}