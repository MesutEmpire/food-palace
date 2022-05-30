<template>
 
    <div class="max-w-2xl mx-auto bg-white p-16">

        <div class="p-4   rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
            <form @submit.prevent="onSubmit">
                <div class="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label for="first_name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                        <input type="text" id="first_name" v-model="form.firstname"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="Food" required>
                    </div>
                    <div>
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last
                            name</label>
                        <input type="text" id="last_name" v-model="form.lastname"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="Palace" required>
                    </div>
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone
                            number</label>
                        <input type="tel" id="phone" v-model="form.phoneNumber"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="0700000000" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" required>
                    </div>
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email
                        address</label>
                    <input type="email" id="email" v-model="form.email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="food.palace@gmail.com" required>
                </div>
                <div class="mb-6">
                    <label for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input type="password" id="password" v-model="form.password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="•••••••••" required>
                </div>
                <div class="mb-6">
                    <label for="confirm_password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                    <input type="password" id="confirm_password" v-model="form.confirmPassword"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="•••••••••" required>
                </div>
                <button type="submit" @click="putData"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
            </form>
        </div>
    </div>

</template>
<script>
import { ref, reactive, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()
        const form = reactive({
            firstname: "",
            lastname: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",

        })

        const passwordValidation = ()=>{
            if (form.password !== form.confirmPassword){
                console.log("Wrong password")
                alert("Check your Password")
            }
        }


        const putData = () => {
            passwordValidation()
            store.commit('signUp/updateForm', form)
            store.dispatch('signUp/fetchNoOfUsers')
            // num.value += 1
        }
        return {
            store,
            form,
            putData,
            passwordValidation
        }
    }
}

</script>