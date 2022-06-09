export const selectedProduct = {
  namespaced: true,
  state: {
    choosenProduct: false,
    selectedProducts: [],
    viewProduct: {},
    displayCart: false,
    showModal : false,
    selectedModal : null
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
    getModal(state){
      return state.showModal
    },
    getSelectedModal(state){
      console.log(state.selectedModal)
      return state.selectedModal
    }
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
    updateModal(state,payload){
      state.showModal = payload
    },
    updateSelectedModal(state,payload){
      state.selectedModal = payload
      console.log(state.selectedModal)
      
    }
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
