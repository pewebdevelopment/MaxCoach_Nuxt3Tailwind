<template>
    <div class="flex overflow-hidden justify-between items-center">
      <div class="flex-none w-20 mr-6" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Image" class="w-20 object-cover">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
    mounted() {
      // Scroll the carousel every 2 seconds
      setInterval(() => {
        // Check if we have reached the end of the carousel
        if (this.$refs.carousel.scrollLeft + this.$refs.carousel.clientWidth >= this.$refs.carousel.scrollWidth) {
          // If so, scroll to the beginning
          this.$refs.carousel.scrollLeft = 0
        } else {
          // Otherwise, scroll to the next image
          this.$refs.carousel.scrollLeft += 64
        }
      }, 2000)
    },
  }
  </script>
  
  <style>
  /* Hide the scroll bar */
  ::-webkit-scrollbar {
    display: none;
  }
  /* Make the carousel scroll smoothly */
  .scrollbar::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }
  .scrollbar::-webkit-scrollbar {
    height: 6px;
    background-color: #f5f5f5;
  }
  .scrollbar::-webkit-scrollbar-thumb {
    background-color: #000000;
  }
  /* Show only 6 images at a time */
  .flex-none {
    flex: 0 0 calc(100% / 6);
    max-width: calc(100% / 6);
  }
  /* Enable infinite round scroll */
  /* .overflow-hidden:before,
  .overflow-hidden:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .overflow-hidden:before {
    left: 0;
    background: linear-gradient(to left, white 0%, transparent 100%);
  }
  .overflow-hidden:after {
    right: 0;
    background: linear-gradient(to right, white 0%, transparent 100%);
  } */
  </style>
  