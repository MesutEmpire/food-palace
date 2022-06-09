export const cart = {
    namespaced: true,
    state: { 
        cartProducts :[],
     },
    getters: {  },
    mutations: { },
    actions: { 
        pushCart(context,cartId){
            const currentUser = JSON.parse(localStorage.getItem("currentUser"))
            console.log(currentUser.id)
            console.log(cartId)
            fetch(
                `https://food-palace-4e993-default-rtdb.firebaseio.com/users/${currentUser.id}.json`,
                {
                  method: "PATCH",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    cart: cartId,
                  }),
                }
              )
                .then((res) => res.json())
                .then((json) => console.log(json));
        },
        getCart: {
          root: true,
          handler (namespacedContext, id){
          console.log(id)
            fetch(
                `https://food-palace-4e993-default-rtdb.firebaseio.com/users/${id}/cart.json`)
                .then((res) => res.json())
                .then((cart) => {
                  console.log(cart)
                  for(const oneCart in cart){
                    namespacedContext.commit('selectedProduct/updateChoosenProduct',cart[oneCart],{root:true})
                  }
                  
                });
        }
     },
  }
}
  