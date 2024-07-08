<script setup lang="ts">
import type { SwiperOptions } from "swiper/types"
import { register } from "swiper/element/bundle"
import { Autoplay } from "swiper/modules"

register()

// https://swiperjs.com/element#parameters-as-props
const init = () => {
  const swiperEl = document.querySelector("swiper-container")

  const swiperParams: SwiperOptions = {
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: "fade",
    loop: true,
    centeredSlides: true,
    speed: 1000,
    modules: [Autoplay],
  }

  if (swiperEl) {
    Object.assign(swiperEl, swiperParams)
    swiperEl.initialize()
  }
}

onMounted(() => {
  init()
})
</script>

<template>
  <section
    class="relative w-full h-full"
  >
    <swiper-container
      init="false"
    >
      <swiper-slide
        class="w-full object-cover"
      >
        <img
          src="~/public/images/first-view-1.jpg"
        >
      </swiper-slide>
      <swiper-slide
        class="w-full object-cover"
      >
        <img
          src="~/public/images/first-view-2.jpg"
        >
      </swiper-slide>
      <swiper-slide
        class="w-full object-cover"
      >
        <img
          src="~/public/images/first-view-3.jpg"
        >
      </swiper-slide>
    </swiper-container>
    <div class="absolute inset-0 flex items-center justify-center z-10 mx-2.5">
      <div class="bg-black bg-opacity-50 p-8 rounded-lg text-center text-white">
        <h2 class="text-2xl font-bold mb-8 sm:text-4xl">
          緻密な設計と論理に基づく<br>プログラムで、貴社の<span class="inline-block">ビジネスに</span><span class="inline-block">貢献します。</span>
        </h2>
        <a
          href="#"
          class="flex justify-center items-center"
        >

          <button class="flex items-center px-5 py-3 sm:px-7 sm:py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">
            <img
              class="svg-image mr-3"
              src="~/public/images/cta-button.svg"
              alt="プロフィール"
            >
            <span class="text-xl sm:text-2xl font-bold">お問い合わせ</span>
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.svg-image {
  width: 30px;
  height: 30px;
}

swiper-container, swiper-slide {
  height: 70vh;
}

swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@screen sm {
  swiper-container, swiper-slide {
    height: 80vh;
  }
}
</style>
