<template>
   <section class="header">
      <p>Meet & chat</p>
      <span>
         <i class="far fa-edit"></i>
      </span>
   </section>
</template>

<script>
   
</script>

<style lang="scss">
   
   @import 'src/style/_colors.scss';
   
   .header {
      width: 100%;
      padding: .6rem .5rem;
      background: $arsenic;
      font-size: 1.15rem;
      font-family: 'Roboto', Sans-Serif;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      p {
         text-align: center;
         display: block;
         transform: translateX(130%);
      }
      
      span {
         display: grid;
         place-items: center;;
         
         i {
            font-size: 1.35rem;;
         }
      }
   }
   
</style>