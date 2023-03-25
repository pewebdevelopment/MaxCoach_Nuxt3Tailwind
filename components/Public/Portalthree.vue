<template>
  <div>
    <div class="pt-[100px] dark:bg-[#111] bg-[#f8f8f8]">
      <div class="text-center text-white" ref="animate">
        <h6 class="mb-[30px] text-[24px] text-[#20AD96] font-md leading-[1.34]">
          Greate words about Maxcoach
        </h6>
        <h2 class="text-[48px] leading-[1.42] font-bold dark:text-white text-[#3F3A64]">
          What make they love us?
        </h2>
      </div>

      <div class="px-5 md:px-10 pb-20">
        <loveusslider />
      </div>

      <div>
        <onlinecertification />
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