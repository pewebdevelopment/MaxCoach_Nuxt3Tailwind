<template>
  <div ref="animate">
    <headers class="text-center">
    <template v-slot:headerone>
      <div class="text-[15px]">
        CONSIDER REGISTERING OUR COURSES?
      </div>
    </template>
    <template v-slot:headertwo>
      <div class="title-responsive">
        Trending on
        <span class="text-[#20ad96] font-light">Our Blogs</span>
      </div>
    </template>
  </headers>
  </div>

  <div class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10" ref="animate2">
    <div v-for="course in courses" :key="course.id">
      <div class="w-full">
        <div class="relative w-12/12 rounded-md">
          <div class="thumbnail overflow-hidden">
            <a href="blog/12-essential-bodyweight-exercises" class="image "><img
                class="rounded-md w-full hover:scale-110 hover:cursor-pointer transition-all ease-in-out duration-300"
                :src="course.image" /></a>
          </div>
        </div>

        <div class="pt-5 relative px-0 pb-10 dark:bg-[#111] bg-[#f5f5f5] rounded-b-md">
          <span class="text-[15px] text-[#8C89A2] tracking-[1px] uppercase leading-[1.74] mb-1">
            {{ course.bio }}</span>
          <h3
            class="text-[24px] dark:text-white text-black hover:text-[#20ad96] dark:hover:text-[#20ad96] hover:cursor-pointer hover: font-extrabold leading-[1.5] mb-1">
            {{ course.title }}
          </h3>

          <div class="flex justify-start items-center mt-5 text-[14px] font-light">
            <span class="flex justify-centere items-center text-[#696969]">

              <i class="fa-solid fa-calendar-days w-4 h-4 mr-2"></i>
              {{ course.date }}
            </span>

            <span class="ml-4 flex justify-centere items-center text-[#696969]">

              <i class="fa-solid fa-eye w-4 h-4 mr-2"></i>
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

      ]
    }
  },mounted() {
    const twoScroll = this.$twoScroll();
    twoScroll.reveal(this.$refs.animate);
    twoScroll.reveal(this.$refs.animate2)
  },
}
</script>

<style></style>
