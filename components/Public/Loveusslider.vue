<template>
  <div class="mt-20 flex  gap-4 justify-center items-center" ref="animate">
    <div
      v-for="message in messages"
      :key="message.name"
      class="rounded-md blue px-[50px] pt-[41px] pb-[36px] w-full mr-[10px] mb-[30px] bg-white dark:bg-[#161821]"
    >
      <h4 class="mb-[15px] text-[20px] dark:text-white text-[#333] leading-[1.6] font-bold">
        {{ message.title }}
      </h4>
      <p class="mb-[15px] text-[18px] dark:text-[#dddddd] text-[#696969] leading-[1.67] font-[500]">
        {{ message.comment }}
      </p>

      <div class="flex items-center pt-[40px]">
        <img
          class="rounded-[50%] mr-[20px]"
          :src="message.img"
          alt="Florence Themes"
        />
        <div class="flex flex-col">
          <span class="uppercase text-[15px] tracking-[1px] dark:text-white text-[#333333] font-bold">{{
            message.name
          }}</span>
          <span class="text-[14px] tracking-[1px] dark:text-[#8C89A2] text-[#7e7e7e] mt-[10px]">{{
            message.job
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data (){
        return {
            messages: [
                {
                    img: '/images/testimonial/70/testimonial-1.jpeg',
                    title: ' High level of efficiency and scientific teaching methods',
                    comment: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners.',
                    image: '',
                    name: 'florence themes',
                    job: '/Multimedia Admin'
                },
                    {
                      img: '/images/testimonial/70/testimonial-2.jpeg',
                    title: ' Professional team of specialists and passionate mentors at reach',
                    comment: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                    image: '',
                    name: 'madley pondor',
                    job: '/IT Specialist'
                },
                    {
                      img: '/images/testimonial/70/testimonial-3.jpeg',
                    title: ' Highly recommend thier courses and teaching system',
                    comment: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners.',
                    image: '',
                    name: 'luvic dubble',
                    job: '/Private Tutor'
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


