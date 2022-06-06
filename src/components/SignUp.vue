<template>

    <div class="lg:max-w-2xl mx-auto bg-white md:max-w-xl sm:max-w-lg p-7 lg:p-16">

        <div class="p-4   rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
            <div class="flex justify-center "><img src="../assets/logov2.png" class="mr-3 h-16 lg:h-24 object-fill "
                    alt="Food Palace Logo"></div>
            <div class="flex justify-center text-2xl lg:text-4xl  my-7 mb-9 font-bold ">
                Create Account
            </div>
            <form @submit.prevent="onSubmit">
                <div class="grid gap-6 mb-6 lg:grid-cols-2 ">
                    <div>
                        <label for="first_name" class="block mb-2 text-sm lg:text-base font-medium text-gray-900 ">First
                            name</label>
                        <input type="text" id="first_name" v-model="form.firstname"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="Food" required>
                    </div>
                    <div>
                        <label for="last_name" class="block mb-2 text-sm lg:text-base font-medium text-gray-900 ">Last
                            name</label>
                        <input type="text" id="last_name" v-model="form.lastname"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="Palace" required>
                    </div>
                    <div>
                        <label for="phone" class="block mb-2 text-sm lg:text-base font-medium text-gray-900 ">Phone
                            number</label>
                        <input type="tel" id="phone" v-model="form.phoneNumber"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="+254" required>
                    </div>
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm lg:text-base font-medium text-gray-900">Email
                        address</label>
                    <input type="email" id="email" v-model="form.email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="food.palace@gmail.com" required>
                </div>
                <div class="mb-6">
                    <label for="password"
                        class="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input type="password" id="password" v-model="form.password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="Enter New Password" required>
                </div>
                <div class="mb-6">
                    <label for="confirm_password"
                        class="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-gray-300">Confirm
                        password</label>
                    <input type="password" id="confirm_password" v-model="form.confirmPassword"
                        :class="{ invalidInfo: hasError.passError, validInfo: correctPass.correctPassSuccess }"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="Confirm New Password" required>
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
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-base w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
            </form>
        </div>
    </div>

</template>
<script>
import { ref, reactive, onMounted, computed, watchEffect } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()
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