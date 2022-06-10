<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
    <div class="block md:flex md:justify-between md:items-center">
      <router-link to="/" href="" class="md:flex md:items-center">
        <img src="../assets/logov2.png" class="mr-3 h-16" alt="Food Palace Logo" />
        <span
          class="self-center text-xl whitespace-nowrap text-gray-900 font-bold uppercase p-6 md:p-4 border-b border-gray-100 hover:text-gray-700 tracking-widest">Food
          Palace</span>
      </router-link>

      <div class="m-2 md:m-5 md:mr-6 flex justify-center items-center">
        <div class="absolute top-6 " :class="{ cartHome: !userFound, cartLogIn: userFound }" @click="showCart">
          <span v-if="productAdded">

            <span
              class="animate-ping absolute inline-flex h-3 w-3 ml-3 mb-4 rounded-full bg-indigo-400 opacity-75"></span>
            <span class="absolute inline-flex rounded-full h-3 w-3  ml-3 mb-4 bg-indigo-500"></span>
          </span>
          <a href="#" class="">
            <img class="w-8 h-8" src="../assets/shopping.png" alt="shopping cart" />
          </a>
        </div>


        <div v-if="!userFound">
          <router-link to="/logIn"
            class="md:mr-6 btn text-indigo-600 border-indigo-600 md:border-2 hover:bg-indigo-600 hover:text-white transition ease-out duration-500">
            Log in</router-link>
          <router-link to="/signUp"
            class="btn text-indigo-600 border-indigo-600 md:border-2 hover:bg-indigo-600 hover:text-white transition ease-out duration-500">
            Sign up</router-link>
        </div>

        <div v-if="userFound" class="absolute top-4 right-3 md:mr-5">

          <button type="button" @click="showDrop"
            class="flex mr-3 text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
            <span class="sr-only">Open user menu</span>
            <img class="w-12 h-12 rounded-full" src="../assets/logo.png" alt="user photo" />
          </button>
        </div>
      </div>
    </div>
    <div v-if="userFound">
      <div v-if="displayDrop">
        <currentUser></currentUser>
      </div>
    </div>
  </nav>

  <div v-if="displayCart">
    <Cart></Cart>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import currentUser from "./currentUser.vue";
import Cart from "./Cart.vue";


export default {
  components: {
    currentUser,
    Cart,
  },
  setup() {
    const store = useStore();
    var displayDrop = ref(false);
    const showDrop = () => {
      displayDrop.value = !displayDrop.value;
    };


    const showCart = () => {
      store.commit('selectedProduct/changeDisplayCart')
    }

    return {
      store,
      showCart,
      displayDrop,

      showDrop,
      userFound: computed(() => store.getters["logIn/getUserFoundStatus"]),
      productAdded: computed(() => store.getters["selectedProduct/getChoosenProduct"]),
      displayCart: computed(() => store.getters["selectedProduct/getDisplayCart"])
    };
  },
};
</script>
