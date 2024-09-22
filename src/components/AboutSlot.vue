<script setup lang="ts"></script>

<template>
  <BaseSection
    id="about"
    title="About"
    bg-color="bg-white"
  >
    <div class="bg-white text-center shadow-lg rounded-lg p-8 transition-transform duration-300 hover:scale-[1.02]">
      <div class="flex flex-col md:flex-row items-center mb-5 md:mb-8">
        <div class="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="~/public/images/sitting-6897751_1280.jpg"
            alt="Binary code representing ZeroOne Script"
            class="rounded-lg shadow-md w-full h-auto"
            loading="lazy"
          >
        </div>
        <div class="w-full md:w-1/2 md:pl-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-700">
            ZeroOne Scriptの理念
          </h2>
          <p class="text-gray-600">
            ZeroOne Scriptは、<span class="font-bold text-blue-600">`0`</span>と<span class="font-bold text-blue-600">`1`</span>が世界を形作るという意味が込められています。
          </p>
        </div>
      </div>
      <div class="space-y-6">
        <p class="text-gray-600">
          テクノロジーが日々進化を続ける中で、システムもクライアントのニーズも複雑化しています。
        </p>
        <p class="text-gray-600">
          しかし、だからこそわかりやすく要点を整理して提案することこそが、真に求められる姿だと考えています。
        </p>
        <p class="text-gray-600">
          私は、複雑なテクノロジーをシンプルに整理し、クライアントが理解しやすい形に仕上げます。わかりやすさと正確さを大切にしながら、ビジネスの成長を共に目指します。
        </p>
      </div>
      <div class="mt-8 bg-gray-200 p-6 rounded-lg">
        <p class="text-xl font-semibold text-center text-gray-700">
          <span class="text-blue-600">`0`</span>と<span class="text-blue-600">`1`</span>の論理を基に、共に未来を構築しましょう。
        </p>
      </div>
    </div>
  </BaseSection>
</template>
