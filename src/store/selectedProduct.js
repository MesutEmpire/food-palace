export const selectedProduct = {
  namespaced: true,
  state: {
    choosenProduct: false,
    selectedProducts: [],
    viewProduct: {},
    displayCart: false,
  },
  getters: {
    // getCurrentProduct() {
    //   return state.allProducts;
    // },
    // getProduct(state, getters, rootState, rootGetters) {
    //   rootState.showProducts[id];
    // },
    getChoosenProduct(state) {
      return state.choosenProduct;
    },
    getSelectedProducts(state) {
      return state.selectedProducts;
    },
    getDisplayCart(state) {
      return state.displayCart;
    },
  },
  mutations: {
    updateProducts(state, payload) {
      const prod = rootGetters["products/getCurrentProduct"];
      state.currentProduct = prod;
    },
    updateChoosenProduct(state, payload) {
      state.choosenProduct = true;
      state.selectedProducts.push(payload);
    },
    changeDisplayCart(state) {
      state.displayCart = !state.displayCart;
    },
    removeItem(state, payload) {
      for (const product in state.selectedProducts) {
        if (payload == state.selectedProducts[product]) {
          state.selectedProducts = state.selectedProducts.filter(
            (payload) => payload != state.selectedProducts[product]
          );
        }
      }
    },
    removeAlert(state) {
      state.choosenProduct = false;
    },
  },
  actions: {
    getProducts({ dispatch, commit, getters, rootGetters }, payload) {
      const allProducts = rootGetters["products/showProducts"];

      for (const product in allProducts) {
        if (payload === allProducts[product].id) {
          console.log(allProducts[product]);
        }
      }
    },
  },
};
