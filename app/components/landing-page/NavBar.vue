<script setup lang="ts">
const router = useRouter()

async function scrollTo(id: string) {
  await router.push({ hash: `#${id}` })

  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<template>
  <UHeader
    class="bg-[#F9F7F3] py-8 sm:py-8 md:py-12 lg:py-14"
    :ui="{
      toggle: 'flex md:hidden'
  }">
    <template #title>
      <div class="flex items-center gap-1">
      <img src="/logo/Hiling-NoBG.png" alt="Logo" class="logo h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
        <div>
           <span class="text-[#D38C22] text-lg font-extrabold font-manrope md:text-2xl lg:text-3xl"> Hiling </span>
        </div>
      </div>
    </template>

    <!--#body is for mobile view, when the hamburger icon is clicked this menu will be displayed-->
    <template #body>
      <div class="flex flex-col gap-5 p-4">
        <UButton 
          class="text-[#787878] hover:text-[#2BD4BD] active:text-[#24C5AF] font-normal font-inter border-b" 
          variant="link">
            Login
        </UButton>

        <UButton 
          class="text-[#787878] hover:text-[#2BD4BD] active:text-[#24C5AF] font-normal font-inter border-b" 
          variant="link" >
            Make a list
        </UButton>
      </div>
    </template>

    <template #right>
      <div class="hidden md:flex items-center gap-1.5 md:gap-3 lg:gap-5">
        <div>
          <UButton
            class="text-[#787878] hover:text-[#D38C22] active:text-[#92621a] hover:-translate-y-1 transition-all duration-300 font-medium font-inter text-xs sm:text-sm md:text-base lg:text-lg"
            variant="link">
              Login
          </UButton>
        </div>

        <div>
          <UButton 
            trailing-icon="i-solar-arrow-right-linear"
            class="bg-[#1E1A17] hover:bg-[#313131] active:bg-[#1E1A17] hover:text-[#D38C22] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-white rounded-4xl font-medium font-inter tracking-wide" 
            :ui="{
              base: 'px-5 py-0.5 text-xs md:px-4.5 md:py-2.5 md:text-sm lg:text-lg lg:px-4.5 lg:py-2.5'}">
              Get Started
          </UButton>
        </div>
      </div>
    </template>
  </UHeader>
</template>
