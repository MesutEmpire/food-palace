<template>
  <div class="fixed top-16 right-6">
    <div
      class="w-48 mt-2 origin-top-right rounded-md shadow-lg md:w-56 max-w-auto"
    >
      <div class="px-2 py-2 bg-white rounded-md shadow">
        <span class="block text-sm text-gray-90">
          {{ user.firstname }} {{ user.lastname }}</span
        >
        <span class="block text-sm font-medium text-gray-500 truncate">{{
          user.email
        }}</span>
        <ul>
          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span
                class="flex items-center justify-center text-lg text-gray-400"
              >
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </span>
              <span class="ml-3">Profile</span>
            </a>
          </li>
          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span
                class="flex items-center justify-center text-lg text-gray-400"
              >
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </span>
              <span class="ml-3">Notifications</span>
              <span
                class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
                >10</span
              >
            </a>
          </li>
          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span
                class="flex items-center justify-center text-lg text-gray-400"
              >
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </span>
              <span class="ml-3">Settings</span>
            </a>
          </li>
          <li class="my-px">
            <router-link
              to="/"
              @click="logOut"
              class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span
                class="flex items-center justify-center text-lg text-red-400"
              >
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                  ></path>
                </svg>
              </span>
              <span class="ml-3">Logout</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const logOut = () => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      store.commit("logIn/changeStatus", false);
      store.dispatch("logIn/loggedOutUser", currentUser.id);
      localStorage.removeItem("currentUser");
      router.push("/");
      setTimeout(() => {
        store.commit("logIn/changeStatus");
      }, 1000);
    };

    return {
      store,
      logOut,
      user: computed(() => store.getters["logIn/getCurrentUserDetails"]),
      userFound: computed(() => store.getters["logIn/getUserFoundStatus"]),
    };
  },
};
</script>
