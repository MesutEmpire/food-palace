<template>
  <div :class="{ '-mt-44': userFound }">
    <div class="mt-8 grid lg:grid-cols-3 gap-10 container mx-auto px-4">
      <div v-for="product in Products" :key="product.id" @click="viewedProduct(product.id)">
        
        <div class="card">
          <a href="#" data-modal-toggle="defaultModal" @click="updateDetails">
            <img class="rounded-t-lg h-48 object-cover w-full" :src="product.img" alt="product image" />
          </a>
          <div class="px-5 pb-5 mt-3">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900">
                {{ product.title }}
              </h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
              <span v-for="rating in [1, 2, 3, 4, 5]" :key="rating" :class="[
                product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                'h-5 w-5 flex-shrink-0',
              ]">
                <svg v-if="rating <= product.rating" class="w-5 h-5 text-yellow-300" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
              </span>

              <span class="
                  bg-blue-100
                  text-blue-800 text-xs
                  font-semibold
                  mr-2
                  px-2.5
                  py-0.5
                  rounded
                  dark:bg-blue-200
                ">{{ product.rating }}</span>
            </div>
            <div class="flex justify-start items-center">
              <span class="text-3xl font-bold text-gray-900">Ksh{{ product.price }}</span>
              <!-- <a  href="#" class="
                  text-white
                  bg-indigo-700
                  hover:bg-indigo-800
                  focus:ring-4 focus:outline-none focus:ring-indigo-300
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                ">Add to cart</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div  v-if="showModal" >
        <Modal></Modal>
    </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, reactive, computed } from "vue";
import Modal from "./Modal.vue";

export default {
  components: {
    Modal,
  },
  setup() {
    const store = useStore();

    const viewedProduct = (id) => {
      
     store.commit('selectedProduct/updateModal', true)
     store.commit('selectedProduct/updateSelectedModal', id)
    };
   

    return {
      store,
      viewedProduct,
      Products: computed(() => store.getters["products/showProducts"]),
      userFound: computed(() => store.getters["products/getUserFoundStatus"]),
      
      showModal: computed(() => store.getters["selectedProduct/getModal"]),
  
    };
  },
};
</script>
<style>
</style>
