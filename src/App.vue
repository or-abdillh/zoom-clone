<template>
   <Header></Header>
   <MenuBar></MenuBar>
</template>

<script>
   
   import Header from './components/Header.vue';
   import MenuBar from './components/MenuBar.vue';
   
   export default {
      name: 'App',
      components: {
         Header,
         MenuBar
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