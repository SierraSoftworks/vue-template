import { createRouter, createWebHistory } from "vue-router"

export const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./views/HomeView.vue")
        }
    ]
})