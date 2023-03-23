<template>
  <div ref="animate">
    <headers class="text-center">
    <template v-slot:headerone>Join match coach at best</template>
    <template v-slot:headertwo>Latest Online
      <span class="text-[#20ad96] font-light">Courses</span></template>
  </headers>
  </div>
  <div ref="animate2">
    <div class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 rounded-md overflow-hidden">
    <div v-for="course in courses" :key="course.id"
      class="w-12/12 rounded-md min-w-[300px] max-w-full text-white  ease-in-out duration-150 ">
      <div class="rounded-md ">
        <div class="h-[229px] bg-gray-500 rounded-t-md">
          <img :src="course.image" alt="" class="w-full" />
        </div>

        <div class="p-10 blue bg-white dark:bg-[#161821] rounded-b-md">
          <h2 class="text-[#20ad96] text-[24px] font-bold mb-3">
            {{ course.price }}
          </h2>

          <h4 class="dark:text-white text-black hover:text-[#20ad96] dark:hover:text-[#20ad96] hover:cursor-pointer text-[20px] font-bold">
            {{ course.title }}
          </h4>

          <div class="flex justify-start items-center mt-5 text-[14px] font-light">
            <span class="flex justify-centere items-center text-black dark:text-white">
              
              <i class="fa-regular fa-file-lines w-4 h-4 mr-2"></i>
              {{ course.lessons }}
            </span>

            <span class="ml-4 flex justify-centere items-center text-black dark:text-white">
              
              <i class="fa-sharp fa-regular fa-user w-4 h-4 mr-2"></i>
              {{ course.students }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div class="w-full flex justify-center mt-10">
    <p class="
            w-10/12
            md:w-6/12
            text-[18px] text-center
            font-medium
            text-[#8C89A2]
          ">
        Get the most dedicated consultation for your life-changing course. Earn
        a certification for your effort and passion
        <NuxtLink to="/frontend-template/about/contactus" class=" hover:cursor-pointer">
          <span class="
            font-bold leading-none relative text-[#20ad96] bg-[rgba(0,0,0,0)] px-0 py-[3px] before:transition-transform before:duration-[0.6s] before:ease-[cubic-bezier(.165,0.84,0.44,1)] before:delay-[0.3s] before:origin-right before:bg-[#e0e0e0] before:scale-x-[100%] before:translate-y-0 before:absolute before:w-full before:h-px before:content-[''] before:left-0 before:bottom-0 after:transition-transform after:duration-[0.6s] after:ease-[cubic-bezier(.165,0.84,0.44,1)] after:origin-left after:bg-[#20ad96] after:scale-x-0 after:translate-y-0 after:absolute after:w-full after:h-px after:content-[''] after:left-0 after:bottom-0 hover:after:scale-x-[100%] hover:after:translate-y-0 hover:before:scale-x-0 hover:before:translate-y-0
            ">Get Free Guide
            <!-- <icon name="uil:arrow-right" class="icon" /> -->
            <i class="fas fa-arrow-right text-['#20ad96']"></i>
          
          </span>
        </NuxtLink>
      </p>
   
  </div>
</template>

<script>

export default {
  data() {
    return {
      courses: [
        {
          id: 1,
          image: "/images/courses/370/course-1.jpg",
          price: '$' + 40,
          title: 'Learning to Write as a Professional Author',
          lessons: '20 Lessons',
          students: '51 Students'
        },

        {
          id: 2,
          image: "/images/courses/370/course-2.jpg",
          price: 'Free',
          title: 'Customer-Centric-Info-Tech-Strategies',
          lessons: '40 Lessons',
          students: '80 Students'
        },

        {
          id: 3,
          image: "/images/courses/370/course-3.jpg",
          price: '$' + 19,
          title: 'Open Programming Courses for Everyone: Python',
          lessons: '16 Lessons',
          students: '57 Students'
        }

      ]
    }
  },
  mounted() {
    const twoScroll = this.$twoScroll();
    twoScroll.reveal(this.$refs.animate);
    twoScroll.reveal(this.$refs.animate2);
  },
}
</script>

<style></style>