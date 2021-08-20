<template>
   <router-view></router-view>
   <Navbar></Navbar>
</template>

<script>
   
   import Home from './views/Home.vue'
   import Navbar from './components/Navbar.vue'
   
   export default {
      components: {
         Home,
         Navbar
      }
   }   
</script>