<template>
  <div class="py-[100px] pt-5 md:pt-[100px] dark:bg-[#161821] bg-white">
    <headers class="flex flex-col items-center justify-center text-center">
      <template v-slot:headertwo>
        Sign up for our
        <span class="text-[#20AD96] font-[400]">Newsletter</span>
      </template>
    </headers>

    <p class="text-[18px] text-center mb-14 bg:text-[#ddd] text-[#696969] text-lg font-medium mt-[25px] ">
      Enter your email address to register to our newsletter subscription <br />
      delivered on a regular basis!
    </p>

    <div
      class="flex flex-col sm:flex-row items-center justify-start sm:justify-center min-h-[52px]"
    >
      <input
        class=" placeholder:text-[#696969]  focus:ring-0 border-none  h-[56px] dark:bg-[#222222] text-[#696969] bg-[#f5f5f5] w-10/12 sm:w-8/12 md:w-4/12"
        placeholder="Your E-mail"
        type="email"
        name=""
        id=""
      />
      <button class="subscribe">Subscribe</button>
    </div>
  </div>
</template>