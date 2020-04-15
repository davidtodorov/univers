import axios from '@/axios';

const getDefaultState = () => {
    return {
        products: [],
        currentProduct: {}
    }
}


const product = {
    namespaced: true,
    state: getDefaultState(),
    getters: {
        products(state) {
            return state.products;
        },
        currentProduct(state) {
            return state.currentProduct;
        }
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        setCurrentProduct(state, product) {
            state.currentProduct = product;
        },
        resetCurrentProduct(state) {
            state.currentProduct = null;
        },
        addProduct(state, product) {
            state.products.push(product);
        },
        removeProduct(state, id) {
            state.products = state.products.filter(p => p._id != id);
        },
        resetState(state) {
            const initial = getDefaultState();
            Object.keys(initial).forEach(key => { state[key] = initial[key] })
        }
    },
    actions: {
        getProducts({ commit }) {
            console.log("in get products action")
            return axios.get('/products')
                .then((res) => {
                    commit('setProducts', res.data);
                    return Promise.resolve();
                }).catch(err => {
                    return Promise.reject(err)
                })
        },
        getProduct({ commit }, { id }) {
            return axios.get("/products/", {
                params: {
                    id
                }
            }).then(res => {
                commit('setCurrentProduct', res.data);
                return Promise.resolve();
            }).catch(err => {
                return Promise.reject(err)
            });
        },
        addProduct({ commit }, { name, description }) {
            return axios.post('products/', { name, description })
                .then(res => {
                    commit('addProduct', res.data)
                    return Promise.resolve()
                }).catch(err => {
                    Promise.reject(err)
                });
        },
        deleteProduct({ commit }, { id }) {
            // eslint-disable-next-line no-debugger
            debugger
            axios.delete("/products/", {
                params: {
                    id
                }
            }).then(() => {
                commit('removeProduct', id);
                return Promise.resolve()
            }).catch(err => {
                Promise.reject(err);
            })
        }
    }
}

export default product;