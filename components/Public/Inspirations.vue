<template>
  <div class="w-12/12 mx-[100px]">
    <headers class="flex flex-col items-center justify-center text-center">
      <template v-slot:headerone>The guys behind the curtains</template>
      <template v-slot:headertwo>
        <div class="text-[48px]">
          Whose
          <span class="text-[#20AD96] font-[400]">Inspirations</span>
          You Love
        </div>
      </template>
    </headers>

    <div class="grid grid-cols-2 md:grid-cols-3 mt-14">
      <div
        v-for="speaker in speakers"
        :key="speaker.name"
        
      >
        <div class="max-w-350px">
          <div @mouseover="show = !show" class="relative flex justify-center">
            <img
              class="img-fluid"
              :src="speaker.image"
              alt="Merrie Lewis Thumbnail"
            />

            <Transition>
              <div
                v-if="show"
                class="w-10/12 mx-4 bg-transparent gap-4 py-2 absolute bottom-6 flex justify-center"
              >
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
              </div>
            </Transition>
          </div>

          <div class="text-center pt-10">
            <div class="font-bold text-[24px] dark:text-white text-[#333333] leading-[1.3]">
              {{ speaker.name }}
            </div>
            <div class="text-[15px] mt-[8px] dark:text-[#ddd] text-[#696969]">
              {{ speaker.job }}
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <div class="mt-0 pt-0">
      <aboutmail />
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

          show: false,

            speakers:[
                {
                    image: '/images/team/350/team-member-01.jpg',
                    name: 'Merrie Lewis',
                    job: 'General Director',
                    350: true,
                },
                 {
                  image: '/images/team/350/team-member-02.jpg',
                    name: 'Mariana Buenos',
                    job: 'CEO & Chief Manager',
                    350: true,
                },
                 {
                  image: '/images/team/350/team-member-03.jpg',
                    name: 'Parks Missie',
                    job: 'Course Researcher',
                    350: true,
                },
                 {
                  image: '/images/team/270/team-member-04.jpg',
                    name: 'Merrie Lewis',
                    job: 'General Director',
                    350: false,
                },
                 {
                  image: '/images/team/270/team-member-05.jpg',
                    name: 'Merrie Lewis',
                    job: 'General Director',
                    350: false,
                },
                 {
                  image: '/images/team/270/team-member-06.jpg',
                    name: 'Merrie Lewis',
                    job: 'General Director',
                    350: false,
                },
                 {
                  image: '/images/team/270/team-member-07.jpg',
                    name: 'Merrie Lewis',
                    job: 'General Director',
                    350: false,
                },
            ]
        }
    }
}
</script>

<style>
.socials {
  color: #696969;
  margin: 0px 10px;
  transition: all 0.3s ease-in-out;
}

.socials:hover {
  color: #20ad96;
}
</style>