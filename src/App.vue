<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>
<script>
import { useStore } from "vuex";
import { onMounted, onBeforeMount } from "vue";
import { tryOnBeforeMount } from "@vueuse/core";
import { getAnalytics, logEvent } from "firebase/analytics";

export default {
  setup() {
    const store = useStore();

    store.dispatch("products/getProducts");
    const analytics = getAnalytics();
    logEvent(analytics, "notification_received");
    console.log("oncreate");

    if (localStorage.getItem("currentUser")) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      store.commit("logIn/changeStatus", true);
      store.commit("logIn/changeRouter", currentUser);
    }
    return {
      store,
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
