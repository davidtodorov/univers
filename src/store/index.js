import Vue from 'vue';
import Vuex, { createNamespacedHelpers } from 'vuex';
//import createPersistedState from "vuex-persistedstate";

import userModule from './user'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user: userModule
    }
    // plugins: [createPersistedState()]
})

export default store;

export const userHelpers = createNamespacedHelpers('user');
