<template>
  <div class="mb-6 w-full lg:w-8/12">
    <h4 class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]">
      <slot name="headerone"></slot>
    </h4>
    <h2 class="mb-4 text-[28px] lg:text-[48px] dark:text-white text-[#3f3a64] font-[700] leading-[56px]">
      <slot name="headertwo"></slot>
    </h2>
    <p class="dark:text-[#ddd] text-[15px] leading-[1.74] mb-5">
      <slot name="content"></slot>
    </p>
    <div class="flex flex-row items-center justify-center md:justify-start text-[#8C89A2]">
      Have a question?
      <NuxtLink to="/frontend-template/about/contactus" class=" hover:cursor-pointer">
        <span class="
              font-bold leading-none relative text-[#20ad96] bg-[rgba(0,0,0,0)] px-0 py-[3px] before:transition-transform before:duration-[0.6s] before:ease-[cubic-bezier(.165,0.84,0.44,1)] before:delay-[0.3s] before:origin-right before:bg-[#e0e0e0] before:scale-x-[100%] before:translate-y-0 before:absolute before:w-full before:h-px before:content-[''] before:left-0 before:bottom-0 after:transition-transform after:duration-[0.6s] after:ease-[cubic-bezier(.165,0.84,0.44,1)] after:origin-left after:bg-[#20ad96] after:scale-x-0 after:translate-y-0 after:absolute after:w-full after:h-px after:content-[''] after:left-0 after:bottom-0 hover:after:scale-x-[100%] hover:after:translate-y-0 hover:before:scale-x-0 hover:before:translate-y-0
              ">&nbsp;Get Free Form
          <!-- <icon name="uil:arrow-right" class="icon" /> -->
          <i class="fas fa-arrow-right text-['#20ad96']"></i>

        </span>
      </NuxtLink>
    </div>
  </div>
</template>