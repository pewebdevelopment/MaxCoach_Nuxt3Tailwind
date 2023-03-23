<template>
    <div class="py-[100px] dark:bg-[#161821] bg-white">
      <div class=" px-40">
        <ImageCarousel :images="[
          'images/brand/client-logo-01.png',
          'images/brand/client-logo-02.png',
          'images/brand/client-logo-03.png',
          'images/brand/client-logo-04.png',
          'images/brand/client-logo-05.png',
          'images/brand/client-logo-06.png',
          'images/brand/client-logo-07.png',
        ]"/>
      </div>
    </div>
  </template>
  
  <script>
  import ImageCarousel from '@/components/public/ImageCarousel.vue';
  export default {
    components: {
      ImageCarousel,
    },
  }
  </script>