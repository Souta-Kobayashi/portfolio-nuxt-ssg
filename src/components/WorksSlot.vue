<script setup lang="ts">
import type { SwiperOptions } from "swiper/types"
import { register } from "swiper/element/bundle"
import { Autoplay, Pagination } from "swiper/modules"
import type { SwiperContainer } from "swiper/element"

register()

// https://swiperjs.com/element#parameters-as-props
const init = () => {
  const swiperEl = document.querySelector("#worksSwiper") as SwiperContainer

  const swiperParams: SwiperOptions = {
    slidesPerView: 1,
    pagination: {
      dynamicBullets: true,
    },
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 12000,
    },
    speed: 700,
    modules: [Autoplay, Pagination],
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
  <BaseSection
    id="works"
    title="Works"
    bg-color="bg-white"
  >
    <swiper-container
      id="worksSwiper"
      init="false"
    >
      <swiper-slide
        class="w-full object-cover"
      >
        <div class="bg-white rounded-lg  m-4 p-8 transition-transform duration-300 hover:scale-105">
          <div class="flex items-center mb-4">
            <svg
              class="w-10 h-10 mr-4 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h3 class="text-2xl font-semibold text-gray-700">
              物流の在庫管理アプリ
            </h3>
          </div>
          <p class="text-gray-600 mb-4">
            共通コンポーネントの開発を担当し、再利用性の高いコードを実現しました。慎重な仕様設計とパフォーマンスを意識しました。
          </p>
          <p class="text-indigo-600 font-semibold">
            技術スタック: Vue.js, Nuxt.js, Tailwind CSS
          </p>
        </div>
        <div class="bg-white rounded-lg  m-4 p-8 transition-transform duration-300 hover:scale-105">
          <div class="flex items-center mb-4">
            <svg
              class="w-10 h-10 mr-4 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <h3 class="text-2xl font-semibold text-gray-700">
              地図データ提供システムの開発
            </h3>
          </div>
          <p class="text-gray-600 mb-4">
            地図に気象情報や災害情報を重畳させるAPI開発を担当し、詳細な要件定義から運用保守まで幅広く対応しました。
          </p>
          <p class="text-indigo-600 font-semibold">
            技術スタック: JavaScript, PHP, SQL, Apache, Docker
          </p>
        </div>
      </swiper-slide>
      <swiper-slide
        class="w-full object-cover"
      >
        <div class="bg-white rounded-lg  m-4 p-8 transition-transform duration-300 hover:scale-105">
          <div class="flex items-center mb-4">
            <svg
              class="w-10 h-10 mr-4 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
            <h3 class="text-2xl font-semibold text-gray-700">
              RPA管理の業務アプリ
            </h3>
          </div>
          <p class="text-gray-600 mb-4">
            業務効率化を目的としたアプリケーション開発に携わり、クライアントの信頼を得て柔軟な対応を実現しました。
          </p>
          <p class="text-indigo-600 font-semibold">
            技術スタック: BizRobo!, C#, ShellScript, Laravel, Vue.js, Docker
          </p>
        </div>
        <div class="bg-white rounded-lg  m-4 p-8 transition-transform duration-300 hover:scale-105">
          <div class="flex items-center mb-4">
            <svg
              class="w-10 h-10 mr-4 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            <h3 class="text-2xl font-semibold text-gray-700">
              音声共有ナレッジアプリ
            </h3>
          </div>
          <p class="text-gray-600 mb-4">
            新しい技術を迅速にキャッチアップし、ユーザー体験を向上させるインターフェースを構築しました。
          </p>
          <p class="text-indigo-600 font-semibold">
            技術スタック: Laravel, Vue.js, Bootstrap, Nginx, Elastic Search, Docker
          </p>
        </div>
      </swiper-slide>
      <swiper-slide
        class="w-full object-cover"
      >
        <div class="bg-white rounded-lg  m-4 p-8 transition-transform duration-300 hover:scale-105">
          <div class="flex items-center mb-4">
            <svg
              class="w-10 h-10 mr-4 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h3 class="text-2xl font-semibold text-gray-700">
              ニュースサイトの運用保守開発
            </h3>
          </div>
          <p class="text-gray-600 mb-4">
            ニュースサイトにおける運用と保守開発を担当し、技術スタックの幅広さを活かして安定的なサービスを提供しました。
          </p>
          <p class="text-indigo-600 font-semibold">
            技術スタック: Laravel, CodeIgniter, SQL, jQuery, CSS, ElasticSearch, Apache, Jenkins
          </p>
        </div>
        <div class="bg-white rounded-lg  m-4 p-8 transition-transform duration-300 hover:scale-105">
          <div class="flex items-center mb-4">
            <svg
              class="w-10 h-10 mr-4 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 class="text-2xl font-semibold text-gray-700">
              医療コラムサイトの運用保守開発
            </h3>
          </div>
          <p class="text-gray-600 mb-4">
            医療コラムサイトにおける運用保守開発を通じて、ユーザー体験の向上と安定的な運用を支えました。
          </p>
          <p class="text-indigo-600 font-semibold">
            技術スタック: Laravel, Vue.js, Tailwind CSS
          </p>
        </div>
      </swiper-slide>
      <swiper-slide
        class="w-full object-cover"
      >
        <div class="bg-white rounded-lg  m-4 p-8 transition-transform duration-300 hover:scale-105">
          <div class="flex items-center mb-4">
            <svg
              class="w-10 h-10 mr-4 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
              <line
                x1="14"
                y1="6"
                x2="10"
                y2="18"
              />
            </svg>
            <h3 class="text-2xl font-semibold text-gray-700">
              プログラミングスクールでの講師業務
            </h3>
          </div>
          <p class="text-gray-600 mb-4">
            主に以下の技術内容において、メンターを担当しました。
          </p>
          <p class="text-indigo-600 font-semibold">
            技術スタック: PHP, Laravel, インターネット基礎
          </p>
        </div>
      </swiper-slide>
    </swiper-container>

    <!-- 幅広い工程に対応 -->
    <div class="mt-16 bg-g--200 p-8 rounded-lg text-center">
      <h3 class="text-3xl font-semibold text-gray-800 mb-4">
        幅広い工程に対応
      </h3>
      <p class="text-gray-600 max-w-3xl mx-auto">
        これらのプロジェクトでは、要件定義から運用保守まで一貫して対応し、技術スタックの幅広さやキャッチアップの速さを活かして、多様なニーズに応えてきました。
      </p>
    </div>
  </BaseSection>
</template>
