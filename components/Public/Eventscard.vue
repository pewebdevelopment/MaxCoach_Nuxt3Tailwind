<template>
  <div class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
    <div v-for="(event, index) in visibleCourses" :key="event.id" 
      class="hover w-12/12 mb-[30px] rounded-md overflow-hidden max-w-full min-w-[300px] dark:text-white group transition-all ease-in-out duration-500 hover:shadow-[3px_3px_10px_0px_#000] ">
      <div class="">
        <div class="relative h-[inherit] overflow-hidden">
          <img :src="event.image" alt="" class="w-full object-contain group-hover:scale-[1.15] transition-all ease-in-out duration-500" />
          <div class="absolute bg-[rgba(63,58,100,0.6)] opacity-0 invisible transition-all duration-[0.3s] ease-[ease-in-out] inset-0 flex items-center justify-center group-hover:opacity-[1] group-hover:visible">
            <button class="bg-white rounded-md text-[14px] font-bold text-[#20ad96] py-4 px-8">
              Get ticket
            </button>
          </div>
        </div>

        <div class="pad flex h-[15rem] flex-col justify-center items-center bg-[#f8f8f8] dark:bg-[#111] group-hover:bg-white dark:group-hover:bg-[#111]">
          <h2 class="text-center text-[#20ad96] text-[15px] font-[500] my-3 leading-[2px] uppercase">
            {{ event.date }}
          </h2>

          <h4 class="text-center text-[20px] font-bold hover:text-[#20ad96] hover:cursor-pointer">
            {{ event.title }}
          </h4>

          <div class="flex justify-start items-center mt-5 text-[14px]">
            <span class="flex dark:text-[#fff] text-[#696969] justify-center items-center">
              <i class="fa-solid fa-location-dot w-5 h-5"></i>
              {{ event.location }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="visibleCourses.length < events.length" class="w-full">
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
      events: [
        {
          id: 1,
          image: "/images/courses/370/course-1.jpg",
          date: 'Nov 22, 2020',
          title: 'Storytelling Workshop 2020',
          location: 'Texas, US',

        },

        {
          id: 2,
          image: "/images/courses/370/course-2.jpg",
          date: 'Oct 10, 2020',
          title: 'Painting Art Contest 2020',
          location: 'New York, US',
        },
        {
          id: 3,
          image: "/images/courses/370/course-3.jpg",
          date: 'Dec 25, 2020',
          title: 'International Art Fair 2020',
          location: 'Hamburg, Germany',
        },

        {
          id: 4,
          image: "/images/courses/370/course-4.jpg",
          date: 'Jan 20, 2020',
          title: 'Consumer Food Safety Education',
          location: 'Illinois, US',
        },

        {
          id: 5,
          image: "/images/courses/370/course-5.jpg",
          date: 'April 28, 2020',
          title: 'Learning to Write as a Professional Author',
          location: 'Chicago, US',
        },



        {
          id: 6,
          image: "/images/courses/370/course-6.jpg",
          date: 'March 10, 2020',
          title: 'How meditation improve your mental health',
          location: 'Washington DC, US',
        },
        {
          id: 7,
          image: "/images/courses/370/course-7.jpg",
          date: 'Sep 25, 2020',
          title: 'Dialogue for Action on Cancer Screening and Prevention',
          location: 'Hamburg, Germany',
        },
        {
          id: 8,
          image: "/images/courses/370/course-8.jpg",
          date: 'Dec 18, 2020',
          title: 'Workout routine and Longevity Meetup',
          location: 'New York, US',
        },
        {
          id: 9,
          image: "/images/courses/370/course-9.jpg",
          date: 'Nov 22, 2020',
          title: 'Learning Counsel Digital Transition Discussion Event – Chicago',
          location: 'Texas, US',
        },

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
      return this.events.slice(0, this.visibleCourseLimit);
    }
  },
  methods: {
    showMore() {
      this.visibleCourseLimit += 3;
    }
  }
}
</script>

<style>
.pad {
  padding: 20px 20px 60px;
}

.event-overlay-background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(63, 58, 100, 0.6);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.hover:hover m.event-overlay-background {
  opacity: 1;
  visibility: visible;
}
</style>