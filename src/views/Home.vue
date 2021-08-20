<template>
   <Header></Header>
   <MenuBar></MenuBar>
   <MainScreen></MainScreen>
</template>

<script>
   
   import Header from '../components/Header.vue';
   import MenuBar from '../components/MenuBar.vue';
   import MainScreen from '../components/Body.vue';
   
   export default {
      name: 'Home',
      components: {
         Header,
         MenuBar,
         MainScreen
      }
   }
   
</script>

<style lang="scss" >
   
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   
</style>