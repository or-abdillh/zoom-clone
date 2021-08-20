<template>
   <section class="header">
      <slot name="title"></slot>
      <span>
         <slot name="icon"></slot>
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
      font-size: 1.1rem;
      font-family: 'Roboto', Sans-Serif;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row-reverse;
      position: relative;
      
      p {
         text-align: center;
         display: block;
         position: absolute;
         left: 50%;
         transform: translateX(-50%);
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