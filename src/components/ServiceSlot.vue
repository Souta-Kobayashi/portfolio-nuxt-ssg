<script setup lang="ts">

</script>

<template>
  <BaseSection
    id="service"
    title="Service"
    bg-color="bg-white"
  >
    <div class="grid gap-12 lg:grid-cols-2">
      <!-- サービス概要 -->
      <div class="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-[1.03]">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-green-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          サービス概要
        </h3>
        <p class="leading-relaxed text-gray-600 mb-6">
          Web開発を中心に、要件定義からリリース後の保守運用まで包括的に対応しています。これまでの実績として、特に以下のサービスの開発に携わってまいりました：
        </p>
        <ul class="space-y-4">
          <li class="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-blue-500 mr-4 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <div>
              <h4 class="font-semibold text-gray-800">
                SaaS開発
              </h4>
              <p class="text-gray-600">
                スケーラブルなアーキテクチャ設計とモジュール化された機能を開発し、クライアントの要求に合わせたSaaSアプリケーションを開発します。
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-purple-500 mr-4 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <div>
              <h4 class="font-semibold text-gray-800">
                物流倉庫の在庫管理システム
              </h4>
              <p class="text-gray-600">
                DDDを用いて業務効率化と正確な在庫管理を実現するシステムを開発。
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-red-500 mr-4 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
            <div>
              <h4 class="font-semibold text-gray-800">
                音声型ナレッジ共有サービス
              </h4>
              <p class="text-gray-600">
                音声情報を蓄積、共有するプラットフォームを開発。
              </p>
            </div>
          </li>
        </ul>
      </div>

      <!-- 強みとアプローチ -->
      <div class="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-[1.03]">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-green-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          強みとアプローチ
        </h3>
        <p class="leading-relaxed text-gray-600 mb-6">
          技術の進化に伴い、システムとクライアントのニーズはますます複雑化しています。しかし、私はその複雑さをシンプルに整理し、クライアントが理解しやすい形に仕上げることを大切にしています。
        </p>
        <ul class="space-y-4">
          <li class="bg-gray-50 rounded-lg p-4 shadow transition-colors duration-300 hover:bg-gray-100">
            <h4 class="font-semibold text-gray-800 mb-2">
              リリース後の保守を考慮した最適なアーキテクチャ設計
            </h4>
            <p class="text-gray-600">
              長期的な視点でメンテナンスしやすいシステムを構築。
            </p>
          </li>
          <li class="bg-gray-50 rounded-lg p-4 shadow transition-colors duration-300 hover:bg-gray-100">
            <h4 class="font-semibold text-gray-800 mb-2">
              クライアントとの信頼関係を重視
            </h4>
            <p class="text-gray-600">
              要求に応えるだけでなく、安心して任せられるパートナーシップを築きます。
            </p>
          </li>
        </ul>
      </div>
    </div>

    <!-- クライアントからの声 -->
    <div class="mt-12 bg-white shadow-lg rounded-lg p-8 text-center transition-transform duration-300 hover:scale-[1.03]">
      <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-blue-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        クライアントからの声
      </h3>
      <p class="leading-relaxed text-gray-600 text-lg italic">
        "あなたに任せてよかった"
      </p>
      <p class="mt-4 text-gray-600">
        この言葉をいただくことが多く、それが私にとっての最大の誇りです。サービス開発を通じて、クライアントに満足と納得を提供します。
      </p>
    </div>
  </BaseSection>
</template>
