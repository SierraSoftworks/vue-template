import { createPinia } from "pinia"
import { createApp } from "vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

import App from "./App.vue"
import { router } from "./router"
import "./index.css"

createApp(App)
    .use(createPinia())
    .use(router)
    .use(ElementPlus)
    .mount("#app")
