<script setup lang="ts">

</script>

<template>
  <BaseSection
    id="contact"
    title="Contact"
    bg-color="bg-white"
  >
    <form class="space-y-4">
      <div>
        <label
          for="name"
          class="block text-lg font-medium mb-2"
        >名前</label>
        <input
          id="name"
          type="text"
          class="w-full p-2 border border-gray-300 rounded"
        >
      </div>
      <div>
        <label
          for="email"
          class="block text-lg font-medium mb-2"
        >メールアドレス</label>
        <input
          id="email"
          type="email"
          class="w-full p-2 border border-gray-300 rounded"
        >
      </div>
      <div>
        <label
          for="message"
          class="block text-lg font-medium mb-2"
        >メッセージ</label>
        <textarea
          id="message"
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded">
        送信
      </button>
    </form>
  </BaseSection>
</template>
