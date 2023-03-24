<template>
  <div class="font-body py-[100px] bg-white dark:bg-[#161821] blue px-5 md:px-[100px]">
    <h2 class="text-5xl text-center font-bold leading-[1.3] m-0 pb-20 text-black dark:text-white">Login Register</h2>

    <div
      class="flex flex-col lg:flex-row items-start justify-center xl:justify-evenly lg:justify-between gap-3"
    >
      <Login />
      <Register />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});
</script>

<style scoped>
</style>