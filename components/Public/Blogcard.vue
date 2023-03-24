<template>
  <div class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
    <div v-for="course in courses" :key="course.id"
      class="group w-12/12 rounded min-w-[300px] max-w-[370px] dark:text-white  ease-in-out duration-150 hover:drop-shadow-sm hover:shadow-gray-900 hover:shadow-sm">
      <div class="">
        <div class="h-[229px] rounded-md overflow-hidden">
          <div class="thumbnail">
            <a href="blog/12-essential-bodyweight-exercises" class="image"><img class="rounded-md object-contain group-hover:scale-[1.15] transition-all ease-in-out duration-500"
                :src="course.image" /></a>
          </div>
        </div>

        <div class="p-8 pl-8 pb-10 dark:blue rounded-b-md">
          <span class="text-[15px] text-[#8C89A2] tracking-[1px] uppercase leading-[1.74] mb-1">
            {{ course.bio }}</span>
          <h3 class="text-[24px] hover: font-extrabold leading-[1.5] mb-1 hover:cursor-pointer hover:text-[#20ad96]">
            {{ course.title }}
          </h3>

          <div class="flex justify-start items-center mt-5 text-[14px] font-light">
            <span class="flex justify-centere items-center text-[#696969] dark:text-white">
              <i class="fa fa-calendar-day h-5 w-5" />
              {{ course.date }}
            </span>

            <span class="ml-4 flex justify-center items-center text-[#696969] dark:text-white">
              <i class="fa fa-clock h-5 w-5" />
              {{ course.views }}
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
          image: "/images/blog/370/blog-10.jpg",
          bio: 'Artist',
          date: 'Jan 15, 2020',
          title: 'Brush Strokes Energize Trees in Paintings',
          views: '46 views'
        },

        {
          id: 2,
          image: "/images/blog/370/blog-11.jpg",
          bio: 'lifestyle',
          date: 'Jan 15, 2020',
          title: 'Pocket-Sized Notebooks Hold Miniature Paintings',
          views: '50 views'
        },

        {
          id: 3,
          image: "/images/blog/370/blog-12.jpg",
          bio: 'artist',
          date: 'Jan 15, 2020',
          title: 'Connection Between Self-Portraits and Identity',
          views: '86 views'
        },

        {
          id: 4,
          image: "/images/blog/370/blog-1.jpg",
          bio: 'gym coaching',
          date: 'Jan 15, 2020',
          title: '12 Essential Bodyweight Exercises',
          views: '31 views'
        },

        {
          id: 5,
          image: "/images/blog/370/blog-2.jpg",
          bio: 'artist',
          date: 'Jan 15, 2020',
          title: 'How to Keep Workout Fresh in the New Year',
          views: '45 views'
        },

        {
          id: 6,
          image: "/images/blog/370/blog-3.jpg",
          bio: 'health coaching',
          date: 'Jan 15, 2020',
          title: '18 RD-Approved Foods to Support a Healthy',
          views: '14 views'
        }

      ]
    }
  }
}
</script>

<style></style>
