<template>
  <div class="w-12/12 grid grid-cols-1 lg:grid-cols-2 gap-4 py-10" ref="animate">
    <div v-for="course in courses" :key="course.id" class="
          w-12/12
          rounded-md
          min-w-[300px]
          max-w-full
          text-white
          hover:scale-105
          ease-in-out
          duration-150
          hover:drop-shadow-md hover:shadow-gray-900 hover:shadow-lg
        ">
      <div class="
            w-full
            flex
            justify-center
            items-center
            sm:flex-row
            flex-col
            p-10
            
          ">
        <div class= ' w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] rounded-full ' :class="bg-[course.image]">
          <img :src="course.image" alt="" class="w-full h-full object-cover rounded-full" />
        </div>

        <div class="p-5">
          <h2 class="text-[#20ad96] text-[24px] font-bold mb-3">
            {{ course.price }}
          </h2>

          <h4 class="text-white text-[20px] font-bold hover:text-[#20ad96] hover:cursor-pointer"> 
            {{ course.title }}
          </h4>

          <div class="flex justify-start items-center mt-5 text-[14px] font-light">
            <span class="flex justify-centere items-center text-white">
              <!-- <icon class="w-4 h-4 mr-2" name="uil:file-alt" /> -->
              <i class="fa-regular fa-file-lines"></i> &nbsp;
              {{ course.lessons }}
            </span>

            <span class="ml-4 flex justify-centere items-center text-white">
              <!-- <icon class="w-4 h-4 mr-2" name="uil:users-alt" /> -->
              <i class="fa-regular fa-user"></i> &nbsp;
              {{ course.students }}
            </span>
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
          title: 'Customer-centric Info-Tech Strategies',
          lessons: '40 Lessons',
          students: '80 Students'
        },

        {
          id: 3,
          image: "/images/courses/370/course-3.jpg",
          price: '$' + 19,
          title: 'Open Programming Course for Everyone: Python',
          lessons: '16 Lessons',
          students: '57 Students'
        },

        {
          id: 4,
          image: "/images/courses/370/course-4.jpg",
          price: '$' + 26,
          title: 'Academic Listening and Note-taking',
          lessons: '20 Lessons',
          students: '51 Students'
        },

        {
          id: 5,
          image: "/images/courses/370/course-5.jpg",
          price: '$' + 40,
          title: 'Master jQuery in a Short Period of Times',
          lessons: '20 Lessons',
          students: '51 Students'
        },

        {
          id: 6,
          image: "/images/courses/370/course-6.jpg",
          price: '$' + 40,
          title: 'Introduction to Javascript for Beginners',
          lessons: '40 Lessons',
          students: '80 Students'
        }

      ]
    }
  },
  mounted() {
    const twoScroll = this.$twoScroll();
    twoScroll.reveal(this.$refs.animate);
  },
}
</script>

<style></style>