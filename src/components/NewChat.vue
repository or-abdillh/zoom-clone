<template>
   <section :class="isSlide ? 'slide-up' : ''" class="new-chat">
      <div class="header-chat">
         <p>Back</p>
         <p>New chat</p>
         <p>Start a chat</p>
      </div>
      <div class="footer-chat">
         <p>Name or email address</p>
      </div></section>   
</template>

<script>
   
   export default {
      name: 'NewChat',
      props: {
         slide: {
            type: Boolean,
            default: false
         }
      },
      watch: {
        slide() {
           this.isSlide = !this.isSlide;
        } 
      },
      data() {
         return {
            isSlide: false
         }
      }
   }
   
</script>

<style lang="scss" >
   
   @import 'src/style/_colors';
   
   .slide-up {
      top: 0!important;
   }
   
   .new-chat {
      font-family: 'Roboto', Sans-Serif;
      position: fixed;
      z-index: 9;
      width: 100%;
      height: 100vh;
      top: 100vh;
      transition: .3s ease-in-out;
      background: $white;
      
      .header-chat {
         width: 100%;
         display: flex;
         background: white;
         padding: .75rem .5rem;
         justify-content: space-between;
         align-items: center;
         border-bottom: 1px solid $anti-white;
         
         p {
            font-size: 1.3rem;
            
            &:first-child {
               color: $azure;
               font-weight: 400;
            }
            
            &:last-child {
               color: rgba($gray, .5);
               font-size: 1rem;
            }
         }
      }
      
      .footer-chat {
         background: white;
         padding: .5rem;
         border-bottom: 1px solid $anti-white;
         
         p {
            font-size: .85rem;
            color: rgba(black, .8);
         }
      }
   }   
   
</style>








