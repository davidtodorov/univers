import axios from '@/axios';

const user = {
    namespaced: true,
    state: {
        currentUser: null
    },
    getters: {
        currentUser(state) {
            return state.currentUser;
        }
    },
    mutations: {
        setCurrentUser(state, user) {
            state.currentUser = user;
        }
    },
    actions: {
        register({ commit }, { email, username, password}) {
            return axios.post('/user/register', {
                email,
                username,
                password
            }).then((res) => {
                commit('setCurrentUser', res.data);
                return Promise.resolve();
            }).catch(err => {
                return Promise.reject(err)
            })
        },
        login({ commit }, { email, password }) {
            return axios.post("/user/login", {
                email,
                password
            }).then((res) => {
                console.log(res);
                commit('setCurrentUser', res.data);
                return Promise.resolve();
            }).catch(err => {
                return Promise.reject(err)
            })
        }
    }
}

export default user;