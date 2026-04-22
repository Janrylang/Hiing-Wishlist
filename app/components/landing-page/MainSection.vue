<script setup lang="ts">

const { elementRef: badgeRef, isVisible: badgeVisible } = useScrollAnimation(50)
const { elementRef: headingRef, isVisible: headingVisible } = useScrollAnimation(150)
const { elementRef: subHeadingRef, isVisible: subHeadingVisible } = useScrollAnimation(250)
const { elementRef: headingButtonRef, isVisible: headingButtonVisible } = useScrollAnimation(350)
const { elementRef: promotionRef, isVisible: promotionVisible } = useScrollAnimation(450)
const { elementRef: headingProcessRef, isVisible: headingProcessVisible } = useScrollAnimation(550)

</script>

<template>

  <section class="pt-8 pb-3 md:pt-12 mb:pb-12 lg:pt-16 lg:pb-16 bg-[#EEF8F7] overflow-hidden">
    
    <!--Hero Header-->
    <ClientOnly> <!--This tag is related to the animation-->
      <div ref="headingRef"
        class="flex justify-center items-center text-center text-4xl pt-4 md:text-6xl md:pt-8 lg:text-8xl lg:pt-10 transition-all duration-300 ease-out"
        :class="headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'">
        <span class="font-montserrat font-extrabold text-[#3E3E3E]">
          You don't need an occasion <br>
          to receive a
          <span
            class="text-center font-montserrat font-extrabold text-[#2BD4BD] text-4xl md:text-6xl lg:text-8xl">
            gift.
          </span>
        </span>
      </div>
    </ClientOnly>

    <!--Hero Sub-Header-->
    <ClientOnly> <!--This tag is related to the animation-->
      <div ref="subHeadingRef"
        class="flex justify-center items-center text-center text-sm pt-4 mx-10 md:text-lg md:pt-8 md:mx-32 lg:text-xl lg:pt-10 lg:mx-60 transition-all duration-450 ease-out"
        :class="subHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-30'">

        <span class="font-normal font-inter text-[#3E3E3E]">
          Create your wishlist and let others give you the perfect gift picked by you, for you.
        </span>
      </div>
    </ClientOnly>

    <!--Hero Header Buttons-->
    <ClientOnly>
      <div ref="headingButtonRef"
        class="flex flex-col md:flex-row md:justify-center lg:flex-row lg:justify-center items-center gap-y-4 lg:gap-x-12 md:gap-x-8 text-center font-inter font-medium pt-6 md:pt-10 lg:pt-12 transition-all duration-400 ease-out"
        :class="headingButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'">
        <div>
          <UButton
            class="bg-[#2BD4BD] hover:bg-[#25CCB6] active:bg-[#24C5AF] font-normal tracking-wide cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2BD4BD]/50 rounded-md md:rounded-lg lg:rounded-xl"
            trailing-icon="i-lucide-arrow-right" :ui="{
              base: 'px-4.5 py-2.5 text-xs md:px-4.5 md:py-3.5 md:text-base lg:text-lg lg:px-5.5 lg:py-4.5'
            }">
            Start 14-Day Free Trial
          </UButton>
        </div>

        <div>
          <UButton
            class="bg-[#FFFFFF] hover:bg-[#FFFFFF] active:bg-[#24C5AF] text-[#2BD4BD] border-2 border-[#2BD4BD] font-normal tracking-wide cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2BD4BD]/50 rounded-md md:rounded-lg lg:rounded-xl"
            :ui="{
              base: 'px-3.5 py-1.5 text-xs md:px-4.5 md:py-2 md:text-base lg:text-lg lg:px-4.5 lg:py-3'
            }">
            See How It Works
          </UButton>
        </div>
      </div>
    </ClientOnly>

    <!--Promotion-->
    <ClientOnly>
      <div ref="promotionRef"
        class="flex justify-center items-center gap-x-7 md:gap-x-13 lg:gap-x-16 pt-6 md:pt-10 lg:pt-12 transition-all duration-400 ease-out"
        :class="promotionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'">

        <div class="flex items-center gap-x-2">
          <UChip size="xs" standalone inset />
          <span class="text-[10px] md:text-base lg:text-lg">Free 14-day Trial</span>
        </div>

        <div class="flex items-center gap-x-2">
          <UChip size="xs" standalone inset />
          <span class="text-[10px] md:text-base lg:text-lg">No credit card required</span>
        </div>
      </div>
    </ClientOnly>
  </section>
  
</template>