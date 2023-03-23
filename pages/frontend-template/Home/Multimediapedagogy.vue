<template>
  <div class="">
    <div class="relative w-full py-[250px] bg-[url('/images/intro/intro4/bg-1.jpg')] text-center">
      <h1 class="font-medium tracking-[2px] leading-[1.29] text-[white] w-full mb-2 text-[56px]">
        Expand Your Possibilities
       <span class="text-[#20ad96]">Positively</span>
      </h1>
      <span class="sub-title">Reach out to the most competent &amp; passionate mentors</span>

      <div class="flex flex-col sm:flex-row items-center justify-center mt-[35px]">
        <button
          class="bg-white hover:green rounded-md text-[14px] font-bold text-[#111] hover:text-white py-4 px-10 mx-2">
          Free Consultation
        </button>
        <button
          class="bg-transparent hover:green rounded-md text-[14px] font-bold text-white border-[0.2px] border-white hover:border-[#20ad96] py-4 px-10 mt-4 sm:mt-0 flex items-center mx-2">
          <i class="fa-solid fa-play mr-3"></i>
          How we work
        </button>
      </div>

      <div>
        <div class="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100"
            width="100%" fill="#111">
            <path class="elementor-shape-fill" d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
          </svg>
        </div>
      </div>
    </div>

    <div>
      <multimediaone />
    </div>

    <div>
      <multimediatwo />
    </div>

    <div>
      <multimediathree />
    </div>

    <div>
      <multimediafour />
    </div>

    <div class="bg-[#111] padding-responsive">
      <trendingblogs />
    </div>

    <div class="bg-[url('/images/bg/subscribe-bg.jpg')]">
      <aboutmail />
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: "frontend",
});

</script>



<style scoped>
.sub-title {
  display: block;
  font-size: 18px;
  line-height: 1.78;
  font-weight: 500;
  color: white;
  margin-bottom: 45px;
}






</style>