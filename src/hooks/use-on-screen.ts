import { type RefObject, useEffect, useState } from "react"

export default function useOnScreen<T extends HTMLElement>(
  ref: RefObject<T>,
  rootMargin = "0px 0px -50% 0px"
): { isVisible: boolean; isAboveScreen: boolean; isBelowScreen: boolean } {
  const [isVisible, setIsVisible] = useState(false)
  const [isAboveScreen, setIsAboveScreen] = useState(false)
  const [isBelowScreen, setIsBelowScreen] = useState(false)

  useEffect(() => {
    if (ref.current == null) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const entryYcoordinate = entry.boundingClientRect.y
        const rootYcoordinate = entry.rootBounds?.y

        if (entryYcoordinate < 0) {
          setIsAboveScreen(true)
        } else {
          setIsAboveScreen(false)
        }

        if (entryYcoordinate > (rootYcoordinate as number)) {
          setIsBelowScreen(true)
        } else {
          setIsBelowScreen(false)
        }

        setIsVisible(entry.isIntersecting)
      },
      { rootMargin, threshold: 1 }
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current == null) return
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.unobserve(ref.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, rootMargin])

  return { isVisible, isAboveScreen, isBelowScreen }
}
