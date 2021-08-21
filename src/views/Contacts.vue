<template>
   <section class="header-contact">
      <div class="title-wrapper">
         <p class="active" >Contacts</p>
         <p >Channels</p>
      </div>
      <i class="fa fa-plus" ></i>
   </section>
   <SearchBar search-name="Contacts"></SearchBar>
</template>

<script>
   
   import SearchBar from '../components/SearchBar.vue';
   
   export default {
      name: 'Contacts',
      components: {
         SearchBar
      },
      data() {
         return {
            content: 'Contacts'
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
            text-align: center;
         }
         
         .active {
            border-bottom: 3px solid white;
            box-shadow: -8px 0 8px $gray;
         }
      }
      
   }
   
</style>