<template>
    <div class=" flex flex-col w-[19rem] m-4 drop-shadow-md ">
      <img class="w-[19rem] h-[11rem] rounded-t-2xl" :src="image" alt="">
      
      <div class="bg-[#F8EDE3] rounded-b-2xl">
        <h1 class="text-2xl mt-2 ml-4">{{ title }}</h1>

        <div class="flex flex-row ml-3 mb-2  ">
          <img v-for="index in rating" :key="index" src="src/assets/images/rating-star.png" alt="">

        </div>
      </div>

    </div>
</template>

<script>
export default {
  props:{
    title:{
      require: true,
      type: String,
    },
    image:{
      require: true,
      type: String
    },
    rating:{
      require: true,
      type: Number,
    }
  }
}
</script>
