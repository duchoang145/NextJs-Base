import { useEffect } from "react"

export function useScrollToBottom({
  element,
  callBack,
  dependencies = [],
}: {
  element: HTMLElement
  callBack: () => void
  dependencies?: unknown[]
}) {
  useEffect(() => {
    if (!element) {
      return
    }
    // Attach a scroll event listener
    const handleScroll = () => {
      if (element.scrollTop + element.clientHeight === element.scrollHeight) {
        callBack()
      }
    }
    if (element) {
      element.addEventListener("scroll", handleScroll)
    }
    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll)
      }
    }
    // biome-ignore lint: <explanation>
  }, [element, callBack, dependencies])
}
