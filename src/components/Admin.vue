<template>
    <div class="max-w-2xl mx-auto bg-white p-16">

        <div class="p-4   rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
            <form @submit.prevent="onSubmit">
                <div class=" grid gap-6 mb-6 lg:grid-cols-5 ">
                    <div class="col-span-1">
                        <label for="food_title"
                            class="flex justify-start mb-2 text-sm lg:text-base font-medium text-gray-900 ">Food
                            Title</label>
                    </div>
                    <div class="col-span-4">
                        <input type="text" id="food_title" v-model="foodForm.title"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="Pizza" required>
                    </div>
                    <div class="col-span-1">
                        <label for="food_price"
                            class="flex justify-start mb-2 text-sm lg:text-base font-medium text-gray-900 ">Price</label>
                    </div>
                    <div class="col-span-4">
                        <input type="number" id="food_price" v-model="foodForm.price"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="Ksh 100 " required>
                    </div>

                    <div class="col-span-1">
                        <label for="food_time"
                            class="flex justify-start mb-2 text-sm lg:text-base font-medium text-gray-900 ">Time</label>
                    </div>
                    <div class="col-span-4">
                        <input type="number" id="food_time" v-model="foodForm.time"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="20 min" required>
                    </div>
                    <div class="col-span-1">
                        <label for="food_rating"
                            class="flex justify-start mb-2 text-sm lg:text-base font-medium text-gray-900 ">
                            Rating</label>
                    </div>
                    <div class="col-span-4">
                        <input type="number" id="food_rating" v-model="foodForm.rating"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="4" required>
                    </div>
                </div>
                <div class="mb-4">
                    <label class="flex justify-start mb-2 text-sm lg:text-base font-medium text-gray-900"> Food Cover
                        Photo </label>
                    <div
                        class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                viewBox="0 0 48 48" aria-hidden="true">
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="flex text-sm text-gray-600">
                                <label for="food-img"
                                    class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span>Upload Image</span>
                                    <input id="food-img" name="food-img" type="file" @input="onFileInput"
                                        class="sr-only" />
                                </label>
                                <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                        </div>
                    </div>
                </div>
                <button type="submit" @click="submitData"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-base w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>

            </form>
        </div>
    </div>

</template>
<script>

import { ref, Ref, reactive, computed } from 'vue'
import { uploadImage, getImageUrl, getPath } from '../firebase'
import { useStore } from 'vuex'
import { useBase64 } from '@vueuse/core'


export default {

    setup() {
        const store = useStore()

        const foodForm = reactive({
            title: '',
            price: '',
            time: '',
            rating: '',
            img: '',
        })


        const file = ref()


        const onFileInput = (e) => {

            file.value = (e.target).files[0]

            uploadImage(file.value, foodForm.title)
        }

        const submitData = () => {

            setTimeout(() => {
                foodForm.img = getPath()
                console.log(foodForm.img)
                store.commit('products/updateProductForm', foodForm)
                store.dispatch('products/fetchNoOfProducts')

            }, 1000)

        }





        return {
            store,
            foodForm,
            submitData,
            onFileInput,
            file,
            

        }
    }
}


</script>