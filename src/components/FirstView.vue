<script setup lang="ts">
import type { SwiperOptions } from "swiper/types"
import { register } from "swiper/element/bundle"
import { Autoplay } from "swiper/modules"
import { useIntersectionObserver } from "~/composables/useIntersectionObserver"
import { useScrollToSection } from "~/composables/useScrollToSection"

register()

const { isIntersecting, initializeObserver, startObserve } = useIntersectionObserver()
const { setScrollHeader, scrollToSection } = useScrollToSection()
const sectionRef = ref<HTMLElement | null>(null)
const headerRef = useState<HTMLElement>("headerRef")

onBeforeMount(() => {
  initializeObserver()
})

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
  sectionRef.value && startObserve(sectionRef.value)
  headerRef.value && setScrollHeader(headerRef.value)
})

const scrollToSectionLocal = (id: string) => {
  scrollToSection(id)
}
</script>

<template>
  <section
    ref="sectionRef"
    class="relative w-full h-full"
    :class="[isIntersecting ? 'move-up' : 'initial-hidden']"
  >
    <swiper-container
      init="false"
    >
      <swiper-slide
        class="w-full object-cover"
      >
        <NuxtImg
          src="/images/first-view-1.jpg"
          alt="Binary code representing ZeroOne Script"
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 400px"
          placeholder
          loading="lazy"
        />
      </swiper-slide>
      <swiper-slide
        class="w-full object-cover"
      >
        <NuxtImg
          src="/images/first-view-2.jpg"
          alt="Binary code representing ZeroOne Script"
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 400px"
          placeholder
          loading="lazy"
        />
      </swiper-slide>
      <swiper-slide
        class="w-full object-cover"
      >
        <NuxtImg
          src="/images/first-view-3.jpg"
          alt="Binary code representing ZeroOne Script"
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 400px"
          placeholder
          loading="lazy"
        />
      </swiper-slide>
    </swiper-container>
    <div class="absolute inset-0 flex items-center justify-center z-10 mx-2.5">
      <div class="bg-black bg-opacity-50 p-8 rounded-lg text-center text-white">
        <h2 class="text-2xl font-bold mb-8 sm:text-4xl">
          緻密な設計と論理に基づく<br>プログラムで、貴社の<span class="inline-block">ビジネスに</span><span class="inline-block">貢献します。</span>
        </h2>
        <a
          class="flex justify-center items-center mx-auto px-5 py-3 w-52 sm:w-80 sm:px-7 sm:py-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110"
          href="#contact"
          @click.prevent="scrollToSectionLocal('contact')"
        >
          <div class="flex">
            <img
              class="svg-image mr-3"
              src="~/public/images/cta-button.svg"
              alt="プロフィール"
            >
            <span class="text-xl sm:text-2xl font-bold">お問い合わせ</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.initial-hidden {
  transform: translateY(25px);
  opacity: 0;
}
.move-up {
  transform: translateY(0);
  opacity: 1;
  transition: transform 1s, opacity 1s;
}

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
