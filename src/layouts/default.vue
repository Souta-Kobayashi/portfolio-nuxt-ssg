<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bg-slate-200 text-slate-800",
  },
})
</script>

<template>
  <LayoutsHeader />
  <main class="mt-16">
    <slot />
  </main>
</template>
