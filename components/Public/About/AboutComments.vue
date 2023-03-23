<template>
  <div
    v-for="card in comments"
    :key="card.name"
    class="max-w-full p-10 mr-[30px]"
  >
    <div class="flex items-center mb-[20px]">
      <img
        class="rounded-[50%] mr-[30px]"
        :src="card.image"
        alt="image"
      />
      <div class="flex flex-col">
        <div class="w-full flex flex-row mb-[11px]">
          
          <i class="fa-solid fa-star w-4 h-4" style="color: #f2eb21;"></i>
          <i class="fa-solid fa-star w-4 h-4" style="color: #f2eb21;"></i>
          <i class="fa-solid fa-star w-4 h-4" style="color: #f2eb21;"></i>
          <i class="fa-solid fa-star w-4 h-4" style="color: #f2eb21;"></i>
          <i class="fa-solid fa-star w-4 h-4" style="color: #f2eb21;"></i>
          
        </div>
        <div class="flex items-center text-white">
          <h6
            class="text-[15px] font-bold leading-[1.3] tracking-[1] uppercase text-[#333] dark:text-white"
          >
            {{ card.name }}
          </h6>
          <span class="text-[14px] text-[#696969] dark:text-[#8c8a92] ml-[13px]">
            {{ card.jobtitle }}
          </span>
        </div>
      </div>
    </div>
    <div class="text-[18px] text-[#7e7e7e] dark:text-[#dddddd] font-[500] leading-[1.67]">
      {{ card.content }}
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            comments: [
                {
                image: '/images/testimonial/70/testimonial-3.jpeg',
                name: 'mina hollace',
                jobtitle: '/Freelancer',
                content: 'I am free to learn at my own pace, follow my own schedule and choose subject I like. Great study portal for people like me.'
            },
                {
                image: '/images/testimonial/70/testimonial-1.jpeg',
                name: 'madley pondor',
                jobtitle: '/IT Specialist',
                content: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.'
            },
                {
                image: '/images/testimonial/70/testimonial-3.jpeg',
                name: 'florence themes',
                jobtitle: '/Multimedia Admin',
                content: 'I to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.'
            },
        ]
        }
    }
}
</script>