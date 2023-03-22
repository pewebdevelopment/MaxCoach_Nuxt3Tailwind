<template>
  <div class="padding-responsive blue lg:rounded-br-[50%]">
    <div>
      <div ref="animate">
        <headers class="text-center">
          <template v-slot:headerone>
            <div class="text-[15px]">maxcoach available courses</div>
          </template>
          <template v-slot:headertwo>
            <div class="title-responsive-h">
              Access
              <span class="text-[#20ad96] font-[400]">Smart Tutoring</span>
              Program For Benfits.
            </div>
          </template>
        </headers>

      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10" ref="animate">
        <AboutTwocard>
          <template v-slot:cardIcon>
            <img src="/images/learner/h2-learner-01.png" />
          </template>
          <template v-slot:cardHead>Customize Preferences</template>
          <template v-slot:cardP>Learners are given the right to arrange and customize their study
            schedule and timetable based on preferences.
          </template>
        </AboutTwocard>

        <AboutTwocard>
          <template v-slot:cardIcon>
            <img src="/images/learner/learner-02.png" />
          </template>
          <template v-slot:cardHead>Cloud Storage</template>
          <template v-slot:cardP>You can store online lessons via online cloud or download to your
            device and revise lessons on the way.
          </template>
        </AboutTwocard>

        <AboutTwocard>
          <template v-slot:cardIcon>
            <img src="/images/learner/h2-learner-02.png" />
          </template>
          <template v-slot:cardHead>Multimedia Channels</template>
          <template v-slot:cardP>We provide study materials with various formats: video, audio,
            slides, doc, prints, books and applications.
          </template>
        </AboutTwocard>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 my-[100px] text-left items-center">
        <div class="flex justify-center items-center overflow-hidden relative">
          <img class="w-[621px] lg:h-[417px] hover:scale-125 transition-all duration-[1.5s] ease-out "
            src="/images/video/home-2-popup-video-poster.jpg" alt="video poster" />
          <img src="/images/icons/icon-youtube-play.png" alt="icon"
            class="absolute z-[9] top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 align-middle max-w-full">
        </div>

        <div class="w-full">
          <div class="mb-6 w-full lg:w-8/12 lg:ml-24">
            <h4 class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]">
              <div class="text-[#8C89A2]">
                Get started <span class="font-bold">effortlessly</span>
              </div>
            </h4>
            <h2 class="mb-4 text-[28px] lg:text-[48px] text-white font-[700] leading-[56px]">
              Enjoy Our
              <span class="text-[#20AD96] font-[300]">Companionship</span>
            </h2>
            <p class="text-[#ddd] text-[15px] leading-[1.74] mb-5">
              Spend some time to visit our website or head office and discover
              our current courses, enrollment procedure, and registration
              deadline. We're opening new classes every beginning of each month.
            </p>

            <NuxtLink to="/frontend-template" class=" hover:cursor-pointer">
              <span class="
              font-bold leading-none relative text-[#20ad96] bg-[rgba(0,0,0,0)] px-0 py-[3px] before:transition-transform before:duration-[0.6s] before:ease-[cubic-bezier(.165,0.84,0.44,1)] before:delay-[0.3s] before:origin-right before:bg-[#e0e0e0] before:scale-x-[100%] before:translate-y-0 before:absolute before:w-full before:h-px before:content-[''] before:left-0 before:bottom-0 after:transition-transform after:duration-[0.6s] after:ease-[cubic-bezier(.165,0.84,0.44,1)] after:origin-left after:bg-[#20ad96] after:scale-x-0 after:translate-y-0 after:absolute after:w-full after:h-px after:content-[''] after:left-0 after:bottom-0 hover:after:scale-x-[100%] hover:after:translate-y-0 hover:before:scale-x-0 hover:before:translate-y-0
              ">Download Free Guidebook
                <!-- <icon name="uil:arrow-right" class="icon" /> -->
                <i class="fas fa-arrow-right text-['#20ad96']"></i>

              </span>
            </NuxtLink>
          </div>
        </div>
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