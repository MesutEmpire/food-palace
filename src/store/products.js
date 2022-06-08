export const products = {
  namespaced: true,
  state: {
    formProducts: {
      title: "",
      price: "",
      time: "",
      rating: "",
      img: "",
    },
    allProducts : []
  },
  getters: {
    showProducts(state){
      return state.allProducts;
    }
  },
  mutations: {
    updateProductForm(state, payload) {
      state.formProducts.title = payload.title;
      state.formProducts.price = payload.price;
      state.formProducts.time = payload.time;
      state.formProducts.rating = payload.rating;
      state.formProducts.img = payload.img;
    },
    putProducts(state,payload){
      state.allProducts.push(payload);
    }
  },
  actions: {
    fetchNoOfProducts(context) {
      fetch(
        "https://food-palace-4e993-default-rtdb.firebaseio.com/noProducts.json"
      )
        .then((res) => res.json())
        .then((id) =>
          id == null
            ? context.dispatch("createNoProduct")
            : context.dispatch("productData", id)
        );
    },

    createNoProduct(context) {
      fetch(
        "https://food-palace-4e993-default-rtdb.firebaseio.com/noProducts.json",
        {
          method: "put",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            noProducts: 0,
          }),
        }
      )
        .then((res) => res.json())
        .then((newID) => {
          console.log(newID);
          context.dispatch("productData", newID);
        });
    },

    productData(context, newID) {
      fetch(
        `https://food-palace-4e993-default-rtdb.firebaseio.com/products/${newID.noProducts}.json`,
        {
          method: "put",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: newID.noProducts,
            title: context.state.formProducts.title,
            price: context.state.formProducts.price,
            time: context.state.formProducts.time,
            rating: context.state.formProducts.rating,
            img: context.state.formProducts.img,
          }),
        }
      )
        .then((res) => res.json())
        .then((json) =>
          context.dispatch("updateNoOfProducts", newID.noProducts)
        );
    },

    updateNoOfProducts(context, newID) {
      fetch(
        "https://food-palace-4e993-default-rtdb.firebaseio.com/noProducts.json",
        {
          method: "put",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            noProducts: (newID += 1),
          }),
        }
      )
        .then((res) => res.json())
        .then((json) => console.log(json));
    },
    getProducts(context) {
      fetch(
        "https://food-palace-4e993-default-rtdb.firebaseio.com/products.json"
      )
        .then((res) => res.json())
        .then((jsons) => {
          for (const json in jsons) {
                    const userObject = jsons[json];
                   
                    context.commit('putProducts',userObject)
                    
                  }
         
        });
    },
  },
};
