<template>

  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
    <div class=" block md:flex md:flex-wrap md:justify-between md:items-center ">
      <router-link to="/" href="" class="md:flex md:items-center">
        <img src="../assets/logov2.png" class="mr-3 h-16 " alt="Flowbite Logo">
        <span class=" self-center text-xl whitespace-nowrap text-gray-900 font-bold uppercase p-6 md:p-4 border-b border-gray-100 hover:text-gray-700 tracking-widest">Food Palace</span>
      </router-link>

  

     <div class="m-5 md:mr-6 ">
        <router-link to="/logIn"
        class=" md:mr-6 btn text-purple-400 border-purple-400 md:border-2 hover:bg-purple-400 hover:text-white transition ease-out duration-500">
        Log
        in</router-link>
         <router-link to="/signUp"
      class="btn text-purple-400 border-purple-400 md:border-2 hover:bg-purple-400 hover:text-white transition ease-out duration-500">
      Sign
      up</router-link>
     </div>

    </div>
  </nav>

  <div class="flex justify-center md:justify-end">




   
  </div>
</template>