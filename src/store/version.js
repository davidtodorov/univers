import axios from '@/axios';

const getDefaultState = () => {
    return {
        productVersions: [],
    }
}

const product = {
    namespaced: true,
    state: getDefaultState(),
    getters: {
        productVersions(state) {
            return state.productVersions;
        },
    },
    mutations: {
        setProductVersions(state, versions) {
            state.productVersions = versions;
        },
        addProductVersion(state, version) {
            state.productVersions.push(version);
        },
        removeProductVersion(state, id) {
            state.productVersions = state.productVersions.filter(p => p._id != id);
        },
        resetState(state) {
            const initial = getDefaultState();
            Object.keys(initial).forEach(key => { state[key] = initial[key] })
        },
    },
    actions: {
        getProductVersions({ commit }, { productId }) {
            return axios.get("/versions", {
                params: {
                    productId
                }
            }).then(res => {
                commit('setProductVersions', res.data);
                return Promise.resolve();
            }).catch(err => {
                return Promise.reject(err)
            });
        },
        addVersion({ commit }, { versionNumber, productId }) {
            return axios.post('versions/', { versionNumber, productId })
                .then(res => {
                    commit('addProductVersion', res.data)
                    return Promise.resolve()
                }).catch(err => {
                    Promise.reject(err)
                });
        },
        deleteProductVersion({ commit }, { id }) {
            return axios.delete('/versions', { id }).then(() => {
                commit('removeProductVersion', id);
                return Promise.resolve()
            }).catch(err => {
                Promise.reject(err);
            })
        }
    }
}

export default product;