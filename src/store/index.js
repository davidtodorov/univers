import Vue from 'vue';
import Vuex, { createNamespacedHelpers } from 'vuex';
//import createPersistedState from "vuex-persistedstate";

import userModule from './user'
import productModule from './product'
import branchMudle from './branch'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user: userModule,
        product: productModule,
        branch: branchMudle
    }
    // plugins: [createPersistedState()]
})

export default store;

export const userHelpers = createNamespacedHelpers('user');
export const productHelpers = createNamespacedHelpers('product');
