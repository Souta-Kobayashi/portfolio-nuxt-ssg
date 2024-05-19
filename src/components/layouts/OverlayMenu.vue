<script setup lang="ts">
export interface Props {
  showMenu: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showMenu: false,
})

const hamburgerIconTopSpan = computed(() => ({
  "bg-stone-100": props.showMenu,
  // toggle
  "visible": props.showMenu,
  "invisible": !props.showMenu,
  "opacity-100": props.showMenu,
  "opacity-0": !props.showMenu,
}))
</script>

<template>
  <div
    class="transition-all duration-300 fixed top-0 left-0 w-full h-full py-[100px] px-[60px] text-center"
    :class="hamburgerIconTopSpan"
  >
    <nav>
      <ul>
        <li class="pt-4 text-left max-w-80 mx-auto">
          <a
            href="#"
          >
            <div class="flex gap-6 items-center">
              <img
                class="w-[30px] h-[30px]"
                src="~/public/images/overlay-about.svg"
                alt="このサイトについて"
              >
              <span>このサイトについて</span>
            </div>
          </a>
        </li>
        <li class="pt-4 text-left max-w-80 mx-auto">
          <a
            href="#"
          >
            <div class="flex gap-6 items-center">
              <img
                class="w-[30px] h-[30px]"
                src="~/public/images/overlay-test.svg"
                alt="サービス"
              >
              <span>サービス</span>
            </div>
          </a>
        </li>
        <li class="pt-4 text-left max-w-80 mx-auto">
          <a
            href="#"
          >
            <div class="flex gap-6 items-center">
              <img
                class="w-[30px] h-[30px]"
                src="~/public/images/overlay-work.svg"
                alt="制作一覧"
              >
              <span>制作一覧</span>
            </div>
          </a>
        </li>
        <li class="pt-4 text-left max-w-80 mx-auto">
          <a href="#">
            <div class="flex gap-6 items-center">
              <img
                class="w-[30px] h-[30px]"
                src="~/public/images/overlay-profile.svg"
                alt="プロフィール"
              >
              <span>プロフィール</span>
            </div>
          </a>
        </li>
        <li class="pt-4 text-left max-w-80 mx-auto">
          <a
            href="#"
          >
            <div class="flex gap-6 items-center">
              <img
                class="w-[30px] h-[30px]"
                src="~/public/images/overlay-contact.svg"
                alt="お問い合わせ"
              >
              <span>お問い合わせ</span>
            </div>
          </a>
        </li>
        <li class="pt-4 text-left max-w-80 mx-auto">
          <a
            href="#"
          >
            <div class="flex gap-6 items-center">
              <img
                class="w-[30px] h-[30px]"
                src="~/public/images/overlay-x.svg"
                alt="X"
              >
              <span>X</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
