<template>
  <div class="w-12/12 grid grid-cols-1 lg:grid-cols-2 gap-4 py-10" ref="animate">
    <div v-for="(course, index) in visibleCourses" :key="course.id" class="
            w-12/12
            rounded-md
            min-w-[300px]
            max-w-full
            text-white
            
            ease-in-out
            duration-150
            
            
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
        <div class=' w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] rounded-full ' :class="bg - [course.image]">
          <img :src="course.image" alt="" class="w-full h-full object-cover rounded-full" />
        </div>

        <div class="p-5">
          <h2 class="text-[#20ad96] text-[24px] font-bold mb-3">
            {{ course.price }}
          </h2>

          <h4 class="dark:text-white text-[20px] font-bold text-[#3f3a64] hover:text-[#20ad96] hover:cursor-pointer">
            {{ course.title }}
          </h4>

          <div class="flex justify-start items-center mt-5 text-[14px] font-light">
            <span class="flex justify-centere items-center text-[#333] dark:text-[#ddd]">
              
              <i class="fa-regular fa-file-lines w-4 h-4 mr-2"></i> &nbsp;
              {{ course.lessons }}
            </span>

            <span class="ml-4 flex justify-centere items-center text-[#333] dark:text-[#ddd]">
              
              <i class="fa-regular fa-user w-4 h-4 mr-2"></i>
              {{ course.students }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="visibleCourses.length < courses.length" class="w-full">
    <div class="flex justify-center w-full">
      <button
        class="
          flex
          justify-center
          items-center
          text-[#20ad96] text-[14px]
          hover:bg-[#20ad96]
          hover:boder-none
          hover:text-white
          font-bold
          py-3
          px-20
          rounded-md
          border
          dark:border-white
          shadow
        "
        @click="showMore"
      >
        Load More
        
        <i class="fa-solid fa-circle-chevron-down h-5 w-5 ml-2"></i>
      </button>
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
        }, {
          id: 7,
          image: "/images/courses/370/course-7.jpg",
          price: '$' + 19,
          date: 'SEP 25, 2020',
          title: 'Problem-Solving Skills for Better Success',
          lessons: '16 Lessons',
          students: '57 Students'
        },
        {
          id: 8,
          image: "/images/courses/370/course-8.jpg",
          price: '$' + 35,
          date: 'JUL 15, 2020',
          title: 'Speed Reading Techniques in University',
          lessons: '36 Lessons',
          students: '45 Students'
        },
        {
          id: 9,
          image: "/images/courses/370/course-9.jpg",
          price: '$' + 95,
          date: 'FEB 18, 2020',
          title: 'Database & SQL for Computer Science',
          lessons: '25 Lessons',
          students: '42 Students'
        },
        {
          id: 10,
          image: "/images/courses/370/course-10.jpg",
          price: '$' + 49,
          date: 'APR 28, 2020',
          title: 'Intermedia English Speaking Practice',
          lessons: '65 Lessons',
          students: '70 Students'
        },
        {
          id: 11,
          image: "/images/courses/370/course-11.jpg",
          price: '$' + 29,
          date: 'JUN 10, 2020',
          title: 'Complete Fitness Trainer: Beginner to Advanced',
          lessons: '16 Lessons',
          students: '57 Students'
        },
        {
          id: 12,
          image: "/images/courses/370/course-12.jpg",
          price: '$' + 36,
          date: 'MAR 18, 2020',
          title: 'Lazy Dancer Baller Burn - 30 days programme',
          lessons: '15 Lessons',
          students: '23 Students'
        }

      ],
      
      visibleCourseLimit: 6
    }
  },
  mounted() {
    const twoScroll = this.$twoScroll();
    twoScroll.reveal(this.$refs.animate);
  },
  
  computed: {
    visibleCourses() {
      return this.courses.slice(0, this.visibleCourseLimit);
    }
  },
  methods: {
    showMore() {
      this.visibleCourseLimit += 2;
    }
  }
}
</script>

<style></style>