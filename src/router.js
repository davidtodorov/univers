import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/authentication/Login'
import Register from '@/components/authentication/Register'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
        }
        // {
        //     path: '/settings',
        //     name: 'Settings',
        //     component: Settings,
        //     meta: {
        //         requiresAuth: true
        //     }
        // }
    ]
})

export default router