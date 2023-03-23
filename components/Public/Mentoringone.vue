<template>
  <div class="mx-[20px] md:mx-[100px]">
    <div class="grid grid-cols-1 lg:grid-cols-2 text-left pt-[100px]">
      <workcultureheader class="lg:mr-24">
        <template v-slot:headerone>Get to know about maxcoach</template>
        <template v-slot:headertwo>
          Learn about our
          <span class="text-[#20AD96] font-[400]">Work Culture</span>
          at MaxCoach
        </template>
        <template v-slot:content>
          Spend some time to visit our website or head office and discover our
          current courses, enrollment procedure, and registration deadline.
          We're opening new classes every beginning of each month.
        </template>
      </workcultureheader>

      <div class="relative mt-32 lg:mt-10">
        <img class="rounded-md w-full h-auto" src="/images/about/about01/about1.jpg" alt="about-01" />
        <img class="rounded-md absolute top-[-25%] right-0" src="/images/about/about01/about2.jpg" alt="about-02" />
      </div>
    </div>

    <div class="mt-20">
      <Rates />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 my-[100px] text-left">
      <div class="relative flex justify-center items-center mb-10 lg:mb-0 overflow-hidden hover:transition-scale hover:ease-in-out hover:duration-200">
        <img class="image h-full w-full hover:scale-110 transition-scale ease-in-out duration-200" src="/images/video/about-video.jpg" alt="image" />
        <img class="youtube" src="/images/icons/icon-youtube-play.png" alt="icon" />
      </div>

      <div class="mb-6 w-full lg:w-8/12 lg:ml-24">
        <h4 class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]">
          How We WOrk
        </h4>
        <h2 class="mb-4 text-[28px] lg:text-[48px] dark:text-white text-[#3f3a64] font-[700] leading-[56px]">
          Upgrade your skill
          <span class="text-[#20AD96] font-[400]">Upgrade your life</span> at
          Maxcoach
        </h2>
        <p class="dark:text-[#ddd] text-[15px] leading-[1.74] mb-5">
          Spend some time to visit our website or head office and discover our
          current courses, enrollment procedure, and registration deadline.
          We're opening new classes every beginning of each month.
        </p>

        <div class="inline-flex flex-row items-center text-[#20AD96] ">
          <NuxtLink to="/frontend-template/about/contactus" class=" hover:cursor-pointer">
        <span class="
              font-bold leading-none relative text-[#20ad96] bg-[rgba(0,0,0,0)] px-0 py-[3px] before:transition-transform before:duration-[0.6s] before:ease-[cubic-bezier(.165,0.84,0.44,1)] before:delay-[0.3s] before:origin-right before:bg-[#e0e0e0] before:scale-x-[100%] before:translate-y-0 before:absolute before:w-full before:h-px before:content-[''] before:left-0 before:bottom-0 after:transition-transform after:duration-[0.6s] after:ease-[cubic-bezier(.165,0.84,0.44,1)] after:origin-left after:bg-[#20ad96] after:scale-x-0 after:translate-y-0 after:absolute after:w-full after:h-px after:content-[''] after:left-0 after:bottom-0 hover:after:scale-x-[100%] hover:after:translate-y-0 hover:before:scale-x-0 hover:before:translate-y-0
              ">Download free guidebook
          <!-- <icon name="uil:arrow-right" class="icon" /> -->
          <i class="fas fa-arrow-right text-['#20ad96']"></i>

        </span>
      </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.youtube {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>