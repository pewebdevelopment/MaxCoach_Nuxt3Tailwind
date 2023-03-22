<template>
  <div class="w-full padding-responsive bg-[#111]">
    <div class="flex flex-col lg:flex-row items-center gap-6">
      <div class="mb-6 w-full lg:w-8/12">
        <h4
          class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]"
        >
          <div class="text-[#8C89A2]">Enjoyable insights</div>
        </h4>
        <h2
          class="mb-4 text-[24px] lg:text-[34px] text-white font-[700] leading-[56px]"
        >
          Most Viewed
          <span class="text-[#20AD96] font-[300]">Best Blogs</span>
        </h2>

        <div class="text-[#ddd] text-[15px] font-bold text-left">
          <button class="hover flex items-center mt-10 mb-4 text-left">
            <i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i> &nbsp; Become a Better
            Blogger: Content Planning
          </button>
          <button class="hover flex items-center mb-4 text-left">
            <i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i> &nbsp; Promoting Your
            Online Business on Pinterest
          </button>
          <button class="hover flex items-center mb-4 text-left">
            <i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i> &nbsp; Gamification and
            Game-Based Learning
          </button>
          <button class="hover flex items-center mb-4 text-left">
            <i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i> &nbsp; Designing an
            Online Course from Expert’s Perspective
          </button>
          <button class="hover flex items-center mb-4 text-left">
            <i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i> &nbsp; Why Online Courses
            Are the Future of Education
          </button>
        </div>
      </div>

      <div class="flex flex-wrap xl:flex-nowrap gap-4">
        <div
          v-for="course in courses"
          :key="course.id"
          class="w-full rounded-md md:min-w-[300px] lg:max-w-[370px] text-white transition-all ease-linear duration-[1s] group overflow-hidden" 
        >
          <div class="w-full">
            <div class="thumbnail">
              <a href="blog/12-essential-bodyweight-exercises" class="image"
                ><img
                  class="rounded-t-md w-full group-hover:scale-125 group-hover:transition-all duration-[1s]"
                  :src="course.image"
              /></a>
            </div>

            <div class="p-8 pb-10 blue rounded-b-md">
              <span
                class="text-[15px] text-[#8C89A2] tracking-[1px] uppercase leading-[1.74] mb-1"
              >
                {{ course.bio }}</span
              >
              <h3
                class="text-[20px] text-white hover: font-extrabold leading-[1.5] mb-1 group-hover:text-[#20ad96]"
              >
                {{ course.title }}
              </h3>

              <div
                class="flex justify-start items-center mt-5 text-[14px] font-light"
              >
                <span class="flex justify-centere items-center text-white">
                
                  <i class="fa-regular fa-calendar-days w-4 h-4 mr-2"></i>
                  {{ course.date }}
                </span>

                <span class="ml-4 flex justify-centere items-center text-white">
                  
                  <i class="fa-regular fa-eye w-4 h-4 mr-2"></i>
                  {{ course.views }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
data(){
return {
courses: [
    {
        id: 1,
        image: "/images/blog/340/blog-01.jpg",
        bio: 'Artist',
        date: 'Apr 06, 2020',
        title: '10 Essential Bodyweight Exercises',
        views: '70 views'
    },

        {
        id: 2,
        image: "/images/blog/340/blog-02.jpg",
        bio: 'Artist',
        date: 'Apr 06, 2020',
        title: 'Pocket-Sized Notebooks Hold Miniature Paintings',
        views: '64 views'
    }

]
}
}
}
</script>

<style scoped>
.hover:hover {
  color: #20ad96;
}
.hover:hover .icon {
  color: #20ad96;
  
}
</style>