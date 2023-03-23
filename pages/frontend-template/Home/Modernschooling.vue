<template>
  <div>
    <Schoolingone />
  </div>
  <div>
    <Schoolingtwo />
  </div>
  <div class="py-[50px] dark:bg-[#111] bg-[#f8f8f8]">
    <aboutrates />

    <div class="px-[100px] pt-[50px]">
      <schoolingthree />
    </div>

    <div class="blue pb-[100px] rounded-br-[40%] dark:bg-[#161821] bg-white">
      <schoolingfour />
    </div>

    <div class="md:py-[100px] px-5">
      <schoolingfive />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});
</script>