import Vue from 'vue';
import Vuex, { createNamespacedHelpers } from 'vuex';
import userModule from './user'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user: userModule
    }
})

export default store;

export const userHelpers = createNamespacedHelpers('user');
