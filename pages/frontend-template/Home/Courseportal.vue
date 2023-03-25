<template>
  <div class="dark:bg-[#111] bg-white">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center padding-responsive">
      <div class="flex flex-col justify-center items-center sm:block text-center sm:text-left">
        <h2 class="leading-[1.17] font-bold tracking-[2px] dark:text-white text-[#3F3A64] large-title">
          Distant learning for further expansion
        </h2>
        <p>
          Learning is a life-long journey that in fact we never find<br />
          the terminate stop. Stop searching, enjoy the process.
        </p>

        <button
          class="green hover:bg-[#3F3A64] rounded-md text-[14px] text-white font-bold  py-4 px-10 mt-[35px] flex items-center">
          <i class="fa-solid fa-download"></i> &nbsp;
          Download free guide
        </button>
        <div class="mt-[25px] flex flex-row items-center justify-center md:justify-start text-[#8C89A2]">
          Have a question?
          <NuxtLink to="/frontend-template/about/contactus" class=" hover:cursor-pointer">
            <span class="
              font-bold leading-none relative text-[#20ad96] bg-[rgba(0,0,0,0)] px-0 py-[3px] before:transition-transform before:duration-[0.6s] before:ease-[cubic-bezier(.165,0.84,0.44,1)] before:delay-[0.3s] before:origin-right before:bg-[#e0e0e0] before:scale-x-[100%] before:translate-y-0 before:absolute before:w-full before:h-px before:content-[''] before:left-0 before:bottom-0 after:transition-transform after:duration-[0.6s] after:ease-[cubic-bezier(.165,0.84,0.44,1)] after:origin-left after:bg-[#20ad96] after:scale-x-0 after:translate-y-0 after:absolute after:w-full after:h-px after:content-[''] after:left-0 after:bottom-0 hover:after:scale-x-[100%] hover:after:translate-y-0 hover:before:scale-x-0 hover:before:translate-y-0
              ">Get Free Form
              <!-- <icon name="uil:arrow-right" class="icon" /> -->
              <i class="fas fa-arrow-right text-['#20ad96']"></i>

            </span>
          </NuxtLink>
        </div>
      </div>

      <div class="mt-10 md:mt-0 w-12/12 flex justify-center">
        <img class="rounded-[50%] md:ml-10" src="/images/others/contact.jpg" alt="image" />
      </div>
    </div>
    <Brandsession />

    <div>
      <portalone />
    </div>

    <div>
      <portaltwo />
    </div>

    <div>
      <portalthree />
    </div>

    <div>
      <portalrates />
    </div>

    <div>
      <portalfour />
    </div>

    <div class="mt-0 pt-0 blue">
      <aboutmail />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});
</script>

<style scoped>
.title {
  line-height: 1.17;
  font-weight: 700;
  letter-spacing: 2px;
  /* color: #3F3A64; */
  color: white;
}

p {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.67;
  color: #8c89a2;
  margin-top: 20px;
}
</style>