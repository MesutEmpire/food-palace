<template>
    <h2>My Cards</h2>
    <form @submit.prevent="onSubmit">

        <div class="my-10">
            <label for="Username" class="font-bold mx-5 ">Username</label>
            <input id="Username" v-model="form.name" type="text" class="rounded-lg">
        </div>
        <div><label for="Password" class="inline-block font-bold mx-5">Password</label>
            <input id="Password" v-model="form.password" type="password" class="rounded-lg">
        </div>
        <div class="flex justify-center">
            <button class="bg-green-400 hover:bg-green-600 text-white rounded-lg shadow-lg m-8 p-2" type="submit"
                @click="putData">Add User</button>
            <button class="bg-green-400 hover:bg-green-600 text-white rounded-lg shadow-lg m-8 p-2" type="submit"
                @click="forgotPass">Forgot Password</button>



        </div>
        <div v-for="user in users" :key="user.name">
            <div class="grid grid-cols-3 gap-4">
                <div>
                    <h2 class="inline-block">{{ user.name }}</h2>
                </div>
                <div>
                    <p class="inline-block">{{ user.password }}</p>
                </div>
                <div> <button class="bg-red-400 hover:bg-red-600 text-white rounded-lg shadow-lg  m-2 p-2"
                        @click="deleteData(user.id)">Delete User</button>
                    <button class="bg-blue-400 hover:bg-blue-600 text-white rounded-lg shadow-lg  m-2 p-2"
                        @click="changeData(user.id)">Change Details</button>


                </div>
            </div>

        </div>
    </form>

</template>
<script>
import { ref, reactive, onMounted, computed } from 'vue'
export default {
    setup() {
        const num = ref(0)
        const id = 0

        const form = reactive({
            name: '',
            password: ''
        })
        const users = ref([])
        // const onSubmit = async(() =>{
        //     console.log("Yes")
        //     createFood({...form})
        //     form.name=''
        //     form.time=0
        // })

        const putData = () => {
            fetchNoOfUsers()
            // num.value += 1
        }
        const fetchNoOfUsers = () => {
            fetch('https://food-palace-4e993-default-rtdb.firebaseio.com/noUser.json')
                .then(res => res.json())
                .then(id =>
                    (id == null) ? createNoUser() : userData(id)

                )
        }

        const createNoUser = () => {

            fetch('https://food-palace-4e993-default-rtdb.firebaseio.com/noUser.json', {
                method: "put",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    noUser: 0
                })
            })
                .then(res => res.json())
                .then(newID => {
                    console.log(newID)
                    userData(newID)
                })

        }

        const userData = (newID) => {

            fetch(`https://food-palace-4e993-default-rtdb.firebaseio.com/users/${newID.noUser}.json`, {
                method: "put",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: form.name,
                    password: form.password
                })
            })
                .then(res => res.json())
                .then(json => updateNoOfUsers(newID.noUser))
        }

        const updateNoOfUsers = (newID) => {


            fetch('https://food-palace-4e993-default-rtdb.firebaseio.com/noUser.json', {
                method: "put",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    noUser: newID += 1
                })
            })
                .then(res => res.json())
                .then(json => console.log(json))
        }

        const postData = () => {

            fetch('https://food-palace-4e993-default-rtdb.firebaseio.com/users.json', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: form.name,
                    password: form.password
                })
            })
                .then(res => res.json())
                .then(json => console.log(json))

        }







        const fetchData = () => {
            fetch('https://food-palace-4e993-default-rtdb.firebaseio.com/users.json')
                .then(res => res.json())
                .then(jsons => {
                    for (const json in jsons) {
                        const userObject = jsons[json]
                        userObject["id"] = json
                        users.value.push(userObject)
                    }
                })
        }
        const deleteData = id => {
            console.log(id)
            fetch(`https://food-palace-4e993-default-rtdb.firebaseio.com/users/${id}.json`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(res => console.log(res))

        }

        const changeData = id => {
            fetch(`https://food-palace-4e993-default-rtdb.firebaseio.com/users/${id}.json`, {
                method: "put",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    password: form.password
                })
            })
                .then(res => res.json())
                .then(json => console.log(json))
        }

        return {
            form,
            postData,
            users,
            deleteData,
            changeData,
            id,
            putData,
            fetchNoOfUsers,
            fetchData,
            num,
            createNoUser,
            userData,
            updateNoOfUsers
        }
    }
}

</script>
<style>
</style>
