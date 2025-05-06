import { type MutableRefObject, useEffect, useRef, useState } from "react"

interface IntersectionObserverOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

export function useIntersectionObserver(
  options: IntersectionObserverOptions = {},
  enabled = true
): [MutableRefObject<unknown>, boolean] {
  const { root = null, rootMargin = "0px", threshold = 0 } = options
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<Element | null>(null)

  useEffect(() => {
    if (!enabled || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { root, rootMargin, threshold }
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [root, rootMargin, threshold, enabled])

  return [ref, isIntersecting]
}
