<template>
  <div class="mx-[20px] md:mx-[100px] ">
    <div class="grid grid-cols-1 lg:grid-cols-2 text-left pt-[100px] items-center">
      <div class="mb-6 w-full lg:w-8/12 ml-10">
        <div ref="animate">
          <h4 class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]">
            why hesitate to register?
          </h4>
          <h2 class="mb-4 text-[28px] lg:text-[48px] text-[#3f3a64] font-[700] leading-[56px] dark:text-white">
            Learn At Your<br />
            Own
            <span class="text-[#20AD96] font-[400]">Pace</span>
          </h2>
        </div>
        <ul class="flex flex-col mt-16">
          <li class="flex items-center mb-2">

            <i class="fa-solid fa-check w-6 text-[#20AD96] font-bold"></i>
            <p class="dark:text-[#ddd] text-[#696969] text-[15px] leading-[1.74] ml-5">
              Select &amp; customize courses to your preferences
            </p>
          </li>
          <li class="flex items-center mb-2">

            <i class="fa-solid fa-check w-6 text-[#20AD96] font-bold"></i>
            <p class="dark:text-[#ddd] text-[#696969] text-[15px] leading-[1.74] ml-5">
              Change the tutor and make arrangements
            </p>
          </li>
          <li class="flex items-center mb-2">

            <i class="fa-solid fa-check w-6 text-[#20AD96] font-bold"></i>
            <p class="dark:text-[#ddd] text-[#696969] text-[15px] leading-[1.74] ml-5">
              Participate in events to join others
            </p>
          </li>
          <li class="flex items-center mb-2">

            <i class="fa-solid fa-check w-6 text-[#20AD96] font-bold"></i>
            <p class="dark:text-[#ddd] text-[#696969] text-[15px] leading-[1.74] ml-5">
              Get the desired certificate delivered at house
            </p>
          </li>
        </ul>

        <button class="green hover:bg-[#3F3A64] rounded-md text-[15px] font-bold text-white py-4 px-10 mt-10">
          Get Free Guide
        </button>
      </div>

      <div>
        <img src="/images/others/home-5-image-01.png" alt="image" />
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 my-[100px] text-left items-center">
      <div class="relative flex justify-center items-center mb-10 lg:mb-0">
        <img src="/images/others/home-5-image-02.png" alt="image" />
      </div>

      <div class="mb-6 w-full lg:w-8/12 ml-10">
        <div ref="animate2">
          <h4 class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]">
            what are you looking for?
          </h4>
          <h2 class="mb-4 text-[28px] lg:text-[48px] text-[#3f3a64] dark:text-white font-[700] leading-[56px]">
            Learn on your<span class="text-[#20AD96] font-[400]">mobile</span><br />
            anytime!
          </h2>
        </div>
        <p class="dark:text-[#ddd] text-[#696969] text-[15px] leading-[1.74] mb-5">
          As learners, people can enjoy great companionship from MaxCoach
          mentors and educators. We can help you develop and grow at your best.
        </p>

        <button class="green hover:bg-[#3F3A64] rounded-md text-[15px] font-bold text-white py-4 px-10">
          Get Free Guide
        </button>
      </div>
    </div>

    <div class="px-[20px] md:px-[100px]">
      <div ref="animete3">
        <headers class="flex flex-col items-center justify-center text-center mb-10">
        <template v-slot:headerone>get in contact now</template>
        <template v-slot:headertwo>
          <div class="text-[48px]">
            Upcoming
            <span class="text-[#20AD96] font-[400]">Events</span>
          </div>
        </template>
      </headers>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-[64px]" ref="animate4">
        <div v-for="event in events" :key="event.day">
          <div
            class="before relative p-[31px] rounded-md dark:bg-[#111] bg-[#f8f8f8] flex items-start justify-between max-w-[576px] max-h-[167px] overflow-hidden">
            <div class="mr-[30px]">
              <div class="location">
                <i class="fa-sharp fa-solid fa-location-dot mr-2 text-[#7e7e7e]"></i>
                <span class="text-[#7e7e7e] text-[14px]">{{ event.location }}</span>
              </div>
              <h3 class="text-[20px] leading-[1.5] font-bold dark:text-white text-[#333333]">
                {{ event.title }}
              </h3>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-[48px] leading-[1] text-[#20AD96]">
                {{ event.day }}
              </div>
              <div class="text-[15px] font-bold dark:text-white text-[#333] uppercase">
                {{ event.month }}
              </div>
              <button
                class="green hover:bg-[#3F3A64] rounded-md text-[14px] leading-[30px] font-bold text-white py-0 px-[20px] mt-3">
                Get ticket
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center text-white justify-center mt-16">
        Excited about our event?
        <NuxtLink to="/frontend-template/blog/blogdetails" class=" hover:cursor-pointer">
          <span class="
                font-bold leading-none relative text-[#20ad96] bg-[rgba(0,0,0,0)] px-0 py-[3px] before:transition-transform before:duration-[0.6s] before:ease-[cubic-bezier(.165,0.84,0.44,1)] before:delay-[0.3s] before:origin-right before:bg-[#e0e0e0] before:scale-x-[100%] before:translate-y-0 before:absolute before:w-full before:h-px before:content-[''] before:left-0 before:bottom-0 after:transition-transform after:duration-[0.6s] after:ease-[cubic-bezier(.165,0.84,0.44,1)] after:origin-left after:bg-[#20ad96] after:scale-x-0 after:translate-y-0 after:absolute after:w-full after:h-px after:content-[''] after:left-0 after:bottom-0 hover:after:scale-x-[100%] hover:after:translate-y-0 hover:before:scale-x-0 hover:before:translate-y-0
                ">View All Events
            <!-- <icon name="uil:arrow-right" class="icon" /> -->
            <i class="fas fa-arrow-right text-[#20ad96]"></i>

          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      events: [
        {
          location: 'Texas,US',
          title: 'Storytelling workshop',
          day: 22,
          month: 'nov'
        },
        {
          location: 'Texas,US',
          title: 'Storytelling workshop',
          day: 22,
          month: 'nov'
        },
        {
          location: 'Texas,US',
          title: 'Storytelling workshop',
          day: 22,
          month: 'nov'
        },
        {
          location: 'Texas,US',
          title: 'Storytelling workshop',
          day: 22,
          month: 'nov'
        },
        {
          location: 'Texas,US',
          title: 'Storytelling workshop',
          day: 22,
          month: 'nov'
        },
        {
          location: 'Texas,US',
          title: 'Storytelling workshop',
          day: 22,
          month: 'nov'
        }
      ]
    }
  },
  mounted() {
    const twoScroll = this.$twoScroll();
    twoScroll.reveal(this.$refs.animate);
    twoScroll.reveal(this.$refs.animate2);
    twoScroll.reveal(this.$refs.animate3);
    twoScroll.reveal(this.$refs.animate4);



  },
}
</script>

<style scoped>
.location {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #7e7e7e;
  margin-bottom: 7px;
}

.before:hover::before {
  opacity: 100%;
}

.before::before {
  position: absolute;
  content: " ";
  top: 0;
  left: 0;
  bottom: 0;
  width: 3px;
  background: #20ad96;
  opacity: 0;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
