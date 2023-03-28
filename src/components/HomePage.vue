<template>
  <div class="bg-[#4C4556] flex    space-x-60 ">
      
    <object data="./src/assets/images/svgcko.svg" type="image/svg+xml"> kokotina</object>
    <Searchbar />

    <button class=" w-28 h-16 tex  rounded-2xl bg-white bg-opacity-20  drop-shadow-md text-white font-sans self-center ">
      Log-In
    </button>

  </div>


     


    




</template>

<script>
import Searchbar from './Searchbar.vue'

export default {
  components: { Searchbar },
    
}
</script>
