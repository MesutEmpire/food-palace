<template>

  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
    <div class=" block md:flex md:flex-wrap md:justify-between md:items-center ">
      <router-link to="/" href="" class="md:flex md:items-center">
        <img src="../assets/logov2.png" class="mr-3 h-16 " alt="Food Palace Logo">
        <span
          class=" self-center text-xl whitespace-nowrap text-gray-900 font-bold uppercase p-6 md:p-4 border-b border-gray-100 hover:text-gray-700 tracking-widest">Food
          Palace</span>
      </router-link>



      <div class="m-5 md:mr-6 ">
        <div v-if="!userFound">
          <router-link to="/logIn"
            class=" md:mr-6 btn  text-purple-400 border-purple-400 md:border-2 hover:bg-purple-400 hover:text-white transition ease-out duration-500">
            Log
            in</router-link>
          <router-link to="/signUp"
            class="btn text-purple-400 border-purple-400 md:border-2 hover:bg-purple-400 hover:text-white transition ease-out duration-500">
            Sign
            up</router-link>
        </div>

        <button v-if="userFound" type="button" @click="showDrop"
          class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
          <span class="sr-only">Open user menu</span>
          <img class="w-8 h-8 rounded-full" src="../assets/logo.png" alt="user photo">
        </button>
      </div>



    </div>
  </nav>
  <div v-if="displayDrop">
    <currentUser></currentUser>

  </div>

</template>
<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import currentUser from './currentUser.vue'

export default {
  components: {
    currentUser
  },
  setup() {
    const store = useStore()
    var displayDrop = ref(false)
    const showDrop = () => {

      displayDrop.value = !displayDrop.value

    }


    return {
      store,
      displayDrop,
      showDrop,
      userFound: computed(() => store.getters['logIn/getUserFoundStatus'])


    }
  }
}
</script>