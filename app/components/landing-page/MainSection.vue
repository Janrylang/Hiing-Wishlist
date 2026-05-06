<script setup lang="ts">

const { elementRef: badgeRef, isVisible: badgeVisible } = useScrollAnimation(50)
const { elementRef: headingRef, isVisible: headingVisible } = useScrollAnimation(150)
const { elementRef: subHeadingRef, isVisible: subHeadingVisible } = useScrollAnimation(250)
const { elementRef: headingButtonRef, isVisible: headingButtonVisible } = useScrollAnimation(350)
const { elementRef: promotionRef, isVisible: promotionVisible } = useScrollAnimation(450)
const { elementRef: headingProcessRef, isVisible: headingProcessVisible } = useScrollAnimation(550)

</script>

<template>

  <section class="pt-8 pb-3 md:pt-12 mb:pb-12 lg:pt-4 lg:pb-16 bg-[#FBF6F0] overflow-hidden">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center px-6 lg:px-24">

      <!--Left Column-->
      <div class="flex flex-col justify-start md:ml-5 lg:ml-16">
      <ClientOnly>
        <div
          ref="badgeRef"
          class="flex justify-center items-center text-center md:justify-start lg:justify-start bg-[#fff0db] rounded-3xl w-fit mt-1 px-6 py-1.5 md:py-1.5 lg:py-2 lg:mt-5 mx-auto md:mx-0 transition-all duration-200 ease-out"
          :class="badgeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
          <UIcon name="i-system-uicons-gift" class="size-4.5 lg:size-6 mr-2 text-[#FE9A00]" />
          <span class="font-manrope text-xs lg:text-sm tracking-wide text-[#D38C22]">The easiest way to give and receive
            gifts</span>
        </div>
      </ClientOnly>

        <!--Hero Header-->
        <ClientOnly>
          <div ref="headingRef"
            class="flex justify-center items-center text-center md:justify-start md:text-start text-3xl pt-2 md:text-4xl md:pt-3 lg:text-6xl lg:pt-4 transition-all duration-300 ease-out"
            :class="headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'">
            <span class="font-manrope font-extrabold text-[#1E1A17]">
              You don't need an <br> occasion <br>
              to receive a
              <span class="font-manrope font-extrabold text-[#D38C22] text-3xl md:text-4xl lg:text-6xl">
                gift.
              </span>
            </span>
          </div>
        </ClientOnly>

        <!--Hero Sub-Header-->
        <ClientOnly>
          <div ref="subHeadingRef"
            class="flex justify-center items-center text-center text-sm pt-4 md:justify-start md:text-start md:text-sm md:pt-4.5 lg:text-xl lg:pt-8 lg:pr-0 transition-all duration-450 ease-out"
            :class="subHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-30'">
            <span class="font-normal font-inter text-[#3E3E3E]">
              Create your wishlist and let others give you the perfect gift picked by you, for you.
            </span>
          </div>
        </ClientOnly>

        <!--Hero Header Buttons-->
        <ClientOnly>
          <div ref="headingButtonRef"
            class="flex flex-col md:flex-row md:justify-start lg:flex-row lg:justify-start items-center gap-y-4 w-full md:w-auto lg:gap-x-12 md:gap-x-6 text-center font-inter font-medium pt-6 mb-5 md:pt-10 lg:pt-12 transition-all duration-400 ease-out"
            :class="headingButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'">
            <div>
              <UButton
                class="bg-[#FE9A00] hover:bg-[#EF9100] active:bg-[#DD8600] text-white font-normal tracking-wide cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FE9A00]/50 rounded-4xl md:rounded-5xl lg:rounded-6xl"
                leading-icon="i-ph-list-star" 
                trailing-icon="i-lucide-arrow-right" 
                block 
                :ui="{
                  base: 'px-4.5 py-2.5 text-xs md:px-4.5 md:py-2 md:text-xs lg:text-lg lg:px-7 lg:py-4.5',
                  leadingIcon: 'size-4 md:size-5 lg:size-7',
                  trailingIcon: 'size-4 md:size-5 lg:size-7',
                }">
                Make A List
              </UButton>
            </div>
            <div>
              <UButton
                class="bg-[#FFFFFF] hover:bg-[#f1f1f1] active:bg-[#eaeaea] text-[#1E1A17] border-2 border-[#dcdcdc] font-normal tracking-wide cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#EF9100]/50 rounded-4xl md:rounded-5xl lg:rounded-6xl"
                leading-icon="i-ic-twotone-people" :ui="{
                  base: 'px-3.5 py-1.5 text-xs md:px-3.5 md:py-2 md:text-xs lg:text-lg lg:px-5.5 lg:py-3'
                }">
                Group Gifting
              </UButton>
            </div>
          </div>
        </ClientOnly>
      </div>
      <!--End Left Column-->

      <!--Right Column - Image-->
      <div class="hidden md:flex justify-end items-start pt-8 md:mr-5 lg:mr-16">
        <img src="/landing-page/landing-image.png" alt="Hero Image"
          class="rounded-2xl lg:rounded-3xl w-full max-w-xs lg:max-w-lg md:h-65 lg:h-100 object-cover shadow-xl" />
      </div>

    </div>

    <div>
      <!--Promotion-->
      <ClientOnly>
        <div ref="promotionRef"
          class="flex justify-center pt-6 mb-5 md:mb-7 lg:mb-10 md:pt-10 lg:pt-14 transition-all duration-400 ease-out"
          :class="promotionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'">

          <div class="flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-x-10 lg:gap-x-20">

            <div class="flex items-center gap-x-3">
              <div class="bg-[#fff0db] p-2.5 rounded-full">
                <UIcon name="i-system-uicons-gift" class="size-5 text-[#FE9A00]" />
              </div>
              <div class="flex flex-col">
                <span class="text-xs lg:text-sm font-semibold text-[#1E1A17]">Free to use</span>
                <span class="text-[10px] lg:text-sm text-[#8a8a8a]">Just make an account and that's it</span>
              </div>
            </div>

            <div class="flex items-center gap-x-3">
              <div class="bg-[#fff0db] p-2.5 rounded-full">
                <UIcon name="i-ph-credit-card" class="size-5 text-[#FE9A00]" />
              </div>
              <div class="flex flex-col">
                <span class="text-xs lg:text-sm font-semibold text-[#1E1A17]">No credit card required</span>
                <span class="text-[10px] lg:text-sm text-[#8a8a8a]">We don't do that here</span>
              </div>
            </div>

            <div class="flex items-center gap-x-3">
              <div class="bg-[#fff0db] p-2.5 rounded-full">
                <UIcon name="i-formkit-people" class="size-5 text-[#FE9A00]" />
              </div>
              <div class="flex flex-col">
                <span class="text-xs lg:text-sm font-semibold text-[#1E1A17]">Perfect for groups</span>
                <span class="text-[10px] lg:text-sm text-[#8a8a8a]">Celebrate together</span>
              </div>
            </div>

          </div>
        </div>
      </ClientOnly>
    </div>

  </section>

</template>