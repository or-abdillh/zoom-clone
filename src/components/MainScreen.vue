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
      <div class="empty-alert">
         <div class="box-alert">
            <img src="src/assets/sticker.png" />
            <p>Find People and Start Chatting!</p>
            <button type="button">Add Contact</button>
         </div>
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
      
      .empty-alert {
         width: 100%;
         display: grid;
         place-items: center;
         margin-top: 5rem;
         
         .box-alert {
            width: 75%;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            img {
               max-width: 70%;
            }
            
            p {
               font-weight: 400;
            }
            
            button {
               background: $azure;
               border: none;
               color: white;
               margin-top: 1.5rem;
               border-radius: 8px;
               font-weight: 400;
               color: white;
               padding: .65rem .85rem;
               width: 90%;
               transition: .3s;
               
               &:active {
                  background: rgba($azure, .75);
                  
               }
            }
         }
      }
   }
   
   
   
</style>


