<template>
   <Header>
      <template v-slot:title>
         <p>Meetings</p>
      </template>
      <template v-slot:icon>
         <i class="fas fa-redo-alt"></i>
      </template>
   </Header>
   
   <section class="meetings-screen">
      <p>Personal meeting ID</p>
      <strong>497 351 5293</strong>
      <div class="button-group">
         <button type="button">Start</button>
         <button type="button">Send invitation</button>
         <button type="button">Edit</button>
      </div>
      
      <div class="no-upcoming">
         <i class="fas fa-calendar-alt" ></i>
         <h2>No Upcoming Meetings</h2>
         <p>The scheduled meetings will be listed here</p>
      </div>
   </section>
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

<style lang="scss">
   
   @import 'src/style/_colors';
   
   .meetings-screen {
      font-family: 'Roboto', Sans-Serif;
      text-align: center;
      font-size: 1rem;
      
      p {
         margin-top: 2rem;
         font-weight: 400;
         color: $gray;
         margin-bottom: .5rem;
      }
      
      strong {
         font-size: 1.3rem;
         font-weight: 400;
      }
      
      .button-group {
         margin-top: 1rem;
         
         button {
            border: none;
            padding: .5rem .75rem;
            font-size: .9rem;
            border-radius: 8px;
            margin: 0 .5rem;
            
            &:active {
               border: 1px solid gray;
            }
         }
      }
      
      .no-upcoming {
         margin-top: 3rem;
         
         i {
            font-size: 7rem;
            color: $gray;
            margin-bottom: 1rem;
         }
         
         h2 {
            font-size: 1rem;
            font-weight: 400;
         }
         p {
            margin-top: .5rem;
            font-size: .8rem;
         }
      }
   }
   
</style>



