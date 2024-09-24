<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bg-slate-200 text-slate-800",
    style: "font-family: 'Roboto', sans-serif;",
  },
})
</script>

<template>
  <LayoutsHeader />
  <main class="mt-16">
    <slot />
  </main>
</template>
