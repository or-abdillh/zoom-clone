<template>
   <section class="contact-wrapper">
      <h3>My contacts</h3>
      <ul>
         <li>
            <span>
               <i class="fas fa-chevron-down" ></i>
               <p>Starred</p>
            </span>
            <small>0</small>
         </li>
         <li>
            <span>
               <i class="fas fa-chevron-right" ></i>
               <p>Phone contacts</p>
            </span>
            <small>10</small>
         </li>
         <li>
            <span>
               <i class="fas fa-chevron-down" ></i>
               <p>External contacts</p>
            </span>
            <small>0</small>
         </li>
         <li>
            <span>
               <i class="fa fa-user" ></i>
            </span>
            <p>Invite People to Zoom</p>
         </li>
      </ul>
   </section>
</template>

<script>
   
   export default {
      name: 'ContactsScreen'
   }
   
</script>

<style lang="scss" >
   
   @import 'src/style/_colors';
   
   .contact-wrapper {
      width: 100%;
      border-top: 1px solid $anti-white;
      padding: .75rem 0;
      font-family: 'Roboto', Sans-Serif;
      
      h3 {
         width: 100%;
         border-bottom: 1px solid $anti-white;
         padding: 0 .85rem .85rem;
         font-weight: 400;
         font-size: 1.5rem;
      }
      
      ul {
         width: 100%;
         
         li {
            
            &:not(:last-child) {
               border-bottom: 1px solid $anti-white;
               display: flex;
               justify-content: space-between;
               padding: 1rem .85rem;
            
            small {
               color: rgba($gray, .85);
            }
            
            span {
               display: flex;
               font-size: 1rem;
               align-items: center;
               justify-content: space-between;
               color: rgba(black, .85);
               
               p {
                  margin-left: .85rem;
                  font-weight: 400;
               }
            }   
            }
            
            &:last-child {
               padding: 1rem .85rem;
               display: flex;
               align-items: center;
               
               span {
                  background: $azure;
                  padding: 1rem;
                  display: grid;
                  place-items: center;
                  border-radius: 16px;
                  margin-right: 1rem;
                  
                  i {
                     color: white;
                  }
               }
               
               p {
                  color: $azure;
                  font-size: 1rem;
               }
            }
         }
      }
   }
   
</style>