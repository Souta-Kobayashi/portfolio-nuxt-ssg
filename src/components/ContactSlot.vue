<script setup lang="ts">
import type { SendMessageResponse } from "~/types"

const emit = defineEmits<{
  showOverlay: []
}>()

const name = ref("")
const email = ref("")
const message = ref("")
const isLoading = ref(false)
const errorMessage = ref("")

const clearForm = () => {
  name.value = ""
  email.value = ""
  message.value = ""
}

/**
 * メッセージを送信する
 */
const sendMessage = async () => {
  isLoading.value = true
  errorMessage.value = ""

  try {
    const result = await $fetch<Promise<SendMessageResponse>>("/api/sendMessage", {
      method: "POST",
      body: {
        name: name.value,
        email: email.value,
        message: message.value,
      },
    })

    if (result.success && result.data === "ok") {
      clearForm()
      emit("showOverlay")
    }
    else {
      errorMessage.value = "メッセージの送信に失敗しました。時間をおいて再度送信してください。"
    }
  }
  catch (error) {
    errorMessage.value = "想定外のエラーが発生しました。時間をおいて再度送信してください。"
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <BaseSection
    id="contact"
    title="Contact"
    bg-color="bg-white"
  >
    <div class="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
      <p class="text-center mb-8">
        ご質問・お見積もり等、お気軽にお問い合わせフォームよりご連絡ください。<br>
        24時間以内にご返信いたします。
      </p>
      <form
        class="space-y-4"
        @submit.prevent="sendMessage"
      >
        <div>
          <label
            for="name"
            class="block text-lg font-medium text-gray-700 mb-1"
          >名前<span class="text-red-500">*</span></label>
          <input
            id="name"
            v-model="name"
            type="text"
            required
            class="block border w-full p-3 border-gray-400 rounded-md focus:outline-none focus:border-indigo-500 transition duration-200"
          >
        </div>
        <div>
          <label
            for="email"
            class="block text-lg font-medium text-gray-700 mb-1"
          >メールアドレス<span class="text-red-500">*</span></label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="block border w-full p-3 border-gray-400 rounded-md focus:outline-none focus:border-indigo-500 transition duration-200"
          >
        </div>
        <div>
          <label
            for="message"
            class="block text-lg font-medium text-gray-700 mb-1"
          >お問い合わせ内容<span class="text-red-500">*</span></label>
          <textarea
            id="message"
            v-model="message"
            class="block border w-full p-3 border-gray-400 rounded-md focus:outline-none focus:border-indigo-500 transition duration-200"
            required
            rows="10"
          />
        </div>
        <button
          type="submit"
          class="w-full mx-auto py-4 text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 active:bg-purple-700 text-white rounded-full shadow-lg active:shadow-none transition duration-300 ease-in-out transform active:scale-95 flex items-center justify-center space-x-2"
          :disabled="isLoading"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3 "
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>送信する</span>
        </button>
      </form>

      <div
        v-if="isLoading"
        class="loading-spinner"
      />

      <div
        v-if="errorMessage"
        class="error-message"
      >
        {{ errorMessage }}
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.loading-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.error-message {
  color: red;
  font-weight: bold;
}

button:disabled {
  background-color: rgb(165 180 252 / var(--tw-bg-opacity)); /* bg-indigo-300 に相当する色 */
  cursor: not-allowed; /* 無効化時のカーソルを表示 */
  opacity: 0.7; /* 無効化された感を出すために透明度を追加 */
}
</style>
