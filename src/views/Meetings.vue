<template>
   <Header>
      <template v-slot:title>
         <p>Meetings</p>
      </template>
      <template v-slot:icon>
         <i class="fas fa-redo-alt"></i>
      </template>
   </Header>
</template>

<script>
   
   import Header from '../components/Header.vue';
   
   export default {
      name: 'Meetings',
      components: {
         Header
      }
   }
   
</script>