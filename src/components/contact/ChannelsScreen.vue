<template>
   <section class="channel-wrapper">
      <div>
         <span>
            <i class="fa fa-user" ></i>
         </span>
         <p>There are no channels created yet</p>
      </div>
   </section>
</template>

<script>
   
   export default {
      name: 'ChannelsScreen'
   }
   
</script>

<style lang="scss">
   
   @import 'src/style/_colors';
   
   .channel-wrapper {
      width: 100%;
      margin-top: 2rem;
      display: grid;
      place-items: center;
      font-family: 'Roboto', Sans-Serif;
      
      div {
         display: flex;
         flex-direction: column;
         align-items: center;
         
         span {
            width: 120px;
            height: 120px;
            background: $anti-white;
            padding: 1rem;
            border-radius: 32px;
            border: 1px solid gray;
            display: grid;
            place-items: center;
            margin-bottom: 1rem;
            
            i {
               font-size: 3rem;
               color: rgba($arsenic, .65);
            }
         }
      }
   }
   
</style>