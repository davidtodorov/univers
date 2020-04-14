import Vue from 'vue';
import Vuex, { createNamespacedHelpers } from 'vuex';
//import createPersistedState from "vuex-persistedstate";

import userModule from './user'
import productModule from './product'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user: userModule,
        product: productModule
    }
    // plugins: [createPersistedState()]
})

export default store;

export const userHelpers = createNamespacedHelpers('user');
export const productHelpers = createNamespacedHelpers('product');
