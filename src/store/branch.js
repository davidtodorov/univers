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
            state.branches = branches;
        },
        setCurrentBranch(state, branch) {
            state.currentBranch = branch;
        },
        addProductBranch(state, branch) {
            state.productBranches.push(branch);
        },
        removeProductBranch(state, id) {
            state.productBranches = state.productBranches.filter(p => p._id != id);
        }
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
            //maybe try with data: {} || /branches/
            return axios.get("/branches", {
                params: {
                    productId
                }
            }).then(res => {
                commit('setProductBranches', res.data);
                return Promise.resolve();
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
        addBranch({ commit }, { name, description, productId }) {
            return axios.post('branches/', { name, description, productId })
                .then(res => {
                    commit('addProductBranch', res.data)
                    return Promise.resolve()
                }).catch(err => {
                    Promise.reject(err)
                });
        },
        deleteProduct({ commit }, { id }) {
            return axios.delete('/products', { id }).then(() => {
                commit('removeProduct', id);
                return Promise.resolve()
            }).catch(err => {
                Promise.reject(err);
            })
        }
    }
}

export default product;