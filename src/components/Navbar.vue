<template>
   <section class="navbar">
      <a class="nav-box active">
         <i class="fas fa-comment"></i>
         <p>Meet chat</p>
      </a>
      <a class="nav-box">
         <i class="far fa-clock"></i>
         <p>Meetings</p>
      </a>
      <a class="nav-box">
         <i class="far fa-address-book"></i>
         <p>Contacts</p>
      </a>
      <a class="nav-box">
         <i class="fas fa-cog"></i>
         <p>Settings</p>
      </a>
   </section>
</template>

<script>
   
   export default {
      name: 'Navbar'
   }
   
</script>

<style lang="scss" >
   
   @import 'src/style/_colors';
   
   .navbar {
      width: 100%;
      position: fixed;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      background: white;
      border: 1.5px solid $anti-white;
      padding: .35rem .85rem;
      font-family: 'Roboto', Sans-Serif;
      
      .active i, .active p {
         color: $azure;
      }
      
      .nav-box {
         color: $gray;
         display: flex;
         flex-direction: column;
         align-items: center;
         
         i {
            font-size: 1.2rem;
            margin-bottom: .35rem;
         }
         
         p {
            font-size: .7rem;
         }
      }
   }
   
</style>


