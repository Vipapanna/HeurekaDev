<template>
  <div class="bg-[#4C4556] flex    justify-end   h-20      ">
      
    <object data="./src/assets/images/vipapanna1.svg" type="image/svg+xml"  class="  m-4 mr-[25rem] " > kokotina</object>
    <Searchbar />

    <button class="  w-24  h-12 tex  rounded-2xl bg-white bg-opacity-20  drop-shadow-md text-white font-sans self-center mr-4   hover:opacity-90 ">
      Log-In
    </button>

  </div>

  <section class=" mt-14 flex flex-row "  >

    <img src="/src/assets/images/banner1.jpeg"  class= " h-96  rounded-lg m-8 " alt="">
    <img src="/src/assets/images/banner2.jpeg" class= " h-96 rounded-lg m-8" alt="">
    <img src="/src/assets/images/banner3.jpeg" class= " h-96 rounded-lg m-8" alt="">
    <img src="/src/assets/images/banner4.jpeg" class= " h-96 rounded-lg m-8" alt="">




    
  </section>


     


    




</template>

<script>
import Searchbar from './Searchbar.vue'

export default {
  components: { Searchbar },
    
}
</script>
