export const useScrollToSection = () => {
  let scrollHeader: HTMLElement | null = null

  const setScrollHeader = (headerDom: HTMLElement) => {
    scrollHeader = headerDom
  }
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element && scrollHeader) {
      const headerHeight = scrollHeader.offsetHeight
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return {
    setScrollHeader,
    scrollToSection,
  }
}
