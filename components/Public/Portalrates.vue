<template>
  <div
    class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center px-5 md:px-[100px] dark:bg-[#161821] bg-white py-[50px]"
  >
    <div v-for="rate in learningrates" :key="rate.number" class="flex flex-col justify-center items-center px-3 py-0">
      <div class="mb-[50px] lg:mb-[20px]">
        <div
          class="text-[18px] lg:text-[24px] font-bold max-w-[180px] dark:text-white text-[#3F3A64]  mb-[20px] leading-[1.34]"
        >
          {{ rate.type }}
        </div>
        <h2 class="large-rate">
          {{ rate.number }}
        </h2>
        <h4 class="dark:text-[white] text-[#696969] text-[15px] font-bold uppercase tracking-[2px] leading-[1.34] mt-3.5">{{ rate.title }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
learningrates: [{
  number: 1790,
  title: 'ENROLLED LEARNERS',
  type: 'Successfully trained',
},
{
  number: 19,
  title: 'COUNTRYWIDE AWARDS',
  type: 'Proudly Received'
},
{
  number: 24,
  title: 'LOCAL BRANCHES',
  type:'Firmly Established'
},
{
  number: 1090,
  title: 'BLOG POSTS',
  type:'Getting Featured on'
}
]
    }
  }
}
</script>

<style scoped>

</style>