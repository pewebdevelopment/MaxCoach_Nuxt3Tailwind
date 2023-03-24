<template>
  <div class="font-body dark:bg-[#161821] w-12/12 px-24">
    <div class="container">
      <div class="pb-[50px] pt-[100px]">
        <courseheader>
          <template v-slot:title>Blog Grid</template>
        </courseheader>
      </div>

      <div class="pb-[100px]">
        <Blogcard />

        <!-- pagination -->
        <div class="flex justify-center">
          <ul class="flex flex-row dark:text-white">
            <li class=" font-bold p-[10px]"><a href="#">Prev</a></li>
            <li class="font-bold p-[10px] active"><a href="#">1</a></li>
            <li class="font-bold p-[10px]"><a href="#">2</a></li>
            <li class="font-bold p-[10px]"><a href="#">Next</a></li>
          </ul>
        </div>
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

.page-item {
  font-weight: bold;
  padding: 10px;
}
</style>
