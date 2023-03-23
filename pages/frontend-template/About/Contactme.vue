<template>
  <div class="blue py-[100px] px-5 md:px-[100px] bg-white dark:bg-[#161821]">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="flex flex-col">
        <div class="mb-[40px]">
          <span class="inline-block text-lg leading-none font-medium dark:text-[#ddd] text-[#333] mb-2.5">Get excited already?</span>
          <h2 class="text-[34px] leading-none font-bold dark:text-[white] text-[#333] mb-0">Reach me!</h2>
        </div>

        <div>
          <contactdetails />
        </div>
      </div>

      <div class="md:ml-20">
        <img
          class="rounded-[50%]"
          src="/images/others/contact.jpg"
          alt="image"
        />
      </div>
    </div>

    <div>
      <contactmeform />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});
</script>

<style scoped>
.sub-title {
  display: inline-block;
  font-size: 18px;
  line-height: 1;
  font-weight: 500;
  color: #ddd;
  margin-bottom: 10px;
}

.title {
  font-size: 34px;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 0;
  color: white;
}
</style>