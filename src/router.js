import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/authentication/Login'
import Register from '@/components/authentication/Register'
import ProductList from '@/components/products/ProductList'
import Product from '@/components/products/Product'
import Environments from '@/components/environments/Environments'

// import {userHelpers} from '@/store'
import store from '@/store'

import Cookies from 'js-cookie'

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
        },
        {
            path: '/products/:id',
            name: 'Product',
            component: Product,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/products',
            name: 'ProductList',
            component: ProductList,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/environments',
            name: 'Environments',
            component: Environments,
            meta: {
                requiresAuth: true
            }
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (!store.state.user.currentUser) {
            var authToken = Cookies.get('x-auth-token');
            if (authToken) {
                store.dispatch("user/getCurrentUser")
                    .then(() => {
                        return next()
                    })
                    .catch(() => {
                        next('/login')
                    });
            } else {
                next("/login")
            }
        } else {
            next();
        }
    } else {
        next();
    }
})

export default router