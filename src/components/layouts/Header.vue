<script setup lang="ts">
const showMenu = ref(false)
const hamburgerIconTopSpan = computed(() => ({
  "origin-center": showMenu.value,
  "rotate-45": showMenu.value,
  "top-0": !showMenu.value,
  "top-[10px]": showMenu.value,
}))

const hamburgerIconMiddleSpan = computed(() => ({
  "opacity-0": showMenu.value,
}))

const hamburgerIconBottomSpan = computed(() => ({
  "origin-center": showMenu.value,
  "-rotate-45": showMenu.value,
  "top-[14px]": !showMenu.value,
  "top-[10px]": showMenu.value,
}))

const headerRef = ref<HTMLElement | null>(null)

const scrollToSection = (id: string) => {
  showMenu.value = false
  const element = document.getElementById(id)
  if (element && headerRef.value) {
    const headerHeight = headerRef.value.offsetHeight
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}
</script>

<template>
  <header
    ref="headerRef"
    class="font-extralight bg-slate-100 h-16 fixed top-0 left-0 right-0 z-[100] shadow-lg"
  >
    <div class="px-8 m-auto max-w-screen-xl h-full flex justify-between items-center">
      <div class="text-3xl tracking-wide">
        <a href="/">ZeroOne Script</a>
      </div>
      <nav>
        <ul class="hidden lg:flex gap-8 items-center">
          <li>
            <a
              href="#about"
              class="text-xl"
              @click.prevent="scrollToSection('about')"
            >About</a>
          </li>
          <li>
            <a
              href="#service"
              class="text-xl"
              @click.prevent="scrollToSection('service')"
            >Service</a>
          </li>
          <li>
            <a
              href="#works"
              class="text-xl"
              @click.prevent="scrollToSection('works')"
            >Works</a>
          </li>
          <li>
            <a
              href="#profile"
              class="text-xl"
              @click.prevent="scrollToSection('profile')"
            >Profile</a>
          </li>
          <li>
            <a
              href="#contact"
              class="text-xl"
              @click.prevent="scrollToSection('contact')"
            >Contact</a>
          </li>
          <li>
            <a
              href="#"
              class="text-xl"
            ><img
              class="w-[20px] h-[20px]"
              src="~/public/images/overlay-x.svg"
              alt="X"
            ></a>
          </li>
        </ul>
      </nav>
      <div class="cursor-pointer w-[35px] h-[25px]">
        <div
          class="cursor-pointer lg:hidden w-[30px] h-[20px] absolute right-[32px] top-[24px] z-[300]"
          @click="showMenu = !showMenu"
        >
          <span
            class="transition-all duration-300 block w-[27px] h-[2px] bg-slate-800 absolute"
            :class="hamburgerIconTopSpan"
          />
          <span
            class="transition-all duration-300 block w-[27px] h-[2px] bg-slate-800 absolute top-[7px]"
            :class="hamburgerIconMiddleSpan"
          />
          <span
            class="transition-all duration-300 block w-[27px] h-[2px] bg-slate-800 absolute"
            :class="hamburgerIconBottomSpan"
          />
        </div>
      </div>
    </div>
    <LayoutsOverlayMenu
      :show-menu="showMenu"
      @scroll-to-section="scrollToSection"
    />
  </header>
</template>
