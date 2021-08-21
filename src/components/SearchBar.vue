<template>
   <section class="search-bar">
      <div class="form-wrapper">
         <i class="fa fa-search"></i>
         <input :placeholder="searchName" type="text" />
      </div>      
   </section>
</template>

<script>
   
   export default {
      name: 'SearchBar',
      props: {
         searchName: {
            type: String,
            default: 'Search'
         }
      }
   }
   
</script>

<style lang="scss" >
   
   @import 'src/style/_colors';
   
   .search-bar {
      width: 100%;
      margin-top: .5rem;
      box-sizing: border-box;
      padding: .65rem .5rem;
      font-family: 'Roboto', Sans-Serif;
      
      .form-wrapper {
        width: 100%;
        background: $anti-white;
        display: flex;
        align-items: center;
        border-radius: 8px;
        overflow: hidden;
        
        i {
           margin-left: .75rem;
           color: $gray;
        }
        
        input[type=text] {
           border: none;
           background: $anti-white;
           width: 100%;
           padding: .75rem;
           
           &::placeholder {
              font-size: 1rem;
           }
           
           &:focus {
              outline: none!important;
           }
        }
      }
   }
   
</style>