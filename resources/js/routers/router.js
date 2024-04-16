import * as VueRouter from "vue-router";
import routes from "@/routers/routes";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory('/'),
    routes,
})

router.beforeEach((to,from,next) => {
    const token = localStorage.getItem('x_xsrf_token')

    if (!token) {
        if (to.name === 'user.login' || to.name === 'user.registration') {
            return next()
        }else {
            return next({
                name: 'user.login'
            })
        }
    }

    if (token) {
        if (to.name === 'user.login' || to.name === 'user.registration') {
            return next({
                name: 'user.personal'
            })
        }
    }
    next()
})
export default router;
