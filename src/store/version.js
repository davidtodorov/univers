import axios from '@/axios';

const getDefaultState = () => {
    return {
        productVersions: [],
        branchVersions: []
    }
}

const product = {
    namespaced: true,
    state: getDefaultState(),
    getters: {
        productVersions(state) {
            return state.productVersions;
        },
        branchVersions(state) {
            return state.branchVersions;
        },
    },
    mutations: {
        setProductVersions(state, versions) {
            state.productVersions = versions;
        },
        setBranchVersions(state, versions) {
            state.branchVersions = versions;
        },
        addProductVersion(state, version) {
            state.productVersions.push(version);
        },
        addBranchVersion(state, version) {
            state.branchVersions.push(version);
        },
        removeProductVersion(state, id) {
            state.productVersions = state.productVersions.filter(v => v._id != id);
        },
        removeBranchVersion(state, id) {
            state.branchVersions = state.branchVersions.filter(v => v._id != id);
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
        getBranchVersions({ commit }, { branchId }) {
            return axios.get("/versions", {
                params: {
                    branchId
                }
            }).then(res => {
                commit('setBranchVersions', res.data);
                return Promise.resolve();
            }).catch(err => {
                return Promise.reject(err)
            });
        },
        addVersion({ commit }, { versionNumber, branchId, productId }) {
            return axios.post('versions/', { versionNumber, branchId, productId })
                .then(res => {
                    commit('addProductVersion', res.data);
                    commit('addBranchVersion', res.data);
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