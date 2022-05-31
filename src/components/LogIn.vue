<template>
    <div class="max-w-2xl mx-auto bg-white p-16">

        <div class="p-4   rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
            <div class=" justify-center   my-7 mb-9  ">
                <h1 class=" text-2xl lg:text-4xl font-bold mb-2">Sign In</h1>
                <p class="block text-xl lg:text-2xl font-normal text-gray-400">Please sign in to your account.</p>
            </div>

            <form @submit.prevent="onSubmit">
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

</template>
<script>
import { ref, reactive, computed } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(props, context) {
        const store = useStore()
        const form = reactive({
            email: "",
            password: "",
        })
        const getData = () => {
            store.commit('logIn/updateLogInfo', form)
            store.dispatch('logIn/getDataDB')
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