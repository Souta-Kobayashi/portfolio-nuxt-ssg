/**
 * これは説明文です
 * @returns returnのことを詳細に記載する
 */
export function useIntersectionObserver() {
  let observer: IntersectionObserver
  const isIntersecting = ref(false)

  const initializeObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isIntersecting.value = true
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
  }

  const startObserve = (Element: HTMLElement) => {
    observer.observe(Element)
  }

  return {
    isIntersecting: readonly(isIntersecting),
    initializeObserver,
    startObserve,
  }
}
