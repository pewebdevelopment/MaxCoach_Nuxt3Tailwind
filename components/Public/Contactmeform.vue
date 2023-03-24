<template>
  <div class="pt-[100px]">
    <div class="flex flex-wrap">
      <div
        class="text-center md:text-left dark:text-white text-[#333] font-bold text-[34px] px-3"
      >
        Or just drop me a line
      </div>

      <form
        @submit.prevent="submitform"
        class="w-full lg:w-7/12 xl:ml-[90px] mt-10 lg:mt-0"
      >
        <div class="flex justify-between items-center w-12/12 mb-2">
          <input
            class="w-6/12 mr-2 dark:bg-[#222] bg-[#f5f5f5] px-5 py-2.5 rounded-[3px] border-[solid]  outline-none dark:border-none placeholder:text-[#696969] dark:placeholder:text-[#b7b2b2]"
            type="text"
            placeholder="Your Name*"
            id=""
            v-model="registration.name"
            required
          />
          <input
            class="w-6/12 ml-2 dark:bg-[#222] bg-[#f5f5f5] px-5 py-2.5 rounded-[3px] border-[solid]  outline-none dark:border-none placeholder:text-[#696969] dark:placeholder:text-[#b7b2b2]"
            type="email"
            placeholder="Email*"
            id=""
            v-model="registration.email"
            required
          />
        </div>

        <input
          class="w-full my-2 dark:bg-[#222] bg-[#f5f5f5] px-5 py-2.5 rounded-[3px] border-[solid] outline-none dark:border-none placeholder:text-[#696969] dark:placeholder:text-[#b7b2b2]"
          type="text"
          placeholder="Subject*"
          id=""
          v-model="registration.subject"
          required
        />
        <textarea
          class="w-full text-white dark:border-none placeholder:text-[#696969] dark:placeholder:text-[#b7b2b2] my-2 min-h-[220px] dark:bg-[#222] bg-[#f5f5f5] px-5 py-2.5 rounded-[3px] border-[solid]  outline-none"
          placeholder="Your Mesage"
          v-model="registration.message"
        ></textarea>

        <div class="w-full flex justify-left">
          <button
            class="text-[14px] text-white font-bold px-12 py-4 bg-[#20ad96] rounded-md mt-12"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
data(){
return{
    registration: {
    name: '',
    email: '',
    subject: '',
    message: '',
}
}
},

methods: {
    submitform(){
        console.log('Registration', this.registration);
    }
}
}
</script>

<style scoped>
.icon {
  color: rgb(0, 173, 255);
}

.bg {
  background-image: url(/images/bg/become-a-teache-bg.jpg);
}




</style>