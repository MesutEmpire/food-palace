<template>
  <NavBar> </NavBar>
  <landingPage></landingPage>
  <Card> </Card>
</template>
<script>
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
import Card from "../components/Card.vue";
import landingPage from "../components/landingPage.vue";

export default {
  components: {
    SideBar,
    NavBar,
    Card,
    landingPage,
  },
  setup() {},
};
</script>
<style></style>
