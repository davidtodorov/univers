import Vue from 'vue';
import Vuex, { createNamespacedHelpers } from 'vuex';
//import createPersistedState from "vuex-persistedstate";

import userModule from './user'
import productModule from './product'
import branchModule from './branch'
import versionModule from './version'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user: userModule,
        product: productModule,
        branch: branchModule,
        version: versionModule,
    },
    actions: {
        clearAll({ commit }) {
            commit('user/resetState')
            commit('product/resetState')
            commit('branch/resetState')
            commit('version/resetState')
            return Promise.resolve();
        }
    }
    // plugins: [createPersistedState()]
})

export default store;

export const userHelpers = createNamespacedHelpers('user');
export const productHelpers = createNamespacedHelpers('product');
