import axios from '@/axios';

const getDefaultState = () => {
    return {
        allBranches: [],
        productBranches: [],
        currentBranch: {}
    }
}


const product = {
    namespaced: true,
    state: getDefaultState(),
    getters: {
        allBranches(state) {
            return state.allBranches;
        },
        productBranches(state) {
            return state.productBranches;
        },
        currentBranch(state) {
            return state.currentBranch;
        }
    },
    mutations: {
        setAllBranches(state, branches) {
            state.allBranches = branches;
        },
        setProductBranches(state, branches) {
            state.productBranches = branches;
        },
        setCurrentBranch(state, branch) {
            state.currentBranch = branch;
        },
        addProductBranch(state, branch) {
            state.productBranches.push(branch);
        },
        removeProductBranch(state, id) {
            state.productBranches = state.productBranches.filter(p => p._id != id);
        },
        resetState(state) {
            const initial = getDefaultState();
            Object.keys(initial).forEach(key => { state[key] = initial[key] })
        },
    },
    actions: {
        getAllBranches({ commit }) {
            return axios.get('/branches')
                .then((res) => {
                    commit('setAllBranches', res.data);
                    return Promise.resolve();
                }).catch(err => {
                    return Promise.reject(err)
                })
        },
        getProductBranches({ commit }, { productId }) {
            return axios.get("/branches", {
                params: {
                    productId
                }
            }).then(res => {
                commit('setProductBranches', res.data);
                if (res.data.length > 0) {
                    commit('setCurrentBranch', res.data[0]);
                } else {
                    commit('setCurrentBranch', null);
                }
                return Promise.resolve(res.data);
            }).catch(err => {
                return Promise.reject(err)
            });
        },
        getBranch({ commit }, { id }) {
            return axios.get("/branches", {
                params: {
                    id
                }
            }).then(res => {
                commit('setCurrentBranch', res.data);
                return Promise.resolve();
            }).catch(err => {
                return Promise.reject(err)
            });
        },
        addBranch({ commit }, { name, description, currentVersionId, productId }) {
            return axios.post('branches/', { name, description, currentVersionId, productId })
                .then(res => {
                    commit('addProductBranch', res.data)
                    return Promise.resolve()
                }).catch(err => {
                    Promise.reject(err)
                });
        },
        updateBranch({ commit }, { id, name, description, currentVersionId, canRelease }) {
            return axios.put('branches/', { id, name, description, currentVersionId, canRelease })
                .then(res => {
                    commit('addProduct', res.data)
                    return Promise.resolve()
                }).catch(err => {
                    Promise.reject(err)
                });
        },
        deleteCurrentBranch({ commit }, { id }) {
            return axios.delete("/branches/", {
                params: {
                    id
                }
            }).then(() => {
                commit('removeProductBranch', id);
                return Promise.resolve()
            }).catch(err => {
                Promise.reject(err);
            })
        }
    }
}

export default product;