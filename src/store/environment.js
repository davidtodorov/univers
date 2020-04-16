import axios from '@/axios';

const getDefaultState = () => {
    return {
        productEnvironments: [],
    }
}

const product = {
    namespaced: true,
    state: getDefaultState(),
    getters: {
        productEnvironments(state) {
            return state.productEnvironments;
        },
    },
    mutations: {
        setProductEnvironments(state, environments) {
            state.productEnvironments = environments;
        },
        addProductEnvironment(state, environment) {
            state.productEnvironments.push(environment);
        },
        removeProductEnvironment(state, id) {
            state.productVersions = state.productVersions.filter(v => v._id != id);
        },
        resetState(state) {
            const initial = getDefaultState();
            Object.keys(initial).forEach(key => { state[key] = initial[key] })
        },
    },
    actions: {
        getProductEnvironments({ commit }, { productId }) {
            return axios.get("/environments", {
                params: {
                    productId
                }
            }).then(res => {
                commit('setProductEnvironments', res.data);
                return Promise.resolve();
            }).catch(err => {
                return Promise.reject(err)
            });
        },
        addEnvironment({ commit }, { name, description, branchId, versionId, productId }) {
            return axios.post('environments/', { name, description, branchId, versionId, productId })
                .then(res => {
                    commit('addProductEnvironment', res.data[0]);
                    return Promise.resolve()
                }).catch(err => {
                    Promise.reject(err)
                });
        },
        deleteProductVersion({ commit }, { id }) {
            return axios.delete('/environments', { id }).then(() => {
                commit('removeProductEnvironment', id);
                return Promise.resolve()
            }).catch(err => {
                Promise.reject(err);
            })
        }
    }
}

export default product;