<template>
    <div class="max-w-auto  overflow-visible  z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow py-3 px-4"
        id="dropdown" data-dropdown-toggle="dropdown">

        <span class="block text-sm text-gray-90"> {{ user.firstname }}</span>
        <span class="block text-sm font-medium text-gray-500 truncate ">{{ user.email }}</span>

        <ul class="py-1" aria-labelledby="dropdown">
            <li>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Dashboard</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Settings</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Earnings</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Sign out</a>
            </li>
        </ul>
    </div>

</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    setup() {
        const store = useStore()

        return {
            store,
            user: computed(() => store.getters['logIn/getCurrentUserDetails']),
        }
    }
}
</script>