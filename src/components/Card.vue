<template>
    <h2>My Card</h2>
    <!-- <form @submit.prevent="onSubmit">

        <div class="my-10">
            <label for="Username" class="font-bold mx-5 ">Username</label>
            <input id="Username" type="text" class="rounded-lg">
        </div>
        <div><label for="Password" class="inline-block font-bold mx-5">Password</label>
            <input id="Password"  type="password" class="rounded-lg">
        </div>
        <div class="flex justify-center">
            <button class="bg-green-400 hover:bg-green-600 text-white rounded-lg shadow-lg m-8 p-2" type="submit"
                @click="putData">Create New  User</button>
            <button class="bg-green-400 hover:bg-green-600 text-white rounded-lg shadow-lg m-8 p-2" type="submit">Forgot
                Password</button>



        </div>
        <div v-for="user in users" :key="user.name">
            <div class="grid grid-cols-3 gap-4">
                <div>
                    <h2 class="inline-block">{{ user.name }}</h2>
                </div>
                <div>
                    <p class="inline-block">{{ user.password }}</p>
                </div>
                <div> <button class="bg-red-400 hover:bg-red-600 text-white rounded-lg shadow-lg  m-2 p-2">Delete
                        User</button>
                    <button class="bg-blue-400 hover:bg-blue-600 text-white rounded-lg shadow-lg  m-2 p-2">Change
                        Details</button>


                </div>
            </div>

        </div>
    </form> -->

</template>
<script>

export default {
    setup() {
        
    }
}

</script>
<style>
</style>
