import { useEffect, useState } from "react"

export function useDebounce(value: string | number, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState<unknown>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
