<template>
  <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4">
    <div class="p-16 text-green flex items-center">
      <div class="flex flex-col">
        <div class="text-4xl md:text-6xl font-extrabold font-press-start">{{ personalData.name }}<span
            class="animate-ping">_</span></div>
        <div class="text-4xl md:text-4xl font-bold">{{ personalData.job }}</div>
        <div class="text-l md:text-2xl font-bold hover:text-white hover:underline"><a
            href="mailto:diana30martins30@gmail.com" target="_blank">{{ personalData.email }}</a></div>
        <div class="text-l md:text-2xl font-bold hover:text-white hover:underline"><a href="tel:+351910075059">{{
            personalData.phone
        }}</a></div>
        <div class="flex flex-row">
          <div class="mr-2">
            <a href="https://www.linkedin.com/in/diana30martins30/" target="_blank">
              <ion-icon name="logo-linkedin" class="text-4xl hover:text-white"></ion-icon>
            </a>
          </div>
          <div>
            <a href="https://github.com/DianaMartins30" target="_blank">
              <ion-icon name="logo-github" class="text-4xl hover:text-white"></ion-icon>
            </a>

          </div>
        </div>
      </div>
    </div>
    <div class="p-16 text-green flex items-center bg-white">
      <div class="flex flex-col text-4xl md:text-4xl font-bold">
        <div class="hover:text-purple hover:underline cursor-pointer">About Me</div>
        <div class="hover:text-purple hover:underline cursor-pointer">Portfolio</div>
        <div class="hover:text-purple hover:underline cursor-pointer"> <a href="/diana_martins_cv.pdf" download>Curriculum</a></div>
      </div>

    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      personalData: {
        name: "Diana Martins",
        job: "Front-End Developer",
        email: "diana30martins30@gmail.com",
        phone: "+351 910 075 059"
      },
    }
  },

}
</script>

<style>
</style>