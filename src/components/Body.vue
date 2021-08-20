<template>
   <section class="main-screen">
      <div class="lists">
         <ul>
            <li class="list">
               <span class="icon">
                  <i class="fas fa-star"></i>
               </span>
               <p>Starred</p>
            </li>
         </ul>
      </div>
      <div class="thumb-alert">
         
      </div>
   </section>
</template>

<script>
   
   export default {
      name: 'MainScreen'
   }
   
</script>

<style lang="scss">
   
   @import 'src/style/_colors';
   
   .main-screen {
      width: 100%;
      box-sizing: border-box;
      font-family: 'Roboto', Sans-Serif;
      padding: .75rem;
      
      .lists {
         width: 100%;
         
         .list {
            width: 100%;
            display: flex;
            align-items: center;
            
            p {
               font-weight: 400;
               margin-left: .75rem;
               font-size: 1.1rem;
            }
            
            .icon {
               background: $anti-white;
               padding: 1rem;
               border-radius: 12px;
               
               i {
                  color: $gray;
                  font-size: 1.2rem;
               }
            }
         }
      }
   }
   
   
   
</style>


