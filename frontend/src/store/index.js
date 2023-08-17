import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
  },

  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
  },

  actions: {
    getProducts: async (context) => {
      fetch(" http://localhost:3000/products")
        .then((res) => res.json())
        .then((products) => context.commit("setProducts", products));
    },
  },
});




  