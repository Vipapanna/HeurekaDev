<template>
  <div class="bg-[#4C4556] flex    justify-end   h-20       ">
      
    <object data="./src/assets/images/vipapanna1.svg" type="image/svg+xml"  class="  m-4 mr-[25rem] " > logo</object>
    <Searchbar />

    <button id="login" class="  w-24  h-12 tex  rounded-2xl bg-white bg-opacity-20  drop-shadow-md text-white font-sans self-center mr-4   hover:opacity-90 ">
      Log-In
    </button>

  </div>


  <div class=" bg-black bg-opacity-50 absolute inset-0  hidden justify-center items-center  " id="overlay">

    <div class="bg-white rounded-2xl  flex flex-col w-[24rem] h-[28rem] justify-center items-center  " >

      <Backbtn id="back-btn" />

      <input type="email" class="h-8 rounded-3xl  self-center  bg-gray-400 bg-opacity-20  drop-shadow-md  w-[18rem] m-2  text-center" placeholder="example@gmail.com"  name="" id="e1">
      <input type="password" class="h-8 rounded-3xl self-center  bg-gray-400 bg-opacity-20  drop-shadow-md  w-[18rem] m-2 text-center " placeholder="Heslo"  name="" id="p1">

      <div class="   space-x-28 mb-9 " >
        <a class="text-[0.8rem]  text-blue-500" href="">Vytvorit ucet</a>
        <a class="text-[0.8rem]  text-blue-500" href=""> Zabudnute heslo</a>
      </div>


      <button class=" rounded-xl bg-gray-400 bg-opacity-20 w-28 h-9 hover:opacity-80 " >Log-In</button>


    </div>

  </div>









  <section class="flex whitespace-nowrap overflow-auto scrollbar-hide" >


    <img src="/src/assets/images/banner1.jpeg"  class= "h-96 rounded-lg m-4 " alt="">
    <img src="/src/assets/images/banner2.jpeg" class= " h-96 rounded-lg m-4" alt="">
    <img src="/src/assets/images/banner3.jpeg" class= " h-96 rounded-lg m-4" alt="">
    <img src="/src/assets/images/banner4.jpeg" class= " h-96 rounded-lg m-4" alt="">


  </section>
  


     


    




</template>

<script>




window.addEventListener('DOMContentLoaded', () =>
{
  const login = document.querySelector('#login')
  const overlay = document.querySelector('#overlay')
  const backbtn = document.querySelector('#back-btn')


login.addEventListener('click', () => 
{

  overlay.classList.remove('hidden')
  overlay.classList.add('flex')

})
backbtn.addEventListener('click', () => 
{
 
  overlay.classList.remove('flex')
  overlay.classList.add('hidden')

})

})



import Searchbar from './Searchbar.vue'
import Backbtn from './Backbtn.vue'

export default {
  components: { Searchbar, Backbtn },
    
}
</script>
