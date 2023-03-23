<template>
  <div class="w-12/12">
    <div
      class="dark:bg-[#111] bg:white bg-cover bg-center text-[34px] font-[bold] leading-[48px] text-white mb-0 text-center pt-[200px] w-full">
      <h3 class="dark:text-[white] text-[#333] text-[34px] font-bold uppercase tracking-[2px] leading-[1.34] mt-3.5">
        I am happy with their arrangement of lessons <br />
        and subjects. They reflect a scientific<br />
        investigation.
      </h3>

      <div class="flex flex-col pt-[40px]">
        <span class="uppercase text-[15px] dark:text-white text-[#333] tracking-[1px] leading-[1.3] font-bold">uzazal
          hossain</span>
        <span class="mt-0 text-[15px] text-[#7E7E7E] font-light">/Front-end Developer</span>
      </div>

      <div class="py-[100px]">
        <div class="w-full grid grid-cols-1 md:grid-cols-4 text-center">
          <div v-for="rate in learningrates" :key="rate.number" class="rate">
            <h2 class="text-[48px] text-[#20AD96] font-extrabold">
              {{ rate.number }}
            </h2>
            <h4
              class="dark:text-[white] text-[#3f3a64] text-[15px] font-bold uppercase tracking-[2px] leading-[1.34] mt-3.5">
              {{ rate.title }}</h4>
          </div>
        </div>
      </div>

      <div class="mb-[-140px] relative flex justify-center items-center">
        <img class="image" src="/images/about/about-me/video-about-us-2.jpg" alt="image" />
        <img class="youtube" src="/images/icons/icon-youtube-play.png" alt="icon" />
      </div>

      <div class="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100" width="100%"
          fill="#161821">
          <path class="elementor-shape-fill" d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
        </svg>
      </div>
    </div>


    <div class="blue flex justify-center dark:bg-[#161821] bg-white">
      <headers class="py-[100px] w-8/12 flex flex-col items-center justify-center text-center">
        <template v-slot:headerone>Learn at your pace</template>
        <template v-slot:headertwo>
          Enjoyable
          <span class="text-[#20AD96] font-[400]">Benefits</span> For Our
          Learners.
        </template>
      </headers>
    </div>

    <div class="dark:bg-[#161821] bg-white px-40 pb-20 w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
      <AboutTwocard class="text-center flex justify-center items-center">
        <template v-slot:cardIcon>
          <img src="/images/learner/learner-01.png" />
        </template>
        <template v-slot:cardHead>Customize Freely to Your preferences</template>
        <template v-slot:cardP>Learners are given the right to arrange and customize their study
          schedule and timetable based on preferences.
        </template>
      </AboutTwocard>

      <AboutTwocard class="text-center flex justify-center items-center">
        <template v-slot:cardIcon>
          <img src="/images/learner/learner-02.png" />
        </template>
        <template v-slot:cardHead>Cloud Storage or Download Lessons to Devices</template>
        <template v-slot:cardP>Develop skills for career of various majors including computer
          science &amp; language competence.
        </template>
      </AboutTwocard>

      <AboutTwocard class="text-center flex justify-center items-center">
        <template v-slot:cardIcon>
          <img src="/images/learner/learner-03.png" />
        </template>
        <template v-slot:cardHead>Multimedia Study Materials & Info Channels</template>
        <template v-slot:cardP>We provide study materials with various formats: video, audio,
          slides, doc, prints, books and applications.
        </template>
      </AboutTwocard>
    </div>

    <div class="dark:bg-[#111] bg-[#f8f8f8] py-[100px] px-5 md:px-[100px]">
      <div class="grid grid-cols-1 xl:grid-cols-2 my-[100px] text-left justify-center items-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div
              class="mb-5 bg-white dark:bg-[#161821] flex flex-col px-[26px] py-[44px] rounded-md max-w-[376px] text-center blue justify-center items-center">
              <img class="w-[140px] h-[140px] rounded-[50%]"
                src="/images/testimonial/140/home-4-testimonial-avatar-01.png" alt="image" />

              <p class="text-[18px] leading-[30px] my-10 dark:text-[#dddddd] text-[#3F3A64]">
                I love their flexibility. Even when my request is too
                complicated to handle. they could still suggest something useful
                for me.
              </p>

              <div class="flex flex-col items-center justify-center">
                <div class="uppercase dark:text-white text-[#333] text-[15px] tracking-[1px] leading-[1.3]">
                  florence theme
                </div>
                <div class="text-[#7E7E7E] text-[15px] mt-[10px] tracking-[1px] leading-[1.3]">
                  /Multimedia Admin
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-[#161821]">
              <h2 class="p-[30px] max-w-[270px] text-[20px] bg-transparent font-bold leading-[30px] dark:text-white text-[#3f3a6a] blue ml-20">
                "Best out of the best in the online coaching field ..."
              </h2>
            </div>
          </div>

          <div class="gap-4">
            <div
              class="mb-5 bg-white dark:bg-[#161821] px-[25px] pt-[56px] pb-[36px] rounded-md max-w-[210px] max-h-[218px] text-center flex flex-col justify-center items-center">
              <h2 class="dark:text-white text-[#3f3a6a] text-[24px] leading-[1] font-bold">
                4.9/5.0
              </h2>

              <div class="flex flex-row mt-[8px] mb-[10px]">
                <i class="fa-solid fa-star w-4 h-4 text-[#fbff00]"></i>
                <i class="fa-solid fa-star w-4 h-4 text-[#fbff00]"></i>
                <i class="fa-solid fa-star w-4 h-4 text-[#fbff00]"></i>
                <i class="fa-solid fa-star w-4 h-4 text-[#fbff00]"></i>
                <i class="fa-solid fa-star w-4 h-4 text-[#fbff00]"></i>
                
              </div>

              <p class="dark:text-[#ddd] text-[#696969] text-[15px] leading-[1.74]">
                by 700+ Students for 3200+ Sales
              </p>
            </div>
            <div
              class=" bg-white dark:bg-[#161821] flex flex-col px-[26px] py-[44px] rounded-md max-w-[288px] text-center blue justify-center items-center">
              <img class="rounded-[50%]" src="/images/testimonial/100/home-4-testimonial-avatar-02.png" alt="image" />

              <p class="text-[18px] leading-[30px] my-10 dark:text-[#dddddd] text-[#3f3a6a]">
                Excellent guiding instructions. They are all great mentors at
                life &amp; career
              </p>

              <div class="flex flex-col items-center justify-center">
                <div class="uppercase dark:text-white text-[#333] font-bold text-[15px] tracking-[1px] leading-[1.3]">
                  fannie moreno
                </div>
                <div class="text-[#7E7E7E] text-[15px] mt-[10px] tracking-[1px] leading-[1.3]">
                  /Developer
                </div>
              </div>
            </div>
          </div>
        </div>

        <companionship class="xl:ml-24 mt-10 xl:mt-0">
          <template v-slot:headerone>together expand and grow</template>
          <template v-slot:headertwo class="">
            <span class="text-[#3f3a6a] dark:text-white">Enjoy </span>
            <span class="text-[#20AD96] font-[400]">Our Companionship</span>
          </template>
          <template v-slot:content>
            <span class="text-[#696969] dark:text-[#ddd]">
              As learners, people can enjoy great companionship from MaxCoach
            mentors and educators. We can help you develop and grow at your
            best.
            </span>
          </template>
        </companionship>
      </div>
    </div>

    <!-- <div></div> -->

    <div >
      <AboutMailImage />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});
</script>


<script>
import AboutMailImage from '@/components/Public/About/AboutMailImage.vue'
export default {
  data() {
    return {
      learningrates: [{
        number: 1.926,
        title: 'Finished sessions'
      },
      {
        number: 3.092,
        title: 'online enrollment'
      },
      {
        number: 200,
        title: 'Subjects taught'
      }, {
        number: 150,
        title: 'Satisfaction rate'
      }
      ]
    }
  }
}
</script>


<style scoped>


.rate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 12px;
}
</style>