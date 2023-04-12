<template>
  <section
  id="page">
    <section class="bg-[#4C4556] flex h-20 justify-between">
      <object
        data="./src/assets/images/vipapanna1.svg"
        type="image/svg+xml"
        class="m-4"
      ></object>

      <Searchbar/>


      <button
        class="w-24 h-12 rounded-2xl bg-white bg-opacity-20 drop-shadow-md text-white font-sans self-center mr-4 hover:opacity-90 cursor-pointer"
        @click="popup"
      >
        Log In
      </button>

    </section>
  
    
    <section
      class="bg-black bg-opacity-50 absolute inset-0 hidden justify-center items-center z-50"
      id="overlay"
    >
      <div
        class="bg-white rounded-2xl flex flex-col w-[24rem] h-[28rem] justify-center items-center absolute"
        id="logpage"
      >
        <Backbtn 
        class="mt-4" 
        @click="close"
        />

        <input
          type="email"
          class="h-8 rounded-3xl self-center bg-gray-400 bg-opacity-20 drop-shadow-md w-[18rem] m-2 text-center"
          placeholder="example@gmail.com"
          name=""
          id="email1"
        />
        <input
          type="password"
          class="h-8 rounded-3xl self-center bg-gray-400 bg-opacity-20 drop-shadow-md w-[18rem] m-2 text-center"
          placeholder="Heslo"
          name=""
          id="pword1"
        />
  
        <div class="space-x-24 mb-9">
          
          <button
            class="bg-transparent text-[0.8rem] text-blue-500"
            @click="register"
            id="create-account"
          >
            Vytvorit ucet
          </button>
          
          <button
            class="bg-transparent text-[0.8rem] text-blue-500"
            id="forgotten-password"
          >
            Zabudnute heslo
          </button>

        </div>
  
        <button
          class="rounded-xl bg-gray-400 bg-opacity-20 w-28 h-9 hover:opacity-80"
        >
          Log-In
        </button>
      </div>
  
      <div
        class="bg-white rounded-2xl flex-col w-[24rem] h-[28rem] justify-center items-center hidden"
        id="regpage"
      >
        <Backbtn 
        @click="close"
        />
  
        <input
          type="email"
          class="h-8 rounded-3xl self-center bg-gray-400 bg-opacity-20 drop-shadow-md w-[18rem] m-2 text-center"
          placeholder="example@gmail.com"
          name=""
          id="e1"
        />
        <input
          type="password"
          class="h-8 rounded-3xl self-center bg-gray-400 bg-opacity-20 drop-shadow-md w-[18rem] m-2 text-center"
          placeholder="Heslo"
          name=""
          id="p1"
        />
        <input
          type="password"
          class="h-8 rounded-3xl self-center bg-gray-400 bg-opacity-20 drop-shadow-md w-[18rem] m-2 text-center"
          placeholder="znova zadanie Heslo"
          name=""
          id="p1"
        />
  
        <button
          class="rounded-xl bg-gray-400 bg-opacity-20 w-32 h-10 hover:opacity-80 mt-10"
        >
          Registracia
        </button>
        
      </div>
  
      <div
        class="bg-white rounded-2xl flex-col w-[24rem] h-[28rem] justify-center items-center hidden"
        @click="forgotpasword"
        id="reset-password-page"
      >
        <Backbtn id="back-btn" />
  
        <h1 class="mb-14 text-center">
          Na zadanú emailovu adresu vám bude <br />
          zaslaný link na obnovu vašeho hesla
        </h1>
        <input
          type="email"
          class="h-8 rounded-3xl self-center bg-gray-400 bg-opacity-20 drop-shadow-md w-[18rem] m-2 text-center"
          placeholder="example@gmail.com"
          name=""
          id="e1"
        />
  
        <button
          class="rounded-xl bg-gray-400 bg-opacity-20 w-32 h-10 hover:opacity-80 mt-10"
        >
          Registracia
        </button>
      </div>
    </section>
  
    <section class="flex whitespace-nowrap overflow-auto scrollbar-hide">
      <img
        src="/src/assets/images/banner1.jpeg"
        class="h-96 rounded-lg m-4"
        alt=""
      />
      <img
        src="/src/assets/images/banner2.jpeg"
        class="h-96 rounded-lg m-4"
        alt=""
      />
      <img
        src="/src/assets/images/banner3.jpeg"
        class="h-96 rounded-lg m-4"
        alt=""
      />
      <img
        src="/src/assets/images/banner4.jpeg"
        class="h-96 rounded-lg m-4"
        alt=""
      />
    </section>
  
    <section class="grid grid-cols-4 gap-0 mx-16">
     
      <Card v-for="card in cards" :key="card" :title="card.title" :image="card.image" :rating="card.rating"/>
  
    </section>
  
  </section>
  </template>
  
  <script>
  
  
  import Searchbar from "./Searchbar.vue";
  import Backbtn from "./Backbtn.vue";
  import Card from "./Card.vue";
  
  export default {
    data() {
      return{
        cards: [ 
        {
          title: "McDonalds",
          image: 'https://imageproxy.wolt.com/venue/5e7380c5908a43f00c9e29dd/9e629e20-4437-11eb-b6ee-d6ad5cf43059_mcd_hero_photo_1010x544px.jpg?w=200',
          rating: 5
        },
        {
          title: "",
          image: "",
          rating: 5
        }
  
        ]
      }
    },
    components: { Searchbar, Backbtn, Card },
    
    data(){
      return{
        popup() {
          overlay.classList.remove("hidden");
          overlay.classList.add("flex");
          overlay.classList.add("overflow-hidden")
          regpage.classList.add("hidden")
          loginp.classList.remove("hidden")
        },
        register() {
          logpage.classList.add("hidden");
          regpage.classList.remove("hidden");
          regpage.classList.add("flex");
        },
        forgotpasword(){
          loginp.classList.remove("flex");
          loginp.classList.add("hidden");
          resetpasspage.classList.remove("hidden");
          resetpasspage.classList.add("flex");
          
        },
        close() {
          overlay.classList.remove("flex");
          overlay.classList.add("hidden");
        },
      }
    }
  };
  
  window.addEventListener("DOMContentLoaded", () => {
    const register = document.querySelector("#create-account");
    const loginp = document.querySelector("#login-page");
    const resetbtn = document.querySelector("#forgotten-password");
    const resetpasspage = document.querySelector("#reset-password-page");
  

    register.addEventListener("click", () => {

    });
  
    resetbtn.addEventListener("click", () => {

    });
  });
  
  
  
  </script>
  