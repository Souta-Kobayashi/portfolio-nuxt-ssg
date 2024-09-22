<script setup lang="ts">

</script>

<template>
  <BaseSection
    id="profile"
    title="Profile"
    bg-color="bg-gray-100"
  >
    <div class="flex flex-col md:flex-row items-center">
      <img
        src="~/public/images/first-view-1.jpg"
        alt="Profile"
        class="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-4"
      >
      <div>
        <h3 class="text-xl font-semibold mb-2">
          リードエンジニア
        </h3>
        <p class="text-base leading-relaxed mb-4">
          ZeroOne Scriptの創設者であり、リードエンジニアとして活動しています。私は、ウェブ開発における豊富な経験を持ち、最先端の技術を駆使してクライアントのビジネスを成功に導いています。
        </p>
        <p class="text-base leading-relaxed mb-4">
          私の専門分野はフロントエンドおよびバックエンドの開発であり、効率的かつスケーラブルなシステムを設計・構築することに情熱を持っています。常に新しい技術を学び、プロジェクトに最適なソリューションを提供することを心掛けています。
        </p>
        <p class="text-base leading-relaxed mb-4">
          使用している技術は以下の通りです：
        </p>
        <ul class="list-disc list-inside text-base leading-relaxed">
          <li>HTML5, CSS3, SCSS</li>
          <li>JavaScript (ES6+), TypeScript</li>
          <li>Vue.js, Nuxt.js</li>
          <li>React, Next.js</li>
          <li>Node.js, Express</li>
          <li>MongoDB, MySQL</li>
          <li>GraphQL, REST API</li>
          <li>Docker, Kubernetes</li>
          <li>Git, GitHub, GitLab</li>
          <li>CI/CDパイプライン (Jenkins, GitHub Actions)</li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-2xl font-semibold mb-2">
          フロントエンド開発
        </h3>
        <ul class="list-disc list-inside text-lg leading-relaxed">
          <li>Vue.jsおよびNuxt.js</li>
          <li>Tailwind CSS, Bootstrap</li>
          <li>カスタムCSS/SCSS</li>
          <li>Webpack, Vite</li>
          <li>テスト基盤構築と実行（ユニットテスト, E2Eテスト）</li>
        </ul>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-2">
          Web開発
        </h3>
        <ul class="list-disc list-inside text-lg leading-relaxed">
          <li>WordPressを使用したカスタムサイト開発</li>
          <li>企業および個人向けサイト構築</li>
        </ul>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-2">
          バックエンド開発
        </h3>
        <ul class="list-disc list-inside text-lg leading-relaxed">
          <li>RESTful API設計と実装</li>
          <li>クラウドサービス（AWS, Azure, GCP）</li>
        </ul>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-2">
          データベース管理
        </h3>
        <ul class="list-disc list-inside text-lg leading-relaxed">
          <li>MySQLデータベース設計および管理</li>
        </ul>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-2">
          DevOps
        </h3>
        <ul class="list-disc list-inside text-lg leading-relaxed">
          <li>GitHub Actionsを使用したCI/CDパイプライン</li>
        </ul>
      </div>
    </div>
  </BaseSection>
</template>
