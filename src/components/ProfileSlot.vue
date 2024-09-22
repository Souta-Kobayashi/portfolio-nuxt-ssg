<script setup lang="ts">

</script>

<template>
  <BaseSection
    id="profile"
    title="Profile"
    bg-color="bg-gray-100"
  >
    <!-- プロフィール概要 -->
    <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12">
      <div class="flex-shrink-0">
        <NuxtImg
          src="/images/icon_circle.webp"
          alt="Profile"
          class="w-32 h-32 rounded-full shadow-lg mb-6 lg:mb-0 lg:mr-8"
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 400px"
          placeholder
          loading="lazy"
        />
      </div>
      <div class="text-center lg:text-left">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          リードエンジニア
        </h2>
        <p class="text-lg text-gray-700 mb-4">
          ZeroOne Scriptの創設者であり、リードエンジニアとして活動しています。ウェブ開発における豊富な経験を持ち、最先端の技術を駆使してクライアントのビジネスを成功に導いています。
        </p>
        <p class="text-lg text-gray-700 mb-4">
          フロントエンドおよびバックエンドの開発を専門とし、効率的かつスケーラブルなシステムを設計・構築することに情熱を持っています。常に新しい技術を学び、プロジェクトに最適なソリューションを提供することを心掛けています。
        </p>
      </div>
    </div>

    <!-- 詳細なスキルセクション -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- フロントエンド開発 -->
      <div class="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
        <div class="flex items-center mb-4">
          <!-- フロントエンドアイコン（アウトライン版） -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-blue-500 mr-3 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-label="フロントエンド開発"
            role="img"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              ry="2"
            />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
          <h4 class="text-xl font-semibold text-gray-800">
            フロントエンド開発
          </h4>
        </div>
        <ul class="text-gray-700 space-y-2">
          <li>
            <span class="font-semibold text-gray-800">言語:</span> JavaScript, TypeScript
          </li>
          <li>
            <span class="font-semibold text-gray-800">フレームワーク:</span> Vue.js, Nuxt.js
          </li>
          <li>
            <span class="font-semibold text-gray-800">スタイル:</span> Tailwind CSS, SCSS
          </li>
          <li>
            <span class="font-semibold text-gray-800">ビルドツール:</span> Vite, Webpack
          </li>

          <li><span class="font-semibold text-gray-800">テスト:</span> Vitest（コンポーネントテスト, IT）</li>
        </ul>
      </div>

      <!-- バックエンド開発 -->
      <div class="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
        <div class="flex items-center mb-4">
          <!-- バックエンドアイコン（サーバーを表すアイコンに変更） -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-red-500 mr-3 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-label="バックエンド開発"
            role="img"
          >
            <rect
              x="2"
              y="3"
              width="20"
              height="8"
              rx="2"
              ry="2"
            />
            <rect
              x="2"
              y="13"
              width="20"
              height="8"
              rx="2"
              ry="2"
            />
            <line
              x1="6"
              y1="7"
              x2="6"
              y2="7"
            />
            <line
              x1="6"
              y1="17"
              x2="6"
              y2="17"
            />
          </svg>
          <h4 class="text-xl font-semibold text-gray-800">
            バックエンド開発
          </h4>
        </div>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <span class="font-semibold text-gray-800">言語:</span> Node.js
          </li>
          <li>
            <span class="font-semibold text-gray-800">フレームワーク:</span> Express, NestJS
          </li>
          <li>
            <span class="font-semibold text-gray-800">API設計:</span> RESTful, GraphQL
          </li>
          <li>
            <span class="font-semibold text-gray-800">クラウドサービス:</span> AWS, Azure, GCP
          </li>
        </ul>
      </div>

      <!-- Web開発 -->
      <div class="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
        <div class="flex items-center mb-4">
          <!-- Web開発アイコン（アウトライン版） -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-green-500 mr-3 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-label="Web開発"
            role="img"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            />
            <line
              x1="2"
              y1="12"
              x2="22"
              y2="12"
            />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <h4 class="text-xl font-semibold text-gray-800">
            Web開発
          </h4>
        </div>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <span class="font-semibold text-gray-800">CMS:</span> WordPress
          </li>
          <li>
            <span class="font-semibold text-gray-800">テーマ開発:</span> カスタムテーマ制作
          </li>
          <li>
            <span class="font-semibold text-gray-800">プラグイン開発:</span> オリジナルプラグイン作成
          </li>
          <li>
            <span class="font-semibold text-gray-800">サイト構築:</span> 企業・個人向けサイト
          </li>
        </ul>
      </div>

      <!-- データベース管理 -->
      <div class="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
        <div class="flex items-center mb-4">
          <!-- データベースアイコン（中央の線を曲線に変更） -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-yellow-500 mr-3 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-label="データベース管理"
            role="img"
          >
            <ellipse
              cx="12"
              cy="5"
              rx="9"
              ry="3"
            />
            <path d="M3 5v6a9 3 0 0 0 18 0V5" />
            <path d="M3 11v6a9 3 0 0 0 18 0V11" />
          </svg>

          <h4 class="text-xl font-semibold text-gray-800">
            データベース管理
          </h4>
        </div>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <span class="font-semibold text-gray-800">データベース:</span> MySQL, MongoDB
          </li>
          <li>
            <span class="font-semibold text-gray-800">データモデリング:</span> 正規化、インデックス設計
          </li>
          <li>
            <span class="font-semibold text-gray-800">パフォーマンス最適化:</span> クエリチューニング
          </li>
        </ul>
      </div>

      <!-- DevOps -->
      <div class="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
        <div class="flex items-center mb-4">
          <!-- DevOpsアイコン（無限大マークに変更） -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-indigo-500 mr-3 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>

          <h4 class="text-xl font-semibold text-gray-800">
            DevOps
          </h4>
        </div>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <span class="font-semibold text-gray-800">CI/CDツール:</span> GitHub Actions
          </li>
          <li>
            <span class="font-semibold text-gray-800">コンテナ技術:</span> Docker
          </li>
          <li>
            <span class="font-semibold text-gray-800">自動テストと統合:</span> 自動テストの作成及びCIパイプラインへの組み込み
          </li>
        </ul>
      </div>
    </div>
  </BaseSection>
</template>
