<template>
  <div>
    <div class="w-12/12">
      <div class="bg-[url('/images/page-banner/about-us-01-hero-bg.jpg')] bg-cover bg-center text-[34px] font-[bold] leading-[48px] text-white mb-0 text-center py-[200px] w-full">
        Grow strong to take up the challenges of life.<br />
        The top lessons for getting you back on track.
      </div>

      <div class="bg-white dark:bg-[#161821] py-[200px]">
        <workculture />
      </div>

      <div class="pt-[100px] dark:bg-[#111] bg-[#f8f8f8]">
        <div class="text-center text-white">
          <h6
            class="mb-[30px] text-[24px] text-[#20AD96] font-md leading-[1.34]"
          >
            Greate words about Maxcoach
          </h6>
          <h2 class="text-[48px] leading-[1.42] font-bold text-[#3F3A64]">
            What make they love us?
          </h2>
        </div>

        <div class="px-5 md:px-10 pb-20">
          <loveusslider />
        </div>

        <div
          class="text-center flex flex-col justify-center items-center pb-[100px]"
        >
          <div
            class="text-[24px] font-bold text-[#8C89A2] leading-[1] mb-[10px]"
          >
            Start today for getting
            <span class="text-[#20ad96] font-light">Online Certification</span>
          </div>
          <div class="text-[34px] font-bold dark:text-white text-[#3F3A64] mb-[30px] leading-[1.3]">
            You can be your own guiding star with our help!
          </div>
          <button
            class="text-[14px] text-white font-bold px-20 py-4 bg-[#20ad96] hoverr:bg-[#3F3A64] rounded-md"
          >
            Get started for free
          </button>
        </div>

        <div class="bg-white dark:bg-[#161821] pt-[100px]">
          <Inspirations />
        </div>
      </div>
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