<template>
  <div>
    <div class="relative z-10" role="dialog" aria-modal="true">
      <div class="
          hidden
          fixed
          inset-0
          bg-gray-500 bg-opacity-75
          transition-opacity
          md:block
        "></div>
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="
            flex
            items-stretch
            md:items-center
            justify-center
            min-h-full
            text-center
            md:px-2
            lg:px-4
          ">
          <div class="
              flex
              text-base text-left
              transform
              transition
              w-full
              md:max-w-2xl md:px-4 md:my-8
              lg:max-w-4xl
            ">
            <div class="
                w-full
                relative
                flex
                items-center
                bg-white
                px-4
                pt-14
                pb-8
                overflow-hidden
                shadow-2xl
                sm:px-6 sm:pt-8
                md:p-6
                lg:p-8
              ">
              <button @click="removeModal" type="button" class="
                  absolute
                  top-4
                  right-4
                  text-gray-400
                  hover:text-gray-500
                  sm:top-8 sm:right-6
                  md:top-6 md:right-6
                  lg:top-8 lg:right-8
                ">
                <span class="sr-only">Close</span>
                <!-- Heroicon name: outline/x -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div class="
                  w-full
                  grid grid-cols-1
                  gap-y-8 gap-x-6
                  items-start
                  sm:grid-cols-12
                  lg:gap-x-8
                ">
                <div class="
                    aspect-w-2 aspect-h-3
                    rounded-lg
                    bg-gray-100
                    overflow-hidden
                    sm:col-span-4
                    lg:col-span-5
                  ">
                  <img :src="viewProduct.img" :alt="viewProduct.title" class="object-center object-cover" />
                </div>
                <div class="sm:col-span-8 lg:col-span-7">
                  <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12">
                    {{ viewProduct.title }}
                  </h2>
                  <section aria-labelledby="information-heading" class="mt-2">
                    <h3 id="information-heading" class="sr-only">
                      Product information
                    </h3>
                    <p class="text-2xl text-gray-900">Ksh {{ viewProduct.price }}</p>
                    <!-- Reviews -->
                    <div class="mt-6">
                      <h4 class="sr-only">Reviews</h4>
                      <div class="flex items-center">
                        <div class="flex items-center">
                          <span v-for="rating in [1, 2, 3, 4, 5]" :key="rating">
                            <svg v-if="rating <= viewProduct.rating" class="text-gray-900 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                              aria-hidden="true">
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </span>

                        </div>
                        <p class="sr-only">{{ viewProduct.rating }} out of 5 stars</p>
                        <a href="#" class="
                            ml-3
                            text-sm
                            font-medium
                            text-indigo-600
                            hover:text-indigo-500
                          ">0 reviews</a>
                      </div>
                    </div>
                  </section>
                  <section aria-labelledby="options-heading" class="mt-10">
                    <h3 id="options-heading" class="sr-only">
                      Product options
                    </h3>
                    <form>
                      <!-- Colors -->

                      <!-- Sizes -->
                      <div class="mt-10">
                        <div class="flex items-center justify-between">
                          <h4 class="text-sm text-gray-900 font-medium">
                            Size
                          </h4>
                          <a href="#" class="
                              text-sm
                              font-medium
                              text-indigo-600
                              hover:text-indigo-500
                            ">Size guide</a>
                        </div>
                        <fieldset class="mt-4">
                          <legend class="sr-only">Choose a size</legend>
                          <div class="grid grid-cols-3 gap-4">

                            <!-- Active: "ring-2 ring-indigo-500" -->
                            <label class="
                                group
                                relative
                                border
                                rounded-md
                                py-3
                                px-4
                                flex
                                items-center
                                justify-center
                                text-sm
                                font-medium
                                uppercase
                                hover:bg-gray-50
                                focus:outline-none
                                sm:flex-1
                                bg-white
                                shadow-sm
                                text-gray-900
                                cursor-pointer
                              ">
                              <input type="radio" name="size-choice" value="S" class="sr-only"
                                aria-labelledby="size-choice-2-label" />
                              <span id="size-choice-2-label"> S </span>
                              <!--
                                Active: "border", Not Active: "border-2"
                                Checked: "border-indigo-500", Not Checked: "border-transparent"
                              -->
                              <span class="
                                  absolute
                                  -inset-px
                                  rounded-md
                                  pointer-events-none
                                " aria-hidden="true"></span>
                            </label>
                            <!-- Active: "ring-2 ring-indigo-500" -->
                            <label class="
                                group
                                relative
                                border
                                rounded-md
                                py-3
                                px-4
                                flex
                                items-center
                                justify-center
                                text-sm
                                font-medium
                                uppercase
                                hover:bg-gray-50
                                focus:outline-none
                                sm:flex-1
                                bg-white
                                shadow-sm
                                text-gray-900
                                cursor-pointer
                              ">
                              <input type="radio" name="size-choice" value="M" class="sr-only"
                                aria-labelledby="size-choice-3-label" />
                              <span id="size-choice-3-label"> M </span>

                              <span class="
                                  absolute
                                  -inset-px
                                  rounded-md
                                  pointer-events-none
                                " aria-hidden="true"></span>
                            </label>

                            <label class="
                                group
                                relative
                                border
                                rounded-md
                                py-3
                                px-4
                                flex
                                items-center
                                justify-center
                                text-sm
                                font-medium
                                uppercase
                                hover:bg-gray-50
                                focus:outline-none
                                sm:flex-1
                                bg-white
                                shadow-sm
                                text-gray-900
                                cursor-pointer
                              ">
                              <input type="radio" name="size-choice" value="L" class="sr-only"
                                aria-labelledby="size-choice-4-label" />
                              <span id="size-choice-4-label"> L </span>

                              <span class="
                                  absolute
                                  -inset-px
                                  rounded-md
                                  pointer-events-none
                                " aria-hidden="true"></span>
                            </label>

                          </div>
                        </fieldset>
                      </div>
                      <button @click="choosenProduct(viewProduct.id)" type="submit" class="
                          mt-6
                          w-full
                          bg-indigo-600
                          border border-transparent
                          rounded-md
                          py-3
                          px-8
                          flex
                          items-center
                          justify-center
                          text-base
                          font-medium
                          text-white
                          hover:bg-indigo-700
                          focus:outline-none
                          focus:ring-2
                          focus:ring-offset-2
                          focus:ring-indigo-500
                        ">
                        Add to bag
                      </button>
                    </form>
                  </section>
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
import { ref, reactive, computed, watchEffect } from "vue";

export default {
  setup() {
    const store = useStore();
    let myprod = reactive({
      value: null,
    });

    const viewProduct = computed(() => {

      return myprod.value;
    });

    const viewedProduct = () => {
      const products = store.getters["products/showProducts"];
      const myModal = store.getters["selectedProduct/getSelectedModal"];
      console.log(store.getters["selectedProduct/getSelectedModal"]);

      myprod.value = products[myModal];
    };
    const removeModal = () => {
      store.commit("selectedProduct/updateModal", false);
    };
    const choosenProduct = (id) => {

      store.commit('selectedProduct/updateChoosenProduct', id)
      removeModal()

    };
    watchEffect(() => {
      viewedProduct()
    })

    return {
      store,
      myprod,
      viewProduct,
      viewedProduct,
      removeModal,
      choosenProduct
    };
  },
};
</script>