import axios from '@/axios';

const getDefaultState = () => {
    return {
        products: [],
        selectedProduct: null
    }
}


const product = {
    namespaced: true,
    state: getDefaultState(),
    getters: {
        products(state) {
            return state.products;
        },
        selectedProduct(state) {
            return state.selectedProduct;
        }
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        setSelectedProduct(state, product) {
            state.selectedProduct = product;
        },
        resetSelectedProduct(state) {
            state.selectedProduct = null;
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
            return axios.get("/product/", { id })
                .then(res => {
                    console.log(res);
                    commit('setSelectedProduct', res.data);
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