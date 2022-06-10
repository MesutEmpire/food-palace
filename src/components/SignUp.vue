<template>

    <div class="lg:max-w-2xl mx-auto bg-white md:max-w-xl sm:max-w-lg p-7 lg:p-16">

        <div class="p-4   rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
            <div class="flex justify-center "><img src="../assets/logov2.png" class="mr-3 h-16 lg:h-24 object-fill "
                    alt="Food Palace Logo"></div>
            <div class="flex justify-center text-2xl lg:text-4xl  my-7 mb-14 font-bold ">
                Create Account
            </div>
            <form @submit.prevent="onSubmit">
                <div class="grid gap-6 lg:grid-cols-2 ">

                    <div class="relative ">
                        <input type="text" id="first_name" v-model="form.firstname"
                            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="first_name"
                            class="absolute text-sm lg:text-base text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                            First Name</label>
                    </div>


                    <div class="relative ">
                        <input type="text" id="last_name" v-model="form.lastname"
                            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="last_name"
                            class="absolute text-sm lg:text-base text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                            Last Name</label>
                    </div>

                    <div class="relative mb-6">
                        <input type="tel" id="phone" v-model="form.phoneNumber"
                            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white  rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="phone"
                            class="absolute text-sm lg:text-base text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                            Phone Number</label>
                    </div>

                </div>

                <div class="relative mb-6">
                    <input type="email" id="email" v-model="form.email"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white  rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="email"
                        class="absolute text-sm lg:text-base text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                        Email Address</label>
                </div>
                <div class="relative mb-6">
                    <input type="password" id="password" v-model="form.password"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white  rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="password"
                        class="absolute text-sm lg:text-base text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                        New Password</label>
                </div>
                <div class="relative mb-6">
                    <input type="password" id="confirm_password" v-model="form.confirmPassword"
                        :class="{ inputError: hasError.passError, inputSuccess: correctPass.correctPassSuccess }"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="confirm_password"
                        :class="{ labelError: hasError.passError, labelSuccess: correctPass.correctPassSuccess }"
                        class="absolute text-sm lg:text-base text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Confirm
                        Password</label>
                </div>
                <div v-if="hasError.displayError"
                    class="p-4 mb-4 text-sm lg:text-base text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert">
                    <span class="font-medium">Incorrect! Password </span> Try Again
                </div>

                <div v-if="correctPass.displaySuccess"
                    class="p-4 mb-4 text-sm lg:text-base text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                    role="alert">
                    <span class="font-medium">Success </span> Account Created
                </div>


                <button type="submit" @click="putData"
                    class="text-white bg-indigo-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm lg:text-base w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
            </form>
        </div>
    </div>

</template>
<script>
import { ref, reactive, onMounted, computed, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const store = useStore()
        const router = useRouter()
        const correctPass = reactive({
            correctPassSuccess: false,
            displaySuccess: false
        })
        const hasError = reactive({
            passError: false,
            displayError: false
        })
        const form = reactive({
            firstname: "",
            lastname: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",

        })

        watchEffect(() => {
            if (form.password === '' && form.confirmPassword === '') {
                hasError.passError = false;
                hasError.displayError = false
                correctPass.correctPassSuccess = false
            }
            else if (form.password !== form.confirmPassword) {
                correctPass.correctPassSuccess = false
                hasError.passError = true

            }
            else if (form.password === form.confirmPassword) {
                hasError.passError = false
                hasError.displayError = false
                correctPass.correctPassSuccess = true
            }
        })


        const putData = () => {
            if (correctPass.correctPassSuccess === true) {
                correctPass.displaySuccess = true
                store.commit('signUp/updateForm', form)
                store.dispatch('signUp/fetchNoOfUsers')

            }
            else {
                correctPass.displaySuccess = false
                hasError.displayError = true
            }


        }
        return {
            store,
            form,
            putData,

            hasError,
            correctPass
        }
    }
}

</script>