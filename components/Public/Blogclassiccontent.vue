<template>
  <div v-for="blog in blogs" :key="blog.id">
    <div class="w-12/12 py-10 border-b border-b-1 border-[#555] overflow-hidden">
      <img class="w-full rounded-md hover:scale-[1.05] transition-all ease-in-out duration-500" :src="blog.image" alt="Connection Between Self-Portraits and Identity" />

      <div>
        <div class="p-8 pl-0 pb-10 dark:blue rounded-b-md">
          <span class="text-[15px] dark:text-[#8C89A2] text-[#696969] tracking-[1px] uppercase leading-[1.74] mb-1">
            {{ blog.bio }}</span>
          <h3 class="text-[24px] dark:text-white text-[#333] hover: font-extrabold leading-[1.5] mb-1">
            {{ blog.title }}
          </h3>

          <div class="flex justify-start items-center mt-5 text-[14px] font-light dark:text-[#ddd] text-[#696969]">
            <span class="flex justify-center items-center mr-4">
              <img src="/images/blog/blog-avatar.jpg" alt="image" class="rounded-[50%] mr-2 w-[32px] h-[32px]" />
              <span
                class="dark:text-[#ddd] text-[#696969] hover:text-[#20ad96] dark:hover:text-[#20ad96] hover:cursor-pointer">{{
                  blog.name }}</span>
            </span>

            <span class="flex justify-center items-center dark:text-[#ddd] text-[#696969]">

              <i class="fa-solid fa-calendar-days w-4 h-4 mr-2"></i>
              <span class="dark:text-[#ddd] text-[#696969]">{{ blog.date }}</span>
            </span>

            <span class="ml-4 flex justify-center items-center dark:text-[#ddd] text-[#696969]">

              <i class="fa-regular fa-eye w-4 h-4 mr-2"></i>
              <span class="dark:text-[#ddd] text-[#696969]">{{ blog.views }}</span>
            </span>
          </div>

          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] my-4">
            {{ blog.summary }}
          </div>

          <div class="flex items-center justify-between pt-4">
            <button class="w-auto text-[14px] text-white font-bold px-10 py-4 bg-[#20ad96] hover:bg-[#3F3A64] rounded-md">
              Reead more
            </button>
            <div class="flex items-center dark:text-[#ddd] text-[#696969]">
              Share this post

             <div class="group">
              <span class="shadow border border-[#ddd] group-hover:bg-[#20ad96] rounded-[50%] w-12 h-12 flex justify-center items-center ml-4">
                <i class="w-5 h-5 text-[#20ad96] group-hover:text-white fa fa-share" name="uil:share-alt" />
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
  data() {
    return {
      blogs: [
        {
          id: 1,
          image: "/images/blog/770/blog-1.jpg",
          name: 'Owen Christ',
          bio: 'Gym coaching',
          date: 'Jan 15, 2020',
          title: '10 Essential Bodyweight Exercises',
          views: '46 views',
          summary: 'Essential bodyweight exercises are crucial to a well-rounded training routine because they’re versatile and can be done anywhere'
        },

        {
          id: 2,
          image: "/images/blog/770/blog-2.jpg",
          name: 'Owen Christ',
          bio: 'lifestyle',
          date: 'Jan 15, 2020',
          title: 'How to Keep Workouts Fresh in the New Year',
          views: '50 views',
          summary: 'Instead, begin the new year by considering four simple ways to refresh your classes that will prove equally beneficial for you, your faithful front row, and your fresh-faced resolution....'
        },

        {
          id: 3,
          image: "/images/blog/770/blog-3.jpg",
          name: 'Owen Christ',
          bio: 'artist',
          date: 'Jan 15, 2020',
          title: '15 RD-Approved Foods to Support a Healthy Immune System',
          views: '86 views',
          summary: 'While quality sleep, regular exercise, proper hand-washing and social distancing are all important factors that contribute to a healthy immune system, the foods you eat can also play a key role'
        },
        {
          id: 4,
          image: "/images/blog/270-masonry/blog-1.jpg",
          name: '',
          bio: 'Health Coach',
          date: '',
          title: 'Why DO I Need a Health Coach',
          views: '',
          summary: 'A health coach is somebody who can guide your behavior change. Here’s…'
        }

      ]

    }
  }
}
</script>

<style></style>