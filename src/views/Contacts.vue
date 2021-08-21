<template>
   <section class="header-contact">
      <div class="title-wrapper">
         <p
         :class="content === 'ContactScreen' ? 'active' : ''"
         @click="content = 'ContactScreen'" >Contacts</p>
         <p 
         :class="content === 'ChannelsScreen' ? 'active' : ''"
         @click="content = 'ChannelsScreen'" >Channels</p>
      </div>
      <i class="fa fa-plus" ></i>
   </section>
   <SearchBar search-name="Search contacts"></SearchBar>
   <component :is="content" ></component>
   
</template>

<script>
   
   import SearchBar from '../components/SearchBar.vue';
   import ContactScreen from '../components/contact/ContactScreen.vue';
   import ChannelsScreen from '../components/contact/ChannelsScreen.vue';
   
   
   export default {
      name: 'Contacts',
      components: {
         SearchBar,
         ContactScreen,
         ChannelsScreen
      },
      data() {
         return {
            content: 'ContactScreen'
         }
      }
   }
   
</script>

<style lang="scss">
   
   @import 'src/style/_colors';
   
   .header-contact {
      width: 100%;
      padding: 0 .5rem 0 0;
      background: $arsenic;
      font-size: 1.1rem;
      font-family: 'Roboto', Sans-Serif;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      
      .title-wrapper {
         display: flex;
         width: 80%;
         justify-content: space-around;
         
         p {
            display: block;
            padding: .6rem 0;
            width: 50%;
            color: rgba(white, .65);
            text-align: center;
         }
         
         .active {
            border-bottom: 3px solid white;
            color: white;
         }
      }
   }
   
</style>