<script setup lang="ts">
interface Props {
  isOverlayVisible: boolean
}

withDefaults(defineProps<Props>(), {
  isOverlayVisible: false,
})
const emit = defineEmits<{
  hideOverlay: []
}>()

const closeOverlay = () => {
  emit("hideOverlay")
}
</script>

<template>
  <transition name="overlay-fade">
    <div
      v-if="isOverlayVisible"
      class="overlay"
    >
      <div class="bg-slate-50 p-5 text-center rounded-lg w-3/4">
        <img
          class="svg-image mx-auto mb-3"
          src="~/public/images/check-circle.svg"
          alt="プロフィール"
        >
        <p class="mb-3">
          送信が完了しました。
        </p>
        <p class="mb-3">
          お問い合わせいただき、ありがとうございました。
        </p>
        <button
          class="block w-full py-3 rounded-lg transition duration-200 border border-gray-400"
          @click="closeOverlay"
        >
          閉じる
        </button>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
/* トランジションの設定 */
.overlay-fade-enter-active, .overlay-fade-leave-active {
  transition: opacity 0.5s ease;
}

.overlay-fade-enter-from, .overlay-fade-leave-to {
  opacity: 0;
}

/* オーバーレイのスタイル */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明の黒 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.svg-image {
  width: 80px;
  height: 80px;
}
</style>
