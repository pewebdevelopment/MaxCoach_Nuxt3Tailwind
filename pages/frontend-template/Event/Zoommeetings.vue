<template>
  <div class="font-body dark:bg-[#161821] w-12/12 px-24">
    <div class="container">
      <div class="pt-[100px] pb-[60px]">
        <courseheader>
          <template v-slot:title>Zoom Meetings</template>
        </courseheader>
      </div>

      <div class="pb-[100px] px-[80px]">
        <zoomcard />
        
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

</style>
