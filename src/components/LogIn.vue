<template>
    <div class=" flex justify-center items-center mx-auto bg-white p-8 lg:p-16">

        <div class="grid md:grid-cols-5 p-4  ">
            <div class="md:col-span-2 items-center rounded-lg ">
                <img src="../assets/undraw_Eating_together_re_ux62.png"
                    class="h-96 w-96 object-contain md:object-scale-down">
            </div>
            <div class="md:col-span-3  rounded-lg border border-gray-200 shadow-md p-3 sm:p-6 lg:p-8">
                <div class="my-7 mb-9  ">
                    <p class="  mb-1 block text-xl lg:text-2xl font-normal text-gray-400">Welcome back!</p>
                    <h1 class=" block text-2xl lg:text-4xl font-bold mb-2">Login to your account</h1>

                </div>

                <form @submit.prevent="onSubmit">
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm lg:text-base font-medium text-gray-900">Email
                            address</label>
                        <input type="email" id="email" v-model="form.email" :class="{ invalidInfo: notFound }"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="food.palace@gmail.com" required>
                    </div>


                    <div class="mb-6">
                        <label for="password"
                            class="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-gray-300">Password</label>
                        <input type="password" id="password" v-model="form.password" :class="{ invalidInfo: notFound }"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="Enter Password" required>
                    </div>

                    <div class=" flex justify-between  mb-6">
                        <div class="flex items-center ">
                            <input id="remember_me" name="remember_me" type="checkbox"
                                class=" mr-2 h-5 w-5 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded-lg">
                            <label for="remember_me" class=" text-sm lg:text-base font-medium text-gray-900 ">
                                Remember me
                            </label>
                        </div>

                        <div>
                            <a href="#" class="text-blue-400 hover:text-blue-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <button type="submit" @click="getData"
                        class="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-base w-full sm:w-auto px-5 py-2.5 text-center ">
                        Sign in
                    </button>
                    <div class="text-sm lg:text-base font-medium text-gray-500  dark:text-gray-300">
                        Not registered? <router-link to="/signUp"
                            class="text-blue-400 hover:text-blue-700 hover:underline dark:text-blue-500">Create account
                        </router-link>
                    </div>



                    <div v-if="userFound"
                        class="p-4 mb-4 text-sm lg:text-base text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                        role="alert">
                        <span class="font-medium">Login Successful </span> Welcome
                    </div>
                    <div v-if="notFound"
                        class="p-4 mb-4 text-sm lg:text-base text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                        role="alert">
                        <span class="font-medium">User not found! </span> Input Correct Email Address or Password
                    </div>




                </form>
            </div>

        </div>
    </div>

</template>
<script>
import { ref, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    setup(props, context) {
        const store = useStore()
        const router = useRouter()

        const form = reactive({
            email: "",
            password: "",
        })
        const getData = () => {
            if (form.email === '' && form.password === '') {
                store.commit('logIn/deniedAccess')

            }
            else {
                store.commit('logIn/updateLogInfo', form)
                store.dispatch('logIn/getDataDB')
            }
        }
        return {
            store,
            form,
            getData,
            notFound: computed(() => store.getters['logIn/getUserNotFoundStatus']),
            userFound: computed(() => store.getters['logIn/getUserFoundStatus'])
        }
    }
}
</script>