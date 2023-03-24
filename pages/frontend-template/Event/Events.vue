<template>
  <div class="font-body dark:bg-[#161821] w-12/12">
    <div class="container">
      <div class="py-[100px]">
        <courseheader>
          <template v-slot:title><span class="dark:text-white text-[#333] "> Events </span></template>
        </courseheader>
      </div>
      <div class="px-[80px]">
        <div class="flex justify-between items-start">
          <p class="text-[15px] text-[#696969] dark:text-[#ddd] font-normal leading-[1.74]">
            We found 09 courses available for you
          </p>

          <div class="w-[300px] h-[54px] mb-2.5 px-2 py-0; relative">
            <span class="absolute top-0 bottom-0 right-0 w-[54px] flex justify-center items-center">
              
              
            </span>
            <select id="cars" class="bg-[#fff] rounded text-[#696969] w-full h-full px-3 py-0 " name="cars"
              aria-placeholder="Default">
              <div class="options text-[#696969]">
                <option>Default</option>
                <option value="popularity">Popularity</option>
                <option value="latest">Latest</option>
                <option value="low">Price:Low to High</option>
                <option value="high">Price:High to Low</option>
              </div>
            </select>
          </div>
        </div>
      </div>
      <div class="pb-[100px] px-[80px]">
        <eventscard />
        
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});
</script>

<style scoped>
.select {
  width: 300px;
  height: 54px;
  margin-bottom: 10px;
  padding: 0px 8px;
}

select {
  width: 100%;
  height: 100%;
  padding: 0px 15px;
  outline: none;
  padding: 0px 12px;
  border-radius: 2px;
}
</style>
