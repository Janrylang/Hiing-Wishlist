<script setup lang="ts">

const { elementRef: badgeRef, isVisible: badgeVisible } = useScrollAnimation(50)
const { elementRef: headingRef, isVisible: headingVisible } = useScrollAnimation(150)
const { elementRef: subHeadingRef, isVisible: subHeadingVisible } = useScrollAnimation(250)
const { elementRef: headingButtonRef, isVisible: headingButtonVisible } = useScrollAnimation(350)
const { elementRef: promotionRef, isVisible: promotionVisible } = useScrollAnimation(450)
const { elementRef: headingProcessRef, isVisible: headingProcessVisible } = useScrollAnimation(550)

</script>

<template>

  <section class="pt-8 pb-3 md:pt-12 mb:pb-12 lg:pt-16 lg:pb-16 bg-[#FBF6F0] overflow-hidden">
    
    <!--Hero Header-->
    <ClientOnly> <!--This tag is related to the animation-->
      <div ref="headingRef"
        class="flex justify-center items-center text-center md:justify-start md:text-start lg:justify-start lg:text-start text-3xl ml-5 pt-4 md:text-5xl md:pt-8 lg:text-6xl lg:pt-10 lg:ml-40 transition-all duration-300 ease-out"
        :class="headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'">
        <span class="font-manrope font-extrabold text-[#1E1A17]">
          You don't need an <br> occasion <br>
          to receive a
          <span
            class="text-center font-manrope font-extrabold text-[#D38C22] text-3xl md:text-5xl lg:text-6xl">
            gift.
          </span>
        </span>
      </div>
    </ClientOnly>

    <!--Hero Sub-Header-->
    <ClientOnly> <!--This tag is related to the animation-->
      <div ref="subHeadingRef"
        class="flex justify-center items-center text-center text-sm mx-10 pt-4 md:justify-start md:text-start lg:justify-start lg:text-start md:text-lg md:pt-8 lg:text-xl lg:pt-8 lg:ml-40 lg:mr-205 transition-all duration-450 ease-out"
        :class="subHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-30'">
        <span class="font-normal font-inter text-[#3E3E3E]">
          Create your wishlist and let others give you the perfect gift picked by you, for you.
        </span>
      </div>
    </ClientOnly>

    <!--Hero Header Buttons-->
    <ClientOnly>
      <div ref="headingButtonRef"
        class="flex flex-col md:flex-row md:justify-start lg:flex-row lg:justify-start items-center gap-y-4 lg:gap-x-12 md:gap-x-8 text-center font-inter font-medium ml-5 lg:ml-40 pt-6 md:pt-10 lg:pt-12 transition-all duration-400 ease-out"
        :class="headingButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'">
        <div>
          <UButton
            class="bg-[#FE9A00] hover:bg-[#EF9100] active:bg-[#DD8600] text-white font-normal tracking-wide cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FE9A00]/50 rounded-4xl md:rounded-5xl lg:rounded-6xl"
            leading-icon="i-ph-list-star"
            trailing-icon="i-lucide-arrow-right" 
            :ui="{
              base: 'px-4.5 py-2.5 text-xs md:px-4.5 md:py-3.5 md:text-base lg:text-lg lg:px-7 lg:py-4.5',
              leadingIcon: 'size-4 md:size-6 lg:size-7',
              trailingIcon: 'size-4 md:size-6 lg:size-7',
            }">
            Make A List
          </UButton>
        </div>

        <div>
          <UButton
            class="bg-[#EBEBEB] hover:bg-[#FFFFFF] active:bg-[#24C5AF] text-[#1E1A17] border-2 border-[#dcdcdc] font-normal tracking-wide cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2BD4BD]/50 rounded-4xl md:rounded-5xl lg:rounded-6xl"
            :ui="{
              base: 'px-3.5 py-1.5 text-xs md:px-4.5 md:py-2 md:text-base lg:text-lg lg:px-5.5 lg:py-3'
            }">
            Start a Group Gifting
          </UButton>
        </div>
      </div>
    </ClientOnly>

    <!--Promotion-->
    <ClientOnly>
      <div ref="promotionRef"
        class="flex justify-center items-center md:justify-start lg:justify-start gap-x-7 md:gap-x-13 lg:gap-x-16 pt-6 md:pt-10 lg:pt-12 ml-5 lg:ml-40 transition-all duration-400 ease-out"
        :class="promotionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'">

        <div class="flex items-center gap-x-2">
          <UChip size="xs" standalone inset />
          <span class="text-[10px] md:text-base lg:text-lg">Free to use</span>
        </div>

        <div class="flex items-center gap-x-2">
          <UChip size="xs" standalone inset />
          <span class="text-[10px] md:text-base lg:text-lg">No credit card required</span>
        </div>
      </div>
    </ClientOnly>
  </section>
  
</template>