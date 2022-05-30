<template>
  <div class="grid md:grid-cols-3">
    <SideBar>

    </SideBar>
    <div class="px-16 py-6 md:col-span-2 bg-gray-100">
      <NavBar>

      </NavBar>
      <header class="mt-4">
        <h2 class="text-gray-700 text-6xl font-semibold leading-none tracking-wider">
          Special
        </h2>
        <h3 class="text-2xl font-semibold tracking-wider">For You</h3>
      </header>


      <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">
        Latest Recipes
      </h4>

      <div class="mt-8 grid lg:grid-cols-3 gap-10">

        <Card>

        </Card>
      </div>


    </div>
  </div>
</template>
<script>
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/NavBar.vue'
import Card from '../components/Card.vue'
export default {
  components: {
    SideBar,
    NavBar,
    Card,
    

  },
  setup() {

  }
}
</script>
<style>
</style>