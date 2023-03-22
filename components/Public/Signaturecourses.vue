<template>
  <div>
    <div>
      <headers class="mb-[60px]">
        <template v-slot:headerone>learn at your pace</template>
        <template v-slot:headertwo> Current Signature Courses </template>
      </headers>
    </div>
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <gridtwo>
          <template v-slot:img>
            <img
        src="/images/courses/370/course-1.jpg"
        class="w-full lg:w-full h-[229px]"
      />
          </template>
          <template v-slot:tag>$40</template>
          <template v-slot:date>JAN 15, 2020</template>
          <template v-slot:title>Learning to Write as a Professional Author</template>
        </gridtwo>
        <gridtwo>
          <template v-slot:img>
            <img
        src="/images/courses/370/course-2.jpg"
        class="w-full lg:w-full h-[229px]"
      />
          </template>
          <template v-slot:tag>Free</template>
          <template v-slot:date>JAN 18, 2020</template>
          <template v-slot:title>Customer-Centric Info-Tech-Strategies</template>
        </gridtwo>
        <gridtwo>
          <template v-slot:img>
            <img
        src="/images/courses/370/course-3.jpg"
        class="w-full lg:w-full h-[229px]"
      />
          </template>
          <template v-slot:tag>$19</template>
          <template v-slot:date>MAR 19, 2020</template>
          <template v-slot:title>Open Programming Courses for Everyone:Python</template>
        </gridtwo>
      </div>
    </div>

    <div class="w-full flex justify-center items-center mt-14">
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
  </div>
</template>

<style scoped>
.icon {
  color: #20ad96;
}
</style>