<template>
  <div ref="animate">
    <div class="grid md:grid-cols-3 lg:w-3/4 mx-auto gap-[30px]">
    <div class="flex flex-col justify-center items-center mb-[30px] px-3 py-0">
      <h2 class="text-[48px] text-[#20AD96] font-extrabold"><span>3.092</span>+</h2>
      <h4 class="title text-secondary dark:text-white">Registered enrolls</h4>
    </div>

    <div class="flex flex-col justify-center items-center mb-[30px] px-3 py-0">
      <h2 class="text-[48px] text-[#20AD96] font-extrabold">1.926</h2>
      <h4 class="title text-secondary dark:text-white">Finished Sessions</h4>
    </div>

    <div class="flex flex-col justify-center items-center mb-[30px] px-3 py-0">
      <h2 class="text-[48px] text-[#20AD96] font-extrabold">100%</h2>
      <h4 class="title text-secondary dark:text-white">Satisfaction rate</h4>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
  mounted() {
    const twoScroll = this.$twoScroll();
    twoScroll.reveal(this.$refs.animate);
  },
};
</script>
<style>
.title {
  margin-top: 14px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.34;
}

.rate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 12px;
}
</style>