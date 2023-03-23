


<template>
  <div class="blue py-[100px] bg-white dark:bg-[#161821]">
    <!-- <div class="bg-white"> -->
    <div class="mx-6 md:mx-[100px]" ref="animate">
      <headers class="flex flex-col items-center justify-center text-center">
        <template v-slot:headerone>start learning coding languages</template>
        <template v-slot:headertwo>
          <div class="text-[48px]">
            Build Your Dream
            <span class="text-[#20AD96] font-[400]">Today</span>
          </div>
        </template>
      </headers>

      <div class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" ref="animate2">
        <indextwocard>
          <template v-slot:cardIcon>
            <img src="/images/learner/home-5-image-box-01.png" alt="icon" />
          </template>

          <template v-slot:cardHead>Ideal Discussion</template>
          <template v-slot:cardP>Get teamed up with the specialists who work and teach coding for
            years at famous universities.
          </template>
        </indextwocard>

        <indextwocard>
          <template v-slot:cardIcon>
            <img src="/images/learner/home-5-image-box-02.png" alt="icon" />
          </template>
          <template v-slot:cardHead>Web Development</template>
          <template v-slot:cardP>Learn to start building a webpage from scratch. You decide your own
            pace, course and speed.
          </template>
        </indextwocard>

        <indextwocard>
          <template v-slot:cardIcon>
            <img src="/images/learner/home-5-image-box-03.png" alt="icon" />
          </template>
          <template v-slot:cardHead>System Administration</template>
          <template v-slot:cardP>Learners are encouraged to study the mechanism and structure of
            system administration.
          </template>
        </indextwocard>

        <indextwocard>
          <template v-slot:cardIcon>
            <img src="/images/learner/home-5-image-box-04.png" alt="icon" />
          </template>
          <template v-slot:cardHead>Graphic Design</template>
          <template v-slot:cardP>Have a passion for graphics and arts? Show your talents with
            confidence and self-assertiveness.
          </template>
        </indextwocard>
      </div>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 items-center mt-[50px]">
        <div>
          <img src="/images/about/about03/about-us-03-image-01.png" alt="about" />
        </div>

        <div>
          <div class="mb-6 w-full" ref="animate3">
            <h4 class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]">
              Everything <strong>Maxcoach</strong>
            </h4>
            <h2 class="mb-4 text-[28px] lg:text-[48px] dark:text-white text-[#3f3a64] font-[700] leading-[56px] w-full">
              Construct A
              <span class="text-[#20AD96] font-[400]">Stunning</span><br />
              Career Perspective
            </h2>
          </div>

          <div class="mb-4">
            <button @click="open = !open" v-if="open"
              class="shadow-[0_15px_50px_rgb(51_51_51_/_10%)]  block text-lg font-semibold leading-[1.2] pl-[25px] pr-10 py-5 rounded-[5px_5px_0_0] relative text-left w-full bg-[#20ad96] dark:text-white text-white ">
              Multiple Platforms Supported for Teaching &amp; Studying

              <i class="fa-solid fa-circle-minus ml-[70px] absolute top-[40%] right-2 font-bold text-white w-6 h-6"></i>
            </button>
            <button @click="open = !open" v-else
              class="shadow-[0_15px_50px_rgb(51_51_51_/_10%)] text-[#696969] block text-lg font-semibold leading-[1.2] pl-[25px] pr-10 py-5 rounded-[5px_5px_0_0] relative text-left w-full  bg-white">
              Multiple Platforms Supported for Teaching &amp; Studying
              <i
                class="fa-solid fa-circle-plus ml-[70px] absolute top-[40%] right-2 font-bold text-[#696969] w-6 h-6"></i>
            </button>

            <Transition name="close">
              <div v-if="open"
                class="dark:bg-[#111] bg-[white] font-normal tracking-normal leading-[1.74] text-[15px] shadow-[0_20px_40px_rgb(0_0_0_/_7%)] transition-all duration-[0.3s] ease-[cubic-bezier(0.645,0.045,0.355,1)] pt-[27px] pb-[39px] px-[25px] rounded-[0_0_5px_5px] border-0 border-none">
                <p class="dark:bg-[#111] bg-white text-[#696969] dark:text-white">
                  MaxCoach supports the act of teaching and learning on multiple
                  platforms like online or offline via material downloads. We
                  know things aren’t supposed to be devoured in a short time,
                  you can always access our knowledge base from any device.
                </p>
              </div>
            </Transition>
          </div>

          <div class="mb-4 relative">
            <button @click="open2 = !open2" v-if="open2" class="shadow-[0_15px_50px_rgb(51_51_51_/_10%)]  block text-lg font-semibold leading-[1.2] pl-[25px] pr-10 py-5 rounded-[5px_5px_0_0] relative text-left w-full bg-[#20ad96] dark:text-white text-white ">
              Multiple Course Participation at the Same Time
              <i
                class="fa-solid fa-circle-minus ml-[70px] absolute top-[40%] right-2 font-bold text-white w-6 h-6"></i>
            </button>
            <button @click="open2 = !open2" v-else class="shadow-[0_15px_50px_rgb(51_51_51_/_10%)] text-[#696969] block text-lg font-semibold leading-[1.2] pl-[25px] pr-10 py-5 rounded-[5px_5px_0_0] relative text-left w-full  bg-white">
              Multiple Course Participation at the Same Time
              <i
                class="fa-solid fa-circle-plus ml-[70px] absolute top-[40%] right-2 font-bold text-[#696969] w-6 h-6"></i>
            </button>

            <Transition name="close">
              <div v-if="open2"
                class="dark:bg-[#111] bg-[white] font-normal tracking-normal leading-[1.74] text-[15px] shadow-[0_20px_40px_rgb(0_0_0_/_7%)] transition-all duration-[0.3s] ease-[cubic-bezier(0.645,0.045,0.355,1)] pt-[27px] pb-[39px] px-[25px] rounded-[0_0_5px_5px] border-0 border-none">
                <p class="dark:bg-[#111] bg-white text-[#696969] dark:text-white">
                  MaxCoach supports the act of teaching and learning on multiple
                  platforms like online or offline via material downloads. We
                  know things aren’t supposed to be devoured in a short time,
                  you can always access our knowledge base from any device.
                </p>
              </div>
            </Transition>
          </div>

          <div class="mb-4 relative">
            <button @click="open3 = !open3" v-if="open3" class="shadow-[0_15px_50px_rgb(51_51_51_/_10%)]  block text-lg font-semibold leading-[1.2] pl-[25px] pr-10 py-5 rounded-[5px_5px_0_0] relative text-left w-full bg-[#20ad96] dark:text-white text-white ">
              Track Study Progress &amp; Deliver Prompt Feedback

              <i
                class="fa-solid fa-circle-minus ml-[70px] absolute top-[40%] right-2 font-bold text-white w-6 h-6"></i>
            </button>
            <button @click="open3 = !open3" v-else class="shadow-[0_15px_50px_rgb(51_51_51_/_10%)] text-[#696969] block text-lg font-semibold leading-[1.2] pl-[25px] pr-10 py-5 rounded-[5px_5px_0_0] relative text-left w-full  bg-white">
              Track Study Progress &amp; Deliver Prompt Feedback

              <i
                class="fa-solid fa-circle-plus ml-[70px] absolute top-[40%] right-2 font-bold text-[#696969] w-6 h-6"></i>
            </button>

            <Transition name="close">
              <div v-if="open3"
                class="dark:bg-[#111] bg-[white] font-normal tracking-normal leading-[1.74] text-[15px] shadow-[0_20px_40px_rgb(0_0_0_/_7%)] transition-all duration-[0.3s] ease-[cubic-bezier(0.645,0.045,0.355,1)] pt-[27px] pb-[39px] px-[25px] rounded-[0_0_5px_5px] border-0 border-none">
                <p class="dark:bg-[#111] bg-white text-[#696969] dark:text-white">
                  MaxCoach supports the act of teaching and learning on multiple
                  platforms like online or offline via material downloads. We
                  know things aren’t supposed to be devoured in a short time,
                  you can always access our knowledge base from any device.
                </p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      open: false,
      open2: false,
      open3: false,

    }
  },
  mounted() {
    const twoScroll = this.$twoScroll();
    twoScroll.reveal(this.$refs.animate);
    twoScroll.reveal(this.$refs.animate2);
    twoScroll.reveal(this.$refs.animate3);
    
  },
}
</script>

<style scoped>
.card-body {
  background: #111;
  padding: 27px 25px 39px;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 1.74;
  font-size: 15px;
  border: 0 none;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 20px 40px rgb(0 0 0 / 7%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

img {
  color: white;
}
</style>