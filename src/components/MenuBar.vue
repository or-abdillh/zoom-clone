<template>
   <section class="menu-bar">
      <div class="menu-opts">
         <div class="menu">
            <span class="active">
               <i class="fas fa-video"></i>
            </span>
            New meet
         </div>
         
         <div class="menu">
            <span>
               <i class="fas fa-plus-square"></i>
            </span>
            Join
         </div>
         
         <div class="menu">
            <span>
               <i class="fas fa-calendar-alt"></i>
            </span>
            Schedule
         </div>
         
         <div class="menu">
            <span>
               <i class="fas fa-external-link-square-alt"></i>
            </span>
            Share screen
         </div>
      </div>
   </section>
</template>

<script>
   
   export default {
      name: 'MenuBar'
   }
   
</script>

<style lang="scss" >
   
   @import 'src/style/_colors';
   
   .menu-bar {
      width: 100%;
      box-sizing: border-box;
      padding: .65rem .5rem;
      font-family: 'Roboto', Sans-Serif;
      
      .menu-opts {
         display: flex;
         justify-content: space-between;
         border-bottom: 1.5px solid $anti-white;
         
         .menu {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: .7rem;
            color: $gray;
            margin: .5rem;
            
            span {
               background: $azure;
               display: block;
               padding: 1rem;
               border-radius: 35%;
               display: grid;
               place-items: center;
               margin-bottom: .5rem;
               
               i {
                  color: white;
                  font-size: 1.5rem;
               }
            }
         }
         
         .active {
            background: $pumpkin!important;
         }
      }
   }
   
</style>