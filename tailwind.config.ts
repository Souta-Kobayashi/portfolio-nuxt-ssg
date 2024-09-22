import type { Config } from "tailwindcss"

export default <Partial<Config>>{
  // contentはnuxtモジュールのデフォルト値を使用する。contentはmergeされるので完全に上書きはされない
  // https://tailwindcss.nuxtjs.org/tailwind/config#merging-strategy
  // content: [],
  theme: {
    extend: {
      colors: {
        primary: "#00D3B0",
        secondary: "#78978D",
        tertiary: "#6D96B1",
        error: "#FF5449",
        neutral: "#8E918F",
        neutralValiant: "#89938F",
        test: "#89938F",
      },
    },
  },
}
