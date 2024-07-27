<script setup lang="ts">
import { useIntersectionObserver } from "~/composables/useIntersectionObserver"

defineProps<{
  title: string
  bgColor: string
}>()

const { isIntersecting, initializeObserver, startObserve } = useIntersectionObserver()
const sectionRef = ref<HTMLElement | null>(null)

onBeforeMount(() => {
  initializeObserver()
})

onMounted(() => {
  if (sectionRef.value) startObserve(sectionRef.value)
})
</script>

<template>
  <section
    ref="sectionRef"
    :class="[bgColor, isIntersecting ? 'move-up' : 'initial-hidden']"
    class="py-12"
  >
    <div
      class="container mx-auto px-4"
    >
      <h2 class="text-3xl font-bold mb-4 text-indigo-600 border-b-2 border-indigo-600 pb-2">
        {{ title }}
      </h2>
      <slot />
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
// /* ベーススタイル */
// body {
//   @apply bg-gray-100 text-gray-800 font-sans;
// }

// /* 見出し */
// h2 {
//   @apply text-3xl font-bold mb-4;
//   padding-bottom: 0.5rem;
// }

// /* テキスト */
// p, ul {
//   @apply text-lg leading-relaxed;
// }

// /* ボタン */
// button {
//   @apply mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded;
// }

// /* コンテナ */
// // .container {
// //   @apply mx-auto px-4;
// // }
</style>
