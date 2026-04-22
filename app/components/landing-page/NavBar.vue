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
    class="py-8 sm:py-8 md:py-12 lg:py-14"
    :ui="{
      toggle: 'flex md:hidden'
  }">
    <template #title>
      <!-- <img src="/logo/Title_Logo_NoBG.png" alt="Logo" class="logo h-40 w-60 pt-4" /> -->
        <div>
          <span class="font-semibold text-gray-800 font-montserrat"> <span class="text-[#2BD4BD]">Laba</span>Hub</span>
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
            class="text-[#787878] hover:text-[#2BD4BD] active:text-[#24C5AF] font-normal text-xs sm:text-sm md:text-base lg:text-lg"
            variant="link"
            @click="scrollTo('pricing')">
              Login
          </UButton>
        </div>

        <div>
          <UButton 
            class="bg-[#2BD4BD] hover:bg-[#25CCB6] active:bg-[#24C5AF] font-normal tracking-wide" 
            :ui="{
              base: 'px-5 py-0.5 text-xs sm:px-3.5 sm:py-1 sm:text-sm md:px-4.5 md:py-1.5 md:text-sm lg:text-lg lg:px-4.5 lg:py-1.5'}">
              Make a list
          </UButton>
        </div>
      </div>
    </template>
  </UHeader>
</template>
