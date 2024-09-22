<script setup lang="ts">
interface Props {
  title: string
  description: string
  stack: string
  iconColor?: string
}

withDefaults(defineProps<Props>(), {
  iconColor: "text-indigo-500",
})
</script>

<template>
  <swiper-slide>
    <div class="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
      <div class="flex items-center mb-4">
        <svg
          :class="['w-10 h-10 mr-4', iconColor]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <slot name="icon" />
        </svg>
        <h3 class="text-2xl font-semibold text-gray-700">
          {{ title }}
        </h3>
      </div>
      <p class="text-gray-600 mb-4">
        {{ description }}
      </p>
      <p class="text-indigo-600 font-semibold">
        技術スタック: {{ stack }}
      </p>
    </div>
  </swiper-slide>
</template>
