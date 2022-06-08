<template>
  <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="
            pointer-events-none
            fixed
            inset-y-0
            right-0
            flex
            max-w-full
            pl-10
          ">
          <div class="pointer-events-auto w-screen max-w-md">
            <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div class="flex items-start justify-between">
                  <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                    Shopping cart
                  </h2>
                  <div class="ml-3 flex h-7 items-center">
                    <button @click="closeCart" type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Close panel</span>
                      <!-- Heroicon name: outline/x -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div v-for="product in selectedProducts" :key="product.id">
                  <div class="mt-8">
                    <div class="flow-root">
                      <ul role="list" class="-my-6 divide-y divide-gray-200">
                        <li class="flex py-6">
                          <div class="
                              h-24
                              w-24
                              flex-shrink-0
                              overflow-hidden
                              rounded-md
                              border border-gray-200
                            ">
                            <img :src="product.img" :alt="product.title"
                              class="h-full w-full object-cover object-center" />
                          </div>

                          <div class="ml-4 flex flex-1 flex-col">
                            <div>
                              <div class="
                                  flex
                                  justify-between
                                  text-base
                                  font-medium
                                  text-gray-900
                                ">
                                <h3>
                                  <a href="#"> {{ product.title }} </a>
                                </h3>
                                <p class="ml-4">Ksh {{ product.price }}</p>
                              </div>
                              <p class="mt-1 text-sm text-gray-500">Food</p>
                            </div>
                            <div class="
                                flex flex-1
                                items-end
                                justify-between
                                text-sm
                              ">
                              <p class="text-gray-500">Qty 1</p>

                              <div class="flex">
                                <button @click="removeFromCart(product.id)" type="button" class="
                                    font-medium
                                    text-indigo-600
                                    hover:text-indigo-500
                                  ">
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div class="
                    flex
                    justify-between
                    text-base
                    font-medium
                    text-gray-900
                  ">
                  <p>Subtotal</p>
                  <p>Ksh {{ mycart.total }}</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div class="mt-6">
                  <a href="#" class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      border border-transparent
                      bg-indigo-600
                      px-6
                      py-3
                      text-base
                      font-medium
                      text-white
                      shadow-sm
                      hover:bg-indigo-700
                    ">Checkout</a>
                </div>
                <div class="
                    mt-6
                    flex
                    justify-center
                    text-center text-sm text-gray-500
                  ">
                  <p>
                    or

                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="toHome">
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, reactive, computed, onMounted, watchEffect } from "vue";

import { useRouter } from "vue-router";
export default {
  emits: ["btn-click"],

  setup() {
    const router = useRouter();
    const store = useStore();
    const mycart = reactive({
      value: [],
      total: 0.0,
    });
    const selectedProducts = computed(() => {
      return mycart.value;
    });

    const getCart = () => {
      const productId = store.getters["selectedProduct/getSelectedProducts"];

      const products = store.getters["products/showProducts"];

      for (const id in productId) {
        for (const product in products) {
          if (productId[id] == products[product].id) {
            mycart.value.push(products[product]);
            mycart.total += products[product].price;
          }
        }
      }
    };
    const closeCart = () => {
      store.commit("selectedProduct/changeDisplayCart");
      console.log(mycart.total)
      if (mycart.total == 0) {
        store.commit("selectedProduct/removeAlert");
        console.log("balance zero");
      }
    };

    // onMounted(() => {
    //   getCart();
    // });
    watchEffect(() => {
      getCart();
    });

    const toHome = () => {
      store.commit("selectedProduct/changeDisplayCart");
      router.push("/");

    };
    const removeFromCart = (id) => {
      mycart.value = [];
      mycart.total = 0.0;
      store.commit("selectedProduct/removeItem", id);
    };

    return {
      store,
      getCart,
      selectedProducts,
      mycart,
      toHome,
      removeFromCart,
      closeCart,
      displayCart: computed(
        () => store.getters["selectedProduct/getDisplayCart"]
      ),
      Products: computed(
        () => store.getters["selectedProduct/getSelectedProducts"]
      ),
    };
  },
};
</script>