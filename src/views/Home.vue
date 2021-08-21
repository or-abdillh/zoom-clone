<template>
   <Header>
      <template v-slot:title>
         <p>Meet & chat</p>
      </template>
      <template v-slot:icon>
         <i @click="isSlide = !isSlide" class="far fa-edit"></i>
      </template>
   </Header>
   <NewChat :slide="isSlide" ></NewChat>
   <MenuBar></MenuBar>
   <MainScreen></MainScreen>
</template>

<script>
   
   import Header from '../components/Header.vue';
   import MenuBar from '../components/MenuBar.vue';
   import MainScreen from '../components/MainScreen.vue';
   import NewChat from '../components/NewChat.vue';
   
   export default {
      name: 'Home',
      components: {
         Header,
         MenuBar,
         MainScreen,
         NewChat
      },
      data() {
         return {
            isSlide: false
         }
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